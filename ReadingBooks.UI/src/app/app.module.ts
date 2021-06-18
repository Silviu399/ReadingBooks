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
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
