'use client'
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent} from './ui/card';
import Image from 'next/image';
import { educations, experiences } from './Educations';

export function Experience() {
    return (
        <section id="experience" className='flex flex-col items-center w-full pt-20 justify-center'>
                <h1 className='text-4xl text-white font-bold pb-10'>Experience</h1>
                <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 60, damping: 12 }}
            >
                <Tabs defaultValue="experience" className="w-full max-w-[500px]">
                    <TabsList className="grid w-full grid-cols-2 bg-slate-900 border border-slate-800 pb-1">
                        <TabsTrigger 
                            value="experience" 
                            className="data-[state=active]:bg-slate-800 text-white font-semibold"
                        >
                            Experience
                        </TabsTrigger>
                        <TabsTrigger 
                            value="education" 
                            className="data-[state=active]:bg-slate-800 text-white font-semibold"
                        >
                            Education
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="education">
                        <Card className="bg-slate-900 border border-slate-800 shadow-lg">                           
                            <CardContent className="p-4">
                                {educations.map((education) => (
                                    <div className='flex flex-col sm:flex-row py-3 gap-4' key={education.name}>
                                        <Image src={education.image} alt={education.name} width={100} height={100}
                                        className='border rounded-full size-[70px] sm:size-[100px] mx-auto sm:mx-0'
                                        />
                                        <div className='sm:pl-4 pt-2 text-center sm:text-left'>
                                            <h3 className="text-white font-semibold">{education.name}</h3>
                                            <ul className="space-y-1 text-sm text-slate-300">
                                                <li>{education.course}</li>
                                                <li>{education.period}</li>
                                            </ul>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="experience">
                        <Card className="bg-slate-900 border border-slate-800 shadow-lg">                           
                            <CardContent className="p-4">
                                {experiences.map((experience) => (
                                    <div className='flex flex-col sm:flex-row py-3 gap-4' key={experience.name}>
                                        <Image src={experience.image} alt={experience.name} width={100} height={100}
                                            className='border rounded-full size-[70px] sm:size-[100px] mx-auto sm:mx-0 flex-shrink-0'
                                        />
                                        <div className='sm:pl-4 pt-2 text-center sm:text-left w-full overflow-hidden'>
                                            <h2 className="text-white font-semibold">{experience.name}</h2>
                                            <h3 className="text-slate-200 font-semibold">{experience.title}</h3>
                                            <ul className="space-y-1 text-sm text-slate-300">
                                                <li>{experience.period}</li>
                                            </ul>
                                            <ul className="list-disc pl-3 space-y-1 text-sm text-slate-300 w-full">
                                                {experience.accomplishment.map((accomplishment) => (
                                                    <li className='break-words whitespace-normal w-full' key={accomplishment}>{accomplishment}</li>
                                                ))}
                                            </ul>
                                            <div className='py-1 w-full overflow-hidden'>
                                                <ul className='flex flex-wrap items-center gap-2'>
                                                    {experience.tools.map((tool) => (
                                                        <li key={tool.name}
                                                            className='flex justify-center items-center bg-white/10 rounded-xl px-3 py-1 text-gray-200 text-xs sm:text-sm font-semibold gap-1 mb-2'>
                                                            <Image className='object-fit size-4 rounded-full flex-shrink-0' src={tool.icon} alt={tool.name} width={20} height={20} />
                                                            <p className='truncate'>{tool.name}</p>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
            </motion.div>
        </section>
    )
}