import React, { createContext, useContext, useEffect, useState } from "react";
import { IListBooks } from "../pages/Main/interfaces/IListBooks";
import api from "../service/api";
import { IBookContextModal } from "./IBookContextData";

const BookContext = createContext<IBookContextModal>({} as IBookContextModal);

export const BookProvider: React.FC = ({ children }) => {
  const [listBooks, setListBooks] = useState<IListBooks[]>([]);
  const [bookSearch, setBookSearch] = useState<string>('');
  const [listFavoriteBooks, setListFavoriteBooks] = useState<string[]>([]);
  const [page, setPage] = useState<number>(1)
  const [loading, setLoading] = useState(false)

  const GetBooksData = async () => {
    setLoading(true)
    const response = await api.get(`volumes?startIndex=0&printType=books&maxResults=20&q=${bookSearch}+inauthor:${bookSearch}`);
    const books = response.data.items;
    setListBooks(books);
    setLoading(false)
  };

  const GetBooksDataMore = async () => {
    setLoading(true)
    setPage(page +1)
    let pageToSearch = page * 40;    
    const response = await api.get(`volumes?startIndex=${pageToSearch}&printType=books&maxResults=40&q=${bookSearch}+inauthor:${bookSearch}`);
    const books = response.data.items;
    const newBooks = listBooks;
    books?.map((item: IListBooks )=> (
      newBooks.push(item)
    ))
    setListBooks(newBooks);
    setLoading(false)    
  };

  useEffect(() => {
      GetBooksData();   
  }, [bookSearch]);

  return (
    <BookContext.Provider
      value={{
        listBooks,
        setListBooks,
        bookSearch,
        setBookSearch,
        page,
        setPage,
        GetBooksDataMore,
        listFavoriteBooks,
        setListFavoriteBooks,
        loading,
        setLoading
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export const useBook= () => {
  const context = useContext(BookContext);
  return context;
};

