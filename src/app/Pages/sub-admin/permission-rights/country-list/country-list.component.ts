import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss']
})
export class CountryListComponent implements OnInit {

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



  countryBasedInfo = [


    {
      deptName: 'Accounting',
      tags: [

        { tagName: 'Advertising revenue' },
        { tagName: 'PG transactions' },
        { tagName: 'Receipt format' },
        { tagName: 'Subscription revenue' }
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
      deptName: 'Client management',
      tags: [

        { tagName: 'Activity management' },
        { tagName: 'Avatars' },
        { tagName: 'Broadcast' },
        { tagName: 'Chat' },
        { tagName: 'Reviews' },
        { tagName: 'User list' },
        { tagName: 'Vendor list' },
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
      deptName: 'Legal',
      tags: [

        { tagName: 'Other info' }
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
      deptName: 'Marketing',
      tags: [

        { tagName: 'Age group' },
        { tagName: 'Auto email content' },
        { tagName: 'Auto email list' },
        { tagName: 'Banners' },
        { tagName: 'Category images' },
        { tagName: 'Homepage header' },
        { tagName: 'Logo' }
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
            { personName: 'Very very long name' }
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
      deptName: 'Vendor reports',
      tags: [

        { tagName: 'Class list' },
        { tagName: 'Registration' },
        { tagName: 'Vendor revenue' }
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
            { personName: 'Very very long name' }
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
        }



      ]
    },



  ]






  editCountryBasedInfo = [


    {
      deptName: 'Accounting',
      tags: [

        { tagName: 'Advertising revenue' },
        { tagName: 'PG transactions' },
        { tagName: 'Receipt format' },
        { tagName: 'Subscription revenue' }
      ]
    },


    {
      deptName: 'Client management',
      tags: [

        { tagName: 'Activity management' },
        { tagName: 'Avatars' },
        { tagName: 'Broadcast' },
        { tagName: 'Chat' },
        { tagName: 'Reviews' },
        { tagName: 'User list' },
        { tagName: 'Vendor list' }
      ]
    },




    {
      deptName: 'Legal',
      tags: [

        { tagName: 'Other info' }
      ]
    },


    {
      deptName: 'Marketing',
      tags: [

        { tagName: 'Age group' },
        { tagName: 'Auto email content' },
        { tagName: 'Auto email list' },
        { tagName: 'Banners' },
        { tagName: 'Category images' },
        { tagName: 'Homepage header' },
        { tagName: 'Logo' }
      ]
    },




    {
      deptName: 'Vendor reports',
      tags: [

        { tagName: 'Class list' },
        { tagName: 'Registration' },
        { tagName: 'Vendor revenue' }
      ]
    }



  ]



}

