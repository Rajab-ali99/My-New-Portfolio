
import ContactSection from '@/components/ContactForm'
import ProjectsComponent from '@/components/ProjectsComponent'
import React from 'react'

const Projects = () => {
    return (
        <div className='md:p-10 p-3'>
            <div style={{ zIndex: 0 }} className="absolute inset-0 bg-gradient-to-b from-emerald-500/40 via-transparent to-transparent blur-2xl" />
            <h1 className='md:text-6xl relative z-10 text-3xl font-black pt-20 text-center py-10'>
                Check Our Works With <br /> Real Results
            </h1>
            <ProjectsComponent />
            <ContactSection/>
        </div>
    )
}

export default Projects