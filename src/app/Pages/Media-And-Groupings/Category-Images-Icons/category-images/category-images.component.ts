import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-images',
  templateUrl: './category-images.component.html',
  styleUrls: ['./category-images.component.scss']
})
export class CategoryImagesComponent implements OnInit {

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
