import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ArrowRight, CheckCircle2, Globe, Code2, Cpu, Shield, 
  TrendingUp, Users, Award, Star, Zap, Briefcase,
  Building2, Cloud, Database, Phone, CreditCard, 
  Sparkles, Rocket, Target, Crown
} from 'lucide-react'

// Import ShoppingCart
import { ShoppingCart } from 'lucide-react'

const techPartners = [
  { 
    name: 'Amazon Web Services', 
    category: 'Cloud Infrastructure', 
    logo: '☁️', 
    color: '#FF9900',
    desc: 'Our primary cloud infrastructure partner — hosting mission-critical workloads with high-availability architecture across East Africa.', 
    badge: 'Preferred Partner', 
  },
  { 
    name: 'Google Cloud Platform', 
    category: 'Cloud / AI', 
    logo: '🔵', 
    color: '#4285F4',
    desc: 'Leveraged for AI/ML workloads, BigQuery analytics, and multi-region deployments.', 
    badge: 'Technology Partner', 
  },
  { 
    name: 'Safaricom / M-Pesa', 
    category: 'Mobile Payments', 
    logo: '📱', 
    color: '#00BFA5',
    desc: 'Official M-Pesa integration partner — enabling mobile money payment flows across all our fintech and SaaS products.', 
    badge: 'Integration Partner', 
  },
  { 
    name: 'Twilio', 
    category: 'Communications', 
    logo: '💬', 
    color: '#F22F46',
    desc: 'Powers SMS, voice, and WhatsApp communication channels in our CRM, school, and healthcare platforms.', 
    badge: 'Technology Partner', 
  },
  { 
    name: 'Stripe', 
    category: 'Payment Processing', 
    logo: '💳', 
    color: '#6772E5',
    desc: 'International card payment processing for our ecommerce and SaaS subscription platforms.', 
    badge: 'Integration Partner', 
  },
  { 
    name: 'OpenAI', 
    category: 'Artificial Intelligence', 
    logo: '🤖', 
    color: '#10A37F',
    desc: 'The AI engine behind QuantivoCRM\'s smart follow-ups, AI Call Center voice agents, and Viral Blast content generation.', 
    badge: 'AI Partner', 
  },
  { 
    name: 'PostgreSQL / Supabase', 
    category: 'Database', 
    logo: '🐘', 
    color: '#336791',
    desc: 'Reliable open-source database powering our enterprise backends with real-time capabilities via Supabase.', 
    badge: 'Open Source', 
  },
  { 
    name: 'Vercel / Netlify', 
    category: 'Deployment', 
    logo: '⚡', 
    color: '#000000',
    desc: 'Frontend deployment partners for rapid, global edge delivery of our web applications.', 
    badge: 'Deployment Partner', 
  },
]

const channelPartners = [
  {
    name: 'System Integrators',
    icon: <Briefcase size={24} />,
    color: '#DC2626',
    desc: 'IT and systems integration firms that implement and support Quantivo Labs solutions for their enterprise clients.',
    benefits: ['Revenue share on license sales', 'Access to partner sandbox environments', 'Co-branded sales collateral', 'Technical onboarding support'],
  },
  {
    name: 'Resellers & VAR Partners',
    icon: <ShoppingCart size={24} />,
    color: '#059669',
    desc: 'Value-added resellers who bundle our digital products with consulting, training, or localisation services.',
    benefits: ['Competitive discount structure', 'Joint marketing programs', 'Priority lead referrals', 'Dedicated partner manager'],
  },
  {
    name: 'ISV Partners',
    icon: <Code2 size={24} />,
    color: '#D97706',
    desc: 'Independent software vendors whose products complement our platforms via API or white-label integrations.',
    benefits: ['API access and documentation', 'Listing on Quantivo Marketplace', 'Joint solution development', 'Go-to-market collaboration'],
  },
  {
    name: 'Consulting & Advisory Firms',
    icon: <Users size={24} />,
    color: '#0369A1',
    desc: 'Strategy and management consulting firms who recommend Quantivo Labs solutions during digital transformation engagements.',
    benefits: ['Referral commission program', 'Access to thought leadership content', 'Co-sponsored events & webinars', 'Client reference sharing'],
  },
]

