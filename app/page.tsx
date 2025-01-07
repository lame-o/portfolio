'use client'

import * as React from 'react'
import Image from 'next/image'
import { Mail, Github, Linkedin, Code, Server, Zap, Globe, ArrowUpRight, ArrowRight, ExternalLink, ChevronUp, Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { smoothScroll } from "@/utils/smoothScroll"
import InteractiveHoverButton from "@/components/ui/interactive-hover-button"
import ShineBorder from "@/components/ui/shine-border"
import DotPattern from "@/components/ui/dot-pattern"
import LetterPullup from "@/components/ui/letter-pullup"
import RetroGrid from "@/components/ui/retro-grid"
import { ConfettiButton } from "@/components/ui/confetti"

export default function Home() {
  const projects = [
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen text-zinc-900 antialiased">
      {/* Header / Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-200">
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
      <section id="hero" className="py-20 bg-white relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100 to-transparent" />
          <DotPattern 
            width={25} 
            height={25} 
            cx={2.5} 
            cy={2.5} 
            cr={2.5}
            className="fill-black/[0.05] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]" 
          />
        </div>
        <div className="container mx-auto px-4 relative z-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            <div className="w-[250px] h-[250px] relative mx-auto">
              <ShineBorder 
                borderRadius={999} 
                borderWidth={4}
                duration={11}
                color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                className="!min-h-0 !min-w-0 !p-1 !bg-transparent w-full h-full rounded-full overflow-hidden"
              >
                <div className="w-full h-full relative rounded-full overflow-hidden">
                  <Image
                    src="/images/profile.jpeg"
                    alt="Your Name"
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
                  className="inline-block text-primary"
                  delay={0.075}
                />
              </h1>
              <motion.p 
                className="text-xl md:text-2xl text-foreground max-w-2xl mx-auto"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.span 
                  className="inline-block"
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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 15
              }}
            >
              <InteractiveHoverButton
                text="Let's Connect!"
                onClick={() => smoothScroll('contact')}
                className="bg-white text-primary hover:text-primary-foreground w-48 py-3 text-lg shadow-lg hover:shadow-xl hover:shadow-primary/20"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-zinc-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
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
              <p className="text-lg leading-relaxed text-foreground/90">
                Hello! I'm Liam, a new <span className="font-bold text-primary">UCSD</span> graduate and developer passionate about leveraging AI to build modern web applications. I love combining design with data, and have found myself using <span className="font-bold text-primary">AI</span> to accelerate <span className="font-bold text-primary">user-centered design</span> solutions for complex problems.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                With experience in full stack development and the full product lifecycle (beginning with <span className="font-bold text-primary">user research</span> and problem interviews), I've also been interested in the uses of <a href="https://github.com/lame-o/rag_demo" className="font-bold text-primary hover:underline">RAG</a> and <a href="https://github.com/lame-o/pinecone-movie-test" className="font-bold text-primary hover:underline">Vector Databases</a>. I'm always eager to learn new technologies and improve my <span className="font-bold text-primary">Prompt Engineering</span>, below are some of the tools I'm currently using  to help.
              </p>
              <p className="text-lg leading-relaxed text-foreground/90">
                In my spare time I enjoy climbing 🧗, playing video games 🎮, watching soccer ⚽, and of course annoying my girlfriend's dog 🐶
              </p>
              <div className="flex flex-wrap gap-3">
                {["Next.js", "TypeScript", "Python","v0", "Windsurf", "Vercel", "Pinecone","Supabase"].map((tech, index) => (
                  <Badge 
                    key={index}
                    variant="secondary" 
                    className="bg-primary/15 hover:bg-primary/25 text-primary font-medium px-3 py-1 rounded-full border border-primary/20 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
            
            <div className="relative w-full h-[500px]">
              <motion.div
                initial={{ opacity: 0, x: 20, rotate: 15 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute right-0 top-0 bottom-0 w-[350px] h-[450px]"
              >
                <Image
                  src="/images/professional-photo.jpeg"
                  alt="Professional photo"
                  fill
                  className="object-cover rounded-2xl border-4 border-primary shadow-[0_20px_80px_rgba(8,_112,_184,_0.95)] hover:scale-105 transition-transform duration-300"
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
                  className="object-cover rounded-2xl border-4 border-primary shadow-[0_20px_80px_rgba(8,_112,_184,_0.95)] hover:scale-105 transition-transform duration-300"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Web App Deployments Section */}
      <section id="web-apps" className="py-20 bg-white relative">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100 to-transparent" />
          <DotPattern 
            width={25} 
            height={25} 
            cx={2.5} 
            cy={2.5} 
            cr={2.5}
            className="fill-black/[0.05] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_80%)]" 
          />
        </div>
        <div className="container mx-auto px-6 relative">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
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
            My AI Web Apps
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
                    ${project.title === "PantryPal" ? "bg-[#f0fff4] hover:bg-[#e6ffed] border-[#bae6b3] border-2" : 
                      project.title === "Code4Dummies" ? "bg-[#eee5ff] hover:bg-[#e5dbff] border-[#d4c5ff] border-2" :
                      project.title === "Prompt.ly" ? "bg-[#fffbe6] hover:bg-[#fff7cc] border-[#ffeb99] border-2" :
                      project.title === "AI Image Editor" ? "bg-[#ffe6e6] hover:bg-[#ffd6d6] border-[#ffb3b3] border-2" :
                      project.title === "Water Tracker" ? "bg-[#e6f7ff] hover:bg-[#ccf0ff] border-[#87ceeb] border-2" :
                      project.title === "RAG Demo" || project.title === "Movie Recommender" ? "bg-[#f5f5f5] hover:bg-[#e6e6e6] border-[#cccccc] border-2" :
                      "bg-card"}`}
                >
                  <CardContent className="p-6 flex-grow">
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                      />
                    </div>
                    <h3 className="font-bold text-xl mb-2 text-primary">{project.title}</h3>
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
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-zinc-50">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center"
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
                <Card className="overflow-hidden bg-card h-full flex flex-col transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:bg-accent/5 border-2">
                  <CardContent className="p-6 flex-grow">
                    <h3 className="font-bold text-xl mb-2 text-primary">{project.title}</h3>
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
      <section id="contact" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-zinc-100 to-transparent" />
          <RetroGrid 
            className="w-full h-full scale-150 -translate-y-1/4"
            angle={80}
            cellSize={40}
            opacity={0.2}
            lightLineColor="#000"
            darkLineColor="#000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
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
      </section>

      {/* Scroll to top button */}
      <motion.div
        className="fixed bottom-8 right-20 z-50"
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
          className="rounded-full p-2 bg-white/80 backdrop-blur-sm border-primary text-primary hover:bg-primary/10 hover:ring-2 hover:ring-primary/90 hover:ring-offset-2"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      </motion.div>

      {/* Footer */}
      <footer className="py-8 text-center text-zinc-600 bg-zinc-50 relative">
        <div className="container mx-auto px-6">
          <p className="leading-relaxed">
            &copy; {new Date().getFullYear()} Liam Dwight. Built with{' '}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:text-primary/80 transition-colors">
              Next.js
            </a>
            {' '},{' '}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:text-primary/80 transition-colors">
              Tailwind CSS
            </a>
            {', '}and deployed with{' '}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:text-primary/80 transition-colors">
              Vercel
            </a>
          </p>
        </div>
        <motion.div 
          className="absolute bottom-4 right-4"
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
