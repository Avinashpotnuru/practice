import React, { useState } from 'react'
import Button from './Button';
import Heading from './Heading';

const Test1 = () => {
    const [name,setName]=useState<string>("avinash")

    const [welcomeMessage,setWelcomeMessage]=useState<string>("")
    return (
      <div className="App">
       <Heading name={name} setName={setName}/>
       <Button color='green' setWelcomeMessage={setWelcomeMessage}>submit</Button>
      </div>
    );
}

export default Test1