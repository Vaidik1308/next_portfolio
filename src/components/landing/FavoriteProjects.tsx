import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaLocationArrow } from 'react-icons/fa'
import blogImg from '../../../public/projects/blog.png'
import hotelImg from '../../../public/projects/hotel.png'
import intern from '../../../public/projects/intern.png'

type Props = {}

const FavoriteProjects = (props: Props) => {
  return (
    <div className='max-w-6xl mx-auto'>
      <div className='flex items-start md:flex-row flex-col  md:items-center px-4 my-4 justify-between'>
      <h1 className='w-full md:w-fit text-7xl md:text-9xl font-extrabold text-gray-500 flex flex-col md:leading-[120px]'>
        <span className='tracking-wide'>Favorite</span>
        <span className='tracking-wide'>Projects</span>
      </h1>
      <Link className='flex md:justify-center items-center gap-2 group hover:bg-white hover:text-black duration-500 p-2 rounded-lg px-3' href={"/projects"}>
        <span className='group-hover:rotate-45 duration-500'>
          <FaLocationArrow />
        </span>
        <span>View All</span>
      </Link>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 relative bottom-2'>
        <div className='relative bg-white  md:col-span-3  rounded-lg '>
          <div className='relative h-[200px] md:h-[500px] z-1  w-[100%]  overflow-hidden  rounded-lg'>
            <Image  alt='hotel_pic' fill src={hotelImg} className='object-cover brightness-50 duration-1000 hover:scale-150 rounded-lg'/>
          </div>
          <p className='absolute top-0 left-0 bg-red-600 text-white p-2 m-2 rounded-lg font-bold text-xl'>Hotel Booking Website</p>
          <p className='absolute bottom-0 left-0 text-white p-2 m-2 rounded-lg text-xl font-bold'>01</p>
          <p className='absolute text-2xl top-0 bottom-0 translate-x-[50%] md:text-5xl  translate-y-[50%] left-0  md:right-0 right-[35%] font-bold'>Hotel Booking Website</p>
        </div>
        <div className='relative  md:col-span-2 '>
          <div className='relative h-[200px] md:h-[400px]  z-1  w-[100%]  overflow-hidden  rounded-lg'>
            <Image  alt='hotel_pic' fill src={blogImg} className='object-cover rounded-lg brightness-50 duration-1000 hover:scale-150'/>
          </div>
          <p className='absolute top-0 left-0 bg-red-600 text-white p-2 m-2 rounded-lg font-bold text-xl'>Blog Website</p>
          <p className='absolute bottom-0 left-0 text-white p-2 m-2 rounded-lg text-xl font-bold'>02</p>
          <p className='absolute top-0 bottom-0 translate-x-[50%] text-2xl md:text-4xl  translate-y-[50%] left-0 right-0 font-bold'>Papwrite</p>
        </div>
        <div className='relative w-full h-fit'>
          <div className='relative h-[200px] md:h-[250px] z-1  w-[100%]  overflow-hidden  rounded-lg'>
            <Image  alt='hotel_pic' fill src={intern} className='object-cover brightness-50 duration-1000 hover:scale-150 rounded-lg'/>
          </div>
          <p className='absolute top-0 left-0 bg-red-600 text-white p-2 m-2 rounded-lg font-bold text-sm'>Hackathon Website</p>
          <p className='absolute bottom-0 left-0 text-white p-2 m-2 rounded-lg text-xl font-bold'>03</p>
          <p className='absolute z-1 left-0 translate-x-[50%] translate-y-[50%] right-0 bottom-0 top-0 font-bold text-2xl md:text-xl'>Hacktogether</p>
        </div>
      </div>
    </div>
  )
}

export default FavoriteProjects