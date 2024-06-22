import React from 'react'
import { TodoFormProps } from '../TodoForm'


interface TodoListProps {
    todoList: TodoFormProps[]
}

const TodoList = ({todoList}:TodoListProps) => {
  return (
    <div>TodoList</div>
  )
}

export default TodoList