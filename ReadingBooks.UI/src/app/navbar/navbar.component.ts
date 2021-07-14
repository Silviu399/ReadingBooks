import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isAdmin: boolean = false;

  constructor(public route: Router, private firebaseService: FirebaseService) {
  }

  ngOnInit(): void {
    this.isAdmin = this.firebaseService.isAdmin();
  }

  public toLogin() {
    sessionStorage.removeItem('users');
    this.route.navigate(['/login']);
  }
}
