import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-categories-view',
  templateUrl: './categories-view.component.html',
  styleUrls: ['./categories-view.component.scss']
})
export class CategoriesViewComponent implements OnInit {
  categories: Category[] = [
    {
      name: 'cultura',
      level: 4,
      experience: 40
    },
    {
      name: 'istorie',
      level: 2,
      experience: 70
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
