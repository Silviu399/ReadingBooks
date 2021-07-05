import { Component, OnInit } from '@angular/core';
import { CategoryProgress } from 'src/app/models/category-progress.model';
import { Category } from 'src/app/models/category.model';
import { UserProgress } from 'src/app/models/user-progress.model';
import { User } from 'src/app/models/user.model';
import { ProgressService } from 'src/app/services/progress.service';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.scss'],
})
export class CategoriesViewComponent implements OnInit {
  public userProgress: UserProgress;
  public categoryProgress: CategoryProgress[];

  categories: Category[] = [
    {
      name: 'cultura',
      level: 4,
      experience: 40,
    },
    {
      name: 'istorie',
      level: 2,
      experience: 70,
    },
  ];

  constructor(private progressService: ProgressService) {}

  ngOnInit(): void {
    const stringUser = sessionStorage.getItem('user');
    const userData: User = JSON.parse(stringUser);
    const userId = userData.uid;

    this.progressService.getUserProgress(userId).subscribe((data) => {
      this.userProgress = data;
    });
    this.progressService.getCategoryProgress(userId).subscribe((data) => {
      this.categoryProgress = data;
    });
  }
}
