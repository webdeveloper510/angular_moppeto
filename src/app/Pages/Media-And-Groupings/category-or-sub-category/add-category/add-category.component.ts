import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {

  categoryFrom: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AddCategoryComponent>,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    console.log('add ');
    this.createForm();
  }

  public createForm(): void {
    this.categoryFrom = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
  }

  onSubmit() {
    if (this.categoryFrom.invalid)
      return;
    this.dialogRef.close(this.categoryFrom.value);
  }

  onDismiss(): void {
    // Close the dialog, return false
    this.dialogRef.close(false);
  }

}
