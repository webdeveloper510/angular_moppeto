import { Component, OnInit } from '@angular/core';
import {SubcriptionPriceService} from '../../../services/subscription/subscription-price.service'
import { PaginationService } from 'src/app/services/pagination.service';

@Component({
  selector: 'app-subscription-pricing',
  templateUrl: './subscription-pricing.component.html',
  styleUrls: ['./subscription-pricing.component.scss']
})
export class SubscriptionPricingComponent implements OnInit {

  countrys = [];

  checkboxGroup = {
    val1: true,
    val2: true,
    val3: true,
    val4: false,
    val5: true
  }

  demoTable = [
    {
      editMode: true
    }
  ]

  editDataSet: any = "";

  isEdit: boolean = true;
  public pagination: any = {
    count: 1,
  }
  public status = "all";

  constructor(
    private _services: SubcriptionPriceService,
    private paginationService: PaginationService
  ) { }

  ngOnInit(): void {
    this._services.getCountry().subscribe((res) => {
      if (res) {
        for (let r=0; r<res.length; r++) {
          if (res[r] && res[r]['name']) {
            this.countrys.push(res[r]['name']);
          }
        }
      }
      
    }, error => {
      console.error(error);
    })
  }

  editPricing(i) {
    this.demoTable[i].editMode = false;
    this.isEdit = false;
    this.editDataSet = this.demoTable[i];
    console.log(this.editDataSet)
  }
  cancelEditPricing(i) {
    this.demoTable[i].editMode = true;
    this.isEdit = true;
  }

  oklEditPricing(i) {
    this._services.editSub(this.demoTable[i]).subscribe(res => {
      if (res) {
        this.demoTable[i] = {
          id: this.demoTable[i]['id'],
          editMode: true,
          ...res
        };
        this.isEdit = true;
      }
    })
  }

  subListCall (params) {
    this._services.getSubcriptionPackages(params).subscribe((res) => {
      if (res && res.results) {
        console.log(res);
        this.pagination =  res;
        this.paginationService.setPaginationData(this.pagination);
        if (this.pagination) {
          console.log(this.pagination)
          this.demoTable = this.pagination.hasOwnProperty('results') ? this.pagination['results'] : [];
          this.demoTable = this.demoTable.map(e => ({editMode: true, ...e} ))
        }
      }
    }, error => {
      console.error(error);
    })
  }

  selectCountry(data) {
    this.subListCall(
      {
        country: data
      }
    )
  }

  pageChangeEvent() {
    console.log("hellooooo", this.paginationService.pagination());
    
  }

}
