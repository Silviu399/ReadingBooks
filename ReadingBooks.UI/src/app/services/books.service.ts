import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GBook } from '../models/googleBook.model';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private urlGoogle = 'https://www.googleapis.com/books/v1/volumes?q=';
  private urlAPI = 'https://localhost:44346/api/';

  constructor(private http: HttpClient) { }

  public getBooksFromGoogle(bookName: string): Observable<GBook[]> {
    return this.http.get<GBook[]>(this.urlGoogle + bookName);
  }

  public getCategory() {
    return this.http.get<string[]>(this.urlAPI + "GetCategory");
  }
}
