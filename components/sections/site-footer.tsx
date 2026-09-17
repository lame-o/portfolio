'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Button } from '@/components/ui/enhanced-buttons'
import { SpringHover } from '@/components/spring-hover'
import { SOCIAL_LINKS } from '@/lib/links'

const footerLinkClasses =
  'rounded-full hover:bg-transparent hover:text-white text-white/90 duration-150 px-4'

const footerLinks = [
  { label: 'Email', href: SOCIAL_LINKS.email, external: false },
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin, external: true },
  { label: 'GitHub', href: SOCIAL_LINKS.github, external: true },
]

export function SiteFooter() {
  const reduceMotion = useReducedMotion()

  return (
    <footer id="contact" className="py-8 text-center text-white/90 bg-[#785650] relative">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, transform: 'translateY(20px)' }}
          whileInView={
            reduceMotion ? { opacity: 1 } : { opacity: 1, transform: 'translateY(0px)' }
          }
          transition={{ duration: 0.5, delay: 0.4, ease: [0.23, 1, 0.32, 1] }}
          viewport={{ once: true }}
        >
          {footerLinks.map(({ label, href, external }) => (
            <SpringHover key={label}>
              <Button asChild variant="ghost" size="sm" className={footerLinkClasses}>
                <a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
                  {label}
                </a>
              </Button>
            </SpringHover>
          ))}
        </motion.div>
      </div>
    </footer>
  )
}
