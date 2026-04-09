type IconType =
  | "phone"
  | "mail"
  | "link"
  | "github"
  | "file"
  | "network"
  | "bolt"
  | "chat"
  | "spark"
  | "pin"
  | "calendar";

type ContactAction = {
  label: string;
  value: string;
  href: string;
  icon: IconType;
};

type DownloadAction = {
  label: string;
  href: string;
  icon: IconType;
};

type Service = {
  title: string;
  description: string;
};

type Project = {
  title: string;
  badge?: string;
  tags: string[];
  description: string;
  outcome: string;
  icon: IconType;
};

const contactActions: ContactAction[] = [
  { label: "Call", value: "+44 7535 791970", href: "tel:+447535791970", icon: "phone" },
  {
    label: "Email",
    value: "hello@ajrlewis.com",
    href: "mailto:hello@ajrlewis.com",
    icon: "mail"
  },
  {
    label: "LinkedIn",
    value: "alex-lewis",
    href: "https://www.linkedin.com/in/alex-lewis/",
    icon: "link"
  },
  {
    label: "GitHub",
    value: "ajrlewis",
    href: "https://github.com/ajrlewis",
    icon: "github"
  }
];

const downloads: DownloadAction[] = [
  { label: "PhD Thesis", href: "#", icon: "file" },
  { label: "ApJ First Author Paper", href: "#", icon: "file" }
];

const services: Service[] = [
  {
    title: "AI Architecture",
    description:
      "Designing AI systems that integrate cleanly with your product, data model, API boundaries, infrastructure, and security posture."
  },
  {
    title: "Agentic & Workflow Systems",
    description:
      "Implementing robust LangGraph and HITL pipelines with FastAPI, Dockerized services, and deployment-ready operational patterns."
  },
  {
    title: "Prototypes That Deliver",
    description:
      "Rapid validation focused on measurable ROI, clean documentation, and handover paths that enable internal teams to scale confidently."
  }
];

const projects: Project[] = [
  {
    title: "RFP LangGraph Agent",
    badge: "Open Source",
    tags: ["LangGraph", "Python", "HITL", "RFP"],
    description:
      "Workflow-driven assistant for structured RFP analysis and drafting with review checkpoints and auditable output steps.",
    outcome: "Reliable workflows with verifiable checkpoints.",
    icon: "network"
  },
  {
    title: "Speedy AI",
    tags: ["Next.js", "Vercel AI SDK", "Slack", "Internal Tools"],
    description:
      "Internal Slack assistant connected to handbook content and operational tools for high-confidence answers in context.",
    outcome: "Faster answers, fewer context switches.",
    icon: "bolt"
  },
  {
    title: "Downing LLP",
    tags: ["Microsoft Teams", "Azure", "HITL", "Ticket Routing"],
    description:
      "Teams-based triage assistant for summarizing, routing, and prioritizing internal support requests with clear escalation paths.",
    outcome: "Reduced triage time and clearer priorities.",
    icon: "chat"
  },
  {
    title: "Hyperhumans",
    tags: ["LLM", "Leadgen", "Automation", "Integration"],
    description:
      "LLM-driven lead generation workflow integrating enrichment and qualification signals into existing outreach operations.",
    outcome: "Higher-quality leads and more relevant conversations.",
    icon: "spark"
  }
];

function Icon({ type }: { type: IconType }) {
  return <span className={`icon icon-${type}`} aria-hidden="true" />;
}

export default function HomePage() {
  return (
    <main className="page">
      <div className="shell">
        <section className="hero glass-panel" aria-label="Hero">
          <div className="hero-copy">
            <h1 className="hero-name">
              <span>Alex</span> <span className="gold">Lewis</span>
            </h1>
            <p className="hero-title">AI Architect &amp; Implementation Consultant</p>
            <div className="accent-line" aria-hidden="true" />
            <p className="hero-statement">
              I design and ship production-ready AI systems that solve <span className="blue">real problems</span>.
            </p>
            <p className="hero-intro">
              I architect and implement LLM-powered systems, workflow engines, and internal tools tuned for enterprise constraints.
            </p>
            <p className="hero-intro">
              From extra-galactic astrophysics to enterprise AI delivery, I bring scientific rigor, engineering depth, and fast execution.
            </p>

            <div className="button-row" role="list" aria-label="Primary contact methods">
              {contactActions.map((item) => (
                <a
                  className="glass-button contact-button"
                  href={item.href}
                  key={item.label}
                  role="listitem"
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                >
                  <Icon type={item.icon} />
                  <span className="button-copy">
                    <span>{item.label}</span>
                    <small>{item.value}</small>
                  </span>
                </a>
              ))}
            </div>

            <div className="button-row" role="list" aria-label="Document downloads">
              {downloads.map((item) => (
                <a className="glass-button file-button" href={item.href} key={item.label} role="listitem">
                  <Icon type={item.icon} />
                  <span className="button-copy">
                    <span>{item.label}</span>
                    <small>PDF</small>
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="hero-media">
            <div className="image-frame glass-panel">
              <img src="/profile.jpg" alt="Alex Lewis observing at LABOCA in the Atacama Desert, Chile" />
              <div className="image-caption">
                <Icon type="pin" />
                <span>Observing at LABOCA, Atacama Desert, Chile</span>
              </div>
            </div>
          </div>
        </section>

        <section className="offer glass-panel" aria-label="What I Offer">
          <p className="section-label">WHAT I OFFER</p>
          <div className="offer-grid">
            {services.map((service) => (
              <article className="service-card" key={service.title}>
                <div className="service-icon" aria-hidden="true" />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="projects" aria-label="Selected Projects">
          <div className="projects-header">
            <p className="section-label">SELECTED PROJECTS</p>
            <a className="projects-link" href="https://github.com/ajrlewis" target="_blank" rel="noreferrer">
              View more on GitHub →
            </a>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card glass-panel" key={project.title}>
                <div className="project-top">
                  <div className="project-icon-wrap">
                    <Icon type={project.icon} />
                  </div>
                  {project.badge ? <span className="badge">{project.badge}</span> : null}
                </div>
                <h3>{project.title}</h3>
                <div className="tag-row" role="list" aria-label={`${project.title} stack tags`}>
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag} role="listitem">
                      {tag}
                    </span>
                  ))}
                </div>
                <p>{project.description}</p>
                <p className="outcome">{project.outcome}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="contact glass-panel" aria-label="Get in Touch">
          <div>
            <p className="section-label">GET IN TOUCH</p>
            <h2>Let&apos;s build something exceptional.</h2>
            <p>
              Share your project constraints and goals, and we can map where AI creates immediate and durable value.
            </p>
            <div className="button-row">
              <a className="cta-button" href="mailto:hello@ajrlewis.com">
                <Icon type="calendar" />
                <span>Book a Consultation</span>
              </a>
              <a className="glass-button secondary-cta" href="https://calendly.com" target="_blank" rel="noreferrer">
                <Icon type="calendar" />
                <span>Calendly</span>
              </a>
            </div>
          </div>

          <div className="contact-details">
            <p>
              <Icon type="mail" />
              <span>hello@ajrlewis.com</span>
            </p>
            <p>
              <Icon type="phone" />
              <span>+44 7535 791970</span>
            </p>
            <p>
              <Icon type="pin" />
              <span>London, UK (Worldwide)</span>
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
