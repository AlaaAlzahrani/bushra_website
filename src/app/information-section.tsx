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
    title: "Master of Business Administration (MBA) - Saudi Electronic University",
    date: "December 2023 - May 2025",
    children: `• Pursuing an MBA to expand knowledge in business administration and management.
• Developing advanced skills in strategic thinking, leadership, and decision-making.
• Enhancing analytical capabilities through case studies and real-world business projects.`,
  },
  {
    icon: AcademicCapIcon,
    title: "Associate Diploma in People Management (Level 5) - CIPD",
    date: "2022-2023",
    children: `• Gained comprehensive insights into strategic HR practices.
• Developed practical skills in evidence-based decision making.
• Acquired expertise in talent management and workforce planning.
• Strengthened my leadership skills through the study of professional behaviors`,
  },
  {
    icon: AcademicCapIcon,
    title: "BA in English Language and Translation - Al-Imam Muhammad Ibn Saud Islamic University",
    date: "2016-2021",
    children:
      `• Graduated with first-class honors, achieving a 4.8 out of 5 GPA.",
      • Completed a thesis on exploring the relationship between English language teachers' accent and their perceived English language teaching skills.`,
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Talent Management Consultant - McDonald's KSA",
    date: "2024 - Present",
    children: `• Spearheaded the development and implementation of innovative talent acquisition strategies, resulting in a 30% increase in high-quality hires.
• Designed and delivered comprehensive training programs to enhance employee skills and performance, leading to a 25% improvement in overall productivity.
• Collaborated with senior leadership to align HR initiatives with business objectives, fostering a culture of continuous improvement and employee engagement.
• Leveraged data analytics to provide actionable insights on workforce trends, enabling informed decision-making and strategic workforce planning.`,
  },
  {
    icon: BriefcaseIcon,
    title: "Human Capital Management (Part-time) - Saudi Human Capital Club",
    date: "2021 - Present",
    children: `• Contributed to the development of best practices in human capital management through research, writing, and collaboration with industry experts.
• Facilitated online workshops and webinars on topics such as talent retention, leadership development, and organizational culture, reaching over 500 HR professionals.
• Authored insightful articles and case studies on emerging HR trends, garnering recognition as a thought leader in the Saudi human capital landscape.`,
  },
  {
    icon: BriefcaseIcon,
    title: "Career Counselor (Part-time) - IntervieWorld",
    date: "2021 - Present",
    children: `• Provided personalized career guidance and coaching to over 200 clients, helping them navigate career transitions and achieve their professional goals.
• Developed and delivered tailored interview preparation sessions, resulting in a 75% success rate for clients securing their target positions.
• Created comprehensive resources on resume writing, networking strategies, and personal branding, empowering clients to effectively market themselves in competitive job markets.`,
  },
  {
    icon: BriefcaseIcon,
    title: "Human Resources Supervisor - 51Talk",
    date: "2023 - 2024",
    children: `• Led a team of HR professionals in streamlining recruitment processes, reducing time-to-hire by 40% while maintaining high-quality standards.
• Implemented a comprehensive performance management system, resulting in improved employee engagement and a 20% increase in productivity.
• Spearheaded the development of an innovative onboarding program, enhancing new hire integration and reducing turnover rates by 25%.
• Revamped the automated test framework for web services, resulting in a remarkable 90% reduction in debugging and issue resolution time.`,
  },
  {
    icon: BriefcaseIcon,
    title: "Human Resources Supervisor - Alessa Industries Co.",
    date: "2015 - 2017",
    children: `• Managed a diverse team of HR specialists, fostering a collaborative work environment and achieving a 95% employee satisfaction rate.
• Developed and implemented company-wide HR policies and procedures, ensuring compliance with local labor laws and industry best practices.
• Led initiatives to improve employee retention, resulting in a 30% reduction in turnover and significant cost savings for the organization.
• Collaborated with department heads to identify training needs and design tailored development programs, enhancing overall workforce capabilities.`,
  },
  {
    icon: BriefcaseIcon,
    title: "Human Resources Specialist - Alessa Industries Co.",
    date: "2015 - 2017",
    children: `• Managed end-to-end recruitment processes for multiple departments, successfully filling 50+ positions across various levels of the organization.
• Implemented an employee recognition program that boosted morale and increased productivity by 15% within the first year.
• Conducted thorough market research and salary benchmarking, ensuring competitive compensation packages and improving talent attraction efforts.
• Assisted in the development and delivery of company-wide training initiatives, focusing on leadership skills and cross-functional collaboration.`,
  },
  {
    icon: BriefcaseIcon,
    title: "Administrative Coordinator - Alessa Industries Co.",
    date: "2021 - 2017",
    children: `• Streamlined administrative processes, resulting in a 25% increase in overall office efficiency and productivity.
• Coordinated complex schedules and travel arrangements for senior executives, ensuring smooth operations and time management.
• Managed confidential company documents and sensitive information with utmost discretion and professionalism.
• Acted as a liaison between departments, facilitating effective communication and collaboration across the organization.`,
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
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-gray-900 mb-4">
            Education
          </h2>
          <p className="text-gray-600 mb-8">
          </p>
          <div className="space-y-8">
            {EDUCATION.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-gray-900 mb-4">
            Experience
          </h2>
          <p className="text-gray-600 mb-8">
          </p>
          <div className="space-y-8">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
        
        <div>
          <h2 className="text-3xl font-bold text-blue-gray-900 mb-4">
            Skills
          </h2>
          <p className="text-gray-600 mb-8">
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {SKILLS.map((props, idx) => (
              <InfoCard key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;