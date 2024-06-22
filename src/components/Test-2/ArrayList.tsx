import React from 'react'


interface Todos{
    id: string,
    todo: string
}
interface TodoProps{
    todosList: Todos[]


}
let name=true

const ArrayList: React.FC<TodoProps> = ({todosList}) => {

   
  return (
    <div>{todosList.map((item,key)=><h1 key={key}>{item?.todo}</h1>)}</div>
  )
}
  


export default ArrayList