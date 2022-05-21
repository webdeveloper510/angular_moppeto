import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CountriesService } from 'src/app/services/country/countries.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { FormStatus } from 'src/app/shared/enums/common';
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { AddAreaRegionComponent } from '../add-region/add-area-region.component';


@Component({
  selector: 'app-region',
  templateUrl: './region.component.html',
  styleUrls: ['./region.component.scss']
})
export class RegionComponent implements OnInit {

  forEdit: boolean = false;
  isDelete: boolean = false;

  // country list
  countryList = [];
  private unsubscribecountryList$ = new Subject<void>();
  private unsubscribeDeleteAreaList$ = new Subject<void>();
  private unsubscribeRegionList$ = new Subject<void>();
  private unsubscribeDeleteRegionList$ = new Subject<void>();

  selectedCountry = null;
  selectedCity = null;
  regionList = [];
  areaList = [];
  selectedRegion = null;

  isDeleteArea: boolean = false;
  isEditArea: boolean = false;

  //form
  countryForm: FormGroup;
  updatedRegions = [];
  deleteRegionsList = [];
  updatedAreas = [];
  deleteAreasList = [];

  constructor(private countriesService: CountriesService,
    private dialog: MatDialog, private formBuilder: FormBuilder,
    public trackByService: TrackByService
  ) { }

  ngOnInit(): void {
    this.getCountries();
    this.createForm();
  }

  createForm() {
    this.countryForm = this.formBuilder.group({
      regions: this.formBuilder.array([]),
      areas: this.formBuilder.array([]),
    });
  }

  get regionsFormList() {
    if (this.countryForm)
      return this.countryForm.get('regions') as FormArray;
  }

  get areaFormList() {
    if (this.countryForm)
      return this.countryForm.get('areas') as FormArray;
  }

  getCountries() {
    this.countryList = [];
    this.countriesService.getAllCountries().pipe(takeUntil(this.unsubscribecountryList$)).subscribe((res: any) => {
      this.countryList = res;
      if (this.selectedCountry)
        this.selectedCountry = this.countryList.find(x => x.id == this.selectedCountry.id);
      this.setAreaAndRegionData();
    });
  }

  onChangeCountry() {
    this.setAreaAndRegionData();
  }

  setAreaAndRegionData() {
    if (this.selectedCountry && this.selectedCity) {
      this.selectedCity = this.selectedCountry.cities.find(x => x.id == this.selectedCity.id)
      this.regionList = this.selectedCity.regions;
      this.updateRegionFormList();
      if (this.selectedRegion && this.regionList.length > 0) {
        this.selectedRegion = this.regionList.find(x => x.id == this.selectedRegion.id);
        this.areaList = this.selectedRegion.areas;
        this.updateAreaFormList();
      } else {
        this.selectedRegion = null;
      }
    }
  }

  onChangeCity(item) {
    this.selectedCity = item;
    this.regionList = item.regions;
    this.updateRegionFormList();
  }

  updateRegionFormList() {
    this.removeAllFormControl(this.regionsFormList);
    if (this.regionList && this.regionList.length > 0) {
      this.regionList.forEach(element => {
        this.regionsFormList.push(this.formBuilder.group(
          this.setRegionForm(element.id, element.name, element.areas, element.status, element.no_of_areas)));
      });
    }
  }

  updateAreaFormList() {
    this.removeAllFormControl(this.areaFormList);
    if (this.areaList && this.areaList.length > 0) {
      this.areaList.forEach(element => {
        this.areaFormList.push(this.formBuilder.group(
          this.setRegionForm(element.id, element.name, element.areas, element.status, element.no_of_areas)));
      });
    }
  }

  setAreaForm(id = "", name = "", status = null) {
    var model = {
      id: [id],
      name: [name, [Validators.required, RxwebValidators.unique()]],
      status: [status]
    };
    return model;
  }

  setRegionForm(id = "", name = "", areas = [], status = null, no_of_areas = 0) {
    var model = {
      id: [id],
      name: [name, [Validators.required, RxwebValidators.unique()]],
      status: [status],
      no_of_areas: [no_of_areas],
      areas: [areas]
    };
    return model;
  }

