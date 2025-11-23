'use client'
import { WEBSITE_ABOUT, WEBSITE_CONTACT, WEBSITE_HOME, WEBSITE_PROJECTS, WEBSITE_REVIEWS, WEBSITE_SERVICES } from '@/routes/WebsiteRoutes'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import logoM from '@/public/assets/logoM.png'
import logoD from '@/public/assets/logoD.png'

import Button from './Button'
import Image from 'next/image'
import Sidebar from './Sidebar'


const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathName = usePathname()
  return (
    <nav className=' bg-emerald-500/96 md:bg-black/70 pl-0 px-5 h-20 w-full fixed top-0 left-0 z-50   flex justify-between items-center'>
      <div className=' md:px-16'>
        <Image className='w-34 hidden md:block h-auto' src={logoD.src} height={logoD.height} width={logoD.width} alt='logo'/>
        <Image className='w-30  md:hidden h-auto' src={logoM.src} height={logoM.height} width={logoM.width} alt='logo'/>
      </div>
      <div className='bg-black py-2 hidden  font-bold text-lg px-4 border  border-slate-700 rounded-full text-white md:flex items-center gap-5 '>
        <Link className={`py-1 px-5 hover:text-emerald-500 transition-all duration-500  rounded-full ${pathName === WEBSITE_HOME && 'text-emerald-500 rounded-full bg-gray-900'}`} href={WEBSITE_HOME}>Home</Link>
        <Link className={`py-1 px-5 hover:text-emerald-500 transition-all duration-500  rounded-full ${pathName === WEBSITE_ABOUT && 'text-emerald-500 rounded-full bg-gray-900'}`} href={WEBSITE_ABOUT}>About</Link>
        <Link className={`py-1 px-5 hover:text-emerald-500 transition-all duration-500  rounded-full ${pathName === WEBSITE_SERVICES && 'text-emerald-500 rounded-full bg-gray-900'}`} href={WEBSITE_SERVICES}>Services</Link>
        <Link className={`py-1 px-5 hover:text-emerald-500 transition-all duration-500  rounded-full ${pathName === WEBSITE_PROJECTS && 'text-emerald-500 rounded-full bg-gray-900'}`} href={WEBSITE_PROJECTS}>Projects</Link>
        <Link className={`py-1 px-5 hover:text-emerald-500 transition-all duration-500  rounded-full ${pathName === WEBSITE_REVIEWS && 'text-emerald-500 rounded-full bg-gray-900'}`} href={WEBSITE_REVIEWS}>Reviews</Link>
        <Link className={`py-1 px-5 hover:text-emerald-500 transition-all duration-500  rounded-full ${pathName === WEBSITE_CONTACT && 'text-emerald-500 rounded-full bg-gray-900'}`} href={WEBSITE_CONTACT}>Contact</Link>


      </div>
      <div className='hidden md:block'>
        <Button className='' type='button' text='Have a Quote' />
      </div>
      <div onClick={() => setSidebarOpen(true)} className='block md:hidden'>
        <GiHamburgerMenu className='text-4xl text-black' />
      </div>
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </nav>
  )
}

export default Navbar