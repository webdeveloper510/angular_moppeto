import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AttributesService } from 'src/app/services/media_and_groupings/attributes.service';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { FormStatus } from 'src/app/shared/enums/common';
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddAttributeComponent } from '../add-attribute/add-attribute.component';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.scss']
})
export class AttributesComponent implements OnInit {

  private unsubscribeDeleteAttribute$ = new Subject<void>();
  private unsubscribeAttribute$ = new Subject<void>();
  private unsubscribeAddAttribute$ = new Subject<void>();
  private unsubscribeEditAttribute$ = new Subject<void>();


  isAPIReponseCome: boolean = false;
  attributeList = [];
  attributeForm: FormGroup;
  isEditFrom: boolean = false;
  isDelete: boolean = false;
  updateModel: any = {};
  selectedAttribute: any = null;

  subAttributes = [];
  isAdd: boolean = false;
  formStatus = FormStatus;

  constructor(
    private dialog: MatDialog,
    private attributeService: AttributesService,
    public trackByService: TrackByService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getData();
    this.createForm();
    Object.keys(this.attributeForm.controls).forEach(key => {
      if (key)
        this.onValueChanges(key);
    });
  }

  //for update model value after form value change
  onValueChanges(key): void {
    this.attributeForm.get(key).valueChanges.subscribe((value) => {
      if (key && (this.attributeForm.controls[key].dirty || this.attributeForm.controls[key].touched)) {
        delete this.updateModel[key]
        if (key === 'name' && this.selectedAttribute.name !== value)
          this.updateModel[key] = value;
      }
    });
  }

