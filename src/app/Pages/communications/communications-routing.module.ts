import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBroadcastComponent } from './broadcast-tab-nav/add-broadcast/add-broadcast.component';
import { BroadcastTabNavComponent } from './broadcast-tab-nav/broadcast-tab-nav.component';
import { UsersComponent } from './broadcast-tab-nav/users/users.component';
import { VendorsComponent } from './broadcast-tab-nav/vendors/vendors.component';
import { ChatComponent } from './chat/chat.component';

const routes: Routes = [
  { path: '', component: ChatComponent },
  {
    path: 'broadcast', component: BroadcastTabNavComponent, children: [
      { path: 'vendors', component: VendorsComponent },
      { path: 'users', component: UsersComponent }
    ]
  },
  { path: 'add-broadcast', component: AddBroadcastComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunicationsRoutingModule { }
