import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiaBoxComponent } from './../dia-box/dia-box.component';
import { UserInput } from '../user-input';
import { ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

const ELEMENT_DATA: UserInput[] = [
  { id: 1, firstName: 'Rana', lastName: 'Potu', email: 'rana.potu@gmail.com' },
  {
    id: 2,
    firstName: 'Ivansh',
    lastName: 'Potu',
    email: 'ivansh.potu@gmail.com',
  },
];
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  @ViewChild(MatTable, { static: true }) table!: MatTable<UserInput>;

  displayedColumns: string[] = [
    'id',
    'firstName',
    'lastName',
    'email',
    'action',
  ];
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
        console.log(result.data);
      } else if (result.event == 'Update') {
        this.updateRowData(result.data);
      } else if (result.event == 'Delete') {
        this.deleteRowData(result.data);
      }
    });
  }

  addRowData(row_obj: UserInput) {
    this.dataSource.push({
      id: ELEMENT_DATA.length + 1,
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
        value.lastName = row_obj.lastName;
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
