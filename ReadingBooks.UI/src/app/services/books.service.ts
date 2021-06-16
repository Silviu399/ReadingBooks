import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GBook } from '../models/googleBook.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private url = 'https://www.googleapis.com/books/v1/volumes?q=';
  private url2 = 'https://www.googleapis.com/books/v1/volumes/xbEcAQAAIAAJ';

  constructor(private http: HttpClient) { }

  public getBooks(bookName: string): Observable<GBook[]> {
    return this.http.get<GBook[]>(this.url + bookName);
  }
}
