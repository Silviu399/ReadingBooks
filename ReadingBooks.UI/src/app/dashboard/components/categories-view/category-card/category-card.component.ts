import { Component, Input, OnInit } from '@angular/core';
import { CategoryProgress } from 'src/app/models/category-progress.model';
import { Category } from 'src/app/models/category.model';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {
  @Input() category: CategoryProgress;
  constructor() { }

  ngOnInit(): void {
  }

}
