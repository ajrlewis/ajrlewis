"use client";

import { useState } from "react";

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
  copyValue?: string;
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
  iconSrc: string;
  highlights?: Array<{ label: string; value: string }>;
  result?: string;
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
  },
  {
    label: "Nostr",
    value: "npub1your...key",
    href: "https://njump.me/npub1yourfullnostrpublickeyhere",
    icon: "link",
    iconSrc: "/icons/nostr.svg",
    copyValue: "npub1yourfullnostrpublickeyhere"
  }
];

const phdDownloads: DownloadAction[] = [
  { label: "PhD Thesis", href: "/thesis.pdf", icon: "file", iconSrc: "/icons/telescope.svg" }
];

const services: Service[] = [
  {
    title: "Consulting",
    description:
      "I assess workflows and constraints to identify where AI can improve ROI, then work with your CTO to define and implement the right delivery path.",
    highlights: [
      { label: "The Discovery", value: "Map workflows, constraints, and baseline metrics before committing to build." },
      { label: "The Priorities", value: "Rank use cases by ROI, risk, and implementation complexity." },
      { label: "The Plan", value: "Define architecture, rollout phases, and ownership with your CTO and technical leads." }
    ],
    result:
      "You get a clear, measurable AI roadmap your team can execute with confidence.",
    iconSrc: "/icons/service-architecture.svg"
  },
  {
    title: "Implementing",
    description:
      "I build high-performance, provider-agnostic systems designed for total ownership. By avoiding proprietary silos and integrating automated evals from day one, your infrastructure stays portable and scalable.",
    highlights: [
      { label: "The Stack", value: "Production-grade FastAPI, Next.js, and PostgreSQL (pgvector)." },
      { label: "The Strategy", value: "Docker-containerized by default for cloud or on-prem deployment." },
      { label: "The Edge", value: "Custom drag-and-drop workflows for fast iteration without architectural drift." }
    ],
    result:
      "You own the code, the data, and the keys, with a production-ready system instead of a black-box subscription.",
    iconSrc: "/icons/service-workflow.svg"
  },
  {
    title: "Teaching",
    description:
      "I mentor your team with practical handover, documentation, and training so they can operate and extend what we build with confidence.",
    highlights: [
      { label: "The Handover", value: "Runbooks, architecture notes, and operating checklists tailored to your team." },
      { label: "The Training", value: "Hands-on sessions for developers and operators across workflows, evals, and day-to-day usage." },
      { label: "The Goal", value: "Internal ownership from week one, with clear support boundaries and maintenance rhythms." }
    ],
    result:
      "Your team can run, improve, and extend the system without long-term external dependency.",
    iconSrc: "/icons/service-delivery.svg"
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
    title: "Downing LLP",
    tags: ["LangGraph", "Azure", "HITL", "Microsoft Teams"],
    description:
      "Support triage was fragmented; delivered an Azure-native LangGraph orchestration platform with Teams HITL workflows, secure state management, and provider-flexible automation.",
    outcome: "Reduced triage time and clearer priorities.",
    icon: "chat",
    iconSrc: "/icons/downing-site-icon.png"
  },
  {
    title: "Digital Speed",
    tags: ["Next.js", "Vercel AI SDK", "Slack", "Internal Tools"],
    description:
      "Teams needed reliable operational answers in Slack; built a TypeScript/Next.js AI agent with handbook and tool integrations for fast, in-context support.",
    outcome: "Faster answers, fewer context switches.",
    icon: "bolt",
    iconSrc: "/icons/digitalspeed-site-icon.ico"
  },
  {
    title: "Hyperhumans",
    tags: ["FastAPI", "OpenAI", "SQLAlchemy", "RBAC"],
    description:
      "Lead discovery was manual and noisy; built the Neuralead FastAPI platform for automated enrichment, scoring, and monetized API delivery at scale.",
    outcome: "Higher-quality leads and more relevant conversations.",
    icon: "spark",
    iconSrc: "/icons/hyperhumans-site-icon.jpg"
  },
  {
    title: "W4lkies",
    badge: "Open Source",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Docker"],
    description:
      "Operations were manual and admin-heavy; built W4lkies, a full-stack platform unifying bookings, customer and dog profiles, invoicing, and expenses.",
    outcome: "Lower admin overhead and smoother daily operations.",
    icon: "network",
    iconSrc: "/icons/w4lkies-site-icon.svg"
  }
];

function Icon({ type }: { type: IconType }) {
  return <span className={`icon icon-${type}`} aria-hidden="true" />;
}

export default function HomePage() {
  const [copiedContact, setCopiedContact] = useState<string | null>(null);

  const copyContactValue = async (label: string, value: string) => {
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      return;
    }
    try {
      await navigator.clipboard.writeText(value);
      setCopiedContact(label);
      window.setTimeout(() => {
        setCopiedContact((current) => (current === label ? null : current));
      }, 1800);
    } catch {
      setCopiedContact(null);
    }
  };

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
                <div className="contact-action" key={item.label} role="listitem">
                  <a
                    className="glass-button contact-button"
                    href={item.href}
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
                  {item.copyValue ? (
                    <button
                      className="contact-copy-button"
                      type="button"
                      onClick={() => void copyContactValue(item.label, item.copyValue!)}
                    >
                      {copiedContact === item.label ? "Copied" : "Copy npub"}
                    </button>
                  ) : null}
                </div>
              ))}
            </div>

          </div>

          <div className="hero-media">
            <div className="image-frame glass-panel">
              <img src="/profile.jpg" alt="Alex Lewis observing at ALMA/LABOCA in the Atacama Desert, Chile" />
              <div className="image-caption">
                <img className="caption-icon-image" src="/icons/telescope.svg" alt="" aria-hidden="true" />
                <span>In front of ALMA whilst observing with LABOCA, Atacama Desert, Chile, 2016.</span>
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
                <div className="service-icon" aria-hidden="true">
                  <img className="service-icon-image" src={service.iconSrc} alt="" />
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                {service.highlights ? (
                  <ul className="service-highlights" aria-label={`${service.title} highlights`}>
                    {service.highlights.map((item) => (
                      <li key={item.label}>
                        <strong>{item.label}:</strong> {item.value}
                      </li>
                    ))}
                  </ul>
                ) : null}
                {service.result ? (
                  <p className="service-result">
                    <strong>The Result:</strong> {service.result}
                  </p>
                ) : null}
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
                  {project.iconSrc ? (
                    <img className="project-client-logo" src={project.iconSrc} alt="" aria-hidden="true" />
                  ) : (
                    <div className="project-icon-wrap">
                      <Icon type={project.icon} />
                    </div>
                  )}
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
