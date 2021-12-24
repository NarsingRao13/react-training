import React, { useState } from "react";
import { data } from "../../Utils/people";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removeId = (id) => {
    console.log({ id });
    let newPeople = people.filter((people) => people.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        console.log(name);
        return (
          <div key={id}>
            <h3>{name}</h3>
            <button type="button" onClick={() => removeId(id)}>
              remove
            </button>
          </div>
        );
      })}
      <button type="button" onClick={() => setPeople([])}>
        clear all items
      </button>
    </>
  );
};

export default UseStateArray;
