import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, ChevronLeft, ChevronRight, 
  GraduationCap, Landmark, Hospital, BarChart2, PhoneCall,
  Sparkles, CheckCircle2
} from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'School Management',
    tagline: 'Digitising Education, One School at a Time',
    subtitle: 'From fees to timetables — fully automated',
    description: 'End-to-end school administration covering M-Pesa fee collection, digital attendance, timetabling, exam results, and parent communication portals.',
    icon: <GraduationCap size={48} />,
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #064E3B 100%)',
    bgPattern: 'radial-gradient(ellipse at 70% 30%, rgba(16, 185, 129, 0.08) 0%, transparent 70%)',
    cta: 'Explore School Management',
    ctaLink: '/products',
    features: ['M-Pesa Fee Collection', 'Digital Attendance', 'Exam Management', 'Parent Portal']
  },
  {
    id: 2,
    title: 'DFS Solutions',
    tagline: 'Digital Financial Services for Africa',
    subtitle: 'Agent banking, mobile lending & digital wallets',
    description: 'A comprehensive digital financial services platform integrating mobile money, digital lending, and agent banking networks for the modern African financial ecosystem.',
    icon: <Landmark size={48} />,
    color: '#4F46E5',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)',
    bgPattern: 'radial-gradient(ellipse at 30% 70%, rgba(79, 70, 229, 0.08) 0%, transparent 70%)',
    cta: 'Explore DFS Solutions',
    ctaLink: '/products',
    features: ['Mobile Money Integration', 'Agent Banking', 'Digital Lending', 'KYC & Compliance']
  },
  {
    id: 3,
    title: 'Hospital Management',
    tagline: 'Paperless, Seamless, Intelligent',
    subtitle: 'Complete HMS for hospitals & clinics',
    description: 'End-to-end hospital operations covering EMR, OPD/IPD, pharmacy, laboratory, insurance billing, and real-time financial reporting.',
    icon: <Hospital size={48} />,
    color: '#E11D48',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #4C0519 100%)',
    bgPattern: 'radial-gradient(ellipse at 60% 40%, rgba(225, 29, 72, 0.08) 0%, transparent 70%)',
    cta: 'Explore Hospital Management',
    ctaLink: '/products',
    features: ['Electronic Medical Records', 'Pharmacy & Lab', 'Insurance Billing', 'Multi-Branch Reporting']
  },
  {
    id: 4,
    title: 'QuantivoCRM',
    tagline: 'AI-Powered CRM for African Enterprises',
    subtitle: 'The first CRM built for Africa',
    description: 'Manage leads, deals, and customer journeys with M-Pesa integration, multilingual AI follow-ups, and a 360° client view — all in one platform.',
    icon: <BarChart2 size={48} />,
    color: '#2563EB',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #172554 100%)',
    bgPattern: 'radial-gradient(ellipse at 50% 50%, rgba(37, 99, 235, 0.08) 0%, transparent 70%)',
    cta: 'Explore QuantivoCRM',
    ctaLink: '/products',
    features: ['360° Customer View', 'AI Follow-ups', 'Sales Pipeline', 'M-Pesa Integration']
  },
  {
    id: 5,
    title: 'AI Call Center',
    tagline: 'Intelligent Customer Service Automation',
    subtitle: 'Multilingual AI voice agents for Africa',
    description: 'Handle high call volumes with AI-powered voice agents that understand and respond naturally in English and Swahili — reducing costs and improving satisfaction.',
    icon: <PhoneCall size={48} />,
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #0F172A 0%, #2E1065 100%)',
    bgPattern: 'radial-gradient(ellipse at 40% 60%, rgba(124, 58, 237, 0.08) 0%, transparent 70%)',
    cta: 'Explore AI Call Center',
    ctaLink: '/products',
    features: ['Voice AI Agents (EN + SW)', 'Sentiment Analysis', 'Smart Escalation', 'Quality Dashboard']
  },
]

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const currentSlide = slides[currentIndex]
  const totalSlides = slides.length

  // Auto-play functionality
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
        <div className="hero-slider-premium__pattern" style={{ background: currentSlide.bgPattern }} />
        <div className="hero-slider-premium__orb hero-slider-premium__orb--1" />
        <div className="hero-slider-premium__orb hero-slider-premium__orb--2" />
        <div className="hero-slider-premium__orb hero-slider-premium__orb--3" />
      </div>

      {/* Floating Particles */}
      <div className="hero-slider-premium__particles">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="hero-slider-premium__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
              background: currentSlide.color,
              opacity: 0.15,
            }}
          />
        ))}
      </div>

      <div className="hero-slider-premium__container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? -80 : 80 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hero-slider-premium__slide"
          >
            {/* Left: Content */}
            <div className="hero-slider-premium__content">
              {/* Badge */}
              <div className="hero-slider-premium__badge">
                <Sparkles size={14} />
                <span>Featured Product</span>
              </div>

              {/* Product Name */}
              <div className="hero-slider-premium__product">
                <div 
                  className="hero-slider-premium__icon"
                  style={{ background: `${currentSlide.color}20`, color: currentSlide.color }}
                >
                  {currentSlide.icon}
                </div>
                <span className="hero-slider-premium__product-name">{currentSlide.title}</span>
              </div>

              {/* Tagline */}
              <h1 className="hero-slider-premium__title">
                {currentSlide.tagline}
              </h1>

              {/* Subtitle */}
              <p className="hero-slider-premium__subtitle">
                {currentSlide.subtitle}
              </p>

              {/* Description */}
              <p className="hero-slider-premium__desc">
                {currentSlide.description}
              </p>

              {/* Features */}
              <div className="hero-slider-premium__features">
                {currentSlide.features.map((feature, i) => (
                  <div key={i} className="hero-slider-premium__feature">
                    <CheckCircle2 size={16} color={currentSlide.color} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link to={currentSlide.ctaLink} className="hero-slider-premium__cta">
                {currentSlide.cta}
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right: Visual */}
            <div className="hero-slider-premium__visual">
              <div className="hero-slider-premium__visual-container">
                {/* Large Icon Display */}
                <div 
                  className="hero-slider-premium__visual-icon"
                  style={{ 
                    background: `${currentSlide.color}15`,
                    borderColor: `${currentSlide.color}30`,
                    color: currentSlide.color,
                  }}
                >
                  {currentSlide.icon}
                </div>

                {/* Floating Shapes */}
                <div 
                  className="hero-slider-premium__shape hero-slider-premium__shape--1"
                  style={{ background: currentSlide.color }}
                />
                <div 
                  className="hero-slider-premium__shape hero-slider-premium__shape--2"
                  style={{ background: currentSlide.color }}
                />
                <div 
                  className="hero-slider-premium__shape hero-slider-premium__shape--3"
                  style={{ background: currentSlide.color }}
                />

                {/* Glow Ring */}
                <div 
                  className="hero-slider-premium__glow"
                  style={{ background: `radial-gradient(circle, ${currentSlide.color}20, transparent 70%)` }}
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
          <ChevronLeft size={24} />
        </button>

        <div className="hero-slider-premium__dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`hero-slider-premium__dot ${index === currentIndex ? 'hero-slider-premium__dot--active' : ''}`}
              style={{
                background: index === currentIndex ? slide.color : 'rgba(255,255,255,0.15)',
                width: index === currentIndex ? '40px' : '10px',
              }}
            />
          ))}
        </div>

        <button 
          onClick={nextSlide} 
          className="hero-slider-premium__arrow hero-slider-premium__arrow--right"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="hero-slider-premium__progress">
        <div 
          className="hero-slider-premium__progress-bar"
          style={{
            width: `${((currentIndex + 1) / totalSlides) * 100}%`,
            background: currentSlide.color,
          }}
        />
      </div>

      {/* Slide Counter */}
      <div className="hero-slider-premium__counter">
        <span className="hero-slider-premium__counter-current">
          {String(currentIndex + 1).padStart(2, '0')}
        </span>
        <span className="hero-slider-premium__counter-total">
          / {String(totalSlides).padStart(2, '0')}
        </span>
      </div>

      <style>{`
        /* ================================================================
           HERO SLIDER PREMIUM - WITH AUTO-PLAY
           ================================================================ */

        .hero-slider-premium {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          padding-top: 72px;
        }

        .hero-slider-premium__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          transition: background 0.8s ease;
        }

        .hero-slider-premium__pattern {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
        }

        .hero-slider-premium__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          pointer-events: none;
          z-index: 1;
        }

        .hero-slider-premium__orb--1 {
          top: -20%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: rgba(37, 99, 235, 0.06);
          animation: premiumOrbFloat 25s ease-in-out infinite;
        }

        .hero-slider-premium__orb--2 {
          bottom: -20%;
          left: -10%;
          width: 400px;
          height: 400px;
          background: rgba(124, 58, 237, 0.04);
          animation: premiumOrbFloat 30s ease-in-out infinite reverse;
        }

        .hero-slider-premium__orb--3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: rgba(16, 185, 129, 0.03);
          animation: premiumOrbPulse 20s ease-in-out infinite;
        }

        @keyframes premiumOrbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(50px, -50px) scale(1.1); }
          66% { transform: translate(-50px, 50px) scale(0.9); }
        }

        @keyframes premiumOrbPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.6; }
        }

        .hero-slider-premium__particles {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
        }

        .hero-slider-premium__particle {
          position: absolute;
          border-radius: 50%;
          animation: premiumParticleFloat 20s ease-in-out infinite;
        }

        @keyframes premiumParticleFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.15; }
          50% { transform: translate(-30px, -40px) scale(1.8); opacity: 0.4; }
        }

        .hero-slider-premium__container {
          position: relative;
          z-index: 10;
          width: 100%;
          height: calc(100% - 72px);
          display: flex;
          align-items: center;
          padding: 0 60px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .hero-slider-premium__slide {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        /* ---- Left Content ---- */
        .hero-slider-premium__content {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          max-width: 620px;
        }

        .hero-slider-premium__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 1rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          font-size: 0.65rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          width: fit-content;
        }

        .hero-slider-premium__badge svg {
          color: #FBBF24;
        }

        .hero-slider-premium__product {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .hero-slider-premium__icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .hero-slider-premium__icon svg {
          width: 28px;
          height: 28px;
        }

        .hero-slider-premium__product-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: rgba(255, 255, 255, 0.5);
          letter-spacing: 0.02em;
        }

        .hero-slider-premium__title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.4rem, 4vw, 3.8rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.08;
          letter-spacing: -0.03em;
        }

        .hero-slider-premium__subtitle {
          font-size: 1.05rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
          letter-spacing: 0.02em;
        }

        .hero-slider-premium__desc {
          font-size: 0.95rem;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.8;
          max-width: 480px;
        }

        .hero-slider-premium__features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem 1.5rem;
        }

        .hero-slider-premium__feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.7);
        }

        .hero-slider-premium__feature svg {
          flex-shrink: 0;
        }

        .hero-slider-premium__cta {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.8rem 2rem;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #F1F5F9;
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
        }

        .hero-slider-premium__cta:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .hero-slider-premium__cta svg {
          transition: transform 0.3s ease;
        }

        .hero-slider-premium__cta:hover svg {
          transform: translateX(4px);
        }

        /* ---- Right Visual ---- */
        .hero-slider-premium__visual {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero-slider-premium__visual-container {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 1/1;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-slider-premium__visual-icon {
          width: 180px;
          height: 180px;
          border-radius: 50%;
          border: 1px solid;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 3;
          animation: premiumIconFloat 4s ease-in-out infinite;
        }

        @keyframes premiumIconFloat {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-12px) scale(1.02); }
        }

        .hero-slider-premium__visual-icon svg {
          width: 72px;
          height: 72px;
        }

        .hero-slider-premium__shape {
          position: absolute;
          border-radius: 50%;
          opacity: 0.12;
          animation: premiumShapeFloat 8s ease-in-out infinite;
        }

        .hero-slider-premium__shape--1 {
          width: 80px;
          height: 80px;
          top: 10%;
          right: 5%;
          animation-delay: 0s;
        }

        .hero-slider-premium__shape--2 {
          width: 60px;
          height: 60px;
          bottom: 15%;
          left: 5%;
          animation-delay: 3s;
          animation-direction: reverse;
        }

        .hero-slider-premium__shape--3 {
          width: 40px;
          height: 40px;
          top: 60%;
          right: 10%;
          animation-delay: 5s;
        }

        @keyframes premiumShapeFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -25px) scale(1.2); }
        }

        .hero-slider-premium__glow {
          position: absolute;
          inset: -20px;
          border-radius: 50%;
          filter: blur(60px);
          z-index: 1;
          animation: premiumGlowPulse 4s ease-in-out infinite;
        }

        @keyframes premiumGlowPulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.1); opacity: 1; }
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
          backdrop-filter: blur(20px);
          padding: 0.5rem 1.5rem;
          border-radius: 100px;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .hero-slider-premium__arrow {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          color: #94A3B8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-slider-premium__arrow:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #F1F5F9;
          transform: scale(1.05);
        }

        .hero-slider-premium__dots {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }

        .hero-slider-premium__dot {
          height: 6px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
          padding: 0;
        }

        .hero-slider-premium__dot:hover {
          transform: scale(1.1);
        }

        .hero-slider-premium__dot--active {
          height: 6px;
          border-radius: 100px;
        }

        .hero-slider-premium__progress {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 15;
          height: 3px;
          background: rgba(255, 255, 255, 0.04);
        }

        .hero-slider-premium__progress-bar {
          height: 100%;
          transition: width 0.8s ease;
          border-radius: 0 2px 2px 0;
        }

        .hero-slider-premium__counter {
          position: absolute;
          bottom: 5rem;
          right: 3rem;
          z-index: 15;
          display: flex;
          align-items: baseline;
          gap: 0.15rem;
          font-family: 'Space Grotesk', sans-serif;
        }

        .hero-slider-premium__counter-current {
          font-size: 2rem;
          font-weight: 800;
          color: #F1F5F9;
          letter-spacing: -0.02em;
        }

        .hero-slider-premium__counter-total {
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.3);
        }

        /* ================================================================
           RESPONSIVE
           ================================================================ */

        @media (max-width: 1024px) {
          .hero-slider-premium__slide {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .hero-slider-premium__content {
            max-width: 100%;
          }

          .hero-slider-premium__visual-container {
            max-width: 300px;
            margin: 0 auto;
          }

          .hero-slider-premium__visual-icon {
            width: 140px;
            height: 140px;
          }

          .hero-slider-premium__visual-icon svg {
            width: 56px;
            height: 56px;
          }

          .hero-slider-premium__container {
            padding: 0 40px;
          }

          .hero-slider-premium__features {
            grid-template-columns: 1fr;
          }

          .hero-slider-premium__counter {
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

          .hero-slider-premium__badge {
            margin: 0 auto;
          }

          .hero-slider-premium__product {
            flex-direction: column;
            align-items: center;
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
            grid-template-columns: 1fr;
          }

          .hero-slider-premium__cta {
            width: 100%;
            justify-content: center;
          }

          .hero-slider-premium__visual-container {
            max-width: 220px;
          }

          .hero-slider-premium__visual-icon {
            width: 110px;
            height: 110px;
          }

          .hero-slider-premium__visual-icon svg {
            width: 44px;
            height: 44px;
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
            width: 18px;
            height: 18px;
          }

          .hero-slider-premium__dot {
            width: 6px;
            height: 6px;
          }

          .hero-slider-premium__dot--active {
            width: 24px;
            height: 6px;
          }

          .hero-slider-premium__shape {
            display: none;
          }

          .hero-slider-premium__counter {
            display: none;
          }

          .hero-slider-premium__particles {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .hero-slider-premium__container {
            padding: 0 16px;
          }

          .hero-slider-premium__title {
            font-size: 1.6rem;
          }

          .hero-slider-premium__icon {
            width: 44px;
            height: 44px;
          }

          .hero-slider-premium__icon svg {
            width: 22px;
            height: 22px;
          }

          .hero-slider-premium__product-name {
            font-size: 0.95rem;
          }

          .hero-slider-premium__visual-container {
            max-width: 180px;
          }

          .hero-slider-premium__visual-icon {
            width: 90px;
            height: 90px;
          }

          .hero-slider-premium__visual-icon svg {
            width: 36px;
            height: 36px;
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
            width: 18px;
            height: 5px;
          }
        }
      `}</style>
    </div>
  )
}