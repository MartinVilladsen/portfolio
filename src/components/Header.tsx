'use client'
import { useState } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current < 50) return 0;
    return current > previous ? -150 : 0;
  }) as MotionValue<number>;
  
  const smoothY = useSpring(y, { stiffness: 100, damping: 15 });
  const opacity = useTransform(smoothY, [-150, 0], [0, 1]);
  const links = ['Home', 'About', 'Experience', 'Projects', 'Contact'];
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    if (mobileMenuOpen) setMobileMenuOpen(false);
  };
  
  return (
    <motion.header
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] md:w-auto"
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 12 }}
      style={{ y: smoothY, opacity }}
    >
      <nav className="bg-gradient-to-r from-blue-100 via-white to-blue-100 px-3 md:px-6 py-2 rounded-full shadow-md relative">
        <ul className="hidden md:flex gap-2">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="px-4 py-2 rounded-full transition duration-300 hover:bg-gray-100 text-gray-700 font-medium"
                onClick={handleLinkClick}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        
        <div className="md:hidden flex justify-between items-center">
          <a
            href="#home"
            className="px-3 py-2 text-gray-700 font-medium"
            onClick={handleLinkClick}
          >
          Home
          </a>
          <button 
            onClick={toggleMobileMenu}
            className="p-2 rounded-full hover:bg-gray-100 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-14 left-0 w-full bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <ul className="flex flex-col py-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="block px-4 py-3 hover:bg-gray-100 text-gray-700 font-medium transition"
                    onClick={handleLinkClick}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}