import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Industry {
  id: number
  name: string
  icon: string
  description: string
  stat: string
}

const industries: Industry[] = [
  {
    id: 1,
    name: 'Healthcare',
    icon: '🏥',
    description: 'Complete hospital management, patient records, billing, and pharmacy systems.',
    stat: '50+ hospitals',
  },
  {
    id: 2,
    name: 'Education',
    icon: '🎓',
    description: 'End-to-end school administration from admissions to academics and parent communication.',
    stat: '500+ schools',
  },
  {
    id: 3,
    name: 'Finance',
    icon: '💳',
    description: 'Digital lending, agent banking, SACCO management, and payment processing platforms.',
    stat: '5M+ transactions/month',
  },
  {
    id: 4,
    name: 'Hospitality',
    icon: '🏨',
    description: 'Hotel management, POS systems, and unified operations for restaurants and resorts.',
    stat: '4 properties unified',
  },
  {
    id: 5,
    name: 'Retail',
    icon: '🛒',
    description: 'Cloud POS, inventory management, and ecommerce platforms for modern retailers.',
    stat: '200+ retail outlets',
  },
  {
    id: 6,
    name: 'Government',
    icon: '🏛️',
    description: 'Digital transformation, citizen services, and enterprise solutions for public sector.',
    stat: '8 countries served',
  },
]

export default function Industries() {
  const [flipped, setFlipped] = useState<Record<number, boolean>>({})

  useEffect(() => {
    const timeouts = industries.map((industry) => {
      return setTimeout(() => {
        setFlipped((prev) => ({
          ...prev,
          [industry.id]: true,
        }))
      }, 800 + industry.id * 1000)
    })

    return () => timeouts.forEach(clearTimeout)
  }, [])

  const handleFlip = (id: number) => {
    setFlipped((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  return (
    <section className="industries-section">
      <div className="industries-container">
        {/* Header */}
        <div className="industries-header">
          <span className="industries-badge">Industries</span>
          <h2 className="industries-title">
            Serving <span className="industries-title-accent">6 Key Industries</span>
          </h2>
          <p className="industries-subtitle">
            Sector-specific solutions built with deep domain knowledge and tailored to the unique
            challenges of each industry.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((industry) => {
            const isFlipped = flipped[industry.id] || false

            return (
              <div
                key={industry.id}
                className="industry-card-wrapper"
                onClick={() => handleFlip(industry.id)}
              >
                <motion.div
                  className="industry-card-inner"
                  animate={{ rotateY: isFlipped ? 0 : 180 }}
                  transition={{ duration: 0.7, ease: 'easeInOut' }}
                >
                  {/* Front */}
                  <div className="industry-card-front">
                    <span className="industry-card-icon">{industry.icon}</span>
                    <h3 className="industry-card-name">{industry.name}</h3>
                    <span className="industry-card-tap">Tap to flip</span>
                  </div>

                  {/* Back */}
                  <div className="industry-card-back">
                    <p className="industry-card-description">{industry.description}</p>
                    <span className="industry-card-stat">{industry.stat}</span>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .industries-section {
          padding: 5rem 0;
          background: #FFFFFF;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }

        .industries-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .industries-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .industries-badge {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          color: #4F46E5;
          background: #EDE9FE;
          padding: 0.35rem 1rem;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .industries-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }

        .industries-title-accent {
          background: linear-gradient(135deg, #2563EB, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .industries-subtitle {
          font-size: 1rem;
          color: #64748B;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .industry-card-wrapper {
          position: relative;
          height: 260px;
          perspective: 1000px;
          cursor: pointer;
        }

        .industry-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transition: transform 0.7s cubic-bezier(0.22, 1, 0.36, 1);
          transform-style: preserve-3d;
        }

        .industry-card-front,
        .industry-card-back {
          position: absolute;
          inset: 0;
          border-radius: 16px;
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .industry-card-front {
          background: linear-gradient(135deg, #EEF2FF, #EDE9FE);
          border: 1px solid #C7D2FE;
        }

        .industry-card-back {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          transform: rotateY(180deg);
        }

        .industry-card-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .industry-card-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.5rem;
        }

        .industry-card-tap {
          font-size: 0.7rem;
          font-weight: 500;
          color: #4F46E5;
          background: rgba(79, 70, 229, 0.1);
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
        }

        .industry-card-description {
          font-size: 0.875rem;
          color: #64748B;
          text-align: center;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .industry-card-stat {
          font-size: 0.75rem;
          font-weight: 700;
          color: #4F46E5;
          background: #EDE9FE;
          padding: 0.35rem 1rem;
          border-radius: 100px;
          border: 1px solid #C7D2FE;
        }

        @media (max-width: 1024px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .industries-section {
            padding: 3rem 0;
          }

          .industries-container {
            padding: 0 1rem;
          }

          .industries-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .industries-title {
            font-size: 1.6rem;
          }

          .industry-card-wrapper {
            height: 220px;
          }

          .industry-card-icon {
            font-size: 2.5rem;
          }

          .industry-card-name {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  )
}