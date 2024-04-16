import Image from 'next/image'
import React from 'react'
import blogImg from '../../../public/projects/blog.png'
import hotelImg from '../../../public/projects/hotel.png'
import intern from '../../../public/projects/intern.png'
import naukri from '../../../public/projects/naukri.png'
import Link from 'next/link'

type Props = {}

const Projects = (props: Props) => {
  return (
    <div className='w-full'>
      <div className=' bg-[#1F2937] w-[100%] mx-auto'>
        <div className=' w-[80%] mx-auto'>
          <h1 className='relative top-12 text-9xl font-bold'>Projects.</h1>
        </div>
      </div>
      <div className='w-[80%] mx-auto grid grid-cols-2 my-16 gap-4'>
        <Link href={`https://github.com/Vaidik1308/hotel_website`} className='relative  col-span-1 '>
          <div className='relative h-[200px] md:h-[300px]  z-1  w-[95%]  overflow-hidden  rounded-lg'>
            <Image  alt='hotel_pic' fill src={hotelImg} className='object-cover rounded-lg brightness-50 duration-1000 hover:scale-150'/>
          </div>
          <p className='absolute top-0 left-0 bg-red-600 text-white p-2 m-2 rounded-lg font-bold text-xl'>Hotel Website</p>
          <p className='absolute bottom-0 left-0 text-white p-2 m-2 rounded-lg text-xl font-bold'>01</p>
          <p className='absolute top-0 bottom-0 translate-x-[50%] text-2xl md:text-4xl  translate-y-[50%] left-0 right-0 font-bold'>Hotel website</p>
        </Link>
        <Link href={`https://github.com/Vaidik1308/next-notes_app`} className='relative  col-span-1 group'>
          <div className='relative h-[200px] md:h-[300px]  z-1  w-[95%]  overflow-hidden  rounded-lg'>
            <Image  alt='hotel_pic' fill src={blogImg} className='object-cover rounded-lg brightness-50 duration-1000 group-hover:scale-150'/>
          </div>
          <p className='absolute top-0 left-0 bg-red-600 text-white p-2 m-2 rounded-lg font-bold text-xl'>Blog Website</p>
          <p className='absolute bottom-0 left-0 text-white p-2 m-2 rounded-lg text-xl font-bold'>02</p>
          <p className='absolute top-0 bottom-0 translate-x-[50%] text-2xl md:text-4xl  translate-y-[50%] left-0 right-0 font-bold'>Papwrite</p>
        </Link>
        <Link href={`https://github.com/Vaidik1308/naukri`} className='relative  col-span-1 group'>
          <div className='relative h-[200px] md:h-[300px]  z-1  w-[95%]  overflow-hidden  rounded-lg'>
            <Image  alt='hotel_pic' fill src={naukri} className='object-cover rounded-lg brightness-50 duration-1000 group-hover:scale-150'/>
          </div>
          <p className='absolute top-0 left-0 bg-red-600 text-white p-2 m-2 rounded-lg font-bold text-xl'>Job Website</p>
          <p className='absolute bottom-0 left-0 text-white p-2 m-2 rounded-lg text-xl font-bold'>03</p>
          <p className='absolute top-[50%] bottom-0  text-2xl md:text-4xl md:right-[10%]    right-0 font-bold'>Naukri</p>
        </Link>
        
        
      </div>
    </div>
  )
}

export default Projects