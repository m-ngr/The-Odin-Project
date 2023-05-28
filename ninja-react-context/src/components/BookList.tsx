import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";
import BookDetails from "./BookDetails";

const BookList = () => {
  const { books } = useContext(BookContext)!;

  if (books.length === 0)
    return <div className="empty">No books to read. Hello free time</div>;

  return (
    <div className="book-list">
      <ul>
        {books.map((book) => (
          <BookDetails book={book} key={book.id} />
        ))}
      </ul>
    </div>
  );
};

export default BookList;
