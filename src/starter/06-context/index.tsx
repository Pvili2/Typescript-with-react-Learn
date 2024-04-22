import { useTheme,ThemeProvider } from "./context";

function ParentComponent(){
  return (
    <ThemeProvider>
      <Component/>
    </ThemeProvider>
  )
}

function Component() {

  const context = useTheme();
  
  console.log(context)
  return (
    <div>
      <h2>React & Typescript</h2>
      <button onClick={() =>{
        if(context.theme === "system"){
          context.setTheme('dark');
        }else{
          context.setTheme('system');
        }
      }}
      className="btn btn-center"
      >toggle theme</button>
    </div>
  );
}
export default ParentComponent;
