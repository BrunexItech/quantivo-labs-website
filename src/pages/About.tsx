import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Globe, Award, Users, Heart, TrendingUp, Sparkles, Zap, Shield, Cpu, Compass, Rocket } from 'lucide-react'

const values = [
  { emoji: '💡', title: 'Innovation', desc: 'We push boundaries and embrace emerging technologies to deliver market-leading solutions.' },
  { emoji: '🤝', title: 'Integrity', desc: 'Transparency and honesty are the foundation of every client relationship.' },
  { emoji: '⭐', title: 'Excellence', desc: 'We hold ourselves to the highest standards in quality and delivery.' },
  { emoji: '🎯', title: 'Customer Success', desc: 'Your growth is our primary metric — we succeed when you succeed.' },
  { emoji: '⚡', title: 'Agility', desc: 'We adapt rapidly to change, delivering value in fast-paced digital environments.' },
  { emoji: '🌍', title: 'Collaboration', desc: 'Close client partnership and cross-functional teamwork drive the best results.' },
  { emoji: '🔍', title: 'Transparency', desc: 'Open communication, clear roadmaps, and honest reporting at every stage.' },
  { emoji: '🔒', title: 'Security', desc: 'Enterprise-grade security embedded into every product and infrastructure we build.' },
]

const team = [
  { name: 'John Wati', role: 'Director', dept: 'Directorship' },
  { name: 'Ali Amour', role: 'Director', dept: 'Directorship' },
  { name: 'Yusuf', role: 'Director', dept: 'Directorship' },
  { name: 'Sophia Ochieng', role: 'Chief Technology Officer', dept: 'Executive Leadership' },
  { name: 'David Kamau', role: 'Chief Operations Officer', dept: 'Executive Leadership' },
  { name: 'Priya Sharma', role: 'Head of AI & Machine Learning', dept: 'AI Specialists' },
  { name: 'James Otieno', role: 'Lead Software Engineer', dept: 'Engineering' },
  { name: 'Fatima Al-Hassan', role: 'Senior AI Engineer', dept: 'AI Specialists' },
  { name: 'Kevin Njoroge', role: 'Full Stack Developer', dept: 'Engineering' },
  { name: 'Amara Diallo', role: 'Product Manager', dept: 'Product' },
  { name: 'Grace Wanjiku', role: 'Project Manager', dept: 'Project Management' },
  { name: "Liam O'Brien", role: 'UX/UI Lead Designer', dept: 'Design' },
  { name: 'Zara Ibrahim', role: 'Product Designer', dept: 'Design' },
  { name: 'Michael Abubakar', role: 'DevOps Engineer', dept: 'Engineering' },
]

const milestones = [
  { year: '2020', title: 'Founded', desc: 'Quantivo Labs established in Nairobi with a vision for AI-first enterprise technology.' },
  { year: '2021', title: 'First Products', desc: 'Launched PSP Platform and Digital Wallet, serving 20+ clients across East Africa.' },
  { year: '2022', title: 'AI Expansion', desc: 'Released AI Call Center and Viral Blast; AI team grew to 15 specialists.' },
  { year: '2023', title: 'Scale Up', desc: 'Expanded to hospital, school, and management systems; 100+ enterprise clients.' },
  { year: '2024', title: 'DFS & Hospitality', desc: 'Launched DFS Solutions, Hotel POS, and expanded to 8 African countries.' },
  { year: '2025+', title: 'Global Reach', desc: 'Targeting global markets with next-generation intelligent automation platforms.' },
]

const deptColors: Record<string, string> = {
  'Directorship': 'badge-amber',
  'Executive Leadership': 'badge-indigo',
  'AI Specialists': 'badge-purple',
  'Engineering': 'badge-cyan',
  'Product': 'badge-emerald',
  'Project Management': 'badge-rose',
  'Design': 'badge-pink',
}

