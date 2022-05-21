import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditModeService {

  constructor() { }

  isTableEditMode = new BehaviorSubject(false)
  filter = new BehaviorSubject({
    city: "",
    country: ""
  })

}
