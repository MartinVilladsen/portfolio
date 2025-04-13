'use client'
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

export function Header() {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, (current) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (current < 50) return 0;
    return current > previous ? -150 : 0; 
  }) as MotionValue<number>;

  const smoothY = useSpring(y, { stiffness: 100, damping: 15 }); 
  const opacity = useTransform(smoothY, [-150, 0], [0, 1]); 

  const links = ['Home', 'About', 'Experience', 'Projects', 'Contact'];

  return (
    <motion.header 
      className="fixed top-4 left-1/2 transform -translate-x-1/2 py-8 z-50"
      initial={{ y: -150, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 60, damping: 12 }}
      style={{ y: smoothY, opacity }} 
    >
      <nav className="bg-gradient-to-r from-blue-100 via-white to-blue-100 px-6 py-2 rounded-full shadow-md">
        <ul className="flex gap-2">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="px-4 py-2 rounded-full transition duration-300 hover:bg-gray-100 text-gray-700 font-medium"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
