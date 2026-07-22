import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'School Management',
    tagline: 'Digitising Education, One School at a Time',
    subtitle: 'From fees to timetables — fully automated',
    description: 'End-to-end school administration covering M-Pesa fee collection, digital attendance, timetabling, exam results, and parent communication portals.',
    cta: 'Explore School Management',
    ctaLink: '/products',
    features: ['M-Pesa Fee Collection', 'Digital Attendance', 'Exam Management', 'Parent Portal'],
    gradient: 'linear-gradient(135deg, #0A0F1E 0%, #064E3B 100%)',
    accent: '#10B981',
  },
  {
    id: 2,
    title: 'DFS Solutions',
    tagline: 'Digital Financial Services for Africa',
    subtitle: 'Agent banking, mobile lending & digital wallets',
    description: 'A comprehensive digital financial services platform integrating mobile money, digital lending, and agent banking networks for the modern African financial ecosystem.',
    cta: 'Explore DFS Solutions',
    ctaLink: '/products',
    features: ['Mobile Money Integration', 'Agent Banking', 'Digital Lending', 'KYC & Compliance'],
    gradient: 'linear-gradient(135deg, #0A0F1E 0%, #1E1B4B 100%)',
    accent: '#4F46E5',
  },
  {
    id: 3,
    title: 'Hospital Management',
    tagline: 'Paperless, Seamless, Intelligent',
    subtitle: 'Complete HMS for hospitals & clinics',
    description: 'End-to-end hospital operations covering EMR, OPD/IPD, pharmacy, laboratory, insurance billing, and real-time financial reporting.',
    cta: 'Explore Hospital Management',
    ctaLink: '/products',
    features: ['Electronic Medical Records', 'Pharmacy & Lab', 'Insurance Billing', 'Multi-Branch Reporting'],
    gradient: 'linear-gradient(135deg, #0A0F1E 0%, #4C0519 100%)',
    accent: '#E11D48',
  },
  {
    id: 4,
    title: 'QuantivoCRM',
    tagline: 'AI-Powered CRM for African Enterprises',
    subtitle: 'The first CRM built for Africa',
    description: 'Manage leads, deals, and customer journeys with M-Pesa integration, multilingual AI follow-ups, and a 360° client view — all in one platform.',
    cta: 'Explore QuantivoCRM',
    ctaLink: '/products',
    features: ['360° Customer View', 'AI Follow-ups', 'Sales Pipeline', 'M-Pesa Integration'],
    gradient: 'linear-gradient(135deg, #0A0F1E 0%, #172554 100%)',
    accent: '#2563EB',
  },
  {
    id: 5,
    title: 'AI Call Center',
    tagline: 'Intelligent Customer Service Automation',
    subtitle: 'Multilingual AI voice agents for Africa',
    description: 'Handle high call volumes with AI-powered voice agents that understand and respond naturally in English and Swahili — reducing costs and improving satisfaction.',
    cta: 'Explore AI Call Center',
    ctaLink: '/products',
    features: ['Voice AI Agents (EN + SW)', 'Sentiment Analysis', 'Smart Escalation', 'Quality Dashboard'],
    gradient: 'linear-gradient(135deg, #0A0F1E 0%, #2E1065 100%)',
    accent: '#7C3AED',
  },
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const currentSlide = slides[currentIndex]
  const totalSlides = slides.length

  useEffect(() => {
    if (isPaused) return
    const timer = setTimeout(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % totalSlides)
    }, 6000)
    return () => clearTimeout(timer)
  }, [currentIndex, isPaused, totalSlides])

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  return (
    <div 
      className="hero-slider-premium"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background */}
      <div 
        className="hero-slider-premium__bg"
        style={{ background: currentSlide.gradient }}
      >
        <div className="hero-slider-premium__orb hero-slider-premium__orb--1" />
        <div className="hero-slider-premium__orb hero-slider-premium__orb--2" />
        <div className="hero-slider-premium__orb hero-slider-premium__orb--3" />
        
        {/* Abstract geometric shapes */}
        <div 
          className="hero-slider-premium__shape hero-slider-premium__shape--1"
          style={{ borderColor: `${currentSlide.accent}40` }}
        />
        <div 
          className="hero-slider-premium__shape hero-slider-premium__shape--2"
          style={{ borderColor: `${currentSlide.accent}30` }}
        />
        <div 
          className="hero-slider-premium__shape hero-slider-premium__shape--3"
          style={{ background: `${currentSlide.accent}08` }}
        />
      </div>

      <div className="hero-slider-premium__container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: direction > 0 ? 40 : -40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction > 0 ? -40 : 40 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hero-slider-premium__slide"
          >
            {/* Content */}
            <div className="hero-slider-premium__content">
              <span className="hero-slider-premium__tag">Featured Product</span>
              
              <h1 className="hero-slider-premium__title">
                {currentSlide.tagline}
              </h1>
              
              <p className="hero-slider-premium__subtitle">
                {currentSlide.subtitle}
              </p>
              
              <p className="hero-slider-premium__desc">
                {currentSlide.description}
              </p>
              
              <div className="hero-slider-premium__features">
                {currentSlide.features.map((feature, i) => (
                  <div key={i} className="hero-slider-premium__feature">
                    <span 
                      className="hero-slider-premium__feature-dot"
                      style={{ background: currentSlide.accent }}
                    />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link to={currentSlide.ctaLink} className="hero-slider-premium__cta">
                {currentSlide.cta}
                <span className="hero-slider-premium__cta-arrow">→</span>
              </Link>
            </div>

            {/* Visual Side */}
            <div className="hero-slider-premium__visual">
              <div className="hero-slider-premium__visual-container">
                <div 
                  className="hero-slider-premium__visual-ring"
                  style={{ borderColor: `${currentSlide.accent}40` }}
                />
                <div 
                  className="hero-slider-premium__visual-ring hero-slider-premium__visual-ring--inner"
                  style={{ borderColor: `${currentSlide.accent}25` }}
                />
                <div 
                  className="hero-slider-premium__visual-center"
                  style={{ 
                    background: `radial-gradient(circle, ${currentSlide.accent}20, ${currentSlide.accent}05, transparent 70%)`,
                  }}
                />
                <div 
                  className="hero-slider-premium__visual-accent"
                  style={{ background: currentSlide.accent }}
                />
                <div 
                  className="hero-slider-premium__visual-accent hero-slider-premium__visual-accent--small"
                  style={{ background: currentSlide.accent }}
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="hero-slider-premium__nav">
        <button 
          onClick={prevSlide} 
          className="hero-slider-premium__arrow hero-slider-premium__arrow--left"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>

        <div className="hero-slider-premium__dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`hero-slider-premium__dot ${index === currentIndex ? 'hero-slider-premium__dot--active' : ''}`}
              style={{
                background: index === currentIndex ? slide.accent : 'rgba(255,255,255,0.15)',
              }}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide} 
          className="hero-slider-premium__arrow hero-slider-premium__arrow--right"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="hero-slider-premium__progress">
        <div 
          className="hero-slider-premium__progress-bar"
          style={{
            width: `${((currentIndex + 1) / totalSlides) * 100}%`,
            background: currentSlide.accent,
          }}
        />
      </div>

      <style>{`
        /* ================================================================
           HERO SLIDER PREMIUM - MODERN, PROFESSIONAL
           ================================================================ */

        .hero-slider-premium {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          padding-top: 72px;
          background: #0A0F1E;
        }

        /* ---- Background ---- */
        .hero-slider-premium__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          transition: background 0.9s ease;
        }

        .hero-slider-premium__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 0;
        }

        .hero-slider-premium__orb--1 {
          top: -15%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: rgba(37, 99, 235, 0.06);
          animation: orbFloat 28s ease-in-out infinite;
        }

        .hero-slider-premium__orb--2 {
          bottom: -20%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: rgba(124, 58, 237, 0.04);
          animation: orbFloat 32s ease-in-out infinite reverse;
        }

        .hero-slider-premium__orb--3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: rgba(16, 185, 129, 0.02);
          animation: orbPulse 22s ease-in-out infinite;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(60px, -60px) scale(1.1); }
          66% { transform: translate(-40px, 40px) scale(0.9); }
        }

        @keyframes orbPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.7; }
        }

        /* ---- Abstract Shapes ---- */
        .hero-slider-premium__shape {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
        }

        .hero-slider-premium__shape--1 {
          top: 20%;
          right: 15%;
          width: 300px;
          height: 300px;
          border: 1px solid;
          animation: shapeFloat 20s ease-in-out infinite;
        }

        .hero-slider-premium__shape--2 {
          bottom: 25%;
          left: 10%;
          width: 200px;
          height: 200px;
          border: 1px solid;
          animation: shapeFloat 25s ease-in-out infinite reverse;
        }

        .hero-slider-premium__shape--3 {
          top: 50%;
          right: 5%;
          width: 400px;
          height: 400px;
          border: none;
          filter: blur(80px);
          animation: shapeFloat 30s ease-in-out infinite;
        }

        @keyframes shapeFloat {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, -30px) rotate(8deg); }
        }

        /* ---- Container ---- */
        .hero-slider-premium__container {
          position: relative;
          z-index: 10;
          width: 100%;
          height: calc(100% - 72px);
          display: flex;
          align-items: center;
          padding: 0 60px;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* ---- Slide ---- */
        .hero-slider-premium__slide {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        /* ---- Content ---- */
        .hero-slider-premium__content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 620px;
        }

        .hero-slider-premium__tag {
          font-size: 0.7rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          padding: 0.3rem 0;
          border-bottom: 2px solid rgba(255,255,255,0.04);
          width: fit-content;
        }

        .hero-slider-premium__title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.4rem, 4.2vw, 4rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .hero-slider-premium__subtitle {
          font-size: 1.05rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.02em;
        }

        .hero-slider-premium__desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.55);
          line-height: 1.8;
          max-width: 480px;
        }

        .hero-slider-premium__features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem 1.5rem;
        }

        .hero-slider-premium__feature {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.8rem;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.65);
        }

        .hero-slider-premium__feature-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .hero-slider-premium__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 2rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #F1F5F9;
          font-weight: 500;
          font-size: 0.9rem;
          border-radius: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .hero-slider-premium__cta:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(255, 255, 255, 0.12);
          transform: translateY(-2px);
        }

        .hero-slider-premium__cta-arrow {
          transition: transform 0.3s ease;
          font-size: 1.1rem;
        }

        .hero-slider-premium__cta:hover .hero-slider-premium__cta-arrow {
          transform: translateX(4px);
        }

        /* ---- Visual ---- */
        .hero-slider-premium__visual {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-slider-premium__visual-container {
          position: relative;
          width: 100%;
          max-width: 380px;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-slider-premium__visual-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid;
          animation: ringFloat 6s ease-in-out infinite;
        }

        .hero-slider-premium__visual-ring:first-of-type {
          width: 100%;
          height: 100%;
          animation-delay: 0s;
        }

        .hero-slider-premium__visual-ring--inner {
          width: 70%;
          height: 70%;
          animation-delay: 1.5s;
        }

        @keyframes ringFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(0, -10px) scale(1.02); }
        }

        .hero-slider-premium__visual-center {
          width: 40%;
          height: 40%;
          border-radius: 50%;
          position: relative;
          z-index: 2;
          animation: centerPulse 4s ease-in-out infinite;
        }

        @keyframes centerPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 1; }
        }

        .hero-slider-premium__visual-accent {
          position: absolute;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          top: 15%;
          right: 10%;
          animation: accentFloat 7s ease-in-out infinite;
        }

        .hero-slider-premium__visual-accent--small {
          width: 10px;
          height: 10px;
          bottom: 20%;
          left: 10%;
          animation-delay: 2s;
        }

        @keyframes accentFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.4; }
          50% { transform: translate(0, -15px) scale(1.2); opacity: 0.8; }
        }

        /* ---- Navigation ---- */
        .hero-slider-premium__nav {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 1.5rem;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(16px);
          padding: 0.5rem 1.5rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .hero-slider-premium__arrow {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.04);
          color: #94A3B8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-slider-premium__arrow:hover {
          background: rgba(255, 255, 255, 0.06);
          color: #F1F5F9;
          transform: scale(1.05);
        }

        .hero-slider-premium__dots {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .hero-slider-premium__dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
          padding: 0;
        }

        .hero-slider-premium__dot:hover {
          transform: scale(1.15);
        }

        .hero-slider-premium__dot--active {
          width: 28px;
          border-radius: 100px;
        }

        /* ---- Progress ---- */
        .hero-slider-premium__progress {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 15;
          height: 2px;
          background: rgba(255, 255, 255, 0.04);
        }

        .hero-slider-premium__progress-bar {
          height: 100%;
          transition: width 0.8s ease;
          border-radius: 0 2px 2px 0;
        }

        /* ================================================================
           RESPONSIVE
           ================================================================ */

        @media (max-width: 1024px) {
          .hero-slider-premium__slide {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }

          .hero-slider-premium__content {
            max-width: 100%;
          }

          .hero-slider-premium__visual-container {
            max-width: 280px;
          }

          .hero-slider-premium__container {
            padding: 0 40px;
          }

          .hero-slider-premium__shape--1,
          .hero-slider-premium__shape--2,
          .hero-slider-premium__shape--3 {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .hero-slider-premium {
            height: auto;
            min-height: 100vh;
            padding: 72px 0 3rem;
          }

          .hero-slider-premium__container {
            padding: 0 20px;
            height: auto;
            min-height: calc(100vh - 120px);
          }

          .hero-slider-premium__slide {
            gap: 1.5rem;
            text-align: center;
          }

          .hero-slider-premium__content {
            align-items: center;
            text-align: center;
          }

          .hero-slider-premium__tag {
            margin: 0 auto;
          }

          .hero-slider-premium__title {
            font-size: 2rem;
          }

          .hero-slider-premium__subtitle {
            font-size: 0.95rem;
          }

          .hero-slider-premium__desc {
            font-size: 0.85rem;
            max-width: 100%;
          }

          .hero-slider-premium__features {
            grid-template-columns: 1fr 1fr;
          }

          .hero-slider-premium__cta {
            width: 100%;
            justify-content: center;
          }

          .hero-slider-premium__visual-container {
            max-width: 200px;
          }

          .hero-slider-premium__nav {
            bottom: 1.5rem;
            padding: 0.4rem 1rem;
            gap: 1rem;
          }

          .hero-slider-premium__arrow {
            width: 32px;
            height: 32px;
          }

          .hero-slider-premium__arrow svg {
            width: 16px;
            height: 16px;
          }

          .hero-slider-premium__dot {
            width: 6px;
            height: 6px;
          }

          .hero-slider-premium__dot--active {
            width: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-slider-premium__container {
            padding: 0 16px;
          }

          .hero-slider-premium__title {
            font-size: 1.6rem;
          }

          .hero-slider-premium__features {
            grid-template-columns: 1fr;
            gap: 0.3rem;
          }

          .hero-slider-premium__visual-container {
            max-width: 160px;
          }

          .hero-slider-premium__nav {
            bottom: 1rem;
            padding: 0.3rem 0.8rem;
            gap: 0.75rem;
          }

          .hero-slider-premium__arrow {
            width: 28px;
            height: 28px;
          }

          .hero-slider-premium__arrow svg {
            width: 14px;
            height: 14px;
          }

          .hero-slider-premium__dot {
            width: 5px;
            height: 5px;
          }

          .hero-slider-premium__dot--active {
            width: 16px;
          }

          .hero-slider-premium__visual-accent {
            display: none;
          }
        }
      `}</style>
    </div>
  )
}