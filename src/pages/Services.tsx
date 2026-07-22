import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, Code2, Brain, Cloud, Globe, Cpu, Puzzle, 
  CheckCircle2, Network, UserCheck, Zap, 
  Layers, Rocket, TrendingUp, Shield, Clock, Star
} from 'lucide-react'

const services = [
  {
    icon: <Code2 size={28} />,
    title: 'Software Development',
    desc: 'From web and mobile apps to complex enterprise systems — we engineer software that scales, performs, and delights users.',
    offerings: ['Custom web application development','Mobile app development (iOS & Android)','API design and integration','Legacy system modernisation','SaaS product development','Quality assurance & testing'],
    tech: ['React','Node.js','Python','TypeScript','React Native','PostgreSQL'],
    color: '#2563EB',
  },
  {
    icon: <Brain size={28} />,
    title: 'AI Solutions',
    desc: 'Embed intelligence into your products and operations with AI/ML engineering — from natural language processing to predictive analytics.',
    offerings: ['Machine learning model development','Natural language processing','Computer vision systems','AI chatbots & voice agents','Predictive analytics','AI model fine-tuning & deployment'],
    tech: ['Python','TensorFlow','PyTorch','OpenAI','LangChain','Hugging Face'],
    color: '#7C3AED',
  },
  {
    icon: <Cloud size={28} />,
    title: 'Cloud Solutions',
    desc: 'Architect, migrate, and manage cloud infrastructure with security, scalability, and cost-efficiency at the core.',
    offerings: ['Cloud architecture design','AWS / GCP / Azure migration','DevOps & CI/CD pipelines','Kubernetes & container orchestration','Cloud cost optimisation','Managed cloud services'],
    tech: ['AWS','GCP','Terraform','Docker','Kubernetes','GitHub Actions'],
    color: '#0891B2',
  },
  {
    icon: <Globe size={28} />,
    title: 'Digital Transformation',
    desc: 'We help organisations evolve from legacy systems to intelligent digital operations with strategy, design, and delivery.',
    offerings: ['Digital strategy consulting','Business process re-engineering','Change management support','Digital platform design','Staff training & enablement','Technology roadmapping'],
    tech: ['Agile','Lean','Design Thinking','OKRs','JIRA','Confluence'],
    color: '#059669',
  },
  {
    icon: <Cpu size={28} />,
    title: 'Intelligent Automation',
    desc: 'Automate repetitive workflows and unlock operational efficiency through RPA, AI agents, and smart process orchestration.',
    offerings: ['Robotic Process Automation','Workflow orchestration','AI agent deployment','Document processing automation','ERP & CRM automation','Monitoring & alerting systems'],
    tech: ['UiPath','n8n','Python','LLMs','Make.com','Zapier'],
    color: '#D97706',
  },
  {
    icon: <Puzzle size={28} />,
    title: 'Software Integrations',
    desc: 'Connect your digital ecosystem seamlessly — from payment gateways to ERPs, CRMs, and third-party APIs.',
    offerings: ['REST & GraphQL API integrations','Payment gateway integrations','ERP & CRM connectivity','Data pipeline engineering','Webhook & event-driven systems','Third-party SaaS integrations'],
    tech: ['REST','GraphQL','M-Pesa','Stripe','Salesforce','SAP'],
    color: '#DC2626',
  },
  {
    icon: <Network size={28} />,
    title: 'Enterprise Architecture as a Service',
    desc: 'Managed enterprise architecture expertise — without the full-time overhead. We design, govern, and evolve your technology landscape using TOGAF-aligned frameworks.',
    offerings: ['Enterprise architecture assessment','TOGAF-aligned architecture blueprints','Business capability mapping','Application & data landscape analysis','Technology roadmap design','Architecture governance frameworks','Cloud & integration architecture','Solution architecture reviews'],
    tech: ['TOGAF','ArchiMate','AWS Well-Architected','Miro','Confluence','JIRA'],
    color: '#D97706',
  },
  {
    icon: <UserCheck size={28} />,
    title: 'CoreTeam — Talent Resourcing',
    desc: 'Pre-vetted African tech talent embedded directly into your team. Scale fast, fill critical skills gaps, or staff entire squads — on contract or permanently.',
    offerings: ['Pre-vetted software engineers','UI/UX designers on demand','Product managers & scrum masters','DevOps & cloud engineers','Flexible contract or permanent placement','Dedicated squad & team augmentation','Technical screening & onboarding','Ongoing performance management'],
    tech: ['Talent Pool','Skills Assessment','Agile Delivery','Remote-first','EOR Services','Staff Aug'],
    color: '#DC2626',
  },
]

