import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BooksWithNbPages, CategoryWithNumberOfBooksFinalized, ReadersByXP, ReadersWithMostBooksFinished, TopReadersPerCategory } from '../models/reports.model';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  private urlAPI = 'https://localhost:44346/api/';

  constructor(private http: HttpClient) {}

  public getReadersByXP(): Observable<ReadersByXP[]> {
    return this.http.get<ReadersByXP[]>(
      this.urlAPI + 'GetReadersByXP'
    );
  }

  public getReadersWithMostBooksFinished(): Observable<ReadersWithMostBooksFinished[]> {
    return this.http.get<ReadersWithMostBooksFinished[]>(
      this.urlAPI + 'GetReadersWithMostBooksFinished'
    );
  }

  public getTopReadersPerCategory(): Observable<TopReadersPerCategory[]> {
    return this.http.get<TopReadersPerCategory[]>(
      this.urlAPI + 'GetTopReadersPerCategory'
    );
  }

  public getCategorysByNumberOfBooksFinalized(): Observable<CategoryWithNumberOfBooksFinalized[]> {
    return this.http.get<CategoryWithNumberOfBooksFinalized[]>(
      this.urlAPI + 'GetCategorysByNumberOfBooksFinalized'
    );
  }

  public getBooksByNbPages(): Observable<BooksWithNbPages[]> {
    return this.http.get<BooksWithNbPages[]>(
      this.urlAPI + 'GetBooksByNbPages'
    );
  }
}
