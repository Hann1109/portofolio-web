import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const projects = [
    {
        title: "Bahari App",
        summary: "A web platform for visualizing lecturer competency mapping in Indonesia.",
        role: "Product Manager",
        tech: ["Java", "Spring Boot", "Tailwind CSS"],
        image: "/BahariApps.PNG", // Make sure this path is correct
        demoLink: "https://bahari.airdiansyah.my.id/",
        codeLink: "#",
    },
    {
        title: "Wiradha Information System",
        summary: "An internal university system for student program applications.",
        role: "Developer",
        tech: ["Web Development", "UI/UX"],
        image: "/Wiradha.PNG", // Make sure this path is correct
        demoLink: "#",
        codeLink: "#",
    },
    {
        title: "PerBan (UI/UX Concept)",
        summary: "A concept for a mass communication app for natural disaster info.",
        role: "UI/UX Designer",
        tech: ["Figma", "HCI"],
        image: "/PerBan.PNG", // Make sure this path is correct
        demoLink: "http://ristek.link/perbanprototype",
        codeLink: "#",
    }
];

export const Projects = () => (
  <section id="projects" className="py-24 sm:py-32">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-center font-display">Featured Projects</h2>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div key={p.title} className="bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col group">
            <div className="relative h-52 w-full overflow-hidden">
              <Image src={p.image} alt={p.title} layout="fill" className="object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="font-display text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400 flex-grow">{p.summary}</p>
              <div className="mt-6">
                <h4 className="font-semibold text-sm">My Role: <span className="font-normal text-gray-500 dark:text-gray-500">{p.role}</span></h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tech.map(t => <span key={t} className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 font-semibold px-2 py-1 rounded-full">{t}</span>)}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center gap-4">
                <a href={p.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 font-semibold rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm transition-all">
                  <FaExternalLinkAlt /> Demo
                </a>
                <a href={p.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 font-semibold rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm transition-all">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);