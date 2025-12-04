'use client';

import React from 'react';
import { ExternalLink, Github, Layers, Zap } from 'lucide-react';

const ProjectsContent =()=> {
  
 
  const projects = [
    {
      title: "MERNStack E-Commerce Hub",
      category: "Full Stack Web App",
      description: "A comprehensive e-commerce solution featuring a powerful admin dashboard for real-time inventory management. Built with the MERN stack (MongoDB, Express, React, Node.js) to ensure scalable performance, secure user authentication, and a seamless checkout process.",
      image: "/assets/projects/proc1.png", 
      techStack: ["React", "Node.js", "Express", "MongoDB", "Redux", "Tailwind CSS"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Modern Portfolio v2",
      category: "Personal Website",
      description: "A cutting-edge personal portfolio built with Next.js 15. Features server-side rendering for maximum SEO, smooth animations, and a custom backend integration using Nodemailer for secure, direct email communication.",
      image: "/assets/projects/proc2.png",
      techStack: ["Next.js 15", "Nodemailer", "Tailwind CSS", "Framer Motion"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Bullish Pixel Services Hub",
      category: "Service Agency Platform",
      description: "A high-performance digital services hub designed for Bullish Pixel. Built with Next.js 15 for superior SEO and speed, it features smooth animations via Framer Motion, accessible UI components from Shadcn, and a secure backend contact system powered by Nodemailer.",
      image: "/assets/projects/proc3.png",
      techStack: ["Next.js 15", "Nodemailer", "Tailwind CSS", "Framer Motion", "Shadcn UI"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Alpha Group Industrial",
      category: "Corporate Business Site",
      description: "A professional corporate website developed for Alpha Group, a leading industrial services provider in Jeddah, Saudi Arabia. The site features a clean, responsive design tailored to showcase their industrial portfolio and services to an international audience.",
      image: "/assets/projects/proc4.png",
      techStack: ["React", "Tailwind CSS", "Vite", "REST API", "Responsive Design"],
      demoLink: "#",
      repoLink: "#",
    },
    {
        title: "Convo Real-Time Chat",
        category: "Real-Time Communication",
        description: "A seamless real-time messaging platform built on the MERN stack. Features secure user authentication, instant end-to-end messaging powered by Socket.io, global state management with Redux, and dynamic user search functionality.",
        image: "/assets/projects/proc5.png",
        techStack:["React", "Node.js", "Express", "MongoDB", "Socket.io", "Redux"],
        demoLink: "#",
        repoLink: "#",
    },
    {
        title: "Tomato Food Delivery",
        category: "E-Commerce Application",
        description: "A high-performance food delivery interface built with React and Vite for lightning-fast loading. Includes dynamic product listings, a persistent 'Add to Cart' system managed by Redux, and a fully responsive UI styled with Tailwind CSS.",
        image: "/assets/projects/proc6.png",
        techStack: ["React", "Vite", "Redux", "Tailwind CSS"],
        demoLink: "#",
        repoLink: "#",
    },
    {
        title: "Creative Portfolio v1",
        category: "Personal Website",
        description: "My initial personal website showcasing creative frontend development. Built with React and Vite for optimal performance, it features engaging interactive animations using Framer Motion and LottieFiles to create an immersive user experience.",
        image: "/assets/projects/proc7.png",
        techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "LottieFiles"],
        demoLink: "#",
        repoLink: "#",
    },
    {
        title: "Modern Business Landing Page",
        category: "UI/UX Implementation",
        description: "A pixel-perfect, high-converting landing page designed to demonstrate responsive UI development. Built with React and Tailwind CSS, it features a clean modern layout, optimized assets, and a mobile-first architecture.",
        image: "/assets/projects/proc8.png",
        techStack: ["React", "Vite", "Tailwind CSS", "HTML5", "CSS3"],
        demoLink: "#",
        repoLink: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="flex flex-col mb-3 px-10 items-center">
             <span className="text-lime-600 font-semibold text-sm px-3 py-1 rounded-full bg-[#121212] mb-4">Portfolio</span>
             <div className="flex flex-col items-center justify-center gap-3">
                 <h2 className="font-bold text-3xl md:text-5xl">Recent <span className="text-lime-500">Projects</span></h2>
                 {/* Replaced <Lines /> with CSS to prevent crash */}
                 <div className="h-1 w-24 bg-lime-600 rounded-full mt-2"></div>
             </div>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-6">
            A curated selection of over 7+ projects that demonstrate my expertise in building scalable, high-performance web applications using modern technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-[#111] rounded-3xl border border-gray-800 overflow-hidden hover:border-lime-600/50 hover:shadow-2xl hover:shadow-lime-600/10 transition-all duration-500 flex flex-col h-full"
            >
              {/* Image Container with "Browser Window" look */}
              <div className="md:h-64 flex flex-col border-b border-gray-800 flex-shrink-0">
                {/* Browser Bar */}
                <div className="h-8 bg-black/50 backdrop-blur-sm flex items-center px-4 gap-2 z-10 border-b border-white/5 w-full flex-shrink-0">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-lime-600/20"></div>
                </div>
                
                {/* Image */}
                <div className="relative w-full flex-grow overflow-hidden bg-gray-900">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => {
                      e.target.src = `https://placehold.co/600x400/111/333?text=${encodeURIComponent(project.title)}`;
                    }}
                  />
                  
                  {/* Overlay on Hover (Desktop) */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex items-center justify-center gap-4 z-20">
                    <a 
                      href={project.demoLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lime-600 hover:bg-lime-700 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-lime-600/20"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a 
                      href={project.repoLink} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white hover:bg-gray-200 text-black px-6 py-2 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 delay-75 shadow-lg"
                    >
                      <Github size={18} /> Code
                    </a>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="p-8 flex-grow flex flex-col bg-[#111] relative overflow-hidden">
                
                {/* Subtle background glow on hover */}
                <div className="absolute inset-0 bg-lime-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                
                <div className="flex items-center justify-between mb-4 relative z-10">
                   <span className="text-lime-600 text-xs font-bold tracking-wider uppercase flex items-center gap-2">
                     <Layers size={14} className="text-lime-600" /> {project.category}
                   </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lime-600 transition-colors relative z-10 line-clamp-1">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 line-clamp-3 relative z-10">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="mt-auto relative z-10">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span 
                        key={i} 
                        className="text-xs font-medium text-lime-600 bg-lime-600/10 border border-lime-600/20 px-3 py-1.5 rounded-full flex items-center gap-1"
                      >
                        {i === 0 && <Zap size={12} className="text-lime-600" />} 
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Mobile Buttons (Visible only on Mobile) */}
                <div className="mt-6 flex gap-3 md:hidden relative z-10">
                  <a 
                    href={project.demoLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-lime-600 hover:bg-lime-700 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm transition-colors shadow-lg shadow-lime-900/20"
                  >
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a 
                    href={project.repoLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 text-sm transition-colors border border-gray-700"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="mt-24 text-center border-t border-gray-800 pt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Have a project in mind?
          </h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            I'm currently available for new projects. Let's discuss how we can build something great together.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-white text-black font-bold py-4 px-10 rounded-full hover:bg-lime-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            Start a Conversation <ExternalLink size={20} />
          </a>
        </div>

      </div>
    </div>
  );
}
export default ProjectsContent;