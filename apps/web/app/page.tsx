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
  iconSrc?: string;
};

type DownloadAction = {
  label: string;
  href: string;
  icon: IconType;
  iconSrc?: string;
};

type Service = {
  title: string;
  description: string;
};

type BackgroundStep = {
  title: string;
  description: string;
  downloads?: DownloadAction[];
};

type Project = {
  title: string;
  badge?: string;
  tags: string[];
  description: string;
  outcome: string;
  icon: IconType;
  iconSrc?: string;
};

const contactActions: ContactAction[] = [
  {
    label: "Call",
    value: "+44 7535 791970",
    href: "tel:+447535791970",
    icon: "phone",
    iconSrc: "/icons/phone.svg"
  },
  {
    label: "Email",
    value: "hello@ajrlewis.com",
    href: "mailto:hello@ajrlewis.com",
    icon: "mail",
    iconSrc: "/icons/email.svg"
  },
  {
    label: "LinkedIn",
    value: "ajrlewis",
    href: "https://www.linkedin.com/in/ajrlewis/",
    icon: "link",
    iconSrc: "/icons/linkedin.svg"
  },
  {
    label: "GitHub",
    value: "ajrlewis",
    href: "https://github.com/ajrlewis",
    icon: "github",
    iconSrc: "/icons/github.svg"
  }
];

const phdDownloads: DownloadAction[] = [
  { label: "Thesis", href: "/thesis.pdf", icon: "file", iconSrc: "/icons/telescope.svg" }
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

const backgroundSteps: BackgroundStep[] = [
  {
    title: "PhD",
    description: "Built large-scale data workflows and statistical models in high-volume research environments.",
    downloads: phdDownloads
  },
  {
    title: "Software Engineering",
    description: "Shipped production forecasting systems supporting 1M+ SKU/store combinations."
  },
  {
    title: "AI Engineering",
    description: "Designed and implemented LLM-powered workflows, tools, and operational automation."
  },
  {
    title: "AI Architecture",
    description: "Now leading enterprise-ready AI system design, integration, and delivery strategy."
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
    title: "Digital Speed",
    tags: ["Next.js", "Vercel AI SDK", "Slack", "Internal Tools"],
    description:
      "Internal Slack assistant connected to handbook content and operational tools for high-confidence answers in context.",
    outcome: "Faster answers, fewer context switches.",
    icon: "bolt",
    iconSrc: "/icons/slack.svg"
  },
  {
    title: "Downing LLP",
    tags: ["Microsoft Teams", "Azure", "HITL", "Ticket Routing"],
    description:
      "Teams-based triage assistant for summarizing, routing, and prioritizing internal support requests with clear escalation paths.",
    outcome: "Reduced triage time and clearer priorities.",
    icon: "chat",
    iconSrc: "/icons/microsoft-teams.svg"
  },
  {
    title: "Hyperhumans",
    tags: ["LLM", "Leadgen", "Automation", "Integration"],
    description:
      "LLM-driven lead generation workflow integrating enrichment and qualification signals into existing outreach operations.",
    outcome: "Higher-quality leads and more relevant conversations.",
    icon: "spark",
    iconSrc: "/icons/hyperhumans.png"
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
              <span>A. J. R.</span> <span className="gold">Lewis</span>
            </h1>
            <p className="hero-title">AI Architect</p>
            <div className="accent-line" aria-hidden="true" />
            <p className="hero-statement">
              Hi, I&apos;m Alex. I design and ship production-ready AI systems that solve{" "}
              <span className="blue">real problems</span>.
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
                  {item.iconSrc ? (
                    <img className="contact-icon-image" src={item.iconSrc} alt="" aria-hidden="true" />
                  ) : (
                    <Icon type={item.icon} />
                  )}
                  <span className="button-copy">
                    <span>{item.label}</span>
                    <small>{item.value}</small>
                  </span>
                </a>
              ))}
            </div>

          </div>

          <div className="hero-media">
            <div className="image-frame glass-panel">
              <img src="/profile.jpg" alt="Alex Lewis observing at ALMA/LABOCA in the Atacama Desert, Chile" />
              <div className="image-caption">
                <img className="caption-icon-image" src="/icons/telescope.svg" alt="" aria-hidden="true" />
                <span>Observing at ALMA/LABOCA, Atacama Desert, Chile, 2016</span>
              </div>
            </div>
          </div>
        </section>

        <section className="background" aria-label="My Background">
          <p className="section-label">MY BACKGROUND</p>
          <div className="background-panel glass-panel">
            <p className="background-summary">
              PhD in extragalactic astrophysics (big data) to software engineering on 1M+ SKU/store forecasting
              systems, to AI engineering, to AI architecture.
            </p>
            <div className="background-grid">
              {backgroundSteps.map((step, index) => (
                <article className="background-step" key={step.title}>
                  <span className="background-index">{String(index + 1).padStart(2, "0")}</span>
                  <h2>{step.title}</h2>
                  <p>{step.description}</p>
                  {step.downloads ? (
                    <div className="button-row background-links" role="list" aria-label={`${step.title} documents`}>
                      {step.downloads.map((item) => (
                        <a
                          className="glass-button file-button"
                          href={item.href}
                          key={item.label}
                          role="listitem"
                          target={item.href.endsWith(".pdf") ? "_blank" : undefined}
                          rel={item.href.endsWith(".pdf") ? "noreferrer" : undefined}
                        >
                          {item.iconSrc ? (
                            <img className="download-icon-image" src={item.iconSrc} alt="" aria-hidden="true" />
                          ) : (
                            <Icon type={item.icon} />
                          )}
                          <span className="button-copy">
                            <span>{item.label}</span>
                            <small>PDF</small>
                          </span>
                        </a>
                      ))}
                    </div>
                  ) : null}
                </article>
              ))}
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
                    {project.iconSrc ? (
                      <img className="project-icon-image" src={project.iconSrc} alt="" aria-hidden="true" />
                    ) : (
                      <Icon type={project.icon} />
                    )}
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
            <h2>Let&apos;s scope your next AI system.</h2>
            <p>
              Bring your constraints, timelines, and goals. We can map a pragmatic architecture and delivery path
              your team can execute.
            </p>
            <div className="button-row">
              <a className="cta-button" href="https://calendly.com/ajrlewis" target="_blank" rel="noreferrer">
                <Icon type="calendar" />
                <span>Book a Consultation</span>
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
            <div className="bitcoin-badge">
              <img className="bitcoin-icon-image" src="/icons/bitcoin.svg" alt="" aria-hidden="true" />
              <span className="bitcoin-badge-copy">
                <strong>Bitcoin accepted here</strong>
                <small>for consulting invoices</small>
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
