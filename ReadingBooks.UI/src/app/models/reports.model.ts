export interface ReadersByXP {
  position: number;
  userName: string;
  userLevel: number;
  xpTotal: number;
}

export interface ReadersWithMostBooksFinished {
  position: number;
  userName: string;
  booksFinalized: number;
}

export interface TopReadersPerCategory {
  position: number;
  userName: string;
  category: string;
  xpTotal: number;
}

export interface CategoryWithNumberOfBooksFinalized {
  position: number;
  categorii: string;
  booksFinalized: number;
}

export interface BooksWithNbPages {
  position: number;
  title: string;
  categorii: string;
  autor: string;
  nrPag: number;
}
