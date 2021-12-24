import React from "react";

/* 
  JSX JavaScript example i.e. {variable_name}
  and props example
 */
const author = " Robert T. Kiyosaki";
const title =
  "Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not! Rich Dad Poor Dad: What the Rich Teach…";
const image_src =
  "https://images-eu.ssl-images-amazon.com/images/I/81dQwQlmAXL._AC_UL200_SR200,200_.jpg";
const SingleBook = () => {
  return (
    <article>
      <img src={image_src} alt="book-image" />
      <h1>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

export default SingleBook;
