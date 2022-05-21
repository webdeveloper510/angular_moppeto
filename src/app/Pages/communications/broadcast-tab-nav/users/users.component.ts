import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CommonModalForBroadcastComponent } from '../../../../shared/common-modal-for-broadcast/common-modal-for-broadcast.component';

interface City {
  name: string,
  code: string
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {


  cities: City[];
  selectedCity: City;

  searchInput: string;

  constructor(private dialog: MatDialog) {
    this.cities = [
      { name: 'India', code: 'IN' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit(): void {
  }

  openEmailMessage(): void {
    const dialogRef = this.dialog.open(CommonModalForBroadcastComponent, {
      // disableClose: true,
      data: {
        title: "Email message",
        subjectSection: true
      },
      panelClass: ['emailMessage']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("dialogResult", dialogResult);
      if (dialogResult) {
      }
    });
  }


  openAppWebMessage(): void {
    const dialogRef = this.dialog.open(CommonModalForBroadcastComponent, {
      // disableClose: true,
      data: {
        title: "App/Web broadcast message",
        subjectSection: false
      },
      panelClass: ['appWebMessage']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("dialogResult", dialogResult);
      if (dialogResult) {
      }
    });
  }



  CommonModalForBroadcastComponent(CommonModalForBroadcastComponent: any, arg1:
    {
      maxWidth: string; data: {
        title: string;
        subjectSection: boolean;
      };
    }) {
    throw new Error('Method not implemented.');
  }
}
