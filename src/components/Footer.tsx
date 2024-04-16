import React from 'react'
import SocialLinks from './SocialLinks'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className='flex w-full flex-col justify-center gap-2 my-4 border-t-[1px] border-gray-400 border-opacity-[0.5] py-4 px-2 md:flex-row md:justify-evenly py-8'>
      <div className='flex gap-1 items-center font-semibold '>
        <p>@</p>
        <span>Vaidik Singh Nirwan.</span>
        <span>All Rights Reserved.</span>
      </div>
      <div>
        <p>Developed by Vaidik</p>
      </div>
      <div className='flex items-center gap-3 text-2xl'>
        <SocialLinks/>
      </div>
    </div>
  )
}

export default Footer