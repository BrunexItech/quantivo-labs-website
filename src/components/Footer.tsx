import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Globe, ArrowUp, Sparkles, ChevronRight } from 'lucide-react'
import { FaFacebook, FaInstagram, FaTiktok, FaLinkedin } from 'react-icons/fa'

const products = ['QuantivoCRM','DFS Solutions','Agency Banking','Chama Management','PSP Platform','Digital Wallet','School Management','Hospital Management','POS System','Hotel POS','Sacco Management','Cloud Hosting','Project Management','AI Call Center','Viral Blast']
const services = ['Software Development','AI Solutions','Cloud Solutions','Digital Transformation','Intelligent Automation','Software Integrations','Enterprise Architecture','CoreTeam Talent Resourcing']
const company = [
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Services', path: '/services' },
  { label: 'Industries', path: '/industries' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Partners', path: '/partners' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-modern">
      {/* ===== NEWSLETTER / CTA STRIP ===== */}
      <div className="footer-modern__cta">
        <div className="container footer-modern__cta-inner">
          <div className="footer-modern__cta-content">
            <div className="footer-modern__cta-icon">
              <Sparkles size={20} />
            </div>
            <div>
              <h4 className="footer-modern__cta-title">Ready to innovate?</h4>
              <p className="footer-modern__cta-desc">Let's build the future together. Get in touch with our team.</p>
            </div>
          </div>
          <Link to="/contact" className="footer-modern__cta-btn">
            Start a Project <ChevronRight size={16} />
          </Link>
        </div>
      </div>

      {/* ===== MAIN FOOTER ===== */}
      <div className="footer-modern__main">
        <div className="container">
          <div className="footer-modern__grid">
            {/* Brand Column */}
            <div className="footer-modern__brand">
              <Link to="/" className="footer-modern__logo">
                <div className="footer-modern__logo-mark">
                  <span>Q</span>
                  <div className="footer-modern__logo-glow" />
                </div>
                <div>
                  <div className="footer-modern__logo-name">Quantivo Labs</div>
                  <div className="footer-modern__logo-sub">Technologies</div>
                </div>
              </Link>
              <p className="footer-modern__tagline">AI-first. Africa-built. Global-ready.</p>
              <p className="footer-modern__desc">
                Delivering advanced digital platforms that transform how organizations operate, 
                serve customers, and scale in the digital economy.
              </p>
              <div className="footer-modern__socials">
                <a 
                  href="#" 
                  className="footer-modern__social footer-modern__social--facebook" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                >
                  <FaFacebook size={18} />
                </a>
                <a 
                  href="#" 
                  className="footer-modern__social footer-modern__social--instagram" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                >
                  <FaInstagram size={18} />
                </a>
                <a 
                  href="#" 
                  className="footer-modern__social footer-modern__social--tiktok" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="TikTok"
                >
                  <FaTiktok size={18} />
                </a>
                <a 
                  href="#" 
                  className="footer-modern__social footer-modern__social--linkedin" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={18} />
                </a>
              </div>
            </div>

            {/* Company Links */}
            <div className="footer-modern__col footer-modern__col--company">
              <h5 className="footer-modern__col-title">Company</h5>
              <ul className="footer-modern__col-list">
                {company.map(c => (
                  <li key={c.path}>
                    <Link to={c.path} className="footer-modern__link">
                      <ChevronRight size={12} className="footer-modern__link-icon" />
                      {c.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="footer-modern__col footer-modern__col--products">
              <h5 className="footer-modern__col-title">Products</h5>
              <div className="footer-modern__product-grid">
                {products.slice(0, 12).map(p => (
                  <Link key={p} to="/products" className="footer-modern__link footer-modern__link--product">
                    {p}
                  </Link>
                ))}
                <Link to="/products" className="footer-modern__link footer-modern__link--view-all">
                  View All Products <ChevronRight size={12} />
                </Link>
              </div>
            </div>

            {/* Contact */}
            <div className="footer-modern__col footer-modern__col--contact">
              <h5 className="footer-modern__col-title">Connect</h5>
              <ul className="footer-modern__contact-list">
                <li>
                  <div className="footer-modern__contact-item">
                    <MapPin size={15} className="footer-modern__contact-icon" />
                    <span>Nairobi, Kenya</span>
                  </div>
                </li>
                <li>
                  <a href="mailto:info@quantivolabs.tech" className="footer-modern__contact-link">
                    <Mail size={15} className="footer-modern__contact-icon" />
                    <span>info@quantivolabs.tech</span>
                  </a>
                </li>
                <li>
                  <a href="tel:+254000000000" className="footer-modern__contact-link">
                    <Phone size={15} className="footer-modern__contact-icon" />
                    <span>+254 000 000 000</span>
                  </a>
                </li>
                <li>
                  <a href="https://www.quantivolabs.tech" className="footer-modern__contact-link">
                    <Globe size={15} className="footer-modern__contact-icon" />
                    <span>quantivolabs.tech</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM BAR ===== */}
      <div className="footer-modern__bottom">
        <div className="container footer-modern__bottom-inner">
          <p className="footer-modern__copyright">
            &copy; {new Date().getFullYear()} Quantivo Labs Technologies Ltd. 
            <span className="footer-modern__copyright-sep">·</span>
            All rights reserved.
          </p>
          <div className="footer-modern__bottom-links">
            <Link to="#" className="footer-modern__bottom-link">Privacy</Link>
            <Link to="#" className="footer-modern__bottom-link">Terms</Link>
            <Link to="#" className="footer-modern__bottom-link">Cookies</Link>
          </div>
          <button onClick={scrollToTop} className="footer-modern__back-top" aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <style>{`
        /* =============================================================
           FOOTER MODERN - FULLY RESPONSIVE
           ============================================================= */

        .footer-modern {
          --fm-primary: #0b1120;
          --fm-secondary: #111c2f;
          --fm-accent: #f9734e;
          --fm-accent-glow: rgba(249, 115, 78, 0.15);
          --fm-text: #94a3b8;
          --fm-text-light: #e2e8f0;
          --fm-border: rgba(255, 255, 255, 0.04);
          --fm-radius: 16px;
          --fm-transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          background: var(--fm-primary);
          color: var(--fm-text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          position: relative;
        }

        .container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ===== CTA STRIP ===== */
        .footer-modern__cta {
          background: linear-gradient(135deg, #111c2f 0%, #0b1120 100%);
          border-bottom: 1px solid var(--fm-border);
          padding: 2rem 0;
          position: relative;
          overflow: hidden;
        }

        .footer-modern__cta::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(249, 115, 78, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-modern__cta-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .footer-modern__cta-content {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .footer-modern__cta-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: var(--fm-accent-glow);
          color: var(--fm-accent);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          animation: fmPulse 2s ease-in-out infinite;
        }

        @keyframes fmPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        .footer-modern__cta-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--fm-text-light);
          margin: 0;
          letter-spacing: -0.02em;
        }

        .footer-modern__cta-desc {
          font-size: 0.85rem;
          color: var(--fm-text);
          margin: 0;
        }

        .footer-modern__cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--fm-accent);
          color: #fff;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 60px;
          text-decoration: none;
          transition: var(--fm-transition);
          font-size: 0.9rem;
          white-space: nowrap;
          box-shadow: 0 8px 24px -8px rgba(249, 115, 78, 0.3);
        }

        .footer-modern__cta-btn:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 16px 40px -12px rgba(249, 115, 78, 0.4);
        }

        /* ===== MAIN FOOTER ===== */
        .footer-modern__main {
          padding: 4.5rem 0 3rem;
          background: var(--fm-primary);
        }

        .footer-modern__grid {
          display: grid;
          grid-template-columns: 1.8fr 1fr 2fr 1.2fr;
          gap: 3rem;
        }

        /* ----- Brand Column ----- */
        .footer-modern__brand {
          display: flex;
          flex-direction: column;
        }

        .footer-modern__logo {
          display: inline-flex;
          align-items: center;
          gap: 0.8rem;
          text-decoration: none;
          margin-bottom: 1rem;
        }

        .footer-modern__logo-mark {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, #f9734e 0%, #f59e0b 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.1rem;
          position: relative;
          flex-shrink: 0;
        }

        .footer-modern__logo-glow {
          position: absolute;
          inset: -2px;
          border-radius: 12px;
          background: inherit;
          filter: blur(8px);
          opacity: 0.3;
          z-index: -1;
        }

        .footer-modern__logo-name {
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 1rem;
          color: var(--fm-text-light);
          letter-spacing: -0.02em;
        }

        .footer-modern__logo-sub {
          font-size: 0.6rem;
          color: var(--fm-text);
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: -2px;
        }

        .footer-modern__tagline {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--fm-accent);
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 0.75rem;
        }

        .footer-modern__desc {
          font-size: 0.85rem;
          color: var(--fm-text);
          line-height: 1.7;
          max-width: 340px;
          margin-bottom: 1.5rem;
        }

        /* ----- Social Icons with Brand Colors ----- */
        .footer-modern__socials {
          display: flex;
          gap: 0.6rem;
        }

        .footer-modern__social {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: var(--fm-transition);
          text-decoration: none;
          font-size: 18px;
          border: 1px solid var(--fm-border);
          background: rgba(255, 255, 255, 0.03);
          color: var(--fm-text);
        }

        .footer-modern__social--facebook {
          color: #1877F2;
        }
        .footer-modern__social--facebook:hover {
          background: #1877F2;
          color: #FFFFFF;
          border-color: #1877F2;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px -8px rgba(24, 119, 242, 0.4);
        }

        .footer-modern__social--instagram {
          color: #E4405F;
        }
        .footer-modern__social--instagram:hover {
          background: linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D);
          color: #FFFFFF;
          border-color: #E1306C;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px -8px rgba(225, 48, 108, 0.4);
        }

        .footer-modern__social--tiktok {
          color: #000000;
        }
        .footer-modern__social--tiktok:hover {
          background: #000000;
          color: #00F2EA;
          border-color: #000000;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px -8px rgba(0, 0, 0, 0.4);
        }

        .footer-modern__social--linkedin {
          color: #0A66C2;
        }
        .footer-modern__social--linkedin:hover {
          background: #0A66C2;
          color: #FFFFFF;
          border-color: #0A66C2;
          transform: translateY(-3px);
          box-shadow: 0 8px 24px -8px rgba(10, 102, 194, 0.4);
        }

        /* ----- Columns ----- */
        .footer-modern__col {
          display: flex;
          flex-direction: column;
        }

        .footer-modern__col-title {
          font-size: 0.7rem;
          font-weight: 700;
          color: var(--fm-text-light);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.25rem;
          padding-bottom: 0.75rem;
          border-bottom: 1px solid var(--fm-border);
        }

        .footer-modern__col-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
        }

        .footer-modern__link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 0.82rem;
          color: var(--fm-text);
          text-decoration: none;
          transition: var(--fm-transition);
          line-height: 1.5;
        }

        .footer-modern__link-icon {
          opacity: 0;
          transition: var(--fm-transition);
          flex-shrink: 0;
        }

        .footer-modern__link:hover {
          color: var(--fm-text-light);
        }

        .footer-modern__link:hover .footer-modern__link-icon {
          opacity: 1;
          transform: translateX(2px);
        }

        /* ----- Product Grid ----- */
        .footer-modern__product-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.3rem 1rem;
        }

        .footer-modern__link--product {
          font-size: 0.78rem;
          padding: 2px 0;
        }

        .footer-modern__link--view-all {
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--fm-accent);
          grid-column: 1 / -1;
          margin-top: 0.2rem;
        }

        .footer-modern__link--view-all:hover {
          color: #fbbf24;
          gap: 6px;
        }

        .footer-modern__link--view-all .footer-modern__link-icon {
          opacity: 1;
        }

        /* ----- Contact ----- */
        .footer-modern__contact-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
        }

        .footer-modern__contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.82rem;
          color: var(--fm-text);
          line-height: 1.4;
        }

        .footer-modern__contact-link {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.82rem;
          color: var(--fm-text);
          text-decoration: none;
          transition: var(--fm-transition);
          line-height: 1.4;
        }

        .footer-modern__contact-link:hover {
          color: var(--fm-text-light);
        }

        .footer-modern__contact-icon {
          color: var(--fm-accent);
          flex-shrink: 0;
          opacity: 0.7;
        }

        /* ===== BOTTOM BAR ===== */
        .footer-modern__bottom {
          border-top: 1px solid var(--fm-border);
          padding: 1.25rem 0;
          background: rgba(0, 0, 0, 0.2);
        }

        .footer-modern__bottom-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-modern__copyright {
          font-size: 0.78rem;
          color: var(--fm-text);
          display: flex;
          align-items: center;
          gap: 0.5rem;
          flex-wrap: wrap;
        }

        .footer-modern__copyright-sep {
          color: var(--fm-border);
        }

        .footer-modern__bottom-links {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .footer-modern__bottom-link {
          font-size: 0.78rem;
          color: var(--fm-text);
          text-decoration: none;
          transition: var(--fm-transition);
        }

        .footer-modern__bottom-link:hover {
          color: var(--fm-text-light);
        }

        .footer-modern__back-top {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--fm-border);
          color: var(--fm-text);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: var(--fm-transition);
          padding: 0;
          flex-shrink: 0;
        }

        .footer-modern__back-top:hover {
          background: var(--fm-accent);
          color: #fff;
          border-color: var(--fm-accent);
          transform: translateY(-3px);
          box-shadow: 0 8px 24px -8px rgba(249, 115, 78, 0.3);
        }

        /* =============================================================
           RESPONSIVE - FIXED ARRANGEMENT
           ============================================================= */

        /* Large Tablet */
        @media (max-width: 1024px) {
          .footer-modern__grid {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }
          .footer-modern__brand {
            grid-column: 1 / -1;
          }
          .footer-modern__desc {
            max-width: 100%;
          }
          .footer-modern__col--company {
            grid-column: 1 / 2;
          }
          .footer-modern__col--products {
            grid-column: 2 / 3;
          }
          .footer-modern__col--contact {
            grid-column: 1 / -1;
          }
        }

        /* Tablet */
        @media (max-width: 768px) {
          .footer-modern__cta-inner {
            flex-direction: column;
            text-align: center;
          }
          .footer-modern__cta-content {
            flex-direction: column;
          }
          .footer-modern__cta-btn {
            width: 100%;
            justify-content: center;
          }
          
          .footer-modern__grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          
          .footer-modern__brand {
            grid-column: 1 / -1;
          }
          .footer-modern__col--company {
            grid-column: 1 / 2;
          }
          .footer-modern__col--products {
            grid-column: 2 / 3;
          }
          .footer-modern__col--contact {
            grid-column: 1 / -1;
          }
          
          .footer-modern__product-grid {
            grid-template-columns: 1fr;
          }
          
          .footer-modern__bottom-inner {
            flex-direction: column;
            text-align: center;
            gap: 0.75rem;
          }
          .footer-modern__bottom-links {
            justify-content: center;
          }
          .footer-modern__copyright {
            justify-content: center;
          }
        }

        /* Mobile - Company & Products SIDE BY SIDE */
        @media (max-width: 480px) {
          .container {
            padding: 0 16px;
          }
          
          .footer-modern__main {
            padding: 2.5rem 0 1.5rem;
          }
          
          .footer-modern__grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.5rem;
          }
          
          .footer-modern__brand {
            grid-column: 1 / -1;
          }
          
          /* Company and Products side by side on mobile */
          .footer-modern__col--company {
            grid-column: 1 / 2;
          }
          .footer-modern__col--products {
            grid-column: 2 / 3;
          }
          .footer-modern__col--contact {
            grid-column: 1 / -1;
          }
          
          .footer-modern__socials {
            justify-content: center;
          }
          .footer-modern__logo {
            justify-content: center;
            width: 100%;
          }
          .footer-modern__tagline,
          .footer-modern__desc {
            text-align: center;
          }
          
          .footer-modern__product-grid {
            grid-template-columns: 1fr;
            gap: 0.2rem;
          }
          
          .footer-modern__link--product {
            text-align: center;
            font-size: 0.75rem;
          }
          .footer-modern__link--view-all {
            text-align: center;
          }
          
          /* Bottom bar - stacked on mobile */
          .footer-modern__bottom-inner {
            flex-direction: column;
            align-items: center;
            gap: 0.75rem;
          }
          .footer-modern__copyright {
            flex-direction: column;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.7rem;
            text-align: center;
          }
          .footer-modern__copyright-sep {
            display: none;
          }
          .footer-modern__bottom-links {
            justify-content: center;
            gap: 1rem;
          }
          .footer-modern__bottom-link {
            font-size: 0.7rem;
          }
          .footer-modern__back-top {
            width: 32px;
            height: 32px;
          }
          .footer-modern__back-top svg {
            width: 14px;
            height: 14px;
          }
        }

        /* Very Small Mobile */
        @media (max-width: 380px) {
          .footer-modern__grid {
            grid-template-columns: 1fr 1fr;
            gap: 1.25rem;
          }
          
          /* Still keep Company and Products side by side */
          .footer-modern__col--company {
            grid-column: 1 / 2;
          }
          .footer-modern__col--products {
            grid-column: 2 / 3;
          }
          .footer-modern__col--contact {
            grid-column: 1 / -1;
          }
          
          .footer-modern__product-grid {
            grid-template-columns: 1fr;
            gap: 0.2rem;
          }
          .footer-modern__link--product {
            text-align: center;
            font-size: 0.7rem;
          }
          .footer-modern__bottom-links {
            gap: 0.75rem;
          }
          .footer-modern__social {
            width: 36px;
            height: 36px;
          }
          .footer-modern__social svg {
            width: 16px;
            height: 16px;
          }
        }

        /* Extra Small - Keep side by side but smaller */
        @media (max-width: 350px) {
          .footer-modern__grid {
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          
          .footer-modern__col--company {
            grid-column: 1 / 2;
          }
          .footer-modern__col--products {
            grid-column: 2 / 3;
          }
          .footer-modern__col--contact {
            grid-column: 1 / -1;
          }
          
          .footer-modern__col-title {
            font-size: 0.6rem;
          }
          .footer-modern__link {
            font-size: 0.7rem;
          }
          .footer-modern__contact-item,
          .footer-modern__contact-link {
            font-size: 0.7rem;
          }
        }
      `}</style>
    </footer>
  )
}