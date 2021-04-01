import { IListBooks } from "../pages/Main/interfaces/IListBooks";

export interface IBookContextModal {
  listBooks: IListBooks[];
  setListBooks:  React.Dispatch<React.SetStateAction<IListBooks[]>>;
  bookSearch: string;
  setBookSearch: React.Dispatch<React.SetStateAction<string>>
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>
  GetBooksDataMore: () => Promise<void>;
  listFavoriteBooks: string[];
  setListFavoriteBooks: React.Dispatch<React.SetStateAction<string[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
}