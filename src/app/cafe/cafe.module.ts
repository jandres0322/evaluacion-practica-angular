import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoCafeComponent } from './listado-cafe/listado-cafe.component';



@NgModule({
  declarations: [
    ListadoCafeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoCafeComponent
  ]
})
export class CafeModule { }
