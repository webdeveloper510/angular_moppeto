import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banners-tab-nav',
  templateUrl: './banners-tab-nav.component.html',
  styleUrls: ['./banners-tab-nav.component.scss']
})
export class BannersTabNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/banners/vendor']);
  }

}
