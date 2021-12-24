import React, { useEffect, useState } from "react";
const url = "https://jsonplaceholder.typicode.com/posts/16";
function MultipleReturns() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("Default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error("------>>>> " + resp.status + " " + resp.statusText);
        }
      })
      .then((user) => {
        const { title } = user;
        setUser(title);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (isLoading) {
    return <h2>loading....</h2>;
  }
  if (isError) {
    return <h2>Error....</h2>;
  }
  return (
    <div>
      <h4>Title : </h4> {user}
    </div>
  );
}

export default MultipleReturns;
