'use client'
import { useState, useEffect } from 'react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { FaBars, FaTimes } from 'react-icons/fa';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navLinks = [
    { href: "#about-me", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let currentSectionId = '';
      for (const link of navLinks) {
        const sectionId = link.href.substring(1);
        const section = document.getElementById(sectionId);
        if (section instanceof HTMLElement) {
          if (section.offsetTop <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
            currentSectionId = sectionId;
            break; 
          }
        }
      }
      setActiveSection(currentSectionId);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navLinks]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-[#111]/80 backdrop-blur-lg">
      <nav className="container mx-auto px-6 py-5 flex justify-between items-center">
        <a href="#" className="font-bold text-xl text-blue-600 dark:text-blue-500">
          Muhammad Rayhan Denel
        </a>
        
        {/* === Desktop Menu === */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href}
                className={`group transition-colors duration-300 ${activeSection === link.href.substring(1) ? "text-blue-500" : "text-gray-600 dark:text-gray-300 hover:text-blue-500"}`}
              >
                {link.label}
                <span className={`block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-500 ${activeSection === link.href.substring(1) ? "max-w-full" : ""}`}></span>
              </a>
            ))}
          </div>
          <a href="/resume.pdf" target="_blank" className="bg-blue-600 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
            View Resume
          </a>
          {/* Theme switcher for desktop */}
          <ThemeSwitcher />
        </div>

        {/* === Mobile Menu Button === */}
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {/* === Mobile Menu Panel === */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-[#111] shadow-md">
          <div className="flex flex-col items-center p-6 space-y-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-lg" onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </a>
            ))}
            <a href="/CV_Muhammad Rayhan Denel.pdf" target="_blank" className="text-lg font-semibold text-blue-500">
              View Resume
            </a>
            {/* Theme switcher for mobile */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800 w-full flex justify-center">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
};