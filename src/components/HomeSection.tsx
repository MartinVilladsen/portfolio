'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { links } from './Links';
import Link from 'next/link';
import { Download } from 'lucide-react';

export function HomeSection() {
    return (
        <section id="home" className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-between mx-auto items-center md:items-start'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 60, damping: 12 }}
                    className='pt-20 md:pt-40 md:pl-10 text-center md:text-left'
                >
                    <div>
                        <p className="text-lg md:text-xl text-white">Hi, my name is</p>
                    </div>
                    <div className="mt-1">
                        <h1 className="text-5xl md:text-8xl font-bold text-white">
                            Martin
                        </h1>
                        <p className='text-lg md:text-xl text-white'>Junior Software Developer</p>
                        <p className='text-lg md:text-xl text-white'>🌍 Aarhus, Denmark</p>
                    </div>
                    <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 md:gap-6 mt-5'>
                        <a href="/CV.pdf" download className="cursor-pointer text-white hover:opacity-80 border py-1 px-2 rounded-2xl transition-opacity w-full sm:w-auto">
                            <p className='flex items-center justify-center md:justify-start gap-2 text-lg md:text-xl font-bold py-1'>
                                CV<Download size={20} />
                            </p>
                        </a>
                        <div className='flex items-center justify-center py-1 px-4 rounded-2xl bg-white/10 gap-6 w-full sm:w-auto'>
                            {links.map((link) => (
                                <Link href={link.path} key={link.path} rel="noopener noreferrer" target="_blank">
                                    <div className='bg-auto p-1'>
                                        <Image src={link.image} alt={link.name} width={30} height={30} className="md:w-10 md:h-10" />
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
                
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 60, damping: 12 }}
                    className='order-first md:order-last pt-10 md:pt-40'
                >
                    <Image 
                        className='border rounded-full size-[180px] md:size-[300px]' 
                        src="/images/Trent.jpg"
                        alt='Profile picture'
                        width={300}
                        height={300}
                        priority
                    />
                </motion.div>
            </div>
        </section>
    );
}