import Image from 'next/image';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const AboutMe = () => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gray-200 shadow-md dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">

          {/* Image Column - The container is now a rectangle */}
          <div className="relative w-64 h-[332px] md:w-72 md:h-[420px] flex-shrink-0">
            <Image
              src="/Profile.JPG" 
              alt="Muhammad Rayhan Denel"
              // Use the actual image dimensions for better optimization
              width={412}
              height={585}
              className="relative w-full h-full rounded-xl object-cover border-4 border-white dark:border-gray-900 shadow-lg"
            />
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
              <a href="https://github.com/Hann1109" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 font-semibold rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
                <FaGithub />
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/muhammad-rayhan-denel-933939216/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 font-semibold rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all">
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