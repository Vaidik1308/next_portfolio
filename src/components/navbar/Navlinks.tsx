'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

type Props = {}

const Navlinks = (props: Props) => {
    const pathname = usePathname()
  return (
    <>
      <Link className={`${pathname === "/" && "text-gray-500 border-b-[1px] border-gray-300 border-opacity-30 duration-500"}`} href={"/"}>Home</Link>
      <Link className={`${pathname === "/about-me" && "text-gray-500 border-b-[1px] border-gray-300 border-opacity-30 duration-500"}`} href={"/about-me"}>About</Link>
      <Link className={`${pathname === "/projects" && "text-gray-500 border-b-[1px] border-gray-300 border-opacity-30 duration-500"}`} href={"/projects"}>Projects</Link>
      <Link className={`${pathname === "/experience" && "text-gray-500 border-b-[1px] border-gray-300 border-opacity-30 duration-500"}`} href={"/experience"}>Experience</Link>
      <Link className={`${pathname === "/contact-me" && "text-gray-500 border-b-[1px] border-gray-300 border-opacity-30 duration-500"}`} href={"/contact-me"}>Contact</Link>
    </>
  )
}

export default Navlinks