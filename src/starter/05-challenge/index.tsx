
type basic = {
  type:"basic",
  name: string
}

type advanced = {
  type:"advanced",
  name: string,
  email: string
}

function Component(obj: basic | advanced) {
  return (
    <div className={obj.type==="advanced" ? "alert alert-danger" : "alert alert-success"}>
      <h2>{obj.name}</h2>
      <h2>{obj.type}</h2>
      {
        obj.type==="advanced" && <h2>{obj.email}</h2>
      }
    </div>
  );
}
export default Component;
