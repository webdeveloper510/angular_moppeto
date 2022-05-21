import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomSubscriptionComponent } from 'src/app/shared/custom-subscription/custom-subscription.component';
import {VendorSubscriptionService} from "../../../services/subscription/vendor_subscription.service"
import {DataService} from "../../../shared/data/data.service"
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-vendor-subscription',
  templateUrl: './vendor-subscription.component.html',
  styleUrls: ['./vendor-subscription.component.scss']
})
export class VendorSubscriptionComponent implements OnInit {

  country = [];
  // 'A country', 'B country', 'C country', 'D country', 'E country', 'F country', 'G country', 'H country', 'I country', 'J country'
  subscription: String[] = ['ALL'];
  status = ['ALL', 'ACTIVE', 'SENT', 'EXPIRED'];
  isEdit: boolean = true;
  subscriptionObject;

  checkboxGroup = {
    val1: true,
    val2: true,
    val3: true,
    val4: false,
    val5: true
  }

  demoTable = [
    {
      status: 'active',
      editMode: true
    }
  ]

  filter = {
    country: "",
    type: "",
    status: ""
  }

  interval=[];
  pagination;
  error=[];


  constructor(private dialog: MatDialog, private ven_services: VendorSubscriptionService, private _dataService: DataService,private paginationService: PaginationService) { }

  ngOnInit(): void {
    this._dataService.getUpdateVendeor$.subscribe(updateData => {
      if (updateData.active) {
        console.log(updateData, "updateData");
        this.ven_services.planRequestUpdate(updateData.data.subscriptionObject.subscription).subscribe(res => {
          console.log(res)
          if (res){
            this._dataService.SaveUpdateDataForVendor(
              {
                active: false,
                data: {}
              }
            );
            this.getVSubList();
          }
        })
      }
    })
    this.getVSubList();
    this.ven_services.getCountry().subscribe((res) => {
      if (res) {
        for (let r=0; r<res.length; r++) {
          if (res[r] && res[r]['name']) {
            this.country.push(res[r]['name']);
          }
        }
      }
      
    }, error => {
      console.error(error);
    })

    this.ven_services.getVendorSubscriptionType().subscribe((res) => {
      console.log(res);
      if (res) {
        this.subscription = this.subscription.concat(res);
      }
    })

  }

  getVSubList() {
    if (this.interval.length>0) {
      for (let int=0; int < this.interval.length; int++) {
        clearInterval(this.interval[int]);
      }
    }
    this.ven_services.getSubList(this.filter).subscribe(async(res) => {
      console.log(res);
      // if (res && res.results) {
      //   this.pagination =  res;
      //   this.paginationService.setPaginationData(this.pagination);
      // }
      if (res) {
        this.demoTable=[];
        this.demoTable = res
        // res.results;
        this.demoTable = await this.demoTable.map(e => ({editMode: true, hours: 0, minutes:0,seconds:0,  ...e} ));
        await this.setCustomTimer(this.demoTable);
      }
    }, error => {
      console.log(error);
    })
  }

  async setCustomTimer (data) {
    // let data = this.demoTable;
    if (data && data.length>0) {
      // console.log("entry settime")
      for (let i=0; i<data.length;i++) {
        if (data[i] && data[i]['email_sent_at'] && data[i]['subscription']['subscription_type']=='CUSTOM' && data[i]['status']=='SENT') {
          let expiredDate = this._HoursAdd(data[i]['email_sent_at'], 48);
          // console.log(expiredDate, "email_sent_at with expireddate");
          let id = data[i]['id'];
          this.error[id] = {active: false, msg: null}
          this.interval[id] = setInterval(() => {
            let totalSeconds = Math.floor((new Date(expiredDate).getTime() - new Date().getTime())/ 1000);
            let MainExpiredTime = totalSeconds;
            let hours = 0;
            let minutes = 0;
            let seconds = 0;

            if (MainExpiredTime >= 3600) {
              hours = Math.floor(MainExpiredTime / 3600);      
              MainExpiredTime -= 3600 * hours;      
            }
          
            if (MainExpiredTime >= 60) {
              minutes = Math.floor(MainExpiredTime / 60);
              MainExpiredTime -= 60 * minutes;
            }
          
            seconds = MainExpiredTime;

            if (this.demoTable[i] && hours && minutes && seconds) {
              this.demoTable[i]['hours'] = hours;
              this.demoTable[i]['minutes'] = minutes;
              this.demoTable[i]['seconds'] = seconds;
              // console.log(this.demoTable[i], "for test time")
            }

            if (totalSeconds <= 0) {
              clearInterval(this.interval[id]);
              this.error[id] = {
                active: true,
                msg: "Expired"
              }
              this.cancelCustomSub(id)
            }
          },1000)
          // return true;
        } else {
          // return false;
        }
      }
      
    }
  }

