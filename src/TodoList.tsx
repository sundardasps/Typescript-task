import React from 'react'
import { Todo } from './Model';
import SingleTodo from './SingleTodo';

interface props {
  value:Todo[];
  setValue:React.Dispatch<React.SetStateAction<Todo[]>>;
}

function TodoList({value,setValue}:props) {
  return (
    <div className='todo_list'>
      {
        value.map(todo=>(
            <SingleTodo todo={todo} key={todo.id} setValue={setValue} value={value} />
        ))
      }
    </div>
  )
}

export default TodoList