  changeValue(formEle) {
    if (!this.isRegionUpdated()) {
      this.updatedRegions = [];
    }
    if (formEle.controls.name.status == FormStatus.Valid) {
      if (this.updatedRegions.length == 0) {
        this.updatedRegions.push(this.getRegionFormObj(formEle));
      } else if (this.updatedRegions.length > 0) {
        const findEleIndex = this.updatedRegions.findIndex(x => x.id == formEle.controls.id.value);
        if (findEleIndex >= 0)
          this.updatedRegions[findEleIndex].name = formEle.controls.name.value;
        else {
          this.updatedRegions.push(this.getRegionFormObj(formEle));
        }
      }
    }
  }

  getRegionFormObj(formEle) {
    return {
      id: formEle.controls.id.value,
      name: formEle.controls.name.value,
      status: formEle.controls.status.value,
      no_of_areas: formEle.controls.no_of_areas.value,
      areas: formEle.controls.areas.value
    }
  }

  isRegionUpdated() {
    let match = 0;
    if (this.updatedRegions.length > 0) {
      this.updatedRegions.forEach(x => {
        if (this.isEqual(x, this.regionList))
          match++;
      });
    }
    return match === this.updatedRegions.length ? false : true;
  }

  updateRegionAPI() {
    const model = this.getRegionModel(null);
    this.addEditRegionAreaAPI(model);
  }

  isEqual(x, list) {
    if (list && list.length > 0) {
      let find = list.find(y => y.id === x.id && y.name == x.name);
      return find ? true : false;
    }
  }

  onChangeRegion(region) {
    this.selectedRegion = region;
    this.areaList = region.areas;
    this.updateAreaFormList();
  }

  openEditOption() {
    this.forEdit = true;
  }

  isUpdatedName() {
    return JSON.stringify(this.regionList) === JSON.stringify(this.countryForm.value.regions)
  }

  isUpdatedAreaName() {
    return JSON.stringify(this.areaList) === JSON.stringify(this.countryForm.value.areas)
  }

  openDeleteOption() {
    this.isDelete = true;
  }

  deleteRegion(index, id) {
    if (this.regionsFormList.controls.length == 1)
      return;
    this.regionsFormList.removeAt(index);
    this.deleteRegionsList.push(id);
  }

  deleteRegionAPI() {
    if (this.regionList.length == 1) {
      this.deleteRegionsList.push(this.regionList[0].id)
    }
    const model = {
      id_list: this.deleteRegionsList
    }
    this.countriesService.deleteRegions(this.selectedCountry.id, this.selectedCity.id, model).pipe(takeUntil(this.unsubscribeDeleteRegionList$)).subscribe((res: any) => {
      this.getCountries();
      this.cancelMode();
    });
  }

  cancelMode() {
    this.forEdit = false;
    this.isDelete = false;
    this.updatedRegions = [];
    this.deleteRegionsList = [];
    this.updateRegionFormList();
  }

  openEditOptionArea() {
    this.isDeleteArea = false;
    this.isEditArea = true;
  }

  openDeleteOptionArea() {
    this.isDeleteArea = true;
  }

  cancelModeArea() {
    this.isEditArea = false;
    this.isDeleteArea = false;
    this.updateAreaFormList();
  }

