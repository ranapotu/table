import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiaBoxComponent } from './../dia-box/dia-box.component';
import { UserInput } from '../user-input';

const ELEMENT_DATA: UserInput[] = [
  { firstName: 'Rana', lastName: 'Potu', email: 'rana.potu@gmail.com' },
  { firstName: 'Ivansh', lastName: 'Potu', email: 'ivansh.potu@gmail.com' },
];
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['firstName', 'lastName', 'email', 'action'];
  dataSource = ELEMENT_DATA;

  openDialog(action: any, obj: any) {
    console.log('add Button clicked');
    obj.action = action;
    const dialogRef = this.dialog.open(DiaBoxComponent, {
      width: '250px',
      data: obj,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result.event == 'Add') {
        this.addRowData(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: UserInput) {
    console.log('add button');
    this.dataSource.push({
      firstName: row_obj.firstName,
      lastName: row_obj.lastName,
      email: row_obj.email,
    });
    this.dataSource = [...ELEMENT_DATA];
  }

  updateRowData(row_obj: UserInput) {
    console.log('update btn');
    this.dataSource = this.dataSource.filter((value, key) => {
      if (value.firstName === row_obj.firstName) {
        value.firstName = row_obj.firstName;
      } else if (value.lastName === row_obj.lastName) {
        value.firstName = row_obj.firstName;
      } else if (value.email === row_obj.email) {
        value.email = row_obj.email;
      }
      return true;
    });
  }

  deleteRowData(row_obj: UserInput) {
    console.log('del btn');
  }
}
