import React from 'react'
import Logo from '../assets/todo-logo.png'

const LoadingScreen = ({ fadeOut }) => {
  return (
    <div className={`fixed inset-0 p-28 bg-primary-color flex flex-col gap-16 justify-center items-center w-screen h-screen transition-opacity duration-1000 ${fadeOut ? 'opacity-0' : 'opacity-100'}`}>
        <img className='h-28 w-28' src={Logo} alt="" />
        <h1 className='text-secondary-color text-sm font-semibold text-center leading-7 lg:px-32 lg:text-lg'>Take control of your day! This to-do list app is designed to help you organize your tasks.</h1>
        <div className='animate-spin rounded-full h-10 w-10 border-t-4 border-pink-300'></div>
    </div>
  )
}

export default LoadingScreen