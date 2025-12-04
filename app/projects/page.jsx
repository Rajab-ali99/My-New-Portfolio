
import React from 'react';
import { ExternalLink, Github, Layers, Zap } from 'lucide-react';
import ProjectsContent from './ProjectsContent';
export const metadata = {
  title: "Projects",
  description:
    "View portfolio projects by Rajab Ali — MERN e-commerce apps, chat apps, dashboards, and custom full-stack applications.",
  openGraph: {
    title: "Projects — Rajab Ali",
    description:
      "Explore real portfolio projects built with MERN, Next.js, React, and Node.js.",
    url: "https://rajabali.pk/projects",
    images: ["/og-projects.png"],
  },
  alternates: {
    canonical: "https://rajabali.pk/projects",
  },
};

export default function ProjectsPage() {
  
  return (
    <>
      <ProjectsContent />
    </>
  );

}