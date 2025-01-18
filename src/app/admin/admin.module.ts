import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PermisosComponent } from './components/permisos/permisos.component';

//ng library
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms'; // Importar FormsModule
import { ConfirmDialogModule } from 'primeng/confirmdialog'; // Importar el módulo de p-confirmDialog
import { ToastModule } from 'primeng/toast'; // Importar el módulo de p-toast
import { CheckboxModule } from 'primeng/checkbox'; // Importa CheckboxModule


import { CardModule } from 'primeng/card';
@NgModule({
  declarations: [
    PerfilComponent,
    UsuariosComponent,

    RolesComponent,
    DashboardComponent,
    PermisosComponent,

    RolesComponent
  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,   // Agregar InputTextModule
    ToolbarModule,
    DialogModule,
    DropdownModule,    // Agregar DropdownModule
    FormsModule,
    ConfirmDialogModule,
    ToastModule,
    CheckboxModule,   // Agregar CheckboxModule// 
        CardModule

  ]
})
export class AdminModule { }
