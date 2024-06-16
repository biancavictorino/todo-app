import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { MdDelete } from "react-icons/md";

function Lists ({ task, onComplete, onDelete }) {
  return (
    <div className='p-4 my-2 bg-secondary-color bg-opacity-60 border-2 border-secondary-color shadow-lg rounded-lg flex flex-row items-center justify-between'>
      <div className='flex flex-row items-center gap-4'>
        <button className='w-6 border-2 border-primary-color bg-transparent h-6 rounded-full' onClick={() => onComplete(task.id)}>
          {task.isCompleted ? <BsFillCheckCircleFill size={20} className='border-primary-color rounded-full'/> : <div className='bg-primary-color' />}
        </button>
        <p className={task.isCompleted ? `line-through opacity-60` : ""}>{task.title}</p>
      </div>
      <div>
        <MdDelete className='h-6 w-6' onClick={() => onDelete(task.id)}/>
      </div>
    </div>
  )
}

export default Lists