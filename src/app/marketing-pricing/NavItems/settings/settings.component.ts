import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  activeSaveAndCancel:boolean=false;
  activeEdit:boolean=true;

  toggleVisibility(){
    this.activeSaveAndCancel=true;
    this.activeEdit=false;
  }

  cancelSaveMode(){
    this.activeEdit=true;
    this.activeSaveAndCancel=false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
