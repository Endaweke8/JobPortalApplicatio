import React from 'react'
// import { useState,useEffect } from 'react'
import {useParams, useLoaderData, Link, useNavigate} from 'react-router-dom'
// import { Spinners } from '../components/Spinners';
import {FaArrowLeft, FaMapMarker} from "react-icons/fa"
import { toast } from 'react-toastify';

 const JobPage = ({deleteJob}) => {
  const navigate=useNavigate();
    const {id}=useParams();
    const  job=useLoaderData();

   const onDeleteClick=(jobId)=>{
    const confirm=window.confirm('Are you sure you want to delete this job ?')
    if(!confirm){
      return;
    }
    deleteJob(jobId)
    toast.success("The job is deleted successfuly")
    navigate('/jobs');
   }
   

    // const [job,setJob]=useState(null);
    // const [loading,setLoading]=useState(true);

    // useEffect(()=>{
    //  const fetchJob=async ()=>{

    //     try {
    //         const res=await fetch(`/api/jobs/${id}`);
    //         const data=await res.json();
    //         console.log("The job lis is ",data);
    //         setJob(data);
    //        } catch (error) {
    //         console.log("Error Fetching data",error);
    //        }finally{
    //         setLoading(false);
    //        }

    //  }
     
    //  fetchJob();
     
    // },[]);

  return (
   <div>
    <div class="flex items-center justify-between   bg-gray-100  p-4 ">
  <Link to="/jobs" class="hover:text-blue-500 text-blue-400 ml-8s font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
    <span className='flex'>
    <FaArrowLeft  className='mx-2' /> <span className='mx-2'>back to job listing</span>
    </span>
  </Link>
</div>
<div class="grid grid-cols-3 bg-gray-100 gap-2">
  {/* <!-- Sidebar --> */}
  <div class="col-span-2  h-screen">
    {/* <!-- Sidebar content goes here -->
    Sidebar */}
     <div class="w-[85%] m-10">
      <div class="bg-white shadow-md p-4 rounded-lg">
        <h2 class="text-sm text-gray-500 font-bold mb-2">{job.type}</h2>
        <p className='text-2xl font-bold'>{job.title}</p>
        <div className='flex mt-3'>
        <FaMapMarker class="text-sm text-orange-700 font-bold mt-1 mr-2"/> <span className='text-red-500'>{job.location}</span>
        </div>
      </div>
    </div>
    <div class="w-[85%] m-10">
      <div class="bg-white shadow-md p-4 rounded-lg">
        <h2 class="text-xl text-blue-400 font-bold my-2">Job Description</h2>
        <p>{job.description}</p>
        <h2 class="text-xl text-blue-400 font-bold my-2">Salary</h2>
        <p >{job.salary}</p>

      </div>
    </div>
  </div>

  {/* <!-- Main Content --> */}
  <div class="col-span-1">
    {/* <!-- Main content goes here --> */}
    <div class=" h-screen ">
    <div class="w-96 mt-12 ">
      <div class="bg-white shadow-md p-4 rounded-lg">
        <h1 className='text-blue-400 text-xl my-2'>Company</h1>
        <h2 class="text-xl font-bold my-2">{job.company.name}</h2>
        <p>{job.company.description}</p>
        <hr className='my-4'/>
        <h1 className=' text-xl my-2'>Company Email:</h1>
        <p className='bg-indigo-100 p-1'>{job.company.contactEmail}</p>
        <h1 className=' text-xl my-2'>Company Phone:</h1>
        <p className='bg-indigo-100 p-1'>{job.company.contactPhone}</p>

      </div>
    </div>
    <div class="w-96 mt-12">
      <div class="bg-white shadow-md p-4 rounded-lg">
        <h2 class="text-xl font-bold mb-2">Mange Jobs</h2>
        <div class="block justify-center">
  <Link to={`/edit-job/${job.id}`} >
    <button class="bg-blue-500 w-64 mx-5 mb-3 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl mr-4">Edit Job</button>

  </Link>


    <button onClick={()=>onDeleteClick(job.id)} class="bg-red-500 w-64 mx-5 mb-3 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-3xl mr-4">Delete Job</button>
</div>
      </div>
    </div>
    </div>
  </div>
</div>
   </div>
        // <h1>From Page id {job.title}</h1>

    )

}

const jobLoader=async ({params})=>{
    const res=await fetch(`/api/jobs/${params.id}`);
    const data=await res.json();
    return data;
}

export {JobPage as default, jobLoader}