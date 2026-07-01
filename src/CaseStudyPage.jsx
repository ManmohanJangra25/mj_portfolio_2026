import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { caseStudies, getCaseStudy } from './caseStudies.js'
import './case-study.css'

function Arrow({ direction = 'right' }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`case-arrow case-arrow--${direction}`}
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

function CaseStudyNav() {
  return (
    <header className="case-nav">
      <Link className="case-logo" to="/" aria-label="Back to portfolio">
        MJ<span>.</span>
      </Link>
      <Link className="case-back" to="/#projects">
        <Arrow direction="left" />
        All projects
      </Link>
    </header>
  )
}

function Metric({ value, label, index }) {
  return (
    <article className="case-metric" data-aos="fade-up" data-aos-delay={index * 80}>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  )
}

export default function CaseStudyPage() {
  const { slug } = useParams()
  const study = getCaseStudy(slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
    if (!study) return undefined

    const previousTitle = document.title
    document.title = `${study.title} Case Study · Manmohan Jangra`
    return () => { document.title = previousTitle }
  }, [slug, study])

  if (!study) return <Navigate to="/" replace />

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug)
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length]

  return (
    <main className="case-page">
      <CaseStudyNav />

      <section className="case-hero" data-number={study.number}>
        <div className="case-hero__noise" aria-hidden="true" />
        <div className="case-shell case-hero__content">
          <div className="case-kicker" data-aos="fade-down">
            <span>Case study / {study.number}</span>
            <span>{study.eyebrow}</span>
          </div>
          <h1 data-aos="fade-up" data-aos-delay="60">{study.title}</h1>
          <p className="case-deck" data-aos="fade-up" data-aos-delay="120">
            {study.summary}
          </p>
          <div className="case-tags" data-aos="fade-up" data-aos-delay="180">
            {study.stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        </div>
      </section>

      <div className="case-shell">
        <figure className="case-cover" data-aos="zoom-out" data-aos-duration="900">
          <img src={study.image} alt={study.imageAlt} />
          <figcaption>{study.number} / Engineering case study</figcaption>
        </figure>

        <section className="case-facts" aria-label="Project facts" data-aos="fade-up">
          {study.facts.map(([label, value]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </section>

        <section className="case-section case-section--split">
          <div className="case-section__label" data-aos="fade-right">01 / The challenge</div>
          <div className="case-copy" data-aos="fade-up">
            <h2>{study.challenge.title}</h2>
            {study.challenge.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>
        </section>

        <section className="case-metrics" aria-label="Project outcomes">
          {study.metrics.map((metric, index) => (
            <Metric key={metric.label} {...metric} index={index} />
          ))}
        </section>

        <section className="case-section">
          <div className="case-section__heading" data-aos="fade-up">
            <span>02 / The approach</span>
            <h2>Decisions that shaped the build.</h2>
          </div>
          <div className="case-decisions">
            {study.approach.map((decision, index) => (
              <article
                className="case-decision"
                key={decision.title}
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 80}
              >
                <span>{decision.index}</span>
                <h3>{decision.title}</h3>
                <p>{decision.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-architecture">
          <div className="case-section__heading" data-aos="fade-up">
            <span>03 / System flow</span>
            <h2>A simple path through a complex system.</h2>
          </div>
          <div className="case-flow">
            {study.architecture.map(([number, title, text], index) => (
              <article key={title} data-aos="fade-left" data-aos-delay={index * 70}>
                <span>{number}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
                {index < study.architecture.length - 1 && <Arrow />}
              </article>
            ))}
          </div>
        </section>

        <section className="case-section case-result">
          <div data-aos="fade-right">
            <span>04 / The outcome</span>
            <h2>Built to move the work forward.</h2>
          </div>
          <div className="case-result__copy" data-aos="fade-up">
            <p>{study.outcome}</p>
            <blockquote>
              <span>Key lesson</span>
              “{study.lesson}”
            </blockquote>
          </div>
        </section>
      </div>

      <footer className="case-next">
        <Link to={`/case-study/${nextStudy.slug}`}>
          <span>Next case study / {nextStudy.number}</span>
          <strong>{nextStudy.title}</strong>
          <Arrow />
        </Link>
      </footer>
    </main>
  )
}
