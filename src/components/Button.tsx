import React from 'react'

type ButtonPros={children:React.ReactNode,color?:"red"|"green",size?:number,setWelcomeMessage:React.Dispatch<React.SetStateAction<string>>}

const Button = ({children,color,setWelcomeMessage}:ButtonPros) => {
  return (
<button onClick={() => setWelcomeMessage("hello")} style={{ backgroundColor: color }}>{children}</button>

  )
}

export default Button