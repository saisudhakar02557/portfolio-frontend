import { useMemo, useState } from 'react'
import type { ChangeEvent, FormEvent } from 'react'
import type { LucideIcon } from 'lucide-react'
import {
  ArrowUpRight,
  BriefcaseBusiness,
  Check,
  Code2,
  Copy,
  Cpu,
  Database,
  Download,
  GitBranch,
  GraduationCap,
  Home,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Network,
  Phone,
  Send,
  ServerCog,
  ShieldCheck,
  Sparkles,
  UserRound,
  X,
} from 'lucide-react'
import './App.css'

type SkillGroup = {
  title: string
  icon: LucideIcon
  items: string[]
}

type Project = {
  name: string
  category: string
  summary: string
  stack: string[]
  highlights: string[]
  link?: string | null
}

type Experience = {
  company: string
  role: string
  period: string
  summary: string
  bullets: string[]
}

type ContactForm = {
  name: string
  email: string
  context: string
  message: string
}

const profile = {
  name: 'Venkata Sai Sudhakara Reddy Kurre',
  role: 'Java Full Stack Developer',
  location: 'Overland Park, Kansas',
  email: 'venkata.kurre13@gmail.com',
  phone: '+1 913-208-9972',
  summary:
    'I build practical web applications with Java, Spring Boot, React, MySQL, and MongoDB. My work focuses on clean APIs, maintainable frontend flows, secure user experiences, and reliable database design.',
  availability: 'Open to Java full stack developer roles',
}

const resumeDownloadUrl = ''

const heroSkills = [
  'Java 17',
  'Spring Boot',
  'React.js',
  'TypeScript',
  'MySQL',
  'MongoDB',
  'Spring Data JPA',
  'Hibernate',
  'Node.js',
  'Express.js',
  'JWT',
  'OAuth2',
  'Kafka',
  'Redis',
  'JUnit 5',
  'Mockito',
  'AWS',
  'GCP',
  'DSA',
  'Agile/Scrum',
]

const resumeStats = [
  { value: '2+', label: 'years of software engineering experience' },
  { value: '12', label: 'Java microservices modernized' },
  { value: '50K+', label: 'daily transactions supported' },
  { value: '85%+', label: 'coverage on critical service paths' },
]

const navItems = [
  { label: 'Home', href: '#home', icon: Home },
  { label: 'About', href: '#about', icon: UserRound },
  { label: 'Why Me', href: '#why-hire', icon: Check },
  { label: 'Projects', href: '#projects', icon: Layers3 },
  { label: 'Experience', href: '#experience', icon: BriefcaseBusiness },
  { label: 'Skills', href: '#skills', icon: Code2 },
  { label: 'Contact', href: '#contact', icon: Mail },
]

const hireReasons = [
  {
    title: 'Java + Spring Boot experience',
    icon: ServerCog,
    detail:
      '2+ years building service features, validation logic, database-backed workflows, and maintainable application modules.',
  },
  {
    title: 'Full-stack execution',
    icon: Code2,
    detail:
      'Comfortable connecting React interfaces with REST services, authentication flows, role-based screens, and real user journeys.',
  },
  {
    title: 'Database practical thinking',
    icon: Database,
    detail:
      'Hands-on with MySQL and MongoDB, including indexing, schema design, query tuning, connection pooling, and reporting queries.',
  },
  {
    title: 'Strong DSA foundation',
    icon: Cpu,
    detail:
      'Confident with arrays, strings, trees, graphs, dynamic programming, greedy methods, heaps, and backtracking.',
  },
  {
    title: 'Production mindset',
    icon: ShieldCheck,
    detail:
      'Experience with unit tests, integration tests, defect triage, code reviews, sprint delivery, and stable application behavior.',
  },
  {
    title: 'Client and freelance exposure',
    icon: BriefcaseBusiness,
    detail:
      'Delivered SVR Wealth as a live client website and handled requirements, implementation, revisions, and handoff independently.',
  },
]

