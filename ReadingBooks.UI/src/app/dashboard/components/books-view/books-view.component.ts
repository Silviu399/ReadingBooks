import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/models/book.model';
import { AddPagesDialogComponent } from '../add-pages-dialog/add-pages-dialog.component';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.scss'],
})
export class BooksViewComponent {
  books: Book[] = [
    {
      title: 'Amintiri',
      autor: 'Ion Creanga',
      categorii: 'aventura',
      nrPag: 287,
      progres: 72,
    },
    {
      title: 'Camioane',
      autor: 'Eminescu',
      categorii: 'copilarie',
      nrPag: 390,
      progres: 35,
    },
  ];
  constructor(private dialog: MatDialog) {}

  openAddPagesDialog(book: Book) {
    this.dialog.open(AddPagesDialogComponent, {
      data: book,
    });
  }
}
