import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountriesService } from "./services/country/countries.service"
import { LoginService } from './services/login.service';
import { DataService } from "./shared/data/data.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private unsubscribe$ = new Subject<void>();

  constructor(
    private _countriService: CountriesService,
    private _dataService: DataService,
    private loginService: LoginService
  ) {
    this._countriService.getCountries().subscribe((res: any) => {
      this._dataService.SaveCountriesForShare(res["results"]);
    });
  }

  ngOnInit() {
    if (!localStorage.getItem("accessToken")) {
      this.login();
    }
    setInterval(() => {
      // this.refreshToken();
      this.login();
    }, 10000);
  }

  login() {
    const model = {
      "email": "info@moppetto.com",
      "password": "MoppeTt0-04052022"
    }
    this.loginService.userLogin(model).pipe(takeUntil(this.unsubscribe$)).subscribe((res: any) => {
      // console.log(res);
      if (res.tokens) {
        localStorage.clear();
        if (res.tokens.access)
          localStorage.setItem("accessToken", res.tokens.access);
        if (res.tokens.refresh)
          localStorage.setItem("refreshToken", res.tokens.refresh);
      }
    });
  }

  refreshToken() {
    const model = {
      "refresh": localStorage.getItem("refreshToken")
    }
    this.loginService.refreshToken(model).pipe(takeUntil(this.unsubscribe$)).subscribe((res: any) => {
      console.log(res);
      if (res.access) {
        localStorage.setItem("refreshToken", res.access);
        localStorage.setItem("accessToken", res.access);
      }
    });
  }


}
