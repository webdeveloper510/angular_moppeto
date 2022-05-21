import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { CommonFunctionsService } from '../shared/services/common-functions.service';
import { RootService } from './root.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private root_service: RootService,
    private commonFunctions: CommonFunctionsService) { }

  userLogin(data) {
    return this.root_service.post<any>(`authentication/login/`, data).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  refreshToken(data) {
    return this.root_service.post<any[]>(`authentication/token/refresh/`, data)
      .pipe(
        retry(1),
        catchError(this.commonFunctions.processError)
      )
  }
}
