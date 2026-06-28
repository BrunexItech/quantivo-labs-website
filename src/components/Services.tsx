import {
  CodeBracketIcon,
  CpuChipIcon,
  CloudIcon,
  GlobeAltIcon,
  Cog6ToothIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/outline'
import { ArrowRight } from 'lucide-react'

interface Service {
  icon: React.ElementType
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: CodeBracketIcon,
    title: 'Software Development',
    description: 'Custom enterprise applications engineered for performance and reliability.',
  },
  {
    icon: CpuChipIcon,
    title: 'AI Solutions',
    description: 'Intelligent automation, NLP, and predictive analytics that modernize operations.',
  },
  {
    icon: CloudIcon,
    title: 'Cloud Solutions',
    description: 'Scalable architecture, migration, and managed DevOps on leading platforms.',
  },
  {
    icon: GlobeAltIcon,
    title: 'Digital Transformation',
    description: 'End-to-end digitization strategies for modern business workflows.',
  },
  {
    icon: Cog6ToothIcon,
    title: 'Intelligent Automation',
    description: 'RPA, workflow orchestration, and AI-driven process optimization at scale.',
  },
  {
    icon: PuzzlePieceIcon,
    title: 'Software Integrations',
    description: 'Seamless API and system integrations connecting your entire ecosystem.',
  },
]

export default function Services() {
  return (
    <section className="services-section">
      <div className="services-container">
        {/* Header */}
        <div className="services-header">
          <span className="services-badge">What We Do</span>
          <h2 className="services-title">
            Comprehensive Technology{' '}
            <span className="services-title-accent">Services</span>
          </h2>
          <p className="services-subtitle">
            From AI automation to cloud infrastructure — end-to-end technology solutions that power modern enterprises.
          </p>
        </div>

        {/* First Row - 3 cards with numbers (always open) */}
        <div className="services-grid services-grid-first">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="service-card service-card-open"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <span className="service-number">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="service-icon">
                  <Icon className="service-icon-svg" />
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-link">
                  <span>Learn More</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            )
          })}
        </div>

        {/* Second Row - 3 cards with hover reveal */}
        <div className="services-grid services-grid-second">
          {services.slice(3).map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index + 3}
                className="service-card service-card-hover"
                style={{ animationDelay: `${(index + 3) * 0.08}s` }}
              >
                <div className="service-card-hover-inner">
                  <div className="service-icon">
                    <Icon className="service-icon-svg" />
                  </div>
                  <div className="service-card-hover-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description-hover">{service.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      <style>{`
        .services-section {
          padding: 5rem 0;
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }

        .services-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .services-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .services-badge {
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

        .services-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }

        .services-title-accent {
          background: linear-gradient(135deg, #2563EB, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .services-subtitle {
          font-size: 1rem;
          color: #64748B;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ===== FIRST ROW - OPEN CARDS ===== */
        .services-grid-first {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }

        .service-card-open {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 2rem 1.5rem;
          position: relative;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          animation: serviceFadeUp 0.6s ease both;
        }

        .service-card-open:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.06);
          border-color: #C7D2FE;
        }

        @keyframes serviceFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .service-number {
          position: absolute;
          top: 1rem;
          right: 1.25rem;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          font-weight: 800;
          color: #E2E8F0;
          line-height: 1;
          transition: color 0.3s ease;
          pointer-events: none;
        }

        .service-card-open:hover .service-number {
          color: #C7D2FE;
        }

        .service-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: linear-gradient(135deg, #DBEAFE, #EDE9FE);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.125rem;
        }

        .service-icon-svg {
          width: 24px;
          height: 24px;
          color: #4F46E5;
        }

        .service-title {
          font-size: 1rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.5rem;
        }

        .service-description {
          font-size: 0.875rem;
          color: #64748B;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .service-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #4F46E5;
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .service-card-open:hover .service-link {
          opacity: 1;
          transform: translateX(0);
        }

        .service-link:hover {
          gap: 0.75rem;
        }

        /* ===== SECOND ROW - HOVER REVEAL CARDS ===== */
        .services-grid-second {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .service-card-hover {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 16px;
          padding: 2rem 1.5rem;
          transition: all 0.35s cubic-bezier(0.22, 1, 0.36, 1);
          animation: serviceFadeUp 0.6s ease both;
          cursor: default;
        }

        .service-card-hover:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.06);
          border-color: #C7D2FE;
        }

        .service-card-hover-inner {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .service-card-hover .service-icon {
          flex-shrink: 0;
          margin-bottom: 0;
        }

        .service-card-hover-content {
          flex: 1;
        }

        .service-card-hover .service-title {
          margin-bottom: 0;
        }

        .service-description-hover {
          font-size: 0.875rem;
          color: #64748B;
          line-height: 1.7;
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .service-card-hover:hover .service-description-hover {
          max-height: 80px;
          opacity: 1;
          margin-top: 0.5rem;
        }

        @media (max-width: 1024px) {
          .services-grid-first,
          .services-grid-second {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .services-section {
            padding: 3rem 0;
          }

          .services-container {
            padding: 0 1rem;
          }

          .services-grid-first,
          .services-grid-second {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .services-grid-first {
            margin-bottom: 1rem;
          }

          .services-title {
            font-size: 1.6rem;
          }

          .service-card-open,
          .service-card-hover {
            padding: 1.5rem;
          }

          .service-number {
            font-size: 2rem;
            top: 0.75rem;
            right: 1rem;
          }

          .service-card-hover-inner {
            flex-direction: column;
            align-items: flex-start;
          }

          .service-card-hover .service-icon {
            margin-bottom: 0.75rem;
          }

          .service-description-hover {
            max-height: none;
            opacity: 1;
            margin-top: 0.5rem;
          }
        }

        @media (max-width: 400px) {
          .service-number {
            font-size: 1.75rem;
          }
        }
      `}</style>
    </section>
  )
}