import React from 'react'
import { TodoProps } from './types'

interface TodoItemProps{
    todoItem:TodoProps,
    deleteItem:(id:number)=>void


}

const TodoItem = ({todoItem,deleteItem}:TodoItemProps) => {


  return (
    <div className='flex items-center justify-center w-52 '>
        <h1>{todoItem.todo}</h1>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500" onClick={()=>deleteItem(todoItem.id)}>delete</button>
        <button>complete</button>
    </div>
  )
}

export default TodoItem