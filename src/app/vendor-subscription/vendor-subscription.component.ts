import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import {VendorSubscriptionService} from "../services/subscription/vendor_subscription.service";
import {filterI, VendorSubscription, VendorResponseI} from "../shared/interfaces/subscription/vendor_subscription.I";
import {CountriesService} from "../services/country/countries.service";
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { CustomSubscriptionComponent } from '../shared/custom-subscription/custom-subscription.component';


@Component({
  selector: 'app-vendor-subscription',
  templateUrl: './vendor-subscription.component.html',
  styleUrls: ['./vendor-subscription.component.scss']
})
export class VendorSubscriptionComponent implements OnInit {

  // Gobal variable start
  public download = faDownload;
  public correct = faCheck;
  public wrong = faTimes;
  public faSort = faSort;

  public activeSaveAndCancel: boolean = false;
  public activeEdit:boolean=false;

  public filter: filterI = {
    "country_name":"",
    "subscription_type": "ALL",
    "activity_type": "ALL",
    "status": "ALL",
    "view": []
  }
  public VendorSubscriptions: VendorSubscription[] = [];
  public leftCountries: any[] = [];
  public rightCountries: any[] = [];
  public subcriptionTypes: String[] = ["BASIC", "ADVANCED", "PREMIUM", "ENTERPRISE", "CUSTOM"];
  public activityTypes: String[] = ['ALL', 'FIXEDTIMING', 'DAYACCESS', 'OPEN', 'TERM'];
  public statusTypes: String[] = ['ALL', 'CURRENT', 'EXPIRED', 'SENT'];
  public viewCheckArr: String[] = [];
  public viewTypes: String[] = ['SUBSCRIPTION PARAMETERS', 'ACTIVITY TYPE/ ACTIVITY NO', 'SUBSCRIPTION PERIOD', 'SUBSCRIPTION PER MONTH', 'SUBSCRIPTION REMAINING']
  public openRadio: Boolean = true;
  public openCustomInput: any;
  public setIndex: String;

  public dataSet: VendorSubscription;
  public currencyDisplay: String = "";

  public dataSetting: any = {
    update: {},
    custom_subscription: {}
  }
  private bkpVendorSub: any;
  // Gobal variable End

  constructor(
    private _vendorService: VendorSubscriptionService,
    private _countryService: CountriesService,
    private dialog: MatDialog
  ) { }

  // Life cycle hook start
  ngOnInit(): void {
    this.getCountry();
    this.getSubType();
    this.filter.view = this.viewTypes;
  }
  // Life cycle hook End

  // Privates methods
  private getVendors (): void {
    if (this.filter.country_name) {
      this._vendorService.getVendorSubscription(this.filter).subscribe((res: VendorResponseI) => {
        if (res['results']) {
          this.VendorSubscriptions = res['results'];
          this.bkpVendorSub = res['results'];
        }
      }, error => {
        console.error(error)
      });
    }
  }

  private getCountry (): void {
    this._countryService.getCountries({perPage: 6, offset: 0}).subscribe((countries: any) => {
      if (countries && countries.hasOwnProperty('results')&& countries['results']['length'] > 0) {
        let data = countries['results'];
        console.log(data);
        if (data.length > 6) {
          for (let i = 0; i < data.length; i++) {
            if (i%2 == 0) {
              this.leftCountries.push(data[i]);
            } else {
              this.rightCountries.push(data[i]);
            }
  
            if (i == data.length-1) {
              console.log("left==", this.leftCountries, "right==", this.rightCountries);
            }
          }
          
        } else {
          this.leftCountries = data;
        }
      }
    });
  }

  private getSubType (): void {
    this._vendorService.getVendorSubscriptionType().subscribe((res: String[]) => {
      if (res.length > 0) {
        this.subcriptionTypes = res;
      }
    })
  }

  private callCustomSubscription () {
    const dialogRef = this.dialog.open(CustomSubscriptionComponent, {
      maxWidth: "1000px",
      data: {
        paymentlinkdiv:false,
        textarea:true,
        payment:true,
        textarea1:true,
        confirmbutton:false,
        previewbutton:true,
        vendorName: "ABC Educational Centre Pte Ltd",
        vendorID: this.dataSet.vendor_id ? this.dataSet.vendor_id : "",
        vendorINR: `${this.currencyDisplay} ${this.dataSet.total_subscription_payable ? Math.round(this.dataSet.total_subscription_payable)  : 0}`
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult) {
        // Do something after getting confirmation
        this.dataSetting.custom_subscription = dialogResult;
        this.dataSet.subscription_type = "CUSTOM";
        this.dataSet.status = "SENT";
        this._vendorService.updateVendorSubscription(this.dataSet).subscribe((res: VendorSubscription) => {
          if (res) {
            this.getVendors();
          }
        })
        
        this.setInit();
      }
   });
  }

  private setInit () {
    this.openCustomInput = "";
    this.activeEdit = false;
    this.activeSaveAndCancel = false;
  }

