import Service from '@/components/Service'
import React from 'react'
import { Rocket, Layers, Target, MessageSquareText, Headset, Cpu } from 'lucide-react';
import ContactSection from '@/components/ContactForm'
import Faqs from '@/components/FAQS'
import Lines from '@/components/Lines'
export const metadata = {
  title: "Services",
  description:
    "Professional services by Rajab Ali: Full-stack development, MERN apps, API development, frontend, backend, deployment, debugging, and performance optimization.",
  openGraph: {
    title: "Services — Rajab Ali",
    description:
      "Explore full-stack development services including MERN, Next.js, APIs, frontend, backend, DevOps, and more.",
    url: "https://rajabali.pk/services",
    images: ["/og-default.png"],
  },
  alternates: {
    canonical: "https://rajabali.pk/services",
  },
};


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
                        < Rocket className="text-lime-600 text-4xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Performance Focused</h3>
                    <p className=" text-center  text-sm text-gray-400">I don't just build websites; I build high-performance digital assets. My code is optimized for speed, passing Core Web Vitals to ensure better Google rankings.</p>
                </div>
                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                        < Layers className="text-lime-600 text-4xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Tailored Solutions</h3>
                    <p className=" text-center text-sm text-gray-400">No cookie-cutter templates. I build custom architectures using Next.js that are specifically designed to fit your unique brand identity and business goals.</p>
                </div>
                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                        < Target className="text-lime-600 text-4xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Client-Centric Focus</h3>
                    <p className=" text-center text-sm text-gray-400">I prioritize your vision. I bridge the gap between complex code and your business needs, ensuring the final product solves the right problems.</p>
                </div>

                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                        < MessageSquareText className="text-lime-600 text-4xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Transparent Communication</h3>
                    <p className=" text-center text-sm text-gray-400">No ghosting or tech jargon. I provide clear, daily updates so you always know exactly where your project stands, from start to finish.</p>
                </div>
                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                        < Headset className="text-lime-600 text-4xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Long-Term Support</h3>
                    <p className=" text-center text-sm text-gray-400">The relationship doesn't end at deployment. I offer free bug fixes for 14 days after launch to ensure your site runs perfectly.</p>
                </div>
                <div className="p-5 flex rounded-xl flex-col gap-1 items-center bg-[#1f1d1d]/40 justify-center ">
                    <div className="p-2 rounded-md mb-4 bg-gray-900/40 border-lime-600 border">
                        < Cpu className="text-lime-600 text-4xl" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold">Modern Tech Stack</h3>
                    <p className=" text-center text-sm text-gray-400">Specialized in the MERN Stack and Next.js. I use the latest technologies to build scalable, secure applications that are ready for the future.</p>
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