import React from 'react'

type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-full'>
      <div className=' bg-[#1F2937] w-[100%] mx-auto'>
        <div className=' w-[80%] mx-auto'>
          <h1 className='relative top-12 text-9xl font-bold'>About Me.</h1>
        </div>
      </div>
      <div className='w-[80%] mx-auto'>
        <div className='mt-16'>
          <p className='text-4xl font-bold leading-[50px]'>I'm a software developer that loves building products and web applications that impact millions of lives.</p>
        </div>
      </div>
    </div>
  )
}

export default About