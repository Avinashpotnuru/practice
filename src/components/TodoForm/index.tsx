import React from 'react'
import { TodoProps } from '../../App'

export interface TodoFormProps {
    todo:TodoProps,
    setTodo:React.Dispatch<React.SetStateAction<string>>,

}

const TodoForm = ({todo,setTodo}:TodoFormProps) => {

  console.log(todo)
  return (
    <div>
        <form>
            <input onChange={(e)=>setTodo(e.target.value)} type="text" value={todo.todo} placeholder="Add a todo" />
            <button>Add</button>
        </form>

    </div>
  )
}

export default TodoForm