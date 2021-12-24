import React from "react";
import { Welcome5 } from "./welcome";
import { Greeting4 } from "./Greetings";
import BookList from "./BookList";
import SingleBook from "./SingleBook";
import BooksList from "./BooksList";

export default function Basics() {
  return (
    <div>
      <Welcome5 />
      <Greeting4 />
      <BookList />
      <SingleBook />
      <BooksList />
    </div>
  );
}
