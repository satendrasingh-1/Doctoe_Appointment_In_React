import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'

const MyProfile = () => {


  const {userData, setUserData} = useState({
    name:"Dr. Richard James",
    image: assets.profile_pic,
    email: "richard@gmail.com",
    phone: "+91 9999999999",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London"
    }, 
    gender: "Male",
    dob: "2000-01-01"

  })

  const [isEdit, setIsEdit] = useState(false)
  return  (
    <div className='max-w-lg flex flex-col gap-2 text-sm'>

     
          <img className='w-36 rounded' src={assets.profile_pic} alt="" />
      

        <p className='font-medium text-3xl text-neutral-800 mt-4'>Richard James</p>
      

      <hr className='bg-zinc-400 h-[1px] border-none' />

      <div>
        <p className='text-neutral-500 underline mt-3'>CONTACT INFORMATION</p>

        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Email id:</p>
          <p className='text-blue-500'>richard@gmail.com</p>

          <p className='font-medium'>Phone:</p>
               <p className='text-blue-500'>+91 9999999999</p>
          

          <p className='font-medium'>Address:</p>
          <div>
            
                <p className='text-gray-400'>
                57th Cross, Richmond
                  <br />
                Circle, Church Road, London
                </p>
            
          </div>
        </div>
      </div>

      <div>
        <p className='text-neutral-500 underline mt-3'>BASIC INFORMATION</p>

        <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
          <p className='font-medium'>Gender:</p>
              <p className='text-gray-400'>Male</p>

          <p className='font-medium'>Birthday:</p>
               <p className='text-gray-400'>2000-01-01</p>
        </div>
      </div>


    </div>
  )
}

export default MyProfile