'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin } from 'lucide-react'
import { Button } from "@/components/ui/enhanced-buttons"
import ShineBorder from "@/components/ui/shine-border"
import MountainParallax from "@/components/ui/mountain-parallax"
import { smoothScroll } from "@/utils/smoothScroll"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8 text-center">
          <div className="w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[250px] md:h-[250px] relative mx-auto">
            <ShineBorder 
              borderRadius={999} 
              borderWidth={5}
              duration={6}
              color={["#b16758", "#f98966", "#ffecd6"]}
              className="!min-h-0 !min-w-0 !p-1 !bg-transparent w-full h-full rounded-full overflow-hidden"
            >
              <div className="w-full h-full relative rounded-full overflow-hidden">
                <Image
                  src="/images/profile.webp"
                  alt="Liam Dwight Profile Photo"
                  fill
                  className="rounded-full object-cover hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
            </ShineBorder>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Liam Dwight
            </h1>
            <p className="mx-auto max-w-[700px] text-zinc-500 md:text-xl dark:text-zinc-400">
              Full Stack Developer & AI Enthusiast
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button onClick={() => smoothScroll('#contact')}>
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </Button>
              <Button variant="outline" asChild>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" /> GitHub
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        <MountainParallax />
      </div>
    </section>
  )
}
