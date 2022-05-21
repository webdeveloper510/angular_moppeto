import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-age-group',
  templateUrl: './add-edit-age-group.component.html',
  styleUrls: ['./add-edit-age-group.component.scss']
})
export class AddEditAgeGroupComponent implements OnInit {

  ageGroupForm: FormGroup;
  minAgeList = [];
  maxAgeList = [];
  editDetail;
  addedAgelist = [];


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<AddEditAgeGroupComponent>
  ) {
  }

  ngOnInit(): void {
    this.createForm();
    this.prepareList();
    this.setMinMaxAgeList();
    Object.keys(this.ageGroupForm.controls)
      .forEach(key => {
        if (key && this.data.isEdit)
          this.onValueChanges(key);
      });
  }

  prepareList() {
    this.addedAgelist = [];
    if (this.data.ageGroupList && this.data.ageGroupList.length > 0) {
      this.data.ageGroupList.forEach(element => {
        for (let index = +element.min_age; index <= +element.max_age; index++) {
          this.addedAgelist.push(index);
        }
      });
    }
  }

  //for update model value after form value change
  onValueChanges(key): void {
    this.ageGroupForm.get(key).valueChanges.subscribe((value) => {
      if (key && (this.ageGroupForm.controls[key].dirty || this.ageGroupForm.controls[key].touched)) {
        this.editDetail[key] = value;
      }
    });
  }

  setMinMaxAgeList() {
    for (let index = 0; index <= 21; index++) {
      let value = index === 0 ? index.toString() : index;
      this.minAgeList.push(value.toString());
    }
    if (!this.data.isEdit) {
      if (this.data.ageGroupList.length > 0) {
        this.minAgeList = [];
        for (let index = 0; index <= 21; index++) {
          if (this.addedAgelist.findIndex(x => x == index) < 0)
            this.minAgeList.push(index.toString());
        }
      }
    }
    this.maxAgeList = JSON.parse(JSON.stringify(this.minAgeList));
    this.maxAgeList.push('Max');
  }

  isValidData(value) {

  }

  createForm() {
    this.ageGroupForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      min_age: ['', Validators.required],
      max_age: ['', Validators.required]
    });
    if (this.data.formData) {
      this.editDetail = JSON.parse(JSON.stringify(this.data.formData));
      this.ageGroupForm.setValue(this.data.formData);
    }
  }


  maxAgeChange() {
    this.setAgeGroupName();
  }

  minAgeChange() {
    let selectedValue = this.ageGroupForm.controls.min_age.value;
    this.maxAgeList = this.minAgeList.filter(x => x >= +selectedValue);
    this.maxAgeList.push('Max');
    this.setAgeGroupName();
  }

  setAgeGroupName() {
    if (this.ageGroupForm.controls.min_age.value && this.ageGroupForm.controls.max_age.value) {
      if (this.ageGroupForm.controls.max_age.value === 'Max') {
        const minValue = this.ageGroupForm.controls.min_age.value + " +";
        this.ageGroupForm.controls.name.setValue(minValue);
      } else
        this.ageGroupForm.controls.name.setValue(this.ageGroupForm.controls.min_age.value + "-" + this.ageGroupForm.controls.max_age.value);
    }
  }

  public onConfirm<T>(): void {
    // Close the dialog, return true
    if (!this.data.isEdit)
      this.dialogRef.close(this.ageGroupForm.value);
    else {
      let editModel = {};
      let difference = Object.keys(this.editDetail).filter(k => {
        return this.data.formData[k] !== this.editDetail[k];
      });
      difference.map(k => {
        editModel[k] = this.editDetail[k];
      });
      this.dialogRef.close(editModel);
    }
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

  disableBtn() {
    if (JSON.stringify(this.data.formData) === JSON.stringify(this.ageGroupForm.value))
      return true;
    else if (+this.ageGroupForm.value.min_age <= +this.ageGroupForm.value.max_age && (+this.ageGroupForm.value.min_age >= +this.data.formData.min_age && +this.ageGroupForm.value.max_age <= +this.data.formData.max_age))
      return false;
    else
      return true;
  }
}
