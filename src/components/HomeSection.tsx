'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { links } from './Links';
import Link from 'next/link';
import { Download } from 'lucide-react';

export function HomeSection() {
    return (
        <section id="home" className='container mx-auto max-w-4xl'>
            <div className='flex justify-between mx-auto'>
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ type: 'spring', stiffness: 60, damping: 12 }}
                    className='pt-40 pl-10'
                >
                    <div>
                        <p className="text-xl text-white">Hi, my name is</p>
                    </div>
                    <div className="mt-1">
                        <h1 className="text-8xl font-bold text-white">
                            Martin
                        </h1>
                        <p className='text-xl text-white'>Junior Software Developer</p>
                        <p className='text-xl text-white'>🌍 Aarhus, Denmark</p>
                    </div>
                    <div className='flex items-center gap-6 mt-5'>
                        <a href="/CV.pdf" download className="cursor-pointer text-white hover:opacity-80 border py-1 px-2 rounded-2xl transition-opacity">
                            <p className='flex items-center gap-2 text-xl font-bold py-1'>
                                CV<Download size={20} />
                            </p>
                        </a>
                        <div className='flex items-center justify-center py-1 px-4 rounded-2xl bg-white/10 gap-6'>
                            {links.map((link) => (
                                <Link href={link.path} key={link.path} rel="noopener noreferrer" target="_blank">
                                    <div className='bg-auto p-1'>
                                        <Image src={link.image} alt={link.name} width={40} height={40} />
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
                    className='float-right pt-41 flex'
                >
                    <Image className='border rounded-full size-[300px]' src={"/images/Trent.jpg"}
                        alt='Picture'
                        width={300}
                        height={300} 
                        />
                </motion.div>
            </div>
        </section>
    );
}