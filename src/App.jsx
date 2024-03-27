import React from 'react'
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { MainLayout } from './layouts/MainLayout'
import { JobsPage } from './pages/JobsPage'
import { NoteFoundPage } from './pages/NoteFoundPage'
import JobPage, { jobLoader } from './pages/JobPage'
import { AddJobPage } from './pages/AddJobPage'
import { EditJobPage } from './pages/EditJobPage'


 const App = () => {
  const addJob=async (newJob)=>{
   const res=await fetch('/api/jobs',{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(newJob)

   })

   return;

    };


    const deleteJob=async(id)=>{
      const res=await fetch(`api/jobs/${id}`,{
        method:'DELETE',
       })
       alert("Ok")
       return;
    }

    const updateJob= async(job)=>{
      alert("Hi")
      const res=await fetch(`/api/jobs/${job.id}`,{
        method:'PUT',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(job)
    
       })
    
       return;
    }

 
    const route=createBrowserRouter(
      createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
         <Route index element={<HomePage />} />
         <Route path='/jobs' element={<JobsPage />} />
         <Route path='/edit-job/:id' element={<EditJobPage />} updateJobSubmit={updateJob} loader={jobLoader}/>

         <Route path='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>
         <Route path='/add-job' element={<AddJobPage addJobSubmit={addJob} />} />
         <Route path='/*' element={<NoteFoundPage />} />
    
      </Route>
      
      )
    )
    
    

  return (
    <RouterProvider router={route}></RouterProvider>
  )
 
}
export default App