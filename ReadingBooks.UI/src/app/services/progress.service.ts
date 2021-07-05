import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryProgress } from '../models/category-progress.model';
import { UserProgress } from '../models/user-progress.model';

@Injectable({
  providedIn: 'root',
})
export class ProgressService {
  private urlAPI = 'https://localhost:44346/api/';

  constructor(private http: HttpClient) {}

  public getUserProgress(userId: string): Observable<UserProgress> {
    return this.http.get<UserProgress>(
      this.urlAPI + 'GetUserProgress?userId=' + userId
    );
  }

  public getCategoryProgress(userId: string): Observable<CategoryProgress[]> {
    return this.http.get<CategoryProgress[]>(
      this.urlAPI + 'GetCategoryProgress?userId=' + userId
    );
  }
}
