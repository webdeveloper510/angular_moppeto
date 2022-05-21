import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-tab-nav',
  templateUrl: './list-tab-nav.component.html',
  styleUrls: ['./list-tab-nav.component.scss']
})
export class ListTabNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/permission-rights/global-list']);
  }


}
