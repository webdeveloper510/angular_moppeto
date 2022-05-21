import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import {ButtonModule} from 'primeng/button';


@Component({
  selector: 'app-subscription-pannel',
  templateUrl: './subscription-pannel.component.html',
  styleUrls: ['./subscription-pannel.component.scss']
})
export class SubscriptionPannelComponent implements OnInit {
  download = faDownload;
  correct = faCheck;
  wrong = faTimes;

  activeSaveAndCancel:boolean=false;
  activeEdit:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  toggleVisibility(){
    this.activeSaveAndCancel=true;
    this.activeEdit=false;
  }

  cancelSaveMode(){
    this.activeEdit=true;
    this.activeSaveAndCancel=false;
  }

}
