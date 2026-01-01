import { useEffect, useMemo, useState } from 'react'

const navItems = [
  { key: 'about', en: 'About', es: 'Sobre mi' },
  { key: 'experience', en: 'Experience', es: 'Experiencia' },
  { key: 'certifications', en: 'Certifications', es: 'Certificaciones' },
  { key: 'projects', en: 'Projects', es: 'Proyectos' },
  { key: 'contact', en: 'Contact', es: 'Contacto' },
]

const content = {
  en: {
    heroTag: 'Cybersecurity + Web Development',
    heroIntro:
      'Building secure, high-performance web experiences with a defender mindset.',
    bio: `Canadian scholarship student in Mexico studying Computer Systems & IT Engineering.
I love cybersecurity, web development, music, and video games. Currently learning Chinese, with basic proficiency in Japanese, French, and German.`,
    focus: ['Web App Security', 'Threat Visibility', 'API Engineering', 'Cloud'],
    experience: [
      {
        role: 'ICT Intern',
        company: 'Huawei',
        dates: 'Oct 2025 - Present',
        bullets: [
          'Gathered customer requirements and translated them into technical proposals, diagrams, and BOMs for enterprise/network projects.',
          'Assisted demos and POCs with internal teams to validate feasibility, performance, and implementation steps.',
          'Tracked opportunities and documentation (RFP/RFI responses, notes, follow-ups) to keep sales and engineering aligned.',
        ],
      },
      {
        role: 'Technology Risk Intern',
        company: 'Qualitas Insurance Company',
        dates: 'Apr 2025 - Oct 2025',
        bullets: [
          'Monitored security logs (SIEM) to detect anomalies, support investigations, and escalate incidents.',
          'Performed authorized reconnaissance and exposure assessments; documented findings, risk, and remediation.',
          'Produced executive-ready security reports and dashboards for leadership and board-level briefings.',
        ],
      },
    ],
    certs: [
      'CC (Certified in Cybersecurity) - ISC2 - 2025',
      'Security+ - CompTIA - 2025',
      'AWS Academy Cloud Developing - AWS - 2025',
      'Network Security - CISCO - 2024',
      'CCNA: Switching, Routing, and Wireless Essentials - CISCO - 2023',
    ],
    projects: [
      {
        name: 'NPM Team at Banorte Bank',
        featured: true,
        description:
          'Built a pipeline to classify and index relevant news, identifying patterns in positive vs. negative reports and their effects on inflation.',
        stack: ['Regex', 'n8n', 'Automation'],
      },
      {
        name: 'Sustainable Energy Dashboard at S2G Energy',
        featured: false,
        description:
          'Implemented FastAPI endpoints and collaborated on the front end to track water, gas, and energy consumption in one dashboard.',
        stack: ['FastAPI', 'Python', 'Full Stack'],
      },
    ],
    contactTitle: 'Signal',
    contactCta:
      'Open to security, web development, and research collaboration.',
  },
  es: {
    heroTag: 'Ciberseguridad + Desarrollo Web',
    heroIntro:
      'Construyo experiencias web seguras y de alto rendimiento con mentalidad defensiva.',
    bio: `Canadiense becada en Mexico, estudiante de Ingenieria en Sistemas Computacionales y TI.
Me encanta la ciberseguridad, el desarrollo web, la musica y los videojuegos. Estudio chino y tengo nivel basico de japones, frances y aleman.`,
    focus: [
      'Seguridad Web',
      'Visibilidad de Amenazas',
      'Ingenieria de APIs',
      'Cloud',
    ],
    experience: [
      {
        role: 'Becaria de ICT',
        company: 'Huawei',
        dates: 'Oct 2025 - Presente',
        bullets: [
          'Recolecte requisitos de clientes y los traduje a propuestas tecnicas, diagramas y BOMs para proyectos enterprise/red.',
          'Apoye demos y POCs con equipos internos para validar factibilidad, rendimiento y pasos de implementacion.',
          'Di seguimiento a oportunidades y documentacion (RFP/RFI, notas, seguimientos) para alinear ventas e ingenieria.',
        ],
      },
      {
        role: 'Becaria de Riesgo Tecnologico',
        company: 'Qualitas Insurance Company',
        dates: 'Abr 2025 - Oct 2025',
        bullets: [
          'Monitoree logs de seguridad (SIEM) para detectar anomalias y escalar incidentes.',
          'Realice reconocimiento autorizado y evaluaciones de exposicion; documente hallazgos, riesgo y remediacion.',
          'Elabore reportes y dashboards ejecutivos para liderazgo y comite directivo.',
        ],
      },
    ],
    certs: [
      'CC (Certified in Cybersecurity) - ISC2 - 2025',
      'Security+ - CompTIA - 2025',
      'AWS Academy Cloud Developing - AWS - 2025',
      'Network Security - CISCO - 2024',
      'CCNA: Switching, Routing, and Wireless Essentials - CISCO - 2023',
    ],
    projects: [
      {
        name: 'NPM Team at Banorte Bank',
        featured: true,
        description:
          'Cree un flujo para clasificar e indexar noticias relevantes, identificando patrones de reportes positivos y negativos y su impacto en inflacion.',
        stack: ['Regex', 'n8n', 'Automatizacion'],
      },
      {
        name: 'Sustainable Energy Dashboard at S2G Energy',
        featured: false,
        description:
          'Implemente endpoints con FastAPI y colabore en el front-end para monitorear consumo de agua, gas y energia.',
        stack: ['FastAPI', 'Python', 'Full Stack'],
      },
    ],
    contactTitle: 'Canal',
    contactCta:
      'Abierta a colaboraciones en seguridad, desarrollo web e investigacion.',
  },
}

