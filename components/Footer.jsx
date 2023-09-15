import Link from 'next/link'
import React from 'react'
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>  &copy; 2023 MOSOBHY</p>
      <div className='icons'>
        <Link href={""}>
          <AiFillInstagram /> </Link>
        <Link href={""}>
          <AiOutlineTwitter />
        </Link>
      </div>
    </div>
  )
}

export default Footer