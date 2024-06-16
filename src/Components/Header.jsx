

import React, { useState } from 'react'

const Header = ({onAddTask}) => {
    const [title, setTitle] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        onAddTask(title)
        setTitle('');
    }

    function onChangeTitle(event) {
        setTitle(event.target.value);
    }

  return (
    <div className='flex flex-col items-center bg-primary-color py-16 gap-10 rounded-b-[80px] overflow-x-hidden'>
        <div className='flex flex-row'>
            <h1 className='text-tertiary-color font-bold text-5xl'>Check</h1>
            <h1 className='text-secondary-color font-bold text-5xl'>List</h1>
        </div>
        <div className='px-8 w-screen flex items-center justify-center'>
            <form action="" onSubmit={handleSubmit} className='flex flex-row gap-2'>
                <input className='px-3 rounded-lg h-10 border-2 border-secondary-color bg-secondary-color bg-opacity-20 text-secondary-color lg:w-96' required placeholder='Add a new task' type="text" value={title} onChange={onChangeTitle} />
                <button className='bg-custom-gradient px-6 rounded-lg text-sm font-semibold flex flex-row items-center gap-2'>
                    Create
                </button>
            </form>

        </div>
    </div>
  )
}

export default Header