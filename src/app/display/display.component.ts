import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DiaBoxComponent } from './../dia-box/dia-box.component';

export interface userInput {
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: userInput[] = [
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

  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  dataSource = ELEMENT_DATA;

  openDialog(action: any, obj: any) {
    console.log('add Button clicked');
    obj.action = action;
    const dialogRef = this.dialog.open(DiaBoxComponent, {
      width: '250px',
      data: obj,
    });
  }
}