  addNewRegionOrArea(isRegion: boolean): void {
    const dialogRef = this.dialog.open(AddAreaRegionComponent, {
      data: {
        isRegion: isRegion
      },
      panelClass: ['customDialogClassAddNewCountry'],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        if (isRegion) {
          var model = this.getRegionModel(dialogResult);
        } else {
          model = this.getAreaModel(dialogResult);
        }
        this.addEditRegionAreaAPI(model);
      }
    });
  }

  addEditRegionAreaAPI(model) {
    this.countriesService.updateCountry(model, this.selectedCountry.id).pipe(takeUntil(this.unsubscribeRegionList$)).subscribe((res: any) => {
      if (res.id && res.cities && res.cities.length > 0) {
        this.selectedCountry = res;
        this.getCountries();
        this.cancelMode();
        this.cancelModeArea();
      }
    });
  }

  // use for remove position control
  removeAllFormControl(list) {
    while (list && list.length !== 0) {
      list.removeAt(0);
    }
  }

  getRegionModel(name) {
    let model = JSON.parse(JSON.stringify(this.selectedCountry));
    var city = this.selectedCountry.cities.find(x => x.id == this.selectedCity.id);
    if (name) {
      city.regions = [
        {
          name: name
        }
      ]
    } else {
      city.regions = this.updatedRegions;
    }
    model.cities = [city];
    return model;
  }

  getAreaModel(name) {
    let model = JSON.parse(JSON.stringify(this.selectedCountry));
    var city = this.selectedCountry.cities.find(x => x.id == this.selectedCity.id);
    if (city.regions && city.regions.length > 0) {
      var region = city.regions.find(x => x.id == this.selectedRegion.id);
    }
    if (name) {
      region.areas = [
        {
          name: name
        }
      ]
    } else {
      region.areas = this.updatedAreas;
    }
    city.regions = [region];
    model.cities = [city];
    return model;
  }

  changeAreaValue(formEle) {
    if (!this.isAreaUpdated()) {
      this.updatedAreas = [];
    }
    if (formEle.controls.name.status == FormStatus.Valid) {
      if (this.updatedAreas.length == 0) {
        this.updatedAreas.push(this.getRegionFormObj(formEle));
      } else if (this.updatedAreas.length > 0) {
        const findEleIndex = this.updatedAreas.findIndex(x => x.id == formEle.controls.id.value);
        if (findEleIndex >= 0)
          this.updatedAreas[findEleIndex].name = formEle.controls.name.value;
        else {
          this.updatedAreas.push(this.getRegionFormObj(formEle));
        }
      }
    }
  }

  getAreaFormObj(formEle) {
    return {
      id: formEle.controls.id.value,
      name: formEle.controls.name.value,
      status: formEle.controls.status.value
    }
  }

  isAreaUpdated() {
    let match = 0;
    if (this.updatedAreas.length > 0) {
      this.updatedAreas.forEach(x => {
        if (this.isEqual(x, this.areaList))
          match++;
      });
    }
    return match === this.updatedAreas.length ? false : true;
  }

  updateAreaAPI() {
    const model = this.getAreaModel(null);
    this.addEditRegionAreaAPI(model);
  }

  deleteArea(index, id) {
    if (this.areaFormList.controls.length == 1)
      return;
    this.areaFormList.removeAt(index);
    this.deleteAreasList.push(id);
  }

  confirmAreaRegionAPI(isRegion) {
    const title = isRegion ? "Delete Region" : "Delete Area";
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
        if (isRegion)
          this.deleteRegionAPI();
        else
          this.deleteAreaAPI();
      }
    });
  }

  deleteAreaAPI() {
    if (this.areaList.length == 1) {
      this.deleteAreasList.push(this.areaList[0].id)
    }
    const model = {
      id_list: this.deleteAreasList
    }
    this.countriesService.deleteAreas(this.selectedCountry.id, this.selectedCity.id, this.selectedRegion.id, model).pipe(takeUntil(this.unsubscribeDeleteAreaList$)).subscribe((res: any) => {
      // if (res.success_list && res.success_list.length > 0) {
      this.getCountries();
      this.cancelMode();
      this.cancelModeArea();
      // }
    });
  }

  ngOnDestroy() {
    if (this.unsubscribeDeleteRegionList$) {
      this.unsubscribeDeleteRegionList$.next();
      this.unsubscribeDeleteRegionList$.complete();
    }

    if (this.unsubscribeRegionList$) {
      this.unsubscribeRegionList$.next();
      this.unsubscribeRegionList$.complete();
    }

    if (this.unsubscribecountryList$) {
      this.unsubscribecountryList$.next();
      this.unsubscribecountryList$.complete();
    }

    if (this.unsubscribeDeleteAreaList$) {
      this.unsubscribeDeleteAreaList$.next();
      this.unsubscribeDeleteAreaList$.complete();
    }
  }

}
