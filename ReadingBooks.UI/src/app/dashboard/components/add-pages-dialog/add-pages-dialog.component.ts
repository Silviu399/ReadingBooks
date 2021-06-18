import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from 'src/app/models/book.model';

@Component({
  selector: 'app-add-pages-dialog',
  templateUrl: './add-pages-dialog.component.html',
  styleUrls: ['./add-pages-dialog.component.scss'],
})
export class AddPagesDialogComponent {
  public nrPagini: number;

  constructor(
    public dialogRef: MatDialogRef<AddPagesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Book
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addPages() {
    alert('Nr pagini ' + this.nrPagini);
  }
}
