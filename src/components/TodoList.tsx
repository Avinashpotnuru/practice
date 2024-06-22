import React from 'react'
import { TodoProps } from './types'
import TodoItem from './TodoItem'


export interface TodoListProps{
    todoList:TodoProps[],
    deleteItem:(id:number)=>void
}

const TodoList = ({todoList,deleteItem}:TodoListProps) => {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
        {todoList.map(item=><TodoItem key={item.id}  todoItem={item} deleteItem={deleteItem}/>)}
    </div>
  )
}

export default TodoList