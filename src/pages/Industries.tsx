import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { ArrowRight, CheckCircle2, Building2, TrendingUp, Users, Award, Globe, Zap } from 'lucide-react'

const industries = [
  {
    emoji: '🏥',
    name: 'Healthcare & Life Sciences',
    tagColor: '#E11D48',
    accentBg: '#FFF1F2',
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
    emoji: '🎓',
    name: 'Education & EdTech',
    tagColor: '#D97706',
    accentBg: '#FFFBEB',
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
    emoji: '💳',
    name: 'Financial Services & Fintech',
    tagColor: '#DC2626',
    accentBg: '#FEF2F2',
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
    emoji: '🏨',
    name: 'Hospitality & Tourism',
    tagColor: '#0F766E',
    accentBg: '#F0FDFA',
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
    emoji: '🛒',
    name: 'Retail & Commerce',
    tagColor: '#0369A1',
    accentBg: '#F0F9FF',
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
    emoji: '🏛️',
    name: 'Government & Public Sector',
    tagColor: '#15803D',
    accentBg: '#F0FDF4',
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
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  return (
    <div className="industries-premium">
      {/* ===== HERO WITH IMAGE ===== */}
      <section className="industries-premium__hero">
        <div className="industries-premium__hero-overlay" />
        <div className="industries-premium__hero-image">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80"
            alt="Global digital transformation"
            className="industries-premium__hero-img"
          />
        </div>
        <div className="industries-premium__hero-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="industries-premium__hero-inner"
          >
            <div className="industries-premium__hero-badge">
              <Globe size={14} />
              <span>Industries We Serve</span>
            </div>
            <h1 className="industries-premium__hero-title">
              Deep Domain Expertise Across <br />
              <span className="industries-premium__hero-accent">6 Industries</span>
            </h1>
            <p className="industries-premium__hero-desc">
              We don't build generic software. Every product we deliver is shaped by years of domain 
              experience, customer discovery, and continuous iteration within each sector.
            </p>
            <div className="industries-premium__hero-actions">
              <Link to="/contact" className="industries-premium__hero-btn">
                Talk to an Expert <ArrowRight size={18} />
              </Link>
              <Link to="/products" className="industries-premium__hero-btn-secondary">
                Our Products
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="industries-premium__hero-stats">
          <div className="industries-premium__hero-stat">
            <span className="industries-premium__hero-stat-value">6</span>
            <span className="industries-premium__hero-stat-label">Industries</span>
          </div>
          <div className="industries-premium__hero-stat">
            <span className="industries-premium__hero-stat-value">200+</span>
            <span className="industries-premium__hero-stat-label">Clients</span>
          </div>
          <div className="industries-premium__hero-stat">
            <span className="industries-premium__hero-stat-value">8</span>
            <span className="industries-premium__hero-stat-label">Countries</span>
          </div>
        </div>
      </section>

      {/* ===== INDUSTRY SECTIONS ===== */}
      {industries.map((ind, index) => {
        const isEven = index % 2 === 0
        
        return (
          <section
            key={ind.name}
            ref={(el) => { sectionRefs.current[index] = el }}
            className={`industries-premium__industry ${isEven ? 'industries-premium__industry--even' : 'industries-premium__industry--odd'}`}
          >
            <div className="industries-premium__container">
              <div className="industries-premium__industry-inner">
                {/* Left Column - Visual */}
                <div className="industries-premium__industry-visual">
                  <div 
                    className="industries-premium__industry-icon"
                    style={{ background: ind.accentBg, color: ind.tagColor }}
                  >
                    {ind.emoji}
                  </div>
                  <div className="industries-premium__industry-tag" style={{ color: ind.tagColor }}>
                    {ind.name}
                  </div>
                  <h2 className="industries-premium__industry-headline">{ind.headline}</h2>
                  
                  {/* Stats Grid */}
                  <div className="industries-premium__industry-stats">
                    {ind.stats.map((stat, i) => (
                      <div key={i} className="industries-premium__industry-stat">
                        <span 
                          className="industries-premium__industry-stat-value"
                          style={{ color: ind.tagColor }}
                        >
                          {stat.val}
                        </span>
                        <span className="industries-premium__industry-stat-label">{stat.lbl}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Column - Content */}
                <div className="industries-premium__industry-content">
                  <p className="industries-premium__industry-desc">{ind.desc}</p>

                  {/* Challenges */}
                  <div className="industries-premium__industry-challenges">
                    <h4>Common Challenges We Solve</h4>
                    {ind.challenges.map((challenge, i) => (
                      <div key={i} className="industries-premium__industry-challenge">
                        <div 
                          className="industries-premium__industry-challenge-dot"
                          style={{ background: ind.tagColor }}
                        />
                        <span>{challenge}</span>
                      </div>
                    ))}
                  </div>

                  {/* Solutions */}
                  <div className="industries-premium__industry-solutions">
                    <h4>Our Solutions</h4>
                    {ind.solutions.map((sol, i) => (
                      <div 
                        key={i} 
                        className="industries-premium__industry-solution"
                        style={{ borderLeftColor: ind.tagColor }}
                      >
                        <div className="industries-premium__industry-solution-title">{sol.title}</div>
                        <div className="industries-premium__industry-solution-desc">{sol.desc}</div>
                      </div>
                    ))}
                  </div>

                  {/* Case Study */}
                  <div 
                    className="industries-premium__industry-case"
                    style={{ background: ind.accentBg }}
                  >
                    <div className="industries-premium__industry-case-label">
                      <Award size={14} style={{ color: ind.tagColor }} />
                      <span>Success Story</span>
                    </div>
                    <p className="industries-premium__industry-case-text">"{ind.caseStudy}"</p>
                    <Link 
                      to="/portfolio" 
                      className="industries-premium__industry-case-link"
                      style={{ color: ind.tagColor }}
                    >
                      Read Full Case Study <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
      })}

      {/* ===== CTA ===== */}
      <section className="industries-premium__cta">
        <div className="industries-premium__cta-pattern" />
        <div className="industries-premium__container">
          <div className="industries-premium__cta-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <span className="industries-premium__cta-badge">
                <Zap size={14} />
                Ready to Transform?
              </span>
              <h2 className="industries-premium__cta-title">
                Don't See Your <span className="industries-premium__cta-accent">Industry?</span>
              </h2>
              <p className="industries-premium__cta-desc">
                We work across diverse sectors. Tell us about your business and we'll scope a solution together.
              </p>
              <Link to="/contact" className="industries-premium__cta-btn">
                Get in Touch <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <style>{`
        /* ================================================================
           INDUSTRIES PREMIUM - HIGH CLASS MODERN DESIGN
           ================================================================ */

        .industries-premium {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0F172A;
        }

        .industries-premium__container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ================================================================
           HERO WITH IMAGE
           ================================================================ */

        .industries-premium__hero {
          position: relative;
          height: 90vh;
          min-height: 600px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .industries-premium__hero-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .industries-premium__hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: heroZoom 20s ease-in-out infinite alternate;
        }

        @keyframes heroZoom {
          0% { transform: scale(1); }
          100% { transform: scale(1.05); }
        }

        .industries-premium__hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.4) 50%, rgba(15, 23, 42, 0.7) 100%);
        }

        .industries-premium__hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: 4rem 0;
        }

        .industries-premium__hero-inner {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
        }

        .industries-premium__hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.25rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
          backdrop-filter: blur(12px);
        }

        .industries-premium__hero-badge svg {
          color: #FBBF24;
        }

        .industries-premium__hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.4rem, 4.5vw, 4rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .industries-premium__hero-accent {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .industries-premium__hero-desc {
          font-size: 1.05rem;
          color: #94A3B8;
          max-width: 560px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .industries-premium__hero-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .industries-premium__hero-btn {
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
          box-shadow: 0 12px 32px rgba(245, 158, 11, 0.25);
        }

        .industries-premium__hero-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 48px rgba(245, 158, 11, 0.35);
        }

        .industries-premium__hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(12px);
        }

        .industries-premium__hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-3px);
        }

        .industries-premium__hero-stats {
          position: absolute;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: flex;
          gap: 3rem;
          padding: 1.25rem 2.5rem;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
        }

        .industries-premium__hero-stat {
          text-align: center;
        }

        .industries-premium__hero-stat-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: #F1F5F9;
          display: block;
        }

        .industries-premium__hero-stat-label {
          font-size: 0.75rem;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        /* ================================================================
           INDUSTRY SECTIONS
           ================================================================ */

        .industries-premium__industry {
          padding: 5rem 0;
          position: relative;
        }

        .industries-premium__industry--even {
          background: #FFFFFF;
        }

        .industries-premium__industry--odd {
          background: #F8FAFC;
        }

        .industries-premium__industry-inner {
          display: grid;
          grid-template-columns: 1fr 1.4fr;
          gap: 4rem;
          align-items: start;
        }

        /* Left Column */
        .industries-premium__industry-visual {
          position: sticky;
          top: 100px;
        }

        .industries-premium__industry-icon {
          width: 72px;
          height: 72px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.4rem;
          margin-bottom: 1.25rem;
        }

        .industries-premium__industry-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.5rem;
        }

        .industries-premium__industry-headline {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }

        .industries-premium__industry-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          padding: 1.5rem;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
        }

        .industries-premium__industry-stat {
          text-align: center;
        }

        .industries-premium__industry-stat-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          display: block;
        }

        .industries-premium__industry-stat-label {
          font-size: 0.7rem;
          color: #64748B;
          font-weight: 500;
        }

        /* Right Column */
        .industries-premium__industry-content {
          display: flex;
          flex-direction: column;
          gap: 1.75rem;
        }

        .industries-premium__industry-desc {
          font-size: 1.05rem;
          color: #475569;
          line-height: 1.8;
        }

        .industries-premium__industry-challenges h4,
        .industries-premium__industry-solutions h4 {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #94A3B8;
          margin-bottom: 0.75rem;
        }

        .industries-premium__industry-challenge {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
          padding: 0.5rem 0;
          font-size: 0.9rem;
          color: #475569;
          border-bottom: 1px solid #F1F5F9;
        }

        .industries-premium__industry-challenge:last-child {
          border-bottom: none;
        }

        .industries-premium__industry-challenge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
          margin-top: 0.3rem;
        }

        .industries-premium__industry-solution {
          padding: 1rem 1.25rem;
          background: #FFFFFF;
          border-left: 4px solid;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
          margin-bottom: 0.5rem;
        }

        .industries-premium__industry-solution-title {
          font-weight: 700;
          font-size: 0.9rem;
          color: #0F172A;
          margin-bottom: 0.15rem;
        }

        .industries-premium__industry-solution-desc {
          font-size: 0.82rem;
          color: #64748B;
          line-height: 1.5;
        }

        .industries-premium__industry-case {
          padding: 1.5rem;
          border-radius: 16px;
          margin-top: 0.5rem;
        }

        .industries-premium__industry-case-label {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #94A3B8;
          margin-bottom: 0.5rem;
        }

        .industries-premium__industry-case-text {
          font-size: 0.9rem;
          font-style: italic;
          color: #475569;
          line-height: 1.7;
          margin-bottom: 0.75rem;
        }

        .industries-premium__industry-case-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .industries-premium__industry-case-link:hover {
          gap: 0.6rem;
        }

        /* ================================================================
           CTA
           ================================================================ */

        .industries-premium__cta {
          padding: 4.5rem 0;
          background: #0F172A;
          position: relative;
          overflow: hidden;
        }

        .industries-premium__cta-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 30% 50%, rgba(245, 158, 11, 0.04) 0%, transparent 60%),
            radial-gradient(circle at 70% 50%, rgba(245, 158, 11, 0.03) 0%, transparent 60%);
          pointer-events: none;
        }

        .industries-premium__cta-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 650px;
          margin: 0 auto;
        }

        .industries-premium__cta-badge {
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

        .industries-premium__cta-badge svg {
          color: #FBBF24;
        }

        .industries-premium__cta-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3vw, 2.8rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .industries-premium__cta-accent {
          color: #FBBF24;
        }

        .industries-premium__cta-desc {
          font-size: 1.05rem;
          color: #94A3B8;
          max-width: 480px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .industries-premium__cta-btn {
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

        .industries-premium__cta-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 48px rgba(245, 158, 11, 0.3);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .industries-premium__industry-inner {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .industries-premium__industry-visual {
            position: static;
          }

          .industries-premium__hero-stats {
            gap: 1.5rem;
            padding: 1rem 1.5rem;
          }

          .industries-premium__hero-stat-value {
            font-size: 1.4rem;
          }
        }

        @media (max-width: 768px) {
          .industries-premium__hero {
            height: auto;
            min-height: 500px;
            padding: 4rem 0;
          }

          .industries-premium__hero-title {
            font-size: 2rem;
          }

          .industries-premium__hero-actions {
            flex-direction: column;
            align-items: center;
          }

          .industries-premium__hero-btn,
          .industries-premium__hero-btn-secondary {
            width: 100%;
            justify-content: center;
          }

          .industries-premium__hero-stats {
            position: relative;
            bottom: auto;
            left: auto;
            transform: none;
            margin-top: 2rem;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1.5rem;
            padding: 1rem 1.5rem;
          }

          .industries-premium__container {
            padding: 0 16px;
          }

          .industries-premium__industry {
            padding: 3rem 0;
          }

          .industries-premium__industry-stats {
            grid-template-columns: 1fr 1fr 1fr;
            gap: 0.75rem;
            padding: 1rem;
          }

          .industries-premium__industry-stat-value {
            font-size: 1.1rem;
          }

          .industries-premium__industry-solution {
            padding: 0.75rem 1rem;
          }

          .industries-premium__industry-case {
            padding: 1.25rem;
          }
        }

        @media (max-width: 480px) {
          .industries-premium__hero-title {
            font-size: 1.6rem;
          }

          .industries-premium__hero-desc {
            font-size: 0.9rem;
          }

          .industries-premium__hero-stats {
            gap: 1rem;
          }

          .industries-premium__hero-stat-value {
            font-size: 1.2rem;
          }

          .industries-premium__industry-stats {
            grid-template-columns: 1fr;
            gap: 0.5rem;
          }

          .industries-premium__industry-stat {
            display: flex;
            justify-content: space-between;
            padding: 0.25rem 0;
            border-bottom: 1px solid #F1F5F9;
          }

          .industries-premium__industry-stat:last-child {
            border-bottom: none;
          }

          .industries-premium__industry-stat-value {
            font-size: 1rem;
          }

          .industries-premium__industry-stat-label {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  )
}