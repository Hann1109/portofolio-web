import { FaArrowDown } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center text-center">
      {/* This div will handle the animation */}
      <div className="container mx-auto px-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mx-auto text-gray-900 dark:text-white">
          Hi, I'm{' '}
          {/* This span creates the gradient effect on your name */}
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Muhammad Rayhan Denel
          </span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A passionate Computer Science graduate focused on building user-centered products.
        </p>
        <a 
          href="#projects"
          className="mt-10 inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-blue-700 transition-colors shadow-lg"
        >
          View My Work
        </a>
      </div>
      {/* This div creates the bouncing scroll indicator at the bottom */}
      <div className="absolute bottom-10 animate-bounce">
          <FaArrowDown className="text-gray-400" />
      </div>
    </section>
  )
}