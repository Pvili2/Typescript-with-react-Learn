import { ChangeEvent, useState } from "react";

function Component() {
  const [text, setText] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e:ChangeEvent<HTMLInputElement>)=>{
      setEmail(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    //how to setup a formdata with TS
    //const formData= new FormData(e.currentTarget) //this is not going to work in TS
    const formData= new FormData(e.target as HTMLFormElement); //this is going to work in TS

    const datas = Object.fromEntries(formData)
    console.log(datas);
  }
  return (
    <section>
      <h2>Events exampe</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" className="form-input mb-1" name="text" value={text} onChange={(e)=>{
          setText(e.target.value);
        }}/>
        <input type="email" className="form-input mb-1" name="email" value={email} onChange={handleChange} />
        <button type="submit" className="btn btn-block">Submit</button>
      </form>
    </section>
  );
}
export default Component;
