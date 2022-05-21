import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  beforeEdit: boolean = true;
  afterEditOpen: boolean = false;
  selectedPermissionType;

  adminList = [
    {
      id: 1,
      name: "Darren Leow",
      status: 'Suspended'
    },
    {
      id: 2,
      name: "Phil Law",
      status: null
    },
    {
      id: 3,
      name: "Tralive Tan",
      status: null
    },
    {
      id: 4,
      name: "Joseph Randall",
      status: 'Suspended'
    },
    {
      id: 5,
      name: "Sophie Joella",
      status: null
    },
    {
      id: 6,
      name: "Darren Leow",
      status: null
    },
    {
      id: 7,
      name: "Phil Law",
      status: null
    },
    {
      id: 8,
      name: "Tralive Tan",
      status: 'Suspended'
    },
    {
      id: 9,
      name: "Joseph Randall",
      status: null
    },
    {
      id: 10,
      name: "Sophie Joella",
      status: null
    }
  ];

  selectedAdminNames = [];

  draggedAdmin = null;

  constructor() { }

  ngOnInit(): void {
  }

  showEdit() {
    this.beforeEdit = false;
    this.afterEditOpen = true;
  }

  cancelEdit() {
    this.beforeEdit = true;
    this.afterEditOpen = false;
  }

  removeItem(event) {
    const idx = this.selectedAdminNames.findIndex(item => item.id === event.id);
    if (idx !== -1) {
      this.selectedAdminNames.splice(idx, 1);
    }
  }


  dragStart(e, c) {
    this.draggedAdmin = c;
  }

  dragEnd(e) {
  }

  drop(e) {
    if (this.draggedAdmin) {
      this.selectedAdminNames.push(this.draggedAdmin);
      this.draggedAdmin = null;
    }
  }


  locationList = [
    {
      locationName: 'A Location',
      locationID: 1
    },
    {
      locationName: 'B Location',
      locationID: 2
    },
    {
      locationName: 'C Location',
      locationID: 3
    },
    {
      locationName: 'D Location',
      locationID: 4
    },
    {
      locationName: 'E Location',
      locationID: 5
    },
  ]


  cityBasedInfo = [


    {
      deptName: 'Sales',
      tags: [

        { tagName: 'Marketing pricing' },
        { tagName: 'Coupons' }
      ],
      locations: [
        {
          locName: 'A Location',
          names: [
            { personName: 'Very very long name' },
            { personName: 'Darren Leow' },
            { personName: 'Augusta Longevity' }
          ]
        },
        {
          locName: 'B Location',
          names: [
            { personName: 'Very very long name' },
            { personName: 'Darren Leow' }
          ]
        },
        {
          locName: 'C Location',
          names: [
            { personName: 'Very very long name' },
            { personName: 'Darren Leow' },
            { personName: 'Augusta Longevity' }
          ]
        },
        {
          locName: 'D Location',
          names: [
            { personName: 'Very very long name' },
            { personName: 'Darren Leow' },
            { personName: 'Augusta Longevity' }
          ]
        },
        {
          locName: 'E Location',
          names: [
            { personName: 'Very very long name' },
            { personName: 'Darren Leow' },
            { personName: 'Augusta Longevity' }
          ]
        },
      ]
    },


    {
      deptName: 'Subscription',
      tags: [

        { tagName: 'Custom subscription' },
        { tagName: 'Subscription pricing' }
      ],
      locations: [
        {
          locName: 'A Location',
          names: [
            { personName: 'Very very long name' },
            { personName: 'Darren Leow' },
            { personName: 'Augusta Longevity' }
          ]
        },
        {
          locName: 'B Location',
          names: [
            { personName: 'Very very long name' },
            { personName: 'Darren Leow' }
          ]
        },
        {
          locName: 'C Location',
          names: [
            { personName: 'Very very long name' },
            { personName: 'Darren Leow' },
            { personName: 'Augusta Longevity' }
          ]
        },
        {
          locName: 'D Location',
          names: [
            { personName: 'Very very long name' },
            { personName: 'Darren Leow' },
            { personName: 'Augusta Longevity' }
          ]
        },
        {
          locName: 'E Location',
          names: [
            { personName: 'Very very long name' },
            { personName: 'Darren Leow' },
            { personName: 'Augusta Longevity' }
          ]
        },
      ]
    }

  ]






  editCityBasedInfo = [


    {
      deptName: 'Sales',
      tags: [

        { tagName: 'Marketing pricing' },
        { tagName: 'Coupons' }
      ]
    },

    {
      deptName: 'Subscription',
      tags: [

        { tagName: 'Custom subscription' },
        { tagName: 'Subscription pricing' }
      ]
    }

  ]



}

