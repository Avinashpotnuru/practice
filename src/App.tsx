import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import TodoMainFile from "./components/TodoMainFile";
import CricketDetails from "./components/CricketDetails";

function App() {
  // const [name, setName] = useState<string>("avinash");
  // const inputRef = useRef<string | number>("");

  // const [welcomeMessage, setWelcomeMessage] = useState<string>("");

  // bg-todo-bg
  return (
    <div className=" h-screen w-screen bg-cover flex justify-center items-center flex-col overscroll-y-auto">
      {/* <Heading name={name} setName={setName}/>
     <Button color='green' setWelcomeMessage={setWelcomeMessage}>submit</Button> */}
     
      {/* <h1>{todo}</h1> */}
      {/* <TodoMainFile/> */}
      <CricketDetails/>
      
    </div>
  );
}

export default App;
