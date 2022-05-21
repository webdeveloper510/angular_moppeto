import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { StaticInfo } from 'src/app/Pages/static-info/static_info.model';
import { CommonFunctionsService } from 'src/app/shared/services/common-functions.service';
import { RootService } from '../root.service';

@Injectable({
  providedIn: 'root'
})
export class StaticInfoService {

  constructor(
    private root_service: RootService, private commonFunctions: CommonFunctionsService
  ) { }

  getTermsOfService(countryName: string) {
    let url = `staticinfo/tos?country=${countryName}`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  addEditTermsOfService(model: StaticInfo) {
    let url = `staticinfo/tos`;
    return this.root_service.post<any>(url, model).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  getPrivacyPolicy(countryName: string) {
    let url = `staticinfo/pp?country=${countryName}`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }


  getInfo(type: string, countryName: string) {
    let url = `staticinfo/${type}?country=${countryName}`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  addEditInfo(type: string, model: StaticInfo) {
    let url = `staticinfo/${type}`;
    return this.root_service.post<any>(url, model).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }


  addEditPrivacyPolicy(model: StaticInfo) {
    let url = `staticinfo/pp`;
    return this.root_service.post<any>(url, model).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  getContactEmail(countryName: string) {
    let url = `staticinfo/email?country=${countryName}`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  addEditContactEmail(model) {
    let url = `staticinfo/email`;
    return this.root_service.post<any>(url, model).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  getTermsOfUse(countryName: string) {
    let url = `staticinfo/tou?country=${countryName}`;
    return this.root_service.get<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  addEditTermsOfUse(model) {
    let url = `staticinfo/tou`;
    return this.root_service.post<any>(url, model).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

  deleteStaticInfo(id) {
    let url = `staticContent/${id}`;
    return this.root_service.delete<any>(url).pipe(
      retry(1),
      catchError(this.commonFunctions.processError)
    );
  }

}
