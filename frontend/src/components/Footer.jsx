import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex  flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
      {/*left*/}
      <div>
        <img className='w-[130px]' src={assets.logo1}/>
        <p className='w-full md:w-2/3 text-gray-500'>Simply browse through our extensive list of trusted doctors,
schedule your appointment hassle-free.</p>
      </div>
      {/*center*/}
      <div>
        <p className='text-xl font-medium mb-5'>COMPANY</p>
        <ul className='flex flex-col gap-2 text-gray-500'>
            <li>Home</li>
            <li>AboutUs</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
        </ul>
      </div>
      {/*right*/}
      <div>
      <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
      <ul className='flex flex-col gap-2 text-gray-500'>
        <li>8009008909</li>
        <li>max@gmail.com</li>
      </ul>
      </div>
      </div>
      <div >
      <hr/>
      <p className='py-5 text-sm text-center'>Copyright 2024 @maxclinic - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
