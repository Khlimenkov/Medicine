import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-signup',
  template: `
  <div style="text-align:center">
    <h1>
      Регистрация
    </h1>
  

  <input style="margin-right:20px; padding:10px; margin-top:40px"#username type='text' placeholder='Имя пользователя'>
  <input  style="margin-right:20px; padding:10px; margin-top:40px"#password1 type='password' placeholder='Пароль'>
  <input  style="margin-right:20px; padding:10px; margin-top:40px"#password2 type='password' placeholder='Повторите пароль'>
  <button mat-raised-button (click)="signup(username.value, '', password1.value, password2.value)">Зарегистрироваться</button>
  <p>{{ error?.message }}</p>
  <p *ngIf="error">{{ error?.error | json }}</p>
  </div>
  `
})
export class SignupComponent implements OnInit {

  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  signup(username: string, email: string, password1: string, password2: string) {
    this.authService.signup(username, email, password1, password2).subscribe(
      success => this.router.navigate(['medicalcard']),
      error => this.error = error
    );
  }
}