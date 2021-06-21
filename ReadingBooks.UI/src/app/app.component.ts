import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLoggedIn = false;

  printUser(event) {
    console.log(event);
    this.isLoggedIn = true;
  }
}
