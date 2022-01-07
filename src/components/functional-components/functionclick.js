export default function FunctionClick() {
  function clickHandler() {
    console.info("fun click");
  }
  return (
    <>
      <button onClick={clickHandler}>Function Event Click</button>
    </>
  );
}
