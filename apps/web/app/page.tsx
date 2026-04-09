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
  { label: "PhD Thesis", href: "/thesis.pdf", icon: "file", iconSrc: "/icons/telescope.svg" }
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
    title: "Astrophysicist",
    description: "Built large-scale data workflows and statistical models in high-volume research environments.",
    downloads: phdDownloads
  },
  {
    title: "Software Engineer",
    description: "Shipped production forecasting systems supporting 1M+ SKU/store combinations with adaptive retraining."
  },
  {
    title: "AI Architect",
    description:
      "Designed and implemented LLM-powered workflows and automation, now leading enterprise-ready AI system design, integration, and delivery strategy."
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
      "Built Speedy, an internal Slack-based agent in TypeScript/Next.js using the Vercel AI SDK, handling team operational queries through a multi-step tool-calling loop over handbook data (pgvector) and live integrations (GitHub via MCP, Productive.io); added structured logging and evals to iterate on response quality.",
    outcome: "Faster answers, fewer context switches.",
    icon: "bolt",
    iconSrc: "/icons/slack.svg"
  },
  {
    title: "Downing LLP",
    tags: ["LangGraph", "Azure", "HITL", "Microsoft Teams"],
    description:
      "Architected and delivered a Python-based, Azure-native, model-agnostic AI orchestration platform (LangGraph) to automate internal support triage. Engineered a manifest-driven multi-agent framework enabling dynamic registration of department-specific bots for enterprise scaling. Delivered a production-ready Phase 1 pilot with multi-provider switching (Anthropic, Google, OpenAI) and HITL validation via Microsoft Teams for internal digital team query classification. Implemented secure, thread-aware state management using Azure PostgreSQL and Managed Identity for reliable conversation persistence and traceability. Centralized prompt management and evaluation with LangSmith to improve debugging visibility and iteration speed. Established a gated, trunk-based CI/CD pipeline in Azure DevOps, enabling progression from R&D to UAT readiness.",
    outcome: "Reduced triage time and clearer priorities.",
    icon: "chat",
    iconSrc: "/icons/microsoft-teams.svg"
  },
  {
    title: "Hyperhumans",
    tags: ["FastAPI", "OpenAI", "SQLAlchemy", "RBAC"],
    description:
      "Architected the Neuralead lead-intelligence API, delivering a scalable platform for automated company discovery and multi-source LLM enrichment. Engineered complex multi-stage enrichment pipelines integrating Bing Search, OpenAI, and Hunter.io to automate high-volume contact data extraction and lead scoring. Led the architectural migration from a Flask prototype to a high-performance FastAPI backend, implementing robust Pydantic schema validation to ensure 99.9% API contract reliability. Designed and implemented a commercial-grade API monetization engine with credit metering and RBAC to support tiered subscription models. Optimized large-scale data access patterns and pagination using SQLAlchemy, reducing response latency for downstream consumers of high-density datasets. Contributed to production deployment workflows through pull requests and main-branch integration in CI/CD pipelines supporting deployment to Google Cloud Run.",
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
              Hi, I&apos;m Alex.
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
              I moved from academia into tangible software engineering, then into what I care most about: architecting
              practical AI systems.
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
              <span className="background-progress" aria-hidden="true">
                ...
              </span>
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
