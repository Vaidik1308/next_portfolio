'use client'
import React from 'react'
import { RoughNotationGroup } from 'react-rough-notation'
import RainbowHighlight from './RainbowHighlight'
import Image from 'next/image'
import profilePic from '../../../public/landing/profilePic.jpg'
import { useTheme } from 'next-themes'



type Props = {}

const Hero = (props: Props) => {
    const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
    // const [theme,setTheme] = useTheme()
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full md:items-start overflow-hidden max-w-8xl mx-auto py-4 bg-[#1F2937]">
      {/* Text container */}

      <div className="w-full px-4 md:px-0 md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Designer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Programmer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Editor.
            </h1>
          </RainbowHighlight>
       </RoughNotationGroup>
     </div>
      <div className='md:w-1/2 flex items-center justify-center'>
        <div className='relative md:h-[600px] h-[400px] w-[400px] my-4 md:w-[500px] overflow-hidden rounded-lg '>
        <Image alt='profile_pic' src={profilePic} fill className='object-cover hover:scale-105 duration-300 ' />
        </div>
      </div>
     </div>
  )
}

export default Hero