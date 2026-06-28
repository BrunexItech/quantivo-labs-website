import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowRight, CreditCard, Wallet, ShoppingCart, Calendar,
  Building2, Share2, PhoneCall, ShoppingBag, Hotel,
  GraduationCap, Hospital, Landmark, CheckCircle2, BarChart2,
  Users2, Banknote, Server, ClipboardList, Sparkles,
  Rocket, Zap, Layers, Grid3X3, ChevronDown, ChevronUp, Eye
} from 'lucide-react'

const products = [
  {
    icon: <BarChart2 size={26} />,
    name: 'QuantivoCRM',
    tag: 'CRM / AI', tagClass: 'pill-red',
    desc: 'The first AI-powered CRM built from the ground up for African enterprises. Manage leads, deals, and customer journeys with M-Pesa integration, multilingual AI follow-ups, and a 360° client view — all in one platform.',
    features: ['360° contact & deal tracking', 'M-Pesa transaction sync', 'AI-drafted follow-up emails/SMS', 'Drag-and-drop sales pipeline', 'Forecasting & team dashboards', 'WhatsApp & Gmail integration'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'OpenAI', 'M-Pesa'],
    category: 'Business & Management'
  },
  {
    icon: <Landmark size={26} />,
    name: 'DFS — Digital Financial Services',
    tag: 'Digital Finance', tagClass: 'pill-indigo',
    desc: 'A comprehensive digital financial services platform integrating mobile money, banking APIs, agent banking networks, and digital lending for the modern African financial ecosystem.',
    features: ['Mobile money integration', 'Agent banking network', 'Digital lending engine', 'KYC & compliance', 'Real-time reporting', 'Multi-channel access'],
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'M-Pesa', 'AWS'],
    category: 'Fintech & Payments'
  },
  {
    icon: <CreditCard size={26} />,
    name: 'PSP — Payment Service Provider',
    tag: 'Fintech', tagClass: 'pill-cyan',
    desc: 'Secure, scalable payment processing infrastructure for businesses of all sizes. Accept payments via cards, mobile money, and bank transfers with enterprise-grade reliability.',
    features: ['Multi-currency support', 'Real-time fraud detection', 'M-Pesa & Paystack', 'PCI-DSS compliant', 'Merchant dashboard', 'Settlement reports'],
    stack: ['Node.js', 'PostgreSQL', 'Redis', 'AWS Lambda'],
    category: 'Fintech & Payments'
  },
  {
    icon: <Wallet size={26} />,
    name: 'Digital Wallet',
    tag: 'Fintech', tagClass: 'pill-cyan',
    desc: 'Mobile and web-based digital payment solution with deep M-Pesa integration. Send, receive, and store money with a seamless, secure user experience.',
    features: ['M-Pesa integration', 'P2P transfers', 'QR code payments', 'Transaction history', 'Multi-wallet support', 'KYC verification'],
    stack: ['React Native', 'Node.js', 'MongoDB', 'GCP'],
    category: 'Fintech & Payments'
  },
  {
    icon: <GraduationCap size={26} />,
    name: 'School Management System',
    tag: 'EduTech', tagClass: 'pill-emerald',
    desc: 'End-to-end school administration platform covering student enrollment, fee collection, attendance, timetabling, examinations, and parent communication — all in one place.',
    features: ['Student registration & profiles', 'Fee billing & M-Pesa payments', 'Attendance tracking', 'Timetable management', 'Exam results portal', 'Parent communication portal'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Twilio', 'M-Pesa'],
    category: 'Business & Management'
  },
  {
    icon: <Hospital size={26} />,
    name: 'Hospital Management System',
    tag: 'HealthTech', tagClass: 'pill-rose',
    desc: 'A complete hospital operations platform covering patient registration, OPD/IPD management, pharmacy, lab, billing, and insurance claims for healthcare facilities of any size.',
    features: ['Patient registration & EMR', 'OPD & IPD management', 'Pharmacy module', 'Lab & radiology', 'Insurance claims', 'Revenue analytics'],
    stack: ['React', 'Django', 'PostgreSQL', 'HL7 FHIR', 'AWS'],
    category: 'Business & Management'
  },
  {
    icon: <ShoppingBag size={26} />,
    name: 'POS — Point of Sale System',
    tag: 'Retail', tagClass: 'pill-teal',
    desc: 'Cloud-based point-of-sale system built for retail businesses. Accept payments, manage inventory, track sales, and generate reports — from any device, online or offline.',
    features: ['Offline-first architecture', 'Multi-terminal support', 'Inventory management', 'Receipt printing', 'Staff & shift management', 'Sales analytics'],
    stack: ['Electron', 'React', 'Node.js', 'SQLite', 'PostgreSQL'],
    category: 'Hospitality & Retail'
  },
  {
    icon: <Hotel size={26} />,
    name: 'Hotel POS',
    tag: 'Hospitality', tagClass: 'pill-amber',
    desc: 'An integrated point-of-sale solution designed specifically for hotels — connecting the restaurant, bar, room service, spa, and front desk into a single unified billing system.',
    features: ['Room charge posting', 'Multi-outlet billing', 'Split bill management', 'Real-time stock control', 'Shift reconciliation', 'Revenue reports by outlet'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Thermal Print API'],
    category: 'Hospitality & Retail'
  },
  {
    icon: <Hotel size={26} />,
    name: 'Hotel Management System',
    tag: 'Hospitality', tagClass: 'pill-amber',
    desc: 'Complete hotel operations management covering reservations, housekeeping, billing, channel management, and guest experience from check-in to check-out.',
    features: ['PMS & reservations', 'Channel manager (OTA sync)', 'Housekeeping module', 'Guest self-check-in', 'Revenue analytics', 'Multi-property support'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Booking.com API', 'AWS'],
    category: 'Hospitality & Retail'
  },
  {
    icon: <ShoppingCart size={26} />,
    name: 'Ecommerce Platform',
    tag: 'Commerce', tagClass: 'pill-teal',
    desc: 'Full-stack online shopping platform with integrated payment APIs, AI-powered recommendations, and multi-vendor marketplace capabilities.',
    features: ['Product catalog & CMS', 'Cart & secure checkout', 'Payment gateway integrations', 'Inventory management', 'Seller marketplace', 'Analytics dashboard'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Cloudinary'],
    category: 'Hospitality & Retail'
  },
  {
    icon: <Calendar size={26} />,
    name: 'Booking Solutions',
    tag: 'SaaS', tagClass: 'pill-purple',
    desc: 'Reservation and scheduling system for service-based businesses. Manage appointments, resources, staff availability, and customer bookings with intelligent automation.',
    features: ['Online self-booking', 'Calendar sync', 'Automated SMS reminders', 'Staff management', 'Payment collection', 'Customer portal'],
    stack: ['React', 'Python', 'PostgreSQL', 'Twilio', 'Stripe'],
    category: 'Hospitality & Retail'
  },
  {
    icon: <Building2 size={26} />,
    name: 'Sacco Management System',
    tag: 'Finance', tagClass: 'pill-gold',
    desc: 'Comprehensive financial management platform for SACCOs. Manage members, loans, savings, dividends, and compliance from a single unified dashboard.',
    features: ['Member registry', 'Loan origination & tracking', 'Dividend calculation', 'Mobile banking for members', 'Compliance reports', 'SMS & email notifications'],
    stack: ['React', 'Django', 'PostgreSQL', 'Celery', 'AWS RDS'],
    category: 'Business & Management'
  },
  {
    icon: <Share2 size={26} />,
    name: 'Viral Blast',
    tag: 'AI Tool', tagClass: 'pill-purple',
    desc: 'AI-powered social media strategy and content creation platform. Generate, schedule, and analyse campaigns that resonate with your target audience and drive organic reach.',
    features: ['AI content generation', 'Viral score prediction', 'Multi-platform scheduling', 'Analytics & insights', 'A/B testing', 'Competitor analysis'],
    stack: ['React', 'Python', 'OpenAI API', 'Redis', 'Meta APIs'],
    category: 'AI & Automation'
  },
  {
    icon: <Users2 size={26} />,
    name: 'Chama Management System',
    tag: 'Finance', tagClass: 'pill-emerald',
    desc: 'A dedicated digital platform for managing investment groups (chamas), SHGs, and table banking circles. Automate contributions, loans, interest calculations, fines, and dividend payouts — with full M-Pesa integration and transparent member reporting.',
    features: ['Member registration & profiles', 'Automated M-Pesa contributions', 'Loan & interest management', 'Fine & penalty tracking', 'Dividend & share distribution', 'Meeting minutes & voting records', 'Real-time member statements', 'SMS & WhatsApp notifications'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'M-Pesa', 'Twilio', 'AWS'],
    category: 'Business & Management'
  },
  {
    icon: <Banknote size={26} />,
    name: 'Agency Banking Platform',
    tag: 'Digital Finance', tagClass: 'pill-indigo',
    desc: 'A white-label agency banking solution enabling banks, MFIs, and fintechs to deploy agent networks that bring financial services to the last mile. Agents handle deposits, withdrawals, account opening, and loan disbursements from any mobile device.',
    features: ['Agent onboarding & KYC', 'Cash deposit & withdrawal', 'Fund transfers & bill payments', 'Loan disbursement via agents', 'Agent float management', 'Real-time transaction monitoring', 'Commission & settlement engine', 'Offline transaction queuing'],
    stack: ['React Native', 'Node.js', 'PostgreSQL', 'M-Pesa', 'Redis', 'AWS'],
    category: 'Fintech & Payments'
  },
  {
    icon: <Server size={26} />,
    name: 'Cloud Hosting & Infrastructure',
    tag: 'Cloud', tagClass: 'pill-cyan',
    desc: 'Managed cloud hosting and DevOps services purpose-built for African businesses. From shared hosting to dedicated cloud infrastructure on AWS and GCP — with local support, guaranteed uptime SLAs, and automated backups.',
    features: ['Managed AWS / GCP hosting', 'Auto-scaling & load balancing', 'SSL certificates & CDN', 'Daily automated backups', 'CI/CD pipeline setup', '24/7 infrastructure monitoring', 'Database management (PostgreSQL, MySQL, MongoDB)', 'Domain registration & DNS management'],
    stack: ['AWS', 'GCP', 'Docker', 'Kubernetes', 'Terraform', 'Nginx'],
    category: 'Cloud & Infrastructure'
  },
  {
    icon: <ClipboardList size={26} />,
    name: 'Project Management Platform',
    tag: 'Productivity', tagClass: 'pill-purple',
    desc: 'A collaborative project management platform built for African enterprises and government agencies. Plan, track, and deliver projects on time with task boards, Gantt charts, resource planning, budgeting, and real-time team collaboration — all in one workspace.',
    features: ['Project & task boards (Kanban / Gantt)', 'Milestone & deadline tracking', 'Resource & workload planning', 'Budget tracking & cost reporting', 'Team collaboration & file sharing', 'Risk register & issue tracking', 'Custom dashboards & progress reports', 'Client portal & stakeholder updates'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'WebSockets', 'AWS', 'Redis'],
    category: 'Business & Management'
  },
  {
    icon: <PhoneCall size={26} />,
    name: 'AI Call Center',
    tag: 'AI', tagClass: 'pill-purple',
    desc: 'Intelligent customer service automation with multilingual support. Handle high call volumes with AI-powered voice agents that understand and respond naturally in English and Swahili.',
    features: ['Voice AI agents (EN + SW)', 'Sentiment analysis', 'CRM integration', 'Smart escalation', 'Live transfer to agents', 'Quality scoring dashboard'],
    stack: ['Python', 'Whisper ASR', 'GPT-4', 'Twilio', 'FastAPI'],
    category: 'AI & Automation'
  },
]

const categories = [
  {
    id: 'fintech',
    name: 'Fintech & Payments',
    emoji: '💳',
    color: '#2563EB',
    bgColor: '#DBEAFE',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
    description: 'Digital payment solutions, mobile money integration, and financial infrastructure for the modern African economy.'
  },
  {
    id: 'business',
    name: 'Business & Management',
    emoji: '🏢',
    color: '#7C3AED',
    bgColor: '#EDE9FE',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
    description: 'Comprehensive management platforms for CRM, education, healthcare, SACCOs, and project delivery.'
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Retail',
    emoji: '🏨',
    color: '#F59E0B',
    bgColor: '#FEF3C7',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    description: 'Point-of-sale systems, hotel management, ecommerce, and booking solutions for the service industry.'
  },
  {
    id: 'ai',
    name: 'AI & Automation',
    emoji: '🤖',
    color: '#EC4899',
    bgColor: '#FCE7F3',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80',
    description: 'Intelligent automation, AI-powered content generation, and smart customer service solutions.'
  },
  {
    id: 'cloud',
    name: 'Cloud & Infrastructure',
    emoji: '☁️',
    color: '#06B6D4',
    bgColor: '#CFFAFE',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    description: 'Scalable cloud hosting, DevOps infrastructure, and managed services for enterprise-grade reliability.'
  }
]

export default function Products() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null)
  const [activePill, setActivePill] = useState<string>('all')
  const [isPillMode, setIsPillMode] = useState<boolean>(false)
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

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

    // Scroll to the category card
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

  // Get category by id
  const getCategoryById = (id: string) => {
    return categories.find(c => c.id === id)
  }

  return (
    <div className="products-page">
      {/* ===== HERO - REDUCED ===== */}
      <section className="products-hero">
        <div className="products-hero__bg">
          <div className="products-hero__gradient" />
          <div className="products-hero__orb products-hero__orb--1" />
          <div className="products-hero__orb products-hero__orb--2" />
          <div className="products-hero__orb products-hero__orb--3" />
        </div>
        <div className="container products-hero__container">
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
              <span className="products-stat__number">19</span>
              <span className="products-stat__label">Products</span>
            </div>
            <div className="products-stat">
              <span className="products-stat__number">5</span>
              <span className="products-stat__label">Categories</span>
            </div>
            <div className="products-stat">
              <span className="products-stat__number">100+</span>
              <span className="products-stat__label">Clients</span>
            </div>
          </div>
        </div>
      </section>

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
          <div className="products-categories-grid">
            {categories.map((category) => {
              const isExpanded = expandedCategory === category.id
              const categoryProducts = getProductsByCategory(category.name)
              const productCount = categoryProducts.length
              
              // Check if this category should be hidden (pill mode + not the active category)
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
                          <div key={product.name} className="products-category-card__product">
                            <div className="products-category-card__product-icon">
                              {product.icon}
                            </div>
                            <div className="products-category-card__product-content">
                              <div className="products-category-card__product-header">
                                <h4 className="products-category-card__product-name">{product.name}</h4>
                                <span className={`products-pill ${product.tagClass}`}>{product.tag}</span>
                              </div>
                              <p className="products-category-card__product-desc">{product.desc}</p>
                              <div className="products-category-card__product-features">
                                {product.features.slice(0, 3).map(f => (
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
           HERO - REDUCED
           ============================================================ */
        .products-hero {
          position: relative;
          padding: 4rem 0 3rem;
          overflow: hidden;
          background: #0c1a3a;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          min-height: auto;
        }

        .products-hero__bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
        }

        .products-hero__gradient {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 70% 20%, rgba(249, 115, 78, 0.12) 0%, transparent 60%),
                      radial-gradient(ellipse at 30% 80%, rgba(99, 102, 241, 0.08) 0%, transparent 50%);
        }

        .products-hero__orb {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          filter: blur(80px);
        }

        .products-hero__orb--1 {
          width: 400px;
          height: 400px;
          top: -10%;
          right: -5%;
          background: rgba(249, 115, 78, 0.08);
        }

        .products-hero__orb--2 {
          width: 300px;
          height: 300px;
          bottom: -10%;
          left: 10%;
          background: rgba(99, 102, 241, 0.06);
        }

        .products-hero__orb--3 {
          width: 200px;
          height: 200px;
          top: 40%;
          right: 20%;
          background: rgba(249, 115, 78, 0.04);
        }

        .products-hero__container {
          position: relative;
          z-index: 2;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
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
          font-size: 2.8rem;
          font-weight: 800;
          line-height: 1.1;
          color: #ffffff;
          letter-spacing: -0.03em;
          margin-bottom: 0.75rem;
        }

        .products-hero__desc {
          font-size: 1rem;
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
        }

        .products-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .products-stat__number {
          font-size: 1.8rem;
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
          .products-hero__title {
            font-size: 2.4rem;
          }
          .products-hero__stats {
            gap: 2rem;
          }
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
            padding: 3rem 0 2rem;
          }
          .products-hero__title {
            font-size: 2rem;
          }
          .products-hero__desc {
            font-size: 0.95rem;
          }
          .products-hero__stats {
            gap: 1.5rem;
            flex-wrap: wrap;
          }
          .products-stat__number {
            font-size: 1.4rem;
          }
          .products-hero__orb {
            display: none;
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
            padding: 2.5rem 0 1.5rem;
          }
          .products-hero__title {
            font-size: 1.6rem;
          }
          .products-hero__desc {
            font-size: 0.85rem;
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
            flex-wrap: wrap;
            justify-content: center;
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

        @media (max-width: 400px) {
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