const skills: SkillGroup[] = [
  {
    title: 'Backend',
    icon: ServerCog,
    items: ['Java 11', 'Java 17', 'Spring Boot', 'Spring MVC', 'Spring Data JPA', 'Spring Security', 'Hibernate', 'JDBC', 'Node.js', 'Express.js', 'REST APIs', 'JWT', 'OAuth2'],
  },
  {
    title: 'Frontend',
    icon: Code2,
    items: ['React.js', 'Context API', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Responsive UI', 'REST integration', 'JSON', 'XML', 'Vite'],
  },
  {
    title: 'Databases',
    icon: Database,
    items: ['MySQL', 'MongoDB', 'Mongoose', 'Connection pooling', 'Indexing', 'Query optimization', 'Schema design'],
  },
  {
    title: 'DSA & CS',
    icon: Cpu,
    items: ['Arrays', 'Strings', 'Trees', 'Graphs', 'Dynamic Programming', 'Greedy', 'Heaps', 'Backtracking'],
  },
  {
    title: 'Tools',
    icon: ShieldCheck,
    items: ['Git', 'GitHub', 'Maven', 'Postman', 'JIRA', 'IntelliJ IDEA', 'VS Code', 'JUnit 5', 'Mockito', 'Spring Boot Test'],
  },
]

const projects: Project[] = [
  {
    name: 'Farmers Market Platform',
    category: 'Full Stack',
    summary:
      'A full-stack farm-to-customer marketplace designed around real operating workflows for farmers, managers, and admins. The platform supports product onboarding, inventory updates, ZIP-code based discovery, order tracking, reviews, payments, and an AI assistant that helps users navigate marketplace actions.',
    stack: ['React', 'Vite', 'Spring Boot', 'Java', 'MongoDB Atlas', 'JWT', 'Ollama'],
    highlights: [
      'Built separate workflows for Farmer, Manager, and Admin users with protected routes and role-based screens.',
      'Designed product, order, payment, review, and ZIP-code data models for practical marketplace operations.',
      'Added product filtering, image support, order history, status updates, and a guided assistant experience.',
      'Implemented marketplace behavior across 21 REST endpoints and 7 MongoDB collections for a complete academic product build.',
      'Focused on clean request/response contracts so frontend screens stayed predictable while backend validation handled role-specific business rules.',
    ],
    link: null,
  },
  {
    name: 'SVR Wealth',
    category: 'Client Work',
    summary:
      'A live freelance client website for a wealth advisory business, built to communicate trust, services, and contact paths clearly for prospective customers. I handled requirements, page structure, responsive implementation, revision cycles, and delivery with a client-facing mindset.',
    stack: ['Responsive UI', 'JavaScript', 'SEO Structure', 'Client Delivery'],
    highlights: [
      'Created a professional website focused on credibility, service discovery, and quick contact actions.',
      'Improved the page structure for mobile visitors and fast scanning by business users.',
      'Handled requirements, implementation, revisions, and client communication end to end.',
      'Organized content sections so visitors can quickly understand the business, available services, and next steps without unnecessary navigation friction.',
    ],
    link: 'https://www.svrwealth.com/',
  },
  {
    name: 'E-Commerce Platform',
    category: 'Full Stack',
    summary:
      'A full-stack shopping application built around common e-commerce flows, including secure authentication, product browsing, cart management, order processing, and a React storefront designed for clear everyday use. The project connects frontend state, protected APIs, and database-backed order handling.',
    stack: ['React.js', 'Spring Boot', 'MySQL', 'JWT', 'OAuth2', 'AWS EC2', 'AWS S3', 'Maven', 'Git'],
    highlights: [
      'Designed separate application modules for user authentication, product catalog, cart, and order processing.',
      'Built a responsive storefront with role-based access control, paginated product search, and Context API cart state.',
      'Designed secure JWT/OAuth2 login flows and database-backed order handling for a realistic commerce workflow.',
      'Prepared the project structure for cloud hosting with AWS EC2 for the application layer and S3 for static asset storage.',
      'Used Spring Boot service layers and repository patterns to keep controller logic thin and make product/order operations easier to test and maintain.',
    ],
    link: null,
  },
  {
    name: 'Lease Management System',
    category: 'Backend',
    summary:
      'A backend-focused rental operations system for tenants, landlords, and admins, covering property records, lease lifecycle management, rent/payment tracking, and reporting workflows. The API design emphasizes clear ownership rules, validation, and predictable REST behavior.',
    stack: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'REST APIs', 'Postman'],
    highlights: [
      'Implemented role-aware API access for tenant, landlord, and admin actions.',
      'Built Express.js middleware for authentication, authorization, input validation, and ownership checks.',
      'Modeled tenant, property, lease, and payment resources around clear REST conventions.',
      'Used MongoDB aggregation pipelines and indexed queries for faster lease and payment reporting.',
      'Tested request flows in Postman and organized routes/controllers so backend behavior remained easy to inspect and extend.',
    ],
    link: null,
  },
  {
    name: 'Real-Time Pothole Detection',
    category: 'AI / ML',
    summary:
      'A computer vision project that detects road surface damage from image/video input and prepares structured results for maintenance review. The system combines model inference, image processing, and a dashboard-oriented workflow to make detection output easier to inspect.',
    stack: ['Python', 'OpenCV', 'YOLOv5', 'Flask', 'Angular', 'NumPy', 'Pandas'],
    highlights: [
      'Achieved 84% detection accuracy by training YOLOv5 on 5,000+ labeled road images.',
      'Built a Flask inference API and Angular dashboard for real-time visualization.',
      'Structured reporting outputs for automated municipal maintenance review and follow-up.',
      'Used OpenCV preprocessing and organized model results so detections could be reviewed with location, confidence, and visual context.',
    ],
    link: null,
  },
]

