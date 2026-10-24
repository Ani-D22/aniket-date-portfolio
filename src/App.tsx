import { useState } from "react";

const PROFILE = {
  name: "Aniket Date",
  role: "Software Engineer",
  location: "Indore, India",
  email: "YOUR_EMAIL@example.com",
  github: "https://github.com/Ani-D22",
  linkedin: "https://www.linkedin.com/in/contactaniketdate/",
  whatsapp: "https://api.whatsapp.com/send?phone=7771952810",
  instagram: "https://www.instagram.com/_ani.22_",
  leetcode: "https://leetcode.com/u/Aniket_Date/",
  hackerrank: "https://www.hackerrank.com/profile/dateaniket07",
  unstop: "https://unstop.com/u/anikedat8878",
  resume: "/resume.pdf",
};

const codingProfiles = [
  { name: "GitHub", url: PROFILE.github, sub: "Ani-D22" },
  { name: "LeetCode", url: PROFILE.leetcode, sub: "Aniket_Date" },
  { name: "HackerRank", url: PROFILE.hackerrank, sub: "dateaniket07" },
  { name: "Unstop", url: PROFILE.unstop, sub: "anikedat8878" },
];

const connectProfiles = [
  { name: "LinkedIn", url: PROFILE.linkedin, sub: "contactaniketdate" },
  { name: "WhatsApp", url: PROFILE.whatsapp, sub: "+91 7771952810" },
  { name: "Instagram", url: PROFILE.instagram, sub: "@_ani.22_" },
  { name: "Resume", url: PROFILE.resume, sub: "Download PDF" },
];

const skills = [
  { title: "Backend", items: ["Java", "Spring Boot", "Spring Framework", "REST APIs", "Microservices", "Python"] },
  { title: "Data", items: ["SQL", "MySQL", "PostgreSQL", "Query Optimization", "Data Modeling"] },
  { title: "Engineering", items: ["OOP", "API Design", "Testing", "Debugging", "Performance Tuning"] },
  { title: "Tools & UI", items: ["Git", "Docker", "Maven", "Gradle", "JavaScript", "HTML & CSS"] },
];

const projects = [
  {
    number: "01",
    type: "BACKEND SYSTEMS",
    title: "Order Management & Fulfillment",
    description:
      "A case study based on enterprise order and warehouse workflows: routing orders, coordinating fulfillment states, and making operational APIs more reliable.",
    tags: ["Java", "REST APIs", "SQL", "Workflow Design"],
    note: "Professional experience · Details generalized",
  },
  {
    number: "02",
    type: "BACKEND APPLICATION",
    title: "Event Threshold Monitor",
    description:
      "A service concept for tracking event metrics and evaluating configurable thresholds, with clear rules for matching conditions and triggering downstream actions.",
    tags: ["Java", "Spring Boot", "Validation", "Event Processing"],
    note: "Portfolio project · Implement and link repository",
  },
  {
    number: "03",
    type: "DEVOPS / DELIVERY",
    title: "Containerized Service Starter",
    description:
      "A small demonstration project showing how to package a Spring Boot API, configure it for different environments, and run it consistently with containers.",
    tags: ["Spring Boot", "Docker", "CI/CD", "Configuration"],
    note: "Portfolio project · Implement and link repository",
  },
];

const experience = [
  {
    period: "AUG 2025 — SEP 2026",
    role: "Software Development Engineer",
    company: "HotWax Systems Pvt. Ltd.",
    points: [
      "Contributed to backend and workflow development in a production enterprise software environment.",
      "Worked with Java-based systems, SQL databases, API debugging, and cross-functional feature delivery.",
      "Delivered 10+ full-stack features spanning backend services, APIs, and operational interfaces.",
      "Improved API and query performance by approximately 20–25% through targeted optimization.",
      "Resolved production issues, strengthened logging, and added automated tests to improve reliability.",
      "Built and enhanced end-to-end order and warehouse workflows across enterprise systems."
    ],
  }
];

