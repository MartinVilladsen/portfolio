"use client"
import { motion } from 'framer-motion';
import { databases, frameworks, languages, tools } from './Skill';
import { fadeInAnimationVariants } from './WhileInView';
import Image from 'next/image';

export function Skills() {
    return(
        <div className='flex flex-col items-center pt-8 md:pt-15 gap-3 md:gap-5 w-full'>
            <h1 className='text-start text-xl md:text-2xl text-white font-semibold w-full'>Languages</h1>
            <ul className='flex flex-wrap items-center justify-start py-1 rounded-2xl gap-3 md:gap-6 w-full'>
                {languages.map((language, index) => (
                    <motion.li 
                    key={index}
                    initial={"initial"}
                    whileInView={"animate"}
                    viewport={{
                        once: true
                    }}
                    custom={index}
                    variants={fadeInAnimationVariants}
                    className='flex justify-center items-center bg-white/10 rounded-xl px-3 md:px-6 py-1 text-gray-200 font-semibold gap-1 text-sm md:text-base'>
                        <Image className='object-fit size-5 md:size-7 rounded-full' src={language.icon} alt={language.name} width={40} height={40} />
                        <p>{language.name}</p>
                    </motion.li>
                ))}
            </ul>
            <h1 className='text-start text-xl md:text-2xl text-white font-semibold w-full'>Frameworks</h1>
            <ul className='flex flex-wrap items-center justify-start py-1 rounded-2xl gap-3 md:gap-6 w-full'>
                {frameworks.map((framework, index) => (
                    <motion.li 
                    key={index}
                    initial={"initial"}
                    whileInView={"animate"}
                    viewport={{
                        once: true
                    }}
                    custom={index}
                    variants={fadeInAnimationVariants}
                    className='flex justify-center items-center bg-white/10 rounded-xl px-3 md:px-6 py-1 text-gray-200 font-semibold gap-1 text-sm md:text-base'>
                        <Image className='object-fit size-5 md:size-7 rounded-full' src={framework.icon} alt={framework.name} width={30} height={30} />
                        <p>{framework.name}</p>
                    </motion.li>
                ))}
            </ul>
            <h1 className='text-start text-xl md:text-2xl text-white font-semibold w-full'>Databases</h1>
            <ul className='flex flex-wrap items-center justify-start py-1 rounded-2xl gap-3 md:gap-6 w-full'>
                {databases.map((database, index) => (
                    <motion.li 
                    key={index}
                    initial={"initial"}
                    whileInView={"animate"}
                    viewport={{
                        once: true
                    }}
                    custom={index}
                    variants={fadeInAnimationVariants}
                    className='flex justify-center items-center bg-white/10 rounded-xl px-3 md:px-6 py-1 text-gray-200 font-semibold gap-1 text-sm md:text-base'>
                        <Image className='object-fit size-5 md:size-7 rounded-full' src={database.icon} alt={database.name} width={30} height={30} />
                        <p>{database.name}</p>
                    </motion.li>
                ))}
            </ul>
            <h1 className='text-start text-xl md:text-2xl text-white font-semibold w-full'>Tools</h1>
            <ul className='flex flex-wrap items-center justify-start py-1 rounded-2xl gap-3 md:gap-6 w-full'>
                {tools.map((tool, index) => (
                    <motion.li 
                    key={index}
                    initial={"initial"}
                    whileInView={"animate"}
                    viewport={{
                        once: true
                    }}
                    custom={index}
                    variants={fadeInAnimationVariants}
                    className='flex justify-center items-center bg-white/10 rounded-xl px-3 md:px-6 py-1 text-gray-200 font-semibold gap-1 text-sm md:text-base'>
                        <Image className='object-fit size-5 md:size-7 rounded-full' src={tool.icon} alt={tool.name} width={30} height={30} />
                        <p>{tool.name}</p>
                    </motion.li>
                ))}
            </ul>
        </div>
    )
}