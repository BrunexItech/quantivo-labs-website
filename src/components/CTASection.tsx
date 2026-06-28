import { motion } from 'framer-motion'
import { Rocket, Play, Phone, ArrowRight, Zap, Target, Users, BarChart3 } from 'lucide-react'

interface CTAOption {
  id: number
  icon: React.ElementType
  title: string
  description: string
  gradient: string
  glowColor: string
}

const ctaOptions: CTAOption[] = [
  {
    id: 1,
    icon: Rocket,
    title: 'Launch a Project',
    description: 'From concept to deployment. Let our experts build your next digital solution.',
    gradient: 'from-cyan-500 to-blue-500',
    glowColor: 'rgba(6, 182, 212, 0.15)',
  },
  {
    id: 2,
    icon: Play,
    title: 'See It Live',
    description: 'Experience our platforms in action with a personalized walkthrough from our team.',
    gradient: 'from-violet-500 to-purple-500',
    glowColor: 'rgba(139, 92, 246, 0.15)',
  },
  {
    id: 3,
    icon: Phone,
    title: 'Talk Strategy',
    description: 'Get expert guidance on your digital transformation journey. One-on-one consultation.',
    gradient: 'from-rose-500 to-pink-500',
    glowColor: 'rgba(244, 63, 94, 0.15)',
  },
]

