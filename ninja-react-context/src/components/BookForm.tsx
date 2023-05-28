import { FormEvent, useContext, useState } from "react";
import { BookContext } from "../contexts/BookContext";
import { BookActionTypes } from "../reducers/bookReducer";

const BookForm = () => {
  const { reducer } = useContext(BookContext)!;
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    reducer({ type: BookActionTypes.ADD_BOOK, book: { title, author } });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        required
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input type="submit" value="Add Book" />
    </form>
  );
};

export default BookForm;
