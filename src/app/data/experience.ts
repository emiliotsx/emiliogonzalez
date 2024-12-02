export const EXPERIENCES_ES: Experience[] = [
  {
    position: "Desarrollador Web Senior",
    startDate: "2022-03-01",
    endDate: "",
    company: "Grupo Tecun",
    description: "Encargado de desarrollar nuevos modulos y funcionalidades al sistema, responsable del análisis y estimacion del mismo. Brindo apoyo en las integraciones que se realizan en la empresa."
  },
  {
    position: "Desarrollador Web",
    startDate: "2021-09-01",
    endDate: "2022-02-01",
    company: "Autónomo",
    description: "Brindé servicios de mantenimiento a sitios y aplicaciones web, colaborando con distintas empresas y ayudando a comercios pequeños a tener posicionamiento en internet."
  },
  {
    position: "Analista de Soporte Técnico",
    startDate: "2020-10-01",
    endDate: "2021-07-01",
    company: "Osigu",
    description: "Forme parte del equipo de integraciones, ayudando a clientes externos a integrar los servicios de la empresa a través del uso de ddl. Gracias a mis conocimientos en FrontEnd apoyé en el desarrollo de una landing page la cuál ayudo a automatizar los procesos internos y mejorar la productividad."
  },
  {
    position: "Desarrollador Frontend",
    startDate: "2020-02-01",
    endDate: "2020-08-01",
    company: "Corporación Master Group",
    description: "Desarrollé la landing principal de uno de los productos de la empresa, utilizando prismic para que el equipo de marketing tuviese total autonomia en el contenido que se publicaba. Forme parte del equipo encargado de migrar los sistemas de angular 7 a versiones recientes de nuxt, mejorando la experiencia de usuario al momento de utilizarlas."
  },
  {
    position: "Desarrollador de Proyectos",
    startDate: "2018-11-01",
    endDate: "2020-02-01",
    company: "ESTRATEK",
    description: "Encargado del desarrollo, mantenimiento y soporte para los sistemas de clientes externos. Fuí el responsable del desarrollo y mantenimiento de la plataforma principal de la empresa, incluyendo el análisis y estimación de tiempos de entrega."
  }
]

export const EXPERIENCES_EN: Experience[] = [
  {
    position: "Senior Web Developer",
    startDate: "2022-03-01",
    endDate: "",
    company: "Grupo Tecun",
    description: "Responsible for developing new modules and functionalities for the system, including analysis and estimation. Provided support for integrations carried out within the company."
  },
  {
    position: "Web Developer",
    startDate: "2021-09-01",
    endDate: "2022-02-01",
    company: "Freelance",
    description: "Provided maintenance services for websites and web applications, collaborating with different companies and helping small businesses achieve an online presence."
  },
  {
    position: "Technical Support Analyst",
    startDate: "2020-10-01",
    endDate: "2021-07-01",
    company: "Osigu",
    description: "Part of the integrations team, assisting external clients in integrating the company's services using DLL. Leveraging my FrontEnd knowledge, I supported the development of a landing page that helped automate internal processes and improve productivity."
  },
  {
    position: "Frontend Developer",
    startDate: "2020-02-01",
    endDate: "2020-08-01",
    company: "Corporación Master Group",
    description: "Developed the main landing page for one of the company's products, using Prismic to give the marketing team full autonomy over published content. Contributed to the team responsible for migrating systems from Angular 7 to newer versions of Nuxt, enhancing user experience."
  },
  {
    position: "Project Developer",
    startDate: "2018-11-01",
    endDate: "2020-02-01",
    company: "ESTRATEK",
    description: "Responsible for the development, maintenance, and support of external client systems. Took charge of the development and maintenance of the company's main platform, including analysis and delivery time estimation."
  }
]

export const EXPERIENCES: Record<Language, Experience[]> = {
  'es': EXPERIENCES_ES,
  'en': EXPERIENCES_EN
}