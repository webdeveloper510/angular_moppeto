import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditModeService } from './service/edit-mode.service';
import {CountriesService} from '../../../services/country/countries.service';

@Component({
  selector: 'app-marketing-pricing',
  templateUrl: './marketing-pricing.component.html',
  styleUrls: ['./marketing-pricing.component.scss']
})
export class MarketingPricingComponent implements OnInit {

  routerState: any;
  isEdit: boolean;

  country = [];
  // 'A country', 'B country', 'C country', 'D country', 'E country', 'F country', 'G country', 'H country', 'I country', 'J country'
  city = [];
  // 'A city', 'B city', 'C city', 'D city', 'E city', 'F city', 'G city', 'H city', 'I city', 'J city'
  pricing = ['App pricing', 'Web pricing', 'App & web pricing'];

  filter = {
    city: "",
    country: ""
  }

  constructor(private editServ: EditModeService, private router: Router, private _Cservice: CountriesService) {
    this.editServ.isTableEditMode.subscribe(e => {
      this.isEdit = e
    })
    this.router.events.subscribe((val) => {
      this.editServ.isTableEditMode.next(false)
    });
  }

  ngOnInit(): void {
    this.router.navigate(['subscription-pricing/marketing-pricing/settings']);
    this.routerState = this.router;

    this._Cservice.getAllCountries().subscribe((res): any => {
      console.log(res);
      if (res && res['length'] > 0) {
        for (let r=0; r<res['length']; r++) {
          if (res[r] && res[r]['name']) {
            this.country.push(res[r]['name']);
          }

          if (res[r] && res[r]['cities'] && res[r]['cities']['length'] > 0) {
            let cityes = res[r]['cities'];
            for (let c = 0; c < cityes.length; c++) {
              if (cityes[c] && cityes[c]['name']) {
                this.city.push(cityes[c]['name']);
              }
            }
          }
        }
      }
      
    }, error => {
      console.error(error);
    })
  }

  dataEntry (data, entry) {
    if (entry == "cou") {
      this.filter.country = data;
    }
    else if (entry = "cit") {
      this.filter.city = data;
    }
    this.editServ.filter.next(this.filter);
    console.log(this.filter)
  }

}
