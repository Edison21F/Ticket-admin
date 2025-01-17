import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';


@NgModule({
  declarations: [
    PerfilComponent,
    UsuariosComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
