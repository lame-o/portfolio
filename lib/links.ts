export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/liam-dwight',
  github: 'https://github.com/lame-o',
  email: 'mailto:liamhdwight@gmail.com',
} as const

export type NavItem =
  | { label: string; sectionId: string }
  | { label: string; href: string }

export const NAV_ITEMS: NavItem[] = [
  { label: 'About', sectionId: 'about' },
  // Restore these two when the /blog and /books pages ship — linking to routes
  // that don't exist yet would 404.
  // { label: 'Blog', href: '/blog' },
  // { label: 'Books', href: '/books' },
  { label: 'Contact', sectionId: 'contact' },
]

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
