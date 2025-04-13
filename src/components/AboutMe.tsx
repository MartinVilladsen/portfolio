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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </motion.div>

            <Skills />
            
        </section>
    );
}