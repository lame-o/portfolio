'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Github, Linkedin } from '@/components/ui/brand-icons'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/enhanced-buttons'
import { LiquidGlass } from '@/components/ui/liquid-glass'
import { SpringHover } from '@/components/spring-hover'
import { NAV_ITEMS, SOCIAL_LINKS, scrollToSection, type NavItem } from '@/lib/links'

// 150ms, not 300ms: nav is hit constantly, and a hover colour change that
// takes a third of a second reads as lag rather than as polish.
const iconButtonClasses =
  'rounded-full text-foreground/70 duration-150 hover:bg-transparent hover:text-foreground'

const navButtonClasses =
  'rounded-full px-2 sm:px-4 text-foreground/70 duration-150 hover:bg-transparent hover:text-foreground'

const mobileNavButtonClasses =
  'justify-start rounded-md text-foreground/70 duration-150 hover:bg-transparent hover:text-foreground'

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
  const router = useRouter()
  const reduceMotion = useReducedMotion()

  // Full transform string rather than Motion's `y` shorthand: the shorthand runs
  // on the main thread and drops frames while the page is still loading.
  // Reduced motion keeps the fade and drops the travel.
  const menuHidden = reduceMotion
    ? { opacity: 0 }
    : { opacity: 0, transform: 'translateY(-8px)' }
  const menuShown = reduceMotion ? { opacity: 1 } : { opacity: 1, transform: 'translateY(0px)' }

  // Scroll to the section when it exists on the current page, otherwise go home to it.
  const goToSection = (id: string) => {
    if (document.getElementById(id)) {
      scrollToSection(id)
    } else {
      router.push(`/#${id}`)
    }
    setIsMobileMenuOpen(false)
  }

  const renderNavItem = (item: NavItem, className: string) =>
    'href' in item ? (
      <Button asChild variant="ghost" size="sm" className={className}>
        <Link href={item.href} onClick={() => setIsMobileMenuOpen(false)}>
          {item.label}
        </Link>
      </Button>
    ) : (
      <Button
        variant="ghost"
        size="sm"
        className={className}
        onClick={() => goToSection(item.sectionId)}
      >
        {item.label}
      </Button>
    )

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] overflow-hidden border-b border-border">
      <div className="relative">
        <LiquidGlass className="h-full w-full rounded-none bg-background/60" />
        <nav className="relative z-10 h-16 container mx-auto px-3 sm:px-6" aria-label="Main">
          <div className="flex h-full items-center justify-between gap-2">
            <div className="flex items-center gap-1 sm:gap-2">
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

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={iconButtonClasses}
                aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(open => !open)}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </Button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-1 sm:gap-4">
              {NAV_ITEMS.map(item => (
                <SpringHover key={item.label}>{renderNavItem(item, navButtonClasses)}</SpringHover>
              ))}
            </div>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={menuHidden}
              animate={menuShown}
              exit={menuHidden}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              className="relative z-10 border-b border-border py-4 px-6 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {NAV_ITEMS.map(item => (
                  <React.Fragment key={item.label}>
                    {renderNavItem(item, mobileNavButtonClasses)}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}
