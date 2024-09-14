"use client";

import React from 'react';
import { HeartIcon, FireIcon } from "@heroicons/react/24/solid";
import { IconInfoCard, ImageInfoCard } from "@/components/info-card";

const EDUCATION = [
  {
    imageSrc: "/image/SEU.png",
    imageAlt: "SEU Logo",
    title: "Master of Business Administration (MBA) - Saudi Electronic University",
    date: "Dec 2023 - May 2025",
    children: `• Pursuing an MBA to expand knowledge in business administration and management.
• Developing advanced skills in strategic thinking, leadership, and decision-making.
• Enhancing analytical capabilities through case studies and real-world business projects.`,
  },
  {
    imageSrc: "/image/cipd.jpg",
    imageAlt: "CIPD Logo",
    title: "Associate Diploma in People Management (Level 5) - CIPD",
    date: "2022-2023",
    children: `• Gained comprehensive insights into strategic HR practices.
• Developed practical skills in evidence-based decision making.
• Acquired expertise in talent management and workforce planning.
• Strengthened my leadership skills through the study of professional behaviors`,
  },
  {
    imageSrc: "/image/Imam.jpg",
    imageAlt: "Imam Logo",
    title: "BA in English Language and Translation - Al-Imam Muhammad Ibn Saud Islamic University",
    date: "2016-2021",
    children:
      `• Graduated with first-class honors, achieving a 4.8 out of 5 GPA.
      • Completed a thesis on exploring the relationship between English language teachers' accent and their perceived English language teaching skills.
      • Published a peer-reviewed article as the lead author in the Journal of International Social Science and Humanities.`,
  },
];

const EXPERIENCE = [
  {
    imageSrc: "/image/mac.jpeg",
    imageAlt: "McDonald's Logo",
    title: "Talent Management Consultant - McDonald's KSA",
    date: "April 2024 - Present",
    children: `• Spearheaded the development and implementation of innovative talent acquisition strategies.
• Designed and delivered comprehensive training programs to enhance employee skills and performance.
• Collaborated with senior leadership to align HR initiatives with business objectives, fostering a culture of continuous improvement and employee engagement.
• Leveraged data analytics to provide actionable insights on workforce trends, enabling informed decision-making and strategic workforce planning.`,
  },
  {
    imageSrc: "/image/SHC.jpeg",
    imageAlt: "Saudi Human Capital Logo",
    title: "Human Capital Management (Part-time) - Saudi Human Capital Club",
    date: "2021 - Present",
    children: `• Contribute to strategic initiatives for talent development.
• Participate in workshops and seminars on HR best practices.
• Collaborate with industry leaders to address workforce challenges.
• Mentor emerging professionals in the human capital field.
• Support research efforts on labor market trends and needs.`,
  },
  {
    imageSrc: "/image/IW.jpeg",
    imageAlt: "IntervieWorld Logo",
    title: "Career Counselor (Part-time) - IntervieWorld",
    date: "Sep 2022 - Present",
    children: `• Provide personalized career guidance and counseling.
• Assist with resume writing and interview preparation.
• Conduct career assessments and skills evaluations.
• Offer job search strategies and networking advice.
• Facilitate workshops on professional development.`,
  },
  {
    imageSrc: "/image/51.jpeg",
    imageAlt: "51Talk Logo",
    title: "Human Resources Supervisor - 51Talk",
    date: "Feb 2023 - Feb 2024",
    children: `• Developed foundational HR policies, including recruitment documents, employee contracts, work hour regulations, leave policies, and code of conduct.
• Led the full recruitment cycle: identifying vacancies, analyzing job requirements, reviewing applications, screening candidates, and selecting top talent.
• Collaborated across departments to identify staffing needs, create strategic hiring plans, and allocate budgets effectively.
• Ensured strict compliance of all HR operational processes with relevant laws and regulations.
• Streamlined the onboarding process, reducing new hire integration time by 25% and improving early-stage retention rates by 15%.
• Implemented a performance management system that increased goal achievement rates by 20% company-wide.`,
  },
  {
    imageSrc: "/image/alessa.jpeg",
    imageAlt: "Alessa Logo",
    title: "Human Resources Supervisor - Alessa Industries Co.",
    date: "Jun 2022 - Jan 2023",
    children: `
  • Orchestrated comprehensive HR operations for 500+ employees across multiple departments, ensuring seamless personnel management and organizational efficiency.
  • Strategically managed Saudization percentages and professional allocations, aligning with national employment initiatives while maintaining operational excellence.
  • Spearheaded end-to-end employee lifecycle management, refining processes for resignations, terminations, exit interviews, and end-of-service benefit calculations.
  • Designed and implemented innovative orientation and onboarding program, enhancing new hire integration and reducing time-to-productivity.
  • Maintained vigilant oversight of labor legislation changes, proactively identifying and mitigating potential compliance risks to safeguard company interests.
  • Conceptualized and executed engaging annual corporate events, fostering positive company culture and boosting employee morale.
  • Provided transformative leadership to a team of three HR professionals across talent acquisition, employee relations, and government liaison, driving departmental excellence.`,
  },
  {
    imageSrc: "/image/alessa.jpeg",
    imageAlt: "Alessa Logo",
    title: "Human Resources Specialist - Alessa Industries Co.",
    date: "Oct 2021 - May 2022",
    children: `• Developed and monitored recruitment budgets, ensuring efficient resource allocation and utilization.
• Collaborated with senior management to create and revise HR policies, enhancing organizational effectiveness.
• Maintained accurate and up-to-date employee records, ensuring data integrity and compliance.
• Managed monthly recruitment expenses and budget planning, optimizing cost-effectiveness.
• Spearheaded the digitalization of employee evaluation and recruitment processes, improving efficiency by 40%.
• Handled disciplinary procedures, including issuing formal action letters when necessary.
• Conducted internal investigations, documented findings, and facilitated resolution meetings, improving conflict resolution time by 25%.
• Managed the full recruitment cycle for assigned areas, implementing best practices to attract top talent.
• Reduced time-to-fill positions by 30% through improved sourcing strategies and streamlined selection processes.
• Increased new hire retention rate by 20% through refined candidate assessment techniques and improved job-fit analysis.`,
  },
  {
    imageSrc: "/image/alessa.jpeg",
    imageAlt: "Alessa Logo",
    title: "Administrative Coordinator - Alessa Industries Co.",
    date: "May 2021 - Sep 2021",
    children: `• Developed an Excel-based database to streamline recruitment processes, enhancing efficiency and data management.
• Designed and implemented a comprehensive recruitment plan, aligning hiring strategies with organizational needs.
• Successfully recruited and interviewed over 50 employees, contributing to workforce growth and diversity.
• Managed the archiving of both hard-copy and digital documents for more than 100 employees, ensuring data integrity and accessibility.
• Oversaw non-Saudi sponsorship transfers and re-entry processes, maintaining compliance with immigration regulations.
• Ensured smooth interdepartmental operations through effective coordination and communication.
• Reduced document retrieval time by 60% through the implementation of an organized archiving system.
• Improved recruitment process efficiency by 35% through the Excel-based database and structured recruitment plan.`,
  },
];

const VOLUNTEERING = [
  {
    icon: HeartIcon,
    title: "Career Development Consultant",
    date: "CV Reviewer",
    children: `As a CV Reviewer, I became a catalyst for career transformations. I meticulously analyzed each document, providing incisive feedback. My recommendations were more than cosmetic; they were strategic. I guided job seekers in articulating their unique value propositions, enhancing their prospects in competitive markets.`,
  },
  {
    icon: HeartIcon,
    title: "Academic Affairs Coordinator",
    date: "Undergraduate",
    children: `As an undergraduate, I served as the bridge between students and administration. My role? Streamlining the semester kick-off. I orchestrated seamless registration processes, guiding peers with patience and precision. This experience honed my organizational skills and deepened my understanding of academic operations.`,
  },
  {
    icon: HeartIcon,
    title: "Founder and Director, Linguistic Exploration Hub",
    date: "Undergraduate",
    children: `I spearheaded the creation of a vibrant linguistic community on campus. My mission was clear: to ignite passion for language study among students. Through workshops, guest lectures, and interactive sessions, I cultivated an environment where linguistic curiosity thrived. This initiative not only broadened horizons but also fostered interdisciplinary connections.`,
  },
  {
    icon: HeartIcon,
    title: "Literary Enhancement Specialist",
    date: "Undergraduate",
    children: `I wore two hats. First, as a meticulous editor, I helped students refine their academic voice. Second, I managed our growing database of resources. My dual role ensured that each student received personalized attention while contributing to the center's long-term efficiency.`,
  },
  {
    icon: HeartIcon,
    title: "Developmental Activities Coordinator for Special Needs Children",
    date: "High school",
    children: `At the Disabled Children's Association, I designed and implemented educational activities. These weren't just lessons; they were gateways to growth. Each session was crafted to challenge, inspire, and empower. Witnessing the children's progress was profoundly rewarding and shaped my approach to inclusive education.`,
  },

  {
    icon: HeartIcon,
    title: "Community Outreach and Support Specialist",
    date: "High school",
    children: `In this role, I went beyond mere distribution of goods. I coordinated comprehensive aid efforts for orphans and underprivileged individuals. My approach was holistic. From organizing clothing drives to facilitating educational support, I strived to address both immediate needs and long-term empowerment. This experience reinforced my commitment to social responsibility and community building.`,
  },
];


const SKILLS = [
  {
  icon: FireIcon,
  title: "Time Management",
  date: "Soft Skills",
  children: "Master of juggling multiple tasks and deadlines. I can prioritize like a pro, ensuring everything gets done efficiently and on time.",
  },
  {
  icon: FireIcon,
  title: "Effective Communication",
  date: "Soft Skills",
  children: "Clear and articulate communicator, both verbally and in writing. I can convey complex ideas simply and engage effectively with all levels of an organization.",
  },
  {
  icon: FireIcon,
  title: "Adaptability",
  date: "Soft Skills",
  children: "Quick to embrace change and thrive in dynamic environments. I can pivot strategies on a dime and find creative solutions to unexpected challenges. My flexibility keeps me cool under pressure and always ready for what's next.",
  },
  {
  icon: FireIcon,
  title: "Strategic Planning",
  date: "Professional Skills",
  children: "Adept at seeing the big picture and plotting the course to get there. I love crafting long-term plans that turn ambitious goals into reality.",
  },
  {
  icon: FireIcon,
  title: "Follow Up",
  date: "Professional Skills",
  children: "Never let a task slip through the cracks. I'm known for my persistent follow-through, ensuring every project reaches completion.",
  },
  {
  icon: FireIcon,
  title: "Negotiations",
  date: "Professional Skills",
  children: "Expert at finding win-win solutions. Whether it's securing a deal or resolving internal issues, I know how to navigate complex negotiations with finesse.",
  },
  {
  icon: FireIcon,
  title: "Attention to Detail",
  date: "Professional Skills",
  children: "Meticulous and thorough in all tasks. Nothing escapes my notice, ensuring high-quality outcomes in every project I undertake.",
  },
  {
  icon: FireIcon,
  title: "Conflict Resolution",
  date: "Interpersonal Skills",
  children: "Skilled mediator with a knack for finding common ground. I can turn heated disagreements into productive discussions, fostering harmony in the workplace.",
  },
  {
  icon: FireIcon,
  title: "Teamwork",
  date: "Interpersonal Skills",
  children: "True team player who thrives in collaborative environments. I believe in the power of diverse perspectives and know how to bring out the best in my colleagues.",
  },
  {
  icon: FireIcon,
  title: "Analytical Thinking",
  date: "Cognitive Skills",
  children: "Sharp problem-solver with a keen eye for details. I excel at breaking down complex issues and finding innovative solutions.",
  },
  ];


const SectionTitle = ({ title }) => (
  <h2 className="text-3xl font-bold text-blue-gray-900 mb-6 border-b-2 border-blue-500 pb-2">
    {title}
  </h2>
);

const ImageSection = ({ title, data }) => (
  <div className="mb-16">
    <SectionTitle title={title} />
    <div className="grid grid-cols-1 gap-8">
      {data.map((props, idx) => (
        <ImageInfoCard key={idx} {...props} />
      ))}
    </div>
  </div>
);

const IconSection = ({ title, data, gridCols = 1 }) => (
  <div className="mb-16">
    <SectionTitle title={title} />
    <div className={`grid grid-cols-1 ${gridCols > 1 ? `md:grid-cols-${gridCols}` : ''} gap-8`}>
      {data.map((props, idx) => (
        <IconInfoCard key={idx} {...props} />
      ))}
    </div>
  </div>
);

export function InformationSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="mt-10 space-y-16">
          <ImageSection title="Education" data={EDUCATION} />
          <ImageSection title="Experience" data={EXPERIENCE} />
          <IconSection title="Volunteering" data={VOLUNTEERING} />
          <IconSection title="Skills" data={SKILLS} gridCols={2} />
        </div>
      </div>
    </section>
  );
}

export default InformationSection;