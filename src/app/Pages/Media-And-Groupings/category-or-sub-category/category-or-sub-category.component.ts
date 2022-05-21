import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoryService } from 'src/app/services/media_and_groupings/category.service';
import { ConfirmDialogComponent } from 'src/app/shared/confirm-dialog/confirm-dialog.component';
import { FormStatus } from 'src/app/shared/enums/common';
import { TrackByService } from 'src/app/shared/services/track-by.service';
import { AddCategoryComponent } from './add-category/add-category.component';

@Component({
  selector: 'app-category-or-sub-category',
  templateUrl: './category-or-sub-category.component.html',
  styleUrls: ['./category-or-sub-category.component.scss']
})
export class CategoryOrSubCategoryComponent implements OnInit {


  private unsubscribeDeleteCategory$ = new Subject<void>();
  private unsubscribeCategory$ = new Subject<void>();
  private unsubscribeAddCategory$ = new Subject<void>();
  private unsubscribeEditCategory$ = new Subject<void>();
  private unsubscribeEditWeightageCategory$ = new Subject<void>();


  isAPIReponseCome: boolean = false;
  categoryList = [];
  categoryForm: FormGroup;
  isEditFrom: boolean = false;
  isDelete: boolean = false;
  updateModel: any = {};
  selectedCategory: any = null;

  subCategories = [];
  isAdd: boolean = false;
  formStatus = FormStatus;
  isWeightageEdit: boolean = false;
  minValue = null;
  maxValue = null;
  uppdatedWeighageList = [];
  oldCategoryList = [];

  constructor(
    private dialog: MatDialog,
    private categoryService: CategoryService,
    private trackByService: TrackByService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getData();
    this.createForm();
    Object.keys(this.categoryForm.controls).forEach(key => {
      if (key)
        this.onValueChanges(key);
    });
  }

  //for update model value after form value change
  onValueChanges(key): void {
    this.categoryForm.get(key).valueChanges.subscribe((value) => {
      if (key && (this.categoryForm.controls[key].dirty || this.categoryForm.controls[key].touched)) {
        delete this.updateModel[key]
        if (key === 'name' && this.selectedCategory.name !== value)
          this.updateModel[key] = value;
      }
    });
  }

