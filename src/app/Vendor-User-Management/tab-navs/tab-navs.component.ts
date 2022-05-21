import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-navs',
  templateUrl: './tab-navs.component.html',
  styleUrls: ['./tab-navs.component.scss']
})
export class TabNavsComponent implements OnInit {

  routerNavigate() {
    this.router.navigate(['/user-management']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/user-management/main-info']);
  }
}
