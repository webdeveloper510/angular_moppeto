import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-images-icons-tab-nav',
  templateUrl: './category-images-icons-tab-nav.component.html',
  styleUrls: ['./category-images-icons-tab-nav.component.scss']
})
export class CategoryImagesIconsTabNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/category-icons-images/icons']);
  }

}
