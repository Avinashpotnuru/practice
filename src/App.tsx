import React, { useState } from 'react';
import './App.css';
// import Test1 from './components/Test-1';
// import Test2 from './components/Test-2';
// import Test3 from './components/Test-3';
import TodoForm from './components/TodoForm';
import {TodoFormProps} from './components/TodoForm'
import TodoList from './components/TodoList';

export interface TodoProps{
  id:number,
  todo:string
}

function App() {

  const [alertBox,setAlertBox] =useState<boolean>(false)
  const [todo,setTodo] = useState<TodoProps>({id:0,todo:''})

  const [todoList, setTodoList] = useState<TodoProps[] |{}>({});

//  const eventFunction = () => {
//     setAlertBox(!alertBox)                        
//     alert('Alert Box Toggled')
//   }
  

  
  return (
    <div className="App">
      {/* <Test1/>
      <Test2/> */}
      {/* <Test3 toggleStatus={alertBox} eventFunction={eventFunction}/> */}
      <h2>Todo list</h2>

      
      {/* <TodoForm todo={todo} />
      <TodoList todoList={todoList} /> */}
      
    </div>
  );
}

export default App;
