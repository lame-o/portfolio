'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/enhanced-buttons'
import { LiquidGlass } from '@/components/ui/liquid-glass'
import { SpringHover } from '@/components/spring-hover'
import { Github, Linkedin } from '@/components/ui/brand-icons'
import { SOCIAL_LINKS, scrollToSection } from '@/lib/links'

// 150ms, not 300ms: these are seen constantly, and a hover colour change that
// takes a third of a second reads as lag rather than as polish.
const iconButtonClasses =
  'rounded-full text-foreground/70 duration-150 hover:bg-transparent hover:text-foreground'

export function SiteHeader() {
  const router = useRouter()

  // Scroll to the section when it exists on the current page, otherwise go home
  // to it — pages without a footer still need the contact link to work.
  const goToSection = (id: string) => {
    if (document.getElementById(id)) {
      scrollToSection(id)
    } else {
      router.push(`/#${id}`)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] overflow-hidden border-b border-border">
      <div className="relative">
        <LiquidGlass className="h-full w-full rounded-none bg-background/60" />
        <nav className="relative z-10 h-16 container mx-auto px-3 sm:px-6" aria-label="Main">
          <div className="flex h-full items-center gap-1 sm:gap-2">
            <SpringHover>
              <Button asChild variant="ghost" size="icon" className={iconButtonClasses}>
                <a
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
            </SpringHover>
            <SpringHover>
              <Button asChild variant="ghost" size="icon" className={iconButtonClasses}>
                <a
                  href={SOCIAL_LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
            </SpringHover>
            <SpringHover>
              <Button
                variant="ghost"
                size="icon"
                className={iconButtonClasses}
                aria-label="Scroll to contact"
                onClick={() => goToSection('contact')}
              >
                <span className="relative block w-6 h-6">
                  <Image
                    src="/images/profile.webp"
                    alt=""
                    fill
                    className="rounded-full object-cover"
                    sizes="24px"
                  />
                </span>
              </Button>
            </SpringHover>
          </div>
        </nav>
      </div>
    </header>
  )
}
