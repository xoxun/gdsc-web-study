import { useState } from "react";
import { useForm } from "react-hook-form";

function ToDoList(){
  const {register, watch, handleSubmit} = useForm();
  const onValid = (data:any) => {
    console.log(data)
  }

  return(<>
      <div>
        <form onSubmit={handleSubmit(onValid,)}>
          <input {...register("Email",{required:true})} placeholder="Email" />
          <input {...register("First_Name",{required:true})} placeholder="First Name" />
          <input {...register("Last_Name",{required:true})} placeholder="Last Name" />
          <input {...register("Username",{required:true, minLength:10})} placeholder="Username" />
          <input {...register("Password",{required:true})} placeholder="Password" />
          <input {...register("Password1",{required:"Password is required"})} placeholder="Password1" />
          <button >Add</button>
        </form>
      </div>
    </>);
}

/* function ToDoList(){
  const [toDo, setTodo] = useState("");
  const [toDoError,setToDoError] = useState("");
  const onChange = (event:React.FormEvent<HTMLInputElement>)=>{
    const {currentTarget : {value},
    } = event;
    setTodo(value);
  };
  const onSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault();
    if(toDo.length < 10 ){
      return setToDoError("To do should be longer ");

    }
    console.log(toDo);
  }
  return(<>
    <div>
      <form onSubmit={onSubmit}>
        <input 
          value={toDo}
          onChange={onChange}
          placeholder="Write a to do" 
        />
        <button >Add</button>
        {toDoError !== "" ?toDoError:null}
      </form>
    </div>
  </>);
}
 */

export default ToDoList;