import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DownloadTableComponent } from '../../../../shared/download-table/download-table.component';

interface City {
  name: string,
  code: string
}

interface City2 {
  name: string,
  code: string
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  cities: City[];

  selectedCity: City;

  cities2: City2[];

  selectedCity2: City2;


  searchInput: String;


  constructor(private router: Router, private dialog: MatDialog) {
    this.cities = [
      { name: 'India', code: 'IN' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.cities2 = [
      { name: 'India', code: 'IN' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit(): void {
    this.router.navigate(['/receipt/all-tabs']);
  }


  downloadTable() {
    const dialogRef = this.dialog.open(DownloadTableComponent, {
      data: {
        title: "Download as CSV",
        DownloadCurrentPage: "Download current page",
        DownloadAllData: "Download all data",
      },
      panelClass: ['custom-dialog-class', 'ngClass']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
      }
    });
  }
  DownloadTableComponent(DownloadTableComponent: any, arg1: { maxWidth: string; data: { title: string; DownloadCurrentPage: string; DownloadAllData: string; }; }) {
    throw new Error('Method not implemented.');
  }




}
