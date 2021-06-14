import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.scss']
})
export class BooksViewComponent implements OnInit {
  books: Book[] = [
    {
      title: 'Amintiri',
      autor: 'Ion Creanga',
      categorii: 'aventura',
      nrPag: 287,
      progres: 72
    },
    {
      title: 'Camioane',
      autor: 'Eminescu',
      categorii: 'copilarie',
      nrPag: 390,
      progres: 35
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
