"use client";

import ContactSection from "@/components/ContactForm";
import Lines from "@/components/Lines";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,

    Linkedin,
    Instagram,
    Clock,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";



export default function ContactPage() {
    return (
        <section className="w-full relative bg-[#0a0a0a] text-white py-16">
            <div style={{ zIndex: 0 }} className="fixed inset-0 bg-gradient-to-b from-lime-600/20 via-transparent to-transparent blur-2xl" />
            <div className="z-10 relative">

                <div className="flex flex-col  mt-10 mb-10 px-10 items-center gap-2">
                    <span className="text-lime-600 font-semibold text-sm  px-3 py-1 rounded-full bg-[#121212]">Contact me!</span>
                    <div className="flex flex-col items-center justify-center gap-3">
                        <h2 className="font-bold text-3xl md:text-5xl">Get In <span className="text-lime-500">Touch!</span></h2>
                        <Lines />
                    </div>
                </div>                <div className="max-w-6xl bg-slate-500/10 py-6 rounded-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-2 px-6">
                    {/* Hotline */}
                    <div className="bg-[#111]/40 rounded-3xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                            <Phone className="text-lime-600 w-6 h-6" />
                            <h3 className="md:text-lg font-semibold">Hotline:</h3>
                        </div>
                        <p className="text-sm md:text-base font-semibold text-white/50">+92 309 3060 947</p>
                    </div>

                    {/* Address */}
                    <div className="bg-[#111]/40 rounded-3xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                            <MapPin className="text-lime-600 w-6 h-6" />
                            <h3 className="md:text-lg font-semibold">Address:</h3>
                        </div>
                        <p className="text-sm md:text-base font-medium text-white/50">
                            Faisalabad, Pakistan
                        </p>
                    </div>

                    {/* Email */}
                    <div className="bg-[#111]/40 rounded-3xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                            <Mail className="text-lime-600 w-6 h-6" />
                            <h3 className="md:text-lg font-semibold">Email:</h3>
                        </div>
                        <p className="text-sm md:text-base font-medium text-white/50 ">
                            developer@rajabali.com
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="bg-[#111]/40 rounded-3xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="text-lime-600 w-6 h-6" />
                            <h3 className="md:text-lg font-semibold">Follow Us:</h3>
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                target="_blank" href="http://facebook.com/BullishPixel"
                                className="p-2 rounded-full border border-white/10 hover:bg-lime-600 transition"
                            >
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a
                                target="_blank" href="http://x.com/BullishPixel"
                                className="p-2 rounded-full border border-white/10 hover:bg-lime-600 transition"
                            >
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a
                                target="_blank" href="http://linkedin.com/in/bullishpixel"
                                className="p-2 rounded-full border border-white/10 hover:bg-lime-600 transition"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                target="_blank" href="http://instagram.com/bullishpixel"
                                className="p-2 rounded-full border border-white/10 hover:bg-lime-600 transition"
                            >
                                <Instagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="bg-[#111]/40 rounded-3xl p-6 border border-white/10 md:col-span-2 lg:col-span-4">
                        <div className="flex items-center gap-3 mb-3">
                            <Clock className="text-lime-600 w-6 h-6" />
                            <h3 className="md:text-lg font-semibold">Opening Hours:</h3>
                        </div>
                        <div className="text-white/50 space-y-1 text-sm md:text-base font-medium">
                            <p>Mon to Fri: 11.00AM - 9.00PM</p>
                            <p>Sat: 12.00pM - 6.30PM</p>
                            <p>Sun: Closed</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection />
        </section>
    );
}
