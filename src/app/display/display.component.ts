import { Component, OnInit } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {}

  displayedColumns: string[] = ['firstName', 'lastName', 'email'];
  dataSource = ELEMENT_DATA;

  openDialog(action: any, obj: any) {
    console.log('add Button clicked');
  }
}
