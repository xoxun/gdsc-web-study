import Button from "./Button";
import styles from "./App.module.css";
import { useState,useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => setValue((prev)=> prev + 1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log("I run all the time");
  useEffect(()=>console.log("CALL THE API..."),[]);
  useEffect(()=>{
    if(keyword !== "" && keyword.length >= 5){
      console.log("Search for",keyword)
    }
  },[keyword,counter])
  return (
    <div>
      <input 
        value={keyword}
        onChange ={onChange}
        type="text"
        placeholder="Search here..." 
      />
      <h1 className={styles.title}>Hi!</h1>
      {/* <Button text={"Continue"}/> */}
      <button onClick={onClick}>{counter}</button>
    </div>
  );
}

export default App;