function App() {
  const [lang, setLang] = useState('en')
  const [activeId, setActiveId] = useState('about')
  const t = content[lang]

  const sections = useMemo(
    () =>
      navItems.map((item) => ({
        id: item.key,
        label: lang === 'en' ? item.en : item.es,
      })),
    [lang],
  )

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean)
    if (!targets.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-45% 0px -40% 0px', threshold: 0.1 },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [sections])

  return (
    <div className="cyber-shell font-body text-[var(--text)]">
      <div className="network-lines" aria-hidden="true" />
      <div className="relative z-10">
        <header className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-12 pt-10">
          <div className="flex items-center justify-between text-[12px] uppercase tracking-[0.32em] text-white/70">
            <span className="animate-pulse-soft">Secure channel established</span>
            <button
              type="button"
              className="rounded-full border border-white/20 px-4 py-2 text-[12px] font-semibold text-[var(--accent)] transition hover:border-[var(--accent)] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          <div className="glass-panel px-8 py-10 sm:px-12">
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[12px] uppercase tracking-[0.32em] text-white/70">
                  {t.heroTag}
                </p>
                <h1 className="font-display mt-4 text-5xl font-bold text-white sm:text-6xl md:text-7xl lg:text-[72px]">
                  Ximena Flores
                </h1>
                <p className="mt-2 text-sm text-white/70">
                  Ximena Flores • 花姫
                </p>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="max-w-[55ch] text-[17px] text-white/70">
                  {t.heroIntro}
                </div>
                <span className="inline-flex items-center rounded-full bg-[var(--accent)]/10 px-5 py-2 text-[12px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
                  {t.heroTag}
                </span>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="btn-primary rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:translate-y-[-1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  View Projects
                </a>
                <button
                  type="button"
                  className="btn-secondary rounded-full px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:translate-y-[-1px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                  title="Resume coming soon"
                >
                  Download Resume
                </button>
              </div>

              <div className="flex flex-wrap gap-2">
                {t.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-cyan-200/15 bg-white/5 px-3 py-1 text-sm text-white/70"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <nav className="sticky top-0 z-20 bg-[rgba(5,10,18,0.75)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-6 px-6 py-4 text-sm text-white/70">
            {sections.map((item) => {
              const isActive = activeId === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link transition hover:text-[var(--accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] ${
                    isActive ? 'is-active text-[var(--accent)]' : ''
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </nav>

        <main className="mx-auto flex max-w-6xl flex-col gap-10 px-6 pb-20 pt-12">
          <section id="about" className="glass-panel px-6 py-10 sm:px-8">
            <h2 className="font-display text-2xl text-white sm:text-3xl">
              {sections[0].label}
            </h2>
            <div className="mt-4 max-w-[65ch] text-[17px] leading-relaxed text-white/70">
              {t.bio.split('\n').map((line) => (
                <p key={line} className="mb-4 last:mb-0">
                  {line}
                </p>
              ))}
            </div>
          </section>

          <section id="experience" className="glass-panel px-6 py-10 sm:px-8">
            <h2 className="font-display text-2xl text-white sm:text-3xl">
              {sections[1].label}
            </h2>
            <div className="mt-6 grid gap-6 lg:grid-cols-2">
              {t.experience.map((role) => (
                <div
                  key={`${role.role}-${role.company}`}
                  className="rounded-2xl bg-white/5 p-6 transition hover:-translate-y-1"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-white/70">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-lg text-white">
                        {role.role}
                      </span>
                      <span className="text-white/50">•</span>
                      <span>{role.company}</span>
                    </div>
                    <span className="text-[12px] uppercase tracking-[0.2em] text-white/60">
                      {role.dates}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {role.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="dot mt-2" aria-hidden="true" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section id="certifications" className="glass-panel px-6 py-10 sm:px-8">
            <h2 className="font-display text-2xl text-white sm:text-3xl">
              {sections[2].label}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {t.certs.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70"
                >
                  <span className="dot" aria-hidden="true" />
                  {cert}
                </span>
              ))}
            </div>
          </section>

          <section id="projects" className="glass-panel px-6 py-10 sm:px-8">
            <h2 className="font-display text-2xl text-white sm:text-3xl">
              {sections[3].label}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {t.projects.map((project) => (
                <article
                  key={project.name}
                  className={`flex h-full flex-col justify-between rounded-2xl bg-white/5 p-6 transition hover:-translate-y-1 ${
                    project.featured ? 'ring-1 ring-cyan-300/30' : ''
                  }`}
                >
                  <div>
                    <h3 className="font-display text-lg text-white">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {project.description}
                    </p>
                  </div>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-cyan-200/15 bg-white/5 px-3 py-1 text-xs text-white/70"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4 text-xs text-[var(--accent)]">
                      <span className="opacity-50">GitHub</span>
                      <span className="opacity-50">Live</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="glass-panel px-6 py-10 sm:px-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="font-display text-2xl text-white sm:text-3xl">
                  {t.contactTitle}
                </h2>
                <p className="mt-3 text-sm text-white/70">{t.contactCta}</p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="mailto:ximenaflores02@hotmail.com"
                  className="text-[var(--accent)] transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  ximenaflores02@hotmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/ximena-flores-4b094816a/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--accent)] transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/pankeki-19"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[var(--accent)] transition hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
                >
                  GitHub
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
