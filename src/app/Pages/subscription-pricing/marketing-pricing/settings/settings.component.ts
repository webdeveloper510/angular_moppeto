import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditModeService } from '../service/edit-mode.service';
import {MarketingPricingService} from '../../../../services/subscription/marketing-pricing.service'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  demoTable = [
    
  ]

  isEdit: boolean;
  filter;
  dataSet = {
    "HEADER": {
        "WEB": {
            "max_count": ""
        },
        "APP": {
            "max_count": ""
        }
    },
    "BANNER": {
        "WEB": {
            "max_count": ""
        },
        "APP": {
            "max_count": ""
        }
    }
  }

  constructor(private editServ: EditModeService, private router: Router, private _service: MarketingPricingService) {
    this.editServ.isTableEditMode.subscribe(e => {
      this.isEdit = e
    })
    this.router.events.subscribe((val) => {
      this.editServ.isTableEditMode.next(false)
    });
    this.editServ.filter.subscribe(filter => {
      console.log(filter," settings component");
      this.filter = filter;
      this.demoTable = []
      if (this.filter.city !== "" && this.filter.country !== "" ) {
        this._service.settingsList(filter).subscribe(res1 => {
          console.log(res1);
          if (res1) {
            this.dataSet = res1;
            let res = res1;
            if (res['BANNER']) {
              res['BANNER']['editMode'] = true;
              res['BANNER']['inrButton'] = {
                edit: true,
                delete: true
              }
              res['BANNER']['category']= "Banner"
              this.demoTable.push(res['BANNER']);
            }
            if (res['HEADER']) {
              res['HEADER']['editMode'] = true;
              res['HEADER']['inrButton'] = {
                edit: true,
                delete: true
              }
              res['HEADER']['category']= "Header"
              this.demoTable.push(res['HEADER']);
            }
          }
          
          console.log(this.demoTable)
        }, error => {
          console.log(error);
        });
        // this.demoTable.push({
        //   editMode: true,
        //   inrButton: {
        //     edit: true,
        //     delete: true
        //   }
        // },
        // {
        //   editMode: true,
        //   inrButton: {
        //     edit: true,
        //     delete: false
        //   }
        // })
      }
    })
  }

  ngOnInit(): void {
  }

  editPricing(i) {
    this.demoTable[i].editMode = false;
    // this.isEdit = false;
    this.editServ.isTableEditMode.next(true)
  }
  cancelEditPricing(i) {
    this.demoTable[i].editMode = true;
    // this.isEdit = true;
    this.editServ.isTableEditMode.next(false)
    this.editServ.filter.next(this.filter);
  }
  ok(i) {
    console.log(this.dataSet);
    this.filter['dataSet'] = this.dataSet;
    this._service.settingsUpdate(this.filter).subscribe(res => {
      if (res) {
        this.cancelEditPricing(i);
      }
    }, error => {
      console.log(error)
    });
    
  }

}
