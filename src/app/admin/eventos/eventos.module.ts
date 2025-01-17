import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CineComponent } from './components/cine/cine.component';
import { ConciertoComponent } from './components/concierto/concierto.component';
import { TransporteComponent } from './components/transporte/transporte.component';
import { OtrosComponent } from './components/otros/otros.component';
import { EventosComponent } from './components/eventos/eventos.component';



@NgModule({
  declarations: [
    CineComponent,
    ConciertoComponent,
    TransporteComponent,
    OtrosComponent,
    EventosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class EventosModule { }
