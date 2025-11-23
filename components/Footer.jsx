"use client";
import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import logoD from '@/public/assets/logoD.png'
import Image from "next/image";

export default function Footer() {
    return (
        <footer className=" z-10 relative text-white pb-10 md:pb-5 md:py-16 px-6 md:px-16">
            {/* Contact boxes */}
            <div className="grid md:grid-cols-3 bg-slate-500/10 p-5 rounded-2xl gap-6 mb-12">
                {/* Email */}
                <div className="bg-[#151515]/50 border border-white/20 rounded-3xl p-6 flex items-center gap-4 shadow-inner">
                    <Mail className="text-emerald-500 w-6 h-6" />
                    <div>
                        <p className="text-gray-400 md:text-lg font-bold text-sm">Email</p>
                        <p className="font-medium">agencee@email.com</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="bg-[#151515]/50 border border-white/10 rounded-3xl p-6 flex items-center gap-4 shadow-inner">
                    <Phone className="text-emerald-500 w-6 h-6" />
                    <div>
                        <p className="text-gray-400 md:text-lg font-bold text-sm">Call Us</p>
                        <p className="font-medium">+54 2541 22 55 66</p>
                    </div>
                </div>

                {/* Location */}
                <div className="bg-[#151515]/50 border border-white/10 rounded-3xl p-6 flex items-center gap-4 shadow-inner">
                    <MapPin className="text-emerald-500 w-6 h-6" />
                    <div>
                        <p className="text-gray-400 md:text-lg font-bold text-sm">Location</p>
                        <p className="font-medium">123 Main Street, Anytown, USA</p>
                    </div>
                </div>
            </div>

            {/* Main footer content */}
            <div className="grid md:grid-cols-4 bg-slate-500/10 pt-0 md:pt-10 p-10 rounded-3xl gap-8">
                {/* Logo */}
                <div>
                    <div className='flex justify-center '>
                        <Image className='w-36 relative h-auto' src={logoD.src} height={logoD.height} width={logoD.width} alt='logo' />
                    </div>
                    <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                        We create digital experiences that help your business stand out and grow faster.
                    </p>
                </div>

                {/* Menu */}
                <div className="md:ps-16">
                    <h3 className="text-emerald-500 md:text-2xl text-lg  font-semibold mb-3">Menu</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link className="hover:text-emerald-500 text-md" href="/">Home</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/about">About</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/services">Services</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/projects">Projects</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/blog">Blog</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/reviews">Review</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div className="md:ps-16">
                    <h3 className="text-emerald-500 font-semibold md:text-2xl text-lg   mb-3">Services</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link className="hover:text-emerald-500 text-md" href="/services/seo">SEO</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/services/content-marketing">Content Marketing</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/services/website-design">Website Design</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/services/social-media">Social Media Marketing</Link></li>
                    </ul>
                </div>

                {/* Other Pages */}
                <div className="md:ps-16">
                    <h3 className="text-emerald-500 md:text-2xl text-lg  font-semibold mb-3">Other Pages</h3>
                    <ul className="space-y-2 text-gray-300">
                        <li><Link className="hover:text-emerald-500 text-md" href="/license">License</Link></li>
                        <li><Link className="hover:text-emerald-500 text-md" href="/404">404</Link></li>
                    </ul>
                </div>
            </div>

            {/* Social + Newsletter */}
            <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
                {/* Social Icons */}
                <div className="flex items-center gap-4">
                    <span className="text-gray-400 md:text-xl text-lg font-bold ">Follow us:</span>
                    <div className="flex gap-3">
                        <Link href="#" className="bg-[#151515] p-3 rounded-xl hover:text-emerald-500 transition">
                            <Facebook className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="bg-[#151515] p-3 rounded-xl hover:text-emerald-500 transition">
                            <Twitter className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="bg-[#151515] p-3 rounded-xl hover:text-emerald-500 transition">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="#" className="bg-[#151515] p-3 rounded-xl hover:text-emerald-500 transition">
                            <Instagram className="w-5 h-5" />
                        </Link>
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
