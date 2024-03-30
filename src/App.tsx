import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
import InputField from './InputField';
import { Todo } from './Model';
import TodoList from './TodoList';

const App : React.FC = ()  => {
  const [todo,setTodo] = useState<string>("")
  const [value, setValue] = useState<Todo[]>([])

  const handleTodo =(e:React.FormEvent)=>{
    e.preventDefault()

    if(todo){
      setValue([...value,{id:Date.now(),todo,isDone:false}])
      setTodo("")
    }
  }
  console.log(value);
  
  return (
    <div className="App">
          <span className='make-todo'>Make Todo
          </span>
          <InputField todo={todo} setTodo={setTodo} handleTodo={handleTodo} />
          <TodoList value={value} setValue={setValue} />
    </div>
  );
}

export default App;
