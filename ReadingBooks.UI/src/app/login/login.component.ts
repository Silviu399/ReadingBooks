import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(public route: Router, private firebaseService: FirebaseService) {}

  public toBooks(event) {
    this.firebaseService.getUserData(event.uid);
    this.route.navigate(['/biblioteca']);
  }
}
