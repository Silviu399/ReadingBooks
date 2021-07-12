import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { GBook } from '../models/googleBook.model';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  private urlGoogle = 'https://www.googleapis.com/books/v1/volumes?q=';
  private urlAPI = 'https://localhost:44346/api/';

  constructor(private http: HttpClient) {}

  public getBooksFromGoogle(bookName: string): Observable<GBook[]> {
    return this.http.get<GBook[]>(this.urlGoogle + bookName);
  }

  public getCategory() {
    return this.http.get<string[]>(this.urlAPI + 'GetCategory');
  }

  public createBook(book: Book) {
    return this.http.post(this.urlAPI + 'CreateBook', book);
  }

  public getBooksWaiting(uid: string) {
    return this.http.get<Book[]>(this.urlAPI + 'GetBooksWaiting?userUid=' + uid);
  }

  public getBooksInReading(uid: string) {
    return this.http.get<Book[]>(this.urlAPI + 'GetBooksInReading?userUid=' + uid);
  }

  public getBooksCompleted(uid: string) {
    return this.http.get<Book[]>(this.urlAPI + 'GetBooksCompleted?userUid=' + uid);
  }

  public updateBook(book: Book, numberPages: number, userName: string) {
    return this.http.put(this.urlAPI + 'UpdateBook?numberPages=' + numberPages + '&userName=' + userName, book);
  }
}
