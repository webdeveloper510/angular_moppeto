import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  searchTypeList = [
    {
      searchTypeID: 1,
      searchTypeName: 'By specific participant',
      searchTypeInfo: '(ongoing/future activities)',
      searchRouterLink: `/activity-management/search-by-participants/ongoing-future-participant`
    },
    {
      searchTypeID: 2,
      searchTypeName: 'By activity / class / session',
      searchRouterLink: '/activity-management/search-by-activities'
    },
    {
      searchTypeID: 3,
      searchTypeName: 'By specific participant',
      searchTypeInfo: '(past activities)',
      searchRouterLink: '/activity-management/search-by-participants/past-participant'
    }
  ]


}
