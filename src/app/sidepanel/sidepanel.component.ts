import { Component, OnInit } from '@angular/core';

class Menu {
  parentName: string;
  childName: string;
  constructor() {
    this.parentName = '';
    this.childName = '';
  }
}

class ActiveClass {
  activeParentClass: string;
  activeChildClass: string;
  constructor() {
    this.activeParentClass = '';
    this.activeParentClass = '';
  }
}

@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.scss']
})
export class SidepanelComponent implements OnInit {
  extraMarginSideBody: boolean = true;
  tooltip: boolean = true;
  pointerEvent: boolean = true;


  breadCrumb: Menu = new Menu();
  activeClass: ActiveClass = new ActiveClass();

  constructor() { }

  ngOnInit(): void {
  }

  public removeShowClass(): void {
    var Dashboard = document.getElementById("linkDashboard");
    Dashboard.classList?.remove("show");
    var Activity = document.getElementById("linkActivity");
    Activity.classList?.remove("show");
    var Reports = document.getElementById("linkVendorReports");
    Reports.classList?.remove("show");
    var Revenue = document.getElementById("linkRevenue");
    Revenue.classList?.remove("show");
    var SubscriptionAndPricing = document.getElementById("linkSubscriptionAndPricing");
    SubscriptionAndPricing.classList?.remove("show");
    var Media = document.getElementById("linkMedia");
    Media.classList?.remove("show");
    var UserEngagement = document.getElementById("linkUserEngagement");
    UserEngagement.classList?.remove("show");
    var Communications = document.getElementById("linkCommunications");
    Communications.classList?.remove("show");
    var Emails = document.getElementById("linkEmails");
    Emails.classList?.remove("show");
    var Receipt = document.getElementById("linkReceipt");
    Receipt.classList?.remove("show");
    var Static = document.getElementById("linkStatic");
    Static.classList?.remove("show");
    var PaymentGateway = document.getElementById("linkPaymentGateway");
    PaymentGateway.classList?.remove("show");
    var SubAdmin = document.getElementById("linkSubAdmin");
    SubAdmin.classList?.remove("show");
    var Profile = document.getElementById("linkProfile");
    Profile.classList?.remove("show");
    var ProfileDetails = document.getElementById("linkProfileDetails");
    ProfileDetails.classList?.remove("show");
    this.extraMarginSideBody = !this.extraMarginSideBody;
    this.tooltip = !this.tooltip;
    this.pointerEvent = !this.pointerEvent;

  }

  public removeShowClass2(): void {

  }

  public changeBreadcrumb(parent, child): void {
    this.breadCrumb.parentName = parent;
    this.breadCrumb.childName = child;
  }


  public switchActiveClass(parent, child = ''): void {
    this.activeClass.activeParentClass = parent
    this.activeClass.activeChildClass = child
  }

}
