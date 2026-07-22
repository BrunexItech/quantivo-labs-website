import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, CreditCard, Wallet, ShoppingCart, Calendar,
  Building2, Share2, PhoneCall, ShoppingBag, Hotel,
  GraduationCap, Hospital, Landmark, CheckCircle2, BarChart2,
  Users2, Banknote, Server, ClipboardList, Sparkles,
  Rocket, Zap, Layers, Grid3X3, ChevronDown, ChevronUp, Eye
} from 'lucide-react'
import { api } from '../api'

interface Category {
  id: string
  name: string
  emoji: string
  color: string
  bgColor: string
  image: string
  description: string
}

interface Product {
  id: number
  name: string
  tag: string
  tagClass: string
  desc: string
  features: string[]
  stack: string[]
  category: string
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [activePill, setActivePill] = useState<string>('all')
  const [isPillMode, setIsPillMode] = useState<boolean>(false)
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const mapCategoryToFrontend = (backendCategory: any): Category => {
    return {
      id: String(backendCategory.id),
      name: backendCategory.name,
      emoji: backendCategory.icon || '📦',
      color: backendCategory.color || '#2563EB',
      bgColor: `${backendCategory.color || '#2563EB'}12`,
      image: backendCategory.image || 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
      description: backendCategory.description || ''
    }
  }

  const mapProductToFrontend = (backendProduct: any): Product => {
    return {
      id: backendProduct.id,
      name: backendProduct.name,
      tag: backendProduct.tag || 'Product',
      tagClass: backendProduct.tag_class || 'pill-purple',
      desc: backendProduct.desc || backendProduct.description || '',
      features: backendProduct.features || [],
      stack: backendProduct.stack || [],
      category: backendProduct.category?.name || 'Uncategorized'
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(null)
        
        const [productsData, categoriesData] = await Promise.all([
          api.getProducts(),
          api.getCategories()
        ])
        
        console.log('Products data from backend:', productsData)
        console.log('Categories data from backend:', categoriesData)
        
        const productList = productsData.results || productsData || []
        const categoryList = categoriesData.results || categoriesData || []
        
        const mappedProducts = productList.map(mapProductToFrontend)
        const mappedCategories = categoryList.map(mapCategoryToFrontend)
        
        setProducts(mappedProducts)
        setCategories(mappedCategories)
        
        if (mappedCategories.length > 0) {
          setExpandedCategory(mappedCategories[0].id)
        }
        
      } catch (error) {
        console.error('Error fetching data:', error)
        setError('Failed to load products. Please try again later.')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId)
  }

