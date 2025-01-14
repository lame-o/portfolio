import Image from 'next/image'
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const projects = [
  {
    title: "Discord Status Badge",
    desc: "Dynamic badge displaying real-time Discord activity status in GitHub READMEs",
    tech: ["Python", "Flask", "Discord API", "Redis", "Gunicorn"],
    url: "https://dcmd-livestatus.onrender.com/discord-status",
    github: "https://github.com/lame-o/dcmd-livestatus",
    image: "/images/discord-status.webp",
    alt: "Discord Status Badge Demo Picture"
  },
  { 
    title: "PantryPal", 
    desc: "AI tool for College students with limited ingredients and cooking experience", 
    tech: ["Next.js", "React", "Node.js", "TypeScript", "Tailwind CSS", "OpenAI API", "JavaScript"], 
    url: "https://pantrypalv2.vercel.app/", 
    github: "https://github.com/lame-o/pantrypalv2",
    image: "/images/pantrypalimg.webp",
    alt: "PantryPal Demo Picture"
  },
  { 
    title: "Code4Dummies", 
    desc: "An AI tool for breaking down and learning given code", 
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API", "JavaScript"], 
    url: "https://code4dummies.vercel.app/", 
    github: "https://github.com/lame-o/code4dummies",
    image: "/images/code4dummiesimg.webp",
    alt: "Code4Dummies Demo Picture"
  },
  { 
    title: "Prompt.ly", 
    desc: "AI tool for editing and improving prompts for other LLMs", 
    tech: ["Next.js", "React", "Tailwind CSS", "TypeScript", "OpenAI API", "JavaScript"]
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Featured Projects
            </h2>
            <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
              Here are some of my recent projects that showcase my skills and interests.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8 mt-8">
          {projects.map((project) => (
            <Card key={project.title} className="group relative overflow-hidden">
              {project.image && (
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt || project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
              )}
              <CardContent className="p-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              {project.url && project.github && (
                <CardFooter className="p-4 flex justify-between">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:underline"
                  >
                    GitHub
                  </a>
                </CardFooter>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
