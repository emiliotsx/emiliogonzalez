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

type Language = 'es' | 'en'

type Locales = 'en-US' | 'es-ES' | Language

interface Params {
  params: Promise<{ lang: Language }>
}

interface Lang {
  lang: Language
}