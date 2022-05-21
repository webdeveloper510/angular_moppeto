import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-tab-navs',
  templateUrl: './user-tab-navs.component.html',
  styleUrls: ['./user-tab-navs.component.scss']
})
export class UserTabNavsComponent implements OnInit {

  routerNavigate() {
    this.router.navigate(['/users']);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/users/personal-details']);
  }

}
