import { Component, OnInit } from '@angular/core';

const ELEMENT_DATA = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent {
  constructor() {}

  public dataSource = ELEMENT_DATA;
  public columnsTab1: string[] = ['Nr.', 'Nume', 'Nivel', 'XP'];
  public tab1 = [
    { position: 1, name: 'Nicolae Iorga', level: 10, xp: 1427 },
    { position: 2, name: 'Eminescu Mihai', level: 10, xp: 1340 },
    { position: 3, name: 'Sadoveanu Mihail', level: 8, xp: 902 },
    { position: 4, name: 'Creanga ion', level: 7, xp: 840 },
    { position: 5, name: 'Slavici Ioan', level: 7, xp: 779 },
    { position: 6, name: 'Ispirescu Petre', level: 7, xp: 732 },
    { position: 7, name: 'Iancu Avram', level: 5, xp: 407 },
    { position: 8, name: 'Ion Iliescu', level: 5, xp: 391 },
    { position: 9, name: 'Leon Danaila', level: 4, xp: 283 },
    { position: 10, name: 'Dana Budeanu', level: 3, xp: 184 },
  ];

  public columnsTab2: string[] = ['Nb.', 'Nume', 'Carti finalizate'];
  public tab2 = [
    { position: 1, name: 'Nicolae Iorga', numar: 23 },
    { position: 2, name: 'Eminescu Mihai', numar: 17 },
    { position: 3, name: 'Sadoveanu Mihail', numar: 15 },
    { position: 4, name: 'Creanga ion', numar: 12 },
    { position: 5, name: 'Slavici Ioan', numar: 9 },
    { position: 6, name: 'Ispirescu Petre', numar: 7 },
    { position: 7, name: 'Iancu Avram', numar: 5 },
    { position: 8, name: 'Ion Iliescu', numar: 4 },
    { position: 9, name: 'Leon Danaila', numar: 3 },
    { position: 10, name: 'Dana Budeanu', numar: 2 },
  ];

  public columnsTab3: string[] = ['Nr.', 'Nume', 'Categorie', 'XP Categorie'];
  public tab3 = [
    { position: 1, name: 'Nicolae Iorga', categorie: 'Istorie', xp: 1427 },
    { position: 2, name: 'Eminescu Mihai', categorie: 'Poezie', xp: 1340 },
    { position: 3, name: 'Sadoveanu Mihail', categorie: 'Fictiune', xp: 902 },
    { position: 4, name: 'Creanga ion', categorie: 'Pentru copi', xp: 840 },
    { position: 5, name: 'Slavici Ioan', categorie: 'Pentru tineri', xp: 779 },
    {
      position: 6,
      name: 'Ispirescu Petre',
      categorie: 'Beletristica',
      xp: 732,
    },
    { position: 7, name: 'Iancu Avram', categorie: 'Biografie', xp: 407 },
    { position: 8, name: 'Ion Iliescu', categorie: 'Politica', xp: 391 },
    { position: 9, name: 'Leon Danaila', categorie: 'Stiinta', xp: 283 },
    { position: 10, name: 'Dana Budeanu', categorie: 'Lifestyle', xp: 157 },
  ];

  public columnsTab4: string[] = ['Nr.', 'Categorie', 'Carti finalizate'];
  public tab4 = [
    { position: 1, categorie: 'Dezvoltare Personala', carti: 62 },
    { position: 2, categorie: 'Fictiune', carti: 57 },
    { position: 3, categorie: 'Biografie', carti: 51 },
    { position: 4, categorie: 'Stiinta', carti: 43 },
    { position: 5, categorie: 'Pentru Copii', carti: 37 },
    { position: 6, categorie: 'Lifestyle', carti: 31 },
    { position: 7, categorie: 'Pentru Tineri', carti: 29 },
    { position: 8, categorie: 'Politica', carti: 24 },
    { position: 9, categorie: 'Business', carti: 17 },
    { position: 10, categorie: 'Psihologie', carti: 13 },
  ];

  prop: string[] = Object.keys(this.dataSource[0]);
  displayedColumns: string[] = ['Nr.', 'Name', 'Weight', 'Symbol'];

  public columnsTab5: string[] = [
    'Nr.',
    'Nume',
    'Categorie',
    'Nume autor',
    'Numar pagini',
  ];
  public tab5 = [
    {
      position: 1,
      name: 'Biblia',
      categorie: 'Religie',
      numeAutor: 'Numerosi autori',
      nrPag: 1223,
    },
    {
      position: 2,
      name: 'The Lord of the Rings',
      categorie: 'Fictiune',
      numeAutor: 'J.R.R. Tolkien',
      nrPag: 1216,
    },
    {
      position: 3,
      name: 'A Game of Thrones (A Song of Ice and Fire, Book 1)',
      categorie: 'Fictiune',
      numeAutor: 'George R. R. Martin',
      nrPag: 912,
    },
    {
      position: 4,
      name: 'Harry Potter and the Deathly Hallows',
      categorie: 'Fictiune',
      numeAutor: 'J. K. Rowling',
      nrPag: 759,
    },
    {
      position: 5,
      name: 'The Complete Art of War',
      categorie: 'Strategie militara',
      numeAutor: 'Sun Tzu',
      nrPag: 667,
    },
  ];
}
