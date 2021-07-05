import { Inject, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/book.model';
import { User } from 'src/app/models/user.model';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.scss'],
})
export class AddBookDialogComponent implements OnInit  {
  public autor: string = "";
  public nrPag: string = "";
  public category: string = "";
  public categories: string[] = [];
  public userData: User;

  constructor(
    public dialogRef: MatDialogRef<AddBookDialogComponent>,
    private _bookService: BooksService,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) {}

  ngOnInit(): void {
    this.nrPag = this.data.nrPag.toString();
    this.autor = this.data.autor;
    this._bookService.getCategory().subscribe((data)=>{
      this.categories = data;
    });
    const stringUser = sessionStorage.getItem('user');
    this.userData = JSON.parse(stringUser);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addBook() {
    let book: Book = {
      id: this.data.id,
      title: this.data.title,
      nrPag: Number.parseInt(this.nrPag),
      autor: this.autor,
      categorii: this.category,
      progres: 0,
      uidUser: this.userData.uid
    }
    this._bookService.createBook(book).subscribe(() => {
      this.dialogRef.close();
      location.reload();
    });
  }
}
