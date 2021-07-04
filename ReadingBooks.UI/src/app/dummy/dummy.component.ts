import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Book } from '../models/book.model';
import { MatDialog } from '@angular/material/dialog';
import { AddBookDialogComponent } from '../dashboard/components/add-book-dialog/add-book-dialog.component';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss'],
})
export class DummyComponent implements OnInit {
  @ViewChild('bookName', { read: ElementRef }) bookName: ElementRef;

  public books: Book[] = [];
  public categories: string[] = [];

  constructor(private _bookService: BooksService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this._bookService.getCategory().subscribe((data)=>{
      console.log(data);
    });
  }

  getBooks() {
    this.books = [];
    this._bookService
      .getBooksFromGoogle(this.bookName.nativeElement.value)
      .subscribe((data) => {
        data['items'].forEach((item) => {
          const book: Book = {
            title: item.volumeInfo.title,
            autor: !!item.volumeInfo.authors ? item.volumeInfo.authors[0] : '',
            categorii: '',
            nrPag: !!item.volumeInfo.pageCount ? item.volumeInfo.pageCount : 0,
            progres: 0,
          };
          this.books.push(book);
        });
      });
  }

  openAddBookDialog(book: Book) {
    this.dialog.open(AddBookDialogComponent, {
      data: book,
    });
  }
}
