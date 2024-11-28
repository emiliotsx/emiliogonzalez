interface Link {
  name: string
  path: string
  icon: string
}

interface SocialMeda {
  url: string
  icon: string
  text?: string
}

interface Project {
  image: string
  title: string
  description: string
  url: string
  tecnologies: string[]
}

interface Experience {
  position: string
  startDate: string
  endDate: string
  company: string
  description: string
}

type VariantIcon = 'small' | 'medium'

type Theme = 'light' | 'dark' | ''