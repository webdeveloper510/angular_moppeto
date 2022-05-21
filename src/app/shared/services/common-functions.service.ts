import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { RootService } from 'src/app/services/root.service';
import { UserResponse } from '../interfaces/vendor_user_management/user.I';

@Injectable({
  providedIn: 'root'
})
export class CommonFunctionsService {

  constructor(private root_service: RootService) { }

  processError(err) {
    let message = '';
    if (err.error instanceof ErrorEvent) {
      message = err.error.message;
    } else {
      message = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    console.log(message);
    return throwError(message);
  }
  
  getCountries(): Observable<UserResponse> {
    let url = `countries/list`;
    return this.root_service.get<UserResponse>(url).pipe(
      retry(1),
      catchError(this.processError)
    );
  }
}