  const handlePillClick = (categoryId: string) => {
    setActivePill(categoryId)
    
    if (categoryId === 'all') {
      setIsPillMode(false)
      setExpandedCategory(null)
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    setIsPillMode(true)
    setExpandedCategory(categoryId)

    setTimeout(() => {
      const ref = categoryRefs.current[categoryId]
      if (ref) {
        const navbarHeight = 160
        const elementPosition = ref.getBoundingClientRect().top + window.pageYOffset
        const offsetPosition = elementPosition - navbarHeight
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      }
    }, 100)
  }

  const getProductsByCategory = (categoryName: string) => {
    return products.filter(p => p.category === categoryName)
  }

  // Hero section - always visible, never changes
  const heroSection = (
    <section className="products-hero">
      <div className="products-hero__bg">
        <img 
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=815&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Digital transformation background"
          className="products-hero__bg-image"
        />
        <div className="products-hero__overlay" />
      </div>
      <div className="products-hero__container">
        <div className="products-hero__content">
          <div className="products-hero__tag">
            <span>Our Products</span>
          </div>
          <h1 className="products-hero__title">
            Building Africa's<br />
            <span className="products-gradient">Digital Future</span>
          </h1>
          <p className="products-hero__desc">
            A growing portfolio of intelligent platforms designed to power businesses across industries.
          </p>
          <div className="products-hero__actions">
            <Link to="/contact" className="products-btn-primary">
              Explore Solutions <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="products-btn-secondary">
              Request Demo
            </Link>
          </div>
        </div>
        <div className="products-hero__stats">
          <div className="products-stat">
            <span className="products-stat__number">{loading ? '...' : products.length}</span>
            <span className="products-stat__label">Products</span>
          </div>
          <div className="products-stat">
            <span className="products-stat__number">{loading ? '...' : categories.length}</span>
            <span className="products-stat__label">Categories</span>
          </div>
          <div className="products-stat">
            <span className="products-stat__number">100+</span>
            <span className="products-stat__label">Clients</span>
          </div>
        </div>
      </div>
    </section>
  )

  if (error) {
    return (
      <div className="products-page">
        {heroSection}
        <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
          <div style={{ color: '#DC2626', marginBottom: '1rem' }}>⚠️ {error}</div>
          <button 
            onClick={() => window.location.reload()}
            style={{
              padding: '0.5rem 1.5rem',
              background: '#2563EB',
              color: '#FFFFFF',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="products-page">
      {/* Hero always visible - loads instantly */}
      {heroSection}

      {/* ===== CATEGORY NAVIGATION PILLS ===== */}
      <section className="products-nav-section">
        <div className="container">
          <div className="products-nav">
            <button
              className={`products-nav__pill ${activePill === 'all' ? 'products-nav__pill--active' : ''}`}
              onClick={() => handlePillClick('all')}
            >
              <span>📋</span>
              All
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                className={`products-nav__pill ${activePill === category.id ? 'products-nav__pill--active' : ''}`}
                onClick={() => handlePillClick(category.id)}
                style={activePill === category.id ? { 
                  background: category.color, 
                  color: '#FFFFFF',
                  borderColor: category.color 
                } : {}}
              >
                <span>{category.emoji}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CATEGORY CARDS ===== */}
      <section className="products-categories-section">
        <div className="container">
          {loading ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{ fontSize: '1.1rem', color: '#64748B' }}>Loading products...</div>
            </div>
          ) : products.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{ fontSize: '1.1rem', color: '#64748B' }}>No products found.</div>
            </div>
          ) : categories.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{ fontSize: '1.1rem', color: '#64748B' }}>No categories configured yet.</div>
            </div>
          ) : (
            <div className="products-categories-grid">
              {categories.map((category) => {
                const isExpanded = expandedCategory === category.id
                const categoryProducts = getProductsByCategory(category.name)
                const productCount = categoryProducts.length
                
                const shouldHide = isPillMode && activePill !== category.id

                return (
                  <div 
                    key={category.id} 
                    ref={(el) => (categoryRefs.current[category.id] = el)}
                    className={`products-category-card ${isExpanded ? 'products-category-card--expanded' : ''} ${shouldHide ? 'products-category-card--hidden' : ''}`}
                    style={{ '--category-color': category.color } as React.CSSProperties}
                  >
                    <div 
                      className="products-category-card__header"
                      onClick={() => toggleCategory(category.id)}
                    >
                      <div className="products-category-card__image">
                        <img src={category.image} alt={category.name} />
                        <div className="products-category-card__overlay" style={{ background: `linear-gradient(135deg, ${category.color}cc, ${category.color}66)` }} />
                        <div className="products-category-card__badge">
                          <span className="products-category-card__emoji">{category.emoji}</span>
                          <span className="products-category-card__count">{productCount} products</span>
                        </div>
                      </div>
                      <div className="products-category-card__info">
                        <div className="products-category-card__name" style={{ color: category.color }}>
                          {category.name}
                        </div>
                        <p className="products-category-card__description">{category.description}</p>
                        <div className="products-category-card__toggle">
                          <Eye size={16} className="products-category-card__toggle-icon" />
                          <span className="products-category-card__toggle-text">
                            {isExpanded ? 'Hide Products' : `View ${productCount} Products`}
                          </span>
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </div>
                    </div>

                    {/* Expanded Products */}
                    {isExpanded && (
                      <div className="products-category-card__products">
                        <div className="products-category-card__products-grid">
                          {categoryProducts.map((product) => (
                            <div key={product.id} className="products-category-card__product">
                              <div className="products-category-card__product-icon">
                                <BarChart2 size={26} />
                              </div>
                              <div className="products-category-card__product-content">
                                <div className="products-category-card__product-header">
                                  <h4 className="products-category-card__product-name">{product.name}</h4>
                                  <span className={`products-pill ${product.tagClass}`}>{product.tag}</span>
                                </div>
                                <p className="products-category-card__product-desc">{product.desc}</p>
                                <div className="products-category-card__product-features">
                                  {product.features.slice(0, 3).map((f: string) => (
                                    <div key={f} className="products-category-card__product-feature">
                                      <CheckCircle2 size={12} color={category.color} />
                                      <span>{f}</span>
                                    </div>
                                  ))}
                                </div>
                                <Link to="/contact" className="products-category-card__product-link">
                                  Learn More <ArrowRight size={14} />
                                </Link>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <style>{`
        /* ============================================================
           PRODUCTS PAGE - CATEGORY BASED
           ============================================================ */
        
        .products-page {
          --prod-primary: #0c1a3a;
          --prod-accent: #f9734e;
          --prod-accent-glow: rgba(249, 115, 78, 0.3);
          --prod-bg: #f6f9fc;
          --prod-card-bg: #ffffff;
          --prod-border: rgba(12, 26, 58, 0.06);
          --prod-shadow: 0 12px 40px -12px rgba(12, 26, 58, 0.08);
          --prod-shadow-hover: 0 24px 64px -16px rgba(12, 26, 58, 0.14);
          --prod-radius: 20px;
          --prod-transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0c1a3a;
          background: var(--prod-bg);
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ----- GRADIENT TEXT ----- */
        .products-gradient {
          background: linear-gradient(145deg, #f9734e 0%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ============================================================
           HERO - FULL SCREEN WITH STATIC IMAGE
           ============================================================ */
        .products-hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .products-hero__bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
        }

        .products-hero__bg-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .products-hero__overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(12, 26, 58, 0.88) 0%, rgba(12, 26, 58, 0.4) 50%, rgba(12, 26, 58, 0.75) 100%);
          z-index: 1;
        }

        .products-hero__container {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 28px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        .products-hero__content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .products-hero__tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 8px 24px;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.7);
          letter-spacing: 0.04em;
          margin-bottom: 1rem;
        }

        .products-hero__title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800;
          line-height: 1.1;
          color: #ffffff;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }

        .products-hero__desc {
          font-size: clamp(0.95rem, 1.2vw, 1.1rem);
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.7);
          max-width: 600px;
          margin: 0 auto 1.5rem;
        }

        .products-hero__actions {
          display: flex;
          align-items: center;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .products-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--prod-accent);
          color: white;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 60px;
          text-decoration: none;
          transition: var(--prod-transition);
          font-size: 0.9rem;
          border: none;
          box-shadow: 0 12px 32px -8px rgba(249, 115, 78, 0.35);
        }

        .products-btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 20px 48px -12px rgba(249, 115, 78, 0.45);
        }

        .products-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: rgba(255, 255, 255, 0.06);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: white;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 60px;
          text-decoration: none;
          transition: var(--prod-transition);
          font-size: 0.9rem;
        }

        .products-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
        }

        .products-hero__stats {
          display: flex;
          gap: 3rem;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          justify-content: center;
          flex-wrap: wrap;
        }

        .products-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .products-stat__number {
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .products-stat__label {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.5);
          font-weight: 500;
          margin-top: 2px;
        }

        /* ============================================================
           CATEGORY NAVIGATION PILLS
           ============================================================ */
        .products-nav-section {
          padding: 1.5rem 0;
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
          position: sticky;
          top: 72px;
          z-index: 20;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .products-nav {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .products-nav__pill {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1.25rem;
          border-radius: 100px;
          border: 1.5px solid #E2E8F0;
          background: #FFFFFF;
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
          cursor: pointer;
          transition: all 0.3s ease;
          white-space: nowrap;
        }

        .products-nav__pill:hover {
          border-color: #94A3B8;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .products-nav__pill span {
          font-size: 1rem;
        }

        .products-nav__pill--active {
          border-color: #2563EB;
          background: #2563EB;
          color: #FFFFFF;
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.15);
        }

        .products-nav__pill--active:hover {
          box-shadow: 0 6px 24px rgba(37, 99, 235, 0.25);
        }

        /* ============================================================
           CATEGORY SECTION
           ============================================================ */
        .products-categories-section {
          padding: 3rem 0 5rem;
        }

        .products-categories-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
        }

        /* ============================================================
           CATEGORY CARD
           ============================================================ */
        .products-category-card {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          overflow: hidden;
          transition: all 0.4s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .products-category-card--hidden {
          display: none;
        }

        .products-category-card:hover {
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.06);
        }

        .products-category-card--expanded {
          border-color: var(--category-color);
          box-shadow: 0 8px 40px rgba(0, 0, 0, 0.08);
        }

        .products-category-card__header {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .products-category-card__image {
          position: relative;
          height: 220px;
          overflow: hidden;
          flex-shrink: 0;
        }

        .products-category-card__image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .products-category-card:hover .products-category-card__image img {
          transform: scale(1.03);
        }

        .products-category-card__overlay {
          position: absolute;
          inset: 0;
          opacity: 0.4;
        }

        .products-category-card__badge {
          position: absolute;
          bottom: 0.75rem;
          left: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.3rem 0.8rem;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(8px);
          border-radius: 100px;
          color: #FFFFFF;
          font-size: 0.7rem;
          font-weight: 600;
        }

        .products-category-card__emoji {
          font-size: 0.9rem;
        }

        .products-category-card__count {
          font-size: 0.65rem;
          opacity: 0.8;
        }

        .products-category-card__info {
          padding: 1.5rem 1.5rem 1.5rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .products-category-card__name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .products-category-card__description {
          font-size: 0.9rem;
          color: #64748B;
          line-height: 1.7;
          margin-bottom: 1rem;
        }

        .products-category-card__toggle {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.6rem 1.25rem;
          background: var(--category-color);
          color: #FFFFFF;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 700;
          transition: all 0.3s ease;
          width: fit-content;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
          cursor: pointer;
          border: none;
        }

        .products-category-card__toggle:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
        }

        .products-category-card__toggle-icon {
          opacity: 0.9;
        }

        .products-category-card__toggle-text {
          font-size: 0.8rem;
          letter-spacing: 0.02em;
        }

        .products-category-card__toggle svg:last-child {
          opacity: 0.8;
        }

        /* ============================================================
           CATEGORY PRODUCTS (EXPANDED)
           ============================================================ */
        .products-category-card__products {
          border-top: 1px solid #E2E8F0;
          padding: 2rem;
          animation: productsSlideDown 0.4s ease;
        }

        @keyframes productsSlideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .products-category-card__products-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 1.5rem;
        }

        .products-category-card__product {
          display: flex;
          gap: 1rem;
          padding: 1.25rem;
          background: #F8FAFC;
          border-radius: 14px;
          border: 1px solid #E2E8F0;
          transition: all 0.3s ease;
        }

        .products-category-card__product:hover {
          background: #FFFFFF;
          border-color: #CBD5E1;
          transform: translateY(-2px);
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
        }

        .products-category-card__product-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #EEF2FF;
          color: #1E3A8A;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .products-category-card__product-content {
          flex: 1;
          min-width: 0;
        }

        .products-category-card__product-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
          margin-bottom: 0.3rem;
        }

        .products-category-card__product-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 0.95rem;
          font-weight: 700;
          color: #0F172A;
        }

        .products-pill {
          display: inline-block;
          font-size: 0.55rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          padding: 2px 10px;
          border-radius: 40px;
          background: #eef2f6;
          color: #4a5f7a;
          flex-shrink: 0;
        }

        .pill-red { background: #fee8e6; color: #c2412c; }
        .pill-indigo { background: #e2e9ff; color: #284b9c; }
        .pill-cyan { background: #dcf5fa; color: #0c6b7a; }
        .pill-emerald { background: #ddf5e9; color: #0d6b48; }
        .pill-rose { background: #fde8ed; color: #b33f5a; }
        .pill-teal { background: #d4f0f0; color: #0a6b6b; }
        .pill-amber { background: #fef3e0; color: #b8681a; }
        .pill-purple { background: #ede7ff; color: #5b33a4; }
        .pill-gold { background: #fef7d9; color: #a67c00; }

        .products-category-card__product-desc {
          font-size: 0.8rem;
          color: #64748B;
          line-height: 1.6;
          margin-bottom: 0.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .products-category-card__product-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem 0.8rem;
          margin-bottom: 0.5rem;
        }

        .products-category-card__product-feature {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.7rem;
          color: #475569;
        }

        .products-category-card__product-link {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          font-size: 0.75rem;
          font-weight: 600;
          color: var(--category-color, #2563EB);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .products-category-card__product-link:hover {
          gap: 0.6rem;
        }

        /* ============================================================
           RESPONSIVE
           ============================================================ */
        @media (max-width: 1024px) {
          .products-category-card__header {
            grid-template-columns: 200px 1fr;
          }
          .products-category-card__image {
            height: 180px;
          }
        }

        @media (max-width: 820px) {
          .products-category-card__header {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .products-category-card__image {
            height: 160px;
            width: 100%;
          }
          .products-category-card__info {
            padding: 1.25rem;
            align-items: center;
            text-align: center;
          }
          .products-category-card__description {
            text-align: center;
          }
          .products-category-card__toggle {
            margin: 0 auto;
          }
          .products-category-card__products-grid {
            grid-template-columns: 1fr;
          }
          .products-hero {
            min-height: 80vh;
          }
          .products-hero__container {
            min-height: 80vh;
            padding: 0 20px;
          }
          .products-hero__title {
            font-size: 2.2rem;
          }
          .products-hero__stats {
            gap: 1.5rem;
          }
          .products-stat__number {
            font-size: 1.4rem;
          }
          .products-nav-section {
            top: 64px;
            padding: 1rem 0;
          }
          .products-nav {
            gap: 0.4rem;
          }
          .products-nav__pill {
            padding: 0.4rem 1rem;
            font-size: 0.7rem;
          }
          .products-nav__pill span {
            font-size: 0.8rem;
          }
        }

        @media (max-width: 640px) {
          .container {
            padding: 0 16px;
          }
          .products-hero {
            min-height: 70vh;
          }
          .products-hero__container {
            min-height: 70vh;
            padding: 0 16px;
          }
          .products-hero__title {
            font-size: 1.8rem;
          }
          .products-hero__desc {
            font-size: 0.9rem;
          }
          .products-hero__actions {
            flex-direction: column;
            width: 100%;
          }
          .products-btn-primary,
          .products-btn-secondary {
            width: 100%;
            justify-content: center;
            padding: 10px 20px;
            font-size: 0.85rem;
          }
          .products-hero__stats {
            gap: 1rem;
            padding-top: 1rem;
            margin-top: 1.5rem;
          }
          .products-stat__number {
            font-size: 1.2rem;
          }
          .products-stat__label {
            font-size: 0.65rem;
          }
          .products-categories-section {
            padding: 2rem 0 3rem;
          }
          .products-category-card__image {
            height: 140px;
          }
          .products-category-card__name {
            font-size: 1.1rem;
          }
          .products-category-card__products {
            padding: 1rem;
          }
          .products-category-card__product {
            flex-direction: column;
            align-items: flex-start;
          }
          .products-category-card__product-header {
            flex-direction: column;
            align-items: flex-start;
          }
          .products-category-card__product-features {
            flex-direction: column;
            gap: 0.2rem;
          }
          .products-category-card__toggle {
            padding: 0.5rem 1rem;
            font-size: 0.7rem;
            gap: 0.4rem;
          }
          .products-category-card__toggle-text {
            font-size: 0.7rem;
          }
          .products-nav-section {
            padding: 0.75rem 0;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          .products-nav {
            flex-wrap: nowrap;
            justify-content: flex-start;
            gap: 0.4rem;
            padding: 0 4px;
            overflow-x: auto;
          }
          .products-nav__pill {
            flex-shrink: 0;
            padding: 0.35rem 0.8rem;
            font-size: 0.65rem;
          }
          .products-nav__pill span {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 480px) {
          .products-hero {
            min-height: 60vh;
          }
          .products-hero__container {
            min-height: 60vh;
          }
          .products-hero__title {
            font-size: 1.5rem;
          }
          .products-hero__desc {
            font-size: 0.85rem;
          }
          .products-hero__stats {
            gap: 0.75rem;
          }
          .products-stat__number {
            font-size: 1.1rem;
          }
          .products-stat__label {
            font-size: 0.6rem;
          }
          .products-category-card__image {
            height: 120px;
          }
          .products-category-card__badge {
            font-size: 0.6rem;
            padding: 0.2rem 0.6rem;
          }
          .products-category-card__description {
            font-size: 0.8rem;
          }
          .products-category-card__toggle {
            padding: 0.4rem 0.8rem;
            font-size: 0.65rem;
          }
          .products-nav__pill {
            padding: 0.3rem 0.6rem;
            font-size: 0.6rem;
          }
          .products-nav__pill span {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </div>
  )
}