  editPricing(i) {
    this.demoTable[i].editMode = false;
    this.isEdit = false;
  }
  cancelEditPricing(i) {
    this.demoTable[i].editMode = true;
    this.isEdit = true;
  }

  callCustomSubscription(data?, i?) {
    const dialogRef = this.dialog.open(CustomSubscriptionComponent, {
      data: {
        ...data,
        paymentTextOuter1: true
      },
      panelClass: ['customDialogClassCustomSubscription']
    });
    dialogRef.afterClosed().subscribe((dialogResult) => {
      console.log(dialogResult);
      if(dialogResult){
        this.cancelEditPricing(i);
      }
    });
  }

  onVendorNameOrCodeChange(){
    let radios = document.querySelectorAll("input[type='radio']") as NodeListOf<HTMLInputElement>;
    if(radios){
      radios.forEach((item)=>{
        item.checked=false
      })
    }
  }

  setSubType (data, key, subKey) {
    
    if (data[key]) {
      return data[key][subKey] ? data[key][subKey] : "-";
    }
  }

  changeFilter (data, key) {
    if (data && key && key == "status" && data == "ACTIVE") {
      data = "CURRENT";
      this.filter[key] = data;
    } else if (data && key) {
      this.filter[key] = data;
    }
  }

  search() {
    if (this.filter) {
      this.getVSubList();
    }
  }

  NextEditPricing (id) {
    
    if (this.demoTable[id] && this.demoTable[id]['subscription']) {
      console.log(this.demoTable[id]['subscription']['price_per_month']);
      let price = this.demoTable[id]['subscription']['price_per_month'];
      let dataID = this.demoTable[id]['id'];
      this.setUpdateObject(this.demoTable[id]);
      this.ven_services.remaining_payable(price, dataID).subscribe(res => {
        console.log(res);
        if (res) {
          let data = {
            vendorName: this.demoTable[id]['vendor'],
            vendorID: this.demoTable[id]['vendor_code'],
            vendorINR: price,
            vendorINR2: res.remaining_payable,
            subscriptionObject: this.subscriptionObject
          }
          this.ven_services.payment_link(dataID).subscribe(link => {
            if (link) {
              data['paymentLink'] = link.payment_link;
              this.callCustomSubscription(data, id);
            }
          })
        }
      }) 
    }
  }

  setUpdateObject (data) {
    this.subscriptionObject = {
      subscription: {
        "id": data.id,
        "price_per_month": data.subscription ? data.subscription.price_per_month: null,
        "no_of_locations":  data.subscription ? data.subscription.no_of_locations: null,
        "no_of_subadmins": data.subscription ? data.subscription.no_of_subadmins: null,
        "has_trial_class": data.subscription ? data.subscription.has_trial_class: null,
        "has_promotions": data.subscription ? data.subscription.has_promotions: null,
        "has_reports": data.subscription ? data.subscription.has_reports: null,
        "has_dashboard": data.subscription ? data.subscription.has_dashboard: null,
        "has_term_renewal": data.subscription ? data.subscription.has_term_renewal: null,
        "term_no_of_activities": data.term_no_of_activities ? data.term_no_of_activities : null,
        "term_slots_per_session": data.term_slots_per_session ? data.term_slots_per_session : null,
        "term_sessions_per_term": data.term_sessions_per_term ? data.term_sessions_per_term : null,
        "open_no_of_activities": data.open_no_of_activities ? data.open_no_of_activities : null,
        "open_slots_per_session": data.open_slots_per_session ? data.open_slots_per_session : null,
        "open_sessions_per_term": data.open_sessions_per_term ? data.open_sessions_per_term : null,
        "day_access_no_of_activities": data.day_access_no_of_activities ? data.day_access_no_of_activities : null,
        "day_access_sessions_per_term": data.day_access_sessions_per_term ? data.day_access_sessions_per_term : null,
        "fixed_no_of_activities": data.fixed_no_of_activities ? data.fixed_no_of_activities : null,
        "fixed_sessions_per_term": data.fixed_sessions_per_term ? data.fixed_sessions_per_term : null,
      }
    }
  }

  cancelCustomSub (id) {
    clearInterval(this.interval[id]);
    this.ven_services.cancelSub(id).subscribe((res) => {
      console.log(res);
      if (res) {
        this.getVSubList();
      }
    })
  }

  _HoursAdd(date ,h) {
    var today = new Date(date);
    today.setHours(today.getHours() + h);
    return new Date(today);
  }

  realTimeGet (data) {
    return `${data.hours}: ${data.minutes}: ${data.seconds}`;
  }

}
