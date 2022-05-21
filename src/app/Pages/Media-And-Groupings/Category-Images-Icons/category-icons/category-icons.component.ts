import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-category-icons',
	templateUrl: './category-icons.component.html',
	styleUrls: ['./category-icons.component.scss']
})
export class CategoryIconsComponent implements OnInit {

	files: File[] = [];

	constructor() { }

	ngOnInit(): void {
	}


	onSelect(event) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

}
