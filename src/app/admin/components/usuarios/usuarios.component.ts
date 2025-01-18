import { Component } from '@angular/core';


@Component({
  selector: 'app-usuarios',
  standalone: false,
  
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.scss'
})
export class UsuariosComponent {
  usuarios = [
    { nombre: 'Juan Pérez', email: 'juan.perez@example.com', fechaRegistro: '01/01/2025', estado: 'Activo', rol: 'Administrador' },
    { nombre: 'María López', email: 'maria.lopez@example.com', fechaRegistro: '15/02/2025', estado: 'Inactivo', rol: 'Usuario' },
    { nombre: 'Pepe Fulano', email: 'pepefulano@example.com', fechaRegistro: '18/02/2025', estado: 'Activo', rol: 'Usuario' },
    { nombre: 'Jombriel Choke', email: 'jombrielchoke@example.com', fechaRegistro: '28/03/2025', estado: 'Inactivo', rol: 'Usuario' }
  ];

  selectedUser: any = null;

  onSelectUser(usuario: any) {
    this.selectedUser = usuario;
  }

  editUser(user: any) {
    alert(`Editar datos de: ${user?.nombre}`);
  }

  deleteUser(user: any) {
    alert(`Eliminar usuario: ${user?.nombre}`);
  }

  resetPassword(user: any) {
    alert(`Restablecer contraseña de: ${user?.nombre}`);
  }

  toggleStatus(user: any) {
    alert(`Activar/Desactivar usuario: ${user?.nombre}`);
  }
}
