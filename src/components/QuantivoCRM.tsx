import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

interface Product {
  name: string
  tag: string
  description: string
  features: string[]
  icon: string
  accentColor: string
  cta: string
  ctaPath: string
}

const products: Product[] = [
  {
    name: 'QuantivoCRM',
    tag: 'CRM Platform',
    description: 'The first CRM built from the ground up for African enterprises with M-Pesa integration, multilingual AI follow-ups, and a pipeline engine that helps your team close more deals, faster.',
    features: ['360° Customer View', 'AI-Powered Follow-ups', 'Sales Pipeline', 'M-Pesa Integration'],
    icon: '📊',
    accentColor: '#2563EB',
    cta: 'Explore QuantivoCRM',
    ctaPath: '/products',
  },
  {
    name: 'Viral Blast',
    tag: 'AI Tool',
    description: 'AI-powered social media strategy and content creation platform. Generate, schedule, and analyse campaigns that resonate with your target audience and drive organic reach.',
    features: ['AI Content Generation', 'Viral Score Prediction', 'Multi-platform Scheduling', 'Analytics & Insights', 'A/B Testing', 'Competitor Analysis'],
    icon: '🚀',
    accentColor: '#8B5CF6',
    cta: 'Request Demo',
    ctaPath: '/contact',
  },
]

