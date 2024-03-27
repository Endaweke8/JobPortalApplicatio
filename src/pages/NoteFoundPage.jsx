import React from 'react'
import { Link } from 'react-router-dom'
import {FaExclamationTriangle} from 'react-icons/fa'

export const NoteFoundPage = () => {
  return (
    <div className=''>
       <div className='flex items-center justify-center'>
       <FaExclamationTriangle className='text-4xl m-10 '></FaExclamationTriangle>
       </div>
       <h1 className='flex items-center justify-center text-4xl font-bold'>Sorry ,This Page is Not Found</h1><br />
        
        <Link className='rounded-lg  p-4 flex justify-center items-center' to="/">
            <span className='bg-blue-500 p-4 rounded-2xl text-3xl'>
            Go Back
            </span>
            </Link>
    </div>
  )
}
