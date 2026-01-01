import { SiCisco, SiAmazon } from "react-icons/si";
import { FaShieldAlt, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const chips = ["Web App Security", "Threat Visibility", "API Engineering", "Cloud"];

const experience = [
  {
    role: "ICT Intern",
    company: "Huawei",
    date: "Oct 2025 – Present",
    bullets: [
      "Gathered customer requirements and translated them into technical proposals, diagrams, and BOMs for enterprise/network projects.",
      "Assisted demos and POCs with internal teams to validate feasibility, performance, and implementation steps.",
      "Tracked opportunities and documentation (RFP/RFI responses, notes, follow-ups) to keep sales and engineering aligned.",
    ],
  },
  {
    role: "Technology Risk Intern",
    company: "Quálitas Insurance Company",
    date: "Apr 2025 – Oct 2025",
    bullets: [
      "Monitored security logs (SIEM) to detect anomalies, support investigations, and escalate incidents.",
      "Conducted authorized reconnaissance and exposure assessments; documented findings, risk, and remediation.",
      "Produced executive-ready security reports and dashboards for leadership and board-level briefings.",
    ],
  },
];

const certs = [
  {
    name: "CC (Certified in Cybersecurity)",
    org: "ISC2",
    year: "2025",
    icon: "isc2",
    href: "https://www.isc2.org/Certifications/CC",
  },
  {
    name: "Security+",
    org: "CompTIA",
    year: "2025",
    icon: "comptia",
    href: "https://www.comptia.org/certifications/security",
  },
  {
    name: "AWS Academy Cloud Developing",
    org: "AWS",
    year: "2025",
    icon: "aws",
    href: "https://aws.amazon.com/training/awsacademy/",
  },
  {
    name: "Network Security",
    org: "Cisco",
    year: "2024",
    icon: "cisco",
    href: "https://www.cisco.com/",
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    org: "Cisco",
    year: "2023",
    icon: "cisco",
    href: "https://www.cisco.com/site/us/en/learn/training-certifications/certifications/enterprise/ccna/index.html",
  },
];

const projects = [
  {
    title: "NPM Team at Banorte Bank",
    desc: "Built a pipeline to classify and index relevant news, identifying patterns in positive vs. negative reports and their effects on inflation.",
    tags: ["Regex", "NLP", "Automation"],
    github: "#",
    live: "#",
    featured: true,
  },
  {
    title: "Sustainable Energy Dashboard at S2G Energy",
    desc: "Implemented FastAPI endpoints and collaborated on the front end to track water, gas, and energy consumption in one dashboard.",
    tags: ["FastAPI", "Python", "Full Stack"],
    github: "#",
    live: "#",
  },
];

function Nav() {
  return (
    <div className="sticky top-4 z-50">
      <div className="container-max">
        <div className="glass px-5 py-3 rounded-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-display">
              Σ
            </div>
            <span className="text-sm text-white/80 hidden sm:inline">Cybersecurity + Web Development</span>
          </div>

          <div className="flex items-center gap-6 text-sm text-white/75">
            <a className="hover:text-white" href="#about">About</a>
            <a className="hover:text-white" href="#experience">Experience</a>
            <a className="hover:text-white" href="#projects">Projects</a>
            <a className="hover:text-white" href="#contact">Contact</a>
          </div>

          <div className="chip">ES</div>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="container-max pt-14 pb-12">
      <div className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-xs tracking-[0.25em] text-white/60 uppercase">
            Secure channel established
          </div>

          <h1 className="font-display mt-4 text-5xl sm:text-6xl leading-tight">
            Ximena Flores
          </h1>

          <div className="mt-3 text-white/70">
            Ximena Flores • 花姫
          </div>

          <div className="mt-6 glass px-5 py-3 rounded-2xl inline-block">
            <div className="text-sm text-white/85">
              Building secure, high-performance web experiences with a defender mindset.
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary" href="#projects">View Projects</a>
            <a className="btn-glass" href="/resume.pdf" target="_blank" rel="noreferrer">Download Resume</a>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {chips.map((c) => (
              <span key={c} className="chip">{c}</span>
            ))}
          </div>
        </div>

        {/* hero visual */}
        <div className="relative">
          <div className="absolute -inset-8 blur-3xl opacity-60"
               style={{ background: "radial-gradient(circle at 40% 30%, rgba(124,58,237,.55), transparent 60%)" }} />
          <div className="glass glass-hover p-8 relative overflow-hidden">
            <div className="text-xs tracking-[0.25em] text-white/60 uppercase">Portfolio Node</div>
            <div className="mt-3 font-display text-3xl">CYBERSECURITY</div>
            <div className="mt-2 text-white/70 text-sm">
              Threats • Strategy • Blue Team Mindset
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3 text-sm">
              <div className="glass p-4">
                <div className="text-white/70 text-xs">Focus</div>
                <div className="mt-1 font-semibold">Detection & Risk</div>
              </div>
              <div className="glass p-4">
                <div className="text-white/70 text-xs">Stack</div>
                <div className="mt-1 font-semibold">Vite + Tailwind</div>
              </div>
            </div>

            <div className="mt-6 text-xs text-white/60">
              *Clean cyberpunk UI with accessible typography.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionTitle({ id, title, subtitle }) {
  return (
    <div id={id} className="mb-6">
      <h2 className="font-display text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-white/70 max-w-[65ch]">{subtitle}</p> : null}
    </div>
  );
}

const certIcon = {
  isc2: FaShieldAlt,
  comptia: FaShieldAlt,
  aws: SiAmazon,
  cisco: SiCisco,
};


function App() {
  return (
    <div className="min-h-screen pb-24">
      <Nav />
      <Hero />

      <main className="container-max space-y-14">
        <section className="glass p-8">
          <SectionTitle
            id="about"
            title="About"
            subtitle="Canadian scholarship student in Mexico studying Computer Systems & IT Engineering."
          />
          <p className="text-white/75 max-w-[65ch] leading-relaxed">
            I love cybersecurity, web development, music, and video games. Currently learning Chinese, with basic proficiency in Japanese, French, and German.
          </p>
        </section>

        <section className="glass p-8">
          <SectionTitle id="experience" title="Experience" />
          <div className="grid md:grid-cols-2 gap-6">
            {experience.map((e) => (
              <div key={e.role} className="glass glass-hover p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="font-semibold">{e.role}</div>
                    <div className="text-white/70 text-sm">{e.company}</div>
                  </div>
                  <div className="text-xs text-white/60 whitespace-nowrap">{e.date}</div>
                </div>
                <ul className="mt-4 space-y-2 text-white/75 text-sm leading-relaxed list-disc pl-5">
                  {e.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-8">
          <SectionTitle id="certifications" title="Certifications" />
          <div className="flex flex-wrap gap-3">
            {certs.map((c) => {
              const Icon = certIcon[c.icon] ?? FaShieldAlt;

              return (
                <a
                  key={`${c.org}-${c.name}-${c.year}`}
                  href={c.href}
                  target="_blank"
                  rel="noreferrer"
                  className="chip gap-2 hover:bg-white/10 hover:border-white/20 transition"
                  title={`${c.name} — ${c.org} (${c.year})`}
                >
                  <Icon className="text-white/80" />
                  <span className="text-white/90">{c.org}</span>
                  <span className="text-white/60">({c.year})</span>
                  <span className="hidden sm:inline text-white/70">— {c.name}</span>
                </a>
              );
            })}
          </div>
        </section>


        <section className="glass p-8">
          <SectionTitle id="projects" title="Projects" subtitle="A few things I’ve built and shipped." />
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p) => (
              <div key={p.title} className={`glass glass-hover p-6 ${p.featured ? "md:col-span-2" : ""}`}>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {p.featured ? <div className="text-xs text-white/60 uppercase tracking-[0.25em]">Featured project</div> : null}
                    <div className="mt-2 font-display text-2xl">{p.title}</div>
                    <p className="mt-2 text-white/70 text-sm max-w-[80ch] leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="flex gap-2">
                    <a className="btn-glass px-4 py-2 text-xs" href={p.github}>GitHub</a>
                    <a className="btn-primary px-4 py-2 text-xs" href={p.live}>Live</a>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => <span key={t} className="chip">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="glass p-8">
          <SectionTitle id="contact" title="Contact" subtitle="Open to security, web development, and research collaboration." />
          <div className="grid sm:grid-cols-3 gap-3">
            <a
              className="btn-glass justify-start gap-3"
              href="mailto:ximenaflores02@hotmail.com"
            >
              <FaEnvelope className="text-white/80" />
              <span>Email</span>
            </a>

            <a
              className="btn-glass justify-start gap-3"
              href="https://www.linkedin.com/in/ximena-flores-4b094816a/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-white/80" />
              <span>LinkedIn</span>
            </a>

            <a
              className="btn-glass justify-start gap-3"
              href="https://github.com/pankeki-19"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-white/80" />
              <span>GitHub</span>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
