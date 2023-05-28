import { Dispatch, createContext, useEffect, useReducer } from "react";
import { BookAction, BookType, bookReducer } from "../reducers/bookReducer";

export type BookContextType = {
  books: BookType[];
  reducer: Dispatch<BookAction>;
};

export const BookContext = createContext<BookContextType | undefined>(
  undefined
);

const BookContextProvider = (props: any) => {
  const [books, reducer] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem("books");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, reducer }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
