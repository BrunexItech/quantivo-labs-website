import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star, Users, TrendingUp, Award } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  industry: string
  initial: string
  quote: string
  metric: string
  color: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'James Kariuki',
    role: 'CEO',
    company: 'Nairobi Fintech Ltd',
    industry: 'Fintech',
    initial: 'J',
    quote: 'QuantivoCRM transformed our sales pipeline management. Our team closes 40% more deals and has full visibility on every client relationship.',
    metric: '40% more deals closed',
    color: '#2563EB',
  },
  {
    id: 2,
    name: 'Dr. Faith Mwema',
    role: 'Director',
    company: 'MedLine Group',
    industry: 'Healthcare',
    initial: 'D',
    quote: 'The Hospital Management System eliminated billing errors completely. We stopped revenue leakage and our clinical team can now focus on patients.',
    metric: '98% billing accuracy',
    color: '#059669',
  },
  {
    id: 3,
    name: 'Amara Osei',
    role: 'CTO',
    company: 'AfriCommerce Group',
    industry: 'Retail',
    initial: 'A',
    quote: 'The DFS platform they built handles agent banking at scale. The loan approval process went from 3 weeks to 3 days. Outstanding engineering.',
    metric: '3 weeks → 3 days',
    color: '#7C3AED',
  },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [direction, setDirection] = useState<number>(0)
  const [isPaused, setIsPaused] = useState<boolean>(false)

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [isPaused])

  const next = () => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goTo = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1)
    setCurrentIndex(index)
  }

  const current = testimonials[currentIndex]

  return (
    <section className="testimonials-pro">
      <div className="testimonials-pro__container">
        {/* Header */}
        <div className="testimonials-pro__header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="testimonials-pro__badge"
          >
            <Award size={14} />
            <span>Testimonials</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            className="testimonials-pro__title"
          >
            What Our <span className="testimonials-pro__title-accent">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            viewport={{ once: true }}
            className="testimonials-pro__subtitle"
          >
            Real stories from organizations transforming their operations with our solutions
          </motion.p>
        </div>

        {/* Main Testimonial */}
        <div 
          className="testimonials-pro__spotlight"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="testimonials-pro__card"
            >
              <div className="testimonials-pro__card-inner">
                {/* Author Info */}
                <div className="testimonials-pro__top">
                  <div className="testimonials-pro__author">
                    <div 
                      className="testimonials-pro__avatar"
                      style={{ background: current.color }}
                    >
                      {current.initial}
                    </div>
                    <div>
                      <h4 className="testimonials-pro__name">{current.name}</h4>
                      <p className="testimonials-pro__role">
                        {current.role} · {current.company}
                      </p>
                      <span className="testimonials-pro__industry">{current.industry}</span>
                    </div>
                  </div>
                  <div className="testimonials-pro__rating">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="testimonials-pro__star" />
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="testimonials-pro__quote">
                  <Quote size={28} className="testimonials-pro__quote-icon" />
                  {current.quote}
                </blockquote>

                {/* Metric */}
                <div className="testimonials-pro__bottom">
                  <div 
                    className="testimonials-pro__metric"
                    style={{ background: current.color }}
                  >
                    <TrendingUp size={16} />
                    <span>{current.metric}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prev} 
            className="testimonials-pro__arrow testimonials-pro__arrow--left"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={next} 
            className="testimonials-pro__arrow testimonials-pro__arrow--right"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dots */}
        <div className="testimonials-pro__dots">
          {testimonials.map((item, index) => (
            <button
              key={index}
              onClick={() => goTo(index)}
              className={`testimonials-pro__dot ${
                index === currentIndex ? 'testimonials-pro__dot--active' : ''
              }`}
              style={{
                borderColor: index === currentIndex ? item.color : 'transparent'
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        /* ================================================================
           TESTIMONIALS PRO - CLEAN, PROFESSIONAL, BUSINESS-FRIENDLY
           ================================================================ */

        .testimonials-pro {
          padding: 5rem 0;
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
          position: relative;
        }

        /* ---- Container ---- */
        .testimonials-pro__container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ---- Header ---- */
        .testimonials-pro__header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .testimonials-pro__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.25rem;
          background: #EEF2FF;
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #4338CA;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1rem;
        }

        .testimonials-pro__badge svg {
          color: #4338CA;
        }

        .testimonials-pro__title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }

        .testimonials-pro__title-accent {
          color: #2563EB;
        }

        .testimonials-pro__subtitle {
          font-size: 1rem;
          color: #64748B;
          max-width: 480px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ---- Spotlight ---- */
        .testimonials-pro__spotlight {
          position: relative;
          max-width: 880px;
          margin: 0 auto;
        }

        /* ---- Card ---- */
        .testimonials-pro__card {
          background: #FFFFFF;
          border-radius: 20px;
          padding: 2.75rem;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
          min-height: 280px;
          transition: box-shadow 0.3s ease;
        }

        .testimonials-pro__card:hover {
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
        }

        .testimonials-pro__card-inner {
          position: relative;
        }

        /* ---- Top Section ---- */
        .testimonials-pro__top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 1.5rem;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .testimonials-pro__author {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .testimonials-pro__avatar {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 1.2rem;
          flex-shrink: 0;
        }

        .testimonials-pro__name {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
        }

        .testimonials-pro__role {
          font-size: 0.85rem;
          color: #64748B;
        }

        .testimonials-pro__industry {
          display: inline-block;
          font-size: 0.65rem;
          font-weight: 600;
          color: #4338CA;
          background: #EEF2FF;
          padding: 0.15rem 0.7rem;
          border-radius: 100px;
          margin-top: 0.2rem;
        }

        .testimonials-pro__rating {
          display: flex;
          gap: 0.1rem;
          padding-top: 0.25rem;
        }

        .testimonials-pro__star {
          color: #F59E0B;
          fill: #F59E0B;
        }

        /* ---- Quote ---- */
        .testimonials-pro__quote {
          font-size: 1.1rem;
          color: #334155;
          line-height: 1.8;
          font-style: italic;
          margin-bottom: 1.5rem;
          position: relative;
          padding-left: 2.5rem;
        }

        .testimonials-pro__quote-icon {
          position: absolute;
          left: 0;
          top: 0.1rem;
          color: #94A3B8;
          opacity: 0.3;
        }

        /* ---- Bottom ---- */
        .testimonials-pro__bottom {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
        }

        .testimonials-pro__metric {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          color: #FFFFFF;
          font-size: 0.85rem;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }

        /* ---- Arrows ---- */
        .testimonials-pro__arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          color: #475569;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 20;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .testimonials-pro__arrow:hover {
          background: #F8FAFC;
          border-color: #94A3B8;
          transform: translateY(-50%) scale(1.05);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
        }

        .testimonials-pro__arrow--left {
          left: -1.5rem;
        }

        .testimonials-pro__arrow--right {
          right: -1.5rem;
        }

        /* ---- Dots ---- */
        .testimonials-pro__dots {
          display: flex;
          justify-content: center;
          gap: 0.6rem;
          margin-top: 2rem;
        }

        .testimonials-pro__dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #D1D5DB;
          border: 2px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .testimonials-pro__dot:hover {
          background: #9CA3AF;
        }

        .testimonials-pro__dot--active {
          background: #2563EB;
          transform: scale(1.15);
          border-color: #2563EB;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .testimonials-pro__arrow--left {
            left: -0.5rem;
          }
          .testimonials-pro__arrow--right {
            right: -0.5rem;
          }
        }

        @media (max-width: 768px) {
          .testimonials-pro {
            padding: 3.5rem 0;
          }

          .testimonials-pro__card {
            padding: 1.75rem;
            min-height: auto;
          }

          .testimonials-pro__quote {
            font-size: 1rem;
            padding-left: 0;
          }

          .testimonials-pro__quote-icon {
            display: none;
          }

          .testimonials-pro__top {
            flex-direction: column;
            align-items: flex-start;
          }

          .testimonials-pro__arrow {
            width: 36px;
            height: 36px;
          }

          .testimonials-pro__arrow--left {
            left: 0.25rem;
          }

          .testimonials-pro__arrow--right {
            right: 0.25rem;
          }

          .testimonials-pro__container {
            padding: 0 16px;
          }
        }

        @media (max-width: 640px) {
          .testimonials-pro__title {
            font-size: 1.6rem;
          }

          .testimonials-pro__subtitle {
            font-size: 0.9rem;
          }

          .testimonials-pro__arrow {
            display: none;
          }

          .testimonials-pro__card {
            padding: 1.25rem;
          }

          .testimonials-pro__avatar {
            width: 48px;
            height: 48px;
            font-size: 1rem;
          }

          .testimonials-pro__dots {
            gap: 0.4rem;
          }

          .testimonials-pro__dot {
            width: 8px;
            height: 8px;
          }
        }

        @media (max-width: 400px) {
          .testimonials-pro__metric {
            font-size: 0.75rem;
            padding: 0.4rem 1rem;
          }
        }
      `}</style>
    </section>
  )
}