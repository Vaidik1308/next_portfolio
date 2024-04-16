import Link from 'next/link'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa6'

type Props = {}

const SocialLinks = (props: Props) => {
  return (
    <>
        <Link href={"/"}>
            <FaGithub />
        </Link>
        <Link href={"/"}>
            <FaLinkedin />
        </Link>
        <Link href={"/"}>
            <FaInstagram />
        </Link>
    </>
  )
}

export default SocialLinks