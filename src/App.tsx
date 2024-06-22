import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Button from './components/Button';

function App() {
  const [name,setName]=useState<string>("avinash")
  const inputRef=useRef<string|number>("")

  const [welcomeMessage,setWelcomeMessage]=useState<string>("")
  return (
    <div className="App">
     <Heading name={name} setName={setName}/>
     <Button color='green' setWelcomeMessage={setWelcomeMessage}>submit</Button>
    </div>
  );
}

export default App;
