import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttributesService } from 'src/app/services/media_and_groupings/attributes.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CommonModalMediaAndGroupingsComponent } from 'src/app/shared/common-modal-media-and-groupings/common-modal-media-and-groupings.component';

@Component({
  selector: 'app-attributes-tab-nav',
  templateUrl: './attributes-tab-nav.component.html',
  styleUrls: ['./attributes-tab-nav.component.scss']
})
export class AttributesTabNavComponent implements OnInit, OnDestroy {
  isActionButtonVisible: boolean;
  destroySubject$: Subject<any> = new Subject();
  constructor(private router: Router, 
    private attributeService: AttributesService,
     private dialog: MatDialog) { router.events.subscribe(()=>this.isActionButtonVisible=true)

     }

  ngOnInit(): void {
    this.router.navigate(['/attributes/attributes']);
    this.attributeService.attributeActionStatus.pipe(takeUntil(this.destroySubject$)).subscribe(status => this.isActionButtonVisible = status)
  }

  addNewAttribute(): void {
    const dialogRef = this.dialog.open(CommonModalMediaAndGroupingsComponent, {
      data: {
        title: "Add attribute group",
        inputLabel: "Attribute group",
        inputTextSection: true,
        addButton: true,
      },
      panelClass: ['customDialogClassOnlyInput']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("dialogResult", dialogResult);
      if (dialogResult) {
      }
    });
  }

  CommonModalMediaAndGroupingsComponent(CommonModalMediaAndGroupingsComponent: any, arg1:
    {
      maxWidth: string; data: {
        title: string;
        inputLabel: string;
        inputTextSection: boolean;
        addButton: boolean;
      };
    }) {
    throw new Error('Method not implemented.');
  }

  ngOnDestroy() {
    this.destroySubject$.complete();
  }

}
