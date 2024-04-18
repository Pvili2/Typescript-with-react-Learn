import Component from "./starter/02-props";

function App() {
  return (
    <main>
      <Component name= "John" id={123}>
        <h4>This is a children</h4>
      </Component>
      <Component name="jdsd" id={323}/>
    </main>
  );
}

export default App;
