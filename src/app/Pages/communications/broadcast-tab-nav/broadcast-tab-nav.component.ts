import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-broadcast-tab-nav',
  templateUrl: './broadcast-tab-nav.component.html',
  styleUrls: ['./broadcast-tab-nav.component.scss']
})
export class BroadcastTabNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/communications/broadcast/vendors']);
  }

}