const experience: Experience[] = [
  {
    company: 'Accenture',
    role: 'Software Engineer',
    period: 'Sep 2022 - Aug 2024',
    summary:
      'Worked on enterprise healthcare application features using Java, Spring Boot, React, MySQL, and service-oriented backend patterns for a multi-tenant platform serving 15+ enterprise organizations across 3 regions. My work covered API development, UI integration, database optimization, production defect resolution, and modernization of Java service modules.',
    bullets: [
      'Owned end-to-end development of Spring Boot services and React.js features across 40+ bi-weekly agile sprints.',
      'Translated client user stories into production-ready API features, UI flows, validation logic, and database-backed workflows.',
      'Reduced high-volume API response latency to under 200ms across 50,000+ daily transactions through query tuning, connection pooling, and responsive UI rendering.',
      'Improved system performance by 20% while supporting Java 11 to Java 17 modernization across 12 production microservices.',
      'Designed tenant-aware service behavior with Spring profiles and asynchronous processing so client-specific customizations could be handled cleanly.',
      'Reduced MySQL query execution time by 35% and overall database load by 25% through Redis caching, Hibernate lazy loading, indexing, and batch processing.',
      'Wrote unit and integration tests with JUnit, Mockito, and Spring Boot Test for important service paths.',
      'Resolved critical production defects and security issues while keeping delivery predictable across sprint work.',
      'Collaborated with QA, product owners, and senior engineers during sprint planning, defect triage, code reviews, release validation, and post-deployment monitoring.',
      'Improved maintainability by separating controller, service, repository, and validation responsibilities, making backend changes easier to review and extend.',
    ],
  },
  {
    company: 'Freelance Clients',
    role: 'Full Stack Developer',
    period: '2024 - Present',
    summary:
      'Build client-facing websites and application features with a focus on clear UI, responsive design, and maintainable handoff.',
    bullets: [
      'Delivered SVR Wealth as a live client website with business-focused content, responsive layout, and contact actions.',
      'Built academic and client-style applications using React, Spring Boot, MongoDB, MySQL, JWT security, and role-based workflows.',
      'Created clean landing pages, service sections, lead-capture flows, and mobile-friendly layouts for small-business needs.',
      'Managed communication, implementation, revisions, and delivery independently.',
    ],
  },
]

