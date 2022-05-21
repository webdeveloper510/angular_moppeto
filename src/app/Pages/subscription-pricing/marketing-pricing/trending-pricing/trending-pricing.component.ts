import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EditModeService } from '../service/edit-mode.service';

@Component({
  selector: 'app-trending-pricing',
  templateUrl: './trending-pricing.component.html',
  styleUrls: ['./trending-pricing.component.scss']
})
export class TrendingPricingComponent implements OnInit {

  demoTable = [
    {
      editMode: true,
      inrButton: {
        edit: true,
        delete: true
      }
    },
    {
      editMode: true,
      inrButton: {
        edit: true,
        delete: false
      }
    }
  ]

  isEdit: boolean;

  constructor(private editServ: EditModeService, private router: Router) {
    this.editServ.isTableEditMode.subscribe(e => {
      this.isEdit = e
    })
    this.router.events.subscribe((val) => {
      this.editServ.isTableEditMode.next(false)
    });
  }

  ngOnInit(): void {
  }

  editPricing(i) {
    this.demoTable[i].editMode = false;
    // this.isEdit = false;
    this.editServ.isTableEditMode.next(true)
  }
  cancelEditPricing(i) {
    this.demoTable[i].editMode = true;
    // this.isEdit = true;
    this.editServ.isTableEditMode.next(false)
  }

}
