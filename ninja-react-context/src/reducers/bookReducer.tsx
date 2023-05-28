import { v1 as uuid } from "uuid";

export enum BookActionTypes {
  ADD_BOOK,
  REMOVE_BOOK,
}

export type BookType = {
  title: string;
  author: string;
  id?: string;
};

export type BookAction = {
  type: BookActionTypes;
  book?: BookType;
  id?: string;
};

export const bookReducer = (state: BookType[], action: BookAction) => {
  switch (action.type) {
    case BookActionTypes.ADD_BOOK:
      return [
        ...state,
        {
          title: action.book?.title ?? "",
          author: action.book?.author ?? "",
          id: uuid(),
        },
      ];

    case BookActionTypes.REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);

    default:
      return state;
  }
};
