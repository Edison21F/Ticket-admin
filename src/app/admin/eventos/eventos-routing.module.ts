import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CineComponent } from './components/cine/cine.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { ConciertoComponent } from './components/concierto/concierto.component';
import { TransporteComponent } from './components/transporte/transporte.component';
import { OtrosComponent } from './components/otros/otros.component';

const routes: Routes = [
  {
    path: 'cine',
    component: CineComponent
  },
  {
    path: '',
    component: EventosComponent
  },{
    path: 'concierto',
    component: ConciertoComponent
  },{
    path: 'transporte',
    component: TransporteComponent
  },{
    path: 'varios',
    component: OtrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventosRoutingModule { }
