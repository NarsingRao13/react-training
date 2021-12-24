import React from 'react'

function Book(props) {
    return (
      <div>
        <article>
          <img src={image_src} alt="book-image" />
          <h1>{title}</h1>
          <h4>{author.toUpperCase()}</h4>
          <h4>{props.price}</h4>
          <h4>{props.job}</h4>
        </article>
      </div>
    );
}

export default Book
