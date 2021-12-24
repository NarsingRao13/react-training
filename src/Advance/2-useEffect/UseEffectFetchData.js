import React, { useEffect, useState } from "react";
import "./post.css";

const url = "https://jsonplaceholder.typicode.com/posts";

function UseEffectFetchData() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
    //console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div id="bodyContent">
      <h1>Use Effect Fetch</h1>
      <div className="total">
        {users.map((user) => {
          console.log(user);
          const { id, userId, title, body } = user;
          return (
            <div>
              <div className="postData" key={id}>
                {userId}
                <div id="title">{title}</div>
                <hr />
                <div id="postBody">{body}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UseEffectFetchData;
