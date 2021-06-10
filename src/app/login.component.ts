import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  template: `
  <div style="text-align:center;">
    <h1>
      Вход
    </h1>
  
  
  <input style="margin-right:20px; padding:10px; margin-top:40px" matInput #username type='text' placeholder='Имя'>
  <input style="margin-right:20px; padding:10px; margin-top:40px" matInput #password type='password' placeholder='Пароль'>
  <button mat-raised-button (click)="login(username.value, password.value)">Войти</button>
  <p>{{ error?.message }}</p>
  <p *ngIf="error">{{ error?.error | json }}</p>
  </div>
  `
})

export class LoginComponent implements OnInit {

  error: any;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      success => this.router.navigate(['medicalcard']),
      error => this.error = error
    );
  }
}