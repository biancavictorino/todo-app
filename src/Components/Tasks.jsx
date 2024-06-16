import React from 'react'
import Lists from './Lists'

const Tasks = ({ tasks, onComplete, onDelete }) => {
  return (
    <div className='p-8 lg:px-60 overflow-x-hidden'>
        {
            tasks.map(task => 
                <Lists key={task.id} task={task} onComplete={onComplete} onDelete={onDelete}/>
            )
        }
    </div>
  )
}

export default Tasks