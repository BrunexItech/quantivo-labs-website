import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { 
  Menu, X, Home, Info, Package, Settings, 
  Briefcase, FolderGit2, Handshake, Newspaper,
  Phone, ChevronDown 
} from 'lucide-react'

const navLinks = [
  { label: 'Home', path: '/', icon: Home },
  { label: 'About', path: '/about', icon: Info },
  { label: 'Products', path: '/products', icon: Package },
  { label: 'Services', path: '/services', icon: Settings },
  { label: 'Industries', path: '/industries', icon: Briefcase },
  { label: 'Portfolio', path: '/portfolio', icon: FolderGit2 },
  { label: 'Partners', path: '/partners', icon: Handshake },
  { label: 'Blog', path: '/blog', icon: Newspaper },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const { pathname } = useLocation()
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Scroll effect with throttle
  useEffect(() => {
    let ticking = false
    const fn = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 16)
          ticking = false
        })
        ticking = true
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  // Close mobile on route change
  useEffect(() => { setMobileOpen(false) }, [pathname])

  // Body lock for mobile - FIXED no scrollbar shift
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [mobileOpen])

  // Clean up timeout
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleMouseEnter = (index: number) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setHoveredIndex(index)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredIndex(null)
    }, 200)
  }

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="container navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-mark">
              <span>Q</span>
              <div className="navbar__logo-glow" />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Quantivo Labs</span>
              <span className="navbar__logo-sub">Technologies</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="navbar__links">
            {navLinks.map((link, index) => {
              const Icon = link.icon
              const isActive = pathname === link.path
              const isHovered = hoveredIndex === index

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Icon size={16} />
                  <span>{link.label}</span>
                  {isHovered && (
                    <span className="navbar__link-hover-bg" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* CTA Button - NO SPARKLES */}
          <div className="navbar__cta">
            <Link to="/contact" className="navbar__cta-btn">
              <Phone size={16} />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`navbar__toggle ${mobileOpen ? 'navbar__toggle--active' : ''}`} 
            onClick={() => setMobileOpen(!mobileOpen)} 
            aria-label="Toggle menu"
          >
            <div className="navbar__hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div 
        className={`navbar__overlay${mobileOpen ? ' navbar__overlay--open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Mobile Menu */}
      <div className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`}>
        <div className="navbar__mobile-header">
          <div className="navbar__logo-mark">
            <span>Q</span>
          </div>
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Quantivo Labs</span>
            <span className="navbar__logo-sub">Technologies</span>
          </div>
          <button 
            className="navbar__mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="navbar__mobile-body">
          {navLinks.map(link => {
            const Icon = link.icon
            const isActive = pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`navbar__mobile-link ${isActive ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                <Icon size={20} />
                <span>{link.label}</span>
                {isActive && <span className="navbar__mobile-link-active-dot" />}
              </Link>
            )
          })}
          
          <Link 
            to="/contact" 
            className="navbar__mobile-cta"
            onClick={() => setMobileOpen(false)}
          >
            <Phone size={18} />
            Contact Us
          </Link>
        </div>
      </div>

      <style>{`
        /* ============================================================
           NAVBAR - ENHANCED & MODERN
           ============================================================ */
        
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          height: 72px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px) saturate(1.8);
          -webkit-backdrop-filter: blur(20px) saturate(1.8);
          border-bottom: 1px solid transparent;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          display: flex;
          align-items: center;
        }

        .navbar--scrolled {
          border-bottom-color: rgba(226, 232, 240, 0.5);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.04), 0 1px 8px rgba(0, 0, 0, 0.02);
          background: rgba(255, 255, 255, 0.92);
        }

        .navbar__inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          width: 100%;
          max-width: 1440px;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ---- Logo ---- */
        .navbar__logo {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          flex-shrink: 0;
          text-decoration: none;
          position: relative;
        }

        .navbar__logo-mark {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #2563EB 0%, #7C3AED 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          flex-shrink: 0;
          position: relative;
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .navbar__logo:hover .navbar__logo-mark {
          transform: scale(1.05) rotate(-2deg);
        }

        .navbar__logo-glow {
          position: absolute;
          inset: -2px;
          border-radius: 12px;
          background: inherit;
          filter: blur(12px);
          opacity: 0.3;
          z-index: -1;
          transition: opacity 0.3s ease;
        }

        .navbar__logo:hover .navbar__logo-glow {
          opacity: 0.6;
        }

        .navbar__logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .navbar__logo-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .navbar__logo-sub {
          font-size: 0.6rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }

        /* ---- Desktop Links ---- */
        .navbar__links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          flex: 1;
          justify-content: center;
        }

        .navbar__link {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.5rem 1rem;
          border-radius: 10px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #475569;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
          text-decoration: none;
          position: relative;
          cursor: pointer;
        }

        .navbar__link svg {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .navbar__link:hover svg {
          transform: scale(1.1);
        }

        .navbar__link-hover-bg {
          position: absolute;
          inset: 0;
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.06), rgba(124, 58, 237, 0.06));
          z-index: -1;
          animation: navbarFadeIn 0.3s ease;
        }

        @keyframes navbarFadeIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }

        .navbar__link--active {
          color: #2563EB;
          font-weight: 600;
        }

        .navbar__link--active::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 2.5px;
          background: linear-gradient(90deg, #2563EB, #7C3AED);
          border-radius: 4px;
        }

        .navbar__link:hover {
          color: #2563EB;
        }

        /* ---- CTA Button ---- */
        .navbar__cta {
          flex-shrink: 0;
        }

        .navbar__cta-btn {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.6rem;
          border-radius: 12px;
          font-weight: 600;
          font-size: 0.875rem;
          background: linear-gradient(135deg, #2563EB, #7C3AED);
          color: #fff;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.25);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .navbar__cta-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.15), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .navbar__cta-btn:hover::before {
          opacity: 1;
        }

        .navbar__cta-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 12px 32px rgba(37, 99, 235, 0.35);
        }

        /* ---- Mobile Toggle ---- */
        .navbar__toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          border-radius: 10px;
          transition: all 0.3s ease;
          position: relative;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
        }

        .navbar__toggle:hover {
          background: rgba(37, 99, 235, 0.06);
        }

        .navbar__hamburger {
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: 24px;
          transition: all 0.3s ease;
        }

        .navbar__hamburger span {
          display: block;
          height: 2.5px;
          background: #1e293b;
          border-radius: 4px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }

        .navbar__toggle--active .navbar__hamburger span:nth-child(1) {
          transform: translateY(7.5px) rotate(45deg);
          background: #2563EB;
        }

        .navbar__toggle--active .navbar__hamburger span:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }

        .navbar__toggle--active .navbar__hamburger span:nth-child(3) {
          transform: translateY(-7.5px) rotate(-45deg);
          background: #2563EB;
        }

        /* ---- Overlay ---- */
        .navbar__overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          z-index: 999;
          opacity: 0;
          visibility: hidden;
          transition: all 0.4s ease;
        }

        .navbar__overlay--open {
          opacity: 1;
          visibility: visible;
        }

        /* ---- Mobile Menu ---- */
        .navbar__mobile {
          position: fixed;
          top: 0;
          right: -100%;
          width: 360px;
          max-width: 90vw;
          height: 100vh;
          background: #ffffff;
          z-index: 1001;
          padding: 0;
          transition: right 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: -8px 0 40px rgba(0, 0, 0, 0.08);
          overflow-y: auto;
        }

        .navbar__mobile--open {
          right: 0;
        }

        .navbar__mobile-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #f1f5f9;
          position: sticky;
          top: 0;
          background: #ffffff;
          z-index: 2;
        }

        .navbar__mobile-header .navbar__logo-mark {
          width: 36px;
          height: 36px;
          font-size: 0.9rem;
        }

        .navbar__mobile-header .navbar__logo-name {
          font-size: 0.9rem;
        }

        .navbar__mobile-header .navbar__logo-sub {
          font-size: 0.55rem;
        }

        .navbar__mobile-close {
          margin-left: auto;
          background: none;
          border: none;
          cursor: pointer;
          color: #64748b;
          padding: 0.25rem;
          border-radius: 8px;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .navbar__mobile-close:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        .navbar__mobile-body {
          display: flex;
          flex-direction: column;
          padding: 1rem 1.5rem 2rem;
          gap: 0.25rem;
        }

        .navbar__mobile-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.75rem 1rem;
          border-radius: 10px;
          font-size: 0.95rem;
          font-weight: 500;
          color: #475569;
          transition: all 0.2s ease;
          text-decoration: none;
          position: relative;
        }

        .navbar__mobile-link svg {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          color: #94a3b8;
          transition: all 0.2s ease;
        }

        .navbar__mobile-link:hover {
          color: #2563EB;
          background: rgba(37, 99, 235, 0.04);
        }

        .navbar__mobile-link:hover svg {
          color: #2563EB;
          transform: scale(1.05);
        }

        .navbar__mobile-link.active {
          color: #2563EB;
          font-weight: 600;
          background: rgba(37, 99, 235, 0.06);
        }

        .navbar__mobile-link.active svg {
          color: #2563EB;
        }

        .navbar__mobile-link-active-dot {
          margin-left: auto;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563EB, #7C3AED);
        }

        .navbar__mobile-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 1.5rem;
          padding: 0.875rem;
          border-radius: 12px;
          width: 100%;
          text-align: center;
          font-weight: 600;
          font-size: 0.95rem;
          background: linear-gradient(135deg, #2563EB, #7C3AED);
          color: #fff;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.25);
          transition: all 0.25s ease;
          text-decoration: none;
        }

        .navbar__mobile-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(37, 99, 235, 0.35);
        }

        .navbar__mobile-cta svg {
          width: 18px;
          height: 18px;
        }

        /* ---- Responsive ---- */
        @media (max-width: 1024px) {
          .navbar__links {
            display: none;
          }
          .navbar__cta {
            display: none;
          }
          .navbar__toggle {
            display: flex;
          }
        }

        @media (max-width: 640px) {
          .navbar {
            height: 64px;
          }
          .navbar__inner {
            padding: 0 1rem;
          }
          .navbar__logo-mark {
            width: 34px;
            height: 34px;
            font-size: 0.9rem;
          }
          .navbar__logo-name {
            font-size: 0.85rem;
          }
          .navbar__logo-sub {
            font-size: 0.5rem;
          }
          .navbar__mobile {
            width: 100%;
            max-width: 100%;
          }
          .navbar__mobile-header {
            padding: 1rem 1.25rem;
          }
          .navbar__mobile-body {
            padding: 0.75rem 1.25rem 1.5rem;
          }
        }

        @media (max-width: 380px) {
          .navbar__logo-text {
            display: none;
          }
        }
      `}</style>
    </>
  )
}