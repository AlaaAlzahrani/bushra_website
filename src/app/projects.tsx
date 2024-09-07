"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with React and Node.js",
    image: "/image/avatar1.jpg",
    link: "https://github.com/yourusername/ecommerce-platform",
  },
  {
    id: 2,
    title: "Weather App",
    description: "Real-time weather forecasting app using OpenWeatherMap API",
    image: "/image/avatar2.jpg",
    link: "https://weather-app-demo.netlify.app",
  },
  {
    id: 3,
    title: "Task Management System",
    description: "Collaborative task management tool with real-time updates",
    image: "/image/avatar3.jpg",
    link: "https://github.com/yourusername/task-manager",
  },
];

export function Projects() {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-gray-900 mb-4">
          My Projects
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Here are some of the projects I&apos;ve worked on. Each demonstrates different skills and technologies.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link href={project.link} target="_blank" rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 font-medium">
                  View Project
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;