import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, CheckCircle2, Globe, Zap, Award, 
  ChevronDown, ChevronUp, TrendingUp, Users, Building2
} from 'lucide-react'

const industries = [
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    tagColor: '#2563EB',
    gradient: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=600&q=80',
    headline: 'Intelligent Healthcare IT for Africa',
    desc: 'We help hospitals, clinics, and healthcare networks digitise operations, reduce billing errors, improve patient outcomes, and meet regulatory standards — on a unified platform built for African healthcare realities.',
    challenges: [
      'Paper-based patient records & lost files',
      'Revenue leakage from unbilled procedures',
      'Insurance claim rejections and delays',
      'Siloed departments with no shared data',
    ],
    solutions: [
      { title: 'Hospital Management System', desc: 'Complete OPD/IPD, pharmacy, lab, and billing on one platform.' },
      { title: 'EMR & Patient Portal', desc: 'Digital patient records with appointment and prescription management.' },
      { title: 'Health Insurance Billing', desc: 'NHIF & private insurer claim automation and reconciliation.' },
    ],
    stats: [{ val: '5+', lbl: 'Hospitals live' }, { val: '70%', lbl: 'Admin reduction' }, { val: '40%', lbl: 'Revenue leakage stopped' }],
    caseStudy: 'How MedLine Group eliminated billing errors and recovered KSh 14M in unclaimed insurance annually.',
  },
  {
    id: 'education',
    name: 'Education & EdTech',
    tagColor: '#D97706',
    gradient: 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)',
    image: 'https://plus.unsplash.com/premium_photo-1661727264562-a2c6308357c6?q=80&w=1100&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    headline: 'From Fees to Timetables — Fully Digital',
    desc: 'We digitise school and university operations end-to-end — enabling cashless fee collection, real-time academic reporting, and seamless communication between teachers, parents, and students.',
    challenges: [
      'Cash fee collection with poor tracking',
      'Manual attendance and paper registers',
      'No centralised exam result management',
      'Poor parent-school communication',
    ],
    solutions: [
      { title: 'School Management System', desc: 'Enrollment, fees (M-Pesa), attendance, timetabling, and results.' },
      { title: 'Parent Communication Portal', desc: 'Real-time SMS/email for fees, results, and school events.' },
      { title: 'University ERP', desc: 'Multi-campus administration with student self-service portals.' },
    ],
    stats: [{ val: '8+', lbl: 'Schools on platform' }, { val: '95%', lbl: 'Fee collection rate' }, { val: '4.8/5', lbl: 'Parent satisfaction' }],
    caseStudy: 'How Sunrise Academy network eliminated fee queues and achieved 95% digital collection within 60 days.',
  },
  {
    id: 'fintech',
    name: 'Financial Services & Fintech',
    tagColor: '#1E3A8A',
    gradient: 'linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    headline: 'Powering Digital Finance Across Africa',
    desc: 'From payment processing and digital wallets to SACCO management and agent banking — we build the infrastructure that powers financial inclusion for millions of Africans.',
    challenges: [
      'Limited access to formal banking services',
      'High cash dependency and reconciliation overhead',
      'Complex regulatory and compliance requirements',
      'Legacy core banking with no API integration',
    ],
    solutions: [
      { title: 'DFS Solutions', desc: 'Agent banking, digital lending, and mobile money integration.' },
      { title: 'PSP Platform', desc: 'Secure payment processing for enterprises and merchants.' },
      { title: 'Sacco Management', desc: 'Loans, savings, dividends, and compliance for SACCOs.' },
    ],
    stats: [{ val: 'KSh 500M+', lbl: 'Processed/month' }, { val: '99.9%', lbl: 'Uptime SLA' }, { val: '50+', lbl: 'Agent outlets' }],
    caseStudy: 'How AfriCredit deployed a digital lending platform that reduced approval time from 3 weeks to 3 days.',
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Tourism',
    tagColor: '#0D9488',
    gradient: 'linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80',
    headline: 'Run Every Property from One Dashboard',
    desc: 'We deliver integrated hospitality technology — covering hotel POS, property management, channel management, and guest experience — that helps properties reduce costs and increase guest satisfaction.',
    challenges: [
      'Disconnected F&B, rooms, and spa systems',
      'Manual EOD reconciliation taking hours',
      'OTA overbooking and inventory conflicts',
      'No real-time revenue analytics per outlet',
    ],
    solutions: [
      { title: 'Hotel POS', desc: 'Unified F&B, room service, spa, and bar billing.' },
      { title: 'Hotel Management System', desc: 'PMS, reservations, channel manager, and housekeeping.' },
      { title: 'Booking Solutions', desc: 'Online reservations with automated confirmations.' },
    ],
    stats: [{ val: '4', lbl: 'Properties unified' }, { val: '3hrs→15min', lbl: 'Reconciliation time' }, { val: '30%', lbl: 'F&B cost savings' }],
    caseStudy: 'How Karibu Hotels group reduced EOD reconciliation from 3 hours to 15 minutes across 4 properties.',
  },
  {
    id: 'retail',
    name: 'Retail & Commerce',
    tagColor: '#EA580C',
    gradient: 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    headline: 'Modern Commerce Infrastructure for African Retail',
    desc: 'Whether you run a single retail outlet or a multi-branch chain, we deliver cloud POS, ecommerce, and inventory solutions that give you real-time visibility and help you grow.',
    challenges: [
      'Inventory discrepancies and stock-outs',
      'No unified view across multiple branches',
      'Cash-heavy operations with audit risks',
      'Limited online sales channel penetration',
    ],
    solutions: [
      { title: 'POS System', desc: 'Offline-first cloud POS with inventory and multi-terminal support.' },
      { title: 'Ecommerce Platform', desc: 'Full online store with M-Pesa checkout and seller marketplace.' },
      { title: 'QuantivoCRM', desc: 'Track and nurture your wholesale and B2B customer relationships.' },
    ],
    stats: [{ val: '200+', lbl: 'Retailers on platform' }, { val: 'Real-time', lbl: 'Inventory tracking' }, { val: 'Offline-first', lbl: 'POS architecture' }],
    caseStudy: 'How UrbanMart chain unified 12 outlets on one POS and cut inventory variance by 35%.',
  },
  {
    id: 'government',
    name: 'Government & Public Sector',
    tagColor: '#15803D',
    gradient: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&q=80',
    headline: 'Digital Government — Faster, Transparent, Inclusive',
    desc: 'We help government agencies, county governments, and public institutions digitise service delivery, automate revenue collection, and create citizen-facing portals that improve access and accountability.',
    challenges: [
      'Paper-based permit and licensing processes',
      'Revenue leakage in cash-based collections',
      'Citizens traveling long distances for services',
      'No digital audit trail for public funds',
    ],
    solutions: [
      { title: 'Revenue Collection System', desc: 'M-Pesa/bank-integrated e-revenue with real-time reporting.' },
      { title: 'Citizen Self-Service Portal', desc: 'Online permits, certificates, and application tracking.' },
      { title: 'Fleet & Asset Management', desc: 'Track and manage government vehicles and public assets.' },
    ],
    stats: [{ val: '3', lbl: 'County deployments' }, { val: 'Zero', lbl: 'Revenue leakage' }, { val: '100%', lbl: 'Audit-ready' }],
    caseStudy: 'How a county government digitised business permit issuance and doubled revenue collection in one fiscal year.',
  },
]

