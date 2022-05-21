import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

 
@Component({
  selector: 'app-revenue-tab-navs',
  templateUrl: './revenue-tab-navs.component.html',
  styleUrls: ['./revenue-tab-navs.component.scss']
})
export class RevenueTabNavsComponent implements OnInit {
  routerNavigate(){
    this.router.navigate(['/advertising-revenue']);
  }
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/advertising-revenue/summary']);
  }
}