const benefits = [
  { icon: <TrendingUp size={20} />, title: 'Revenue Opportunities', desc: 'Earn competitive margins on new license sales and renewals, with tiered benefits as your volume grows.' },
  { icon: <Code2 size={20} />, title: 'Technical Enablement', desc: 'Full API access, sandbox environments, detailed documentation, and dedicated pre-sales engineering support.' },
  { icon: <Users size={20} />, title: 'Partner Marketing', desc: 'Co-branded materials, joint webinars, event co-sponsorship, and listing in the Quantivo partner directory.' },
  { icon: <Shield size={20} />, title: 'Deal Protection', desc: 'Clear deal registration process and geographic or vertical market protections for registered opportunities.' },
  { icon: <Cpu size={20} />, title: 'Product Roadmap Input', desc: 'Partner advisory council membership with direct influence on feature prioritisation and product strategy.' },
  { icon: <Globe size={20} />, title: 'Global Reach', desc: 'Access to Quantivo\'s client base across 8 countries and introductions to strategic enterprise prospects.' },
]

const tiers = [
  { name: 'Registered', color: '#94A3B8', bg: '#F8FAFC', requirements: 'Application & agreement', benefits: ['Partner portal access', 'Training resources', 'Basic co-marketing'] },
  { name: 'Silver', color: '#64748B', bg: '#F1F5F9', requirements: 'KSh 1M+ ARR', benefits: ['All Registered benefits', 'Revenue share 15%', 'Dedicated partner manager', 'Sandbox environments'] },
  { name: 'Gold', color: '#D97706', bg: '#FFFBEB', requirements: 'KSh 5M+ ARR', benefits: ['All Silver benefits', 'Revenue share 20%', 'Joint GTM programs', 'Deal protection', 'Roadmap advisory'] },
  { name: 'Platinum', color: '#DC2626', bg: '#FEF2F2', requirements: 'KSh 15M+ ARR', benefits: ['All Gold benefits', 'Revenue share 25%', 'Strategic co-development', 'Executive sponsorship', 'Premier support SLA'] },
]

