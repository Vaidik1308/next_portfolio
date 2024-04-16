import SocialLinks from '@/components/SocialLinks'
import Link from 'next/link'
import React from 'react'
import { FaLocationArrow, FaMapPin } from 'react-icons/fa'
import { PiPhone } from 'react-icons/pi'
import { SlEnvolopeLetter } from 'react-icons/sl'

type Props = {}

const Contact = (props: Props) => {
  return (
    <div className='w-full'>
      <div className=' bg-[#1F2937] w-[100%] mx-auto'>
        <div className=' md:w-[80%] mx-auto'>
          <h1 className='relative top-8 text-8xl px-2 md:px-0 md:text-9xl font-bold'>Contact.</h1>
        </div>
        <div className=' w-[95%] md:w-[80%] relative z-1 bg-[#02054A] mt-4 mx-auto flex justify-center items-center min-h-fit'>
          <div className='md:w-[80%] w-full flex items-center justify-center md:flex-row flex-col'>
            <div className='px-4  p-4   py-24  flex flex-col justify-between md:w-1/2'>
              <div className='flex flex-col w-[100%] mx-auto justify-between gap-8 md:gap-16 h-fit'>
                <div>
                  <h2>{"get in touch, let's talk. "}</h2>
                  <p>Fill in the details and I'll get back to you as soon as I can.</p>
                </div>
                <div className='flex flex-col justify-center items-start md:gap-8 gap-2'>
                  <div className='flex items-center gap-2 '>
                    <PiPhone className='text-[#3B82F7]'/>
                    <span>+91 9116669468</span>
                  </div>
                  <div className='flex items-center gap-2 '>
                    <SlEnvolopeLetter  className='text-[#3B82F7]'/>
                    <Link href={"mailto:vaidiksingnirwan@gmail.com"}>vaidiksinghnirwan@gmail.com</Link>
                  </div>
                  <div className='flex items-center gap-2 '>
                    <FaMapPin  className='text-[#3B82F7]'/>
                    <span>Ajmer, Rajasthan, India.</span>
                  </div>
                </div>
                <div className='flex gap-6 text-2xl items-center justify-start'>
                  <SocialLinks/>
                </div>
              </div>
            </div>
            <div className='md:w-1/2 w-[95%] mx-auto  bg-white p-4 rounded-lg'>
              <form className=' flex flex-col gap-4 w-[]'>
                <div className='text-black flex flex-col w-[90%] mx-auto gap-1.5'>
                  <label className=' font-semibold' htmlFor="">Your Name</label>
                  <input className='outline-none p-2 text-white rounded-lg focus:border-gray-400 focus:border-[2px] duration-100' type="text" name="" id="" />
                </div>
                <div className='text-black flex flex-col w-[90%] mx-auto gap-1.5'>
                  <label className=' font-semibold' htmlFor="">Email</label>
                  <input className='outline-none p-2 text-white rounded-lg focus:border-gray-400 focus:border-[2px] duration-100' type="email" name="" id="" />
                </div>
                <div className='text-black flex flex-col w-[90%] mx-auto gap-1.5'>
                  <label className=' font-semibold' htmlFor="">Message</label>
                  <textarea className='outline-none p-2 text-white rounded-lg focus:border-gray-400 focus:border-[2px] duration-100' rows={5} name="" id="" />
                </div>
                <button className='mt-2 bg-[#3B82F7] p-2 rounded-lg text-white hover:bg-white hover:text-black duration-500 shadow-lg font-semibold w-[90%] mx-auto flex items-center justify-center gap-2 px-4 group'>
                  Send message
                  <FaLocationArrow className='group-hover:rotate-45 duration-500 '/>
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact