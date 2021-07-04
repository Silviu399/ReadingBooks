import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { DummyComponent } from './dummy/dummy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BooksViewComponent } from './dashboard/components/books-view/books-view.component';
import { CategoriesViewComponent } from './dashboard/components/categories-view/categories-view.component';
import { LoginComponent } from './login/login.component';
import { BookCardComponent } from './dashboard/components/book-card/book-card.component';
import { CategoryCardComponent } from './dashboard/components/categories-view/category-card/category-card.component';
import { HttpClientModule } from '@angular/common/http';
import { AddBookDialogComponent } from './dashboard/components/add-book-dialog/add-book-dialog.component';
import { AddPagesDialogComponent } from './dashboard/components/add-pages-dialog/add-pages-dialog.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgxAuthFirebaseUIModule } from 'ngx-auth-firebaseui';

function firebaseAppNameFactory() {
  return 'my-app';
}

const firebaseConfig = {
  apiKey: "AIzaSyBEwqTIZAQP_6VkKT7Q2M7V4TG-FDE0jck",
  authDomain: "readingbooks-b23d3.firebaseapp.com",
  projectId: "readingbooks-b23d3",
  storageBucket: "readingbooks-b23d3.appspot.com",
  messagingSenderId: "642155826507",
  appId: "1:642155826507:web:7e221e6872b23b62b36cce"
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DummyComponent,
    DashboardComponent,
    BooksViewComponent,
    CategoriesViewComponent,
    LoginComponent,
    BookCardComponent,
    CategoryCardComponent,
    AddBookDialogComponent,
    AddPagesDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatSelectModule,
    MatDividerModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, NgxAuthFirebaseUIModule.forRoot(firebaseConfig, firebaseAppNameFactory, {
      authGuardFallbackURL: '/login',
      authGuardLoggedInURL: '/carti',
    }) // storage
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
