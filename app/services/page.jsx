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
import Lines from '@/components/Lines'


const ServicesPage = () => {
    return (
        <div className='md:p-10 p-3'>
            <div className="flex flex-col  mt-15 mb-10 px-10 items-center ">
                <span className="text-lime-600 font-semibold text-sm  px-3 py-1 rounded-full bg-[#121212]">What I Provide!</span>
                <div className="flex flex-col items-center justify-center gap-3">
                    <h2 className="font-bold text-3xl md:text-5xl">Discover <span className="text-lime-500">Services</span></h2>
                    <Lines />
                </div>
            </div>
            <Service />
            <div className="flex justify-center md:py-20 py-10 items-center flex-col ">
                <span className="text-lime-600 text-sm font-semibold px-3 mb-1 py-0.5 rounded-full bg-[#212121]">Why Choose me?</span>
                <h2 className="text-3xl md:text-5xl mb-2 font-bold text-center text-white ">
                    Why <span className='text-lime-500'>Rajab?</span>
                </h2>
                <Lines />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 ">
                <div className="p-5 flex  rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                        < BsFillRocketFill className="text-lime-600 text-4xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Proven Track Record</h3>
                    <p className=" text-center text-gray-400">I deliver high-quality web applications that are fast, secure, and designed to drive real business growth, not just look good.</p>
                </div>
                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                        < SiHiveBlockchain className="text-lime-600 text-4xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Tailored Solutions</h3>
                    <p className=" text-center text-gray-400">No cookie-cutter templates. I build custom, scalable architectures using Next.js that fit your specific goals and brand identity.</p>
                </div>
                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                        < PiUserFocus className="text-lime-600 text-4xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Client-Centric Focus</h3>
                    <p className=" text-center text-gray-400">I don't just write code; I solve business problems. My goal is to understand your vision and translate it into a digital reality.</p>
                </div>

                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                        < GiSatelliteCommunication className="text-lime-600 text-4xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Transparent Communication</h3>
                    <p className=" text-center text-gray-400">No tech jargon or ghosting. I believe in clear, honest updates so you always know exactly where your project stands.</p>
                </div>
                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                        < MdSupportAgent className="text-lime-600 text-4xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Dedicated Support</h3>
                    <p className=" text-center text-gray-400">The relationship doesn't end at deployment. I provide reliable post-launch support to ensure your site remains optimized and bug-free.</p>
                </div>
                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                        < SiRelianceindustrieslimited className="text-lime-600 text-4xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Expertise Across Industries</h3>
                    <p className=" text-center text-gray-400">From E-commerce to SaaS, I bring extensive technical experience working with diverse business models and industries.</p>
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