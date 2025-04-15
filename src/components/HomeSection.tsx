"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { links } from "./Links"
import Link from "next/link"
import { Download } from "lucide-react"

export function HomeSection() {
  return (
    <section id="home" className="container mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          className="pt-8 md:pt-20 md:pl-8 lg:pl-16 text-center md:text-left w-full md:w-3/5"
        >
          <h1 className="inline-block text-lg md:text-xl text-white/80 font-light tracking-wide mb-2 ml-1.5">
            Hi, my name is
          </h1>
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-3">
            Martin
          </h1>
          <div className="space-y-2 mb-8 ml-1.5">
            <p className="text-xl md:text-2xl text-white/90 font-medium ">Junior Software Developer</p>
            <p className="text-lg md:text-xl text-white/70 flex items-center justify-center md:justify-start gap-2">
              <span className="inline-block w-4 h-4 bg-green-400 rounded-full animate-pulse"></span>
              Aarhus, Denmark
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-5 mt-8">
            <a
              href="/CV.pdf"
              download
              className="group flex items-center justify-center gap-3 bg-white text-black font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:bg-white/90 hover:shadow-lg w-full sm:w-auto"
            >
              <span className="text-lg">Download CV</span>
              <Download size={18} className="transition-transform group-hover:translate-y-0.5" />
            </a>
            <div className="flex items-center justify-center gap-5 py-3 px-5 rounded-lg backdrop-blur-sm bg-white/10 border border-white/10 hover:bg-white/15 transition-colors duration-300 mt-4 sm:mt-0 w-full sm:w-auto">
              {links.map((link) => (
                <Link
                  href={link.path}
                  key={link.path}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="transition-transform hover:scale-110 hover:opacity-80"
                >
                  <Image
                    src={link.image || "/placeholder.svg"}
                    alt={link.name}
                    width={32}
                    height={32}
                    className="md:w-8 md:h-8"
                  />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 60, damping: 12 }}
          className="order-first md:order-last pt-10 md:pt-20 mb-10 md:mb-0"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-xl opacity-20 animate-pulse"></div>
            <div className="relative overflow-hidden rounded-full border-4 border-white/10 shadow-2xl">
              <Image
                className="size-[200px] md:size-[280px] lg:size-[320px] object-cover"
                src="/images/Trent.jpg"
                alt="Martin - Software Developer"
                width={320}
                height={320}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
