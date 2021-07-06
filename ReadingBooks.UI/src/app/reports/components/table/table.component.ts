import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() data;
  @Input() displayedColumns;
  public dataProperties: string[];

  constructor() { }

  ngOnInit(): void {
    this.dataProperties = Object.keys(this.data[0]);
  }

}
