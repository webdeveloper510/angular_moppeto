import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
	selector: 'app-homepage-banners-super-admin',
	templateUrl: './homepage-banners-super-admin.component.html',
	styleUrls: ['./homepage-banners-super-admin.component.scss']
})
export class HomepageBannersSuperAdminComponent implements OnInit {

	files: File[] = [];
	imageChangedEvent: any = '';
	croppedImage: any = '';
	triggerCropper: boolean = false;

	constructor() { }

	ngOnInit(): void {
	}

	closeCropImage() {
		this.triggerCropper = false;
		this.files.length = 0;
	}

	fileChangeEvent(event: any): void {
		this.triggerCropper = true;
		this.imageChangedEvent = event;
	}
	imageCropped(event: ImageCroppedEvent) {
		this.croppedImage = event.base64;
	}
	imageLoaded() {
		// show cropper
	}
	cropperReady() {
		// cropper ready
	}
	loadImageFailed() {
		// show message
	}

	onSelect(event: any) {
		if (event.rejectedFiles.length > 0) {
		}
		this.files.push(...event.addedFiles);
		event.target = {
			files: event.addedFiles
		}
		this.fileChangeEvent(event);
	}

	onRemove() {
		this.files.length = 0;
		this.croppedImage = '';
	}

	cropImage() {
		this.triggerCropper = false;
	}
}