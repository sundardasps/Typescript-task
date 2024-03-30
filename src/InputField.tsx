import React, { useRef } from 'react'
import './App.css'

interface props {
    todo: string ;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleTodo:(e:React.FormEvent)=>void;
}

const  InputField: React.FC<props> = ({todo,setTodo,handleTodo}) => {
    const InputRef = useRef<HTMLInputElement>(null)
  return (
    <form className='input' onSubmit={(e)=>{handleTodo(e)
        //  InputRef.current?.blur() for unblur when submit the hanldeatodo()
    }}>
       <input ref={InputRef} type="text"  placeholder='Enter a task' className='input_box' value={todo}  onChange={(e)=>setTodo(e.target.value)} />
       <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField
