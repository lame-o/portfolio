'use client'

import * as React from 'react'
import Image from 'next/image'
import { Mail, Github, Linkedin, Code, Server, Zap, Globe, ArrowUpRight, ArrowRight, ExternalLink, ChevronUp, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/enhanced-buttons"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { smoothScroll } from "@/utils/smoothScroll"
import InteractiveHoverButton from "@/components/ui/interactive-hover-button"
import ShineBorder from "@/components/ui/shine-border"
import DotPattern from "@/components/ui/dot-pattern"
import LetterPullup from "@/components/ui/letter-pullup"
import RetroGrid from "@/components/ui/retro-grid"
import MountainParallax from "@/components/ui/mountain-parallax"
import { ConfettiButton } from "@/components/ui/confetti"
import SparklesText from "@/components/ui/sparkles-text"

export default function Home() {
  const projects = [
    {
      title: "Discord Status Badge",
      desc: "Dynamic badge displaying real-time Discord activity status in GitHub READMEs",
      tech: ["Python", "Flask", "Discord API", "Redis", "Gunicorn"],
      url: "https://dcmd-livestatus.onrender.com/discord-status",
      github: "https://github.com/lame-o/dcmd-livestatus",
      image: "/images/discord-status.png"
    },
    { 
      title: "PantryPal", 
      desc: "AI tool for College students with limited ingredients and cooking experience", 
      tech: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "OpenAI API", "JavaScript"], 
      url: "https://pantrypalv2.vercel.app/", 
      github: "https://github.com/lame-o/pantrypalv2",
      image: "/images/pantrypalimg.png" 
    },
    { 
      title: "Code4Dummies", 
      desc: "An AI tool for breaking down and learning given code", 
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "JavaScript"], 
      url: "https://code4dummies.vercel.app/", 
      github: "https://github.com/lame-o/code4dummies",
      image: "/images/code4dummiesimg.png" 
    },
    { 
      title: "Prompt.ly", 
      desc: "AI tool for editing and improving prompts for other LLMs", 
      tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "OpenAI API", "JavaScript"], 
      url: "https://prompt-ly.vercel.app/", 
      github: "https://github.com/lame-o/prompt.ly",
      image: "/images/promptimg.png" 
    },
    { 
      title: "AI Image Editor", 
      desc: "Upload an image and receive a stylized version using Dalle 2", 
      tech: ["JavaScript", "Python", "Tailwind CSS", "Flask", "Dalle 2"], 
      url: "https://samurai-transformer.onrender.com", 
      github: "https://github.com/lame-o/samurai-transformer",
      image: "/images/samurai.png" 
    },
    { 
      title: "Water Tracker", 
      desc: "Water intake tracker with database and user auth", 
      tech: ["Supabase", "HTML5", "CSS3", "JavaScript"], 
      url: "https://water-tracker-db.vercel.app/", 
      github: "https://github.com/lame-o/water-tracker-db",
      image: "/images/watertracker.png" 
    },
    { 
      title: "RAG Demo", 
      desc: "RAG chatbot demo", 
      tech: ["Python", "Pinecone", "OpenAI"], 
      url: "https://github.com/lame-o/rag_demo", 
      github: "https://github.com/lame-o/rag_demo",
      image: "/images/ragdemo1.png" 
    },
    { 
      title: "Movie Recommender", 
      desc: "Movie recommender using Pinecone and OpenAI", 
      tech: ["Python", "Pinecone", "OpenAI"], 
      url: "https://github.com/lame-o/pinecone-movie-test", 
      github: "https://github.com/lame-o/pinecone-movie-test",
      image: "/images/movierecommender.png" 
    },
  ]

  const [showScrollTop, setShowScrollTop] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const duration = 2000;
    const startPosition = window.pageYOffset;
    const startTime = performance.now();

    const easeOutQuint = (t: number): number => {
      return 1 - Math.pow(1 - t, 5);
    };

    const scrollAnimation = (currentTime: number): void => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      const run = easeOutQuint(progress);
      const newPosition = startPosition * (1 - run);
      
      window.scrollTo(0, newPosition);

      if (progress < 1) {
        requestAnimationFrame(scrollAnimation);
      }
    };

    requestAnimationFrame(scrollAnimation);
  };

  return (
    <main className="min-h-screen text-zinc-900 antialiased">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-md border-b border-zinc-200">
        <nav className="container mx-auto px-3 sm:px-6 h-16">
          <div className="flex items-center justify-between h-full gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open('https://linkedin.com/in/liam-dwight', '_blank')}
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open('https://github.com/lame-o', '_blank')}
                >
                  <Github className="w-5 h-5" />
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                >
                  CV
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center gap-1 sm:gap-4">
              {['About', 'Web Apps', 'Projects', 'Contact'].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  }}
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-2 sm:px-4"
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase().replace(' ', '-'));
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {item}
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen relative bg-white">
        {/* Mountain Parallax Background */}
        <MountainParallax />
        
        {/* Overlay gradient for better text visibility */}
        <div className="absolute inset-0 bg-white/30" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center space-y-6 sm:space-y-8 -mt-[15vh] sm:-mt-[20vh] md:-mt-[25vh] lg:-mt-[30vh]"
            >
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
                      src="/images/profile.jpeg"
                      alt="Liam Dwight"
                      fill
                      className="rounded-full object-cover hover:scale-105 transition-transform duration-300"
                      priority
                    />
                  </div>
                </ShineBorder>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold">
                  <LetterPullup 
                    words="Liam Dwight"
                    className="inline-block text-white [text-shadow:_0_0_10px_rgba(0,_0,_0,_0.7)]"
                    delay={0.075}
                  />
                </h1>
                <motion.p 
                  className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto font-semibold"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span 
                    className="inline-block text-white [text-shadow:_0_0_10px_rgba(0,_0,_0,_0.7)]"
                    whileHover={{ 
                      y: -2
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 15
                    }}
                  >
                    UCSD grad combining AI and full stack web development.
                  </motion.span>
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: 0.6,
                  type: "spring",
                  stiffness: 400,
                  damping: 15
                }}
                className="flex items-center justify-center gap-4"
              >
                <Button
                  effect="gooeyRight"
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  className="w-12 h-12 rounded-full bg-white text-primary hover:text-primary-foreground shadow-md hover:shadow-primary/10 font-bold"
                >
                  CV
                </Button>
                <InteractiveHoverButton
                  text="Let's Connect!"
                  onClick={() => smoothScroll('contact')}
                  className="bg-white text-primary hover:text-primary-foreground w-48 py-3 text-lg shadow-md hover:shadow-primary/10"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 bg-[#785650] relative z-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center [text-shadow:_0_0_10px_rgba(0,_0,_0,_0.7)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10
            }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-white/90">
                Hello! I'm Liam, a new <span className="font-bold text-[#ffecd6]">UCSD</span> graduate and developer passionate about leveraging AI to build modern web applications. I love combining design with data, and have found myself using <span className="font-bold text-[#ffecd6]">AI</span> to accelerate <span className="font-bold text-[#ffecd6]">user-centered design</span> solutions for complex problems.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                With experience in full stack development and the full product lifecycle (beginning with <span className="font-bold text-[#ffecd6]">user research</span> and problem interviews), I've also been interested in the uses of <a href="https://github.com/lame-o/rag_demo" className="font-bold text-[#ffecd6] hover:underline">RAG</a> and <a href="https://github.com/lame-o/pinecone-movie-test" className="font-bold text-[#ffecd6] hover:underline">Vector Databases</a>. I'm always eager to learn new technologies and improve my <span className="font-bold text-[#ffecd6]">Prompt Engineering</span>, below are some of the tools I'm currently using  to help.
              </p>
              <p className="text-lg leading-relaxed text-white/90">
                In my spare time I enjoy climbing 🧗, playing video games 🎮, watching soccer ⚽, and of course annoying my girlfriend's dog 🐶
              </p>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "TypeScript", "Python","v0", "Windsurf", "Vercel", "Pinecone","Supabase"].map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="bg-[#ffecd6]/15 hover:bg-[#ffecd6]/25 text-[#ffecd6] font-medium px-3 py-1 rounded-full border border-[#ffecd6]/20 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
            
            <div className="relative w-full h-[450px]">
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute right-0 -top-10 bottom-0 w-[350px] h-[450px]"
              >
                <Image
                  src="/images/professional-photo.jpeg"
                  alt="Professional photo"
                  fill
                  className="object-cover rounded-2xl border-4 border-[#ffecd6] shadow-[0_20px_80px_rgba(120,_86,_80,_0.95)] hover:scale-105 transition-transform duration-300"
                  priority
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20, rotate: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute right-[40%] bottom-0 w-[300px] h-[400px]"
              >
                <Image
                  src="/images/casual-photo.png"
                  alt="Casual photo"
                  fill
                  className="object-cover rounded-2xl border-4 border-[#ffecd6] shadow-[0_20px_80px_rgba(120,_86,_80,_0.95)] hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Web App Deployments Section */}
      <section id="web-apps" className="pt-20 pb-20 bg-[#ffecd6] relative">
        <svg
          className="absolute -top-16 left-0 w-full h-32 z-[60]"
          transform="rotate(180 0 0)"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="m0 12.949 15.625 2.167 15.625-2.771 15.625 2.262 15.625-2.14 15.625 2.5 15.625-1.692 15.625 2.842L125 19.11l15.625.579 15.625-1.353 15.625-.78L187.5 15.87l15.625.97 15.625.778 15.625-1.066L250 15.73l15.625-.958 15.625 1.172 15.625.317 15.625.619 15.625 1.128 15.625-.816 15.625-.506 15.625-.28 15.625 2.61 15.625-1.34 15.625-2.189 15.625-.432 15.625 1.397 15.625 1.894 15.625 2.33L500 21.36l15.625 1.978 15.625.73 15.625-.149 15.625-3.26 15.625.435 15.625-3.742 15.625-3.253L625 13.397l15.625 1.75 15.625-1.763 15.625.877 15.625-1.163 15.625 1.222 15.625.62 15.625-.331L750 13.502l15.625 1.324 15.625-3.165 15.625-.224 15.625 3.736 15.625-.708 15.625 2.355 15.625-3.077L875 15.905l15.625.578 15.625-.986 15.625 2.864 15.625 1.616 15.625.402 15.625-1.806 15.625-1.56 15.625.935 15.625-1.22 15.625 1.51 15.625-.803 15.625-2.54 15.625-1.556 15.625 1.924 15.625.84L1125 17.295l15.625 2.739 15.625.817 15.625 3.228 15.625-1.718 15.625 1.394 15.625.156 15.625.667 15.625.47 15.625 2.54 15.625.263 15.625.747 15.625-2.835 15.625-1.6 15.625 3.09 15.625 1.186L1375 25.522l15.625-1.39 15.625 1.012 15.625-1.074 15.625 4.11 15.625-.47 15.625 2.124 15.625-3.258 15.625-.413 15.625-3.536 15.625 1.667 15.625-2.64 15.625 1.683 15.625-.08 15.625 1.548 15.625-1.768L1625 21.515l15.625.155 15.625 3.406 15.625 1.617 15.625-1.5 15.625-1.239 15.625 2.785 15.625-4.017 15.625.105 15.625-.67 15.625 4.32 15.625-1.316 15.625-1.28 15.625-2.463 15.625-.507 15.625-.395 15.625.825 15.625-1.367 15.625-.264 15.625.65 15.625 2.882 15.625-4.258 15.625.917 15.625.212 15.625 2.48V50H0Z"
            fill="#785650"
          />
        </svg>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffecd6] via-#ffecd6 to-[#ffecd6]" />
          <DotPattern 
            width={25} 
            height={25} 
            cx={2.5} 
            cy={2.5} 
            cr={2.5}
            className="fill-black/[0.05] [mask-image:radial-gradient(ellipse_at_center,#ffecd6_20%,#785650_80%)]" 
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center [text-shadow:_0_0_10px_rgba(0,_0,_0,_1.5)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10
            }}
            viewport={{ once: true }}
          >
            My Web Apps
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card 
                  className={`overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-accent/5 border-2
                    ${project.title === "Discord Status Badge" ? "bg-[#e6e9ff] hover:bg-[#d9deff] border-[#7289da] border-2" :
                      project.title === "PantryPal" ? "bg-[#f0fff4] hover:bg-[#e6ffed] border-[#cccccc] border-2" : 
                      project.title === "Code4Dummies" ? "bg-[#eee5ff] hover:bg-[#e5dbff] border-[#cccccc] border-2" :
                      project.title === "Prompt.ly" ? "bg-[#fffbe6] hover:bg-[#fff7cc] border-[#cccccc] border-2" :
                      project.title === "AI Image Editor" ? "bg-[#ffe6e6] hover:bg-[#ffd6d6] border-[#cccccc] border-2" :
                      project.title === "Water Tracker" ? "bg-[#e6f7ff] hover:bg-[#ccf0ff] border-[#cccccc] border-2" :
                      project.title === "RAG Demo" || project.title === "Movie Recommender" ? "bg-[#f5f5f5] hover:bg-[#e6e6e6] border-[#cccccc] border-2" :
                      "bg-card"}`}
                >
                  <CardContent className="p-6 flex-grow">
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="contain"
                        className="bg-background"
                      />
                    </div>
                    {project.title === "Discord Status Badge" ? (
                      <SparklesText text="Discord Status Badge" className="font-bold text-lg md:text-xl mb-2 text-primary" sparklesCount={4} />
                    ) : (
                      <h3 className="font-bold text-lg md:text-xl mb-2 text-primary">{project.title}</h3>
                    )}
                    <p className="text-foreground mb-4 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, index) => (
                        <Badge 
                          key={index}
                          variant="secondary" 
                          className="bg-primary/15 hover:bg-primary/25 text-primary font-medium px-3 py-1 rounded-full border border-primary/20 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex gap-2 w-full">
                      {project.github && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                          }}
                          className="w-full"
                        >
                          <Button
                            asChild
                            variant="outline"
                            className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full border-primary/20"
                          >
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                              <Github className="w-4 h-4 mr-2" />
                              GitHub
                            </a>
                          </Button>
                        </motion.div>
                      )}
                      {project.url && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                          }}
                          className="w-full"
                        >
                          <Button
                            asChild
                            variant="outline"
                            className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full border-primary/20"
                          >
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center whitespace-nowrap">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Project
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        <svg
          className="absolute -bottom-16 left-0 w-full h-32 z-[60]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="m0 16.303 15.625-1.713 15.625 2.018 15.625-.716L62.5 16.975l15.625 1.067 15.625-.348 15.625-1.215 15.625.983 15.625 3.11 15.625.385 15.625.998 15.625-3.892 15.625.487 15.625-1.045 15.625-.889L250 20.656l15.625-.012 15.625 3.413 15.625 1.987 15.625-2.712 15.625.985 15.625 2.39 15.625-.394L375 26.78l15.625-1.067 15.625 3.775 15.625-.124 15.625-3.014 15.625.225 15.625-3.118 15.625 1.598L500 24.841l15.625-2.593 15.625 1.768 15.625.651 15.625-2.523 15.625-.191L593.75 24.4l15.625 2.643L625 25.808l15.625-.899 15.625 3.26 15.625-3.732 15.625-.147 15.625 1.39 15.625 1.138 15.625.024L750 30.808l15.625-1.79 15.625.66 15.625 1.709 15.625-1.863 15.625-1.004 15.625 2.473 15.625-2.806L875 30.559l15.625 1.509 15.625 1.207 15.625-.966 15.625.932 15.625 1.497 15.625-1.402 15.625 2.124L1000 32.956l15.625 2.204 15.625-2.396 15.625 3.706 15.625-1.206 15.625.844 15.625-3.38 15.625-1.544 15.625-.865 15.625.106 15.625-2.827 15.625.273 15.625-.626 15.625-.289 15.625.708 15.625 3.464 15.625-.1 15.625.364 15.625.182 15.625 1.695 15.625.971 15.625-1.278 15.625 1.134 15.625-3.905L1375 30.5l15.625-1.239 15.625 2.276 15.625.647 15.625-2.87 15.625-2.093 15.625 1.805 15.625.186 15.625.28 15.625 3.187 15.625-.888 15.625-1.543 15.625 1.426 15.625-1.47 15.625-1.647 15.625.757L1625 28.3l15.625-1.533 15.625-2.518 15.625 2.225 15.625-1.949 15.625-.774 15.625 4.178 15.625 1.865 15.625-.928 15.625-1.366 15.625-2.431 15.625.944 15.625.287 15.625.643 15.625-1.321 15.625 2.81 15.625.798 15.625.406 15.625-.555 15.625 2.16 15.625-2.625 15.625 1.312 15.625 2.342 15.625-1.765L2000 31.975V50H0Z"
            fill="#785650"
          />
        </svg>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 pt-8 bg-[#785650] relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-12 text-center [text-shadow:_0_0_10px_rgba(0,_0,_0,_0.7)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10
            }}
            viewport={{ once: true }}
          >
            My Projects
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: " 🎵 Optimizing & Predicting Setlists ", 
                desc: "Completed end-to-end data processing, including web scraping with BeautifulSoup, full data wrangling, and integrating music features via the Spotify API. Conducted descriptive and exploratory data analysis using pandas, Seaborn, and VADER for sentiment analysis. Developed inferential and predictive models using KNN to simulate setlist optimization.", 
                tech: "Python, Pandas, Seaborn",
                url: "http://tinyurl.com/Group10-FinalReport" // Replace with your actual URL
              },
              { 
                title: " 📊 LiveDataViz ", 
                desc: "Group design project focused on enhancing data visualization tools for collaborative and live presentation settings using AI. Developed and refined interactive wireframes and sketches over several months, leveraging user-centered design principles. Delivered a fully functional Figma prototype showcasing improved interaction techniques, such as real-time synchronization, data annotation, and collaborative workflows.", 
                tech: "Figma",
                url: "https://tinyurl.com/LiveDataViz" // Replace with your actual URL
              },
              { 
                title: " 🍃 Aromacovery ", 
                desc: "Full product development for sleeping pod experience, beginning with user & problem research, prototype & wireframe iteration, usability testing, and Figma UI/UX design. Created high-fidelity prototypes for the physical pod and interface showcasing all possible user flows.", 
                tech: "Figma, Sketch, Inkscape",
                url: "http://tinyurl.com/Aromacovery" // Replace with your actual URL
              },
            ].map((project, i)=> (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-card h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-zinc-50 border-2">
                  <CardContent className="p-6 flex-grow">
                    <h3 className="font-bold text-lg md:text-xl mb-2 text-primary">{project.title}</h3>
                    <p className="text-foreground mb-4 leading-relaxed">{project.desc}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.split(', ').map((tech, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="bg-primary/15 hover:bg-primary/25 text-primary font-medium px-3 py-1 rounded-full border border-primary/20 transition-all duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <div className="flex gap-2 w-full">
                      {project.url && (
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 10
                          }}
                          className="w-full"
                        >
                          <Button
                            asChild
                            variant="outline"
                            className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-full border-primary/20"
                          >
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center whitespace-nowrap">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              View Project
                            </a>
                          </Button>
                        </motion.div>
                      )}
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-28 pt-32 bg-[#ffecd6] relative overflow-hidden">
        <svg
          className="absolute -top-16 left-0 w-full h-32 z-[60]"
          transform="rotate(180 0 0)"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="m0 12.949 15.625 2.167 15.625-2.771 15.625 2.262 15.625-2.14 15.625 2.5 15.625-1.692 15.625 2.842L125 19.11l15.625.579 15.625-1.353 15.625-.78L187.5 15.87l15.625.97 15.625.778 15.625-1.066L250 15.73l15.625-.958 15.625 1.172 15.625.317 15.625.619 15.625 1.128 15.625-.816 15.625-.506 15.625-.28 15.625 2.61 15.625-1.34 15.625-2.189 15.625-.432 15.625 1.397 15.625 1.894 15.625 2.33L500 21.36l15.625 1.978 15.625.73 15.625-.149 15.625-3.26 15.625.435 15.625-3.742 15.625-3.253L625 13.397l15.625 1.75 15.625-1.763 15.625.877 15.625-1.163 15.625 1.222 15.625.62 15.625-.331L750 13.502l15.625 1.324 15.625-3.165 15.625-.224 15.625 3.736 15.625-.708 15.625 2.355 15.625-3.077L875 15.905l15.625.578 15.625-.986 15.625 2.864 15.625 1.616 15.625.402 15.625-1.806 15.625-1.56 15.625.935 15.625-1.22 15.625 1.51 15.625-.803 15.625-2.54 15.625-1.556 15.625 1.924 15.625.84L1125 17.295l15.625 2.739 15.625.817 15.625 3.228 15.625-1.718 15.625 1.394 15.625.156 15.625.667 15.625.47 15.625 2.54 15.625.263 15.625.747 15.625-2.835 15.625-1.6 15.625 3.09 15.625 1.186L1375 25.522l15.625-1.39 15.625 1.012 15.625-1.074 15.625 4.11 15.625-.47 15.625 2.124 15.625-3.258 15.625-.413 15.625-3.536 15.625 1.667 15.625-2.64 15.625 1.683 15.625-.08 15.625 1.548 15.625-1.768L1625 21.515l15.625.155 15.625 3.406 15.625 1.617 15.625-1.5 15.625-1.239 15.625 2.785 15.625-4.017 15.625.105 15.625-.67 15.625 4.32 15.625-1.316 15.625-1.28 15.625-2.463 15.625-.507 15.625-.395 15.625.825 15.625-1.367 15.625-.264 15.625.65 15.625 2.882 15.625-4.258 15.625.917 15.625.212 15.625 2.48V50H0Z"
            fill="#785650"
          />
        </svg>
        <div className="absolute inset-0 pointer-events-none">
          <RetroGrid 
            className="absolute h-full w-full"
            angle={80}
            cellSize={40}
            opacity={0.3}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#ffecd6] via-transparent to-[#ffecd6]" />
        </div>
        <div className="container mx-auto px-6 text-center relative">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 10
            }}
            viewport={{ once: true }}
          >
            Find Me Here!
          </motion.h2>
          <motion.p 
            className="text-xl text-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Interested in collaborating or have a position that might be a good fit? I'd love to hear from you!
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button
              asChild
              variant="outline"
              className="bg-white-900/50 border-primary text-primary hover:ring-2 hover:ring-primary/90 hover:ring-offset-2 transition-all duration-300 rounded-full text-lg px-6 py-2"
            >
              <a href="mailto:liamhdwight@gmail.com" className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
            <Button
              variant="outline"
              className="bg-zwhite-900/50 border-primary text-primary hover:ring-2 hover:ring-primary/90 hover:ring-offset-2 transition-all duration-300 rounded-full text-lg px-6 py-2"
              onClick={() => window.open('https://linkedin.com/in/liam-dwight', '_blank')}
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              className="bg-white-900/50 border-primary text-primary hover:ring-2 hover:ring-primary/90 hover:ring-offset-2 transition-all duration-300 rounded-full text-lg px-6 py-2"
              onClick={() => window.open('https://github.com/lame-o', '_blank')}
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
          </motion.div>
        </div>
        <svg
          className="absolute -bottom-16 left-0 w-full h-32 z-[60]"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
        >
          <path
            d="m0 16.303 15.625-1.713 15.625 2.018 15.625-.716L62.5 16.975l15.625 1.067 15.625-.348 15.625-1.215 15.625.983 15.625 3.11 15.625.385 15.625.998 15.625-3.892 15.625.487 15.625-1.045 15.625-.889L250 20.656l15.625-.012 15.625 3.413 15.625 1.987 15.625-2.712 15.625.985 15.625 2.39 15.625-.394L375 26.78l15.625-1.067 15.625 3.775 15.625-.124 15.625-3.014 15.625.225 15.625-3.118 15.625 1.598L500 24.841l15.625-2.593 15.625 1.768 15.625.651 15.625-2.523 15.625-.191L593.75 24.4l15.625 2.643L625 25.808l15.625-.899 15.625 3.26 15.625-3.732 15.625-.147 15.625 1.39 15.625 1.138 15.625.024L750 30.808l15.625-1.79 15.625.66 15.625 1.709 15.625-1.863 15.625-1.004 15.625 2.473 15.625-2.806L875 30.559l15.625 1.509 15.625 1.207 15.625-.966 15.625.932 15.625 1.497 15.625-1.402 15.625 2.124L1000 32.956l15.625 2.204 15.625-2.396 15.625 3.706 15.625-1.206 15.625.844 15.625-3.38 15.625-1.544 15.625-.865 15.625.106 15.625-2.827 15.625.273 15.625-.626 15.625-.289 15.625.708 15.625 3.464 15.625-.1 15.625.364 15.625.182 15.625 1.695 15.625.971 15.625-1.278 15.625 1.134 15.625-3.905L1375 30.5l15.625-1.239 15.625 2.276 15.625.647 15.625-2.87 15.625-2.093 15.625 1.805 15.625.186 15.625.28 15.625 3.187 15.625-.888 15.625-1.543 15.625 1.426 15.625-1.47 15.625-1.647 15.625.757L1625 28.3l15.625-1.533 15.625-2.518 15.625 2.225 15.625-1.949 15.625-.774 15.625 4.178 15.625 1.865 15.625-.928 15.625-1.366 15.625-2.431 15.625.944 15.625.287 15.625.643 15.625-1.321 15.625 2.81 15.625.798 15.625.406 15.625-.555 15.625 2.16 15.625-2.625 15.625 1.312 15.625 2.342 15.625-1.765L2000 31.975V50H0Z"
            fill="#785650"
          />
        </svg>
      </section>

      {/* Scroll to top button */}
      <motion.div
        className="fixed bottom-8 right-20 z-[70]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0.8,
          pointerEvents: showScrollTop ? 'auto' : 'none'
        }}
        transition={{ duration: 0.2 }}
      >
        <Button
          variant="outline"
          size="icon"
          className="rounded-full p-2 bg-white/80 backdrop-blur-sm border-primary text-primary hover:bg-primary/10 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2 "
          onClick={scrollToTop}
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </motion.div>

      {/* Footer */}
      <footer className="py-8 text-center text-white/90 bg-[#785650] relative">
        <div className="container mx-auto px-6">
          <p className="leading-relaxed">
            &copy; {new Date().getFullYear()} Liam Dwight. Built with{' '}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="font-medium text-[#ffecd6] hover:text-[#ffecd6]/80 transition-colors">
              Next.js
            </a>
            {' '},{' '}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[#ffecd6] hover:text-[#ffecd6]/80 transition-colors">
              Tailwind CSS
            </a>
            {', '}and deployed with{' '}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="font-medium text-[#ffecd6] hover:text-[#ffecd6]/80 transition-colors">
              Vercel
            </a>
          </p>
        </div>
        <motion.div 
          className="absolute bottom-4 right-4 z-[70]"
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="inline-block"
            transition={{ duration: 0.2 }}
          >
            <ConfettiButton
              className="bg-transparent hover:bg-transparent p-0 border-none shadow-none"
              options={{
                spread: 360,
                ticks: 100,
                gravity: 0.5,
                decay: 0.94,
                startVelocity: 30,
                particleCount: 100,
                scalar: 1
              }}
            >
              <Image
                src="/images/gifs/dancing-cat.gif"
                alt="Dancing Cat"
                width={60}
                height={60}
                className="rounded-full hover:scale-110 transition-transform duration-200"
              />
            </ConfettiButton>
          </motion.div>
        </motion.div>
      </footer>
      <style jsx>{`
        .interactive-text span {
          display: inline-block;
        }
        .interactive-text span:hover {
          transform: scale(1.05);
        }
      `}</style>
    </main>
  )
}
