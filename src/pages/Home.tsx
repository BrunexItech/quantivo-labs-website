import { Link } from 'react-router-dom'
import {
  ArrowRight,
} from 'lucide-react'
import HeroSlider from '../components/HeroSlider'
import QuantivoCRM from '../components/QuantivoCRM'
import Services from '../components/Services'
import ProductsShowcase from '../components/ProductsShowcase'
import Industries from '../components/Industries'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import CTASection from '../components/CTASection'

const stats = [
  { value: '19+', label: 'Digital Products' },
  { value: '200+', label: 'Enterprise Clients' },
  { value: '8', label: 'Countries Served' },
  { value: '5M+', label: 'Transactions/month' },
]

export default function Home() {
  return (
    <div>
      {/* ===== SLIDER HERO ===== */}
      <HeroSlider />

      {/* ===== STATS BAR MODERN ===== */}
      <div className="stats-bar-modern">
        <div className="container">
          <div className="stats-modern-grid">
            {stats.map((s, i) => (
              <div key={i} className="stats-modern-card" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="stats-modern-icon">
                  {i === 0 && '📦'}
                  {i === 1 && '🏢'}
                  {i === 2 && '🌍'}
                  {i === 3 && '💰'}
                </div>
                <div className="stats-modern-value">{s.value}</div>
                <div className="stats-modern-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== QUANTIVO CRM ===== */}
      <QuantivoCRM />

      {/* ===== SERVICES ===== */}
      <Services />

      {/* ===== PRODUCTS SHOWCASE ===== */}
      <ProductsShowcase />

      {/* ===== INDUSTRIES ===== */}
      <Industries />

      {/* ===== HOW IT WORKS ===== */}
      <HowItWorks />

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== CTA SECTION ===== */}
      <CTASection />

      <style>{`
        /* ===== STATS BAR MODERN ===== */
        .stats-bar-modern {
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          padding: 3rem 0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.05);
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .stats-bar-modern::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(ellipse at 30% 50%, rgba(37,99,235,0.08) 0%, transparent 60%),
                      radial-gradient(ellipse at 70% 80%, rgba(6,182,212,0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .stats-modern-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .stats-modern-card {
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 2rem 1.5rem;
          text-align: center;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          animation: statsFadeUp 0.6s ease both;
          position: relative;
          overflow: hidden;
        }

        .stats-modern-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #2563EB, #06B6D4);
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .stats-modern-card:hover {
          transform: translateY(-4px);
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(37, 99, 235, 0.2);
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
        }

        .stats-modern-card:hover::before {
          opacity: 1;
        }

        @keyframes statsFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stats-modern-icon {
          font-size: 1.75rem;
          margin-bottom: 0.75rem;
          display: block;
        }

        .stats-modern-value {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.25rem;
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1;
          margin-bottom: 0.25rem;
          background: linear-gradient(135deg, #F1F5F9 0%, #94A3B8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stats-modern-label {
          font-size: 0.8rem;
          font-weight: 500;
          color: #94A3B8;
          letter-spacing: 0.02em;
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .stats-modern-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }
        }

        @media (max-width: 640px) {
          .stats-bar-modern {
            padding: 2rem 0;
          }
          .stats-modern-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.75rem;
          }
          .stats-modern-card {
            padding: 1.25rem 1rem;
          }
          .stats-modern-value {
            font-size: 1.5rem;
          }
          .stats-modern-icon {
            font-size: 1.25rem;
            margin-bottom: 0.5rem;
          }
        }

        @media (max-width: 400px) {
          .stats-modern-grid {
            grid-template-columns: 1fr 1fr;
            gap: 0.5rem;
          }
          .stats-modern-card {
            padding: 1rem 0.75rem;
          }
          .stats-modern-value {
            font-size: 1.25rem;
          }
          .stats-modern-label {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </div>
  )
}