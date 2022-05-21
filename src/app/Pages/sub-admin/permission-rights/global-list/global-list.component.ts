import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-global-list',
  templateUrl: './global-list.component.html',
  styleUrls: ['./global-list.component.scss']
})
export class GlobalListComponent implements OnInit {

  beforeEdit: boolean = true;
  afterEditOpen: boolean = false;
  selectedPermissionType;
  editPermissionRightsInfo;
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


  globalBasedInfo = [


    {
      radioInput: 'permission1',
      deptName: 'Accounting',
      tags: [

        { tagName: 'Advertising revenue' },
        { tagName: 'PG transactions' },
        { tagName: 'Receipt format' },
        { tagName: 'Subscription revenue' }

      ],
      persons: [
        { name: 'Darren Leow' },
        { name: 'Phil Low' },
        { name: 'Very very long name' },
        { name: 'Very very long name' },
        { name: 'Phil Low' },
        { name: 'Phil Low' },
        { name: 'Phil Low' },
        { name: 'Phil Low' },
        { name: 'Phil Low' },
        { name: 'Phil Low' },
        { name: 'Darren Leow' },
        { name: 'Phil Low' },
        { name: 'Darren Leow' },
        { name: 'Phil Low' },
        { name: 'Darren Leow' },
        { name: 'Phil Low' },
      ]
    },


    {
      radioInput: 'permission2',
      deptName: 'Overall admin',
      tags: [

        { tagName: 'All modules' }

      ],
      persons: [
        { name: 'Darren Leow' },
        { name: 'Phil Low' },
        { name: 'Very very long name' }
      ]
    }


  ]

  onGlobalPermissionRightChange(deptDetails){
    this.editPermissionRightsInfo = deptDetails;
  }
  
}

