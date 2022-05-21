import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-format',
  templateUrl: './format.component.html',
  styleUrls: ['./format.component.scss']
})
export class FormatComponent implements OnInit {


  isActiveEdit: boolean = true;
  previewBill: boolean = true;

  isIssueReceiptApplicable: boolean;
  isTaxApplicable: boolean;
  isTaxRateChecked: boolean;
  isActivePlaceLogo: boolean = false;
  normalLogoSection: boolean = true;
  editLogo: boolean = false;


  files: File[] = [];




  constructor() { }

  ngOnInit(): void {

  }

  activeEditSection() {
    this.isActiveEdit = false;
    this.previewBill = false;

  }

  activePlaceLogo() {
    this.isActiveEdit = false;
    this.normalLogoSection = false;
    this.editLogo = true;
    this.isActivePlaceLogo = true;
  }

  cancelPlacLogo() {
    this.isActiveEdit = true;
    this.normalLogoSection = true;
    this.editLogo = false;
    this.isActivePlaceLogo = false;
  }

  activePreviewSection() {
    this.isActiveEdit = true;
    this.previewBill = true;
  }

  onIssueReceipt(event) {
    this.isIssueReceiptApplicable = event.target.value === 'yes' ? true : false
  }

  onTaxChange(eventDetails) {
    this.isTaxApplicable = eventDetails.checked;
  }

  onTaxRateSelect(eventDetails) {
    this.isTaxRateChecked = eventDetails.checked;
  }


  onSelect(event) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }


}
