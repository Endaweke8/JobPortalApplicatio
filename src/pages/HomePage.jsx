import React from 'react'
import Navbar from '../components/Navbar'
import { Hero } from '../components/Hero'
import { HomeCards } from '../components/HomeCards'
import { JobListing } from '../components/JobListing'
import { ViewAllJobs } from '../components/ViewAllJobs'

export const HomePage = () => {
    return (
        <div>
          {/* <Navbar /> */}
          <Hero title="Software Developer " location="Addis Ababa"/>  
          <h1 className='flex justify-center items-center text-2xl font-bold'>Services</h1>
        
          <HomeCards />  
         
         
          <JobListing  isHome={true}/>  
          <ViewAllJobs />
        {/* <div>Hello dear {name}</div>
        <div>The sum of {x} and {y} is {x+y}</div>
        <ul>
          {names.map((name,index)=>( <li key={index}>{name}</li>))}
        </ul>
        {logedIn?<h1>Hello Dear Member</h1>:<h2>Hello Our Guest</h2>} */}
        </div>
      )
}
