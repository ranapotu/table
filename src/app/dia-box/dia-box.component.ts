import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';
import { UserInput } from '../user-input';

@Component({
  selector: 'app-dia-box',
  templateUrl: './dia-box.component.html',
  styleUrls: ['./dia-box.component.css'],
})
export class DiaBoxComponent implements OnInit {
  action: string;
  form_data: any;

  constructor(
    public dialogRef: MatDialogRef<DiaBoxComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UserInput
  ) {
    console.log(data);
    this.form_data = { ...data };
    this.action = this.form_data.action;
  }

  ngOnInit(): void {}

  doAction() {
    this.dialogRef.close({ event: this.action, data: this.form_data });
    console.log(this.data);
  }

  closeDialog() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  firstName = new FormControl('', [Validators.required]);
  lastName = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}
