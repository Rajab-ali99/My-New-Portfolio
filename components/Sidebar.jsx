'use client'
import React from 'react'
import { useState } from "react";
import { FiX, FiChevronDown } from "react-icons/fi";
import {
  HiHome,
  HiUser,
  HiBadgeCheck,
  HiFolder,
  HiChatAlt2,
  HiMail
} from "react-icons/hi";

import logoD from '@/public/assets/logoD.png'
import Link from 'next/link';
import Image from 'next/image';
import { WEBSITE_ABOUT, WEBSITE_CONTACT, WEBSITE_HOME, WEBSITE_PROJECTS, WEBSITE_REVIEWS, WEBSITE_SERVICES } from '@/routes/WebsiteRoutes';


const Sidebar = ({ open, onClose }) => {
    const [servicesOpen, setServicesOpen] = useState(false);
    
  return (
     <>
      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 w-fit h-full bg-black  overflow-y-scroll pb-5  text-white z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-1 border-b border-gray-700">
          <Image className='h-16 w-auto' src={logoD.src} height={logoD.height} width={logoD.width} alt='logo'/>
          <button className="text-3xl" onClick={onClose}>
            <FiX />
          </button>
        </div>

        {/* Menu Links */}
        <ul className="flex flex-col p-4 w-[80vw] space-y-4">
          <Link   onClick={onClose}  href={WEBSITE_HOME} className="text-lime-600 text-xl py-1 px-3 rounded-xl flex items-center gap-3"><span className='text-3xl'><HiHome/></span>Home</Link>
          <Link  onClick={onClose} href={WEBSITE_ABOUT} className="text-lime-600 text-xl py-1 px-3 rounded-xl flex items-center gap-3"><span className='text-3xl'><HiUser/></span>About</Link>
          <Link  onClick={onClose} href={WEBSITE_SERVICES} className="text-lime-600 text-xl py-1 px-3 rounded-xl flex items-center gap-3"><span className='text-3xl'><HiBadgeCheck/></span>Services</Link>
          <Link onClick={onClose} href={WEBSITE_PROJECTS} className="text-lime-600 text-xl py-1 px-3 rounded-xl flex items-center gap-3"><span className='text-3xl'><HiFolder/></span>Projects</Link>
          <Link onClick={onClose} href={WEBSITE_REVIEWS} className="text-lime-600 text-xl py-1 px-3 rounded-xl flex items-center gap-3"><span className='text-3xl'><HiChatAlt2/></span>Reviews</Link>
          <Link onClick={onClose} href={WEBSITE_CONTACT} className="text-lime-600 text-xl py-1 px-3 rounded-xl flex items-center gap-3"><span className='text-3xl'><HiMail/></span>Contact</Link>
        </ul>

        {/* Quote Button */}
        <div className="px-4 mt-6">
          <Link onClick={onClose} href={WEBSITE_CONTACT} className="w-full border border-white rounded-full px-4 py-2  transition">
            Get A Quote
          </Link>
        </div>
      </div>

      {/* Dark Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={onClose}
        ></div>
    )}
    </>



 )}

export default Sidebar
