import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Book } from 'src/app/models/book.model';
import { AddPagesDialogComponent } from '../add-pages-dialog/add-pages-dialog.component';

@Component({
  selector: 'app-books-view',
  templateUrl: './books-view.component.html',
  styleUrls: ['./books-view.component.scss'],
})
export class BooksViewComponent {
  @Input() books: Book[];

  constructor(private dialog: MatDialog) {}

  openAddPagesDialog(book: Book) {
    if (book.nrPag != book.progres) {
      this.dialog.open(AddPagesDialogComponent, {
        data: book,
      });
    }
  }
}
