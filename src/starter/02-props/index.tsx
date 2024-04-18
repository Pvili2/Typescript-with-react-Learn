import { PropsWithChildren } from "react";
//We have 3 option to implement props

//1. inline
//function Component({name, id}:{name:string, id:string}){

//2. implement a type for the props

type ComponentProps = {
  name: string,
  id: number,
}
//we can implement children prop as well
function Component({name, id, children}: PropsWithChildren<ComponentProps>) {
  return (
    <div>
      <h2>React & Typescript</h2>
      <h2>{name} with {id}</h2>
      {children}
    </div>
  );
}
export default Component;
