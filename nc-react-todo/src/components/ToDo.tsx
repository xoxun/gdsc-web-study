import { useSetRecoilState } from "recoil";
import {IToDo, toDoState} from "../atoms";

export default function ToDo({text, category,id}:IToDo){
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (newCategory:IToDo["category"]) =>{
    //console.log(newCategory);
    setToDos(oldToDos =>{
      const targetIndex = oldToDos.findIndex(toDo=>toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = {text, id, category:newCategory as any};
      return [
        ...oldToDos.slice(0,targetIndex), 
        newToDo ,
        ...oldToDos.slice(targetIndex+1)
      ];
    });
  };
  return <>
    <li>
      <span>{text}</span> 
      {category !== "DOING" && 
        <button onClick={()=>onClick("DOING")}>To Do</button>}
      {category !== "TO_DO" && 
        <button onClick={()=>onClick("TO_DO")}>Doing</button>}
      {category !== "DONE" && 
        <button onClick={()=>onClick("DONE")}>Done</button>}
      
    </li>
  </>;
}