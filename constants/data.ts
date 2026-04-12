export const SOCIALS = [
  { icon: 'mdi:github', name: 'Github', url: 'https://github.com/quoc-trang' },
  {
    icon: 'radix-icons:linkedin-logo',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/quoctrang2701/',
  },
]

export const FULLSTACK_PROJECTS = [
  {
    name: 'Takenotes App',
    description: 'A personal full-stack project to practice architecture, API development, CI/CD, and Cloud Integration.',
    tech: ['Nuxt.js', 'TailwindCSS', 'Node.js', 'PostgreSQL', 'Prisma', 'Google Cloud', 'Docker', 'CI/CD'],
    url: 'https://takenotes-frontend-619846684958.asia-southeast1.run.app',
    github_fe: 'https://github.com/quoc-trang/takenotes-frontend',
    github_be: 'https://github.com/quoc-trang/takenotes-backend',
    features: [
      'Full-stack architecture with Nuxt.js (frontend) and Node.js/Express (backend)',
      'RESTful APIs for authentication and notes CRUD with validation',
      'Google Cloud integration: Storage (Images), Cloud Run (App), Cloud SQL (PG)',
      'JWT-based authentication and protected routes',
      'CI/CD pipeline with GitHub Actions',
    ],
  },
]

export const LANDING_PAGES = [
  {
    name: 'SaaS Platform Landing Page',
    url: 'https://quoc-trang.github.io/landing-page-collection/01-saas-platform/index.html',
  },
  {
    name: 'Mobile App Launch',
    url: 'https://quoc-trang.github.io/landing-page-collection/02-mobile-app-launch/index.html',
  },
  {
    name: 'Local Café',
    url: 'https://quoc-trang.github.io/landing-page-collection/03-local-cafe/index.html',
  },
  {
    name: 'Personal Portfolio Design',
    url: 'https://quoc-trang.github.io/landing-page-collection/04-personal-portfolio/index.html',
  },
  {
    name: 'Tech Conference Event',
    url: 'https://quoc-trang.github.io/landing-page-collection/05-tech-conference/index.html',
  },
  {
    name: 'E-Book Sales Page',
    url: 'https://quoc-trang.github.io/landing-page-collection/06-ebook-sales/index.html',
  },
  {
    name: 'Luxury Real Estate',
    url: 'https://quoc-trang.github.io/landing-page-collection/07-luxury-real-estate/index.html',
  },
  {
    name: 'Newsletter Signup',
    url: 'https://quoc-trang.github.io/landing-page-collection/08-newsletter-signup/index.html',
  },
  {
    name: 'Charity Campaign',
    url: 'https://quoc-trang.github.io/landing-page-collection/09-charity-campaign/index.html',
  },
  {
    name: 'Retro Cyberpunk Terminal',
    url: 'https://quoc-trang.github.io/landing-page-collection/10-retro-cyberpunk/index.html',
  },
]

/** ISO date YYYY-MM-DD; sort and display use issuedAt. expiresAt only when the issuer provides one. */
export const CERTIFICATIONS = [
  {
    name: 'Associate Cloud Engineer',
    organization: 'Google Cloud',
    issuedAt: '2026-01-09',
    expiresAt: '2029-01-09',
    url: 'https://www.credly.com/badges/0cc63d86-b019-48f3-92b5-8b740e6c297c/linked_in_profile',
    logo: 'logos:google-cloud',
  },
  {
    name: 'Certified LeSS Practitioner',
    organization: 'LeSS (Large-Scale Scrum)',
    issuedAt: '2025-05-30',
    url: 'https://less.works/certificates/quoc-trang-le-71590666232.pdf',
    logo: 'simple-icons:scrumalliance',
  },
  {
    name: 'Certified Vue.js Developer',
    organization: 'Vue School',
    issuedAt: '2024-05-30',
    url: 'https://api.certificates.dev/certificates/9c2ac75a-5a85-46ab-beaf-679ec47225e2/download?signature=c8182a70ea96efde9adffad4232d41b9b8fad1a18b42eccdc1c9f9f360a6c043',
    logo: 'logos:vue',
  },
]
