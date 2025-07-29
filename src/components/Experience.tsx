import { MdWork, MdSchool } from 'react-icons/md';

export const Experience = () => {
  const experiences = [
    {
      icon: <MdWork />,
      date: "Coming Soon",
      location: "Contact me",
      title: "Coming Soon",
      company: "Coming Soon",
      description: "Contact me for more information.",
    },
    {
      icon: <MdWork />,
      date: "Aug 2024 - Dec 2024",
      location : "Jakarta, Indonesia",
      title: "Product Manager Intern",
      company: "Vidio.com",
      description: "Contributed to market research, competitive analysis, and platform monetization optimization.",
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center font-display">Work Experience</h2>
        <div className="mt-16 max-w-3xl mx-auto relative">
          {/* The vertical line */}
          <div className="absolute left-3 md:left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-200 dark:bg-gray-800"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-12 mb-12">
              {/* The dot on the timeline */}
              <div className="absolute left-0 top-1 w-6 h-6 bg-blue-500 rounded-full border-4 border-white dark:border-black flex items-center justify-center">
                <div className="text-white">{exp.icon}</div>
              </div>

              {/* === This is the updated card content === */}
              <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md border border-gray-200 dark:border-gray-800">
                <div className="flex justify-between items-start gap-4">
                  {/* Left Side */}
                  <div>
                    <h3 className="font-display text-xl font-bold mt-1">{exp.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                  </div>
                  {/* Right Side */}
                  <div className="text-right flex-shrink-0">
                    <p className="font-semibold text-blue-500 dark:text-blue-400">{exp.date}</p>
                    {exp.location && <p className="text-sm text-gray-500 dark:text-gray-400">{exp.location}</p>}
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};