  createForm() {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      categoryNameCheckbox: [false],
      weightage: [''],
      subCategory: this.formBuilder.array([])
    });
  }

  get subCategoryFormList() {
    if (this.categoryForm)
      return this.categoryForm.get('subCategory') as FormArray;
  }

  addSubCategoryControl() {
    if (this.categoryForm.controls.subCategory.status === FormStatus.Invalid)
      return;
    this.subCategoryFormList.push(this.formBuilder.group(this.setSubCategoryForm()));
  }

  setSubCategoryForm(id = null, name = "") {
    var model = {
      id: [id],
      name: [name, [Validators.required, Validators.maxLength(20), RxwebValidators.unique()]],
      nameCheckbox: [false]
    };
    return model;
  }

  removeSubCategoryControl(index) {
    this.subCategoryFormList.removeAt(index);
  }

  changeValue(formEle) {
    if (!this.isSubCategoryUpdated())
      this.subCategories = JSON.parse(JSON.stringify(this.selectedCategory.subCategory));
    if (formEle.controls.name.status == FormStatus.Valid) {
      if (this.subCategories.length == 0)
        this.addSubCategory(formEle);
      else if (this.subCategories.length > 0) {
        const findEleIndex = this.subCategories.findIndex(x => x.id == formEle.controls.id.value);
        if (findEleIndex >= 0)
          this.subCategories[findEleIndex].name = formEle.controls.name.value;
        else
          this.addSubCategory(formEle);
      }
    }
  }

  addSubCategory(formEle) {
    this.subCategories.push({
      id: formEle.controls.id.value,
      name: formEle.controls.name.value
    });
  }

  isSubCategoryUpdated() {
    let match = 0;
    if (this.subCategories.length > 0) {
      this.subCategories.forEach(x => {
        if (this.isEqual(x))
          match++;
      });
    }
    return match === this.subCategories.length ? false : true;
  }

  isEqual(x) {
    if (this.selectedCategory && this.selectedCategory.subCategory && this.selectedCategory.subCategory.length > 0) {
      let find = this.selectedCategory.subCategory.find(subattr => subattr.id === x.id && subattr.name == x.name);
      return find ? true : false;
    }
  }

  openEditOption(item) {
    this.setFormData(item);
    this.isEditFrom = true;
    this.isDelete = false;
  }

  setFormData(item) {
    this.selectedCategory = JSON.parse(JSON.stringify(item));
    this.categoryForm.controls.name.setValue(item.name);
    if (item.subCategory.length > 0) {
      item.subCategory.forEach(element => {
        this.subCategoryFormList.push(this.formBuilder.group(this.setSubCategoryForm(element.id, element.name)));
      });
    }
    if (this.isAdd)
      this.subCategoryFormList.push(this.formBuilder.group(this.setSubCategoryForm()));
  }

  openAddOption(item) {
    this.isAdd = true;
    this.selectedCategory = JSON.parse(JSON.stringify(item));
    this.isDelete = false;
    this.setFormData(item);
  }

  openDeleteOption(item) {
    this.selectedCategory = JSON.parse(JSON.stringify(item));
    this.isDelete = true;
    this.setFormData(item);
  }

  cancelMode() {
    this.selectedCategory = null;
    this.isEditFrom = false;
    this.isAdd = false;
    this.isDelete = false;
    this.removeAllFormControl();
    this.categoryForm.reset();
    this.subCategories = [];
    this.isWeightageEdit = false;
    this.updateModel = {};
    this.categoryList = JSON.parse(JSON.stringify(this.oldCategoryList));
  }

  // use for remove position control
  removeAllFormControl() {
    while (this.subCategoryFormList && this.subCategoryFormList.length !== 0) {
      this.subCategoryFormList.removeAt(0);
    }
  }

  disableBtn() {
    if (this.selectedCategory) {
      if (this.categoryForm.value.name == this.selectedCategory.name && !this.isSubCategoryUpdated())
        return true;
      else
        return false;
    }
  }

  addNewCategory(): void {
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      panelClass: ['customDialogClassOnlyInput'],
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.addCategory(dialogResult);
      }
    });
  }

  update() {
    let model = {};
    if ('name' in this.updateModel)
      model['name'] = this.updateModel.name;
    if (this.subCategories.length > 0)
      model['subCategory'] = this.subCategories.map(x => ({ name: x.name, id: x.id }));
    this.updateAPICall(model);
  }

  addSubCategoryAPI() {
    if (this.categoryForm.controls.subCategory.status === FormStatus.Invalid)
      return;
    let model = {};
    this.setSubCategoryData();
    model = {
      name: this.selectedCategory.name,
      subCategory: this.subCategories,
      weightage: this.selectedCategory.weightage
    }
    this.updateAPICall(model);
  }

  setSubCategoryData() {
    this.subCategories = [];
    if (this.subCategoryFormList.length > 0) {
      this.subCategoryFormList.value.forEach(element => {
        this.subCategories.push({ name: element.name, id: element.id });
      });
    }
  }

  updateAPICall(model) {
    this.categoryService.editCategory(this.selectedCategory.id, model).pipe(takeUntil(this.unsubscribeEditCategory$)).subscribe((res: any) => {
      if (res.id) {
        this.getData();
        this.cancelMode();
      }
    });
  }

  addCategory(data) {
    this.categoryService.addCategory(data).pipe(takeUntil(this.unsubscribeAddCategory$)).subscribe((res) => {
      this.getData();
    });
  }

  disableDelete() {
    let isSelectedSubCategory = false;
    if (this.selectedCategory.subCategory && this.selectedCategory.subCategory.length > 0)
      isSelectedSubCategory = !this.categoryForm.controls.subCategory.value.every(x => !x.nameCheckbox);
    if ((!this.categoryForm.value.categoryNameCheckbox) && !isSelectedSubCategory)
      return true;
  }

  getData(): void {
    this.isAPIReponseCome = false;
    this.categoryList = [];
    this.categoryService.getCategoryList().pipe(takeUntil(this.unsubscribeCategory$)).subscribe((res) => {
      this.isAPIReponseCome = true;
      this.categoryList = res;
      if (this.categoryList && this.categoryList.length > 0) {
        this.oldCategoryList = JSON.parse(JSON.stringify(this.categoryList));
        this.minValue = Math.min(...this.categoryList.map(item => +item.weightage));
        this.maxValue = Math.max(...this.categoryList.map(item => +item.weightage));
      }
    });
  }

  confirmDelete() {
    let isSubCategoryDelete;
    if (this.categoryForm.value.categoryNameCheckbox)
      isSubCategoryDelete = false;
    else {
      if (this.categoryForm.controls.subCategory.value.length > 0) {
        var filterSubCategory = this.categoryForm.controls.subCategory.value.filter(x => x.nameCheckbox);
        if (filterSubCategory && filterSubCategory.length > 0)
          isSubCategoryDelete = true;
      }
    }
    const title = isSubCategoryDelete ? "Delete Sub Category" : "Delete Category";
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
        if (isSubCategoryDelete) {
          const subCategories = filterSubCategory.map(x => x.id);
          const subCategory = this.selectedCategory.subCategory.filter(item => subCategories.indexOf(item.id) === -1);
          let model = {};
          model = {
            name: this.selectedCategory.name,
            subCategory: subCategory.map(x => ({ name: x.name, id: x.id }))
          }
          this.updateAPICall(model);
        }
        else
          this.deleteCategoryGroup();
      }
    });
  }

  deleteCategoryGroup() {
    this.categoryService.deleteCategory(this.selectedCategory.id).pipe(takeUntil(this.unsubscribeDeleteCategory$)).subscribe((res: any) => {
      this.cancelMode();
      this.getData();
    });
  }

  updateCategoryweightage() {
    const model = {
      "weightage_list": this.uppdatedWeighageList
    }
    this.categoryService.UpdateCategoryweightage(model).pipe(takeUntil(this.unsubscribeEditWeightageCategory$)).subscribe((res: any) => {
      this.cancelMode();
      this.getData();
    });
  }

  changeWeightage($event, id) {
    if ($event.target.value) {
      this.categoryList.forEach(element => {
        if (element.id === id)
          element.weightage = $event.target.value;
      });
      if (this.uppdatedWeighageList.length === 0)
        this.uppdatedWeighageList.push({
          id: id,
          weightage: $event.target.value
        });
      else if (this.uppdatedWeighageList.length > 0) {
        const findEleIndex = this.uppdatedWeighageList.findIndex(x => x.id == id);
        if (findEleIndex >= 0)
          this.uppdatedWeighageList[findEleIndex].weightage = $event.target.value;
        else {
          this.uppdatedWeighageList.push({
            id: id,
            weightage: $event.target.value
          });
        }
      }
      if (!this.isWeightageUpdated())
        this.uppdatedWeighageList = [];
    }
  }

  isWeightageUpdated() {
    let match = 0;
    if (this.uppdatedWeighageList.length > 0) {
      this.uppdatedWeighageList.forEach(x => {
        if (this.isWeighageEqual(x))
          match++;
      });
    }
    return match > 0 ? false : true;
  }

  isWeighageEqual(x) {
    if (this.oldCategoryList.length > 0) {
      let find = this.oldCategoryList.find(cat => cat.id === x.id && cat.weightage == x.weightage);
      return find ? true : false;
    }
  }

  disabledSaveWeightage() {
    if (this.categoryList && this.categoryList.length > 0) {
      const list = this.categoryList.filter(x => +x.weightage != 0 && +x.weightage <= +this.maxValue);
      if (list.length == this.categoryList.length && this.isEverythingUnique() && this.uppdatedWeighageList.length > 0) {
        return false;
      } else {
        return true;
      }
    }
  }

  isEverythingUnique() {
    const uniques = new Set(this.categoryList.map(item => +item.weightage));
    return [...uniques].length == this.categoryList.length;
  }

  ngOnDestroy() {
    if (this.unsubscribeAddCategory$) {
      this.unsubscribeAddCategory$.next();
      this.unsubscribeAddCategory$.complete();
    }
    if (this.unsubscribeCategory$) {
      this.unsubscribeCategory$.next();
      this.unsubscribeCategory$.complete();
    }
    if (this.unsubscribeDeleteCategory$) {
      this.unsubscribeDeleteCategory$.next();
      this.unsubscribeDeleteCategory$.complete();
    }
  }

  openEditWeightageOption() {
    this.isWeightageEdit = true;
  }

}
