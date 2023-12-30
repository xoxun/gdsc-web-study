import { useState, } from "react";

function Todo() {
  const [toDo, setToDo] = useState("");
  const [toDos,setToDos] = useState([]);

  const onChange = (e)=>{
    setToDo(e.target.value);
  }
  const onSubmit = (e)=> {
    e.preventDefault();
    if(toDo === "") {
      return;
    }
    setToDo(""); //input 초기화
    setToDos((currentArray) =>[toDo,...currentArray]);
    console.log(toDos);
  }

  function TodoForm(){

    return(
      <div>
        {toDos.map(
          (item)=>{ return (<h2>{item}</h2>);}
          )}
      </div>
    )
  }
  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
          />
          <button>Add To Do</button>
      </form>
      <TodoForm />
    </div>
  );
}

export default Todo;
