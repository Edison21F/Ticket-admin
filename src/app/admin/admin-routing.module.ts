import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './components/perfil/perfil.component';
import { MetodosComponent } from './pago/components/metodos/metodos.component';
import { PagosComponent } from './pago/components/pagos/pagos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RolesComponent } from './components/roles/roles.component';
import { PermisosComponent } from './components/permisos/permisos.component';
import { AppLayout } from './layout/component/app.layout';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayout,
    children: [
      {
        path:'perfil',
        component: PerfilComponent
      },
      {
        path:'eventos',
        loadChildren:()=>import('./eventos/eventos.module').then(ev=>ev.EventosModule)
      },{
        path:'metodos-pago',
        component: MetodosComponent
      },{
        path:'pagos',
        component: PagosComponent
      },{
        path:'usuarios',
        component: UsuariosComponent
      },{
        path:'roles',
        component:RolesComponent
      },{
        path:'permisos',
        component:PermisosComponent
      },{
        path:'',
        component:DashboardComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
