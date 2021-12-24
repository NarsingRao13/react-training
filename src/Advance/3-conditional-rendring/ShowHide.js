import React, { useEffect, useState } from "react";

function ShowHide() {
  const [isShow, setIsShow] = useState(true);
  return (
    <>
      <button type="button" onClick={() => setIsShow(!isShow)}>
        show/hide
      </button>
      {isShow && <Item />}
    </>
  );
}

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div>
      <h1>Window</h1>
      <h2>Size : {size}</h2>
    </div>
  );
};

export default ShowHide;