export default function Partners() {
  const [activeTab, setActiveTab] = useState<'tech' | 'channel'>('tech')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="partners-reimagined">
      {/* ===== HERO - COMPLETELY NEW DESIGN ===== */}
      <section className="partners-reimagined__hero">
        <div className="partners-reimagined__hero-bg">
          <div className="partners-reimagined__hero-pattern" />
          <div className="partners-reimagined__hero-shapes">
            <div className="partners-reimagined__hero-shape partners-reimagined__hero-shape--1" />
            <div className="partners-reimagined__hero-shape partners-reimagined__hero-shape--2" />
            <div className="partners-reimagined__hero-shape partners-reimagined__hero-shape--3" />
            <div className="partners-reimagined__hero-shape partners-reimagined__hero-shape--4" />
          </div>
        </div>
        
        <div className="partners-reimagined__hero-content">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="partners-reimagined__hero-inner"
          >
            <div className="partners-reimagined__hero-tag">
              <Crown size={16} />
              <span>Partner Ecosystem</span>
            </div>
            
            <h1 className="partners-reimagined__hero-title">
              Join the <span className="partners-reimagined__hero-highlight">Elite Circle</span>
            </h1>
            
            <p className="partners-reimagined__hero-desc">
              Build your business alongside Quantivo Labs. Access our technology, 
              expertise, and network to deliver transformative solutions across Africa.
            </p>
            
            <div className="partners-reimagined__hero-stats">
              <div className="partners-reimagined__hero-stat">
                <span className="partners-reimagined__hero-stat-number">50+</span>
                <span className="partners-reimagined__hero-stat-label">Active Partners</span>
              </div>
              <div className="partners-reimagined__hero-stat">
                <span className="partners-reimagined__hero-stat-number">8</span>
                <span className="partners-reimagined__hero-stat-label">Countries</span>
              </div>
              <div className="partners-reimagined__hero-stat">
                <span className="partners-reimagined__hero-stat-number">200+</span>
                <span className="partners-reimagined__hero-stat-label">Joint Clients</span>
              </div>
            </div>
            
            <div className="partners-reimagined__hero-actions">
              <Link to="/contact" className="partners-reimagined__hero-btn">
                <Rocket size={18} />
                Become a Partner
                <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="partners-reimagined__hero-btn-secondary">
                Talk to Partner Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ===== TABBED PARTNERS VIEW ===== */}
      <section className="partners-reimagined__tabs">
        <div className="partners-reimagined__tabs-header">
          <button 
            className={`partners-reimagined__tab ${activeTab === 'tech' ? 'active' : ''}`}
            onClick={() => setActiveTab('tech')}
          >
            <Cloud size={18} />
            Technology Partners
          </button>
          <button 
            className={`partners-reimagined__tab ${activeTab === 'channel' ? 'active' : ''}`}
            onClick={() => setActiveTab('channel')}
          >
            <Users size={18} />
            Channel Partners
          </button>
        </div>

        <div className="partners-reimagined__tabs-content">
          <AnimatePresence mode="wait">
            {activeTab === 'tech' ? (
              <motion.div
                key="tech"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="partners-reimagined__tech-grid"
              >
                {techPartners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    className="partners-reimagined__tech-card"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="partners-reimagined__tech-card-inner">
                      <div 
                        className="partners-reimagined__tech-logo"
                        style={{ background: `${partner.color}12`, color: partner.color }}
                      >
                        {partner.logo}
                      </div>
                      <span className="partners-reimagined__tech-badge">{partner.badge}</span>
                      <h4 className="partners-reimagined__tech-name">{partner.name}</h4>
                      <p className="partners-reimagined__tech-desc">{partner.desc}</p>
                      <span className="partners-reimagined__tech-category">{partner.category}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="channel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="partners-reimagined__channel-grid"
              >
                {channelPartners.map((partner, index) => (
                  <motion.div
                    key={partner.name}
                    className="partners-reimagined__channel-card"
                    style={{ '--accent': partner.color } as React.CSSProperties}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                  >
                    <div className="partners-reimagined__channel-card-inner">
                      <div className="partners-reimagined__channel-header">
                        <div 
                          className="partners-reimagined__channel-icon"
                          style={{ background: `${partner.color}12`, color: partner.color }}
                        >
                          {partner.icon}
                        </div>
                        <h3 className="partners-reimagined__channel-name">{partner.name}</h3>
                      </div>
                      <p className="partners-reimagined__channel-desc">{partner.desc}</p>
                      <div className="partners-reimagined__channel-benefits">
                        {partner.benefits.map((benefit) => (
                          <div key={benefit} className="partners-reimagined__channel-benefit">
                            <CheckCircle2 size={14} color={partner.color} />
                            <span>{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* ===== BENEFITS - WAVE LAYOUT ===== */}
      <section className="partners-reimagined__benefits">
        <div className="partners-reimagined__benefits-header">
          <span className="partners-reimagined__benefits-tag">
            <Target size={14} />
            Why Partner
          </span>
          <h2 className="partners-reimagined__benefits-title">
            Your Success is <span className="partners-reimagined__benefits-accent">Our Success</span>
          </h2>
        </div>

        <div className="partners-reimagined__benefits-grid">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="partners-reimagined__benefit-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <div className="partners-reimagined__benefit-icon">
                {benefit.icon}
              </div>
              <h4 className="partners-reimagined__benefit-title">{benefit.title}</h4>
              <p className="partners-reimagined__benefit-desc">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== TIERS - COMPACT MODERN ===== */}
      <section className="partners-reimagined__tiers">
        <div className="partners-reimagined__tiers-header">
          <span className="partners-reimagined__tiers-tag">
            <Award size={14} />
            Partner Tiers
          </span>
          <h2 className="partners-reimagined__tiers-title">
            Grow. Scale. <span className="partners-reimagined__tiers-accent">Earn More.</span>
          </h2>
        </div>

        <div className="partners-reimagined__tiers-grid">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              className="partners-reimagined__tier-card"
              style={{ 
                '--tier-color': tier.color,
                background: tier.bg,
              } as React.CSSProperties}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="partners-reimagined__tier-header">
                <span className="partners-reimagined__tier-name">{tier.name}</span>
                <span className="partners-reimagined__tier-requirements">{tier.requirements}</span>
              </div>
              <div className="partners-reimagined__tier-benefits-list">
                {tier.benefits.map((benefit) => (
                  <div key={benefit} className="partners-reimagined__tier-benefit-item">
                    <CheckCircle2 size={12} color={tier.color} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CTA - MODERN BANNER ===== */}
      <section className="partners-reimagined__cta">
        <div className="partners-reimagined__cta-bg">
          <div className="partners-reimagined__cta-pattern" />
          <div className="partners-reimagined__cta-glow" />
        </div>
        <div className="partners-reimagined__cta-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="partners-reimagined__cta-inner"
          >
            <span className="partners-reimagined__cta-tag">
              <Zap size={16} />
              Ready to Partner?
            </span>
            <h2 className="partners-reimagined__cta-title">
              Let's Build the Future <br />
              <span className="partners-reimagined__cta-accent">of African Tech Together</span>
            </h2>
            <p className="partners-reimagined__cta-desc">
              Join our ecosystem of partners and start delivering transformative technology solutions across Africa.
            </p>
            <div className="partners-reimagined__cta-actions">
              <Link to="/contact" className="partners-reimagined__cta-primary">
                Apply Now <ArrowRight size={16} />
              </Link>
              <Link to="/contact" className="partners-reimagined__cta-secondary">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* ================================================================
           PARTNERS REIMAGINED - COMPLETELY UNIQUE DESIGN
           ================================================================ */

        .partners-reimagined {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0F172A;
        }

        /* ================================================================
           HERO - COMPLETELY NEW
           ================================================================ */

        .partners-reimagined__hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0F172A;
        }

        .partners-reimagined__hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .partners-reimagined__hero-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(245, 158, 11, 0.04) 0%, transparent 50%);
        }

        .partners-reimagined__hero-shapes {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .partners-reimagined__hero-shape {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.04);
          animation: heroShapeFloat 25s ease-in-out infinite;
        }

        .partners-reimagined__hero-shape--1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -80px;
          border-color: rgba(37, 99, 235, 0.06);
          animation-delay: 0s;
        }

        .partners-reimagined__hero-shape--2 {
          width: 300px;
          height: 300px;
          bottom: -80px;
          left: -60px;
          border-color: rgba(245, 158, 11, 0.05);
          animation-delay: 5s;
          animation-direction: reverse;
        }

        .partners-reimagined__hero-shape--3 {
          width: 200px;
          height: 200px;
          top: 30%;
          right: 20%;
          border-color: rgba(124, 58, 237, 0.04);
          animation-delay: 10s;
        }

        .partners-reimagined__hero-shape--4 {
          width: 150px;
          height: 150px;
          bottom: 30%;
          left: 20%;
          border-color: rgba(6, 182, 212, 0.04);
          animation-delay: 15s;
          animation-direction: reverse;
        }

        @keyframes heroShapeFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(30px, -20px) rotate(5deg); }
          66% { transform: translate(-20px, 30px) rotate(-5deg); }
        }

        .partners-reimagined__hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          padding: 4rem 2rem;
        }

        .partners-reimagined__hero-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .partners-reimagined__hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 2rem;
        }

        .partners-reimagined__hero-tag svg {
          color: #FBBF24;
        }

        .partners-reimagined__hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(3rem, 6vw, 5rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin-bottom: 1.5rem;
        }

        .partners-reimagined__hero-highlight {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .partners-reimagined__hero-desc {
          font-size: 1.1rem;
          color: #94A3B8;
          max-width: 600px;
          margin: 0 auto 2.5rem;
          line-height: 1.8;
        }

        .partners-reimagined__hero-stats {
          display: flex;
          justify-content: center;
          gap: 4rem;
          margin-bottom: 2.5rem;
        }

        .partners-reimagined__hero-stat {
          text-align: center;
        }

        .partners-reimagined__hero-stat-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #F1F5F9;
          display: block;
        }

        .partners-reimagined__hero-stat-label {
          font-size: 0.8rem;
          color: #94A3B8;
          font-weight: 500;
        }

        .partners-reimagined__hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .partners-reimagined__hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 2.2rem;
          background: linear-gradient(135deg, #FBBF24, #F59E0B);
          color: #0F172A;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 12px 40px rgba(245, 158, 11, 0.2);
        }

        .partners-reimagined__hero-btn:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 60px rgba(245, 158, 11, 0.35);
        }

        .partners-reimagined__hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.9rem 2.2rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .partners-reimagined__hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-4px);
        }

        /* ================================================================
           TABS - UNIQUE DESIGN
           ================================================================ */

        .partners-reimagined__tabs {
          padding: 4rem 0 5rem;
          background: #F8FAFC;
        }

        .partners-reimagined__tabs-header {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          max-width: 600px;
          margin: 0 auto 3rem;
          background: #FFFFFF;
          padding: 0.5rem;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
        }

        .partners-reimagined__tab {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.7rem 1.8rem;
          border: none;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #64748B;
          background: transparent;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .partners-reimagined__tab:hover {
          color: #0F172A;
        }

        .partners-reimagined__tab.active {
          background: #0F172A;
          color: #FFFFFF;
        }

        .partners-reimagined__tabs-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* ---- Tech Partners Grid ---- */
        .partners-reimagined__tech-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .partners-reimagined__tech-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 1.5rem;
          border: 1px solid #E2E8F0;
          transition: all 0.4s ease;
          cursor: default;
        }

        .partners-reimagined__tech-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
          border-color: #CBD5E1;
        }

        .partners-reimagined__tech-card-inner {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .partners-reimagined__tech-logo {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2rem;
          transition: transform 0.3s ease;
        }

        .partners-reimagined__tech-card:hover .partners-reimagined__tech-logo {
          transform: scale(1.05) rotate(-3deg);
        }

        .partners-reimagined__tech-badge {
          font-size: 0.6rem;
          font-weight: 600;
          padding: 0.2rem 0.7rem;
          background: #EEF2FF;
          color: #4338CA;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          width: fit-content;
        }

        .partners-reimagined__tech-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #0F172A;
          margin: 0.2rem 0 0.1rem;
        }

        .partners-reimagined__tech-desc {
          font-size: 0.82rem;
          color: #64748B;
          line-height: 1.6;
        }

        .partners-reimagined__tech-category {
          font-size: 0.65rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-top: 0.2rem;
        }

        /* ---- Channel Partners Grid ---- */
        .partners-reimagined__channel-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
        }

        .partners-reimagined__channel-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 1.75rem;
          border: 1px solid #E2E8F0;
          transition: all 0.4s ease;
        }

        .partners-reimagined__channel-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
          border-left-color: var(--accent);
        }

        .partners-reimagined__channel-card-inner {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .partners-reimagined__channel-header {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .partners-reimagined__channel-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .partners-reimagined__channel-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
        }

        .partners-reimagined__channel-desc {
          font-size: 0.88rem;
          color: #64748B;
          line-height: 1.7;
        }

        .partners-reimagined__channel-benefits {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          margin-top: 0.25rem;
        }

        .partners-reimagined__channel-benefit {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.82rem;
          color: #475569;
        }

        /* ================================================================
           BENEFITS - WAVE LAYOUT
           ================================================================ */

        .partners-reimagined__benefits {
          padding: 5rem 0;
          background: #FFFFFF;
        }

        .partners-reimagined__benefits-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3.5rem;
        }

        .partners-reimagined__benefits-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
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

        .partners-reimagined__benefits-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3vw, 2.6rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.03em;
        }

        .partners-reimagined__benefits-accent {
          color: #F59E0B;
        }

        .partners-reimagined__benefits-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .partners-reimagined__benefit-card {
          background: #F8FAFC;
          border-radius: 16px;
          padding: 1.75rem;
          border: 1px solid #E2E8F0;
          transition: all 0.4s ease;
        }

        .partners-reimagined__benefit-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.04);
          border-color: #CBD5E1;
          background: #FFFFFF;
        }

        .partners-reimagined__benefit-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #EEF2FF;
          color: #2563EB;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .partners-reimagined__benefit-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.3rem;
        }

        .partners-reimagined__benefit-desc {
          font-size: 0.85rem;
          color: #64748B;
          line-height: 1.7;
        }

        /* ================================================================
           TIERS - COMPACT MODERN
           ================================================================ */

        .partners-reimagined__tiers {
          padding: 5rem 0;
          background: #F8FAFC;
        }

        .partners-reimagined__tiers-header {
          text-align: center;
          max-width: 700px;
          margin: 0 auto 3.5rem;
        }

        .partners-reimagined__tiers-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
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

        .partners-reimagined__tiers-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3vw, 2.6rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.03em;
        }

        .partners-reimagined__tiers-accent {
          color: #F59E0B;
        }

        .partners-reimagined__tiers-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .partners-reimagined__tier-card {
          border-radius: 16px;
          padding: 1.75rem;
          border: 1px solid #E2E8F0;
          transition: all 0.4s ease;
          border-top: 4px solid var(--tier-color);
        }

        .partners-reimagined__tier-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
        }

        .partners-reimagined__tier-header {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
          margin-bottom: 1rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid #E2E8F0;
        }

        .partners-reimagined__tier-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.2rem;
          font-weight: 700;
          color: #0F172A;
        }

        .partners-reimagined__tier-requirements {
          font-size: 0.75rem;
          color: #64748B;
          font-weight: 500;
        }

        .partners-reimagined__tier-benefits-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .partners-reimagined__tier-benefit-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          color: #475569;
        }

        /* ================================================================
           CTA - MODERN BANNER
           ================================================================ */

        .partners-reimagined__cta {
          position: relative;
          padding: 5rem 0;
          overflow: hidden;
          background: #0F172A;
        }

        .partners-reimagined__cta-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .partners-reimagined__cta-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 30% 50%, rgba(245, 158, 11, 0.05) 0%, transparent 60%),
            radial-gradient(circle at 70% 50%, rgba(37, 99, 235, 0.04) 0%, transparent 60%);
        }

        .partners-reimagined__cta-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(245, 158, 11, 0.04), transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
        }

        .partners-reimagined__cta-content {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .partners-reimagined__cta-inner {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .partners-reimagined__cta-tag {
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

        .partners-reimagined__cta-tag svg {
          color: #FBBF24;
        }

        .partners-reimagined__cta-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3.5vw, 3rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .partners-reimagined__cta-accent {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .partners-reimagined__cta-desc {
          font-size: 1rem;
          color: #94A3B8;
          max-width: 480px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .partners-reimagined__cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .partners-reimagined__cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, #FBBF24, #F59E0B);
          color: #0F172A;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 12px 32px rgba(245, 158, 11, 0.2);
        }

        .partners-reimagined__cta-primary:hover {
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 20px 48px rgba(245, 158, 11, 0.35);
        }

        .partners-reimagined__cta-secondary {
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

        .partners-reimagined__cta-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-4px);
        }

        /* ================================================================
           RESPONSIVE
           ================================================================ */

        @media (max-width: 1200px) {
          .partners-reimagined__tech-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .partners-reimagined__tech-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .partners-reimagined__tiers-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .partners-reimagined__benefits-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .partners-reimagined__hero-title {
            font-size: 2.4rem;
          }
          .partners-reimagined__hero-stats {
            gap: 2rem;
          }
          .partners-reimagined__hero-stat-number {
            font-size: 1.6rem;
          }
          .partners-reimagined__tech-grid {
            grid-template-columns: 1fr 1fr;
          }
          .partners-reimagined__channel-grid {
            grid-template-columns: 1fr;
          }
          .partners-reimagined__benefits-grid {
            grid-template-columns: 1fr;
          }
          .partners-reimagined__tiers-grid {
            grid-template-columns: 1fr 1fr;
          }
          .partners-reimagined__tabs-header {
            flex-direction: column;
            gap: 0.5rem;
            padding: 0.5rem;
            border-radius: 12px;
          }
          .partners-reimagined__tab {
            justify-content: center;
          }
          .partners-reimagined__hero-actions {
            flex-direction: column;
            align-items: center;
          }
          .partners-reimagined__hero-btn,
          .partners-reimagined__hero-btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .partners-reimagined__cta-actions {
            flex-direction: column;
            align-items: center;
          }
          .partners-reimagined__cta-primary,
          .partners-reimagined__cta-secondary {
            width: 100%;
            justify-content: center;
          }
          .partners-reimagined__hero-shape {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .partners-reimagined__hero-title {
            font-size: 1.8rem;
          }
          .partners-reimagined__hero-stats {
            flex-direction: column;
            gap: 0.75rem;
          }
          .partners-reimagined__tech-grid {
            grid-template-columns: 1fr;
          }
          .partners-reimagined__tiers-grid {
            grid-template-columns: 1fr;
          }
          .partners-reimagined__benefits-grid {
            grid-template-columns: 1fr;
          }
          .partners-reimagined__hero {
            min-height: auto;
            padding: 4rem 0;
          }
        }
      `}</style>
    </div>
  )
}