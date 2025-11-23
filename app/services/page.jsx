import Service from '@/components/Service'
import React from 'react'
import { BsFillRocketFill } from 'react-icons/bs'
import { PiUserFocus } from 'react-icons/pi'
import { SiHiveBlockchain } from 'react-icons/si'
import { GiSatelliteCommunication } from "react-icons/gi";
import { MdSupportAgent } from "react-icons/md";
import { SiRelianceindustrieslimited } from "react-icons/si";
import ContactSection from '@/components/ContactForm'
import Faqs from '@/components/FAQS'


const ServicesPage = () => {
    return (
        <div className='md:p-10 p-3'>
            <h1 className='md:text-7xl relative z-10 text-5xl font-black pt-20 md:pt-10 text-center py-10'>
                Discover <br /> Our Services
            </h1>
            <Service />
            <div className="flex justify-center md:py-20 py-10 items-center flex-col ">
                <span className="text-emerald-500 text-md font-black px-3 mb-3 py-0.5 rounded-full bg-gray-800">Why Choose Bullish Pixel?</span>
                <h2 className="text-4xl md:text-5xl font-black text-center text-white ">
                    Why We Would Be Your The Best <br /> choice?
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
                <div className="p-5 flex  rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-emerald-500 border">
                        < BsFillRocketFill className="text-emerald-500 text-4xl" />
                    </div>
                    <h3 className="md:text-3xl text-2xl font-black">Proven Track Record</h3>
                    <p className="text-xl text-center text-gray-400">We have built a reputation as a trusted and reliable partner in achieving business success.</p>
                </div>
                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-emerald-500 border">
                        < SiHiveBlockchain className="text-emerald-500 text-4xl" />
                    </div>
                    <h3 className="md:text-3xl text-2xl font-black">Tailored Solutions</h3>
                    <p className="text-xl text-center text-gray-400">We offer personalized solutions tailored to your specific goals, audience, and industry.</p>
                </div>
                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-emerald-500 border">
                        < PiUserFocus className="text-emerald-500 text-4xl" />
                    </div>
                    <h3 className="md:text-3xl text-2xl font-black">Client-Centric Focus</h3>
                    <p className="text-xl text-center text-gray-400">Your success is our priority. We prioritize understanding your business goals.</p>
                </div>

                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-emerald-500 border">
                        < GiSatelliteCommunication className="text-emerald-500 text-4xl" />
                    </div>
                    <h3 className="md:text-3xl text-2xl font-black">Transparent Communication</h3>
                    <p className="text-xl text-center text-gray-400">We believe in open and honest communication every step of the way.</p>
                </div>
                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-emerald-500 border">
                        < MdSupportAgent className="text-emerald-500 text-4xl" />
                    </div>
                    <h3 className="md:text-3xl text-2xl font-black">Dedicated Support</h3>
                    <p className="text-xl text-center text-gray-400">Your success is our priority, and we're here to support you every step of the way. </p>
                </div>
                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-emerald-500 border">
                        < SiRelianceindustrieslimited className="text-emerald-500 text-4xl" />
                    </div>
                    <h3 className="md:text-3xl text-2xl font-black">Expertise Accross Industries</h3>
                    <p className="text-xl text-center text-gray-400">Our team has extensive experience working across various industries.</p>
                </div>
            </div>
            <div className="md:py-20 py-10">

                <Faqs />
            </div>
            <ContactSection />
        </div>
    )
}

export default ServicesPage