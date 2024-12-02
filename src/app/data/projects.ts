const PROJECTS_ES: Project[] = [
  {
    image: 'jycwedding',
    title: 'Boda de Jeffrey y Cecilia',
    description: 'Es una landing page la cual se utilizó como invitación y muestra toda la información importante referente a la boda. La misma cuenta con un formulario conectado a una base de datos para poder confirmar la asistencia al evento.',
    url: 'https://jycwedding.com',
    tecnologies: ['next', 'tailwind']
  },
  {
    image: 'kymwedding',
    title: 'Boda de Kevin y Ana Mildred',
    description: 'Invitación online con toda la información de itinerario, lugar del evento y opcion para confirmar asistencia.',
    url: 'https://kymwedding.com',
    tecnologies: ['next', 'tailwind']
  },
  {
    image: 'medinachangwedding',
    title: 'Boda de Steeven y Fernanda',
    description: 'Invitación online con toda la información de itinerario, lugar del evento y galeria de imagenes con informacion de los novios.',
    url: 'https://medinachangwedding.com',
    tecnologies: ['next', 'tailwind']
  }
]

const PROJECTS_EN: Project[] = [
  {
    image: 'jycwedding',
    title: 'Jeffrey and Cecilia\'s Wedding',
    description: 'This is a landing page used as an invitation, showcasing all the important information about the wedding. It includes a form connected to a database to confirm attendance at the event.',
    url: 'https://jycwedding.com',
    tecnologies: ['next', 'tailwind']
  },
  {
    image: 'kymwedding',
    title: 'Kevin and Ana Mildred\'s Wedding',
    description: 'Online invitation with all the information about the itinerary, event location, and an option to confirm attendance.',
    url: 'https://kymwedding.com',
    tecnologies: ['next', 'tailwind']
  },
  {
    image: 'medinachangwedding',
    title: 'Steeven and Fernanda\'s Wedding',
    description: 'Online invitation with all the information about the itinerary, event location, and an image gallery with details about the couple.',
    url: 'https://medinachangwedding.com',
    tecnologies: ['next', 'tailwind']
  }
]

export const PROJECTS: Record<Language, Project[]> = {
  'es': PROJECTS_ES,
  'en': PROJECTS_EN
}