export default function CTASection() {
  return (
    <section className="cta-modern">
      {/* Decorative background elements */}
      <div className="cta-modern__bg">
        <div className="cta-modern__orb cta-modern__orb--1" />
        <div className="cta-modern__orb cta-modern__orb--2" />
        <div className="cta-modern__orb cta-modern__orb--3" />
        <div className="cta-modern__grid-pattern" />
      </div>

      <div className="cta-modern__container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="cta-modern__header"
        >
          <span className="cta-modern__badge">
            <Target size={14} />
            Start Your Journey
          </span>
          <h2 className="cta-modern__title">
            Transform Your <br />
            <span className="cta-modern__title-gradient">Digital Operations</span>
          </h2>
          <p className="cta-modern__subtitle">
            Choose your path forward and let's build the future of your organization together.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="cta-modern__grid">
          {ctaOptions.map((option, index) => {
            const Icon = option.icon

            return (
              <motion.div
                key={option.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="cta-modern__card"
                style={{ '--glow-color': option.glowColor } as React.CSSProperties}
              >
                <div className={`cta-modern__card-icon ${option.gradient}`}>
                  <Icon className="cta-modern__card-icon-svg" />
                </div>
                <h3 className="cta-modern__card-title">{option.title}</h3>
                <p className="cta-modern__card-desc">{option.description}</p>
                <div className="cta-modern__card-action">
                  <span className="cta-modern__card-action-text">Get Started</span>
                  <ArrowRight className="cta-modern__card-action-icon" />
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="cta-modern__trust"
        >
          <div className="cta-modern__trust-item">
            <Users size={18} className="cta-modern__trust-icon" />
            <span>200+ Enterprise Clients</span>
          </div>
          <div className="cta-modern__trust-divider" />
          <div className="cta-modern__trust-item">
            <BarChart3 size={18} className="cta-modern__trust-icon" />
            <span>8 Countries Served</span>
          </div>
          <div className="cta-modern__trust-divider" />
          <div className="cta-modern__trust-item">
            <Zap size={18} className="cta-modern__trust-icon" />
            <span>98% Client Satisfaction</span>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* ================================================================
           CTA MODERN - COMPLETELY NEW DESIGN
           ================================================================ */

        .cta-modern {
          padding: 5.5rem 0;
          background: linear-gradient(160deg, #0b1120 0%, #0f172a 50%, #0b1120 100%);
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255, 255, 255, 0.04);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .cta-modern__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .cta-modern__grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.01) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 30%, transparent 70%);
        }

        .cta-modern__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .cta-modern__orb--1 {
          top: -20%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: rgba(6, 182, 212, 0.06);
          animation: ctaOrbFloat 14s ease-in-out infinite;
        }

        .cta-modern__orb--2 {
          bottom: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: rgba(139, 92, 246, 0.05);
          animation: ctaOrbFloat 18s ease-in-out infinite reverse;
        }

        .cta-modern__orb--3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 400px;
          height: 400px;
          background: rgba(244, 63, 94, 0.04);
          animation: ctaOrbPulse 12s ease-in-out infinite;
        }

        @keyframes ctaOrbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -30px) scale(1.1); }
          66% { transform: translate(-30px, 40px) scale(0.9); }
        }

        @keyframes ctaOrbPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.7; }
        }

        .cta-modern__container {
          position: relative;
          z-index: 10;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ----- HEADER ----- */
        .cta-modern__header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .cta-modern__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          font-weight: 600;
          color: #818CF8;
          background: rgba(79, 70, 229, 0.1);
          padding: 0.4rem 1.25rem 0.4rem 1rem;
          border-radius: 100px;
          border: 1px solid rgba(79, 70, 229, 0.12);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
        }

        .cta-modern__badge svg {
          color: #818CF8;
        }

        .cta-modern__title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.15;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }

        .cta-modern__title br {
          display: none;
        }

        .cta-modern__title-gradient {
          background: linear-gradient(135deg, #818CF8 0%, #F472B6 40%, #FBBF24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .cta-modern__subtitle {
          font-size: 1rem;
          color: #94A3B8;
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ----- GRID ----- */
        .cta-modern__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          max-width: 960px;
          margin: 0 auto;
        }

        /* ----- CARD ----- */
        .cta-modern__card {
          background: rgba(255, 255, 255, 0.03);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 2.25rem 1.75rem;
          text-align: center;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .cta-modern__card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--glow-color);
          opacity: 0;
          transition: opacity 0.35s ease;
          pointer-events: none;
        }

        .cta-modern__card:hover::before {
          opacity: 1;
        }

        .cta-modern__card:hover {
          border-color: rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
        }

        .cta-modern__card-icon {
          width: 64px;
          height: 64px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.25rem;
          box-shadow: 0 12px 32px rgba(0, 0, 0, 0.2);
          position: relative;
          z-index: 1;
        }

        .cta-modern__card-icon.from-cyan-500-to-blue-500 {
          background: linear-gradient(135deg, #06B6D4, #3B82F6);
        }

        .cta-modern__card-icon.from-violet-500-to-purple-500 {
          background: linear-gradient(135deg, #8B5CF6, #6D28D9);
        }

        .cta-modern__card-icon.from-rose-500-to-pink-500 {
          background: linear-gradient(135deg, #F43F5E, #EC4899);
        }

        .cta-modern__card-icon-svg {
          width: 30px;
          height: 30px;
          color: #FFFFFF;
        }

        .cta-modern__card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #F1F5F9;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 1;
        }

        .cta-modern__card-desc {
          font-size: 0.875rem;
          color: #94A3B8;
          line-height: 1.7;
          margin-bottom: 1.25rem;
          position: relative;
          z-index: 1;
        }

        .cta-modern__card-action {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
          color: #818CF8;
          transition: all 0.3s ease;
          position: relative;
          z-index: 1;
          cursor: pointer;
        }

        .cta-modern__card-action:hover {
          color: #A5B4FC;
        }

        .cta-modern__card-action-text {
          transition: all 0.3s ease;
        }

        .cta-modern__card-action-icon {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .cta-modern__card-action:hover .cta-modern__card-action-icon {
          transform: translateX(4px);
        }

        .cta-modern__card-action:hover .cta-modern__card-action-text {
          transform: translateX(-2px);
        }

        /* ----- TRUST ----- */
        .cta-modern__trust {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-top: 3.5rem;
          flex-wrap: wrap;
        }

        .cta-modern__trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: #64748B;
        }

        .cta-modern__trust-icon {
          color: #818CF8;
          opacity: 0.6;
        }

        .cta-modern__trust-divider {
          width: 1px;
          height: 20px;
          background: rgba(255, 255, 255, 0.05);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .cta-modern {
            padding: 4rem 0;
          }

          .cta-modern__grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
          }

          .cta-modern__title br {
            display: inline;
          }
        }

        @media (max-width: 640px) {
          .cta-modern {
            padding: 3rem 0;
          }

          .cta-modern__container {
            padding: 0 16px;
          }

          .cta-modern__grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .cta-modern__title {
            font-size: 1.6rem;
          }

          .cta-modern__card {
            padding: 1.5rem 1.25rem;
          }

          .cta-modern__card-icon {
            width: 56px;
            height: 56px;
          }

          .cta-modern__card-icon-svg {
            width: 26px;
            height: 26px;
          }

          .cta-modern__trust {
            flex-direction: column;
            gap: 0.75rem;
          }

          .cta-modern__trust-divider {
            display: none;
          }
        }

        @media (max-width: 380px) {
          .cta-modern__badge {
            font-size: 0.6rem;
            padding: 0.3rem 1rem;
          }

          .cta-modern__title {
            font-size: 1.4rem;
          }
        }
      `}</style>
    </section>
  )
}