const process = [
  { step: '01', title: 'Discovery', desc: 'Deep-dive workshops to understand your business needs, goals, and technical landscape.' },
  { step: '02', title: 'Strategy', desc: 'We design the solution architecture, technology stack, and project roadmap.' },
  { step: '03', title: 'Design', desc: 'UX/UI design with interactive prototypes, reviewed and refined with your team.' },
  { step: '04', title: 'Development', desc: 'Agile sprints with continuous delivery, code reviews, and regular client demos.' },
  { step: '05', title: 'Testing', desc: 'Rigorous QA: unit tests, integration tests, performance testing, and security audits.' },
  { step: '06', title: 'Launch & Scale', desc: 'Production deployment, monitoring setup, and ongoing support as you grow.' },
]

export default function Services() {
  const [expandedService, setExpandedService] = useState<number | null>(null)

  return (
    <div className="services-elite">
      {/* ===== HERO - WITH IMAGE ===== */}
      <section className="services-elite__hero">
        <div className="services-elite__hero-image">
          <img 
            src="/services_hero.webp"
            alt="Services Hero"
            className="services-elite__hero-img"
          />
          <div className="services-elite__hero-overlay" />
        </div>
        
        <div className="services-elite__container">
          <div className="services-elite__hero-content">
            <div className="services-elite__hero-badge">
              <Star size={14} />
              <span>Our Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-elite__grid-section">
        <div className="services-elite__container">
          <div className="services-elite__grid-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="services-elite__grid-badge">What We Do</span>
              <h2 className="services-elite__grid-title">
                End-to-End <span className="services-elite__grid-accent">Digital Capabilities</span>
              </h2>
            </motion.div>
          </div>

          <div className="services-elite__grid">
            {services.map((service, index) => {
              const isExpanded = expandedService === index

              return (
                <motion.div
                  key={service.title}
                  className={`services-elite__card ${isExpanded ? 'services-elite__card--expanded' : ''}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  style={{
                    '--card-color': service.color,
                  } as React.CSSProperties}
                >
                  <div 
                    className="services-elite__card-accent"
                    style={{ background: service.color }}
                  />

                  <div className="services-elite__card-top">
                    <div 
                      className="services-elite__card-icon"
                      style={{ background: `${service.color}12`, color: service.color }}
                    >
                      {service.icon}
                    </div>
                    <button 
                      className="services-elite__card-toggle"
                      onClick={() => setExpandedService(isExpanded ? null : index)}
                      style={{ borderColor: service.color }}
                    >
                      <span>{isExpanded ? '−' : '+'}</span>
                    </button>
                  </div>

                  <h3 className="services-elite__card-title">{service.title}</h3>
                  <p className="services-elite__card-desc">{service.desc}</p>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="services-elite__card-expanded"
                      >
                        <div className="services-elite__card-offerings">
                          {service.offerings.map((offering) => (
                            <div key={offering} className="services-elite__card-offering">
                              <CheckCircle2 size={14} style={{ color: service.color }} />
                              <span>{offering}</span>
                            </div>
                          ))}
                        </div>
                        <div className="services-elite__card-tech">
                          {service.tech.map((tech) => (
                            <span 
                              key={tech} 
                              className="services-elite__card-tech-item"
                              style={{ borderColor: `${service.color}30` }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="services-elite__process">
        <div className="services-elite__container">
          <div className="services-elite__process-header">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="services-elite__process-badge">Our Process</span>
              <h2 className="services-elite__process-title">
                How We <span className="services-elite__process-accent">Deliver</span>
              </h2>
              <p className="services-elite__process-desc">
                A proven 6-step process that ensures every project is delivered on time, on budget, and above expectations.
              </p>
            </motion.div>
          </div>

          <div className="services-elite__process-grid">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                className="services-elite__process-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <div className="services-elite__process-number">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="services-elite__cta">
        <div className="services-elite__container">
          <div className="services-elite__cta-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="services-elite__cta-badge">
                <Rocket size={14} />
                Ready to Transform?
              </span>
              <h2 className="services-elite__cta-title">
                Let's Build Something <br />
                <span className="services-elite__cta-accent">Extraordinary Together</span>
              </h2>
              <p className="services-elite__cta-desc">
                Tell us about your project and we'll put together a tailored proposal within 48 hours.
              </p>
              <Link to="/contact" className="services-elite__cta-btn">
                Start a Conversation <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        /* ================================================================
           SERVICES ELITE - CLEAN, PROFESSIONAL, UNIQUE
           ================================================================ */

        .services-elite {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0F172A;
        }

        .services-elite__container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ---- Hero ---- */
        .services-elite__hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .services-elite__hero-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .services-elite__hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .services-elite__hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.4) 50%, rgba(15, 23, 42, 0.7) 100%);
          z-index: 1;
        }

        .services-elite__hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 2rem 0;
        }

        .services-elite__hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 2rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          font-size: 1rem;
          font-weight: 600;
          color: #FFFFFF;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          backdrop-filter: blur(12px);
        }

        .services-elite__hero-badge svg {
          color: #FBBF24;
        }

        /* ---- Grid Section ---- */
        .services-elite__grid-section {
          padding: 5rem 0;
          background: #F8FAFC;
        }

        .services-elite__grid-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .services-elite__grid-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          color: #4338CA;
          background: #EEF2FF;
          padding: 0.35rem 1rem;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.75rem;
        }

        .services-elite__grid-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.03em;
        }

        .services-elite__grid-accent {
          color: #2563EB;
        }

        .services-elite__grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        /* ---- Card ---- */
        .services-elite__card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 1.75rem;
          position: relative;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          border: 1px solid #E2E8F0;
          cursor: default;
        }

        .services-elite__card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
          border-color: var(--card-color);
        }

        .services-elite__card--expanded {
          grid-column: span 2;
        }

        .services-elite__card-accent {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          border-radius: 20px 20px 0 0;
          opacity: 0.6;
        }

        .services-elite__card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1rem;
        }

        .services-elite__card-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .services-elite__card:hover .services-elite__card-icon {
          transform: scale(1.05);
        }

        .services-elite__card-toggle {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          border: 1px solid #E2E8F0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          background: #F8FAFC;
          font-size: 1rem;
          font-weight: 600;
          color: #64748B;
          flex-shrink: 0;
        }

        .services-elite__card-toggle:hover {
          background: #FFFFFF;
          transform: scale(1.05);
        }

        .services-elite__card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.4rem;
        }

        .services-elite__card-desc {
          font-size: 0.85rem;
          color: #64748B;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .services-elite__card-expanded {
          overflow: hidden;
          padding-top: 1rem;
        }

        .services-elite__card-offerings {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem;
          margin-bottom: 1rem;
        }

        .services-elite__card-offering {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          color: #475569;
        }

        .services-elite__card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-top: 0.5rem;
        }

        .services-elite__card-tech-item {
          padding: 0.15rem 0.6rem;
          border: 1px solid #E2E8F0;
          border-radius: 4px;
          font-size: 0.65rem;
          font-weight: 600;
          color: #475569;
          background: #F8FAFC;
        }

        /* ---- Process ---- */
        .services-elite__process {
          padding: 5rem 0;
          background: #FFFFFF;
        }

        .services-elite__process-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .services-elite__process-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          color: #4338CA;
          background: #EEF2FF;
          padding: 0.35rem 1rem;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.75rem;
        }

        .services-elite__process-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }

        .services-elite__process-accent {
          color: #2563EB;
        }

        .services-elite__process-desc {
          font-size: 1rem;
          color: #64748B;
          max-width: 500px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .services-elite__process-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .services-elite__process-card {
          background: #F8FAFC;
          border-radius: 16px;
          padding: 1.75rem;
          border: 1px solid #E2E8F0;
          transition: all 0.3s ease;
          text-align: center;
        }

        .services-elite__process-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.04);
          border-color: #2563EB;
        }

        .services-elite__process-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #2563EB;
          line-height: 1;
          margin-bottom: 0.5rem;
        }

        .services-elite__process-card h4 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.3rem;
        }

        .services-elite__process-card p {
          font-size: 0.85rem;
          color: #64748B;
          line-height: 1.6;
        }

        /* ---- CTA ---- */
        .services-elite__cta {
          padding: 5rem 0;
          background: #0F172A;
          overflow: hidden;
          position: relative;
        }

        .services-elite__cta-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .services-elite__cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.25rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
        }

        .services-elite__cta-badge svg {
          color: #FBBF24;
        }

        .services-elite__cta-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .services-elite__cta-accent {
          color: #FBBF24;
        }

        .services-elite__cta-desc {
          font-size: 1.05rem;
          color: #94A3B8;
          max-width: 480px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .services-elite__cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: #2563EB;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 12px 32px rgba(37, 99, 235, 0.2);
        }

        .services-elite__cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 48px rgba(37, 99, 235, 0.3);
          background: #1D4ED8;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1200px) {
          .services-elite__grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .services-elite__grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .services-elite__card--expanded {
            grid-column: span 2;
          }
          .services-elite__process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .services-elite__hero {
            min-height: 70vh;
          }
          .services-elite__container {
            padding: 0 16px;
          }
          .services-elite__grid {
            grid-template-columns: 1fr;
          }
          .services-elite__card--expanded {
            grid-column: span 1;
          }
          .services-elite__card-offerings {
            grid-template-columns: 1fr;
          }
          .services-elite__process-grid {
            grid-template-columns: 1fr;
            max-width: 400px;
          }
          .services-elite__hero-badge {
            font-size: 0.85rem;
            padding: 0.5rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .services-elite__hero {
            min-height: 60vh;
          }
          .services-elite__card {
            padding: 1.25rem;
          }
          .services-elite__process-card {
            padding: 1.25rem;
          }
          .services-elite__hero-badge {
            font-size: 0.75rem;
            padding: 0.4rem 1.2rem;
          }
        }
      `}</style>
    </div>
  )
}