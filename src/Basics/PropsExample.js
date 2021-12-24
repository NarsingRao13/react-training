import React from "react";

/*
  props example
*/
export const firstBook = {
  title: "Hotel",
  author: "Ken Follett",
  image_src:
    "https://images-eu.ssl-images-amazon.com/images/I/81V22k7Th2L._UX300__PJku-sticker-v7,TopRight,0,-50__BG0,0,0,0_FMpng_AC_UL200_SR200,200_.jpg",
};
export const secondBook = {
  title: "Never",
  author: "Arthur Hailey",
  image_src:
    "https://images-eu.ssl-images-amazon.com/images/I/810h48SI0kS._AC_UL200_SR200,200_.jpg",
};

export const names = ["21", "w"];
export const newName = names.map((name) => {
  return <h1>{name}</h1>;
});
