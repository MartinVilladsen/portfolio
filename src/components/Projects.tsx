'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from './Project';


export function Project() {
    return (
        <section id="projects" className="flex flex-col items-center w-full pt-20 justify-center">
            <h1 className="text-4xl text-white font-bold pb-10">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {projects.map((project) => (
                    <motion.div
                        key={project.name}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 60, damping: 12 }}
                        className="relative overflow-hidden rounded-lg bg-slate-900 border border-slate-800 shadow-lg h-[600px]"
                    >
                            {project.link ? (
                        <div className="h-1/2 relative">
                            <a target="_blank" href={project.link}>
                                <Image
                                    src={project.icon}
                                    alt={project.name}
                                    className="object-cover w-full h-full"
                                    width={500}
                                    height={250}
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
                            </a>
                        </div>
                            ) : 
                            <div className="h-1/2 relative">
                                    <Image
                                        src={project.icon}
                                        alt={project.name}
                                        className="object-cover w-full h-full"
                                        width={500}
                                        height={250}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
                                </div>     
                            }

                        <div className="p-6 h-1/2 flex flex-col justify-between">
                            <div className='flex gap-2'>
                                <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                                {project.github ? (
                                    <a href={project.github} target='_blank'>
                                    <Image
                                     src="/images/Github.png"
                                     alt="Github"
                                     className="bg-auto p-1 bg-white border rounded-2xl"
                                     width={40}
                                     height={40}
                                 />
                                 </a>
                                ) : null}
                                {project.link ? (
                                    <a href={project.link} target='_blank'>
                                    <Image
                                     src="/images/tv.png"
                                     alt="gmail"
                                     className="bg-auto p-1 bg-white border rounded-2xl"
                                     width={40}
                                     height={40}
                                 />
                                 </a>
                                ) : null}
                            </div>
                           
                                <p className='text-slate-300'>{project.description}</p>
                            <div className='py-1 w-full overflow-hidden'>
                                <ul className='flex flex-wrap items-center gap-2'>
                                    {project.tools.map((tool) => (
                                        <li key={tool.name}
                                            className='flex justify-center items-center bg-white/10 rounded-xl px-3 py-1 text-gray-200 text-xs sm:text-sm font-semibold gap-1 mb-2'>
                                            <Image className='object-fit size-4 rounded-full flex-shrink-0' src={tool.icon} alt={tool.name} width={30} height={30} />
                                            <p className='truncate'>{tool.name}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}