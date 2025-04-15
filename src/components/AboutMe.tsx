"use client"
import { motion } from 'framer-motion';
import { Skills } from './Skills';

export function AboutMe() {
    return (
        <section id="about" className='container mx-auto px-4 text-center w-full'>
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 60, damping: 12 }}
                className='pt-10 md:pt-20'>
           
                <h1 className='text-3xl md:text-4xl text-white font-bold'>About Me</h1>
                <p className='text-lg md:text-2xl text-white pt-4 md:pt-5 text-left md:text-center'>
                    As I approach the end of my Datamatiker education, Im enthusiastic about putting my software development skills to work in building impactful solutions.
                    As part of my studies, I completed an internship at Heyloyalty. Im passionate about using technology to tackle real-world challenges, and improve user experiences.
                    Im thrilled at the idea of teaming up with passionate individuals and visionary organizations to make a real difference.😁
                </p>
                <br />
                <p className='text-lg md:text-2xl text-white pt-2 text-left md:text-center'>
                    When im not working on a project, I spent most of my time with my girlfriend, friends, working out and playing videogames. I also have a huge passion for football and love to go abroad for a match😄
                </p>            
            </motion.div>
            <Skills />
        </section>
    );
}