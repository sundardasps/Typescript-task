import React, { useState } from "react";
import { Todo } from "./Model";
import { MdDelete, MdEdit, MdOutlineDone } from "react-icons/md";
import TodoList from "./TodoList";
type props = {
  todo: Todo;
  value: Todo[];
  setValue: React.Dispatch<React.SetStateAction<Todo[]>>;
};

function SingleTodo({ todo, value, setValue }: props) {
  const [edit, setedit] = useState<Boolean>(false);
  const [editTodo, seteditTodo] = useState<String>(todo.todo);

  const handleDone = (id: number): void => {
    setValue(
      value.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number): void => {
    setValue(value.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e:React.FormEvent,id: number): void => {
    
    e.preventDefault()

    setValue(value.map((todo)=>(
        todo.id === id ? {...todo,todo:editTodo}:todo
    )))

    setedit(false)

  };

  return (
    <form className="single_todo" onSubmit={(e) =>handleEdit(e,todo.id)}>
      < >
        {edit ? (
        <>          <input type="text" onChange={(e) => seteditTodo(e.target.value)} />
          <button type="submit">sumbit</button>
          </>

        ) : todo.isDone ? (
          <s>{todo.todo}</s>
        ) : (
          <span>{todo.todo}</span>
        )}
      </>

      <div>
        <MdOutlineDone  onClick={() => handleDone(todo.id)} />
        <MdDelete onClick={() => handleDelete(todo.id)} />
        <MdEdit onClick={()=>setedit(true)} />
      </div>
    </form>
  );
}

export default SingleTodo;
