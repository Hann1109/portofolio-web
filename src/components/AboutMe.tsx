import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gray-50 dark:bg-[#111]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

          {/* === Image Column with Gradient Border === */}
          <div className="relative w-64 md:w-72 flex-shrink-0">
            {/* This div creates the gradient border */}
            <div className="relative rounded-xl p-1 bg-gradient-to-tr from-blue-500 to-black-500 shadow-lg">
              <div className="bg-white dark:bg-gray-900 rounded-[10px] p-1">
                 <Image
                  src="/Profile.JPG" 
                  alt="Muhammad Rayhan Denel"
                  width={412}
                  height={585}
                  className="w-full h-full rounded-lg object-cover"
                />
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-bold font-display">About Me</h2>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              I&apos;m a passionate Computer Science graduate from Universitas Indonesia, focused on building exceptional digital experiences and user-centered products.
            </p>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              With experience in both product management and software development, I enjoy crafting solutions that are technically sound, scalable, and genuinely solve user problems.
            </p>
            <div className="mt-8 flex justify-center md:justify-start gap-4">
              <a href="https://github.com/Hann1109" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 font-semibold rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all">
                <FaGithub />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/muhammad-rayhan-denel-933939216/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 font-semibold rounded-md bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 transition-all">
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}