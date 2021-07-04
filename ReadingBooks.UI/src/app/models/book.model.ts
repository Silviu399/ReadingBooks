export interface Book {
  title: string;
  autor: string;
  categorii: string;
  nrPag: number;
  progres: number;
  percent?: number;
}

export interface DbBook extends Book {
  uidUser: string;
}