export default function QuantivoCRM() {
  return (
    <section className="products-modern">
      {/* Decorative background */}
      <div className="products-modern__bg">
        <div className="products-modern__gradient" />
        <div className="products-modern__orb products-modern__orb--1" />
        <div className="products-modern__orb products-modern__orb--2" />
        <div className="products-modern__orb products-modern__orb--3" />
      </div>

      <div className="products-modern__container">
        {/* Section Header */}
        <div className="products-modern__header">
          <div className="products-modern__badge">
            <Sparkles className="products-modern__badge-icon" />
            <span>New Products</span>
          </div>
          <h2 className="products-modern__title">
            Discover Our <span className="products-modern__title-accent">Latest Innovations</span>
          </h2>
          <p className="products-modern__subtitle">
            Cutting-edge solutions designed to transform your business operations
          </p>
        </div>

        {/* Products Grid */}
        <div className="products-modern__grid">
          {products.map((product, index) => (
            <div key={product.name} className="products-modern__card" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="products-modern__card-glow" style={{ background: product.accentColor }} />
              
              {/* Header */}
              <div className="products-modern__card-header">
                <div className="products-modern__card-icon" style={{ background: `${product.accentColor}15`, color: product.accentColor }}>
                  <span>{product.icon}</span>
                </div>
                <span className="products-modern__card-tag" style={{ background: `${product.accentColor}10`, color: product.accentColor }}>
                  {product.tag}
                </span>
              </div>

              {/* Content */}
              <h3 className="products-modern__card-name">{product.name}</h3>
              <p className="products-modern__card-description">{product.description}</p>

              {/* Features */}
              <div className="products-modern__card-features">
                {product.features.map((feature, i) => (
                  <div key={i} className="products-modern__card-feature">
                    <div className="products-modern__card-feature-dot" style={{ background: product.accentColor }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link to={product.ctaPath} className="products-modern__card-cta" style={{ background: product.accentColor }}>
                {product.cta} <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        /* ============================================================
           PRODUCTS MODERN - FULLY RESPONSIVE
           ============================================================ */

        .products-modern {
          padding: 5rem 0;
          position: relative;
          overflow: hidden;
          background: linear-gradient(160deg, #f8fafc 0%, #eef2ff 40%, #f0f9ff 100%);
        }

        /* ---- Decorative Background ---- */
        .products-modern__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .products-modern__gradient {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(37, 99, 235, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(124, 58, 237, 0.03) 0%, transparent 60%);
        }

        .products-modern__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          pointer-events: none;
        }

        .products-modern__orb--1 {
          top: -20%;
          right: -10%;
          width: 400px;
          height: 400px;
          background: rgba(37, 99, 235, 0.05);
          animation: productsOrbFloat 20s ease-in-out infinite;
        }

        .products-modern__orb--2 {
          bottom: -20%;
          left: -10%;
          width: 350px;
          height: 350px;
          background: rgba(124, 58, 237, 0.04);
          animation: productsOrbFloat 25s ease-in-out infinite reverse;
        }

        .products-modern__orb--3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: rgba(6, 182, 212, 0.02);
          animation: productsOrbPulse 15s ease-in-out infinite;
        }

        @keyframes productsOrbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.05); }
          66% { transform: translate(-30px, 30px) scale(0.95); }
        }

        @keyframes productsOrbPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.7; }
        }

        /* ---- Container ---- */
        .products-modern__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
          position: relative;
          z-index: 1;
        }

        /* ---- Header ---- */
        .products-modern__header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .products-modern__badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.25rem;
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(37, 99, 235, 0.08);
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          color: #1e40af;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
        }

        .products-modern__badge-icon {
          width: 14px;
          height: 14px;
          color: #3B82F6;
        }

        .products-modern__title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }

        .products-modern__title-accent {
          background: linear-gradient(135deg, #2563EB, #7C3AED);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .products-modern__subtitle {
          font-size: 1.05rem;
          color: #64748B;
          max-width: 500px;
          margin: 0 auto;
        }

        /* ---- Grid ---- */
        .products-modern__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        /* ---- Card ---- */
        .products-modern__card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 2rem;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
          animation: productsCardFadeUp 0.6s ease both;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.02);
        }

        .products-modern__card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
          border-color: #CBD5E1;
        }

        @keyframes productsCardFadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .products-modern__card-glow {
          position: absolute;
          top: -80px;
          right: -80px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          opacity: 0.04;
          pointer-events: none;
          transition: opacity 0.4s ease;
        }

        .products-modern__card:hover .products-modern__card-glow {
          opacity: 0.1;
        }

        .products-modern__card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1.25rem;
        }

        .products-modern__card-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }

        .products-modern__card:hover .products-modern__card-icon {
          transform: scale(1.05);
        }

        .products-modern__card-tag {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.3rem 0.75rem;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .products-modern__card-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.5rem;
        }

        .products-modern__card-description {
          font-size: 0.925rem;
          color: #64748B;
          line-height: 1.7;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .products-modern__card-features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .products-modern__card-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.82rem;
          font-weight: 500;
          color: #334155;
        }

        .products-modern__card-feature-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ===== BUTTON FIXES ===== */
        .products-modern__card-cta {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.9rem;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
          width: fit-content;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          border: none;
          cursor: pointer;
          white-space: nowrap;
        }

        .products-modern__card-cta:hover {
          transform: translateX(4px);
          filter: brightness(1.08);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
        }

        /* ============================================================
           RESPONSIVE - BUTTON ONLY
           ============================================================ */

        @media (max-width: 1024px) {
          .products-modern__grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .products-modern__card {
            max-width: 600px;
            margin: 0 auto;
          }

          .products-modern__orb--1 {
            width: 300px;
            height: 300px;
          }

          .products-modern__orb--2 {
            width: 250px;
            height: 250px;
          }

          .products-modern__orb--3 {
            width: 400px;
            height: 400px;
          }
        }

        @media (max-width: 768px) {
          .products-modern {
            padding: 3rem 0;
          }

          .products-modern__container {
            padding: 0 16px;
          }

          .products-modern__title {
            font-size: 1.8rem;
          }

          .products-modern__subtitle {
            font-size: 0.95rem;
          }

          /* Button fix for tablet */
          .products-modern__card-cta {
            padding: 0.7rem 1.25rem;
            font-size: 0.85rem;
          }
        }

        @media (max-width: 640px) {
          .products-modern {
            padding: 2.5rem 0;
          }

          .products-modern__card {
            padding: 1.5rem;
          }

          .products-modern__card-features {
            grid-template-columns: 1fr;
          }

          .products-modern__card-name {
            font-size: 1.25rem;
          }

          .products-modern__orb--1 {
            width: 200px;
            height: 200px;
          }

          .products-modern__orb--2 {
            width: 150px;
            height: 150px;
          }

          .products-modern__orb--3 {
            width: 300px;
            height: 300px;
          }

          /* Button fix for mobile - full width */
          .products-modern__card-cta {
            width: 100%;
            justify-content: center;
            padding: 0.7rem 1rem;
            font-size: 0.85rem;
            white-space: nowrap;
          }

          .products-modern__card-header {
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .products-modern__card-icon {
            width: 44px;
            height: 44px;
            font-size: 1.25rem;
          }

          .products-modern__badge {
            font-size: 0.65rem;
            padding: 0.3rem 1rem;
          }

          .products-modern__badge-icon {
            width: 12px;
            height: 12px;
          }
        }

        @media (max-width: 400px) {
          .products-modern {
            padding: 2rem 0;
          }

          .products-modern__card {
            padding: 1rem;
          }

          .products-modern__card-features {
            grid-template-columns: 1fr;
          }

          .products-modern__title {
            font-size: 1.4rem;
          }

          .products-modern__card-name {
            font-size: 1.1rem;
          }

          .products-modern__card-description {
            font-size: 0.85rem;
          }

          .products-modern__card-feature {
            font-size: 0.78rem;
          }

          /* Button fix for very small screens */
          .products-modern__card-cta {
            width: 100%;
            justify-content: center;
            padding: 0.6rem 0.75rem;
            font-size: 0.8rem;
            white-space: nowrap;
          }

          .products-modern__card-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.5rem;
          }

          .products-modern__card-tag {
            font-size: 0.6rem;
            padding: 0.2rem 0.6rem;
          }
        }
      `}</style>
    </section>
  )
}