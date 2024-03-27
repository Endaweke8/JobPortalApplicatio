import React from 'react'
import { FadeLoader } from 'react-spinners'
const overide={
    display:"block",
    margine:"100px auto",

}
export const Spinners = ({loading}) => {
  return (
    <div>
        <FadeLoader 
        color="#36d7b7"
        loading={loading}
        cssOverride={overide}
        size={150}
        />
    </div>
  )
}
