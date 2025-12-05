"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoD from '@/public/assets/logoD.png'
import Image from "next/image";
import { RiTiktokLine } from "react-icons/ri";
import { TbBrandFiverr } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

import { WEBSITE_HOME } from "@/routes/WebsiteRoutes";

export default function Footer() {
    return (
        <footer className=" z-10 relative text-white pb-10 md:pb-5 md:py-16 px-6 md:px-16">
            {/* Contact boxes */}
            <div className="grid md:grid-cols-3 bg-slate-500/10 p-5 rounded-2xl gap-6 mb-12">
                {/* Email */}
                <div className="bg-[#151515]/50 border border-white/20 rounded-3xl p-6 flex items-center gap-4 shadow-inner">
                    <Mail className="text-lime-600 w-6 h-6" />
                    <div className="flex items-center gap-3">
                        <p className="text-gray-400  font-semibold md:text-lg">Email</p>
                        <p className="font-medium text-xs md:text-sm">developer@rajabali.com</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="bg-[#151515]/50 border border-white/10 rounded-3xl p-6 flex items-center gap-4 shadow-inner">
                    <Phone className="text-lime-600 w-6 h-6" />
                    <div className="flex items-center gap-3">
                        <p className="text-gray-400  md:text-lg font-semibold ">Call me</p>
                        <p className="font-medium text-xs md:text-sm">+92 309 3060 947 </p>
                    </div>
                </div>

                {/* Location */}
                <div className="bg-[#151515]/50 border border-white/10 rounded-3xl p-6 flex items-center gap-4 shadow-inner">
                    <MapPin className="text-lime-600 w-6 h-6" />
                    <div className="flex items-center gap-3">
                        <p className="text-gray-400 font-semibold  md:text-lg">Location</p>
                        <p className="font-medium text-xs md:text-sm">Faisalabad, Pakistan</p>
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className="grid md:grid-cols-4 bg-slate-500/10 pt-0 md:pt-10 p-5 md:p-10 rounded-3xl gap-8">
                {/* Logo */}
                <div>
                    <Link href={WEBSITE_HOME}>
                        <div className='flex justify-center '>
                            <Image className='w-30 md:mt-0 my-4 relative h-auto' src={logoD.src} height={logoD.height} width={logoD.width} alt='logo' />
                        </div>
                    </Link>
                    <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                        "Crafting high-quality web applications that are fast, secure, and designed for real business growth" 

                    </p>
                </div>
                <div className="flex justify-between">

                    {/* Menu */}
                    <div className="md:ps-16">
                        <h3 className="text-lime-600 md:text-2xl text-lg  font-semibold mb-1.5">Menu</h3>
                        <ul className=" text-gray-500 md:text-sm text-xs">
                            <li><Link className="hover:text-lime-600 text-md" href="/">Home</Link></li>
                            <li><Link className="hover:text-lime-600 text-md" href="/about">About</Link></li>
                            <li><Link className="hover:text-lime-600 text-md" href="/services">Services</Link></li>
                            <li><Link className="hover:text-lime-600 text-md" href="/projects">Projects</Link></li>
                            <li><Link className="hover:text-lime-600 text-md" href="/faqs">FAQ's</Link></li>
                            <li><Link className="hover:text-lime-600 text-md" href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:ps-16 md:hidden">
                        <h3 className="text-lime-600 font-semibold md:text-2xl text-lg   mb-1.5">Services</h3>
                        <ul className=" text-gray-500 md:text-sm text-xs ">
                        <li><Link className="hover:text-lime-600 text-md" href="/services">Full Stack Solutions</Link></li>
                        <li><Link className="hover:text-lime-600 text-md" href="/services">API Development & Integration</Link></li>
                        <li><Link className="hover:text-lime-600 text-md" href="/services">Frontend Development </Link></li>
                        <li><Link className="hover:text-lime-600 text-md" href="/services">Backend Development</Link></li>
                        <li><Link className="hover:text-lime-600 text-md" href="/services">Deployment & DevOps</Link></li>
                        <li><Link className="hover:text-lime-600 text-md" href="/services">Bug Fixing & Code Debugging</Link></li>
                        <li><Link className="hover:text-lime-600 text-md" href="/services">Performance Optimization</Link></li>
                    </ul>
                    </div>
                </div>
                {/* Services */}
                <div className=" hidden md:block ">
                    <h3 className="text-lime-600 font-semibold md:text-2xl text-lg   mb-1.5">Services</h3>
                    <ul className=" text-gray-500 md:text-sm text-xs ">
                        <li><Link className="hover:text-lime-600 text-md" href="/services">Full Stack Solutions</Link></li>
                        <li><Link className="hover:text-lime-600 text-md" href="/services">API Development & Integration</Link></li>
                        <li><Link className="hover:text-lime-600 text-md" href="/services">Frontend Development </Link></li>
                        <li><Link className="hover:text-lime-600 text-md" href="/services">Backend Development</Link></li>
                        <li><Link className="hover:text-lime-600 text-md" href="/services">Deployment & DevOps</Link></li>
                        <li><Link className="hover:text-lime-600 text-md" href="/services">Bug Fixing & Code Debugging</Link></li>
                        <li><Link className="hover:text-lime-600 text-md" href="/services">Performance Optimization</Link></li>
                    </ul>
                </div>

                {/* Other Pages */}
                <div className="md:ps-16">
                    <h3 className="text-lime-600 md:text-2xl text-lg  font-semibold mb-1.5">Other Pages</h3>
                    <ul className=" text-gray-500 md:sm text-xs">
                        <li><Link className="hover:text-lime-600 text-md" href="/terms_conditions">Terms & Conditions</Link></li>

                        <li><Link className="hover:text-lime-600 text-md" href="/privacy_policy">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>

            {/* Social + Newsletter */}
            <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Social Icons */}
                <div className="flex  items-center gap-4">
                    <span className="text-gray-400 md:text-base text-xs font-semibold ">Follow me:</span>
                    <div className="flex gap-5 ">
                        <a target="_blank" href="https://www.upwork.com/freelancers/~01bf3c34879bc12ce2" className="bg-[#151515] p-2 rounded-xl hover:text-lime-600 transition">
                            <SiUpwork className="w-6 h-6" />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/rajab-ali-636524375" className="bg-[#151515] p-2 rounded-xl hover:text-lime-600 transition">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a target="_blank" href="https://www.fiverr.com/rajabali10005" className="bg-[#151515] p-2 rounded-xl hover:text-lime-600 transition">
                            <TbBrandFiverr className="w-6 h-6" />
                        </a>
                        <a target="_blank" href="https://github.com/Rajab-ali99" className="bg-[#151515] p-2 rounded-xl hover:text-lime-600 transition">
                            <FaGithub className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="text-gray-400 text-xs md:text-base">
                    Copyright © 2025  Rajab Ali | All rights reserved.
                </div>
            </div>
        </footer>
    );
}
