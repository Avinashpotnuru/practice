import React from 'react'
import { TodoProps } from './types'

interface TodoItemProps{
    todoItem:TodoProps,
    deleteItem:(id:number)=>void,
    toggleTodo: (id: number) => void;


}

const TodoItem = ({todoItem,deleteItem,toggleTodo}:TodoItemProps) => {


  return (
    <div className='flex items-center justify-between min-w-[400px]  bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100 p-2 my-1  '>
      <div className='flex gap-x-2 '>
      <input onClick={()=>toggleTodo(todoItem.id)} checked={todoItem.isComplete}  type='checkbox'/>
      <h1  className={`flex-1 text-white ${todoItem.isComplete ? 'line-through text-red-600  ' : ''}`}>{todoItem.todo}</h1>
      </div>
      
        <div className=' flex justify-between w-[30%]'>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-red-500">Edit</button>
        <button  onClick={()=>deleteItem(todoItem.id)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4  focus:outline-none focus:ring-2 focus:ring-gray-400">
        <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 5.293a1 1 0 011.414 0L10 8.586l3.293-3.293a1 1 0 111.414 1.414L11.414 10l3.293 3.293a1 1 0 01-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 01-1.414-1.414L8.586 10 5.293 6.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
    </button>
        </div>
       
    </div>
  )
}

export default TodoItem