import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketing-pricing',
  templateUrl: './marketing-pricing.component.html',
  styleUrls: ['./marketing-pricing.component.scss']
})
export class MarketingPricingComponent implements OnInit {

  routerNavigate(){
    this.router.navigate(['/marketing-pricing']);
  }
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/marketing-pricing/settings']);
  }

}
