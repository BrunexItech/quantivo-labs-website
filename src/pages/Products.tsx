import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  Zap, 
  Shield, 
  Users, 
  BarChart3, 
  Globe, 
  Smartphone,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingBag,
  Wallet,
  Rocket,
  Sparkles,
  ChevronRight,
  Star,
  TrendingUp,
  Award,
  Clock
} from 'lucide-react'
import { api } from '../api'

interface Product {
  id: number
  name: string
  slug: string
  description: string
  icon: string
  color: string
  featured: boolean
}

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [heroLoaded, setHeroLoaded] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsData, testimonialsData] = await Promise.all([
          api.getProducts(),
          api.getTestimonials()
        ])
        setProducts(productsData.results || productsData || [])
        setTestimonials(testimonialsData.results || testimonialsData || [])
      } catch (error) {
        console.error('Error fetching home data:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // Preload hero image on component mount
  useEffect(() => {
    const img = new Image()
    img.src = '/products_hero.jpg'
    img.onload = () => setHeroLoaded(true)
  }, [])

  const featuredProducts = products.filter(p => p.featured).slice(0, 6)

  return (
    <div className="home-premium">
      {/* ===== MULTIPLE PRELOAD STRATEGIES FOR INSTANT LOADING ===== */}
      <link rel="preload" as="image" href="/products_hero.jpg" fetchPriority="high" />
      <link rel="preload" as="image" href="/products_hero.jpg" imagesrcset="/products_hero.jpg" importance="high" />

      {/* ===== HERO SECTION - INSTANT LOAD WITH BACKGROUND PLACEHOLDER ===== */}
      <section className="home-premium__hero">
        <div className="home-premium__hero-bg">
          {/* Background color placeholder - shows instantly */}
          <div className="home-premium__hero-placeholder" />
          
          {/* Image with all optimization attributes */}
          <img 
            src="/products_hero.jpg"
            alt="Quantivo Labs - Technology Solutions"
            className="home-premium__hero-image"
            fetchPriority="high"
            loading="eager"
            decoding="sync"
            width="1920"
            height="1080"
            style={{
              opacity: heroLoaded ? 1 : 0,
              transition: 'opacity 0.1s ease'
            }}
            onLoad={() => setHeroLoaded(true)}
          />
          <div className="home-premium__hero-overlay" />
        </div>

        <div className="home-premium__hero-content">
          <div className="home-premium__hero-inner">
            <div className="home-premium__hero-badge">
              <Sparkles size={14} />
              <span>Innovating Tomorrow</span>
            </div>
            <h1 className="home-premium__hero-title">
              Building the Future of <br />
              <span className="home-premium__hero-accent">Technology in Africa</span>
            </h1>
            <p className="home-premium__hero-desc">
              Quantivo Labs delivers innovative digital solutions that transform 
              businesses and drive growth across the continent.
            </p>
            <div className="home-premium__hero-actions">
              <Link to="/products" className="home-premium__hero-btn-primary">
                Explore Solutions <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="home-premium__hero-btn-secondary">
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PRODUCTS ===== */}
      <section className="home-premium__products">
        <div className="home-premium__container">
          <div className="home-premium__section-header">
            <div>
              <span className="home-premium__section-tag">Our Solutions</span>
              <h2 className="home-premium__section-title">Industry-Focused Platforms</h2>
              <p className="home-premium__section-desc">
                Discover our growing portfolio of intelligent platforms designed 
                to power businesses across industries.
              </p>
            </div>
            <Link to="/products" className="home-premium__section-link">
              View All Products <ChevronRight size={16} />
            </Link>
          </div>

          {loading ? (
            <div className="home-premium__products-grid home-premium__products-grid--loading">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="home-premium__product-card home-premium__product-card--loading">
                  <div className="home-premium__product-icon-skeleton" />
                  <div className="home-premium__product-skeleton-line" />
                  <div className="home-premium__product-skeleton-line home-premium__product-skeleton-line--short" />
                </div>
              ))}
            </div>
          ) : (
            <div className="home-premium__products-grid">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="home-premium__product-card"
                >
                  <div 
                    className="home-premium__product-icon"
                    style={{ background: `${product.color}15`, color: product.color }}
                  >
                    {product.icon === 'Building2' && <Building2 size={24} />}
                    {product.icon === 'HeartPulse' && <HeartPulse size={24} />}
                    {product.icon === 'GraduationCap' && <GraduationCap size={24} />}
                    {product.icon === 'ShoppingBag' && <ShoppingBag size={24} />}
                    {product.icon === 'Wallet' && <Wallet size={24} />}
                    {product.icon === 'Rocket' && <Rocket size={24} />}
                    {!['Building2', 'HeartPulse', 'GraduationCap', 'ShoppingBag', 'Wallet', 'Rocket'].includes(product.icon) && (
                      <Zap size={24} />
                    )}
                  </div>
                  <h3 className="home-premium__product-name">{product.name}</h3>
                  <p className="home-premium__product-desc">{product.description}</p>
                  <Link to={`/products/${product.slug}`} className="home-premium__product-link">
                    Learn More <ArrowRight size={14} />
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="home-premium__stats" ref={counterRef}>
        <div className="home-premium__container">
          <div className="home-premium__stats-grid">
            <div className="home-premium__stat-item">
              <div className="home-premium__stat-icon">
                <Building2 size={24} />
              </div>
              <div className="home-premium__stat-number">18</div>
              <div className="home-premium__stat-label">Products</div>
            </div>
            <div className="home-premium__stat-item">
              <div className="home-premium__stat-icon">
                <Zap size={24} />
              </div>
              <div className="home-premium__stat-number">5</div>
              <div className="home-premium__stat-label">Categories</div>
            </div>
            <div className="home-premium__stat-item">
              <div className="home-premium__stat-icon">
                <Users size={24} />
              </div>
              <div className="home-premium__stat-number">100+</div>
              <div className="home-premium__stat-label">Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY QUANTIVO ===== */}
      <section className="home-premium__why">
        <div className="home-premium__container">
          <div className="home-premium__section-header home-premium__section-header--centered">
            <span className="home-premium__section-tag">Why Quantivo</span>
            <h2 className="home-premium__section-title">Built for the Future of Africa</h2>
            <p className="home-premium__section-desc">
              We combine cutting-edge technology with deep local expertise to 
              create solutions that drive real impact.
            </p>
          </div>

          <div className="home-premium__why-grid">
            <div className="home-premium__why-card">
              <div className="home-premium__why-icon" style={{ background: '#EEF2FF', color: '#2563EB' }}>
                <Globe size={24} />
              </div>
              <h3 className="home-premium__why-title">Local Expertise</h3>
              <p className="home-premium__why-desc">
                Built by Africans for Africa, understanding local market dynamics 
                and business challenges.
              </p>
            </div>
            <div className="home-premium__why-card">
              <div className="home-premium__why-icon" style={{ background: '#F0FDF4', color: '#16A34A' }}>
                <Shield size={24} />
              </div>
              <h3 className="home-premium__why-title">Enterprise Grade</h3>
              <p className="home-premium__why-desc">
                Secure, scalable, and reliable platforms built with modern 
                technology stacks.
              </p>
            </div>
            <div className="home-premium__why-card">
              <div className="home-premium__why-icon" style={{ background: '#FEF3C7', color: '#F59E0B' }}>
                <Smartphone size={24} />
              </div>
              <h3 className="home-premium__why-title">Mobile-First</h3>
              <p className="home-premium__why-desc">
                Designed for the African market with mobile-first experiences 
                and offline capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="home-premium__testimonials">
        <div className="home-premium__container">
          <div className="home-premium__section-header home-premium__section-header--centered">
            <span className="home-premium__section-tag">Testimonials</span>
            <h2 className="home-premium__section-title">What Our Clients Say</h2>
            <p className="home-premium__section-desc">
              Hear from businesses that have transformed their operations 
              with Quantivo solutions.
            </p>
          </div>

          <div className="home-premium__testimonials-grid">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="home-premium__testimonial-card"
              >
                <div className="home-premium__testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < testimonial.rating ? 'filled' : ''}
                    />
                  ))}
                </div>
                <p className="home-premium__testimonial-content">"{testimonial.content}"</p>
                <div className="home-premium__testimonial-author">
                  <div className="home-premium__testimonial-avatar">
                    {testimonial.avatar || testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="home-premium__testimonial-name">{testimonial.name}</div>
                    <div className="home-premium__testimonial-role">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="home-premium__cta">
        <div className="home-premium__container">
          <div className="home-premium__cta-card">
            <div className="home-premium__cta-content">
              <h2 className="home-premium__cta-title">Ready to Transform Your Business?</h2>
              <p className="home-premium__cta-desc">
                Join 100+ businesses across Africa using Quantivo solutions 
                to drive growth and innovation.
              </p>
              <div className="home-premium__cta-actions">
                <Link to="/contact" className="home-premium__cta-btn-primary">
                  Get Started <ArrowRight size={18} />
                </Link>
                <Link to="/products" className="home-premium__cta-btn-secondary">
                  Explore Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .home-premium {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0F172A;
        }

        .home-premium__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ===== HERO ===== */
        .home-premium__hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .home-premium__hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
        }

        .home-premium__hero-placeholder {
          position: absolute;
          inset: 0;
          background: #0F172A;
          z-index: 1;
        }

        .home-premium__hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 2;
        }

        .home-premium__hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.4) 50%, rgba(15, 23, 42, 0.7) 100%);
          z-index: 3;
        }

        .home-premium__hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          padding: 0 28px;
        }

        .home-premium__hero-inner {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .home-premium__hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.25rem;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
          backdrop-filter: blur(12px);
        }

        .home-premium__hero-badge svg {
          color: #FBBF24;
        }

        .home-premium__hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .home-premium__hero-accent {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .home-premium__hero-desc {
          font-size: 1.05rem;
          color: #94A3B8;
          max-width: 520px;
          margin: 0 auto 2rem;
          line-height: 1.7;
        }

        .home-premium__hero-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .home-premium__hero-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, #FBBF24, #F59E0B);
          color: #0F172A;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 12px 32px rgba(245, 158, 11, 0.2);
        }

        .home-premium__hero-btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 48px rgba(245, 158, 11, 0.35);
        }

        .home-premium__hero-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 0.85rem 2rem;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          color: #F1F5F9;
          font-weight: 600;
          font-size: 0.95rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .home-premium__hero-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-3px);
        }

        /* ===== SECTION HEADERS ===== */
        .home-premium__section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 3rem;
        }

        .home-premium__section-header--centered {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .home-premium__section-tag {
          display: inline-block;
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #2563EB;
          background: #EEF2FF;
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          margin-bottom: 0.5rem;
        }

        .home-premium__section-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.8rem, 3vw, 2.5rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.1;
          margin-bottom: 0.75rem;
        }

        .home-premium__section-desc {
          font-size: 1rem;
          color: #64748B;
          max-width: 560px;
          line-height: 1.7;
        }

        .home-premium__section-header--centered .home-premium__section-desc {
          margin: 0 auto;
        }

        .home-premium__section-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
          color: #2563EB;
          text-decoration: none;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .home-premium__section-link:hover {
          gap: 0.6rem;
          color: #1D4ED8;
        }

        /* ===== PRODUCTS ===== */
        .home-premium__products {
          padding: 4rem 0 5rem;
          background: #F8FAFC;
        }

        .home-premium__products-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .home-premium__products-grid--loading {
          opacity: 0.6;
        }

        .home-premium__product-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid #E2E8F0;
          transition: all 0.4s ease;
          text-decoration: none;
          display: flex;
          flex-direction: column;
        }

        .home-premium__product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
          border-color: #CBD5E1;
        }

        .home-premium__product-card--loading {
          pointer-events: none;
        }

        .home-premium__product-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .home-premium__product-icon-skeleton {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: #E2E8F0;
          margin-bottom: 1rem;
          animation: loadingPulse 1.5s ease-in-out infinite;
        }

        .home-premium__product-skeleton-line {
          height: 16px;
          background: #E2E8F0;
          border-radius: 4px;
          margin-bottom: 0.5rem;
          animation: loadingPulse 1.5s ease-in-out infinite;
        }

        .home-premium__product-skeleton-line--short {
          width: 60%;
        }

        @keyframes loadingPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .home-premium__product-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.05rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.4rem;
        }

        .home-premium__product-desc {
          font-size: 0.85rem;
          color: #64748B;
          line-height: 1.6;
          margin-bottom: 1.25rem;
          flex: 1;
        }

        .home-premium__product-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-weight: 600;
          font-size: 0.85rem;
          color: #2563EB;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .home-premium__product-link:hover {
          gap: 0.6rem;
          color: #1D4ED8;
        }

        /* ===== STATS ===== */
        .home-premium__stats {
          padding: 3rem 0;
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
        }

        .home-premium__stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 800px;
          margin: 0 auto;
        }

        .home-premium__stat-item {
          text-align: center;
        }

        .home-premium__stat-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: #EEF2FF;
          color: #2563EB;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 0.5rem;
        }

        .home-premium__stat-number {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: #0F172A;
        }

        .home-premium__stat-label {
          font-size: 0.85rem;
          color: #64748B;
          font-weight: 500;
        }

        /* ===== WHY QUANTIVO ===== */
        .home-premium__why {
          padding: 4rem 0;
          background: #F8FAFC;
        }

        .home-premium__why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .home-premium__why-card {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid #E2E8F0;
          text-align: center;
          transition: all 0.4s ease;
        }

        .home-premium__why-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
        }

        .home-premium__why-icon {
          width: 56px;
          height: 56px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .home-premium__why-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.5rem;
        }

        .home-premium__why-desc {
          font-size: 0.9rem;
          color: #64748B;
          line-height: 1.6;
        }

        /* ===== TESTIMONIALS ===== */
        .home-premium__testimonials {
          padding: 4rem 0;
          background: #FFFFFF;
        }

        .home-premium__testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .home-premium__testimonial-card {
          background: #F8FAFC;
          border-radius: 16px;
          padding: 2rem;
          border: 1px solid #E2E8F0;
          transition: all 0.4s ease;
        }

        .home-premium__testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
        }

        .home-premium__testimonial-stars {
          display: flex;
          gap: 0.2rem;
          margin-bottom: 1rem;
        }

        .home-premium__testimonial-stars .filled {
          fill: #F59E0B;
          color: #F59E0B;
        }

        .home-premium__testimonial-stars svg {
          color: #CBD5E1;
        }

        .home-premium__testimonial-content {
          font-size: 0.95rem;
          color: #0F172A;
          line-height: 1.7;
          margin-bottom: 1.5rem;
          font-style: italic;
        }

        .home-premium__testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .home-premium__testimonial-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563EB, #4F46E5);
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .home-premium__testimonial-name {
          font-weight: 600;
          font-size: 0.9rem;
          color: #0F172A;
        }

        .home-premium__testimonial-role {
          font-size: 0.8rem;
          color: #64748B;
        }

        /* ===== CTA ===== */
        .home-premium__cta {
          padding: 4rem 0;
          background: #0F172A;
        }

        .home-premium__cta-card {
          background: linear-gradient(135deg, #1E293B, #0F172A);
          border-radius: 20px;
          padding: 3rem;
          border: 1px solid rgba(255, 255, 255, 0.04);
        }

        .home-premium__cta-content {
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .home-premium__cta-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(1.6rem, 2.5vw, 2.2rem);
          font-weight: 800;
          color: #F1F5F9;
          margin-bottom: 0.75rem;
        }

        .home-premium__cta-desc {
          font-size: 1rem;
          color: #94A3B8;
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        .home-premium__cta-actions {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .home-premium__cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, #FBBF24, #F59E0B);
          color: #0F172A;
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 12px 32px rgba(245, 158, 11, 0.2);
        }

        .home-premium__cta-btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 48px rgba(245, 158, 11, 0.35);
        }

        .home-premium__cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 0.85rem 2rem;
          background: rgba(255, 255, 255, 0.06);
          color: #F1F5F9;
          font-weight: 600;
          font-size: 0.95rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 14px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .home-premium__cta-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          transform: translateY(-3px);
        }

        /* ===== RESPONSIVE ===== */
        @media (max-width: 1024px) {
          .home-premium__products-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .home-premium__testimonials-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .home-premium__container {
            padding: 0 16px;
          }
          .home-premium__hero {
            min-height: 80vh;
          }
          .home-premium__hero-title {
            font-size: 2rem;
          }
          .home-premium__products-grid {
            grid-template-columns: 1fr;
          }
          .home-premium__testimonials-grid {
            grid-template-columns: 1fr;
          }
          .home-premium__stats-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          .home-premium__why-grid {
            grid-template-columns: 1fr;
          }
          .home-premium__section-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          .home-premium__section-header--centered {
            align-items: center;
          }
          .home-premium__cta-card {
            padding: 2rem 1.5rem;
          }
          .home-premium__hero-actions {
            flex-direction: column;
            align-items: center;
          }
          .home-premium__hero-btn-primary,
          .home-premium__hero-btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .home-premium__hero {
            min-height: 70vh;
          }
          .home-premium__hero-title {
            font-size: 1.6rem;
          }
          .home-premium__hero-desc {
            font-size: 0.9rem;
          }
          .home-premium__product-card {
            padding: 1.5rem;
          }
          .home-premium__cta-actions {
            flex-direction: column;
            width: 100%;
          }
          .home-premium__cta-btn-primary,
          .home-premium__cta-btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  )
}