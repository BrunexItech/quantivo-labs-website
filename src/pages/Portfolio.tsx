import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, TrendingUp, CheckCircle2, Building2, 
  Users, Award, BarChart3, Clock, Zap, Target,
  Eye, Globe, Briefcase, Layers, Rocket, ChevronDown, ChevronUp,
  Star, Sparkles
} from 'lucide-react'

const cases = [
  { 
    id: 1,
    product: 'DFS – Digital Financial Services', 
    client: 'KenyaFinance Group', 
    tag: 'Digital Finance', 
    tagColor: '#4F46E5',
    problem: 'A financial services group needed a unified digital platform to manage agent banking, mobile loans, and savings products across 50+ branches.',
    solution: 'Built a comprehensive DFS platform integrating mobile money APIs, digital lending engine, agent network management, and customer KYC onboarding.',
    features: ['Agent banking network (50+ agents)', 'Digital lending with credit scoring', 'Mobile money wallet', 'Real-time compliance dashboard'],
    results: [{ metric: '50+', label: 'Agent outlets' }, { metric: '₦500M+', label: 'Loans disbursed/month' }, { metric: '60%', label: 'Customer acquisition cost reduction' }, { metric: '3 days', label: 'Loan approval time' }],
    stack: ['Node.js', 'PostgreSQL', 'M-Pesa API', 'Redis', 'AWS'],
    gradient: 'from-indigo-500 to-blue-500',
    icon: <Building2 size={24} />,
  },
  { 
    id: 2,
    product: 'School Management System', 
    client: 'Elimu Academy Group', 
    tag: 'EduTech', 
    tagColor: '#059669',
    problem: 'A group of 8 private schools was managing fees, attendance, and exams using paper registers and spreadsheets — error-prone and unscalable.',
    solution: 'Deployed a unified school management platform with online fee payment via M-Pesa, digital attendance, timetabling, exam management, and a parent portal.',
    features: ['M-Pesa fee collection', 'Digital attendance registers', 'Timetable management', 'Parent notification portal'],
    results: [{ metric: '8 schools', label: 'On single platform' }, { metric: '95%', label: 'Fee collection rate' }, { metric: '80%', label: 'Admin workload reduction' }, { metric: '4.8/5', label: 'Parent satisfaction score' }],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Twilio', 'M-Pesa'],
    gradient: 'from-emerald-500 to-teal-500',
    icon: <Users size={24} />,
  },
  { 
    id: 3,
    product: 'Hospital Management System', 
    client: 'MedLine Clinics', 
    tag: 'HealthTech', 
    tagColor: '#DC2626',
    problem: 'A chain of 5 private hospitals was losing revenue to billing errors and managing patient records in disconnected systems across departments.',
    solution: 'Built a complete hospital information system covering OPD/IPD, pharmacy, laboratory, insurance billing, and real-time financial reporting.',
    features: ['Electronic medical records', 'Insurance claims automation', 'Pharmacy & lab integration', 'Multi-branch reporting'],
    results: [{ metric: '70%', label: 'Admin workload reduction' }, { metric: '40%', label: 'Revenue leakage stopped' }, { metric: '5 hospitals', label: 'Unified on one system' }, { metric: '0', label: 'Billing errors monthly' }],
    stack: ['React', 'Django', 'PostgreSQL', 'HL7 FHIR', 'AWS'],
    gradient: 'from-rose-500 to-red-500',
    icon: <Award size={24} />,
  },
  { 
    id: 4,
    product: 'POS System', 
    client: 'Karibu Supermarkets', 
    tag: 'Retail', 
    tagColor: '#0891B2',
    problem: 'A 15-outlet supermarket chain needed a unified POS system with offline support, centralised stock management, and a loyalty programme.',
    solution: 'Deployed an offline-first cloud POS with real-time inventory sync, multi-outlet reporting, M-Pesa integration, and a 20,000-member loyalty programme.',
    features: ['Offline-first architecture', 'Real-time inventory sync', 'M-Pesa at checkout', '15-outlet centralised reporting'],
    results: [{ metric: '15 outlets', label: 'On single system' }, { metric: '99.8%', label: 'Uptime including offline' }, { metric: '20K+', label: 'Loyalty members' }, { metric: '28%', label: 'Faster checkout speed' }],
    stack: ['Electron', 'React', 'Node.js', 'SQLite', 'PostgreSQL'],
    gradient: 'from-cyan-500 to-blue-500',
    icon: <BarChart3 size={24} />,
  },
  { 
    id: 5,
    product: 'Hotel POS', 
    client: 'Savanna Resorts Group', 
    tag: 'Hospitality', 
    tagColor: '#0D9488',
    problem: 'A 4-property boutique hotel group had separate POS systems per restaurant and bar, making reconciliation and room charge posting a manual nightmare.',
    solution: 'Built a unified hotel POS connecting restaurant, bar, room service, and spa — with automatic room charge posting and a single end-of-day reconciliation dashboard.',
    features: ['Room charge posting', 'Multi-outlet integration', 'Real-time stock control', 'Automated EOD reconciliation'],
    results: [{ metric: '4 properties', label: 'Unified system' }, { metric: '3hrs → 15min', label: 'EOD reconciliation' }, { metric: '₦0', label: 'Manual posting errors' }, { metric: '30%', label: 'F&B cost reduction' }],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Thermal Print API'],
    gradient: 'from-teal-500 to-emerald-500',
    icon: <Briefcase size={24} />,
  },
  { 
    id: 6,
    product: 'PSP – Payment Service Provider', 
    client: 'RetailBank KE', 
    tag: 'Fintech', 
    tagColor: '#4F46E5',
    problem: 'A mid-sized retail bank needed reliable, scalable payment processing infrastructure to handle growing transaction volumes and integrate with mobile money.',
    solution: 'Built a PCI-DSS compliant PSP with real-time fraud detection, M-Pesa and Paystack integration, and a merchant dashboard supporting 500+ merchants.',
    features: ['Real-time fraud detection', 'Multi-gateway routing', 'Merchant self-service portal', 'Settlement reconciliation'],
    results: [{ metric: '99.97%', label: 'Uptime achieved' }, { metric: '3.2M+', label: 'Transactions/month' }, { metric: '40%', label: 'Fraud reduction' }, { metric: '500+', label: 'Merchants onboarded' }],
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'AWS Lambda', 'M-Pesa API'],
    gradient: 'from-indigo-500 to-purple-500',
    icon: <Zap size={24} />,
  },
  { 
    id: 7,
    product: 'AI Call Center', 
    client: 'TelcoKE', 
    tag: 'AI', 
    tagColor: '#7C3AED',
    problem: 'A telecoms company was struggling with 5,000+ daily support calls, long wait times, and high agent costs in a bilingual (Swahili/English) market.',
    solution: 'Deployed an AI voice agent system supporting Swahili and English, handling account queries, bill payments, and smart escalations to human agents.',
    features: ['Multilingual voice AI (EN + SW)', 'Real-time sentiment analysis', 'CRM integration', 'Smart escalation logic'],
    results: [{ metric: '65%', label: 'Calls resolved by AI' }, { metric: '60%', label: 'Cost reduction' }, { metric: '<30s', label: 'Average wait time' }, { metric: '4.4/5', label: 'Customer satisfaction' }],
    stack: ['Python', 'Whisper ASR', 'GPT-4', 'Twilio', 'FastAPI'],
    gradient: 'from-purple-500 to-violet-500',
    icon: <Target size={24} />,
  },
  { 
    id: 8,
    product: 'Sacco Management System', 
    client: 'Elimu SACCO', 
    tag: 'Finance', 
    tagColor: '#D97706',
    problem: 'A 3,000-member teachers\' SACCO was managing loans, savings, and dividends using spreadsheets — error-prone and unable to scale.',
    solution: 'Built a comprehensive SACCO ERP covering member management, loan origination, savings accounts, dividend calculations, and mobile banking.',
    features: ['Loan lifecycle management', 'Mobile member portal', 'Automated dividend computation', 'Regulatory compliance reports'],
    results: [{ metric: '3,000+', label: 'Members on platform' }, { metric: '80%', label: 'Admin time saved' }, { metric: '0', label: 'Calculation errors' }, { metric: '6hrs → 20min', label: 'Monthly report time' }],
    stack: ['React', 'Django', 'PostgreSQL', 'Celery', 'AWS RDS'],
    gradient: 'from-amber-500 to-orange-500',
    icon: <Clock size={24} />,
  },
]

