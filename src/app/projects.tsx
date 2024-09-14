import React from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Succession Planning",
    description: "Human resources is the lifeblood of organizational success. Throughout my career, I've witnessed firsthand how HR practices can make or break a company's future. Succession planning, for instance, isn't just about filling roles—it's about ensuring the continuity of leadership vision and maintaining competitive edge. I've seen businesses thrive when they prioritize this, and falter when they don't. My passion lies in perfecting this art, as it's crucial for long-term sustainability.",
    image: "/image/SP.png",
    link: "https://hr.uw.edu/pod/organizational-excellence-and-development/organizations/succession-planning",
  },
  {
    id: 2,
    title: "Talent Management",
    description: "Talent management, I've learned, is directly tied to a company's bottom line. Attracting and retaining top talent can propel a business to new heights, while poor management can lead to stagnation or decline. I'm fascinated by how the right talent strategies can transform organizations. It's a field I'm constantly exploring, as its impact on business success is undeniable.",
    image: "/image/TM.jpeg",
    link: "https://www.gvsu.edu/hro/talent-management-1165.htm",
  },
  {
    id: 3,
    title: "Career Counselling",
    description: "Career counseling, often overlooked, is a powerful tool for employee engagement and productivity. I've observed how companies that invest in their employees' career development see increased loyalty and performance. It's not just about individual growth—it's about cultivating a workforce that's aligned with business goals. I'm eager to delve deeper into how career counseling can be leveraged for mutual benefit.",
    image: "/image/CC.jpg",
    link: "https://unevoc.unesco.org/home/TVETipedia+Glossary/lang=en/show=term/term=Career+guidance",
  },
  {
    id: 4,
    title: "Organizational Development",
    description: "Organizational development, in my experience, is the backbone of adaptability and innovation. In today's rapidly changing business landscape, companies that excel at OD are the ones that survive and thrive. I'm driven to explore this field further, as I believe it holds the key to future-proofing businesses. From culture shaping to change management, OD's influence on business success is profound and far-reaching.",
    image: "/image/OD.png",
    link: "https://online.maryville.edu/online-masters-degrees/management-and-leadership/resources/organizational-development-guide/",
  },
];

export function Projects() {
  return (
    <section className="py-16 px-8 bg-gray-100">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-blue-gray-900 mb-4">
          Areas of Interest
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Some of the People Professional areas I'm passionate about and would like to explore further in the futrue.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  Learn More
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