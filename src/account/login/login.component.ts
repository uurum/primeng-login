import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Validators, FormBuilder } from '@angular/forms';
import { Component } from '@angular/core';
import { createPasswordStrengthValidator } from 'src/shared/controls/controls';
import { accountModuleAnimation } from 'src/shared/animations/routerTransition';
import { LoginInput } from 'src/shared/models/signin.model';
import { mockUser } from 'src/shared/data/mockData';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  animations: [accountModuleAnimation()],
  providers: [MessageService]
})
export class LoginComponent {

  loginForm = this.fb.group({
    email: ['', {
      validators: [
        Validators.required,
        Validators.email
      ]
    }],
    password: ['', {
      validators: [
        Validators.required,
        Validators.minLength(8),
        createPasswordStrengthValidator()
      ]
    }
    ]
  });

  constructor(
    private fb: FormBuilder,
    private messageService: MessageService,
    private router: Router) { }

  logIn(): void {

    if (!this.loginForm.valid) {
      this.messageService.add({ severity: 'error', summary: 'Login form has errors' });
      this.loginForm.markAllAsTouched();
      return;
    }

    const payload = new LoginInput();
    if (this.email && this.email.value) {
      payload.email = this.email.value;
    }
    if (this.password && this.password.value) {
      payload.password = this.password.value;
    }

    this.messageService.clear();

    if (payload.email && payload.email === mockUser.username && payload.password && payload.password === mockUser.passwprd) {
      this.messageService.add({ severity: 'success', summary: 'Signed in successfully.', detail: 'Redirecting home page...' });
      setTimeout(() => {
        this.router.navigate(['/dashboard']);
      }, 3000)
    } else {
      this.messageService.add({ severity: 'error', summary: 'An error occured while signing in!' });
    }

  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

}
