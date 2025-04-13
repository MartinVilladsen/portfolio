"use client"
import { motion } from 'framer-motion';
import { Skills } from './Skills';

export function AboutMe() {
    return (
        <section id="about" className='container mx-auto text-center w-full max-w-4xl'>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 60, damping: 12 }}
                className='pt-20'>
            
                <h1 className='text-4xl text-white font-bold'>About Me</h1>
                <p className='text-2xl text-white pt-5'>
                    Insert text about me
                </p>            
                </motion.div>

            <Skills />
            
        </section>
    );
}