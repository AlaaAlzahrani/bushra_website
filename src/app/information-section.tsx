"use client";

import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
} from "@heroicons/react/24/solid";

import InfoCard from "@/components/info-card";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "Certified Web Developer - Web Development Institute",
    date: "2016",
    logo: "/logos/logo-amazon.svg",
    children:
      "This comprehensive program covered HTML5, CSS3, JavaScript, responsive design, server-side scripting, and web security.",
  },
  {
    icon: AcademicCapIcon,
    title: "Responsive Web Design Certification - FreeCodeCamp",
    date: "2015",
    children:
      "The Responsive Web Design certification signifies competence in designing and developing websites that adapt seamlessly to various screen sizes and devices.",
  },
  {
    icon: AcademicCapIcon,
    title: "JavaScript Developer Certification - Code Academy",
    date: "2014",
    children:
      "This certification demonstrates advanced proficiency in JavaScript programming, including ES6 features and practical applications.",
  },
  {
    icon: AcademicCapIcon,
    title: "Bachelor of Science in Computer Science - XYZ University",
    date: "2014-2016",
    children:
      "Relevant Coursework: Data Structures, Algorithms, Web Development, Software Engineering, Database Management.",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Freelancer Web Developer",
    date: "2023 - PRESENT",
    children:
      "The core of my work involved actual web development. I would write code, design layouts, and create functionality based on the project's specifications.",
  },
  {
    icon: BriefcaseIcon,
    title: "Technical Team Lead",
    date: "2021 - 2023",
    children:
      "I provided strong leadership by overseeing and guiding a team of highly skilled technical professionals.",
  },
  {
    icon: BriefcaseIcon,
    title: "Senior Web Developer",
    date: "2017 - 2021",
    children:
      "Revamped the automated test framework for web services, resulting in a remarkable 90% reduction in debugging and issue resolution time.",
  },
  {
    icon: BriefcaseIcon,
    title: "Junior Web Developer",
    date: "2015 - 2017",
    children:
      "Developed 10+ responsive websites for clients in a variety of industries.",
  },
];

const SKILLS = [
  {
    icon: FireIcon,
    title: "Front-End Frameworks",
    date: "Technical Skills",
    children:
      "Competent in working with front-end frameworks such as React, Angular, or Vue.js to develop dynamic and responsive web applications with a focus on user experience.",
  },
  {
    icon: FireIcon,
    title: "Attention to Detail",
    date: "Soft Skills",
    children:
      "Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.",
  },
  {
    icon: FireIcon,
    title: "Responsive Web Design",
    date: "Technical Skills",
    children:
      "Skilled in creating responsive layouts using CSS Grid, Flexbox, and media queries. Ensures websites adapt seamlessly to various screen sizes and devices.",
  },
  {
    icon: FireIcon,
    title: "Time Management",
    date: "Soft Skills",
    children:
      "Excellent time management skills to meet project deadlines, prioritize tasks effectively, and handle multiple projects simultaneously.",
  },
];

export function InformationSection() {
  return (
    <section className="py-16 px-8">
      <div className="container mx-auto grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-blue-gray-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-gray-600 mb-8">
            See my education history.
          </p>
          <div className="space-y-8">
            {EDUCATION.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-blue-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-gray-600 mb-8">
            See my experience as a developer.
          </p>
          <div className="space-y-8">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-16">
        <h2 className="text-3xl font-bold text-blue-gray-900 mb-4">
          Skills
        </h2>
        <p className="text-gray-600 mb-8">
          Check out my technical and soft skills.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          {SKILLS.map((props, idx) => (
            <InfoCard key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InformationSection;