const education = [
  {
    school: 'University of Central Missouri',
    degree: 'M.S. Computer Science',
    period: 'Aug 2024 - May 2026',
    detail: 'GPA 3.8 / 4.0',
  },
  {
    school: 'Jawaharlal Nehru Technological University',
    degree: 'B.Tech Computer Science',
    period: 'May 2018 - Jul 2022',
    detail: 'Computer Science and Engineering',
  },
]

const skillIconUrl =
  'https://skillicons.dev/icons?i=java,spring,react,ts,nodejs,express,mysql,mongodb,redis,kafka,aws,gcp,git,github,postman'

const emptyContactForm: ContactForm = {
  name: '',
  email: '',
  context: '',
  message: '',
}

function App() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [menuOpen, setMenuOpen] = useState(false)
  const [emailCopied, setEmailCopied] = useState(false)
  const [contactForm, setContactForm] = useState<ContactForm>(emptyContactForm)
  const [formMessage, setFormMessage] = useState('')
  const hasResumeLink = Boolean(resumeDownloadUrl)

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  )

  const visibleProjects = useMemo(
    () =>
      activeCategory === 'All'
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory],
  )

  function handleContactChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target
    setContactForm((current) => ({ ...current, [name]: value }))
  }

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${contactForm.name || 'a recruiter'}`)
    const body = encodeURIComponent(
      `Name: ${contactForm.name}\nEmail: ${contactForm.email}\nContext: ${contactForm.context}\n\n${contactForm.message}`,
    )

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
    setFormMessage('Your email app should open with the message ready to send.')
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email)
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <div className="site-shell">
      <button
        className="mobile-menu-button"
        type="button"
        aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
        onClick={() => setMenuOpen((current) => !current)}
      >
        {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
      </button>

      <aside className={menuOpen ? 'sidebar open' : 'sidebar'}>
        <a className="brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="brand-mark">VK</span>
          <span>
            <strong>Venkata</strong>
            <small>Full Stack Developer</small>
          </span>
        </a>

        <nav aria-label="Portfolio navigation">
          {navItems.map((item) => {
            const Icon = item.icon

            return (
              <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
                <Icon size={17} aria-hidden="true" />
                {item.label}
              </a>
            )
          })}
        </nav>

        <div className="sidebar-footer">
          <span>Available for roles</span>
          <strong>Java - React - MySQL</strong>
        </div>
      </aside>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <Sparkles size={16} aria-hidden="true" />
              {profile.availability}
            </p>
            <h1 className="hero-heading">
              <span className="hero-name">{profile.name}</span>
              <span className="hero-title">Java full stack developer focused on reliable web apps.</span>
            </h1>
            <p className="hero-summary">{profile.summary}</p>
            <div className="hero-stat-grid" aria-label="Resume highlights">
              {resumeStats.map((stat) => (
                <article key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </article>
              ))}
            </div>
            <div className="hero-skill-cloud" aria-label="Core technical skills">
              {heroSkills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <div className="hero-actions">
              <a className="button primary" href="#projects">
                View projects
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <a className="button" href={`mailto:${profile.email}`}>
                Contact me
                <Mail size={17} aria-hidden="true" />
              </a>
              {hasResumeLink ? (
                <a className="button resume-button" href={resumeDownloadUrl} target="_blank" rel="noreferrer">
                  Download resume
                  <Download size={17} aria-hidden="true" />
                </a>
              ) : (
                <span className="button resume-button disabled" aria-disabled="true" title="Add your Google Drive resume link in App.tsx">
                  Download resume
                  <Download size={17} aria-hidden="true" />
                </span>
              )}
            </div>
          </div>

          <aside className="profile-board" aria-label="Professional snapshot">
            <div className="board-header">
              <span>Professional Snapshot</span>
              <strong>2026</strong>
            </div>
            <div className="board-card">
              <p>Current Focus</p>
              <h2>Clean full-stack delivery with strong DSA fundamentals</h2>
              <span>Spring Boot services, React interfaces, and practical database design.</span>
            </div>
            <div className="skill-bars" aria-label="Core strengths">
              {[
                ['Java', '92%'],
                ['Spring Boot', '88%'],
                ['React', '86%'],
                ['MySQL', '82%'],
                ['DSA', '90%'],
              ].map(([label, value]) => (
                <div className="skill-bar" key={label}>
                  <div>
                    <span>{label}</span>
                    <strong>{value}</strong>
                  </div>
                  <i style={{ width: value }} />
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="section about-section" id="about" aria-labelledby="about-heading">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2 id="about-heading">I like building applications that are clear to use and easy to maintain.</h2>
          </div>
          <div className="about-grid">
            <article>
              <h3>Engineering approach</h3>
              <p>
                I focus on readable code, clean API contracts, practical database models, and frontend flows that make
                sense for real users. I am strongest when I can connect Spring Boot service logic with a polished React interface.
              </p>
            </article>
            <article>
              <h3>Problem solving</h3>
              <p>
                I am strong in DSA and use that foundation to reason through edge cases, data structures, performance,
                and maintainable implementation choices.
              </p>
            </article>
            <article>
              <h3>Enterprise delivery</h3>
              <p>
                My Accenture experience includes multi-tenant healthcare application work, Java service modernization,
                API tuning, React feature development, defect triage, and team code reviews.
              </p>
            </article>
            <article>
              <h3>Professional interest</h3>
              <p>
                I am looking for Java full stack, backend, and application developer roles where I can contribute to
                product features, API work, and dependable user experiences.
              </p>
            </article>
          </div>
        </section>

        <section className="section why-section" id="why-hire" aria-labelledby="why-heading">
          <div className="section-heading compact">
            <p className="eyebrow">Why hire me</p>
            <h2 id="why-heading">A reliable full-stack developer with practical delivery experience.</h2>
          </div>
          <div className="why-grid">
            {hireReasons.map((reason) => {
              const Icon = reason.icon

              return (
                <article className="why-card" key={reason.title}>
                  <Icon size={22} aria-hidden="true" />
                  <h3>{reason.title}</h3>
                  <p>{reason.detail}</p>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section projects-section" id="projects" aria-labelledby="projects-heading">
          <div className="section-heading compact">
            <p className="eyebrow">Projects</p>
            <h2 id="projects-heading">Selected work and practical builds</h2>
          </div>

          <div className="project-filters" aria-label="Filter projects by category">
            {categories.map((category) => (
              <button
                className={category === activeCategory ? 'active' : ''}
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <article className="project-card" key={project.name}>
                <div className="project-topline">
                  <span>{project.category}</span>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name}`}>
                      <ArrowUpRight size={17} aria-hidden="true" />
                    </a>
                  )}
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="chip-list">
                  {project.stack.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
                <div className="project-actions">
                  {project.link ? (
                    <a className="project-link live" href={project.link} target="_blank" rel="noreferrer">
                      Live link
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </a>
                  ) : (
                    <span className="project-link disabled" aria-disabled="true">
                      Live link coming soon
                      <ArrowUpRight size={15} aria-hidden="true" />
                    </span>
                  )}
                </div>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience" aria-labelledby="experience-heading">
          <div className="section-heading compact">
            <p className="eyebrow">Experience</p>
            <h2 id="experience-heading">Professional and freelance work</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article className="experience-card" key={`${item.company}-${item.period}`}>
                <div className="timeline-dot" aria-hidden="true" />
                <div className="experience-header">
                  <span>{item.period}</span>
                  <h3>{item.role}</h3>
                  <p>{item.company}</p>
                </div>
                <p className="experience-summary">{item.summary}</p>
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section skills-section" id="skills" aria-labelledby="skills-heading">
          <div className="section-heading">
            <p className="eyebrow">Skills</p>
            <h2 id="skills-heading">Technical stack I can speak about confidently</h2>
          </div>
          <img
            className="skill-icons"
            src={skillIconUrl}
            alt="Java, Spring, React, TypeScript, Node.js, Express, MySQL, MongoDB, Redis, Kafka, AWS, Google Cloud, Git, GitHub, and Postman icons"
          />
          <div className="skill-groups">
            {skills.map((group) => {
              const Icon = group.icon

              return (
                <article className="skill-group" key={group.title}>
                  <div className="skill-title">
                    <Icon size={19} aria-hidden="true" />
                    <h3>{group.title}</h3>
                  </div>
                  <div className="chip-list">
                    {group.items.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <section className="section education-section" aria-labelledby="education-heading">
          <div className="section-heading compact">
            <p className="eyebrow">Education</p>
            <h2 id="education-heading">Academic background</h2>
          </div>
          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.school}>
                <GraduationCap size={24} aria-hidden="true" />
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <span>
                  {item.period}
                  {item.detail ? ` | ${item.detail}` : ''}
                </span>
              </article>
            ))}
            <article className="education-card accent-card">
              <Check size={24} aria-hidden="true" />
              <h3>Certification</h3>
              <p>Google Cloud Associate Cloud Engineer</p>
              <span>Completed in 2023</span>
            </article>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="contact-copy">
            <p className="eyebrow">Contact</p>
            <h2 id="contact-heading">Let's talk about Java, React, Spring Boot services, or full-stack roles.</h2>
            <div className="contact-lines">
              <a href={`mailto:${profile.email}`}>
                <Mail size={17} aria-hidden="true" />
                {profile.email}
              </a>
              <button className="copy-button" type="button" onClick={copyEmail}>
                {emailCopied ? <Check size={17} aria-hidden="true" /> : <Copy size={17} aria-hidden="true" />}
                {emailCopied ? 'Copied' : 'Copy email'}
              </button>
              <a href={`tel:${profile.phone.replaceAll(' ', '')}`}>
                <Phone size={17} aria-hidden="true" />
                {profile.phone}
              </a>
              <span>
                <MapPin size={17} aria-hidden="true" />
                {profile.location}
              </span>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/venkata-kurre9132089972/" target="_blank" rel="noreferrer">
                <Network size={18} aria-hidden="true" />
                LinkedIn
              </a>
              <a href="https://github.com/saisudhakar02557/" target="_blank" rel="noreferrer">
                <GitBranch size={18} aria-hidden="true" />
                GitHub
              </a>
              <a href="https://leetcode.com/u/venkatakurre/" target="_blank" rel="noreferrer">
                <Cpu size={18} aria-hidden="true" />
                LeetCode
              </a>
              {hasResumeLink ? (
                <a href={resumeDownloadUrl} target="_blank" rel="noreferrer">
                  <Download size={18} aria-hidden="true" />
                  Resume
                </a>
              ) : (
                <span className="social-disabled" aria-disabled="true" title="Add your Google Drive resume link in App.tsx">
                  <Download size={18} aria-hidden="true" />
                  Resume soon
                </span>
              )}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-heading">
              <Mail size={20} aria-hidden="true" />
              <div>
                <h3>Send a message</h3>
                <p>This form opens your email app with the message prepared.</p>
              </div>
            </div>
            <label>
              Name
              <input name="name" value={contactForm.name} onChange={handleContactChange} required placeholder="Your name" />
            </label>
            <label>
              Email
              <input
                name="email"
                type="email"
                value={contactForm.email}
                onChange={handleContactChange}
                required
                placeholder="you@example.com"
              />
            </label>
            <label>
              Company / context
              <input
                name="context"
                value={contactForm.context}
                onChange={handleContactChange}
                placeholder="Recruiter, client, project, etc."
              />
            </label>
            <label>
              Message
              <textarea
                name="message"
                value={contactForm.message}
                onChange={handleContactChange}
                required
                rows={5}
                placeholder="Tell me what you would like to discuss."
              />
            </label>
            <button className="button primary form-button" type="submit">
              Send message
              <Send size={17} aria-hidden="true" />
            </button>
            {formMessage && <p className="form-status">{formMessage}</p>}
          </form>
        </section>
      </main>
    </div>
  )
}

export default App
