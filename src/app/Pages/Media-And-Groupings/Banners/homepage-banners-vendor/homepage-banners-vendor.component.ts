import { Component, OnInit, HostListener, AfterViewChecked } from '@angular/core';


@Component({
	selector: 'app-homepage-banners-vendor',
	templateUrl: './homepage-banners-vendor.component.html',
	styleUrls: ['./homepage-banners-vendor.component.scss']
})
export class HomepageBannersVendorComponent implements OnInit {

	imgLink = '../../../../assets/UseForTry/4.jpg';
	selectedHeight = 1080;

	currentInnerHeight: number;

	constructor() {
		// this.onResize();
	}

	ngOnInit(): void {
	}

	// @HostListener('window:resize', ['$event'])
	// onResize(event?) {
	// 	this.currentInnerHeight = window.innerHeight;
	// 	if (this.currentInnerHeight > this.selectedHeight) {
	// 		let x = document.getElementById("modalLargeHeight");
	// 		x.classList.remove("modal-dialog-centered");
	// 	}
	// }
}
