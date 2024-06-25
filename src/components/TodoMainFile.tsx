import React, { useState } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import { TodoProps } from './types';

const TodoMainFile = () => {
    const [todoList, setTodos] = useState<TodoProps[]>([]);

  const addTodo = (text: string) => {
    if (text) {
      console.log("event Clicked");

      const newTodo = { id: Date.now(), todo: text, isComplete: false };

      setTodos([...todoList, newTodo]);

      console.log(todoList, "todoList");
    }
  };

  const deleteItem = (id: number) => {
    console.log(id, "id");

    setTodos(todoList.filter((item) => item.id !== id));
  };

  const toggleTodo = (id: number) => {
    setTodos(todoList.map((item) => (item.id === id ? {...item,isComplete:!item.isComplete} : item)));
  };

  return (
    <>
     <h1>todolist</h1>
       <TodoForm addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        deleteItem={deleteItem}
        toggleTodo={toggleTodo}
        setTodos={setTodos}
      />
    </>
  )
}

export default TodoMainFile
