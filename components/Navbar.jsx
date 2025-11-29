'use client'
import { WEBSITE_ABOUT, WEBSITE_CONTACT, WEBSITE_HOME, WEBSITE_PROJECTS, WEBSITE_REVIEWS, WEBSITE_SERVICES } from '@/routes/WebsiteRoutes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logoM from '@/public/assets/logoM.png'
import logoD from '@/public/assets/logoD.png'
import { CiMenuKebab } from "react-icons/ci";

import Button from './Button'
import Image from 'next/image'
import Sidebar from './Sidebar'


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname()
  return (
    <nav className=' bg-lime-600/96 md:bg-black/80 pl-0 px-5 h-18 w-full fixed top-0 left-0 z-50   flex justify-between items-center'>
      <Link href={WEBSITE_HOME}>
      <div className=' md:px-16 flex items-center'>
        <Image className='w-24 hidden md:block h-auto' src={logoD.src} height={logoD.height} width={logoD.width} alt='logo'/>
        <Image className='w-22  md:hidden h-auto' src={logoM.src} height={logoM.height} width={logoM.width} alt='logo'/>
      </div>
      </Link>
      <div className='bg-black py-2 hidden font font-medium px-4 border  border-slate-700 rounded-full text-white md:flex items-center gap-5 '>
        <Link className={`py-1 px-5 hover:text-lime-600 transition-all duration-500  rounded-full ${pathName === WEBSITE_HOME && 'text-white hover:bg-black rounded-full bg-lime-600'}`} href={WEBSITE_HOME}>Home</Link>
        <Link className={`py-1 px-5 hover:text-lime-600 transition-all duration-500  rounded-full ${pathName === WEBSITE_ABOUT && 'text-white hover:bg-black rounded-full bg-lime-600'}`} href={WEBSITE_ABOUT}>About</Link>
        <Link className={`py-1 px-5 hover:text-lime-600 transition-all duration-500  rounded-full ${pathName === WEBSITE_SERVICES && 'text-white hover:bg-black rounded-full bg-lime-600'}`} href={WEBSITE_SERVICES}>Services</Link>
        <Link className={`py-1 px-5 hover:text-lime-600 transition-all duration-500  rounded-full ${pathName === WEBSITE_PROJECTS && 'text-white hover:bg-black rounded-full bg-lime-600'}`} href={WEBSITE_PROJECTS}>Projects</Link>
        <Link className={`py-1 px-5 hover:text-lime-600 transition-all duration-500  rounded-full ${pathName === WEBSITE_REVIEWS && 'text-white hover:bg-black rounded-full bg-lime-600'}`} href={WEBSITE_REVIEWS}>Reviews</Link>
        <Link className={`py-1 px-5 hover:text-lime-600 transition-all duration-500  rounded-full ${pathName === WEBSITE_CONTACT && 'text-white hover:bg-black rounded-full bg-lime-600'}`} href={WEBSITE_CONTACT}>Contact</Link>


      </div>
      <div className='hidden md:block'>
        <Link href={WEBSITE_CONTACT}>
        <Button className='' type='button' text='Get A Quote' />
        </Link>
      </div>
      <div onClick={() => setSidebarOpen(true)} className='block md:hidden'>
        <CiMenuKebab className='text-4xl text-black' />
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </nav>
  )
}

export default Navbar