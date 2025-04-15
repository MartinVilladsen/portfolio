'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { projects } from './Project';

export function Project() {
    return (
        <section id="projects" className="flex flex-col items-center w-full pt-20 justify-center">
            <h1 className="text-4xl md:text-5xl text-white font-bold mb-6">
                Projects
            </h1>
            <p className="text-white text-lg leading-relaxed mb-4">
                Although this portfolio mainly highlights my front-end projects, my main enjoyment comes from working with back-end development alongside relational databases. Nonetheless, i enjoy building systems and applications that are visually appealing and highly functional and i am eager to continue growing as a full-stack developer.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {projects.map((project) => (
                    <motion.div
                        key={project.name}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ type: 'spring', stiffness: 60, damping: 12 }}
                        className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-[#193366]/90 to-[#0a1a42]/90 backdrop-blur-sm border border-[#266ac2]/30 shadow-lg min-h-[400px] md:h-auto hover:shadow-xl hover:shadow-[#266ac2]/10 transition-all duration-300 flex flex-col"
                    >
                        {project.link ? (
                            <div className="h-48 md:h-64 relative">
                                <a target="_blank" href={project.link}>
                                    <Image
                                        src={project.icon}
                                        alt={project.name}
                                        className="object-contain w-full h-full"
                                        fill
                                        sizes="100%"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1a42] via-[#193366]/50 to-transparent opacity-40 z-10 transition-opacity duration-300 group-hover:opacity-20"></div>
                                </a>
                            </div>
                        ) :
                            <div className="h-48 md:h-64 relative">
                                <Image
                                    src={project.icon}
                                    alt={project.name}
                                    className="object-contain w-full h-full"
                                    fill
                                    sizes="100%"
                                />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90" />
                            </div>
                        }
                        <div className="p-4 md:p-6 flex-grow flex flex-col justify-between">
                            <div>
                                <div className='flex gap-2 items-center mb-2'>
                                    <h2 className="text-xl md:text-2xl font-bold text-white">{project.name}</h2>
                                    <div className="flex gap-2">
                                        {project.github ? (
                                            <a href={project.github} target='_blank'>
                                                <Image
                                                    src="/images/Github.png"
                                                    alt="Github"
                                                    className="flex items-center justify-center size-8 bg-gradient-to-br from-[#266ac2]/40 to-[#193366]/40 border border-[#266ac2]/30 rounded-full text-white hover:scale-110 transition-all duration-200"
                                                    width={32}
                                                    height={32}
                                                />
                                            </a>
                                        ) : null}
                                        {project.link ? (
                                            <a href={project.link} target='_blank'>
                                                <Image
                                                    src="/images/tv.png"
                                                    alt="View live"
                                                    className="flex items-center justify-center size-8 bg-gradient-to-br from-[#266ac2]/40 to-[#193366]/40 border border-[#266ac2]/30 rounded-full text-white hover:scale-110 transition-all duration-200"
                                                    width={32}
                                                    height={32}
                                                />
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                                <p className="text-blue-100/80 mb-4 line-clamp-4 md:line-clamp-3">{project.description}</p>
                            </div>
                            <div className='py-1 w-full'>
                                <ul className='flex flex-wrap items-center gap-2'>
                                    {project.tools.map((tool) => (
                                        <li key={tool.name}
                                            className="flex justify-center items-center bg-gradient-to-r from-[#266ac2]/30 to-[#193366]/30 border border-[#266ac2]/20 rounded-xl px-2 py-1 text-blue-100 text-xs font-medium gap-1 mb-2"
                                        >
                                            <Image className='object-fit size-4 rounded-full flex-shrink-0' src={tool.icon} alt={tool.name} width={20} height={20} />
                                            <p className='truncate max-w-20 md:max-w-full'>{tool.name}</p>
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