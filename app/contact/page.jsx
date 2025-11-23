"use client";

import ContactSection from "@/components/ContactForm";
import {
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Linkedin,
    Instagram,
    Clock,
} from "lucide-react";

export default function ContactPage() {
    return (
        <section className="w-full relative bg-[#0a0a0a] text-white py-16">
            <div  style={{ zIndex: 0 }} className="fixed inset-0 bg-gradient-to-b from-emerald-500/40 via-transparent to-transparent blur-2xl" />
            <div className="z-10 relative">

                <h1 className="md:text-7xl  text-3xl font-black text-center md:py-20 py-10">Let's Work Together</h1>
                <div className="max-w-6xl bg-slate-500/10 py-6 rounded-xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-2 px-6">
                    {/* Hotline */}
                    <div className="bg-[#111]/40 rounded-3xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                            <Phone className="text-emerald-500 w-6 h-6" />
                            <h3 className="text-lg font-semibold">Hotline:</h3>
                        </div>
                        <p className="text-xl font-semibold text-white/90">(555) 123-4567</p>
                    </div>

                    {/* Address */}
                    <div className="bg-[#111]/40 rounded-3xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                            <MapPin className="text-emerald-500 w-6 h-6" />
                            <h3 className="text-lg font-semibold">Address:</h3>
                        </div>
                        <p className="text-lg font-medium text-white/90">
                            123 Main Street, Cityville, Stateburg, 98765
                        </p>
                    </div>

                    {/* Email */}
                    <div className="bg-[#111]/40 rounded-3xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-3">
                            <Mail className="text-emerald-500 w-6 h-6" />
                            <h3 className="text-lg font-semibold">Email:</h3>
                        </div>
                        <p className="text-lg font-medium text-white/90 uppercase">
                            agencee@email.com
                        </p>
                    </div>

                    {/* Social Icons */}
                    <div className="bg-[#111]/40 rounded-3xl p-6 border border-white/10">
                        <div className="flex items-center gap-3 mb-4">
                            <Clock className="text-emerald-500 w-6 h-6" />
                            <h3 className="text-lg font-semibold">Follow Us:</h3>
                        </div>
                        <div className="flex items-center gap-4">
                            <a
                                href="#"
                                className="p-3 rounded-full border border-white/10 hover:bg-emerald-500 transition"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-3 rounded-full border border-white/10 hover:bg-emerald-500 transition"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-3 rounded-full border border-white/10 hover:bg-emerald-500 transition"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                                href="#"
                                className="p-3 rounded-full border border-white/10 hover:bg-emerald-500 transition"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div className="bg-[#111]/40 rounded-3xl p-6 border border-white/10 md:col-span-2 lg:col-span-4">
                        <div className="flex items-center gap-3 mb-3">
                            <Clock className="text-emerald-500 w-6 h-6" />
                            <h3 className="text-lg font-semibold">Opening Hours:</h3>
                        </div>
                        <div className="text-white/90 space-y-1 text-lg font-medium">
                            <p>Mon to Fri: 9.00AM - 8.30PM</p>
                            <p>Sat: 10.00AM - 6.30PM</p>
                            <p>Sun: Closed</p>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection/>
        </section>
    );
}
