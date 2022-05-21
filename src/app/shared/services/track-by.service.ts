import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TrackByService {

  constructor() { }

  trackByFn(index, item) {
    return item.id;
  }
 
}
