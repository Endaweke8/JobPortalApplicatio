import React from 'react'
import { Link } from 'react-router-dom'

export const ViewAllJobs = () => {
  return (
    <div><div class="flex justify-center mt-10 mb-10">

    <Link  to="/jobs" id="toggle-btn" class="mt-4 text-blue-500 focus:outline-none">Read More</Link>
    <button id="hide-btn" class="hidden mt-4 text-blue-500 focus:outline-none">Hide</button>
</div>

</div>
  )
}
