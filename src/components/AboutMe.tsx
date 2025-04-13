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
                    Soon to be graduate in AP Computer Science with a passion for backend development and problem-sovling. 
                    As part of my studies, I completed an internship at Heyloyalty. My favorite part of programming is the problem-solving process and the thrill of learning something new. 
                    I really enjoy the satisfaction of finding solutions to challenging problems😁
                </p>
                <br />
                <p className='text-2xl text-white pt-2'>
                    When im not working on a project, I spent most of my time with my girlfriend, friends, working out and playing videogames. I also have a huge passion for football and love to go abroad for a match😄
                </p>            
            </motion.div>

            <Skills />
            
        </section>
    );
}