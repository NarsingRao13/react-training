import React from "react";
import books from "../Utils/books.json";

function Books() {
  return books.map((book) => {
    console.log(book);
  });
}

export default Books;
