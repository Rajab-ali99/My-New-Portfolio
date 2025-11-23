import React from 'react'

import web from '@/public/assets/projects/web.png'
import wp from '@/public/assets/projects/wp.png'
import sp from '@/public/assets/projects/sp.png'
import td from '@/public/assets/projects/td.png'
import cch from '@/public/assets/projects/cch.png'
import mkt from '@/public/assets/projects/mkt.png'
import llc from '@/public/assets/projects/llc.png'




import Image from 'next/image'
const ProjectsComponent = () => {
    return (

        <div className='flex flex-col gap-5'>
            <div className='flex flex-col md:flex-row gap-3'>
                <div>
                    <Image className='rounded-3xl md:h-[400px] md:w-[400px] ' src={mkt.src} height={mkt.height} width={mkt.width} alt='project 1 ' />
                </div>
                <div className='bg-[#1f1d1d]/60 md:flex-1 flex flex-col justify-center md:h-[400px] p-4 md:p-5 rounded-3xl '>
                   <p className='text-xl font-black text-gray-500'>
                    <span className='text-2xl text-emerald-500'>Bullish <span className='text-red-500'>Pixel</span></span> successfully executed a <span className='text-white'>360° Digital Marketing ecosystem</span> built entirely from scratch, delivering measurable growth across major platforms. This included <span className='text-white'>Facebook Ad Campaign Development</span> with full-funnel setup, creative production, and performance scaling for steady lead generation; an <span className='text-white'>Instagram Growth & Engagement Project</span> crafted through strategic content planning, reel production, branding, and smart boosting to expand visibility; and a <span className='text-white'>TikTok Creative Ad Campaign</span> leveraging trend-driven short-form content and conversion-focused ads to capture rapid audience traction. Alongside this, Bullish Pixel delivered a <span className='text-white'>Multi-Platform Brand Awareness Campaign</span>, unifying messaging, ad funnels, and analytics across Facebook, Instagram, and TikTok for powerful cross-platform exposure. Finally, a robust <span className='text-white'>E-Commerce Paid Advertising System</span> was built from zero, integrating product creatives, retargeting structures, A/B testing, and full analytics to generate consistent sales and improved ROAS—all managed end-to-end by Bullish Pixel.
                   </p>
                </div>
            </div>
             <div className='flex flex-col md:flex-row gap-3'>
                <div>
                    <Image className='rounded-3xl md:h-[400px] md:w-[400px] ' src={td.src} height={td.height} width={td.width} alt='project 1 ' />
                </div>
                <div className='bg-[#1f1d1d]/60 md:flex-1 flex flex-col justify-center md:h-[400px] p-4 md:p-5 rounded-3xl '>
                   <p className='text-xl font-black text-gray-500'>
                    <span className='text-2xl text-emerald-500'>Bullish <span className='text-red-500'>Pixel</span></span> delivered a <span className='text-white'>comprehensive Trading ecosystem</span> built entirely from scratch, achieving consistent performance across multiple markets. This included <span className='text-white'>Crypto/Forex Trading Strategy Development</span>, with complete market analysis, risk management, and automated-ready signals for reliable profitability; a <span className='text-white'>Crypto/Forex Trading System</span>, designed with momentum-based entries, liquidity mapping, and disciplined trade management for execution in any <span className='text-white'>Time-Frame</span>; and a <span className='text-white'>Stock Swing Trading Blueprint</span>, leveraging pattern recognition, sector rotation, and multi-timeframe validation for steady setups. Additionally, an <span className='text-white'>Index Trading & Scalping Model</span> was created for high-speed precision trades with strict risk control, alongside a <span className='text-white'>Long-Term Investment & Portfolio Growth Plan</span>, covering diversification, fundamental screening, asset weighting, and rebalancing to ensure sustainable wealth growth—all structured, refined, and optimized end-to-end by Bullish Pixel. 
                   </p>
                </div>
            </div>

             <div className='flex flex-col md:flex-row gap-3'>
                <div>
                    <Image className='rounded-3xl md:h-[400px] md:w-[400px] ' src={web.src} height={web.height} width={web.width} alt='project 1 ' />
                </div>
                <div className='bg-[#1f1d1d]/60 md:flex-1 flex flex-col justify-center md:h-[400px] p-4 md:p-5 rounded-3xl '>
                   <p className='text-xl font-black text-gray-500'>
                    <span className='text-2xl text-emerald-500'>Bullish <span className='text-red-500'>Pixel</span></span> delivered a <span className='text-white'>full-spectrum Custom Website Development</span> suite, building every platform entirely from scratch with end-to-end execution. This included <span className='text-white'>Custom Business Web Applications</span> with tailored UX, frontend/backend coding, and high-performance deployment; <span className='text-white'>SaaS Platform Development</span> featuring scalable architecture, dashboards, subscriptions, and automation; and <span className='text-white'>Custom Portfolio & Creative Showcases</span> with unique UI/UX and smooth animations for standout branding. Additionally, <span className='text-white'>Booking & Appointment Web Systems</span> were created for seamless scheduling and admin control, alongside <span className='text-white'>E-Commerce Web Applications</span> with advanced product logic, custom checkout flows, and scalable performance—all ideated, designed, developed, and optimized fully by Bullish Pixel. 
                   </p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-3'>
                <div>
                    <Image className='rounded-3xl md:h-[400px] md:w-[400px] ' src={sp.src} height={sp.height} width={sp.width} alt='project 1 ' />
                </div>
                <div className='bg-[#1f1d1d]/60 md:flex-1 flex flex-col justify-center md:h-[400px] p-4 md:p-5 rounded-3xl '>
                   <p className='text-xl font-black text-gray-500'>
                    <span className='text-2xl text-emerald-500'>Bullish <span className='text-red-500'>Pixel</span></span> executed <span className='text-white'>end-to-end Shopify Development</span> across diverse industries, building every store entirely from scratch with full creative and technical control. This included <span className='text-white'>Fashion & Apparel Shopify Stores</span> with custom UI/UX, product architecture, and conversion-focused design; <span className='text-white'>Beauty & Skincare Stores</span> featuring clean aesthetics, optimized pages, and automated customer flows; <span className='text-white'>Tech & Gadgets Stores</span> with dynamic catalogs, mobile optimization, and advanced sales features; <span className='text-white'>Home & Lifestyle Stores</span> crafted for storytelling, structured collections, and seamless checkout; and <span className='text-white'>Fitness & Supplements Stores</span> built for trust, clarity, and repeat-purchase growth—all ideated, developed, and optimized end-to-end by Bullish Pixel.  
                   </p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-3'>
                <div>
                    <Image className='rounded-3xl md:h-[400px] md:w-[400px] ' src={wp.src} height={wp.height} width={wp.width} alt='project 1 ' />
                </div>
                <div className='bg-[#1f1d1d]/60 md:flex-1 flex flex-col justify-center md:h-[400px] p-4 md:p-5 rounded-3xl '>
                   <p className='text-xl font-black text-gray-500'>
                    <span className='text-2xl text-emerald-500'>Bullish <span className='text-red-500'>Pixel</span></span> delivered <span className='text-white'>comprehensive WordPress Development</span> projects built entirely from scratch, managing every aspect end-to-end. This included <span className='text-white'>Corporate WordPress Websites</span> with custom layouts, optimized speed, and full backend setup; <span className='text-white'>Service-Based Business Websites</span> featuring tailored UI/UX, booking integrations, and SEO-ready structure; <span className='text-white'>Portfolio & Personal Branding Sites</span> with polished, responsive designs to elevate client identity; <span className='text-white'>Blog & Content-Driven Websites</span> optimized for readability, structure, and audience engagement; and <span className='text-white'>E-Learning/LMS Platforms</span> with advanced course systems, dashboards, and automation—all ideated, developed, and launched fully by Bullish Pixel. 
                   </p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-3'>
                <div>
                    <Image className='rounded-3xl md:h-[400px] md:w-[400px] ' src={llc.src} height={llc.height} width={llc.width} alt='project 1 ' />
                </div>
                <div className='bg-[#1f1d1d]/60 md:flex-1 flex flex-col justify-center md:h-[400px] p-4 md:p-5 rounded-3xl '>
                   <p className='text-xl font-black text-gray-500'>
                    <span className='text-2xl text-emerald-500'>Bullish <span className='text-red-500'>Pixel</span></span> successfully executed <span className='text-white'>end-to-end Company Formation & Corporate Compliance</span> projects, building every process entirely from scratch. This included <span className='text-white'>LLC Company Formation & Compliance Setup</span> with full legal registration, EIN setup, and compliance structure; <span className='text-white'> Private Limited (Pvt Ltd) Registration</span> covering incorporation, shareholder structuring, and tax onboarding; <span className='text-white'>Limited Company (Ltd) Establishment</span> from consultation to bank account setup and operational readiness; <span className='text-white'>International Company Formation Services</span> for global jurisdictions with full documentation and compliance workflows; and <span className='text-white'>Annual Filings & Corporate Maintenance</span> including reports, renewals, and tax management—all fully managed, optimized, and delivered by Bullish Pixel for seamless, legally compliant business operations. 
                   </p>
                </div>
            </div>

            <div className='flex flex-col md:flex-row gap-3'>
                <div>
                    <Image className='rounded-3xl md:h-[400px] md:w-[400px] ' src={cch.src} height={cch.height} width={cch.width} alt='project 1 ' />
                </div>
                <div className='bg-[#1f1d1d]/60 md:flex-1 flex flex-col justify-center md:h-[400px] p-4 md:p-5 rounded-3xl '>
                   <p className='text-xl font-black text-gray-500'>
                    <span className='text-2xl text-emerald-500'>Bullish <span className='text-red-500'>Pixel</span></span> delivered <span className='text-white'>end-to-end Online Coaching & Tuition Platforms</span>, building every system entirely from scratch with full operational control. This included <span className='text-white'>Complete Online Tuition Platform Setup</span> with curriculum planning, student onboarding, virtual classes, and learning tool integration; <span className='text-white'>Subject-Focused Tuition Programs</span> featuring tailored lesson plans and personalized learning paths; <span className='text-white'>Skill-Based Online Coaching Systems</span> with interactive modules, quizzes, and performance analytics; <span className='text-white'>Exam Preparation & Test-Ready Platforms</span> designed for timed tests, practice materials, and strategic study schedules; and <span className='text-white'>Multi-Teacher Online Learning Environments</span> with dashboards, scheduling, and student management—all fully developed, optimized, and managed by Bullish Pixel for seamless, high-quality online education. 
                   </p>
                </div>
            </div>


          
        </div>
    )
}

export default ProjectsComponent