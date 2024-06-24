import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Heading from "./components/Heading";
import Button from "./components/Button";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import { TodoProps } from "./components/types";

function App() {
  // const [name, setName] = useState<string>("avinash");
  // const inputRef = useRef<string | number>("");

  // const [welcomeMessage, setWelcomeMessage] = useState<string>("");

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
    <div className="bg-todo-bg h-screen w-screen bg-cover flex justify-center items-center flex-col">
      {/* <Heading name={name} setName={setName}/>
     <Button color='green' setWelcomeMessage={setWelcomeMessage}>submit</Button> */}
      <h1>todolist</h1>
      {/* <h1>{todo}</h1> */}
      <TodoForm addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        deleteItem={deleteItem}
        toggleTodo={toggleTodo}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;
