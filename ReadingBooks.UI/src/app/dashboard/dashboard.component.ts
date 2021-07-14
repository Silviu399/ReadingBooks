import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { User } from '../models/user.model';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  public booksWaiting: Book[] = [];
  public booksInReading: Book[] = [];
  public booksCompleted: Book[] = [];

  constructor(private bookService: BooksService) {
    this.getData();
  }

  ngOnInit(): void {}

  public getData() {
    const stringUser = sessionStorage.getItem('user');
    const userData: User = JSON.parse(stringUser);
    const uid = userData.uid;

    this.bookService.getBooksWaiting(uid).subscribe((data) => {
      this.booksWaiting = data;
    });

    this.bookService.getBooksInReading(uid).subscribe((data) => {
      this.booksInReading = data;
    });

    this.bookService.getBooksCompleted(uid).subscribe((data) => {
      this.booksCompleted = data;
    });
  }
}
