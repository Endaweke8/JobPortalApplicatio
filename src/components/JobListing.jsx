import React from 'react'
import jobs from '../Jobs.json'
import { useState,useEffect } from 'react'

import { JobList } from './JobList'
import { Spinners } from './Spinners'
export const JobListing = ({isHome=false}) => {
    const [jobs,setJobs]=useState([]);
    const [loading,setLoading]=useState(true);
    const apiUrl=isHome? '/api/jobs?_limit=3': '/api/jobs'
 
   useEffect(()=>{
   const fetchJobs=async ()=>{
     try {
      const res=await fetch(apiUrl);
      const data=await res.json();
      console.log("The job lis is ",data);
      setJobs(data);
     } catch (error) {
      console.log("Error Fetching data",error);
     }finally{
      setLoading(false);
     }
   }

   fetchJobs();

   },[])

    // const recentJobs=isHome ? jobs.slice(0,3) :jobs;
  return (
    
    <div >
       {loading ? (<Spinners loading={loading}/>):(
        
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-3">
        {jobs.map((job)=>(
         <JobList key={job.id} job={job}/>
       ))}
        </div>
       )
}
       
</div>

  )
}
