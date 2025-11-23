"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoD from '@/public/assets/logoD.png'
import Image from "next/image";
import { RiTiktokLine } from "react-icons/ri";
import { BsTwitterX } from "react-icons/bs";

import { WEBSITE_HOME } from "@/routes/WebsiteRoutes";

export default function Footer() {
    return (
        <footer className=" z-10 relative text-white pb-10 md:pb-5 md:py-16 px-6 md:px-16">
            {/* Contact boxes */}
            <div className="grid md:grid-cols-3 bg-slate-500/10 p-5 rounded-2xl gap-6 mb-12">
                {/* Email */}
                <div className="bg-[#151515]/50 border border-white/20 rounded-3xl p-6 flex items-center gap-4 shadow-inner">
                    <Mail className="text-emerald-500 w-6 h-6" />
                    <div className="flex items-center gap-3">
                        <p className="text-gray-400 md:text-xl font-bold text-lg">Email</p>
                        <p className="font-medium text-xs md:text-base">hello@bullishpixel.com</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="bg-[#151515]/50 border border-white/10 rounded-3xl p-6 flex items-center gap-4 shadow-inner">
                    <Phone className="text-emerald-500 w-6 h-6" />
                    <div className="flex items-center gap-3">
                        <p className="text-gray-400 md:text-xl text-lg font-bold ">Call Us</p>
                        <p className="font-medium text-xs md:text-base">+92 311 7787 395 </p>
                    </div>
                </div>

                {/* Location */}
                <div className="bg-[#151515]/50 border border-white/10 rounded-3xl p-6 flex items-center gap-4 shadow-inner">
                    <MapPin className="text-emerald-500 w-6 h-6" />
                    <div className="flex items-center gap-3">
                        <p className="text-gray-400 font-bold md:text-xl text-lg">Location</p>
                        <p className="font-medium text-xs md:text-base">Lahore, Pakistan</p>
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className="grid md:grid-cols-4 bg-slate-500/10 pt-0 md:pt-10 p-5 md:p-10 rounded-3xl gap-8">
                {/* Logo */}
                <div>
                    <Link href={WEBSITE_HOME}>
                        <div className='flex justify-center '>
                            <Image className='w-36 relative h-auto' src={logoD.src} height={logoD.height} width={logoD.width} alt='logo' />
                        </div>
                    </Link>
                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                        "We use the best strategies to achieve your success, helping your business stand out and grow faster." 

                    </p>
                </div>
                <div className="flex justify-between">

                    {/* Menu */}
                    <div className="md:ps-16">
                        <h3 className="text-emerald-500 md:text-2xl text-lg  font-semibold mb-1.5">Menu</h3>
                        <ul className=" text-gray-300">
                            <li><Link className="hover:text-emerald-500 text-md" href="/">Home</Link></li>
                            <li><Link className="hover:text-emerald-500 text-md" href="/about">About</Link></li>
                            <li><Link className="hover:text-emerald-500 text-md" href="/services">Services</Link></li>
                            <li><Link className="hover:text-emerald-500 text-md" href="/projects">Projects</Link></li>
                            <li><Link className="hover:text-emerald-500 text-md" href="/reviews">Reviews</Link></li>
                            <li><Link className="hover:text-emerald-500 text-md" href="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="md:ps-16 md:hidden">
                        <h3 className="text-emerald-500 font-semibold md:text-2xl text-lg   mb-1.5">Services</h3>
                        <ul className=" text-gray-300">
                            <li><Link className="hover:text-emerald-500 text-md" href="/services">Marketing</Link></li>
                            <li><Link className="hover:text-emerald-500 text-md" href="/services">Trading</Link></li>
                            <li><Link className="hover:text-emerald-500 text-md" href="/services">Custom Website Development</Link></li>
                            <li><Link className="hover:text-emerald-500 text-md" href="/services">Shopify & Wordpress</Link></li>
                            <li><Link className="hover:text-emerald-500 text-md" href="/services">LLC LTD & PVT</Link></li>
                            <li><Link className="hover:text-emerald-500 text-md" href="/services">Coaching/Tutoring</Link></li>
                        </ul>
                    </div>
                </div>
                {/* Services */}
                <div className="md:ps-16 hidden md:block ">
                    <h3 className="text-emerald-500 font-semibold md:text-2xl text-lg   mb-1.5">Services</h3>
                    <ul className=" text-gray-300">
                        <li><Link className="hover:text-emerald-500 text-md" href="/services">Marketing</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/services">Trading</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/services">Custom Website Development</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/services">Shopify & Wordpress</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/services">LLC Ltd & Pvt</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/services">Coaching/Tutoring</Link></li>
                    </ul>
                </div>

                {/* Other Pages */}
                <div className="md:ps-16">
                    <h3 className="text-emerald-500 md:text-2xl text-lg  font-semibold mb-1.5">Other Pages</h3>
                    <ul className=" text-gray-300">
                        <li><Link className="hover:text-emerald-500 text-md" href="/terms_conditions">Terms & Conditions</Link></li>

                        <li><Link className="hover:text-emerald-500 text-md" href="/privacy_policy">Privacy Policy</Link></li>
                    </ul>
                </div>
            </div>

            {/* Social + Newsletter */}
            <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    <span className="text-gray-400 md:text-xl text-sm font-bold ">Follow us:</span>
                    <div className="flex md:gap-3 gap-1">
                        <a target="_blank" href="http://facebook.com/BullishPixel" className="bg-[#151515] p-3 rounded-xl hover:text-emerald-500 transition">
                            <Facebook className="w-5 h-5" />
                        </a>
                        <a target="_blank" href="http://tiktok.com/@bullishpixel" className="bg-[#151515] p-3 rounded-xl hover:text-emerald-500 transition">
                            <RiTiktokLine className="w-5 h-5" />
                        </a>
                        <a target="_blank" href="http://linkedin.com/in/bullishpixel" className="bg-[#151515] p-3 rounded-xl hover:text-emerald-500 transition">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a target="_blank" href="http://instagram.com/bullishpixel" className="bg-[#151515] p-3 rounded-xl hover:text-emerald-500 transition">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a target="_blank" href="http://x.com/BullishPixel" className="bg-[#151515] p-3 rounded-xl hover:text-emerald-500 transition">
                            <BsTwitterX className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="text-gray-400 text-sm md:text-base">
                    Copyright © 2025 Bullish Pixel | All rights reserved.
                </div>
            </div>
        </footer>
    );
}
