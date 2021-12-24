import React from "react";
import { names } from "./PropsExample";
import booksData from "../Utils/books.json";
import { firstBook, secondBook } from "./PropsExample";
import { newName } from "./PropsExample";

const BooksList = () => {
  return (
    <section>
      {newName}
      <Books
        image_src={firstBook.image_src}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>Hyndja khkhdeeudhi uudh audh</p>
      </Books>
      <Books
        image_src={secondBook.image_src}
        title={secondBook.title}
        author={secondBook.author}
      ></Books>
      {booksData.map((singlebook) => {
        return <Books key={singlebook.id} {...singlebook}></Books>;
      })}
    </section>
  );
};

export const Books = (props) => {
  const { image_src, title, author } = props;
  const clickHandler = (author) => {
    console.log(author);
    console.log(author.target);
    alert(author);
  };
  console.log({ image_src });
  console.log({ title });
  return (
    <article
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={image_src} alt="book-image" />
      <h1
        onClick={() => {
          alert(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      {props.children}
      <button type="button" onClick={() => clickHandler(author)}>
        Event
      </button>
    </article>
  );
};

export default BooksList;
