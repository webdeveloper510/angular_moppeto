import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {RootService} from "../root.service";

@Injectable({
  providedIn: 'root'
})
export class AvatarService {

  constructor(
    private root_service: RootService
  ) { }

  getAvatars (): Observable<any[]> {
    return this.root_service.get<any[]>("avatars");
  }

  deleteAvatar (_id: String): Observable<any[]> {
    return this.root_service.delete<any[]>("avatars/"+_id);
  }

  saveAvatar (data: any): Observable<any> {
    return this.root_service.post<any[]>("avatars", data);
  }
}
