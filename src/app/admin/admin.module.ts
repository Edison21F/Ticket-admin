import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


//ng library
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    PerfilComponent,
    UsuariosComponent,
    RolesComponent
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ButtonModule,
    CardModule

  ]
})
export class AdminModule { }