export default function Industries() {
  const [activeIndustry, setActiveIndustry] = useState<string>('healthcare')
  const [expandedSolution, setExpandedSolution] = useState<number | null>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})
  const heroRef = useRef<HTMLDivElement>(null)

  const scrollToIndustry = (id: string) => {
    setActiveIndustry(id)
    const element = sectionRefs.current[id]
    if (element) {
      const navbarHeight = 80
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - navbarHeight
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-industry')
            if (id) setActiveIndustry(id)
          }
        })
      },
      { threshold: 0.3 }
    )

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  const toggleSolution = (index: number) => {
    setExpandedSolution(expandedSolution === index ? null : index)
  }

  return (
    <div className="industries-journey">
      {/* ===== HERO - INTERACTIVE GRID ===== */}
      <section className="industries-journey__hero" ref={heroRef}>
        <div className="industries-journey__hero-bg">
          <div className="industries-journey__hero-orb industries-journey__hero-orb--1" />
          <div className="industries-journey__hero-orb industries-journey__hero-orb--2" />
          <div className="industries-journey__hero-orb industries-journey__hero-orb--3" />
        </div>
        <div className="industries-journey__hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="industries-journey__hero-inner"
          >
            <div className="industries-journey__hero-badge">
              <Globe size={14} />
              <span>Industries We Serve</span>
            </div>
            <h1 className="industries-journey__hero-title">
              Deep Domain Expertise Across <br />
              <span className="industries-journey__hero-accent">6 Industries</span>
            </h1>
            <p className="industries-journey__hero-desc">
              We don't build generic software. Every product we deliver is shaped by years of domain 
              experience, customer discovery, and continuous iteration within each sector.
            </p>
          </motion.div>

          {/* Industry Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="industries-journey__grid"
          >
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => scrollToIndustry(industry.id)}
                className={`industries-journey__grid-item ${activeIndustry === industry.id ? 'industries-journey__grid-item--active' : ''}`}
                style={{
                  borderColor: activeIndustry === industry.id ? industry.tagColor : 'transparent',
                  background: activeIndustry === industry.id ? `${industry.tagColor}15` : 'rgba(255,255,255,0.04)',
                }}
              >
                <span className="industries-journey__grid-emoji">{industry.emoji || '🏢'}</span>
                <span className="industries-journey__grid-name">{industry.name}</span>
                <span className="industries-journey__grid-dot" style={{ background: industry.tagColor }} />
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== INDUSTRY SECTIONS - CINEMATIC ===== */}
      {industries.map((industry, index) => {
        const isEven = index % 2 === 0
        
        return (
          <section
            key={industry.id}
            data-industry={industry.id}
            ref={(el) => (sectionRefs.current[industry.id] = el)}
            className="industries-journey__industry"
            style={{ background: industry.gradient }}
          >
            {/* Floating Particles */}
            <div className="industries-journey__particles">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="industries-journey__particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    width: `${Math.random() * 6 + 3}px`,
                    height: `${Math.random() * 6 + 3}px`,
                    background: industry.tagColor,
                    animationDelay: `${Math.random() * 10}s`,
                    animationDuration: `${Math.random() * 15 + 10}s`,
                  }}
                />
              ))}
            </div>

            <div className="industries-journey__industry-container">
              <div className={`industries-journey__industry-inner ${isEven ? 'industries-journey__industry-inner--even' : 'industries-journey__industry-inner--odd'}`}>
                {/* Left: Image + Headline */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="industries-journey__industry-left"
                >
                  <div className="industries-journey__industry-image">
                    <img src={industry.image} alt={industry.name} />
                    <div 
                      className="industries-journey__industry-image-overlay"
                      style={{ background: `linear-gradient(135deg, ${industry.tagColor}40, ${industry.tagColor}10)` }}
                    />
                  </div>
                  <div 
                    className="industries-journey__industry-tag"
                    style={{ color: industry.tagColor }}
                  >
                    {industry.name}
                  </div>
                  <h2 className="industries-journey__industry-headline">{industry.headline}</h2>
                  
                  {/* Stats - Floating Badges */}
                  <div className="industries-journey__stats">
                    {industry.stats.map((stat, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="industries-journey__stat"
                        style={{ borderColor: industry.tagColor }}
                      >
                        <span 
                          className="industries-journey__stat-value"
                          style={{ color: industry.tagColor }}
                        >
                          {stat.val}
                        </span>
                        <span className="industries-journey__stat-label">{stat.lbl}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right: Content */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="industries-journey__industry-right"
                >
                  <p className="industries-journey__industry-desc">{industry.desc}</p>

                  {/* Challenges */}
                  <div className="industries-journey__challenges">
                    <h4>Common Challenges We Solve</h4>
                    {industry.challenges.map((challenge, i) => (
                      <div key={i} className="industries-journey__challenge">
                        <div 
                          className="industries-journey__challenge-dot"
                          style={{ background: industry.tagColor }}
                        />
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>

                  {/* Solutions - Interactive Accordion */}
                  <div className="industries-journey__solutions">
                    <h4>Our Solutions</h4>
                    {industry.solutions.map((sol, i) => (
                      <div 
                        key={i} 
                        className={`industries-journey__solution ${expandedSolution === i ? 'industries-journey__solution--expanded' : ''}`}
                      >
                        <button
                          onClick={() => toggleSolution(i)}
                          className="industries-journey__solution-header"
                          style={{ borderColor: industry.tagColor }}
                        >
                          <span className="industries-journey__solution-title">{sol.title}</span>
                          {expandedSolution === i ? (
                            <ChevronUp size={18} style={{ color: industry.tagColor }} />
                          ) : (
                            <ChevronDown size={18} style={{ color: industry.tagColor }} />
                          )}
                        </button>
                        <AnimatePresence>
                          {expandedSolution === i && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="industries-journey__solution-content"
                            >
                              <p>{sol.desc}</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>

                  {/* Case Study Quote */}
                  <div 
                    className="industries-journey__case"
                    style={{ background: `${industry.tagColor}08`, borderColor: `${industry.tagColor}30` }}
                  >
                    <Award size={20} style={{ color: industry.tagColor }} />
                    <p className="industries-journey__case-text">"{industry.caseStudy}"</p>
                    <Link 
                      to="/portfolio" 
                      className="industries-journey__case-link"
                      style={{ color: industry.tagColor }}
                    >
                      Read Full Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ===== CTA ===== */}
      <section className="industries-journey__cta">
        <div className="industries-journey__cta-pattern" />
        <div className="industries-journey__cta-content">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="industries-journey__cta-badge">
              <Zap size={14} />
              Ready to Transform?
            </span>
            <h2 className="industries-journey__cta-title">
              Don't See Your <span className="industries-journey__cta-accent">Industry?</span>
            </h2>
            <p className="industries-journey__cta-desc">
              We work across diverse sectors. Tell us about your business and we'll scope a solution together.
            </p>
            <Link to="/contact" className="industries-journey__cta-btn">
              Get in Touch <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* ================================================================
           INDUSTRIES JOURNEY - WITH IMAGES
           ================================================================ */

        .industries-journey {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0F172A;
        }

        /* ================================================================
           HERO - INTERACTIVE GRID
           ================================================================ */

        .industries-journey__hero {
          position: relative;
          padding: 5rem 0 4rem;
          overflow: hidden;
          background: #0F172A;
        }

        .industries-journey__hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .industries-journey__hero-orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .industries-journey__hero-orb--1 {
          top: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: rgba(37, 99, 235, 0.08);
          animation: heroOrbFloat 20s ease-in-out infinite;
        }

        .industries-journey__hero-orb--2 {
          bottom: -20%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: rgba(124, 58, 237, 0.06);
          animation: heroOrbFloat 25s ease-in-out infinite reverse;
        }

        .industries-journey__hero-orb--3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 450px;
          height: 450px;
          background: rgba(245, 158, 11, 0.04);
          animation: heroOrbPulse 15s ease-in-out infinite;
        }

        @keyframes heroOrbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-30px, 20px) scale(0.95); }
        }

        @keyframes heroOrbPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.7; }
        }

        .industries-journey__hero-content {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .industries-journey__hero-inner {
          text-align: center;
          max-width: 720px;
          margin: 0 auto 3rem;
        }

        .industries-journey__hero-badge {
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

        .industries-journey__hero-badge svg {
          color: #FBBF24;
        }

        .industries-journey__hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .industries-journey__hero-accent {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .industries-journey__hero-desc {
          font-size: 1.05rem;
          color: #94A3B8;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ---- Industry Grid ---- */
        .industries-journey__grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 1rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .industries-journey__grid-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.4rem;
          padding: 1.25rem 0.5rem;
          border-radius: 16px;
          border: 2px solid transparent;
          background: rgba(255, 255, 255, 0.04);
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }

        .industries-journey__grid-item:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.06);
        }

        .industries-journey__grid-item--active {
          transform: translateY(-4px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
        }

        .industries-journey__grid-emoji {
          font-size: 2.2rem;
        }

        .industries-journey__grid-name {
          font-size: 0.7rem;
          font-weight: 600;
          color: #94A3B8;
          text-align: center;
          line-height: 1.3;
        }

        .industries-journey__grid-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .industries-journey__grid-item--active .industries-journey__grid-dot {
          opacity: 1;
        }

        /* ================================================================
           INDUSTRY SECTIONS - WITH IMAGES
           ================================================================ */

        .industries-journey__industry {
          position: relative;
          padding: 5rem 0;
          overflow: hidden;
        }

        .industries-journey__particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .industries-journey__particle {
          position: absolute;
          border-radius: 50%;
          opacity: 0.15;
          animation: particleFloat 20s ease-in-out infinite;
        }

        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(20px, -30px) scale(1.2); }
          66% { transform: translate(-15px, 25px) scale(0.8); }
        }

        .industries-journey__industry-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
          z-index: 2;
        }

        .industries-journey__industry-inner {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 3rem;
          align-items: start;
        }

        .industries-journey__industry-left {
          position: sticky;
          top: 100px;
          align-self: start;
        }

        /* ---- Industry Image ---- */
        .industries-journey__industry-image {
          position: relative;
          width: 100%;
          height: 200px;
          border-radius: 16px;
          overflow: hidden;
          margin-bottom: 1rem;
        }

        .industries-journey__industry-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .industries-journey__industry:hover .industries-journey__industry-image img {
          transform: scale(1.03);
        }

        .industries-journey__industry-image-overlay {
          position: absolute;
          inset: 0;
          opacity: 0.3;
        }

        .industries-journey__industry-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.5rem;
        }

        .industries-journey__industry-headline {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .industries-journey__stats {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .industries-journey__stat {
          flex: 1;
          min-width: 80px;
          padding: 0.75rem 1rem;
          border: 1.5px solid;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
          text-align: center;
          transition: transform 0.3s ease;
        }

        .industries-journey__stat:hover {
          transform: translateY(-4px);
        }

        .industries-journey__stat-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.3rem;
          font-weight: 800;
          display: block;
        }

        .industries-journey__stat-label {
          font-size: 0.65rem;
          color: #64748B;
          font-weight: 500;
        }

        .industries-journey__industry-right {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .industries-journey__industry-desc {
          font-size: 1rem;
          color: #475569;
          line-height: 1.8;
        }

        /* ---- Challenges ---- */
        .industries-journey__challenges h4,
        .industries-journey__solutions h4 {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #94A3B8;
          margin-bottom: 0.75rem;
        }

        .industries-journey__challenge {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.4rem 0;
          font-size: 0.9rem;
          color: #475569;
        }

        .industries-journey__challenge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 0.25rem;
        }

        /* ---- Solutions Accordion ---- */
        .industries-journey__solution {
          border-bottom: 1px solid #E2E8F0;
          margin-bottom: 0.5rem;
        }

        .industries-journey__solution:last-child {
          border-bottom: none;
        }

        .industries-journey__solution-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0.75rem 0;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 0.95rem;
          font-weight: 600;
          color: #0F172A;
          transition: all 0.3s ease;
          border-bottom: 2px solid transparent;
        }

        .industries-journey__solution-header:hover {
          opacity: 0.8;
        }

        .industries-journey__solution-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .industries-journey__solution-content {
          overflow: hidden;
          padding: 0 0 0.75rem 0;
        }

        .industries-journey__solution-content p {
          font-size: 0.85rem;
          color: #64748B;
          line-height: 1.7;
        }

        /* ---- Case Study ---- */
        .industries-journey__case {
          padding: 1.5rem;
          border-radius: 16px;
          border: 1px solid;
          margin-top: 0.5rem;
        }

        .industries-journey__case-text {
          font-size: 0.9rem;
          font-style: italic;
          color: #475569;
          line-height: 1.7;
          margin: 0.5rem 0 0.75rem;
        }

        .industries-journey__case-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .industries-journey__case-link:hover {
          gap: 0.6rem;
        }

        /* ================================================================
           CTA
           ================================================================ */

        .industries-journey__cta {
          padding: 4.5rem 0;
          background: #0F172A;
          position: relative;
          overflow: hidden;
        }

        .industries-journey__cta-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 30% 50%, rgba(245, 158, 11, 0.04) 0%, transparent 60%),
            radial-gradient(circle at 70% 50%, rgba(245, 158, 11, 0.03) 0%, transparent 60%);
          pointer-events: none;
        }

        .industries-journey__cta-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 650px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .industries-journey__cta-badge {
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

        .industries-journey__cta-badge svg {
          color: #FBBF24;
        }

        .industries-journey__cta-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .industries-journey__cta-accent {
          color: #FBBF24;
        }

        .industries-journey__cta-desc {
          font-size: 1rem;
          color: #94A3B8;
          max-width: 480px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .industries-journey__cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, #F59E0B, #FBBF24);
          color: #0F172A;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 12px 32px rgba(245, 158, 11, 0.2);
        }

        .industries-journey__cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 48px rgba(245, 158, 11, 0.3);
        }

        /* ================================================================
           RESPONSIVE
           ================================================================ */

        @media (max-width: 1024px) {
          .industries-journey__grid {
            grid-template-columns: repeat(3, 1fr);
          }

          .industries-journey__industry-left {
            position: static;
          }

          .industries-journey__industry-inner {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .industries-journey__stats {
            gap: 0.5rem;
          }

          .industries-journey__stat {
            min-width: 60px;
            padding: 0.5rem 0.75rem;
          }

          .industries-journey__industry-image {
            height: 180px;
          }
        }

        @media (max-width: 768px) {
          .industries-journey__hero {
            padding: 3.5rem 0 2.5rem;
          }

          .industries-journey__hero-title {
            font-size: 2rem;
          }

          .industries-journey__hero-desc {
            font-size: 0.95rem;
          }

          .industries-journey__grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.5rem;
          }

          .industries-journey__grid-emoji {
            font-size: 1.6rem;
          }

          .industries-journey__grid-name {
            font-size: 0.6rem;
          }

          .industries-journey__grid-item {
            padding: 0.75rem 0.3rem;
          }

          .industries-journey__industry {
            padding: 3rem 0;
          }

          .industries-journey__industry-container {
            padding: 0 16px;
          }

          .industries-journey__industry-headline {
            font-size: 1.4rem;
          }

          .industries-journey__stat-value {
            font-size: 1.1rem;
          }

          .industries-journey__hero-content {
            padding: 0 16px;
          }

          .industries-journey__industry-image {
            height: 160px;
          }
        }

        @media (max-width: 480px) {
          .industries-journey__grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 0.4rem;
          }

          .industries-journey__grid-emoji {
            font-size: 1.4rem;
          }

          .industries-journey__grid-name {
            font-size: 0.55rem;
          }

          .industries-journey__hero-title {
            font-size: 1.6rem;
          }

          .industries-journey__industry-headline {
            font-size: 1.2rem;
          }

          .industries-journey__industry-desc {
            font-size: 0.9rem;
          }

          .industries-journey__solution-title {
            font-size: 0.85rem;
          }

          .industries-journey__stats {
            flex-wrap: wrap;
          }

          .industries-journey__stat {
            flex: 1;
            min-width: 70px;
            padding: 0.4rem 0.5rem;
          }

          .industries-journey__stat-value {
            font-size: 1rem;
          }

          .industries-journey__stat-label {
            font-size: 0.6rem;
          }

          .industries-journey__case {
            padding: 1rem;
          }

          .industries-journey__case-text {
            font-size: 0.8rem;
          }

          .industries-journey__industry-image {
            height: 140px;
          }
        }
      `}</style>
    </div>
  )
}