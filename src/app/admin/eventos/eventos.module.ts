import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CineComponent } from './components/cine/cine.component';
import { ConciertoComponent } from './components/concierto/concierto.component';
import { TransporteComponent } from './components/transporte/transporte.component';
import { OtrosComponent } from './components/otros/otros.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EventosRoutingModule } from './eventos-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';

import { CarouselModule } from 'primeng/carousel';



import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    CineComponent,
    ConciertoComponent,
    TransporteComponent,
    OtrosComponent,
    EventosComponent
    
  ],
  imports: [
    CommonModule,
    EventosRoutingModule,
    DropdownModule,
    FormsModule,
   CarouselModule,
    ButtonModule,
    TooltipModule,
    DialogModule,
    InputTextModule,
    CardModule,
    
  ]
})
export class EventosModule { }
