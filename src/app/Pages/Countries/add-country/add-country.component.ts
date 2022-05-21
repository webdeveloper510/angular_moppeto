import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { AddCountry, Curreny } from '../country.model';
@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {

  countryForm: FormGroup;


  constructor(
    public dialogRef: MatDialogRef<AddCountryComponent>,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createForm();
  }

  public createForm(): void {
    this.countryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      currencySymb: ['', Validators.required],
      currencyName: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.countryForm.invalid)
      return;
    this.dialogRef.close(this.getModel());
  }

  getModel(): AddCountry {
    const currency: Curreny = {
      display_character: this.countryForm.value.currencySymb,
      name: this.countryForm.value.currencyName
    }
    const model: AddCountry = {
      name: this.countryForm.value.name,
      abbr: null,
      currency: currency
    }
    return model;
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}
