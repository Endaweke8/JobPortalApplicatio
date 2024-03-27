import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export const AddJobPage = ({addJobSubmit}) => {
const [title,setTitle]=useState('');
const [type,setType]=useState('');
const [location,setLocation]=useState('');
const [description,setDescription]=useState('');
const [salary,setSalary]=useState('');
const [companyName,setCompanyName]=useState('');
const [companyDescription,setCompanyDescription]=useState('');
const [contactEmail,setContactEmail]=useState('');
const [contactPhone,setContactPhone]=useState('');

const navigate=useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     set{
//       ...
//       [name]: value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here (e.g., send data to backend)
//     console.log(;
//   };
const submitForm=(e)=>{
  e.preventDefault();


  const newJob={
    title,
    type,
    description,
    location,
    salary,
    company:{
      name:companyName,
      description:companyDescription,
      contactEmail:contactEmail,
      contactPhone
    }
  }
   



  addJobSubmit(newJob);
  toast.success("The job is added successfuly");
  return navigate('/jobs')
}



  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl flex justify-center m-10 font-semibold mb-8">Add Job</h1>
      <form onSubmit={submitForm} className="max-w-lg mx-auto bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4" >
      <div className="mb-4">
          <label htmlFor="jobType" className="block text-gray-700 text-sm font-bold mb-2">Job Type</label>
          <select id="jobType" name="jobType" value={type} onChange={((e)=>setType(e.target.value))} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
            <option value="fullTime">Full Time</option>
            <option value="partTime">Part Time</option>
            <option value="contract">Contract</option>
            <option value="temporary">Temporary</option>
            <option value="internship">Internship</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="jobTitle" className="block text-gray-700 text-sm font-bold mb-2">Job Title</label>
          <input type="text" id="jobTitle" name="jobTitle" value={title} onChange={((e)=>setTitle(e.target.value))} className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter job title" />
        </div>
        <div className="mb-4">
          <label htmlFor="companyName" className="block text-gray-700 text-sm font-bold mb-2">Location</label>
          <input type="text" id="companyName" name="companyName" value={location} onChange={((e)=>setLocation(e.target.value))} className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter company location" />
        </div>
        <div className="mb-4">
          <label htmlFor="jobDescription" className="block text-gray-700 text-sm font-bold mb-2">Job Description</label>
          <textarea id="jobDescription" name="jobDescription" value={description} onChange={((e)=>setDescription(e.target.value))} rows="4" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter job description"></textarea>
        </div>
       
        <div className="mb-4">
          <label htmlFor="location" className="block text-gray-700 text-sm font-bold mb-2">Salary</label>
          <input type="text" id="location" name="location" value={salary} onChange={((e)=>setSalary(e.target.value))} className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter job salary" />
        </div>
        <div className="mb-4">
          <label htmlFor="salary" className="block text-gray-700 text-sm font-bold mb-2">Company Name</label>
          <input type="text" id="salary" name="salary" value={companyName} onChange={((e)=>setCompanyName(e.target.value))} className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter company name" />
        </div>
        <div className="mb-4">
          <label htmlFor="experienceLevel" className="block text-gray-700 text-sm font-bold mb-2">Company Description</label>
          <input type="text" id="experienceLevel" name="experienceLevel" value={companyDescription} onChange={((e)=>setCompanyDescription(e.target.value))} className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter Company Description" />
        </div>
        <div className="mb-4">
          <label htmlFor="experienceLevel" className="block text-gray-700 text-sm font-bold mb-2">Contact Email</label>
          <input type="text" id="experienceLevel" name="experienceLevel" value={contactEmail} onChange={((e)=>setContactEmail(e.target.value))} className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter company email" />
        </div>
        <div className="mb-4">
          <label htmlFor="experienceLevel" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
          <input type="text" id="experienceLevel" name="experienceLevel" value={contactPhone} onChange={((e)=>setContactPhone(e.target.value))} className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="Enter contact Phone" />
        </div>
        <div className="mb-4">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl w-96 mx-12">Post Job</button>
        </div>
      </form>
    </div>
  );
};

