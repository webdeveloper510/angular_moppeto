import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../shared/confirm-dialog/confirm-dialog.component';
import { CustomSubscriptionComponent } from '../shared/custom-subscription/custom-subscription.component';

@Component({
  selector: 'app-sample-modals',
  templateUrl: './sample-modals.component.html',
  styleUrls: ['./sample-modals.component.scss']
})
export class SampleModalsComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  okConfirm(){
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "600px",
      data: {
          title: "Please enter a subscription value.",
          message: "Field cannot be left empty.",
        }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult){
        console.log(dialogResult)
        // Do something after getting confirmation
      }
   });
  }

  callCustomSubscription(){
    const dialogRef = this.dialog.open(CustomSubscriptionComponent, {
      maxWidth: "1000px",
      data: {
          paymentlinkdiv:false,
          textarea:true,
          payment:true,
          textarea1:true,
          confirmbutton:false,
          previewbutton:true,
          vendorName: "ABC Educational Centre Pte Ltd",
          vendorID: "8JY",
          vendorINR: "INR 45",
        }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if(dialogResult){
        console.log(dialogResult)
        // Do something after getting confirmation
      }
   });
}


callCustomSubscription2(){
  const dialogRef = this.dialog.open(CustomSubscriptionComponent, {
    maxWidth: "1000px",
    data: {
      paymentlinkdiv:true,
      textarea:false,
      textarea1:false,
      payment:false,
      confirmbutton:true,
      previewbutton:false,
      vendorName: "ABC Educational Centre Pte Ltd",
      vendorID: "8JY",
      vendorINR: "INR 45",
      }
  });
  dialogRef.afterClosed().subscribe(dialogResult => {
    if(dialogResult){
      console.log(dialogResult)
      // Do something after getting confirmation
    }
 });
}

}
