import { Component, OnInit, HostListener, AfterViewChecked } from '@angular/core';

interface City {
  name: string,
  code: string
}

interface City2 {
  name: string,
  code: string
}

interface UserMessage {
  time: string;
  message: string;
}
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, AfterViewChecked {

  cities: City[];
  selectedCity: City;

  cities2: City2[];
  selectedCity2: City2;

  searchInput: string;
  chatInput: string;

  selectedWidth = 767;


  isContactSectionVisible = true;
  isChatSectionVisible = true;
  currentInnerWidth: number;
  inbox: UserMessage[] = [];
  constructor() {
    this.onResize();
    this.cities = [
      { name: 'India', code: 'IN' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'Paris', code: 'PRS' }
    ];
    this.cities2 = [
      { name: 'India', code: 'IN' },
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'Paris', code: 'PRS' }
    ];
  }

  ngOnInit(): void {
  }



  toggleChatSectionForSmallerScreen() {
    if (innerWidth <= 767) {
      this.isChatSectionVisible = !this.isChatSectionVisible;
      this.isContactSectionVisible = !this.isContactSectionVisible;
    }
    else {
      this.isChatSectionVisible = true;
      this.isContactSectionVisible = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.currentInnerWidth = window.innerWidth;
    if (this.currentInnerWidth < this.selectedWidth) {
      this.isChatSectionVisible = false;
      this.isContactSectionVisible = true;
    }
    else {
      this.isChatSectionVisible = true;
      this.isContactSectionVisible = true;
    }
  }


  sendMe() {
    let now = new Date().toString().split(' ')[4].split(':').slice(0, -1).join(':') // to get only time
    if (this.chatInput.length !== 0) {

      this.inbox.push(
        {
          message: this.chatInput,
          time: now
        }
      )
    }
    this.chatInput = '';
    this.scrollToEndMessage();
  }


  ngAfterViewChecked() {
    this.scrollToEndMessage();
  }

  scrollToEndMessage() {
    let box = document.getElementById('chatBox');
    box.scrollTop = box.scrollHeight;
  }

}
