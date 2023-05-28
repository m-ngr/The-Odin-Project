import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import { BookActionTypes, BookType } from "../reducers/bookReducer";

const BookDetails = ({ book }: { book: BookType }) => {
  const { reducer } = useContext(BookContext)!;

  return (
    <li
      onClick={() =>
        reducer({ type: BookActionTypes.REMOVE_BOOK, id: book.id })
      }
    >
      <div className="title">{book.title}</div>
      <div className="author">{book.author}</div>
    </li>
  );
};

export default BookDetails;
