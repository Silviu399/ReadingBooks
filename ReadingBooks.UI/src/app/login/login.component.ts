import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public route: Router) {}

  public toBooks(event) {
    const user: User = {
      uid: event.uid,
      displayName: event.displayName,
      email: event.email,
      photoURL: event.photoURL
    }
    const jsonUser = JSON.stringify(user);
    sessionStorage.setItem('user', jsonUser);
    this.route.navigate(['/biblioteca']);
  }
}
