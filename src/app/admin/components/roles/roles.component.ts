import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-roles',
  standalone: false,
  
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent {
  roles: any[] = [];
  currentRole: any = {};
  displayDialog: boolean = false;
  dialogHeader: string = '';
  statusOptions: any[] = [
    { label: 'Activo', value: 'Activo' },
    { label: 'Inactivo', value: 'Inactivo' },
    { label: 'Pendiente', value: 'Pendiente' }
  ];

  constructor(private confirmationService: ConfirmationService, private messageService: MessageService) {
    this.roles = [
      { id: 1, name: 'Administrador', description: 'Acceso total', status: 'Activo', users: 2 },
      { id: 2, name: 'Soporte', description: 'Acceso limitado', status: 'Inactivo', users: 5 },
      { id: 3, name: 'Escalabilidad', description: 'Gestión avanzada', status: 'Pendiente', users: 3 }
    ];
  }

  getBadgeClass(status: string): string {
    return {
      Activo: 'badge badge-success',
      Inactivo: 'badge badge-danger',
      Pendiente: 'badge badge-warning'
    }[status] || 'badge';
  }

  openDialog(mode: string, role?: any) {
    this.currentRole = role ? { ...role } : { name: '', description: '', status: '' };
    this.dialogHeader = mode === 'edit' ? 'Editar Rol' : 'Crear Rol';
    this.displayDialog = true;
  }

  saveRole() {
    if (this.currentRole.id) {
      const index = this.roles.findIndex(r => r.id === this.currentRole.id);
      this.roles[index] = { ...this.currentRole };
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Rol editado exitosamente' });
    } else {
      this.currentRole.id = this.roles.length + 1;
      this.roles.push({ ...this.currentRole });
      this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Rol creado exitosamente' });
    }
    this.displayDialog = false;
  }

  confirmDelete(role: any) {
    this.currentRole = role;
    this.confirmationService.confirm({
      message: `¿Estás seguro de eliminar el rol "${role.name}"?`, // Corrección con comillas invertidas
      accept: () => this.deleteRole()
    });
  }

  deleteRole() {
    this.roles = this.roles.filter(r => r.id !== this.currentRole.id);
    this.messageService.add({ severity: 'success', summary: 'Éxito', detail: 'Rol eliminado exitosamente' });
  }

  cancel() {
    this.displayDialog = false;
  }

  cancelDelete() {
    this.currentRole = {};
  }
}


