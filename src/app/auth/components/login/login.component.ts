import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  hidePassword = true;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Acceso rápido a los controles del formulario
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // Si el formulario es inválido, detener el proceso
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    // Aquí iría la lógica de autenticación
    // Simulación de retraso para efectos de demostración
    setTimeout(() => {
      this.loading = false;
      // Redirigir o mostrar mensaje de éxito
      // Por ejemplo, navegar al dashboard
      // this.router.navigate(['/dashboard']);
    }, 2000);
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }
}
