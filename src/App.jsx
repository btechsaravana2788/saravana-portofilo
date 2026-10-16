import { Fragment, useEffect, useState } from "react";
import portraitUrl from "../assets/saravana-kumar.jpg";
import resumeUrl from "../assets/Saravana-Kumar-Resume.pdf";

const expertise = [
  {
    index: "01 / ARCHITECTURE",
    icon: "⌘",
    title: "Systems that scale",
    description:
      "Microservices, distributed systems, clean architecture, domain-driven design, CQRS, and event-driven workflows.",
    tags: ["REST & GraphQL", "Kafka", "RabbitMQ"],
  },
  {
    index: "02 / ENGINEERING",
    icon: "</>",
    title: "Built to be dependable",
    description:
      "Secure, maintainable PHP platforms and APIs with careful attention to performance, testing, and integrations.",
    tags: ["PHP 8.x", "Laravel", "Symfony"],
  },
  {
    index: "03 / LEADERSHIP",
    icon: "↗",
    title: "Teams that deliver",
    description:
      "Technical direction, architecture reviews, mentoring, thoughtful estimation, and pragmatic delivery practices.",
    tags: ["Mentoring", "Code review", "SDLC"],
  },
  {
    index: "04 / PERFORMANCE",
    icon: "◒",
    title: "Impact you can measure",
    description:
      "Query optimization, caching, cloud infrastructure, and CI/CD to improve speed, stability, and outcomes.",
    tags: ["AWS", "Redis", "Docker"],
  },
];

const stack = [
  {
    label: "Backend",
    tags: ["PHP", "Laravel", "CodeIgniter", "Symfony", "Yii", "Node.js"],
  },
  { label: "Platforms", tags: ["WordPress", "Magento", "Drupal"] },
  { label: "Frontend", tags: ["React", "Vue.js", "jQuery", "AJAX"] },
  {
    label: "Data & cloud",
    tags: ["MySQL", "PostgreSQL", "Redis", "AWS", "Docker"],
  },
];

const marqueeItems = [
  "ARCHITECTURE",
  "✳",
  "ENGINEERING",
  "✳",
  "DELIVERY",
  "✳",
  "LEADERSHIP",
  "✳",
];

const projects = [
  {
    category: "01 / INSURANCE · BAHRAIN",
    visual: "visual-insurance",
    caption: "INSURANCE CRM",
    title: "STC Insurance CRM",
    description:
      "Policy issuance and insurance workflows, supported by a Yii2 and React platform.",
    outcome: ["+35%", "policy issuance speed"],
    tags: ["Yii2", "React", "MySQL", "REST API"],
    visualContent: (
      <>
        <span className="visual-orbit" />
        <span className="visual-monogram">
          stc<span>.</span>
        </span>
      </>
    ),
  },
  {
    category: "02 / HEALTHCARE · GLOBAL",
    visual: "visual-health",
    caption: "PATIENT EXPERIENCE",
    title: "iVisitDoc",
    description:
      "A digital care experience connecting patients, clinicians, and video consultations.",
    outcome: ["+40%", "patient engagement"],
    tags: ["Node.js", "React", "Video API"],
    visualContent: <span className="health-cross">+</span>,
  },
  {
    category: "03 / E-COMMERCE · NETHERLANDS",
    visual: "visual-commerce",
    caption: "CONNECTED COMMERCE",
    title: "Bono Netherlands",
    description:
      "A connected Shopify storefront with a modern React experience and flexible payment options.",
    outcome: ["+25%", "sales conversion"],
    tags: ["React", "Shopify", "GraphQL"],
    visualContent: <span className="commerce-spark">✳</span>,
  },
  {
    category: "04 / TELEMEDICINE · SAAS",
    visual: "visual-doccure",
    caption: "CARE, MADE SIMPLE",
    title: "Doccure",
    description:
      "A telemedicine SaaS platform with consultation flows and integrated payment services.",
    tags: ["CodeIgniter", "CCAvenue", "Video API"],
    visualContent: (
      <span className="doccure-symbol">
        d<span>.</span>
      </span>
    ),
  },
];

