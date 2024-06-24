import React, { useState } from "react";
import { TodoFormProps } from "./types";

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [text, setText] = useState<string>("");

  const formHandler = (e: any) => {
    e.preventDefault();

    addTodo(text);
    setText('')
  };
  return (
    <form onSubmit={formHandler}>
      <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded mx-4  py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
        onChange={(e) => setText(e.target.value)}
        type="text"
        value={text}
        placeholder="enter todo"
      />
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="submit">add</button>
    </form>
  );
};

export default TodoForm;
