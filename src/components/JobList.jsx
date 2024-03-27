
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"
import {  useState} from "react";
export const JobList = ({job}) => {
    const [showFullDescription,setFullDescription]=useState(false);
    let description=job.description;
    // if(!showFullDescription){
    //     description=description.substring(0,90)+'...';
    // }
  return (
    <div class="group mx-2 mt-10 grid max-w-screen-md  space-x-8 overflow-hidden rounded-lg border py-8 text-gray-700 shadow transition hover:shadow-lg sm:mx-auto">
          <a href="#" class="order-2 col-span-1 mt-4 -ml-14 text-left text-gray-600 hover:text-gray-700 sm:-order-1 sm:ml-4">
            <div class="group relative h-16 w-16 overflow-hidden rounded-lg">
              <img src={logo} alt="" class="h-full w-full object-cover text-gray-700" />
            </div>
          </a>
          <div class="col-span-11 flex flex-col pr-8 text-left sm:pl-4">
            <h3 class="text-sm text-gray-600">{job.type}</h3>
            <a href="#" class="mb-3 overflow-hidden pr-7 text-lg font-semibold sm:text-xl"> {job.title} </a>
            <p class="overflow-hidden pr-7 text-sm">
                {description}

            </p>
            <Link className="m-4 p-2 text-blue-400" to={`/jobs/${job.id}`}>View Detail</Link>
            <button onClick={()=>setFullDescription((prevState)=>!prevState)} id="toggle-btn" class="mt-4 text-blue-500 focus:outline-none">{showFullDescription?'Less':'More'}</button>
             
            <div class="mt-5 flex flex-col space-y-3 text-sm font-medium text-gray-500 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-2">
              <div class="">Experience:<span class="ml-2 mr-3 rounded-full bg-green-100 px-2 py-0.5 text-green-900"> 2 Years </span></div>
              <div class="">Salary:<span class="ml-2 mr-3 rounded-full bg-blue-100 px-2 py-0.5 text-blue-900">{job.salary}</span></div>
            </div>
          </div>
        </div>
  )
}