const experience = [
  {
    date: "JAN 2025 — FEB 2026",
    role: "Senior Full Stack PHP Developer / Tech Lead",
    company: "Zentact Systems",
    location: "Malaysia, Remote",
    description:
      "Owned architecture for enterprise CRM, ERP, and SaaS platforms; led cloud infrastructure and technical direction across client projects.",
  },
  {
    date: "APR 2024 — AUG 2024",
    role: "Senior PHP Developer",
    company: "Itrosys Technologies",
    location: "Bengaluru",
    description:
      "Built enterprise Laravel and Yii2 applications and improved API response times through query optimization and Redis caching.",
  },
  {
    date: "DEC 2021 — FEB 2024",
    role: "Senior Software Engineer",
    company: "Fuelbuddy",
    location: "Bengaluru",
    description:
      "Led PHP and Node.js delivery for a high-traffic fuel platform, including real-time logistics, fleet tracking, and payments.",
  },
  {
    date: "AUG 2020 — NOV 2021",
    role: "Senior PHP Developer",
    company: "Dreamguys Technologies",
    location: "Coimbatore",
    description:
      "Delivered SaaS products with Laravel and CodeIgniter and led a team of four through reviews, sprint planning, and release delivery.",
  },
  {
    date: "DEC 2019 — JUL 2020",
    role: "Senior Software Consultant",
    company: "Corner Stone Solutions",
    location: "Bengaluru",
    description:
      "Guided legacy-code modernization, Laravel migrations, and API integrations for logistics and retail clients.",
  },
  {
    date: "2011 — 2019",
    role: "Earlier career",
    company: "bMuse India · Sun Software Solutions",
    description:
      "Built a strong foundation in software engineering and web application development.",
    earlier: true,
  },
];

function Eyebrow({ number, children, dark = false }) {
  return (
    <p className={`eyebrow${dark ? " eyebrow-dark" : ""}`}>
      {number && <span>{number}</span>} {children}
    </p>
  );
}

