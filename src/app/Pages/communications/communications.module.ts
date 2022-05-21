import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunicationsRoutingModule } from './communications-routing.module';
import { ChatComponent } from './chat/chat.component';
import { BroadcastTabNavComponent } from './broadcast-tab-nav/broadcast-tab-nav.component';
import { VendorsComponent } from './broadcast-tab-nav/vendors/vendors.component';
import { UsersComponent } from './broadcast-tab-nav/users/users.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AddBroadcastComponent } from './broadcast-tab-nav/add-broadcast/add-broadcast.component';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextareaModule } from 'primeng/inputtextarea';

@NgModule({
  declarations: [ChatComponent, BroadcastTabNavComponent, VendorsComponent, UsersComponent, AddBroadcastComponent],
  imports: [
    CommonModule,
    CommunicationsRoutingModule,
    FormsModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    BsDatepickerModule.forRoot(),
    RadioButtonModule,
    InputTextareaModule
  ]
})
export class CommunicationsModule { }
