import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountriesService } from 'src/app/services/country/countries.service';
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { AddCountryComponent } from '../add-country/add-country.component';
import { AddCountry, KeyNameEnum } from '../country.model';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { FormStatus } from 'src/app/shared/enums/common';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  // country list
  countryList = [];
  private unsubscribecountryList$ = new Subject<void>();
  private unsubscribeAddCountry$ = new Subject<void>();
  private unsubscribeDeleteCountry$ = new Subject<void>();
  private unsubscribeUpdateCountry$ = new Subject<void>();
  selectedCountryId: string = null;
  isEditFrom: boolean = false;
  isAddCity: boolean = false;
  isDelete: Boolean = false;

  //form edit
  countryForm: FormGroup;
  updateCountryModel: any = {};
  cities = [];
  selectedCountry: any = null;
  formStatus = FormStatus;

  constructor(
    private dialog: MatDialog,
    private countriesService: CountriesService,
    public trackByService: TrackByService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.getCountries();
    this.createForm();
    Object.keys(this.countryForm.controls)
      .forEach(key => {
        if (key)
          this.onValueChanges(key);
      });
  }

  //for update model value after form value change
  onValueChanges(key): void {
    this.countryForm.get(key).valueChanges.subscribe((value) => {
      if (key && (this.countryForm.controls[key].dirty || this.countryForm.controls[key].touched)) {
        delete this.updateCountryModel[key]
        if (key === KeyNameEnum.name && this.selectedCountry.name !== value) {
          this.updateCountryModel[key] = value;
        } else if (key === KeyNameEnum.currencyName && (this.selectedCountry.currency && this.selectedCountry.currency.name !== value))
          this.updateCountryModel[key] = value;
        else if (key === KeyNameEnum.currencySymb && (this.selectedCountry.currency && this.selectedCountry.currency.display_character !== value))
          this.updateCountryModel[key] = value;
      }
    });
  }

  changeValue(formEle) {
    if (!this.isCityUpdated()) {
      this.cities = [];
    }
    if (formEle.controls.name.status == FormStatus.Valid) {
      if (this.cities.length == 0) {
        this.cities.push({
          id: formEle.controls.id.value,
          name: formEle.controls.name.value
        });
      } else if (this.cities.length > 0) {
        const findEleIndex = this.cities.findIndex(x => x.id == formEle.controls.id.value);

        if (findEleIndex >= 0)
          this.cities[findEleIndex].name = formEle.controls.name.value;
        else {
          this.cities.push({
            id: formEle.controls.id.value,
            name: formEle.controls.name.value
          });
        }
      }
    }
  }

  // use for remove position control
  removeAllcityFormControl() {
    while (this.cityFormList && this.cityFormList.length !== 0) {
      this.cityFormList.removeAt(0);
    }
  }

  update() {
    let model = {};
    if (KeyNameEnum.name in this.updateCountryModel)
      model[KeyNameEnum.name] = this.updateCountryModel.name;
    if (this.getCurrencyObj() != null)
      model[KeyNameEnum.currency] = this.getCurrencyObj();
    if (this.cities.length > 0)
      model[KeyNameEnum.cities] = this.cities;
    this.updateAPICall(model);
  }

  updateAPICall(model) {
    this.countriesService.updateCountry(model, this.selectedCountryId).pipe(takeUntil(this.unsubscribeUpdateCountry$)).subscribe((res: any) => {
      if (res.id) {
        this.getCountries();
        this.cancelMode();
      }
    });
  }

  getCurrencyObj() {
    if (KeyNameEnum.currencyName in this.updateCountryModel && KeyNameEnum.currencySymb in this.updateCountryModel) {
      return {
        "display_character": this.updateCountryModel.currencySymb,
        "name": this.updateCountryModel.currencyName
      }
    } else if (KeyNameEnum.currencyName in this.updateCountryModel) {
      return {
        "name": this.updateCountryModel.currencyName
      }
    } else if (KeyNameEnum.currencySymb in this.updateCountryModel) {
      return {
        "display_character": this.updateCountryModel.currencySymb,
      }
    } else
      null
  }

  createForm() {
    this.countryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      countryNameCheckbox: [false],
      currencySymb: ['', Validators.required],
      currencyName: ['', Validators.required],
      cities: this.formBuilder.array([]),
      abbr: ['']
    });
  }

  get cityFormList() {
    if (this.countryForm)
      return this.countryForm.get('cities') as FormArray;
  }

  setCityForm(id = "", name = "", regions = []) {
    var model = {
      id: [id],
      name: [name, [Validators.required, Validators.maxLength(30), RxwebValidators.unique()]],
      nameCheckbox: [false],
      regions: [regions]
    };
    return model;
  }

  openEditOption(item) {
    this.setFormData(item);
    this.isEditFrom = true;
    this.isDelete = false;
  }

  setFormData(item) {
    this.selectedCountryId = item.id;
    this.selectedCountry = item;
    this.countryForm.controls.name.setValue(item.name);
    this.countryForm.controls.countryNameCheckbox.setValue(false);
    if (item.currency) {
      this.countryForm.controls.currencySymb.setValue(item.currency.display_character);
      this.countryForm.controls.currencyName.setValue(item.currency.name);
    } else {
      item.currency = {
        display_character: "",
        name: ""
      }
    }
    if (item.cities.length > 0) {
      item.cities.forEach(element => {
        this.cityFormList.push(this.formBuilder.group(this.setCityForm(element.id, element.name, element.regions)));
      });
    }
    if (this.isAddCity) {
      this.cityFormList.push(this.formBuilder.group(this.setCityForm()));
    }
  }

  openAddOption(item) {
    this.isAddCity = true;
    this.selectedCountryId = item.id;
    this.isDelete = false;
    this.setFormData(item);
  }

  addCityControl() {
    if (this.countryForm.controls.cities.status === FormStatus.Invalid)
      return;
    this.cityFormList.push(this.formBuilder.group(this.setCityForm()));
  }

  removeCityControl(index) {
    this.cityFormList.removeAt(index);
  }

  addCityAPI() {
    if (this.countryForm.controls.cities.status === FormStatus.Invalid)
      return;
    const cityArray = this.countryForm.controls.cities.value.filter(x => !x.id);
    let model = {};
    model = {
      id: this.selectedCountryId,
      cities: cityArray.map(x => ({ name: x.name }))
    }
    this.updateAPICall(model);
  }

  openDeleteOption(item) {
    this.selectedCountryId = item.id;
    this.isDelete = true;
    this.setFormData(item);
  }


  cancelMode() {
    this.selectedCountryId = null;
    this.isEditFrom = false;
    this.isAddCity = false;
    this.isDelete = false;
    this.isDelete = false;
    this.removeAllcityFormControl();
    this.countryForm.reset();
    this.cities = [];
    this.updateCountryModel = {};
  }

  getCountries() {
    this.countryList = [];
    this.countriesService.getAllCountries().pipe(takeUntil(this.unsubscribecountryList$)).subscribe((res: any) => {
      this.countryList = res;
    });
  }

  addCountry(): void {
    const dialogRef = this.dialog.open(AddCountryComponent, {
      panelClass: ['customDialogClassAddNewCountry'],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult)
        this.addCountryAPI(dialogResult);
    });
  }

  addCountryAPI(model: AddCountry) {
    this.countriesService.addCountry(model).pipe(takeUntil(this.unsubscribeAddCountry$)).subscribe((res: any) => {
      if (res.id)
        this.getCountries();
    });
  }

  disableBtn() {
    if (this.selectedCountry) {
      if (this.countryForm.value.name == this.selectedCountry.name && !this.isCityUpdated() &&
        this.selectedCountry.currency.name == this.countryForm.value.currencyName &&
        this.countryForm.value.currencySymb == this.selectedCountry.currency.display_character)
        return true;
      else
        return false;
    }
  }

  isCityUpdated() {
    let match = 0;
    if (this.cities.length > 0) {
      this.cities.forEach(x => {
        if (this.isEqual(x))
          match++;
      });
    }
    return match === this.cities.length ? false : true;
  }

  isEqual(x) {
    if (this.selectedCountry && this.selectedCountry.cities && this.selectedCountry.cities.length > 0) {
      let find = this.selectedCountry.cities.find(city => city.id === x.id && city.name == x.name);
      return find ? true : false;
    }
  }

  disableDelete() {
    let isSelectedCity = false;
    if (this.selectedCountry.cities && this.selectedCountry.cities.length > 0)
      isSelectedCity = !this.countryForm.controls.cities.value.every(x => !x.nameCheckbox);
    if ((!this.countryForm.value.countryNameCheckbox) && !isSelectedCity)
      return true;
  }

  updateCheckbox(event) {
    if (this.selectedCountry.cities && this.selectedCountry.cities.length > 0)
      event.stopPropagation();
  }



  deleteCountry() {
    this.countriesService.deleteCountry(this.selectedCountry.id).pipe(takeUntil(this.unsubscribeAddCountry$)).subscribe((res: any) => {
      if (res.id) {
        this.cancelMode();
        this.getCountries();
      }
    });
  }

  deleteCities(arr) {
    const model = {
      id_list: arr
    }
    this.countriesService.deleteCities(this.selectedCountry.id, model).pipe(takeUntil(this.unsubscribeAddCountry$)).subscribe((res: any) => {
      this.cancelMode();
      this.getCountries();
    });
  }

  confirmCityCountryDelete() {
    let isCityDelete;
    if (this.countryForm.value.countryNameCheckbox)
      isCityDelete = false;
    else {
      if (this.countryForm.controls.cities.value.length > 0) {
        var filterCities = this.countryForm.controls.cities.value.filter(x => x.nameCheckbox);
        if (filterCities && filterCities.length > 0)
          isCityDelete = true;
      }
    }
    const title = isCityDelete ? "Delete City" : "Delete Country";
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "600px",
      data: {
        title: title,
        message: `${title}?`,
      },
      panelClass: ['customDialogClassAddNewCountry']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        if (isCityDelete) {
          const cityIdArr = filterCities.map(x => x.id);
          this.deleteCities(cityIdArr);
        }
        else
          this.deleteCountry();
      }
    });
  }


  ngOnDestroy(): void {
    if (this.unsubscribeAddCountry$) {
      this.unsubscribeAddCountry$.next();
      this.unsubscribeAddCountry$.complete();
    }
    if (this.unsubscribeDeleteCountry$) {
      this.unsubscribeDeleteCountry$.next();
      this.unsubscribeDeleteCountry$.complete();
    }
    if (this.unsubscribecountryList$) {
      this.unsubscribecountryList$.next();
      this.unsubscribecountryList$.complete();
    }
    if (this.unsubscribeUpdateCountry$) {
      this.unsubscribeUpdateCountry$.next();
      this.unsubscribeUpdateCountry$.complete();
    }
  }
}
