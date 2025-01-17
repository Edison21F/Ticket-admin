import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule],
  template: `
    <ul class="layout-menu">
      <ng-container *ngFor="let item of model; let i = index">
        <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
        <li *ngIf="item.separator" class="menu-separator"></li>
      </ng-container>
    </ul>
  `
})
export class AppMenu {
  model: MenuItem[] = [];

  ngOnInit() {
    this.model = [
      {
        label: 'Inicio',
        items: [
          { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
        ]
      },
      {
        label: 'Gestión de Usuarios',
        items: [
          { label: 'Usuarios', icon: 'pi pi-fw pi-users', routerLink: ['/admin/usuarios'] },
          { label: 'Roles y Permisos', icon: 'pi pi-fw pi-key', routerLink: ['/admin/roles'] }
        ]
      },
      {
        label: 'Eventos',
        items: [
          { label: 'Listado de Eventos', icon: 'pi pi-fw pi-list', routerLink: ['/admin/eventos'] },
          { label: 'Conciertos', icon: 'pi pi-fw pi-plus', routerLink: ['/admin/eventos/concierto'] },
          { label: 'Cine', icon: 'pi pi-fw pi-plus', routerLink: ['/admin/eventos/cine'] },
          { label: 'Transporte', icon: 'pi pi-fw pi-plus', routerLink: ['/admin/eventos/transporte'] },
          { label: 'Otros', icon: 'pi pi-fw pi-plus', routerLink: ['/admin/eventos/varios'] }
        ]
      },
      {
        label: 'Tickets',
        items: [
          { label: 'Listado de Tickets', icon: 'pi pi-fw pi-ticket', routerLink: ['/tickets'] },
          { label: 'Crear Ticket', icon: 'pi pi-fw pi-plus', routerLink: ['/tickets/create'] }
        ]
      },
      {
        label: 'Pagos y Transacciones',
        items: [
          { label: 'Gestión de Pagos', icon: 'pi pi-fw pi-wallet', routerLink: ['/payments'] }
        ]
      },
      {
        label: 'Reportes y Analíticas',
        items: [
          { label: 'Reportes', icon: 'pi pi-fw pi-chart-line', routerLink: ['/reports'] }
        ]
      },
      {
        label: 'Centro de Soporte',
        items: [
          { label: 'Soporte', icon: 'pi pi-fw pi-support', routerLink: ['/support'] }
        ]
      },
      {
        label: 'Configuración',
        items: [
          { label: 'Ajustes', icon: 'pi pi-fw pi-cog', routerLink: ['/settings'] }
        ]
      }
    ];
  }
}
