import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import * as LucideIcons from 'lucide-react'
import { categoryColors } from '../data/products'
import { api } from '../api'

interface Product {
  id: number
  name: string
  category: string
  icon: any
  description: string
  featured: boolean
  stat: string
}

export default function ProductsShowcase() {
  const [products, setProducts] = useState<Product[]>([])
  const [activeProduct, setActiveProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await api.getProducts('?featured=true')
        const mappedProducts = (data.results || data).map((item: any) => {
          const IconComponent = (LucideIcons as any)[item.icon || 'Package']
          return {
            id: item.id,
            name: item.name,
            category: item.category?.name || 'Product',
            icon: IconComponent || LucideIcons.Package,
            description: item.description || item.desc,
            featured: item.featured,
            stat: item.stat || 'Available',
          }
        })
        setProducts(mappedProducts)
        if (mappedProducts.length > 0) {
          setActiveProduct(mappedProducts[0])
        }
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  if (loading) {
    return (
      <section className="products-showcase">
        <div className="products-showcase-container">
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>Loading products...</div>
        </div>
      </section>
    )
  }

  if (!activeProduct || products.length === 0) {
    return (
      <section className="products-showcase">
        <div className="products-showcase-container">
          <div style={{ textAlign: 'center', padding: '4rem 0' }}>No products found.</div>
        </div>
      </section>
    )
  }

  const featuredProducts = products.filter(p => p.featured)

  return (
    <section className="products-showcase">
      <div className="products-showcase-container">
        <div className="products-showcase-header">
          <span className="products-showcase-badge">Our Products</span>
          <h2 className="products-showcase-title">
            Featured <span className="products-showcase-title-accent">Digital Products</span>
          </h2>
          <p className="products-showcase-subtitle">
            Explore our flagship solutions — industry-specific software built for African enterprises.
          </p>
        </div>

        <div className="products-showcase-grid">
          <div className="products-showcase-spotlight">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="products-showcase-card"
              >
                <div className="products-showcase-card-icon-wrapper">
                  <div className={`products-showcase-card-icon ${categoryColors[activeProduct.category] || ''}`}>
                    <activeProduct.icon className="products-showcase-card-icon-svg" />
                  </div>
                  <span className={`products-showcase-card-category ${categoryColors[activeProduct.category] || ''}`}>
                    {activeProduct.category}
                  </span>
                  <span className="products-showcase-card-stat">{activeProduct.stat}</span>
                </div>

                <h3 className="products-showcase-card-name">{activeProduct.name}</h3>
                <p className="products-showcase-card-description">{activeProduct.description}</p>

                <Link
                  to={`/contact?product=${encodeURIComponent(activeProduct.name)}`}
                  className="products-showcase-card-btn"
                >
                  Request Demo <ArrowRight size={16} />
                </Link>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="products-showcase-sidebar">
            {featuredProducts.map((product) => (
              <button
                key={product.id}
                onClick={() => setActiveProduct(product)}
                className={`products-showcase-sidebar-btn ${
                  activeProduct.id === product.id ? 'products-showcase-sidebar-btn--active' : ''
                }`}
              >
                <div className={`products-showcase-sidebar-btn-icon ${categoryColors[product.category] || ''}`}>
                  <product.icon className="products-showcase-sidebar-btn-icon-svg" />
                </div>
                <div className="products-showcase-sidebar-btn-content">
                  <span className="products-showcase-sidebar-btn-name">{product.name}</span>
                  <span className="products-showcase-sidebar-btn-category">{product.category}</span>
                </div>
                {activeProduct.id === product.id && <div className="products-showcase-sidebar-btn-dot" />}
              </button>
            ))}

            <Link to="/products" className="products-showcase-view-all">
              View All {products.length} Products →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .products-showcase {
          padding: 5rem 0;
          background: #F8FAFC;
          border-top: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }

        .products-showcase-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        .products-showcase-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .products-showcase-badge {
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

        .products-showcase-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2rem, 3.5vw, 2.8rem);
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }

        .products-showcase-title-accent {
          background: linear-gradient(135deg, #2563EB, #8B5CF6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .products-showcase-subtitle {
          font-size: 1rem;
          color: #64748B;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        .products-showcase-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          align-items: stretch;
        }

        .products-showcase-spotlight {
          display: flex;
        }

        .products-showcase-card {
          background: #FFFFFF;
          border: 1px solid #E2E8F0;
          border-radius: 20px;
          padding: 2.5rem;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          display: flex;
          flex-direction: column;
          width: 100%;
          transition: all 0.3s ease;
        }

        .products-showcase-card:hover {
          box-shadow: 0 12px 40px rgba(0, 0, 0, 0.06);
          border-color: #C7D2FE;
        }

        .products-showcase-card-icon-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.25rem;
          flex-wrap: wrap;
        }

        .products-showcase-card-icon {
          padding: 0.75rem;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .products-showcase-card-icon-svg {
          width: 28px;
          height: 28px;
        }

        .products-showcase-card-category {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
        }

        .products-showcase-card-stat {
          font-size: 0.8rem;
          font-weight: 700;
          color: #2563EB;
          margin-left: auto;
          background: #DBEAFE;
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
        }

        .products-showcase-card-name {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.75rem;
        }

        .products-showcase-card-description {
          font-size: 0.95rem;
          color: #64748B;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 1.5rem;
        }

        .products-showcase-card-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          background: linear-gradient(135deg, #2563EB, #8B5CF6);
          border: none;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.9rem;
          color: #fff;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 30px rgba(37, 99, 235, 0.2);
          width: fit-content;
        }

        .products-showcase-card-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 40px rgba(37, 99, 235, 0.3);
        }

        .products-showcase-sidebar {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          justify-content: center;
        }

        .products-showcase-sidebar-btn {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.25rem;
          border-radius: 14px;
          border: 2px solid #E2E8F0;
          background: #FFFFFF;
          transition: all 0.3s ease;
          cursor: pointer;
          width: 100%;
          text-align: left;
        }

        .products-showcase-sidebar-btn:hover {
          border-color: #C7D2FE;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        .products-showcase-sidebar-btn--active {
          border-color: #4F46E5;
          background: #F8FAFC;
          box-shadow: 0 4px 16px rgba(37, 99, 235, 0.08);
        }

        .products-showcase-sidebar-btn-icon {
          padding: 0.5rem;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .products-showcase-sidebar-btn-icon-svg {
          width: 20px;
          height: 20px;
        }

        .products-showcase-sidebar-btn-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .products-showcase-sidebar-btn-name {
          font-size: 0.9rem;
          font-weight: 600;
          color: #0F172A;
        }

        .products-showcase-sidebar-btn-category {
          font-size: 0.7rem;
          color: #94A3B8;
        }

        .products-showcase-sidebar-btn-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #4F46E5;
          flex-shrink: 0;
        }

        .products-showcase-view-all {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.85rem;
          background: #FFFFFF;
          border: 2px solid #E2E8F0;
          border-radius: 14px;
          font-size: 0.85rem;
          font-weight: 600;
          color: #475569;
          text-decoration: none;
          transition: all 0.3s ease;
          margin-top: 0.25rem;
        }

        .products-showcase-view-all:hover {
          border-color: #4F46E5;
          color: #4F46E5;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
        }

        @media (max-width: 1024px) {
          .products-showcase-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .products-showcase-sidebar {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 0.75rem;
          }

          .products-showcase-sidebar-btn {
            padding: 0.75rem 1rem;
          }

          .products-showcase-view-all {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .products-showcase-sidebar {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .products-showcase {
            padding: 3rem 0;
          }

          .products-showcase-container {
            padding: 0 1rem;
          }

          .products-showcase-title {
            font-size: 1.6rem;
          }

          .products-showcase-card {
            padding: 1.5rem;
          }

          .products-showcase-card-icon-wrapper {
            flex-wrap: wrap;
          }

          .products-showcase-card-stat {
            margin-left: 0;
          }

          .products-showcase-card-name {
            font-size: 1.25rem;
          }

          .products-showcase-card-btn {
            width: 100%;
            justify-content: center;
          }

          .products-showcase-sidebar {
            grid-template-columns: 1fr;
          }

          .products-showcase-sidebar-btn {
            padding: 0.75rem 1rem;
          }
        }
      `}</style>
    </section>
  )
}