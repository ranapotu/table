import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

const materialComponents = [MatDialogModule, MatTableModule];

@NgModule({
  imports: [materialComponents],
  exports: [materialComponents],
})
export class MaterialModule {}
