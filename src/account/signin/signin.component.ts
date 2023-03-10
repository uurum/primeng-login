import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from 'src/shared/controls/controls';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  providers: [MessageService]
})
export class SigninComponent {

  signinForm = this.formBuilder.group({
    username: ['', Validators.required],
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
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  signIn(): void {

    if (!this.signinForm.valid) {
      this.messageService.add({ severity: 'error', summary: 'SignIn form has errors!' });
      this.signinForm.markAllAsTouched();
      return;
    }
    this.messageService.add({ severity: 'success', summary: 'Signed in successfully.' });
    localStorage.setItem('user', JSON.stringify(this.signinForm.value));
  }

  get username() { return this.signinForm.get('username'); }
  get email() { return this.signinForm.get('email'); }
  get password() { return this.signinForm.get('password'); }

}
