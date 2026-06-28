import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Search, 
  Code2, 
  TrendingUp, 
  CheckCircle2,
  ArrowRight,
  Zap,
  Rocket
} from 'lucide-react'

interface Step {
  id: number
  icon: React.ElementType
  title: string
  description: string
  outcome: string
  color: string
  gradient: string
}

const steps: Step[] = [
  {
    id: 1,
    icon: Search,
    title: 'Consult & Discover',
    description: 'We dive deep into your business challenges, goals, and existing workflows. Our team conducts thorough discovery sessions to map out the perfect solution strategy.',
    outcome: 'Clear roadmap delivered in 1 day',
    color: '#4F46E5',
    gradient: 'from-indigo-500 to-blue-500'
  },
  {
    id: 2,
    icon: Code2,
    title: 'Build & Deploy',
    description: 'Our engineers develop your solution using agile methodology. You see progress daily, provide feedback, and we iterate until everything is perfect before deployment.',
    outcome: 'Fully functional solution in 2-3 days',
    color: '#D97706',
    gradient: 'from-amber-500 to-orange-500'
  },
  {
    id: 3,
    icon: TrendingUp,
    title: 'Scale & Optimize',
    description: 'We don\'t just deliver and leave. We monitor performance, optimize for scale, and provide ongoing support as your business grows and evolves.',
    outcome: 'Long-term partnership & growth',
    color: '#EC4899',
    gradient: 'from-rose-500 to-pink-500'
  }
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(1)
  const currentStep = steps.find(s => s.id === activeStep)

  return (
    <section className="howitworks-premium">
      {/* Decorative Background - Lighter & Welcoming */}
      <div className="howitworks-premium__bg">
        <div className="howitworks-premium__gradient" />
        <div className="howitworks-premium__mesh" />
        <div className="howitworks-premium__orb howitworks-premium__orb--1" />
        <div className="howitworks-premium__orb howitworks-premium__orb--2" />
        <div className="howitworks-premium__orb howitworks-premium__orb--3" />
        <div className="howitworks-premium__orb howitworks-premium__orb--4" />
      </div>

      <div className="howitworks-premium__container">
        {/* Header */}
        <div className="howitworks-premium__header">
          <div className="howitworks-premium__badge">
            <span>How It Works</span>
          </div>
          <h2 className="howitworks-premium__title">
            From Idea to <span className="howitworks-premium__title-accent">Impact</span>
          </h2>
          <p className="howitworks-premium__subtitle">
            A proven 3-step process that takes you from discovery to deployment and beyond.
          </p>
        </div>

        {/* Steps */}
        <div className="howitworks-premium__timeline">
          {/* Step Indicators */}
          <div className="howitworks-premium__steps">
            <div className="howitworks-premium__connector" />
            <div 
              className="howitworks-premium__connector-fill"
              style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 100}%` }}
            />
            
            {steps.map((step) => {
              const Icon = step.icon
              const isActive = step.id === activeStep
              const isCompleted = step.id < activeStep
              
              return (
                <button
                  key={step.id}
                  onClick={() => setActiveStep(step.id)}
                  className="howitworks-premium__step-btn"
                >
                  <div
                    className={`howitworks-premium__step-circle ${
                      isActive ? 'howitworks-premium__step-circle--active' : ''
                    } ${isCompleted ? 'howitworks-premium__step-circle--completed' : ''}`}
                    style={isActive || isCompleted ? { background: step.color } : {}}
                  >
                    <Icon className={`howitworks-premium__step-icon ${
                      isActive || isCompleted ? 'text-white' : 'text-gray-400'
                    }`} />
                  </div>
                  <span className={`howitworks-premium__step-label ${
                    isActive ? 'howitworks-premium__step-label--active' : ''
                  }`}>
                    Step {step.id}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Step Details */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="howitworks-premium__details"
            >
              {currentStep && (
                <div className="howitworks-premium__details-grid">
                  <div className="howitworks-premium__details-content">
                    <div className="howitworks-premium__details-header">
                      <span 
                        className="howitworks-premium__details-step"
                        style={{ color: currentStep.color }}
                      >
                        Step {currentStep.id}
                      </span>
                      <span className="howitworks-premium__details-divider">|</span>
                      <h3 className="howitworks-premium__details-title">{currentStep.title}</h3>
                    </div>
                    <p className="howitworks-premium__details-desc">{currentStep.description}</p>
                    
                    <div className="howitworks-premium__details-features">
                      <div className="howitworks-premium__details-feature">
                        <Zap size={16} style={{ color: currentStep.color }} />
                        <span>Agile methodology</span>
                      </div>
                      <div className="howitworks-premium__details-feature">
                        <Rocket size={16} style={{ color: currentStep.color }} />
                        <span>Daily progress updates</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="howitworks-premium__details-outcome">
                    <div 
                      className="howitworks-premium__details-badge"
                      style={{
                        background: `linear-gradient(135deg, ${currentStep.color}, ${currentStep.color}dd)`,
                      }}
                    >
                      <CheckCircle2 className="howitworks-premium__details-badge-icon" />
                      <span>{currentStep.outcome}</span>
                    </div>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Mobile Dots */}
          <div className="howitworks-premium__dots">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`howitworks-premium__dot ${
                  step.id === activeStep ? 'howitworks-premium__dot--active' : ''
                }`}
                style={step.id === activeStep ? { background: step.color } : {}}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ================================================================
           HOW IT WORKS PREMIUM - LIGHTER BACKGROUND
           ================================================================ */

        .howitworks-premium {
          position: relative;
          padding: 5rem 0;
          background: linear-gradient(160deg, #f8fafc 0%, #eef2ff 30%, #f0f9ff 60%, #f5f3ff 100%);
          overflow: hidden;
          border-top: 1px solid rgba(37, 99, 235, 0.04);
          border-bottom: 1px solid rgba(37, 99, 235, 0.04);
        }

        /* ---- Background Elements ---- */
        .howitworks-premium__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .howitworks-premium__gradient {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(37, 99, 235, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(124, 58, 237, 0.03) 0%, transparent 60%);
        }

        .howitworks-premium__mesh {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(37, 99, 235, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
        }

        .howitworks-premium__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .howitworks-premium__orb--1 {
          top: -15%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: rgba(37, 99, 235, 0.05);
          animation: premiumOrbFloat 20s ease-in-out infinite;
        }

        .howitworks-premium__orb--2 {
          bottom: -15%;
          left: -10%;
          width: 350px;
          height: 350px;
          background: rgba(124, 58, 237, 0.04);
          animation: premiumOrbFloat 25s ease-in-out infinite reverse;
        }

        .howitworks-premium__orb--3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 450px;
          height: 450px;
          background: rgba(6, 182, 212, 0.03);
          animation: premiumOrbPulse 15s ease-in-out infinite;
        }

        .howitworks-premium__orb--4 {
          top: 30%;
          right: 20%;
          width: 200px;
          height: 200px;
          background: rgba(245, 158, 11, 0.03);
          animation: premiumOrbFloat 22s ease-in-out infinite 3s;
        }

        @keyframes premiumOrbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-30px, 20px) scale(0.95); }
        }

        @keyframes premiumOrbPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.7; }
        }

        /* ---- Container ---- */
        .howitworks-premium__container {
          position: relative;
          z-index: 1;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ---- Header ---- */
        .howitworks-premium__header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .howitworks-premium__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.25rem;
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(37, 99, 235, 0.08);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #1e40af;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
        }

        .howitworks-premium__title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }

        .howitworks-premium__title-accent {
          background: linear-gradient(135deg, #2563EB 0%, #7C3AED 50%, #EC4899 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .howitworks-premium__subtitle {
          font-size: 1rem;
          color: #64748B;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ---- Timeline ---- */
        .howitworks-premium__timeline {
          max-width: 900px;
          margin: 0 auto;
        }

        .howitworks-premium__steps {
          position: relative;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
          padding: 0 1rem;
        }

        .howitworks-premium__connector {
          position: absolute;
          left: 0;
          right: 0;
          top: 50%;
          height: 2px;
          background: rgba(37, 99, 235, 0.08);
          transform: translateY(-50%);
        }

        .howitworks-premium__connector-fill {
          position: absolute;
          left: 0;
          top: 50%;
          height: 2px;
          background: linear-gradient(90deg, #2563EB, #7C3AED);
          transform: translateY(-50%);
          transition: width 0.8s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .howitworks-premium__step-btn {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: all 0.3s ease;
        }

        .howitworks-premium__step-circle {
          width: 60px;
          height: 60px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          background: rgba(255, 255, 255, 0.6);
          border: 2px solid rgba(37, 99, 235, 0.08);
          backdrop-filter: blur(8px);
        }

        .howitworks-premium__step-circle--active {
          transform: scale(1.08);
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.2);
          border-color: transparent;
        }

        .howitworks-premium__step-circle--completed {
          border-color: transparent;
        }

        .howitworks-premium__step-icon {
          width: 24px;
          height: 24px;
        }

        .howitworks-premium__step-label {
          font-size: 0.7rem;
          font-weight: 600;
          color: #94A3B8;
          transition: color 0.3s ease;
        }

        .howitworks-premium__step-label--active {
          color: #2563EB;
        }

        /* ---- Details ---- */
        .howitworks-premium__details {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(37, 99, 235, 0.06);
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 20px 60px rgba(37, 99, 235, 0.04);
        }

        .howitworks-premium__details-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 2rem;
          align-items: center;
        }

        .howitworks-premium__details-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }

        .howitworks-premium__details-step {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .howitworks-premium__details-divider {
          color: rgba(37, 99, 235, 0.1);
        }

        .howitworks-premium__details-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #0F172A;
        }

        .howitworks-premium__details-desc {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 1.25rem;
        }

        .howitworks-premium__details-features {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .howitworks-premium__details-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: #64748B;
        }

        .howitworks-premium__details-outcome {
          display: flex;
          justify-content: flex-end;
        }

        .howitworks-premium__details-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #fff;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          animation: premiumBadgePulse 2s ease-in-out infinite;
        }

        @keyframes premiumBadgePulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.02); }
        }

        .howitworks-premium__details-badge-icon {
          width: 18px;
          height: 18px;
        }

        /* ---- Dots ---- */
        .howitworks-premium__dots {
          display: none;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .howitworks-premium__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(37, 99, 235, 0.15);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .howitworks-premium__dot--active {
          width: 28px;
          border-radius: 100px;
        }

        /* ================================================================
           RESPONSIVE
           ================================================================ */

        @media (max-width: 1024px) {
          .howitworks-premium__details-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .howitworks-premium__details-outcome {
            justify-content: flex-start;
          }

          .howitworks-premium__orb--4 {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .howitworks-premium {
            padding: 3.5rem 0;
          }

          .howitworks-premium__container {
            padding: 0 16px;
          }

          .howitworks-premium__steps {
            padding: 0;
          }

          .howitworks-premium__step-circle {
            width: 48px;
            height: 48px;
          }

          .howitworks-premium__step-icon {
            width: 20px;
            height: 20px;
          }

          .howitworks-premium__details {
            padding: 1.5rem;
          }

          .howitworks-premium__details-title {
            font-size: 1.1rem;
          }

          .howitworks-premium__dots {
            display: flex;
          }

          .howitworks-premium__title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 640px) {
          .howitworks-premium {
            padding: 2.5rem 0;
          }

          .howitworks-premium__title {
            font-size: 1.6rem;
          }

          .howitworks-premium__step-label {
            display: none;
          }

          .howitworks-premium__step-circle {
            width: 40px;
            height: 40px;
          }

          .howitworks-premium__details {
            padding: 1.25rem;
          }

          .howitworks-premium__details-features {
            flex-direction: column;
            gap: 0.5rem;
          }

          .howitworks-premium__details-badge {
            font-size: 0.75rem;
            padding: 0.5rem 1rem;
          }

          .howitworks-premium__orb--3 {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}