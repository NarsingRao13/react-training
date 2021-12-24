import React from "react";
import "../index.css";

function BookList() {
  return (
    <section className="bookList">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    className="book-image"
    src="https://images-eu.ssl-images-amazon.com/images/I/81dQwQlmAXL._AC_UL200_SR200,200_.jpg"
    alt="book-image"
  />
);

//JSX CSS Example i.e. style = {{}}
const Title = () => (
  <h1 style={{ fontSize: "1rem" }}>
    Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor
    and Middle Class Do Not! Rich Dad Poor Dad: What the Rich Teach…
  </h1>
);

const Author = () => (
  <h4 style={{ color: "#df1dfg8", fontFamily: "cursive", fontSize: "0.75rem" }}>
    Robert T. Kiyosaki
  </h4>
);

export default BookList;