  private validation (data: VendorSubscription, query: {}): Promise<any> {
    return new Promise((resove, reject) => {
      console.log(query)
      let clear: any = {
        success: true, errorField: null, errorMessage: null
      };
      let _dataSet: any = {};
      if (data && query) {
        for (let Qkey in query) {
          for (let key in data) {
            if (Qkey === key) {
              _dataSet[key] = {
                value : data[key],
                query : query[key]
              };
              
            } else if (query[Qkey] && query[Qkey].hasOwnProperty('parentKey') && query[Qkey]['parentKey'] && key === query[Qkey]['parentKey']) {
              _dataSet[Qkey] = {
                value : data[key][Qkey],
                query : query[Qkey]
              };
            }
          }
        }
        console.log(_dataSet);
        for (let field in _dataSet) {
          if (_dataSet[field]['query']['required']) {
            if (!_dataSet[field]['value']) {
              clear.success = false;
              clear.errorField = field,
              clear.errorMessage = `${field} cannot be left empty.`
              return resove(clear);
            }
          }
          if (_dataSet[field]['query']['custom']['compear'] == true) {
            let cond = _dataSet[field]['query']['custom']['cond'];
            let v = _dataSet[field]['query']['custom']['value'];
            if (cond == "$lt") {
              if (Number(_dataSet[field]['value'])  < Number(v)) {
                clear.success = false;
                clear.errorField = field,
                clear.errorMessage = `${cond == '$lt' ? `Unable to enter a lower number than ${field} exiting number that is taken up.` : ""}`
                return resove(clear);
              }
            }
          }
        }
        return resove(clear);
      } else {
        clear.success = false;
        clear.errorMessage = `Params are required`;
        return reject(clear);
      }
      
    });
    
  }

  // End privates methods


  // Public methods
  public toggleVisibility (): void {
    this.activeSaveAndCancel=true;
    this.activeEdit=false;
    this.openCustomInput = this.setIndex;
  }

  public cancelSaveMode (): void {
    this.activeEdit=false;
    this.activeSaveAndCancel=false;
    this.openCustomInput = "";
    this.setIndex = "";
  }

  public nextSaveMode (): void {
    this.activeEdit=false;
    this.activeSaveAndCancel=false;
    this.openCustomInput = "";
    this.setIndex = "";
  }

  public selectFilter (value: any, key: string, type: String ="radio"): void {
    if (type == "radio") {
      this.filter[key] = value;
    } else if (type == "checkbox") {
      if (this.viewCheckArr.includes(value)) {
        this.viewCheckArr.splice(this.viewCheckArr.indexOf(value), 1);
      } else {
        this.viewCheckArr.push(value);
      }
      this.filter.view = this.viewCheckArr;
      console.log(this.filter.view);
    }
    this.getVendors();
  }

  public customSubcription (index: number): void {
    this.setIndex = `customSub${index}`;
    this.dataSet = this.VendorSubscriptions[index];
    this.bkpVendorSub = this.VendorSubscriptions[index];
    if (!this.activeSaveAndCancel) {this.activeEdit = true;} else {this.activeSaveAndCancel = false; this.activeEdit = true; this.openCustomInput = "";}
  }

  public  openCustomInputcheck (value: String): Boolean {
    if (!value){return false;}
    if (value === this.openCustomInput) {
      return true;
    } else {
      return false;
    }
  }

  public nextForSave (index: number): void {
    console.log(this.dataSet["no_of_activities.day_access"])
    let query = {
      total_locations: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.total_locations,
          cond: "$lt"
        }
      },
      total_sub_admins: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.total_sub_admins,
          cond: "$lt"
        }
      },
      day_access: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.day_access,
          cond: "$lt"
        },
        parentKey: "no_of_activities"
      },
      fixed_timing: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.fixed_timing,
          cond: "$lt"
        },
        parentKey: "no_of_activities"
      },
      term: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.term,
          cond: "$lt"
        },
        parentKey: "no_of_activities"
      },
      open: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.open,
          cond: "$lt"
        },
        parentKey: "no_of_activities"
      },
      max_slots_dayaccess: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.max_slots_dayaccess,
          cond: "$lt"
        }
      },
      max_slots_fixedtiming: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.max_slots_fixedtiming,
          cond: "$lt"
        }
      },
      max_slots_term: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.max_slots_term,
          cond: "$lt"
        }
      },
      max_slots_open: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.max_slots_open,
          cond: "$lt"
        }
      },
      price_per_month: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.price_per_month,
          cond: "$lt"
        }
      },
      total_subscription_remaining: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.total_subscription_remaining,
          cond: "$lt"
        }
      },
      total_subscription_payable: {
        required: true,
        custom: {
          compear: true,
          value: this.bkpVendorSub.total_subscription_payable,
          cond: "$lt"
        }
      }
    }
    this.validation(this.dataSet, query).then(vali => {
      if (vali.success) {
        this.dataSetting.update = this.dataSet;
        this.callCustomSubscription();
      } else {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
          maxWidth: "600px",
          data: {
            title: `Error!`,
            message: vali.errorMessage,
          }
        });
      }
    }).catch(err => {
      console.log(err);
    });
  }

  public setCurrency (index: number, key: string) {
    this.currencyDisplay =  this[key][index]['currency']['display_character'];
  }

  public getClassNameForStatus (status: String): String {
    if (status === 'SENT') {
      return 'statussent sentstatus';
    } else if (status === 'CURRENT') {
      return 'status currentstatus';
    } else if (status === 'EXPIRED') {
      return 'status expiredstatus';
    } else {
      return "";
    }
  }

  public setBackup (v, key) {
    this.bkpVendorSub = {
      ...this.bkpVendorSub,
      [key]: this.bkpVendorSub[key] ? this.bkpVendorSub[key] : v
    }
    console.log("setBAckup", this.bkpVendorSub);
  }

  // End public methods
}