export default function About() {
  return (
    <div className="about-page">
      {/* ===== CREATIVE HERO - CENTERED ===== */}
      <section className="about-hero-creative">
        {/* Background with gradient mesh */}
        <div className="about-hero-creative__bg">
          <div className="about-hero-creative__mesh" />
          <div className="about-hero-creative__gradient-1" />
          <div className="about-hero-creative__gradient-2" />
        </div>

        {/* Floating geometric shapes */}
        <div className="about-hero-creative__shapes">
          <div className="about-hero-creative__shape about-hero-creative__shape--1">
            <div className="about-hero-creative__shape-inner" />
          </div>
          <div className="about-hero-creative__shape about-hero-creative__shape--2">
            <div className="about-hero-creative__shape-inner" />
          </div>
          <div className="about-hero-creative__shape about-hero-creative__shape--3">
            <div className="about-hero-creative__shape-inner" />
          </div>
          <div className="about-hero-creative__shape about-hero-creative__shape--4">
            <div className="about-hero-creative__shape-inner" />
          </div>
          <div className="about-hero-creative__shape about-hero-creative__shape--5">
            <div className="about-hero-creative__shape-inner" />
          </div>
        </div>

        {/* Floating icons */}
        <div className="about-hero-creative__floating">
          <div className="about-hero-creative__float about-hero-creative__float--1">
            <Rocket size={20} />
          </div>
          <div className="about-hero-creative__float about-hero-creative__float--2">
            <Compass size={18} />
          </div>
          <div className="about-hero-creative__float about-hero-creative__float--3">
            <Sparkles size={16} />
          </div>
          <div className="about-hero-creative__float about-hero-creative__float--4">
            <Target size={20} />
          </div>
        </div>

        {/* Content - CENTERED */}
        <div className="container about-hero-creative__container">
          <div className="about-hero-creative__content">
            <div className="about-hero-creative__badge">
              <span className="about-hero-creative__badge-dot" />
              <span>About Quantivo Labs</span>
            </div>
            <h1 className="about-hero-creative__title">
              The Future of African Technology <br />
              <span className="about-hero-creative__highlight">Starts Here</span>
            </h1>
            <p className="about-hero-creative__desc">
              We are an AI-first technology company from Nairobi, Kenya — engineering intelligent 
              platforms that power Africa's most ambitious organisations.
            </p>
            <div className="about-hero-creative__actions">
              <Link to="/contact" className="about-hero-creative__btn-primary">
                Work With Us <ArrowRight size={18} />
              </Link>
              <Link to="/about" className="about-hero-creative__btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom decorative wave */}
        <div className="about-hero-creative__wave">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 40L60 45C120 50 240 60 360 55C480 50 600 30 720 35C840 40 960 70 1080 75C1200 80 1320 65 1380 57.5L1440 50V120H1380C1320 120 1200 120 1080 120H360C240 120 120 120 60 120H0V40Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* ===== MISSION / VISION / REACH ===== */}
      <section className="about-section">
        <div className="container">
          <div className="about-mvr-grid">
            <div className="about-card about-card--mvr">
              <div className="about-icon-box" style={{ background: '#e8f0fe', color: '#1a56db' }}>
                <Target size={26} />
              </div>
              <h3>Our Mission</h3>
              <p>To design and deliver advanced AI-powered digital platforms that automate operations, optimize performance, and enable intelligent growth for businesses and institutions worldwide.</p>
            </div>
            <div className="about-card about-card--mvr">
              <div className="about-icon-box" style={{ background: '#f0e8fe', color: '#7c3aed' }}>
                <Eye size={26} />
              </div>
              <h3>Our Vision</h3>
              <p>To become a globally trusted AI technology company building intelligent solutions that transform how organisations operate, serve customers, and scale in the digital economy.</p>
            </div>
            <div className="about-card about-card--mvr">
              <div className="about-icon-box" style={{ background: '#e0f7ea', color: '#059669' }}>
                <Globe size={26} />
              </div>
              <h3>Our Reach</h3>
              <p>Headquartered in Nairobi, Kenya, we serve clients across Africa and beyond — delivering world-class technology solutions with local expertise and global standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="about-section about-section--alt">
        <div className="container">
          <div className="about-section__header">
            <span className="about-tag">Core Values</span>
            <h2>What <span className="gradient-text">Drives Us</span></h2>
            <p>Eight core values that form the foundation of every decision, every line of code, and every client interaction.</p>
          </div>
          <div className="about-values-grid">
            {values.map(v => (
              <div key={v.title} className="about-card about-card--value">
                <span className="about-value-emoji">{v.emoji}</span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TIMELINE ===== */}
      <section className="about-section">
        <div className="container">
          <div className="about-section__header">
            <span className="about-tag">Our Journey</span>
            <h2>From Startup to <span className="gradient-text">Scale</span></h2>
          </div>
          <div className="about-timeline">
            <div className="about-timeline__line" />
            {milestones.map((m, i) => (
              <div key={m.year} className={`about-timeline__item ${i % 2 === 0 ? 'tl-left' : 'tl-right'}`}>
                <div className="about-card about-timeline__card">
                  <div className="about-timeline__year">{m.year}</div>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
                <div className="about-timeline__dot" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TEAM ===== */}
      <section className="about-section about-section--alt">
        <div className="container">
          <div className="about-section__header">
            <span className="about-tag">The Team</span>
            <h2>People Behind the <span className="gradient-text">Technology</span></h2>
            <p>A diverse team of engineers, designers, AI specialists, and strategists united by a passion for innovation.</p>
          </div>
          <div className="about-team-grid">
            {team.map(m => {
              const isDirector = m.dept === 'Directorship'
              return (
                <div key={m.name} className={`about-card about-team-card ${isDirector ? 'about-team-card--director' : ''}`}>
                  <div className={`about-avatar ${isDirector ? 'about-avatar--director' : ''}`}>
                    {m.name.charAt(0)}{m.name.split(' ')[1]?.charAt(0) ?? ''}
                  </div>
                  <div className="about-team-name">{m.name}</div>
                  <div className="about-team-role">{m.role}</div>
                  <span className={`about-badge ${deptColors[m.dept] || 'badge-gray'}`}>{m.dept}</span>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ===== KPI STRIP ===== */}
      <section className="about-section about-section--sm">
        <div className="container">
          <div className="about-kpi-strip">
            {[
              { icon: <Award size={22} />, metric: 'Best AI Startup 2023', sub: 'East Africa Tech Awards' },
              { icon: <Users size={22} />, metric: '200+ Clients', sub: 'Across 8 countries' },
              { icon: <Globe size={22} />, metric: 'Global Standards', sub: 'ISO-aligned practices' },
              { icon: <Heart size={22} />, metric: '98% Satisfaction', sub: 'Client retention rate' },
              { icon: <TrendingUp size={22} />, metric: '5M+ Transactions', sub: 'Processed monthly' },
            ].map(a => (
              <div key={a.metric} className="about-kpi-item">
                <div className="about-kpi-icon">{a.icon}</div>
                <div className="about-kpi-metric">{a.metric}</div>
                <div className="about-kpi-sub">{a.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        /* ================================================================
           ABOUT PAGE - CREATIVE HERO CENTERED
           ================================================================ */

        .about-page {
          --about-primary: #0c1e3e;
          --about-accent: #f9734e;
          --about-accent-light: #fef0ea;
          --about-bg-soft: #f5f8fe;
          --about-border: #e8edf5;
          --about-shadow: 0 12px 40px -12px rgba(12, 30, 62, 0.08);
          --about-shadow-hover: 0 24px 56px -16px rgba(12, 30, 62, 0.16);
          --about-radius: 24px;
          --about-radius-sm: 16px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0c1e3e;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ================================================================
           CREATIVE HERO - CENTERED CONTENT
           ================================================================ */

        .about-hero-creative {
          position: relative;
          padding: 6rem 0 5rem;
          overflow: hidden;
          background: linear-gradient(160deg, #f8fafc 0%, #eef2ff 30%, #f0f9ff 60%, #f5f3ff 100%);
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ---- Background Elements ---- */
        .about-hero-creative__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .about-hero-creative__mesh {
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(124, 58, 237, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 50% 80%, rgba(6, 182, 212, 0.02) 0%, transparent 40%);
        }

        .about-hero-creative__gradient-1 {
          position: absolute;
          top: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          animation: creativeOrbFloat 20s ease-in-out infinite;
        }

        .about-hero-creative__gradient-2 {
          position: absolute;
          bottom: -20%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          filter: blur(60px);
          animation: creativeOrbFloat 25s ease-in-out infinite reverse;
        }

        @keyframes creativeOrbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 20px) scale(0.9); }
        }

        /* ---- Geometric Shapes ---- */
        .about-hero-creative__shapes {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .about-hero-creative__shape {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(37, 99, 235, 0.06);
          animation: creativeShapeFloat 30s ease-in-out infinite;
        }

        .about-hero-creative__shape-inner {
          position: absolute;
          inset: 20%;
          border-radius: 50%;
          border: 1px solid rgba(37, 99, 235, 0.04);
        }

        .about-hero-creative__shape--1 {
          width: 400px;
          height: 400px;
          top: -100px;
          right: -80px;
          border-color: rgba(37, 99, 235, 0.05);
          animation-delay: 0s;
        }

        .about-hero-creative__shape--2 {
          width: 300px;
          height: 300px;
          bottom: -60px;
          left: -60px;
          border-color: rgba(124, 58, 237, 0.04);
          animation-delay: 5s;
          animation-direction: reverse;
        }

        .about-hero-creative__shape--3 {
          width: 200px;
          height: 200px;
          top: 30%;
          right: 15%;
          border-color: rgba(6, 182, 212, 0.04);
          animation-delay: 10s;
        }

        .about-hero-creative__shape--4 {
          width: 150px;
          height: 150px;
          bottom: 25%;
          left: 15%;
          border-color: rgba(245, 158, 11, 0.04);
          animation-delay: 15s;
          animation-direction: reverse;
        }

        .about-hero-creative__shape--5 {
          width: 80px;
          height: 80px;
          top: 15%;
          left: 10%;
          border-color: rgba(37, 99, 235, 0.03);
          animation-delay: 20s;
        }

        @keyframes creativeShapeFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(20px, -25px) rotate(10deg); }
          66% { transform: translate(-25px, 20px) rotate(-10deg); }
        }

        /* ---- Floating Icons ---- */
        .about-hero-creative__floating {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .about-hero-creative__float {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.6);
          border: 1px solid rgba(37, 99, 235, 0.06);
          color: rgba(37, 99, 235, 0.2);
          backdrop-filter: blur(8px);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.02);
          animation: creativeFloatIcon 25s ease-in-out infinite;
        }

        .about-hero-creative__float--1 {
          width: 56px;
          height: 56px;
          top: 12%;
          right: 12%;
          animation-delay: 0s;
          animation-duration: 20s;
        }

        .about-hero-creative__float--2 {
          width: 44px;
          height: 44px;
          bottom: 20%;
          left: 8%;
          animation-delay: 6s;
          animation-duration: 24s;
          animation-direction: reverse;
        }

        .about-hero-creative__float--3 {
          width: 36px;
          height: 36px;
          top: 50%;
          right: 5%;
          animation-delay: 12s;
          animation-duration: 18s;
        }

        .about-hero-creative__float--4 {
          width: 48px;
          height: 48px;
          top: 25%;
          left: 5%;
          animation-delay: 3s;
          animation-duration: 22s;
          animation-direction: reverse;
        }

        @keyframes creativeFloatIcon {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          25% { transform: translate(20px, -25px) scale(1.1); opacity: 0.6; }
          50% { transform: translate(-15px, 20px) scale(0.9); opacity: 0.4; }
          75% { transform: translate(25px, 15px) scale(1.05); opacity: 0.5; }
        }

        /* ---- Content - CENTERED ---- */
        .about-hero-creative__container {
          position: relative;
          z-index: 10;
          width: 100%;
          display: flex;
          justify-content: center;
        }

        .about-hero-creative__content {
          max-width: 800px;
          text-align: center;
          margin: 0 auto;
        }

        .about-hero-creative__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.25rem;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(37, 99, 235, 0.06);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(8px);
        }

        .about-hero-creative__badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563EB, #7C3AED);
          animation: creativeDotPulse 2s ease-in-out infinite;
        }

        @keyframes creativeDotPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        .about-hero-creative__title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.6rem, 4.5vw, 4rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .about-hero-creative__highlight {
          background: linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          position: relative;
        }

        .about-hero-creative__highlight::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 3px;
          background: linear-gradient(90deg, #2563EB, #7C3AED, #EC4899);
          border-radius: 4px;
          opacity: 0.2;
          animation: creativeUnderline 3s ease-in-out infinite;
        }

        @keyframes creativeUnderline {
          0%, 100% { width: 60%; opacity: 0.2; }
          50% { width: 40%; opacity: 0.5; }
        }

        .about-hero-creative__desc {
          font-size: 1.05rem;
          color: #475569;
          max-width: 600px;
          margin: 0 auto 2rem;
          line-height: 1.8;
        }

        .about-hero-creative__actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .about-hero-creative__btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, #2563EB, #7C3AED);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 12px 32px rgba(37, 99, 235, 0.2);
        }

        .about-hero-creative__btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 48px rgba(37, 99, 235, 0.3);
        }

        .about-hero-creative__btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: rgba(255, 255, 255, 0.7);
          border: 1px solid rgba(37, 99, 235, 0.08);
          color: #0F172A;
          font-weight: 600;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(8px);
        }

        .about-hero-creative__btn-secondary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
          border-color: rgba(37, 99, 235, 0.15);
        }

        /* ---- Wave ---- */
        .about-hero-creative__wave {
          position: absolute;
          bottom: -1px;
          left: 0;
          right: 0;
          z-index: 2;
          pointer-events: none;
        }

        .about-hero-creative__wave svg {
          display: block;
          width: 100%;
          height: auto;
        }

        /* ================================================================
           REST OF THE PAGE - UNCHANGED
           ================================================================ */

        /* ----- TAGS & TYPOGRAPHY ----- */
        .about-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--about-accent);
          background: var(--about-accent-light);
          padding: 5px 18px;
          border-radius: 40px;
          margin-bottom: 1rem;
        }

        .gradient-text {
          background: linear-gradient(135deg, #0c1e3e 0%, #f9734e 75%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        h1, h2, h3, h4 {
          font-weight: 700;
          letter-spacing: -0.02em;
        }

        h1 { font-size: 3.2rem; line-height: 1.12; }
        h2 { font-size: 2.4rem; margin-bottom: 0.5rem; }
        h3 { font-size: 1.25rem; }
        h4 { font-size: 1.05rem; }

        /* ----- CARDS ----- */
        .about-card {
          background: #ffffff;
          border-radius: var(--about-radius);
          padding: 1.8rem 1.8rem;
          border: 1px solid var(--about-border);
          transition: all 0.3s cubic-bezier(0.2, 0, 0, 1);
          box-shadow: var(--about-shadow);
        }
        .about-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--about-shadow-hover);
          border-color: #d5dff0;
        }

        /* ----- SECTIONS ----- */
        .about-section {
          padding: 4.5rem 0;
        }
        .about-section--alt {
          background: var(--about-bg-soft);
        }
        .about-section--sm {
          padding: 2.5rem 0 4rem;
        }

        .about-section__header {
          text-align: center;
          max-width: 680px;
          margin: 0 auto 3.5rem;
        }
        .about-section__header p {
          color: #4a5f7a;
        }

        /* ----- MISSION/VISION/REACH ----- */
        .about-mvr-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .about-card--mvr p {
          font-size: 0.9rem;
          color: #4a5f7a;
          line-height: 1.6;
        }

        .about-icon-box {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.2rem;
          transition: all 0.3s ease;
        }
        .about-card--mvr:hover .about-icon-box {
          transform: scale(1.05);
        }

        /* ----- VALUES ----- */
        .about-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .about-card--value {
          text-align: center;
          padding: 2rem 1.2rem;
        }
        .about-value-emoji {
          font-size: 2.6rem;
          display: block;
          margin-bottom: 0.7rem;
        }
        .about-card--value p {
          font-size: 0.85rem;
          color: #4a5f7a;
          line-height: 1.5;
        }

        /* ----- TIMELINE ----- */
        .about-timeline {
          position: relative;
          padding: 1.5rem 0 0.5rem;
        }
        .about-timeline__line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(to bottom, var(--about-primary), var(--about-accent));
          transform: translateX(-50%);
          opacity: 0.25;
        }
        .about-timeline__item {
          display: flex;
          align-items: center;
          margin-bottom: 2.2rem;
          position: relative;
        }
        .tl-left {
          justify-content: flex-end;
          padding-right: calc(50% + 2.8rem);
        }
        .tl-right {
          justify-content: flex-start;
          padding-left: calc(50% + 2.8rem);
        }
        .about-timeline__card {
          max-width: 380px;
          width: 100%;
          padding: 1.5rem 1.8rem;
        }
        .about-timeline__card p {
          font-size: 0.85rem;
          color: #4a5f7a;
          line-height: 1.5;
        }
        .about-timeline__year {
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--about-accent);
          margin-bottom: 0.2rem;
        }
        .about-timeline__dot {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background: white;
          border: 3px solid var(--about-accent);
          box-shadow: 0 0 0 4px rgba(249, 115, 78, 0.12);
          transition: all 0.3s ease;
        }
        .about-timeline__item:hover .about-timeline__dot {
          background: var(--about-accent);
          box-shadow: 0 0 0 8px rgba(249, 115, 78, 0.12);
        }

        /* ----- TEAM ----- */
        .about-team-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        .about-team-card {
          text-align: center;
          padding: 1.8rem 1rem;
        }
        .about-avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--about-primary);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.95rem;
          margin: 0 auto 0.8rem;
          transition: all 0.3s ease;
        }
        .about-team-card:hover .about-avatar {
          transform: scale(1.06);
        }
        .about-avatar--director {
          width: 68px;
          height: 68px;
          font-size: 1.1rem;
          background: linear-gradient(135deg, var(--about-primary), var(--about-accent));
          box-shadow: 0 8px 24px rgba(249, 115, 78, 0.25);
        }
        .about-team-card--director {
          border-color: rgba(249, 115, 78, 0.2);
          background: linear-gradient(160deg, #fef7f4, #ffffff);
        }
        .about-team-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: var(--about-primary);
        }
        .about-team-role {
          font-size: 0.8rem;
          color: #4a5f7a;
          margin-bottom: 0.5rem;
        }

        .about-badge {
          display: inline-block;
          font-size: 0.6rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          padding: 4px 14px;
          border-radius: 40px;
          background: #eef3fc;
          color: #2d4a7a;
        }
        .badge-amber { background: #fef3e0; color: #b8681a; }
        .badge-indigo { background: #e2e9ff; color: #284b9c; }
        .badge-purple { background: #ede7ff; color: #5b33a4; }
        .badge-cyan { background: #dcf5fa; color: #0c6b7a; }
        .badge-emerald { background: #ddf5e9; color: #0d6b48; }
        .badge-rose { background: #fde8ed; color: #b33f5a; }
        .badge-pink { background: #fde8f0; color: #b33f6a; }
        .badge-gray { background: #eef2f6; color: #4a5f7a; }

        /* ----- KPI STRIP ----- */
        .about-kpi-strip {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          background: white;
          border-radius: 28px;
          border: 1px solid var(--about-border);
          overflow: hidden;
          box-shadow: var(--about-shadow);
        }
        .about-kpi-item {
          text-align: center;
          padding: 2rem 0.5rem;
          border-right: 1px solid var(--about-border);
          transition: all 0.3s ease;
        }
        .about-kpi-item:last-child { border-right: none; }
        .about-kpi-item:hover { background: #f8fbff; }
        .about-kpi-icon {
          color: var(--about-primary);
          display: flex;
          justify-content: center;
          margin-bottom: 0.4rem;
          opacity: 0.7;
        }
        .about-kpi-metric {
          font-weight: 800;
          font-size: 0.95rem;
          color: var(--about-primary);
        }
        .about-kpi-sub {
          font-size: 0.75rem;
          color: #4a5f7a;
          margin-top: 0.15rem;
        }

        /* ================================================================
           RESPONSIVE
           ================================================================ */

        @media (max-width: 1024px) {
          .about-values-grid { grid-template-columns: repeat(2, 1fr); }
          .about-team-grid { grid-template-columns: repeat(3, 1fr); }
          .about-kpi-strip { grid-template-columns: repeat(3, 1fr); }
          .about-kpi-item:nth-child(3) { border-right: none; }
          .about-hero-creative__float { display: none; }
          .about-hero-creative__content {
            max-width: 90%;
          }
        }

        @media (max-width: 820px) {
          h1 { font-size: 2.6rem; }
          h2 { font-size: 2rem; }
          .about-mvr-grid { grid-template-columns: 1fr; max-width: 500px; margin: 0 auto; }
          .about-timeline__line { left: 1.2rem; }
          .tl-left, .tl-right {
            padding-left: 3.8rem;
            padding-right: 0;
            justify-content: flex-start;
          }
          .about-timeline__dot { left: 1.2rem; }
          .about-hero-creative {
            padding: 4rem 0 3rem;
            min-height: auto;
          }
          .about-hero-creative__shape { display: none; }
          .about-hero-creative__title {
            font-size: 2.4rem;
          }
          .about-hero-creative__desc {
            font-size: 1rem;
          }
          .about-hero-creative__wave { display: none; }
          .about-hero-creative__highlight::after {
            width: 80%;
          }
        }

        @media (max-width: 640px) {
          .container { padding: 0 20px; }
          .about-values-grid { grid-template-columns: 1fr 1fr; gap: 1rem; }
          .about-team-grid { grid-template-columns: 1fr 1fr; }
          .about-kpi-strip { grid-template-columns: 1fr 1fr; border-radius: 20px; }
          .about-kpi-item { padding: 1.2rem 0.3rem; border-bottom: 1px solid var(--about-border); }
          .about-kpi-item:nth-child(2) { border-right: none; }
          .about-section { padding: 3rem 0; }
          .about-card { padding: 1.2rem; }
          .about-hero-creative__title {
            font-size: 1.8rem;
          }
          .about-hero-creative__desc {
            font-size: 0.9rem;
            padding: 0 0.5rem;
          }
          .about-hero-creative__btn-primary,
          .about-hero-creative__btn-secondary {
            width: 100%;
            justify-content: center;
          }
          .about-hero-creative__actions {
            flex-direction: column;
            width: 100%;
            padding: 0 0.5rem;
          }
          .about-hero-creative__float { display: none; }
          .about-hero-creative__highlight::after {
            width: 70%;
          }
        }

        @media (max-width: 440px) {
          .about-values-grid { grid-template-columns: 1fr; }
          .about-team-grid { grid-template-columns: 1fr; }
          .about-kpi-strip { grid-template-columns: 1fr; }
          .about-kpi-item { border-right: none; border-bottom: 1px solid var(--about-border); }
          .about-hero-creative__title {
            font-size: 1.5rem;
          }
          .about-hero-creative__badge {
            font-size: 0.55rem;
            padding: 0.25rem 0.8rem;
          }
          .about-hero-creative__desc {
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  )
}