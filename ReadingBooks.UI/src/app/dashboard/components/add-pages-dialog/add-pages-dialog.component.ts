import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/book.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-pages-dialog',
  templateUrl: './add-pages-dialog.component.html',
  styleUrls: ['./add-pages-dialog.component.scss'],
})
export class AddPagesDialogComponent {
  public nrPagini: number;
  public book: Book;

  constructor(
    public dialogRef: MatDialogRef<AddPagesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book,
    private _booksService: BooksService
  ) {
    this.book = data;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPages() {
    if (this.book.progres + this.nrPagini > this.book.nrPag) {
      alert(
        'Asigurate ca numarul introdus nu este mai mare decat numarul total de pagini al cartii.'
      );
      this.nrPagini = 0;
    } else {
      this.book.progres += this.nrPagini;
      this._booksService.updateBook(this.book).subscribe(() => {
        location.reload();
      });
    }
  }
}