function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="header-inner">
        <a className="wordmark" href="#home" aria-label="Saravana Kumar, home">
          SK<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-nav"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          id="site-nav"
          aria-label="Main navigation"
        >
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#expertise" onClick={closeMenu}>Expertise</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#journey" onClick={closeMenu}>Experience</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let’s talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <>
      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-glow hero-glow-one" aria-hidden="true" />
        <div className="hero-glow hero-glow-two" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> PHP ARCHITECT{" "}
              <span className="eyebrow-divider">/</span> ENGINEERING LEADER
            </p>
            <h1 id="hero-title">
              Building the
              <br />
              web <span>to last.</span>
            </h1>
            <p className="hero-intro">
              I’m Saravana Kumar — a hands-on PHP architect turning complex
              ideas into resilient products, thoughtful systems, and teams
              that deliver.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Start a conversation <span aria-hidden="true">↗</span>
              </a>
              <a className="button button-quiet" href={resumeUrl} download>
                Download résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="hero-proof" aria-label="Career highlights">
              <div>
                <strong>15.2<span>+</span></strong>
                <span>years building for the web</span>
              </div>
              <div>
                <strong>7</strong>
                <span>products featured below</span>
              </div>
              <div>
                <strong>4</strong>
                <span>developers led at Dreamguys</span>
              </div>
            </div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="portrait-orbit orbit-one" aria-hidden="true" />
            <div className="portrait-orbit orbit-two" aria-hidden="true" />
            <div className="portrait-frame">
              <img
                className="portrait"
                src={portraitUrl}
                alt="Portrait of Saravana Kumar"
                fetchPriority="high"
              />
            </div>
            <div className="portrait-label">
              <span className="label-mark" aria-hidden="true">✳</span>
              <span>
                Architecture
                <br />
                <b>with intent.</b>
              </span>
            </div>
            <div className="portrait-location">
              <span aria-hidden="true">⌖</span> CHENNAI, INDIA · OPEN TO REMOTE
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#about">
          <span className="scroll-line" /> SCROLL TO EXPLORE
        </a>
      </section>
      <div
        className="marquee"
        aria-label="Architecture, engineering, delivery, leadership"
      >
        <div className="marquee-track" aria-hidden="true">
          {Array.from({ length: 2 }, (_, index) => (
            <Fragment key={index}>
              {marqueeItems.map((item, itemIndex) =>
                item === "✳" ? (
                  <i key={`${index}-${itemIndex}`}>{item}</i>
                ) : (
                  <span key={`${index}-${itemIndex}`}>{item}</span>
                ),
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}

function About() {
  const principles = [
    {
      number: "01",
      title: "Think in systems",
      description:
        "Make considered choices for scale, security, and the people maintaining the code.",
    },
    {
      number: "02",
      title: "Ship with purpose",
      description:
        "Connect technical decisions to real customer needs and measurable outcomes.",
    },
    {
      number: "03",
      title: "Grow the team",
      description:
        "Set a clear bar, share context, and give good engineers room to thrive.",
    },
  ];

  return (
    <section className="section about-section" id="about" aria-labelledby="about-title">
      <div className="section-heading">
        <Eyebrow number="01" dark>A LITTLE ABOUT ME</Eyebrow>
        <h2 id="about-title">
          Good architecture
          <br />
          makes room for <em>what’s next.</em>
        </h2>
      </div>
      <div className="about-content">
        <p className="about-lead">
          For 15.2 years, I’ve helped businesses turn ambitious ideas into
          dependable digital products — from enterprise CRM and ERP systems to
          SaaS, marketplaces, and e-commerce.
        </p>
        <div className="about-detail">
          <p>
            My sweet spot is the space between strategy and code: shaping
            clean, scalable architecture, making the hard trade-offs, and
            helping engineering teams do their best work. I bring deep PHP
            experience across Laravel, Symfony, Yii, and CodeIgniter, alongside
            modern full-stack delivery.
          </p>
          <p>
            From the first system diagram to the production release, I care
            about the details that make software secure, maintainable, and
            genuinely useful.
          </p>
          <a className="text-link" href="#journey">
            A closer look at my journey <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
      <div className="principles">
        {principles.map(({ number, title, description }) => (
          <article key={number}>
            <span className="principle-number">{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Expertise() {
  return (
    <section
      className="expertise-section"
      id="expertise"
      aria-labelledby="expertise-title"
    >
      <div className="section expertise-inner">
        <div className="section-heading expertise-heading">
          <Eyebrow number="02">WHAT I BRING</Eyebrow>
          <h2 id="expertise-title">
            A broad toolkit.
            <br />
            <em>A clear point of view.</em>
          </h2>
          <p className="section-deck">
            Deep backend expertise, delivered with a full-product perspective.
          </p>
        </div>
        <div className="expertise-grid">
          {expertise.map((item) => (
            <article className="expertise-card" key={item.index}>
              <span className="card-index">{item.index}</span>
              <div className="expertise-icon" aria-hidden="true">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="mini-tags">
                {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
        <div className="stack-block">
          <div className="stack-intro">
            <span className="eyebrow">THE STACK</span>
            <p>Tools I reach for to take a product from idea to impact.</p>
          </div>
          <div className="stack-groups">
            {stack.map(({ label, tags }) => (
              <div className="stack-row" key={label}>
                <span className="stack-label">{label}</span>
                <div className="stack-tags">
                  {tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="work-heading">
        <div className="section-heading">
          <Eyebrow number="03" dark>SELECTED WORK</Eyebrow>
          <h2 id="work-title">
            The work, in
            <br />
            <em>the real world.</em>
          </h2>
        </div>
        <p className="section-deck">
          A few examples of products and platforms I’ve helped shape — and the
          outcomes they set out to deliver.
        </p>
      </div>
      <div className="project-grid">
        {projects.map((project) => (
          <article
            className={`project-card${project.outcome ? " project-featured" : ""}`}
            key={project.title}
          >
            <div className="project-top">
              <span>{project.category}</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </div>
            <div className={`project-visual ${project.visual}`} aria-hidden="true">
              {project.visualContent}
              <span className="visual-caption">{project.caption}</span>
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.outcome && (
                <div className="project-outcome">
                  <strong>{project.outcome[0]}</strong>
                  <span>{project.outcome[1]}</span>
                </div>
              )}
              <div className="project-tags">
                {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
      <p className="work-note">
        Also contributed to enterprise ERP, logistics, CRM, and marketplace
        products across APAC and GCC. Outcomes shown are from project work
        described in my résumé.
      </p>
    </section>
  );
}

function Journey() {
  return (
    <section
      className="journey-section"
      id="journey"
      aria-labelledby="journey-title"
    >
      <div className="section journey-inner">
        <div className="journey-heading">
          <Eyebrow number="04">THE JOURNEY SO FAR</Eyebrow>
          <h2 id="journey-title">
            Experience that
            <br />
            <em>keeps compounding.</em>
          </h2>
          <p className="section-deck">
            A career shaped by solving hard problems, learning fast, and
            delivering software that matters.
          </p>
          <a className="button button-outline" href={resumeUrl} download>
            View full résumé <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article
              className={`timeline-item${item.earlier ? " timeline-earlier" : ""}`}
              key={item.date}
            >
              <span className="timeline-date">{item.date}</span>
              <div>
                <h3>{item.role}</h3>
                <p className="timeline-company">
                  {item.company}
                  {item.location && <span> · {item.location}</span>}
                </p>
                <p>{item.description}</p>
              </div>
              <span className="timeline-dot" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      className="contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <div className="contact-glow" aria-hidden="true" />
      <div className="contact-inner">
        <Eyebrow number="05">HAVE A GOOD CHALLENGE?</Eyebrow>
        <h2 id="contact-title">
          Let’s build
          <br />
          <em>what’s next.</em>
        </h2>
        <p className="contact-copy">
          Looking for a PHP Architect who can lead from the first whiteboard
          sketch through to a product people love using? I’d be glad to talk.
        </p>
        <a
          className="button button-primary contact-button"
          href="mailto:btechsaravana2788@gmail.com"
        >
          Tell me about it <span aria-hidden="true">↗</span>
        </a>
        <div className="contact-details">
          <a href="mailto:btechsaravana2788@gmail.com">
            btechsaravana2788@gmail.com
          </a>
          <a href="tel:+917418586882">+91 74185 86882</a>
          <a
            href="https://www.linkedin.com/in/saravanaphp2788"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function App() {
  useEffect(() => {
    document.documentElement.classList.add("js");

    const revealElements = document.querySelectorAll(
      ".section-heading, .about-content, .principles, .expertise-card, .stack-block, .project-card, .journey-heading, .timeline-item",
    );

    if (!("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
      return () => document.documentElement.classList.remove("js");
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            currentObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealElements.forEach((element) => {
      element.classList.add("reveal");
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("js");
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <About />
        <Expertise />
        <Work />
        <Journey />
        <Contact />
      </main>
      <footer className="site-footer">
        <a className="wordmark footer-mark" href="#home">SK<span>.</span></a>
        <p>Thoughtful systems. Better outcomes.</p>
        <a className="back-top" href="#home">
          BACK TO TOP <span aria-hidden="true">↑</span>
        </a>
        <span className="footer-copyright">
          © {new Date().getFullYear()} SARAVANA KUMAR
        </span>
      </footer>
    </>
  );
}

export default App;
