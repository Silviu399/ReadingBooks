import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GBook } from 'src/app/models/googleBook.model';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  private url = 'https://www.googleapis.com/books/v1/volumes?q=morometii&maxResult=20';
  private url2 = 'https://www.googleapis.com/books/v1/volumes/xbEcAQAAIAAJ';

  public book: Object = {};

  constructor(private http: HttpClient) { this.book = {}}

  ngOnInit(): void {
  }

  getBooks(): Observable<GBook[]> {
    return this.http.get<GBook[]>(this.url);
  }
}