export default function Portfolio() {
  const [activeId, setActiveId] = useState<number | null>(null)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const tags = Array.from(new Set(cases.map(c => c.tag)))
  
  const filteredCases = selectedTag 
    ? cases.filter(c => c.tag === selectedTag)
    : cases

  const toggleCase = (id: number) => {
    setActiveId(activeId === id ? null : id)
  }

  return (
    <div className="portfolio-showcase">
      {/* Hero */}
      <section className="portfolio-showcase__hero">
        <div className="portfolio-showcase__hero-pattern" />
        <div className="portfolio-showcase__hero-shapes">
          <div className="portfolio-showcase__hero-shape portfolio-showcase__hero-shape--1" />
          <div className="portfolio-showcase__hero-shape portfolio-showcase__hero-shape--2" />
          <div className="portfolio-showcase__hero-shape portfolio-showcase__hero-shape--3" />
        </div>
        <div className="portfolio-showcase__container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="portfolio-showcase__hero-content"
          >
            <div className="portfolio-showcase__hero-badge">
              <Layers size={14} />
              <span>Portfolio Showcase</span>
            </div>
            <h1 className="portfolio-showcase__hero-title">
              Real Projects. <span className="portfolio-showcase__hero-accent">Real Results.</span>
            </h1>
            <p className="portfolio-showcase__hero-desc">
              Case studies spanning fintech, healthcare, education, hospitality, and retail — showing
              measurable impact delivered by Quantivo Labs.
            </p>
            <div className="portfolio-showcase__hero-actions">
              <Link to="/contact" className="portfolio-showcase__hero-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="portfolio-showcase__hero-btn-secondary">
                Browse Products
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="portfolio-showcase__filter">
        <div className="portfolio-showcase__container">
          <div className="portfolio-showcase__filter-wrap">
            <button 
              className={`portfolio-showcase__filter-tag ${!selectedTag ? 'active' : ''}`}
              onClick={() => setSelectedTag(null)}
            >
              All Projects
            </button>
            {tags.map(tag => (
              <button
                key={tag}
                className={`portfolio-showcase__filter-tag ${selectedTag === tag ? 'active' : ''}`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="portfolio-showcase__cases">
        <div className="portfolio-showcase__container">
          <div className="portfolio-showcase__cases-wrap">
            {filteredCases.map((c, index) => {
              const isActive = activeId === c.id
              
              return (
                <motion.div
                  key={c.id}
                  className={`portfolio-showcase__case ${isActive ? 'expanded' : ''}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  {/* Left: Visual indicator */}
                  <div className="portfolio-showcase__case-visual">
                    <div 
                      className="portfolio-showcase__case-number"
                      style={{ background: c.tagColor }}
                    >
                      <span>{c.icon}</span>
                    </div>
                    <div className="portfolio-showcase__case-line" />
                  </div>

                  {/* Right: Content */}
                  <div className="portfolio-showcase__case-content">
                    <div className="portfolio-showcase__case-header">
                      <div className="portfolio-showcase__case-meta">
                        <span 
                          className="portfolio-showcase__case-tag"
                          style={{ background: `${c.tagColor}12`, color: c.tagColor }}
                        >
                          {c.tag}
                        </span>
                        <span className="portfolio-showcase__case-client">{c.client}</span>
                      </div>
                      <h3 className="portfolio-showcase__case-title">{c.product}</h3>
                    </div>

                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.4 }}
                          className="portfolio-showcase__case-details"
                        >
                          <div className="portfolio-showcase__case-grid">
                            <div>
                              <h4 className="portfolio-showcase__case-label">Problem</h4>
                              <p>{c.problem}</p>
                            </div>
                            <div>
                              <h4 className="portfolio-showcase__case-label">Solution</h4>
                              <p>{c.solution}</p>
                            </div>
                          </div>

                          <div className="portfolio-showcase__case-features">
                            {c.features.map(f => (
                              <div key={f} className="portfolio-showcase__case-feature">
                                <CheckCircle2 size={14} style={{ color: c.tagColor }} />
                                <span>{f}</span>
                              </div>
                            ))}
                          </div>

                          <div className="portfolio-showcase__case-results">
                            {c.results.map(r => (
                              <div key={r.label} className="portfolio-showcase__case-result">
                                <span 
                                  className="portfolio-showcase__case-result-metric"
                                  style={{ color: c.tagColor }}
                                >
                                  {r.metric}
                                </span>
                                <span className="portfolio-showcase__case-result-label">{r.label}</span>
                              </div>
                            ))}
                          </div>

                          <div className="portfolio-showcase__case-stack">
                            {c.stack.map(t => (
                              <span key={t} className="portfolio-showcase__case-stack-item">
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Decorative gradient line at bottom of expanded content */}
                          <div 
                            className="portfolio-showcase__case-expanded-line"
                            style={{ background: `linear-gradient(90deg, ${c.tagColor}, ${c.tagColor}40, transparent)` }}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Improved Toggle Button */}
                    <button 
                      className="portfolio-showcase__case-toggle"
                      onClick={() => toggleCase(c.id)}
                      style={{ 
                        background: c.tagColor,
                        borderColor: c.tagColor
                      }}
                    >
                      <span className="portfolio-showcase__case-toggle-text">
                        {isActive ? 'Hide Details' : 'View Details'}
                      </span>
                      {isActive ? (
                        <ChevronUp size={16} className="portfolio-showcase__case-toggle-icon" />
                      ) : (
                        <ChevronDown size={16} className="portfolio-showcase__case-toggle-icon" />
                      )}
                    </button>
                  </div>

                  {/* Decorative gradient bar on the right side of each case */}
                  <div 
                    className="portfolio-showcase__case-accent-bar"
                    style={{ background: c.tagColor }}
                  />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="portfolio-showcase__cta">
        <div className="portfolio-showcase__container">
          <div className="portfolio-showcase__cta-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="portfolio-showcase__cta-badge">
                <Rocket size={14} />
                Ready to Feature Your Success Story?
              </span>
              <h2 className="portfolio-showcase__cta-title">
                Let's Build <span className="portfolio-showcase__cta-accent">Something Impactful</span>
              </h2>
              <p className="portfolio-showcase__cta-desc">
                Join our growing list of satisfied clients and transform your business with 
                innovative technology solutions.
              </p>
              <Link to="/contact" className="portfolio-showcase__cta-btn">
                Start Your Project <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        /* ================================================================
           PORTFOLIO SHOWCASE - BALANCED WITH RIGHT SIDE VISUALS
           ================================================================ */

        .portfolio-showcase {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0F172A;
        }

        .portfolio-showcase__container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ---- Hero ---- */
        .portfolio-showcase__hero {
          position: relative;
          padding: 5rem 0 4rem;
          overflow: hidden;
          background: linear-gradient(160deg, #0F172A 0%, #1E293B 50%, #0F172A 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .portfolio-showcase__hero-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.04) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(124, 58, 237, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .portfolio-showcase__hero-shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .portfolio-showcase__hero-shape {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.03);
        }

        .portfolio-showcase__hero-shape--1 {
          width: 300px;
          height: 300px;
          top: -100px;
          right: -50px;
          animation: portfolioShapeFloat 20s ease-in-out infinite;
        }

        .portfolio-showcase__hero-shape--2 {
          width: 200px;
          height: 200px;
          bottom: -50px;
          left: -50px;
          border-color: rgba(37, 99, 235, 0.06);
          animation: portfolioShapeFloat 25s ease-in-out infinite reverse;
        }

        .portfolio-showcase__hero-shape--3 {
          width: 150px;
          height: 150px;
          top: 40%;
          right: 20%;
          border-color: rgba(124, 58, 237, 0.04);
          animation: portfolioShapeFloat 18s ease-in-out infinite 2s;
        }

        @keyframes portfolioShapeFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-20px, 20px) rotate(10deg); }
          66% { transform: translate(20px, -10px) rotate(-5deg); }
        }

        .portfolio-showcase__hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 720px;
          margin: 0 auto;
        }

        .portfolio-showcase__hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
        }

        .portfolio-showcase__hero-badge svg {
          color: #818CF8;
        }

        .portfolio-showcase__hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .portfolio-showcase__hero-accent {
          color: #FBBF24;
        }

        .portfolio-showcase__hero-desc {
          font-size: 1.05rem;
          color: #94A3B8;
          max-width: 560px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .portfolio-showcase__hero-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .portfolio-showcase__hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, #2563EB, #4F46E5);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 12px 32px rgba(37, 99, 235, 0.2);
        }

        .portfolio-showcase__hero-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 48px rgba(37, 99, 235, 0.3);
        }

        .portfolio-showcase__hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .portfolio-showcase__hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-3px);
        }

        /* ---- Filter - IMPROVED MOBILE ---- */
        .portfolio-showcase__filter {
          padding: 1.5rem 0;
          background: #F8FAFC;
          border-bottom: 1px solid #E2E8F0;
        }

        .portfolio-showcase__filter-wrap {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .portfolio-showcase__filter-tag {
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          font-size: 0.8rem;
          font-weight: 500;
          color: #64748B;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .portfolio-showcase__filter-tag:hover {
          border-color: #94A3B8;
          color: #0F172A;
        }

        .portfolio-showcase__filter-tag.active {
          background: #2563EB;
          border-color: #2563EB;
          color: #FFFFFF;
        }

        /* ---- Cases - WITH RIGHT SIDE ACCENT ---- */
        .portfolio-showcase__cases {
          padding: 3rem 0 4rem;
          background: #FFFFFF;
        }

        .portfolio-showcase__cases-wrap {
          display: flex;
          flex-direction: column;
          gap: 0;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          position: relative;
        }

        .portfolio-showcase__case {
          display: grid;
          grid-template-columns: 60px 1fr;
          gap: 2rem;
          padding: 1.5rem 2rem;
          border-bottom: 1px solid #E2E8F0;
          transition: all 0.4s ease;
          background: #FFFFFF;
          position: relative;
        }

        .portfolio-showcase__case:last-child {
          border-bottom: none;
        }

        /* ===== RIGHT SIDE ACCENT BAR - FILLS THE EMPTY SPACE ===== */
        .portfolio-showcase__case-accent-bar {
          position: absolute;
          right: 0;
          top: 0;
          width: 4px;
          height: 100%;
          opacity: 0.15;
          transition: opacity 0.3s ease;
        }

        .portfolio-showcase__case:hover .portfolio-showcase__case-accent-bar {
          opacity: 0.4;
        }

        .portfolio-showcase__case.expanded .portfolio-showcase__case-accent-bar {
          opacity: 0.6;
        }

        .portfolio-showcase__case:hover {
          background: #FAFBFC;
        }

        .portfolio-showcase__case.expanded {
          background: #F8FAFC;
        }

        .portfolio-showcase__case-visual {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 0.25rem;
        }

        .portfolio-showcase__case-number {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.8rem;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .portfolio-showcase__case:hover .portfolio-showcase__case-number {
          transform: scale(1.05);
        }

        .portfolio-showcase__case-line {
          width: 2px;
          flex: 1;
          background: #E2E8F0;
          margin-top: 0.5rem;
        }

        .portfolio-showcase__case:last-child .portfolio-showcase__case-line {
          display: none;
        }

        .portfolio-showcase__case-content {
          position: relative;
          padding-right: 1rem;
        }

        .portfolio-showcase__case-header {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .portfolio-showcase__case-meta {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-wrap: wrap;
        }

        .portfolio-showcase__case-tag {
          font-size: 0.65rem;
          font-weight: 600;
          padding: 0.2rem 0.6rem;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .portfolio-showcase__case-client {
          font-size: 0.8rem;
          color: #94A3B8;
          font-weight: 500;
        }

        .portfolio-showcase__case-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0.1rem 0 0;
        }

        .portfolio-showcase__case-details {
          margin-top: 1.25rem;
          padding-top: 1.25rem;
          border-top: 1px solid #E2E8F0;
          position: relative;
        }

        .portfolio-showcase__case-expanded-line {
          height: 2px;
          width: 100%;
          margin-top: 0.75rem;
          border-radius: 4px;
          opacity: 0.3;
        }

        .portfolio-showcase__case-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .portfolio-showcase__case-label {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #94A3B8;
          margin-bottom: 0.3rem;
        }

        .portfolio-showcase__case-grid p {
          font-size: 0.9rem;
          color: #475569;
          line-height: 1.6;
        }

        .portfolio-showcase__case-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem;
          margin-bottom: 1.25rem;
        }

        .portfolio-showcase__case-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: #475569;
        }

        .portfolio-showcase__case-results {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
          margin-bottom: 1.25rem;
          padding: 1rem;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 12px;
        }

        .portfolio-showcase__case-result {
          text-align: center;
        }

        .portfolio-showcase__case-result-metric {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          display: block;
        }

        .portfolio-showcase__case-result-label {
          font-size: 0.7rem;
          color: #64748B;
          margin-top: 0.1rem;
        }

        .portfolio-showcase__case-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }

        .portfolio-showcase__case-stack-item {
          padding: 0.15rem 0.6rem;
          border: 1px solid #E2E8F0;
          border-radius: 4px;
          font-size: 0.65rem;
          font-weight: 500;
          color: #475569;
          background: #F8FAFC;
        }

        /* ================================================================
           IMPROVED TOGGLE BUTTON
           ================================================================ */
        .portfolio-showcase__case-toggle {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          border: 2px solid;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.8rem;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 0.5rem;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
        }

        .portfolio-showcase__case-toggle:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
          filter: brightness(1.05);
        }

        .portfolio-showcase__case-toggle-text {
          font-size: 0.75rem;
          letter-spacing: 0.02em;
        }

        .portfolio-showcase__case-toggle-icon {
          transition: transform 0.3s ease;
        }

        .portfolio-showcase__case-toggle:hover .portfolio-showcase__case-toggle-icon {
          transform: rotate(180deg);
        }

        /* ---- CTA ---- */
        .portfolio-showcase__cta {
          padding: 4rem 0;
          background: #0F172A;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }

        .portfolio-showcase__cta-content {
          text-align: center;
          max-width: 650px;
          margin: 0 auto;
        }

        .portfolio-showcase__cta-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
        }

        .portfolio-showcase__cta-badge svg {
          color: #818CF8;
        }

        .portfolio-showcase__cta-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3vw, 2.6rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .portfolio-showcase__cta-accent {
          color: #FBBF24;
        }

        .portfolio-showcase__cta-desc {
          font-size: 1rem;
          color: #94A3B8;
          max-width: 460px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .portfolio-showcase__cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, #2563EB, #4F46E5);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 12px 32px rgba(37, 99, 235, 0.2);
        }

        .portfolio-showcase__cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 48px rgba(37, 99, 235, 0.3);
        }

        /* ================================================================
           RESPONSIVE
           ================================================================ */

        @media (max-width: 1024px) {
          .portfolio-showcase__case-grid {
            grid-template-columns: 1fr;
          }
          .portfolio-showcase__case-results {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .portfolio-showcase__hero {
            padding: 4rem 0 3rem;
          }
          .portfolio-showcase__hero-title {
            font-size: 2rem;
          }
          .portfolio-showcase__container {
            padding: 0 16px;
          }
          .portfolio-showcase__case {
            grid-template-columns: 1fr;
            gap: 0.75rem;
            padding: 1rem 1.25rem;
          }
          .portfolio-showcase__case-line {
            display: none;
          }
          .portfolio-showcase__case-number {
            width: 36px;
            height: 36px;
            font-size: 0.7rem;
          }
          .portfolio-showcase__case-visual {
            flex-direction: row;
            gap: 0.75rem;
            padding-top: 0;
          }
          .portfolio-showcase__case-title {
            font-size: 1rem;
          }
          .portfolio-showcase__case-features {
            grid-template-columns: 1fr;
          }
          .portfolio-showcase__case-results {
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem;
          }
          .portfolio-showcase__hero-actions {
            flex-direction: column;
            align-items: center;
          }
          .portfolio-showcase__hero-btn,
          .portfolio-showcase__hero-btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .portfolio-showcase__filter-wrap {
            gap: 0.4rem;
          }
          .portfolio-showcase__filter-tag {
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
          }
          .portfolio-showcase__hero-shape {
            display: none;
          }
          .portfolio-showcase__case-toggle {
            padding: 0.4rem 1rem;
            font-size: 0.7rem;
            margin-top: 0.5rem;
          }
          .portfolio-showcase__case-toggle-text {
            font-size: 0.7rem;
          }
          .portfolio-showcase__case-accent-bar {
            width: 3px;
          }
        }

        @media (max-width: 480px) {
          .portfolio-showcase__hero-title {
            font-size: 1.6rem;
          }
          .portfolio-showcase__hero-desc {
            font-size: 0.9rem;
          }
          .portfolio-showcase__case-results {
            grid-template-columns: 1fr 1fr;
          }
          .portfolio-showcase__case {
            padding: 0.75rem 1rem;
          }
          .portfolio-showcase__cases-wrap {
            border-radius: 12px;
          }
          .portfolio-showcase__filter-tag {
            font-size: 0.7rem;
            padding: 0.4rem 0.8rem;
          }
          .portfolio-showcase__filter-wrap {
            gap: 0.3rem;
          }
          .portfolio-showcase__case-toggle {
            padding: 0.35rem 0.8rem;
            font-size: 0.65rem;
            width: 100%;
            justify-content: center;
          }
          .portfolio-showcase__case-toggle-text {
            font-size: 0.65rem;
          }
          .portfolio-showcase__case-toggle-icon {
            width: 14px;
            height: 14px;
          }
          .portfolio-showcase__case-accent-bar {
            width: 2px;
          }
        }

        @media (max-width: 360px) {
          .portfolio-showcase__filter-tag {
            font-size: 0.6rem;
            padding: 0.3rem 0.6rem;
          }
          .portfolio-showcase__case-results {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }
          .portfolio-showcase__case-result-metric {
            font-size: 1rem;
          }
        }
      `}</style>
    </div>
  )
}