import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetodosComponent } from './components/metodos/metodos.component';
import { PagosComponent } from './components/pagos/pagos.component';



@NgModule({
  declarations: [
    MetodosComponent,
    PagosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagoModule { }
