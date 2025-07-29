import { FaJava, FaPython, FaReact, FaHtml5, FaUsers, FaBriefcase, FaAward } from 'react-icons/fa';
import { SiSpring, SiTailwindcss } from 'react-icons/si';

const skillsData = [
  { 
    category: "Languages & Web", 
    skills: [
      { name: "Java", icon: <FaJava className="text-red-500"/> }, 
      { name: "Python", icon: <FaPython className="text-blue-500"/> }, 
      { name: "HTML/CSS", icon: <FaHtml5 className="text-orange-500"/> },
    ] 
  },
  { 
    category: "Frameworks & Libraries", 
    skills: [
      { name: "React", icon: <FaReact className="text-sky-500"/> }, 
      { name: "Spring Boot", icon: <SiSpring className="text-green-500"/> }, 
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-500"/> },
    ] 
  },
  { 
    category: "Product & Soft Skills", 
    skills: [
      { name: "Product Management", icon: <FaBriefcase /> }, 
      { name: "Teamwork", icon: <FaUsers /> }, 
      { name: "Leadership", icon: <FaAward /> },
    ] 
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 sm:py-32 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center font-display">Skills & Technologies</h2>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillsData.map(({ category, skills }) => (
            <div key={category} className="bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
              <h3 className="font-display text-xl font-semibold mb-6 text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {skills.map(skill => (
                  <div key={skill.name} className="flex items-center gap-2 bg-white dark:bg-gray-900 px-4 py-2 rounded-md font-medium">
                    {skill.icon} 
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}