  createForm() {
    this.attributeForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      attributeNameCheckbox: [false],
      subAttribute: this.formBuilder.array([])
    });
  }

  get subAttributeFormList() {
    if (this.attributeForm)
      return this.attributeForm.get('subAttribute') as FormArray;
  }

  addSubAttributeControl() {
    if (this.attributeForm.controls.subAttribute.status === FormStatus.Invalid)
      return;
    this.subAttributeFormList.push(this.formBuilder.group(this.setSubAttributeForm()));
  }

  setSubAttributeForm(id = null, name = "") {
    var model = {
      id: [id],
      name: [name, [Validators.required, Validators.maxLength(20), RxwebValidators.unique()]],
      nameCheckbox: [false]
    };
    return model;
  }

  removeSubAttributeControl(index) {
    this.subAttributeFormList.removeAt(index);
  }

  changeValue(formEle) {
    if (!this.isSubAttributeUpdated())
      this.subAttributes = JSON.parse(JSON.stringify(this.selectedAttribute.subAttribute));
    if (formEle.controls.name.status == FormStatus.Valid) {
      if (this.subAttributes.length == 0)
        this.addSubAttribute(formEle);
      else if (this.subAttributes.length > 0) {
        const findEleIndex = this.subAttributes.findIndex(x => x.id == formEle.controls.id.value);
        if (findEleIndex >= 0)
          this.subAttributes[findEleIndex].name = formEle.controls.name.value;
        else
          this.addSubAttribute(formEle);
      }
    }
  }

  addSubAttribute(formEle) {
    this.subAttributes.push({
      id: formEle.controls.id.value,
      name: formEle.controls.name.value
    });
  }

  isSubAttributeUpdated() {
    let match = 0;
    if (this.subAttributes.length > 0) {
      this.subAttributes.forEach(x => {
        if (this.isEqual(x))
          match++;
      });
    }
    return match === this.subAttributes.length ? false : true;
  }

  isEqual(x) {
    if (this.selectedAttribute && this.selectedAttribute.subAttribute && this.selectedAttribute.subAttribute.length > 0) {
      let find = this.selectedAttribute.subAttribute.find(subattr => subattr.id === x.id && subattr.name == x.name);
      return find ? true : false;
    }
  }

  openEditOption(item) {
    this.setFormData(item);
    this.isEditFrom = true;
    this.isDelete = false;
  }

  setFormData(item) {
    this.selectedAttribute = JSON.parse(JSON.stringify(item));
    this.attributeForm.controls.name.setValue(item.name);
    if (item.subAttribute.length > 0) {
      item.subAttribute.forEach(element => {
        this.subAttributeFormList.push(this.formBuilder.group(this.setSubAttributeForm(element.id, element.name)));
      });
    }
    if (this.isAdd) {
      this.subAttributeFormList.push(this.formBuilder.group(this.setSubAttributeForm()));
    }
  }

  openAddOption(item) {
    this.isAdd = true;
    this.selectedAttribute = JSON.parse(JSON.stringify(item));
    this.isDelete = false;
    this.setFormData(item);
  }

  openDeleteOption(item) {
    this.selectedAttribute = JSON.parse(JSON.stringify(item));
    this.isDelete = true;
    this.setFormData(item);
  }

  cancelMode() {
    this.selectedAttribute = null;
    this.isEditFrom = false;
    this.isAdd = false;
    this.isDelete = false;
    this.removeAllFormControl();
    this.attributeForm.reset();
    this.subAttributes = [];
    this.updateModel = {};
  }

  // use for remove position control
  removeAllFormControl() {
    while (this.subAttributeFormList && this.subAttributeFormList.length !== 0) {
      this.subAttributeFormList.removeAt(0);
    }
  }

  disableBtn() {
    if (this.selectedAttribute) {
      if (this.attributeForm.value.name == this.selectedAttribute.name && !this.isSubAttributeUpdated())
        return true;
      else
        return false;
    }
  }

  addNewAttribute(): void {
    const dialogRef = this.dialog.open(AddAttributeComponent, {
      panelClass: ['customDialogClassOnlyInput'],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.addAttribute(dialogResult);
      }
    });
  }

  update() {
    let model = {};
    if ('name' in this.updateModel)
      model['name'] = this.updateModel.name;
    if (this.subAttributes.length > 0)
      model['subAttribute'] = this.subAttributes;
    this.updateAPICall(model);
  }

  addSubAttributeAPI() {
    if (this.attributeForm.controls.subAttribute.status === FormStatus.Invalid)
      return;
    this.setSubAttributeData();
    let model = {};
    model = {
      name: this.selectedAttribute.name,
      subAttribute: this.subAttributes.map(x => ({ name: x.name }))
    }
    this.updateAPICall(model);
  }

  setSubAttributeData() {
    this.subAttributes = [];
    if (this.subAttributeFormList.length > 0) {
      this.subAttributeFormList.value.forEach(element => {
        this.subAttributes.push({ name: element.name, id: element.id });
      });
    }
  }

  updateAPICall(model) {
    this.attributeService.editAttribute(this.selectedAttribute.id, model).pipe(takeUntil(this.unsubscribeEditAttribute$)).subscribe((res: any) => {
      if (res.id) {
        this.getData();
        this.cancelMode();
      }
    });
  }

  addAttribute(data) {
    this.attributeService.addAttribute(data).pipe(takeUntil(this.unsubscribeAddAttribute$)).subscribe((res) => {
      this.getData();
    });
  }

  disableDelete() {
    let isSelectedSubAttribute = false;
    if (this.selectedAttribute.subAttribute && this.selectedAttribute.subAttribute.length > 0)
      isSelectedSubAttribute = !this.attributeForm.controls.subAttribute.value.every(x => !x.nameCheckbox);
    if ((!this.attributeForm.value.attributeNameCheckbox) && !isSelectedSubAttribute)
      return true;
  }

  getData(): void {
    this.isAPIReponseCome = false;
    this.attributeList = [];
    this.attributeService.getAttributesList().pipe(takeUntil(this.unsubscribeAttribute$)).subscribe((res) => {
      this.isAPIReponseCome = true;
      this.attributeList = res;
    });
  }

  confirmDelete() {
    let isSubAttributeDelete;
    if (this.attributeForm.value.attributeNameCheckbox)
      isSubAttributeDelete = false;
    else {
      if (this.attributeForm.controls.subAttribute.value.length > 0) {
        var filterSubAttribute = this.attributeForm.controls.subAttribute.value.filter(x => x.nameCheckbox);
        if (filterSubAttribute && filterSubAttribute.length > 0)
          isSubAttributeDelete = true;
      }
    }
    const title = isSubAttributeDelete ? "Delete Sub Attribute" : "Delete Attribute Group";
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
        if (isSubAttributeDelete) {
          const subAttributes = filterSubAttribute.map(x => x.id);
          let model = {};
          model = {
            name: this.selectedAttribute.name,
            subAttribute: this.selectedAttribute.subAttribute.filter(item => subAttributes.indexOf(item.id) === -1)
          }
          this.updateAPICall(model);
        }
        else
          this.deleteAttributeGroup();
      }
    });
  }

  deleteAttributeGroup() {
    this.attributeService.deleteAttribute(this.selectedAttribute.id).pipe(takeUntil(this.unsubscribeDeleteAttribute$)).subscribe((res: any) => {
      this.cancelMode();
      this.getData();
    });
  }

  ngOnDestroy() {
    if (this.unsubscribeAddAttribute$) {
      this.unsubscribeAddAttribute$.next();
      this.unsubscribeAddAttribute$.complete();
    }
    if (this.unsubscribeAttribute$) {
      this.unsubscribeAttribute$.next();
      this.unsubscribeAttribute$.complete();
    }
    if (this.unsubscribeDeleteAttribute$) {
      this.unsubscribeDeleteAttribute$.next();
      this.unsubscribeDeleteAttribute$.complete();
    }
  }
}
