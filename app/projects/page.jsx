
import React from 'react';
import { ExternalLink, Github, Layers, Zap } from 'lucide-react';
import Lines from '@/components/Lines';

export default function Projects() {
  
  // 💡 TIP: Replace these mock projects with your real Github projects and screenshots!
  const projects = [
    {
      title: "E-Commerce Dashboard",
      category: "Full Stack Web App",
      description: "A complete admin dashboard for managing products, orders, and customers. Features real-time analytics using Recharts, secure authentication via NextAuth, and a MongoDB database.",
      image: "https://placehold.co/600x400/111/333?text=E-Commerce+Dashboard", 
      techStack: ["Next.js 14", "Tailwind CSS", "MongoDB", "Stripe", "NextAuth", "Recharts"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Real Estate Listing Platform",
      category: "Property Marketplace",
      description: "A high-performance property finder with advanced filtering, map integration, and image galleries. Optimized for SEO with Server-Side Rendering (SSR) for every listing page.",
      image: "https://placehold.co/600x400/111/333?text=Real+Estate+Platform",
      techStack: ["Next.js", "Node.js", "Express", "Google Maps API", "PostgreSQL"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "AI Content Generator",
      category: "SaaS Application",
      description: "A SaaS tool that connects to OpenAI's API to generate various types of content. Includes a credit-based system, user profiles, and subscription management via Stripe.",
      image: "https://placehold.co/600x400/111/333?text=AI+SaaS+Tool",
      techStack: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL", "Stripe", "Clerk Auth"],
      demoLink: "#",
      repoLink: "#",
    },
    {
      title: "Personal Portfolio v2",
      category: "Portfolio Website",
      description: "My current portfolio site showcasing my projects and skills. Built with a focus on performance, minimal design, and smooth animations using Framer Motion.",
      image: "https://placehold.co/600x400/111/333?text=Portfolio+v2",
      techStack: ["Next.js 14", "Framer Motion", "Tailwind CSS", "Shadcn UI"],
      demoLink: "#",
      repoLink: "#",
    },
    {
        title: "Task Management App",
        category: "Productivity Tool",
        description: "A Kanban-style task management application with drag-and-drop functionality, project boards, and team collaboration features. Real-time updates with Socket.io.",
        image: "https://placehold.co/600x400/111/333?text=Task+Management+App",
        techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Redux Toolkit"],
        demoLink: "#",
        repoLink: "#",
    },
    {
        title: "Weather Forecast App",
        category: "Web Application",
        description: "A beautiful weather app providing current conditions, hourly forecasts, and 7-day outlooks for any location. Uses the OpenWeatherMap API and geolocation.",
        image: "https://placehold.co/600x400/111/333?text=Weather+App",
        techStack: ["React", "OpenWeatherMap API", "Tailwind CSS", "Context API"],
        demoLink: "#",
        repoLink: "#",
    },
    {
        title: "Crypto Tracker Dashboard",
        category: "Financial Dashboard",
        description: "A real-time cryptocurrency tracker displaying live prices, charts, and market data for top coins. Fetches data from the CoinGecko API.",
        image: "https://placehold.co/600x400/111/333?text=Crypto+Tracker",
        techStack: ["Next.js", "CoinGecko API", "Chart.js", "SWR"],
        demoLink: "#",
        repoLink: "#",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-20">
         <div className="flex flex-col  mb-3 px-10 items-center ">
                <span className="text-lime-600 font-semibold text-sm  px-3 py-1 rounded-full bg-[#121212]">Portfolio</span>
                <div className="flex flex-col items-center justify-center gap-3">
                    <h2 className="font-bold text-3xl md:text-5xl">Recent <span className="text-lime-500">Projects</span></h2>
                    <Lines />
                </div>
            </div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
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
              <div className="relative h-64 overflow-hidden border-b border-gray-800 flex-shrink-0">
                <div className="absolute top-0 left-0 right-0 h-8 bg-black/50 backdrop-blur-sm flex items-center px-4 gap-2 z-10 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
                  <div className="w-3 h-3 rounded-full bg-lime-600/20"></div>
                </div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={project.demoLink} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-lime-600 hover:bg-lime-600 text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg shadow-lime-600/20"
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