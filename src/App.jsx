import { useState } from 'react'

const content = {
  en: {
    nav: ['About', 'Experience', 'Certifications', 'Projects', 'Contact'],
    heroTag: 'Cybersecurity + Web Development',
    bio: `Canadian scholarship student in Mexico studying Computer Systems & IT Engineering.
I build secure, performant web experiences and love the blue side of cybersecurity.
Music and video games keep the rhythm; I am learning Chinese and have basic proficiency in Japanese, French, and German.`,
    focus: [
      'Web App Security',
      'Threat Visibility',
      'API Engineering',
      'Cloud Foundations',
    ],
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
        meta: 'Regex + n8n automation',
        description:
          'Built a pipeline to classify and index relevant news, helping identify patterns in good vs. bad reports and their effects on inflation.',
      },
      {
        name: 'Sustainable Energy Dashboard at S2G Energy',
        meta: 'Full stack | FastAPI + Python',
        description:
          'Implemented API endpoints and collaborated on the front end so customers could track water, gas, and energy consumption in a unified dashboard.',
      },
    ],
    contactTitle: 'Signal',
    contactCta:
      'Open to security, web development, and research collaboration.',
  },
  es: {
    nav: ['Sobre mi', 'Experiencia', 'Certificaciones', 'Proyectos', 'Contacto'],
    heroTag: 'Ciberseguridad + Desarrollo Web',
    bio: `Canadiense becada en Mexico, estudiante de Ingenieria en Sistemas Computacionales y TI.
Construyo experiencias web seguras y eficientes y me apasiona la ciberseguridad.
La musica y los videojuegos me inspiran; estudio chino y tengo nivel basico de japones, frances y aleman.`,
    focus: [
      'Seguridad Web',
      'Visibilidad de Amenazas',
      'Ingenieria de APIs',
      'Fundamentos Cloud',
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
        meta: 'Regex + n8n',
        description:
          'Cree un flujo para clasificar e indexar noticias relevantes, identificando patrones de reportes positivos y negativos y su impacto en inflacion.',
      },
      {
        name: 'Sustainable Energy Dashboard at S2G Energy',
        meta: 'Full stack | FastAPI + Python',
        description:
          'Implemente endpoints y colabore en el front-end para que clientes monitorearan consumos de agua, gas y energia.',
      },
    ],
    contactTitle: 'Canal',
    contactCta:
      'Abierta a colaboraciones en seguridad, desarrollo web e investigacion.',
  },
}

function App() {
  const [lang, setLang] = useState('en')
  const t = content[lang]

  return (
    <div className="app-shell bg-ink text-white">
      <div className="relative z-10 min-h-screen bg-radial-void px-5 py-10 sm:px-10">
        <header className="mx-auto flex max-w-6xl flex-col gap-8">
          <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-neon/70">
            <span className="scanline-fade">Secure channel established</span>
            <button
              type="button"
              className="pill rounded-full px-4 py-2 text-xs font-semibold text-neon shadow-glow transition hover:text-cyan"
              onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          <div className="panel rounded-3xl p-6 sm:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.4em] text-cyan/80">
                  {t.heroTag}
                </p>
                <h1 className="heading-font cursor-blink text-4xl font-bold text-neon sm:text-5xl md:text-6xl">
                  Pankeki
                </h1>
                <p className="text-sm text-white/70">
                  Ximena Flores • 花姫
                </p>
              </div>
              <nav className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
                {t.nav.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="transition hover:text-neon"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
              <p className="leading-relaxed text-white/80">{t.bio}</p>
              <div className="grid gap-3">
                {t.focus.map((item, index) => (
                  <div
                    key={item}
                    className="pill reveal rounded-xl px-4 py-3 text-xs uppercase tracking-[0.2em] text-neon/90"
                    style={{ animationDelay: `${0.1 + index * 0.1}s` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <main className="mx-auto mt-10 flex max-w-6xl flex-col gap-8">
          <section
            id={t.nav[0].toLowerCase().replace(/\s+/g, '-')}
            className="panel reveal rounded-3xl p-6 sm:p-8"
            style={{ animationDelay: '0.2s' }}
          >
            <h2 className="heading-font text-2xl text-neon">
              {t.nav[0]}
            </h2>
            <p className="mt-4 text-white/80">{t.bio}</p>
          </section>

          <section
            id={t.nav[1].toLowerCase().replace(/\s+/g, '-')}
            className="panel reveal rounded-3xl p-6 sm:p-8"
            style={{ animationDelay: '0.3s' }}
          >
            <h2 className="heading-font text-2xl text-neon">
              {t.nav[1]}
            </h2>
            <div className="mt-6 space-y-6">
              {t.experience.map((role) => (
                <div
                  key={role.role}
                  className="rounded-2xl border border-white/10 bg-steel/60 p-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="heading-font text-lg text-cyan">
                      {role.role}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                      {role.dates}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-white/70">{role.company}</p>
                  <ul className="mt-4 space-y-2 text-sm text-white/75">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>▸ {bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section
            id={t.nav[2].toLowerCase().replace(/\s+/g, '-')}
            className="panel reveal rounded-3xl p-6 sm:p-8"
            style={{ animationDelay: '0.4s' }}
          >
            <h2 className="heading-font text-2xl text-neon">
              {t.nav[2]}
            </h2>
            <div className="mt-6 grid gap-3 md:grid-cols-2">
              {t.certs.map((cert) => (
                <div
                  key={cert}
                  className="rounded-2xl border border-white/10 bg-steel/50 px-4 py-3 text-sm text-white/80"
                >
                  {cert}
                </div>
              ))}
            </div>
          </section>

          <section
            id={t.nav[3].toLowerCase().replace(/\s+/g, '-')}
            className="panel reveal rounded-3xl p-6 sm:p-8"
            style={{ animationDelay: '0.5s' }}
          >
            <h2 className="heading-font text-2xl text-neon">
              {t.nav[3]}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {t.projects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-2xl border border-white/10 bg-steel/50 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="heading-font text-lg text-cyan">
                      {project.name}
                    </h3>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                      {project.meta}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-white/75">
                    {project.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id={t.nav[4].toLowerCase().replace(/\s+/g, '-')}
            className="panel reveal rounded-3xl p-6 sm:p-8"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="heading-font text-2xl text-neon">
                  {t.contactTitle}
                </h2>
                <p className="mt-2 text-sm text-white/70">{t.contactCta}</p>
              </div>
              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="mailto:ximenaflores02@hotmail.com"
                  className="text-neon transition hover:text-cyan"
                >
                  ximenaflores02@hotmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/ximena-flores-4b094816a/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neon transition hover:text-cyan"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/pankeki-19"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neon transition hover:text-cyan"
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
