import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
   // Authorization: 'Bearer 06dc5d6630da45cbe3730ae77f162734e739498a'
  })
};

const httpOptions2 = {
  headers: new HttpHeaders({
    Accept: 'text/csv',
    'Content-Type':  'text/csv; charset=utf-8',
    // Authorization: 'Bearer 06dc5d6630da45cbe3730ae77f162734e739498a'
  }),
  responseType: 'text'
};

@Injectable({
  providedIn: 'root'
})
export class RootService {

  private base: String = environment.backedUrl;
  

  constructor(
    private http: HttpClient,
  ) {



   }

  public get<T>(url: String, csv?: Boolean): Observable<T> {
    return this.http.get<T>(`${this.base}${url}`, csv ? httpOptions2 : httpOptions)
  }
  
  public post<T>(url: String, data?: Object): Observable<T> {
    return this.http.post<T>(`${this.base}${url}`, data ? data: "", httpOptions);
  }

  public patch<T>(url: String, body: Object): Observable<T> {
    return this.http.patch<T>(`${this.base}${url}`, body, httpOptions);
  }

  public put<T>(url: String, data: Object): Observable<T> {
    return this.http.put<T>(`${this.base}${url}`, data, httpOptions);
  }

  public delete<T>(url: String): Observable<T> {
    return this.http.delete<T>(`${this.base}${url}`, httpOptions);
  }

  public pagination<T>(url: String): Observable<T> {
    return this.http.get<T>(`${url}`, httpOptions);
  }
}
