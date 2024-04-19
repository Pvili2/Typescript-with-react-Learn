import { useState } from "react";


type Link = {
  id: number,
  url: string,
  text: string
}
const navLinks: Link[] = [
  {
    id: 1,
    url: 'some url',
    text: 'some text'
  },
  {
    id: 2,
    url: 'some url 2',
    text: 'some text 2'
  },
  {
    id: 3,
    url: 'some url 3',
    text: 'some text 3'
  },
]

function Component() {

  const [text, setText] = useState("Something");

  //default the type will be never[], so we need to use generic type definition
  //const [list, setList] = useState<string[]>([]);

  const [links, setLinks] = useState<Link[]>(navLinks);
  return (
    <div>
      <h2 className="mb-1">React & Typescript</h2>

      <button onClick={() => {
        setText("something else");

        //set an array[object]

        setLinks([...links, {
          id: 4,
          url: 'some url 4',
          text: 'some text 4'
        }])

        console.log(links)
      }} className="btn btn-center">Click</button>


      <p>{text}</p>
    </div>
  );
}
export default Component;
