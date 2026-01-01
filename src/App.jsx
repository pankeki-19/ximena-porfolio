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
        description:
          'Built a pipeline to classify and index relevant news, identifying patterns in positive vs. negative reports and their effects on inflation.',
        stack: ['Regex', 'n8n', 'Automation'],
        links: [
          { label: 'GitHub', url: 'https://github.com/pankeki-19' },
        ],
      },
      {
        name: 'Sustainable Energy Dashboard at S2G Energy',
        description:
          'Implemented FastAPI endpoints and collaborated on the front end to track water, gas, and energy consumption in one dashboard.',
        stack: ['FastAPI', 'Python', 'Full Stack'],
        links: [
          { label: 'GitHub', url: 'https://github.com/pankeki-19' },
        ],
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
        description:
          'Cree un flujo para clasificar e indexar noticias relevantes, identificando patrones de reportes positivos y negativos y su impacto en inflacion.',
        stack: ['Regex', 'n8n', 'Automatizacion'],
        links: [
          { label: 'GitHub', url: 'https://github.com/pankeki-19' },
        ],
      },
      {
        name: 'Sustainable Energy Dashboard at S2G Energy',
        description:
          'Implemente endpoints con FastAPI y colabore en el front-end para monitorear consumo de agua, gas y energia.',
        stack: ['FastAPI', 'Python', 'Full Stack'],
        links: [
          { label: 'GitHub', url: 'https://github.com/pankeki-19' },
        ],
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
      { rootMargin: '-40% 0px -45% 0px', threshold: 0.1 },
    )

    targets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [sections])

  return (
    <div className="app-shell bg-ink text-white">
      <div className="relative z-10 min-h-screen bg-radial-void">
        <header className="mx-auto flex max-w-[1100px] flex-col gap-10 px-5 pb-12 pt-10 sm:px-8">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-accent/70">
            <span className="scanline-fade">Secure channel established</span>
            <button
              type="button"
              className="rounded-full border border-accent/40 px-4 py-2 text-xs font-semibold text-accent transition hover:border-accent hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          <div className="panel rounded-[32px] p-7 sm:p-10">
            <div className="flex flex-col gap-6">
              <p className="text-xs uppercase tracking-[0.35em] text-accent/70">
                {t.heroTag}
              </p>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                  <h1 className="heading-font text-5xl font-bold text-white sm:text-6xl md:text-7xl">
                    Pankeki
                  </h1>
                  <p className="mt-2 text-sm text-white/60">
                    Ximena Flores • 花姫
                  </p>
                </div>
                <div className="text-right text-sm text-white/70">
                  <p className="max-w-sm">{t.heroIntro}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {t.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-accent/30 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.2em] text-accent/90"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <nav className="sticky top-0 z-20 border-y border-white/5 bg-ink/80 backdrop-blur">
          <div className="mx-auto flex max-w-[1100px] flex-wrap gap-4 px-5 py-4 text-sm uppercase tracking-[0.2em] text-white/60 sm:px-8">
            {sections.map((item) => {
              const isActive = activeId === item.id
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${
                    isActive ? 'border-b-2 border-accent pb-1 text-accent' : ''
                  }`}
                >
                  {item.label}
                </a>
              )
            })}
          </div>
        </nav>

        <main className="mx-auto flex max-w-[1100px] flex-col gap-10 px-5 pb-16 pt-10 sm:px-8">
          <section id="about" className="panel rounded-[28px] p-7 sm:p-10">
            <h2 className="heading-font text-2xl text-white sm:text-3xl">
              {sections[0].label}
            </h2>
            <div className="mt-6 text-base leading-relaxed text-white/75 sm:text-[17px]">
              {t.bio.split('\n').map((line) => (
                <p key={line} className="mb-4 last:mb-0">
                  {line}
                </p>
              ))}
            </div>
          </section>

          <section
            id="experience"
            className="panel rounded-[28px] p-7 sm:p-10"
          >
            <h2 className="heading-font text-2xl text-white sm:text-3xl">
              {sections[1].label}
            </h2>
            <div className="mt-6 space-y-6">
              {t.experience.map((role) => (
                <div
                  key={`${role.role}-${role.company}`}
                  className="rounded-2xl bg-white/5 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-white/70">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="heading-font text-lg text-white">
                        {role.role}
                      </span>
                      <span className="text-white/40">•</span>
                      <span className="text-white/70">{role.company}</span>
                    </div>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {role.dates}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-white/70">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>▸ {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section
            id="certifications"
            className="panel rounded-[28px] p-7 sm:p-10"
          >
            <h2 className="heading-font text-2xl text-white sm:text-3xl">
              {sections[2].label}
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {t.certs.map((cert) => (
                <span
                  key={cert}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/75"
                >
                  {cert}
                </span>
              ))}
            </div>
          </section>

          <section id="projects" className="panel rounded-[28px] p-7 sm:p-10">
            <h2 className="heading-font text-2xl text-white sm:text-3xl">
              {sections[3].label}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {t.projects.map((project) => (
                <article
                  key={project.name}
                  className="flex h-full flex-col justify-between rounded-2xl bg-white/5 p-5"
                >
                  <div>
                    <h3 className="heading-font text-lg text-white">
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
                          className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-accent/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3 text-xs uppercase tracking-[0.2em] text-accent/80">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.url}
                          target="_blank"
                          rel="noreferrer"
                          className="transition hover:text-white"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="panel rounded-[28px] p-7 sm:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="heading-font text-2xl text-white sm:text-3xl">
                  {t.contactTitle}
                </h2>
                <p className="mt-3 text-sm text-white/70">{t.contactCta}</p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="mailto:ximenaflores02@hotmail.com"
                  className="text-accent transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  ximenaflores02@hotmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/ximena-flores-4b094816a/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/pankeki-19"
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
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
