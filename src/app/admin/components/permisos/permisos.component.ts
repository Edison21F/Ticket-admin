import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-permisos',
  standalone: false,
  
  templateUrl:'./permisos.component.html',
  styleUrl: './permisos.component.scss'
})
export class PermisosComponent {
    @Input() isEditMode: boolean = false;
    @Input() roleName: string = 'Administrador';
  
    formValues = {
      nombreRol: '',
      descripcion: '',
      estado: null,
    };
  
    estados = [
      { label: 'Activo', value: 'Activo' },
      { label: 'Pendiente', value: 'Pendiente' },
      { label: 'Inactivo', value: 'Inactivo' },
    ];
  
    permisos = [
      {
        titulo: 'Gestión de usuarios',
        items: [
          { nombre: 'Ver Usuarios', asignado: false },
          { nombre: 'Crear Usuarios', asignado: false },
          { nombre: 'Asignar usuarios', asignado: false },
          { nombre: 'Eliminar Usuarios', asignado: false },
        ],
      },
      {
        titulo: 'Gestión de tickets',
        items: [
          { nombre: 'Ver Tickets', asignado: false },
          { nombre: 'Crear Tickets', asignado: false },
          { nombre: 'Asignar Tickets', asignado: false },
          { nombre: 'Eliminar Tickets', asignado: false },
        ],
      },
    ];
  
    submitForm() {
      console.log('Formulario enviado:', this.formValues);
      console.log('Permisos asignados:', this.permisos);
    }
  
    cancelForm() {
      console.log('Formulario cancelado.');
    }
}