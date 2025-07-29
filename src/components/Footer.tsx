import { FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer id="contact" className="py-24 bg-white dark:bg-gray-900 text-center">
      <div className="container mx-auto px-6">
        <h2 className="font-display text-3xl font-bold">Let's Build Something Together</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.
        </p>
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6">
          <a href="mailto:denel11rayhan@gmail.com" className="text-xl font-semibold hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            denel11rayhan@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/muhammad-rayhan-denel-933939216/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
            <FaLinkedin size={28} />
          </a>
        </div>
        <div className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8">
          <p className="text-sm text-gray-500 dark:text-gray-500">&copy; {new Date().getFullYear()} Muhammad Rayhan Denel. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}