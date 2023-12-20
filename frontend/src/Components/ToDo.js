import React from 'react'
import { BiEdit } from "react-icons/bi"
import { AiFillDelete } from "react-icons/ai"

export default function ToDo({ text, updateMode, deleteTodo }) {
  return (
    <div className="todo1">
      
      <div className="todo2">
        <div className="text">{text}</div>
        <div className="icons">
          <BiEdit className="icon" onClick={updateMode} />

          <AiFillDelete className="icon" onClick={deleteTodo} />
        </div>
      </div>




    </div>
  );
}




