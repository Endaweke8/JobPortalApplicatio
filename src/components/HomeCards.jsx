import React from 'react'
import { Card } from './Card'
import web from "../assets/images/web.png"
import mobile from '../assets/images/mobile.jpeg'
import graphics from '../assets/images/graphics.jpeg'
import { Link } from 'react-router-dom'

export const HomeCards = () => {
  return (
    <div><div class="flex flex-wrap justify-center mt-10">

  
    <Card >
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800  p-8 flex-col">
            <div class="flex items-center mb-3">
                <div
                    class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <img src={web} alt="" />
                </div>
                <h2 class="dark:text-white text-2xl font-bold">Website Design</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed mt-4  dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href="#" class="mt-6 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Visit here
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    </Card>
    <Card >
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800  p-8 flex-col">
            <div class="flex items-center mb-3">
                <div
                    class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <img src={mobile} alt="" />
                </div>
                <h2 class="dark:text-white text-2xl font-bold">Mobile App Design</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed mt-4  dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href="#" class="mt-6 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Visit here
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    </Card>
    <Card >
    <div class="p-4 max-w-sm">
        <div class="flex rounded-lg h-full dark:bg-gray-800  p-8 flex-col">
            <div class="flex items-center mb-3">
                <div
                    class="w-12 h-12 mr-3 inline-flex items-center justify-center rounded-full dark:bg-indigo-500 bg-indigo-500 text-white flex-shrink-0">
                    <img src={graphics} alt="" />
                </div>
                <h2 class="dark:text-white text-2xl font-bold">Graphics Design</h2>
            </div>
            <div class="flex flex-col justify-between flex-grow">
                <p class="leading-relaxed mt-4  dark:text-gray-300">
                    Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.
                </p>
                <a href="#" class="mt-6 text-black dark:text-white hover:text-blue-600 inline-flex items-center">Visit here
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
            </div>
        </div>
    </div>
    </Card>
    <br />
          <br />
        <  Link className='flex justify-center items-center text-2xl font-bold'>Brows Jobs</Link>

</div>
</div>
  )
}