function ArrowUpRight() {
  return <span aria-hidden="true" className="arrow">↗</span>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  async function copyEmail() {
    if (PROFILE.email.includes("YOUR_EMAIL")) {
      window.location.href = "#contact";
      return;
    }
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Aniket Date home">
          <span className="brand-mark">AD</span>
          <span className="brand-name">Aniket Date<span className="brand-dot">.</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span />
        </button>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {["About", "Experience", "Projects", "Skills", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
          ))}
          <a className="nav-resume" href={PROFILE.resume} target="_blank" rel="noreferrer">
            Resume <ArrowUpRight />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div>
            <h1>Building reliable<br />systems, <span className="gradient-text">one layer</span><br />at a time.</h1>
            <p className="hero-description">
              I’m {PROFILE.name}, a software engineer focused on backend development,
              Java, Spring Boot, and building APIs that solve real operational problems.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight /></a>
              <a className="button button-quiet" href="#contact">Get in touch <span aria-hidden="true">↓</span></a>
            </div>
            <div className="hero-meta">
              <span><span className="meta-icon">⌖</span> {PROFILE.location}</span>
              <span className="meta-separator">/</span>
              <span>Backend-focused · Full-stack capable</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="Abstract code terminal illustration">
            <div className="visual-orbit orbit-one" />
            <div className="visual-orbit orbit-two" />
            <div className="code-card">
              <div className="code-card-top">
                <div className="window-dots"><i /><i /><i /></div>
                <span>service.java</span>
                <span className="code-top-right">JAVA</span>
              </div>
              <div className="code-content">
                <div className="code-line"><span className="line-no">01</span><span><b className="syntax-purple">public</b> <b className="syntax-blue">class</b> <b className="syntax-yellow">ReliableService</b> {"{"}</span></div>
                <div className="code-line"><span className="line-no">02</span><span className="indent"><b className="syntax-purple">private final</b> <b className="syntax-blue">Engine</b> engine;</span></div>
                <div className="code-line"><span className="line-no">03</span><span>&nbsp;</span></div>
                <div className="code-line"><span className="line-no">04</span><span className="indent"><b className="syntax-purple">public</b> <b className="syntax-blue">Result</b> <b className="syntax-green">process</b>(Request request) {"{"}</span></div>
                <div className="code-line"><span className="line-no">05</span><span className="indent double"><b className="syntax-purple">return</b> engine.execute(request);</span></div>
                <div className="code-line"><span className="line-no">06</span><span className="indent">{"}"}</span></div>
                <div className="code-line"><span className="line-no">07</span><span>{"}"}</span></div>
              </div>
              <div className="code-card-bottom"><span className="terminal-pulse" /> Building with intention</div>
            </div>
            <div className="floating-chip chip-top"><span className="chip-icon">⌘</span> Clean APIs</div>
            <div className="floating-chip chip-bottom"><span className="chip-icon chip-green">↗</span> Performance-minded</div>
            <div className="visual-caption">THOUGHTFUL ENGINEERING <span>—</span> PRACTICAL IMPACT</div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-line" /> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip" id="about">
          <div className="section-wrap intro-grid">
            <div className="section-kicker"><span>01</span> / ABOUT</div>
            <div className="intro-main">
              <h2>Backend-first thinking.<br /><span className="muted-heading">End-to-end ownership.</span></h2>
              <p>
                I enjoy understanding how a system works as a whole—from the data model and API
                contract to the user-facing workflow. My experience is rooted in enterprise
                software, where correctness, performance, and maintainability matter.
              </p>
              <p>
                I’m currently sharpening my work across the Java and Spring ecosystem, SQL,
                system design, testing, and practical delivery.
              </p>
            </div>
            <div className="intro-stat">
              <div className="stat-number">~2<span> yrs</span></div>
              <div className="stat-label">Software development<br />experience</div>
              <div className="stat-rule" />
              <div className="stat-number">10<span>+</span></div>
              <div className="stat-label">Full-stack features<br />delivered</div>
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="experience">
          <div className="section-heading">
            <div className="section-kicker"><span>02</span> / EXPERIENCE</div>
            <h2>Where I’ve made<br /><span className="muted-heading">an impact.</span></h2>
          </div>
          <div className="experience-list">
            {experience.map((job, index) => (
              <article className="experience-item" key={job.role}>
                <div className="experience-period">{job.period}</div>
                <div className="experience-detail">
                  <div className="experience-title-row">
                    <div>
                      <h3>{job.role}</h3>
                      <div className="experience-company">{job.company} <span>·</span> {index === 0 ? "Full-time" : "Internship"}</div>
                    </div>
                    <span className="experience-index">0{index + 1}</span>
                  </div>
                  <ul>{job.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-section" id="projects">
          <div className="section-wrap section-block">
            <div className="section-heading projects-heading">
              <div>
                <div className="section-kicker"><span>03</span> / SELECTED WORK</div>
                <h2>Work that reflects<br /><span className="muted-heading">how I think.</span></h2>
              </div>
              <p className="section-side-note">A mix of professional problem-solving and projects to demonstrate practical engineering skills.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-card-top">
                    <span className="project-number">{project.number}</span>
                    <span className="project-type">{project.type}</span>
                    <span className="project-arrow"><ArrowUpRight /></span>
                  </div>
                  <div className="project-art" aria-hidden="true">
                    {project.number === "01" ? (
                      <div className="flow-art">
                        <div className="flow-node">Order</div><span className="flow-connector">→</span>
                        <div className="flow-node flow-node-active">Route</div><span className="flow-connector">→</span>
                        <div className="flow-node">Fulfill</div>
                        <div className="flow-line" />
                      </div>
                    ) : project.number === "02" ? (
                      <div className="metric-art">
                        <div className="metric-ring"><span>85<small>%</small></span></div>
                        <div className="metric-bars"><i /><i /><i /><i /><i /><i /><i /></div>
                        <span className="metric-label">THRESHOLD STATUS</span>
                      </div>
                    ) : (
                      <div className="container-art">
                        <div className="container-box"><span>API</span><i /><i /><i /></div>
                        <div className="container-box container-box-small"><span>DB</span><i /><i /></div>
                        <div className="container-link" />
                        <div className="container-label">CONTAINERIZED SERVICES</div>
                      </div>
                    )}
                  </div>
                  <div className="project-body">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="project-note">{project.note}</div>
                  </div>
                </article>
              ))}
            </div>
            <div className="project-disclaimer">
              <span className="disclaimer-icon">i</span>
              The second and third entries are project concepts, not claims of completed work. Implement them and add repository/demo links before presenting them as finished projects.
            </div>
          </div>
        </section>

        <section className="section-wrap section-block" id="skills">
          <div className="section-heading">
            <div className="section-kicker"><span>04</span> / TOOLKIT</div>
            <h2>The tools behind<br /><span className="muted-heading">the work.</span></h2>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <div className="skill-card-head"><span>0{index + 1}</span><h3>{group.title}</h3></div>
                <div className="skill-items">{group.items.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </article>
            ))}
          </div>
          <div className="principles-row">
            <span className="principles-label">ENGINEERING PRINCIPLES</span>
            <div className="principles">
              <span>Readable code</span><span>Reliable systems</span><span>Measured optimization</span><span>Continuous learning</span>
            </div>
          </div>
        </section>

        <section className="education-section">
          <div className="section-wrap education-grid">
            <div>
              <div className="section-kicker"><span>05</span> / EDUCATION</div>
              <h2>Foundations<br /><span className="muted-heading">that scale.</span></h2>
            </div>
            <div className="education-card">
              <div className="education-year">2023 — 2025</div>
              <div>
                <h3>Master of Computer Applications (MCA)</h3>
                <p>IPS Academy · RGPV</p>
                <span className="education-location">Indore, India</span>
              </div>
              <span className="education-symbol">↗</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-wrap">
            <div className="section-kicker"><span>06</span> / CONTACT</div>
            <div className="contact-content">
              <div>
                <div className="eyebrow contact-eyebrow"><span className="status-dot" /> OPEN TO THE RIGHT OPPORTUNITY</div>
                <h2>Have a problem<br />worth <span className="gradient-text">solving?</span></h2>
                <p>I’m interested in software engineering roles where I can build dependable backend systems, improve APIs, and keep growing as an engineer.</p>
              </div>
              <div className="contact-actions">
                <div className="contact-cta-row">
                  <button className="button button-primary contact-email" onClick={copyEmail}>
                    {copied ? "Email copied" : "Get in touch"} <ArrowUpRight />
                  </button>
                  <a
                    className="button button-quiet"
                    href={PROFILE.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Quick Chat <ArrowUpRight />
                  </a>
                </div>

                <div className="contact-group">
                  <div className="contact-group-title">CODING & COMPETITIVE</div>
                  <div className="contact-links-grid">
                    {codingProfiles.map((item) => (
                      <a
                        key={item.name}
                        className="contact-card-link"
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="contact-card-main">
                          <span className="contact-card-title">{item.name}</span>
                          <span className="contact-card-sub">{item.sub}</span>
                        </div>
                        <ArrowUpRight />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="contact-group">
                  <div className="contact-group-title">CONNECT & SOCIAL</div>
                  <div className="contact-links-grid">
                    {connectProfiles.map((item) => (
                      <a
                        key={item.name}
                        className="contact-card-link"
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <div className="contact-card-main">
                          <span className="contact-card-title">{item.name}</span>
                          <span className="contact-card-sub">{item.sub}</span>
                        </div>
                        <ArrowUpRight />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-bottom">
              <span>{PROFILE.name} <span className="brand-dot">.</span></span>
              <span>Designed & built with care</span>
              <a href="#home">BACK TO TOP ↑</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
