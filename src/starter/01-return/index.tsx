//working same as a normal function, but we dont have to hard code return type, TS is recognize the type
function Component():JSX.Element {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>Return Type</h2>
    </div>
  );
}
export default Component;
