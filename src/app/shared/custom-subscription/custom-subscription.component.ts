import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import {DataService} from "../data/data.service"


export interface DialogData {
  paymentlinkdiv: boolean;
  payment: boolean;
  textarea: boolean;
  textarea1: boolean;
  title: string;
  message: string;
  confirmbutton: boolean;
  previewbutton: boolean;
  vendorName: string;
  vendorID: string;
  vendorINR: string;
  vendorINR2: string;
  paymentLink: String;
  m_title: String;
  subscriptionObject: any;
  body: any[];
}

@Component({
  selector: 'app-custom-subscription',
  templateUrl: './custom-subscription.component.html',
  styleUrls: ['./custom-subscription.component.scss']
})
export class CustomSubscriptionComponent implements OnInit {

  dialogData: DialogData;
  paymentlinkdiv: boolean;
  payment: boolean;
  textarea: boolean;
  textarea1: boolean;
  title: string;
  message: string;
  confirmbutton: boolean;
  previewbutton: boolean;
  vendorName: string;
  vendorID: string;
  vendorINR: string;
  vendorINR2: string;
  paymentTextOuter1: boolean;
  paymentTextOuter2: boolean;
  paymentLink: String;
  subscriptionObject: any;


  thankYouModal: boolean = false;
  beforeThankYou: boolean = true;
  @ViewChild('editor') editor;

  body= [ { "insert": "You can make payment, link is " }, { "insert": `${this.data.paymentLink}`, "attributes": { "link": this.data.paymentLink } }, { "insert": "\n" } ];
  quillPlaceholder = '<Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus viverra accumsan, sagittis risus, at. Sit integer viverra amet amet, turpis tellus. Erat sed porttitor luctus ipsum lobortis nunc. Vitae accumsan nullam non auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus viverra accumsan, sagittis risus, at. Sit integer viverra amet amet, turpis tellus. Erat sed porttitor luctus ipsum lobortis nunc.> You can make payment, link is <here>';
  tools = {
    syntax: false,

    toolbar: [
      ['bold', 'italic', 'underline'],        // toggled buttons
      // ['blockquote', 'code-block'],

      // [{ 'header': 1 }, { 'header': 2 }],               // custom button values
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      // [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
      // [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
      // [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
      // [{ 'direction': 'rtl' }],                         // text direction
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      // [{ 'font': [] }],
      // [{ 'align': [] }],
      // ['clean'],                                        // remove formatting button
      ['link', 'image', 'video']                         // link and image, video
    ]

  }

  m_title: String = "Custom Subscription";


  constructor(
    public dialogRef: MatDialogRef<CustomSubscriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialog: MatDialog,
    private _dataService: DataService
  ) { }

  ngOnInit() {
    
  }

  changedEditor($event) {
    this.data.body = this.body;
  }

  onConfirm(data?: any): void {
    this.beforeThankYou = false;
    this.thankYouModal = true;
  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

  callCustomSubscription(data?: any) {
    this.data.body = this.body;
    this.dialogRef.close(data ? data : true);
    const dialogRef = this.dialog.open(CustomSubscriptionComponent, {
      data: {
        vendorName: this.data.vendorName ? this.data.vendorName : "",
        vendorID: this.data.vendorID ? this.data.vendorID : "",
        vendorINR: this.data.vendorINR ? this.data.vendorINR : "",
        vendorINR2: this.data.vendorINR2 ? this.data.vendorINR2 : "",
        paymentTextOuter1: false,
        paymentTextOuter2: true,
        paymentLink: this.data.paymentLink ? this.data.paymentLink : "",
        m_title: this.data.m_title,
        body: this.data.body
      },
      panelClass: ['customDialogClassCustomSubscription']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.onConfirm(this.data);
        console.log("after confirm");
        this._dataService.SaveUpdateDataForVendor({active: true, data: this.data});
      }
    });
  }

  backToModal1(data?: any) {
    this.body = this.data.body;
    this.dialogRef.close(data ? data : true);
    const dialogRef = this.dialog.open(CustomSubscriptionComponent, {
      data: {
        vendorName: this.data.vendorName ? this.data.vendorName : "",
        vendorID: this.data.vendorID ? this.data.vendorID : "",
        vendorINR: this.data.vendorINR ? this.data.vendorINR : "",
        vendorINR2: this.data.vendorINR2 ? this.data.vendorINR2 : "",
        paymentTextOuter1: true,
        paymentTextOuter2: false,
        paymentLink: this.data.paymentLink ? this.data.paymentLink : "",
        m_title: this.data.m_title,
        body: this.data.body
      }
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.onConfirm(this.data);
      }
    });
  }



  onClose(data?: any): void {
    // Close the dialog, return true
    this.dialogRef.close(this.data ? this.data : true);
  }

  setMessageTitle (event) {
    console.log(event.target.value)
    this.data.m_title = event.target.value;
  }

}


