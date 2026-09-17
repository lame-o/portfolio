export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com/in/liam-dwight',
  github: 'https://github.com/lame-o',
  email: 'mailto:liamhdwight@gmail.com',
} as const

export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}
