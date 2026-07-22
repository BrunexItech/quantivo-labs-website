import { useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react'
import { api } from '../api'

interface FormData {
  name: string
  email: string
  phone: string
  product: string
  message: string
}

interface ContactInfo {
  icon: React.ElementType
  label: string
  value: string
}

export default function Contact() {
  const [searchParams] = useSearchParams()
  const productParam = searchParams.get('product') || ''

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    product: productParam,
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [heroLoaded, setHeroLoaded] = useState(false)

  // Preload image on component mount
  useEffect(() => {
    const img = new Image()
    img.src = '/contact_hero.png'
    img.onload = () => setHeroLoaded(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await api.sendContact(formData)
      setIsSubmitted(true)
      setFormData({ name: '', email: '', phone: '', product: '', message: '' })
    } catch (error) {
      alert('Error sending message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo: ContactInfo[] = [
    { 
      icon: MapPin, 
      label: 'Visit Us', 
      value: 'Madona House, Mpaka Road, CBD, Nairobi, Kenya' 
    },
    { 
      icon: Phone, 
      label: 'Call Us', 
      value: '+254715274418 / +254794913318 / +254726339982' 
    },
    { 
      icon: Mail, 
      label: 'Email Us', 
      value: 'info@quantivolabs.tech' 
    },
  ]

  return (
    <div className="contact-premium">
      {/* ===== MULTIPLE PRELOAD STRATEGIES FOR INSTANT LOADING ===== */}
      
      {/* 1. Preload link in head (critical) */}
      <link rel="preload" as="image" href="/contact_hero.png" fetchPriority="high" />
      
      {/* 2. Preconnect to origin for faster loading */}
      <link rel="preconnect" href={window.location.origin} />
      
      {/* 3. Preload with higher priority using resource hints */}
      <link rel="preload" as="image" href="/contact_hero.png" imagesrcset="/contact_hero.png" importance="high" />

      {/* ===== HERO SECTION - INSTANT LOAD WITH BACKGROUND PLACEHOLDER ===== */}
      <section className="contact-premium__hero">
        <div className="contact-premium__hero-image">
          {/* Background color placeholder - shows instantly */}
          <div className="contact-premium__hero-placeholder" />
          
          {/* Image with all optimization attributes */}
          <img 
            src="/contact_hero.png"
            alt="Contact Us"
            className="contact-premium__hero-img"
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
          <div className="contact-premium__hero-overlay" />
        </div>

        <div className="contact-premium__hero-content">
          <div className="contact-premium__hero-inner">
            <div className="contact-premium__hero-tag">
              <span>Let's Connect</span>
            </div>
            <h1 className="contact-premium__hero-title">
              Let's Build Something <br />
              <span className="contact-premium__hero-accent">Extraordinary Together</span>
            </h1>
            <p className="contact-premium__hero-desc">
              Have a project in mind? We'd love to hear from you. Fill in the form below 
              and our team will reach out within 24 hours.
            </p>
            <div className="contact-premium__hero-actions">
              <a href="#contact-form" className="contact-premium__hero-btn">
                Get Started <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <section id="contact-form" className="contact-premium__main">
        <div className="contact-premium__container">
          <div className="contact-premium__grid">
            {/* Form */}
            <div className="contact-premium__form-wrapper">
              <div className="contact-premium__form-card">
                {isSubmitted ? (
                  <div className="contact-premium__success">
                    <div className="contact-premium__success-icon">
                      <CheckCircle size={48} />
                    </div>
                    <h3 className="contact-premium__success-title">Message Sent!</h3>
                    <p className="contact-premium__success-desc">We'll get back to you within 24 hours.</p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="contact-premium__success-btn"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="contact-premium__form">
                    <h3 className="contact-premium__form-title">Send us a Message</h3>
                    
                    <div className="contact-premium__form-row">
                      <div className="contact-premium__form-group">
                        <label className="contact-premium__form-label">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="contact-premium__form-input"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="contact-premium__form-group">
                        <label className="contact-premium__form-label">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="contact-premium__form-input"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="contact-premium__form-row">
                      <div className="contact-premium__form-group">
                        <label className="contact-premium__form-label">Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="contact-premium__form-input"
                          placeholder="+254 700 000 000"
                        />
                      </div>
                      <div className="contact-premium__form-group">
                        <label className="contact-premium__form-label">Product of Interest</label>
                        <select
                          name="product"
                          value={formData.product}
                          onChange={handleChange}
                          className="contact-premium__form-select"
                        >
                          <option value="">Select a product</option>
                          <option value="QuantivoCRM">QuantivoCRM</option>
                          <option value="DFS Solutions">DFS Solutions</option>
                          <option value="School Management">School Management</option>
                          <option value="Hospital Management">Hospital Management</option>
                          <option value="Hotel POS">Hotel POS</option>
                          <option value="Digital Wallet">Digital Wallet</option>
                          <option value="Viral Blast">Viral Blast</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="contact-premium__form-group">
                      <label className="contact-premium__form-label">Message *</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="contact-premium__form-textarea"
                        placeholder="Tell us about your project..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="contact-premium__form-submit"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="contact-premium__info-wrapper">
              {contactInfo.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="contact-premium__info-card">
                    <div className="contact-premium__info-icon">
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="contact-premium__info-label">{item.label}</p>
                      <p className="contact-premium__info-value">{item.value}</p>
                    </div>
                  </div>
                )
              })}

              <div className="contact-premium__hours">
                <div className="contact-premium__hours-header">
                  <Clock size={18} />
                  <span>Working Hours</span>
                </div>
                <div className="contact-premium__hours-list">
                  <div className="contact-premium__hours-item">
                    <span className="contact-premium__hours-day">Monday – Friday</span>
                    <span className="contact-premium__hours-time">8:00 AM – 6:00 PM</span>
                  </div>
                  <div className="contact-premium__hours-item">
                    <span className="contact-premium__hours-day">Saturday</span>
                    <span className="contact-premium__hours-time">9:00 AM – 2:00 PM</span>
                  </div>
                  <div className="contact-premium__hours-item contact-premium__hours-item--closed">
                    <span className="contact-premium__hours-day">Sunday</span>
                    <span className="contact-premium__hours-time">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-premium__map">
            <div className="contact-premium__map-header">
              <MapPin size={20} />
              <h3>Find Us</h3>
            </div>
            <div className="contact-premium__map-container">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=36.8132%2C-1.2973%2C36.8332%2C-1.2773&layer=mapnik&marker=-1.2873%2C36.8232"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Quantivo Labs Location Map"
                className="contact-premium__map-iframe"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-premium {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0F172A;
        }

        .contact-premium__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
        }

        .contact-premium__hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding-top: 0;
        }

        .contact-premium__hero-image {
          position: absolute;
          inset: 0;
          z-index: 0;
        }

        .contact-premium__hero-placeholder {
          position: absolute;
          inset: 0;
          background: #0F172A; /* Dark background shows instantly */
          z-index: 1;
        }

        .contact-premium__hero-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 2;
        }

        .contact-premium__hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(15, 23, 42, 0.4) 50%, rgba(15, 23, 42, 0.7) 100%);
          z-index: 3;
        }

        .contact-premium__hero-content {
          position: relative;
          z-index: 10;
          width: 100%;
          padding: 2rem 0;
        }

        .contact-premium__hero-inner {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
        }

        .contact-premium__hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.4rem 1.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 1.5rem;
          backdrop-filter: blur(8px);
        }

        .contact-premium__hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.4rem, 4.5vw, 3.8rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.08;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .contact-premium__hero-accent {
          background: linear-gradient(135deg, #FBBF24 0%, #F59E0B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .contact-premium__hero-desc {
          font-size: 1.05rem;
          color: #94A3B8;
          max-width: 560px;
          margin: 0 auto 2rem;
          line-height: 1.8;
        }

        .contact-premium__hero-actions {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .contact-premium__hero-btn {
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

        .contact-premium__hero-btn:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 48px rgba(245, 158, 11, 0.35);
        }

        .contact-premium__main {
          padding: 4rem 0 5rem;
          background: #F8FAFC;
        }

        .contact-premium__grid {
          display: grid;
          grid-template-columns: 3fr 2fr;
          gap: 2.5rem;
        }

        .contact-premium__form-wrapper {
          background: #FFFFFF;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
          padding: 2.5rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
        }

        .contact-premium__form-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 1.5rem;
        }

        .contact-premium__form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .contact-premium__form-group {
          display: flex;
          flex-direction: column;
          gap: 0.3rem;
        }

        .contact-premium__form-label {
          font-size: 0.8rem;
          font-weight: 600;
          color: #475569;
        }

        .contact-premium__form-input,
        .contact-premium__form-select,
        .contact-premium__form-textarea {
          padding: 0.7rem 1rem;
          border: 1.5px solid #E2E8F0;
          border-radius: 10px;
          font-size: 0.9rem;
          font-family: 'Inter', sans-serif;
          transition: border-color 0.3s ease;
          background: #FFFFFF;
          color: #0F172A;
          width: 100%;
        }

        .contact-premium__form-input:focus,
        .contact-premium__form-select:focus,
        .contact-premium__form-textarea:focus {
          outline: none;
          border-color: #2563EB;
        }

        .contact-premium__form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .contact-premium__form-select {
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%2394A3B8' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 1rem center;
          padding-right: 2.5rem;
        }

        .contact-premium__form-submit {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, #2563EB, #4F46E5);
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.95rem;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
          margin-top: 0.5rem;
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.2);
        }

        .contact-premium__form-submit:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(37, 99, 235, 0.3);
        }

        .contact-premium__form-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .contact-premium__success {
          text-align: center;
          padding: 2.5rem 1rem;
        }

        .contact-premium__success-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: #D1FAE5;
          color: #059669;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .contact-premium__success-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.6rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.5rem;
        }

        .contact-premium__success-desc {
          color: #64748B;
          margin-bottom: 1.5rem;
        }

        .contact-premium__success-btn {
          padding: 0.7rem 1.5rem;
          background: #2563EB;
          color: #FFFFFF;
          border: none;
          border-radius: 10px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact-premium__success-btn:hover {
          background: #1D4ED8;
          transform: translateY(-2px);
        }

        .contact-premium__info-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .contact-premium__info-card {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .contact-premium__info-card:hover {
          transform: translateX(4px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
        }

        .contact-premium__info-icon {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #EEF2FF;
          color: #2563EB;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-premium__info-label {
          font-size: 0.7rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: #94A3B8;
        }

        .contact-premium__info-value {
          font-size: 0.9rem;
          font-weight: 500;
          color: #0F172A;
          margin-top: 2px;
        }

        .contact-premium__hours {
          background: #FFFFFF;
          border-radius: 16px;
          border: 1px solid #E2E8F0;
          padding: 1.25rem 1.5rem;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .contact-premium__hours-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.8rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.75rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #F1F5F9;
        }

        .contact-premium__hours-header svg {
          color: #2563EB;
        }

        .contact-premium__hours-list {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .contact-premium__hours-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          padding: 0.3rem 0;
        }

        .contact-premium__hours-day {
          color: #475569;
          font-weight: 500;
        }

        .contact-premium__hours-time {
          color: #0F172A;
          font-weight: 600;
        }

        .contact-premium__hours-item--closed .contact-premium__hours-time {
          color: #DC2626;
        }

        .contact-premium__map {
          margin-top: 2.5rem;
        }

        .contact-premium__map-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
        }

        .contact-premium__map-header svg {
          color: #2563EB;
        }

        .contact-premium__map-header h3 {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0F172A;
        }

        .contact-premium__map-container {
          width: 100%;
          height: 320px;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #E2E8F0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.02);
          position: relative;
        }

        .contact-premium__map-iframe {
          width: 100%;
          height: 100%;
          border: 0;
          display: block;
        }

        @media (max-width: 1024px) {
          .contact-premium__grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
          .contact-premium__info-wrapper {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
          }
          .contact-premium__hours {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 768px) {
          .contact-premium__container {
            padding: 0 16px;
          }
          .contact-premium__hero {
            min-height: 70vh;
          }
          .contact-premium__hero-title {
            font-size: 2rem;
          }
          .contact-premium__hero-desc {
            font-size: 0.95rem;
          }
          .contact-premium__form-wrapper {
            padding: 1.5rem;
          }
          .contact-premium__form-row {
            grid-template-columns: 1fr;
          }
          .contact-premium__info-wrapper {
            grid-template-columns: 1fr;
          }
          .contact-premium__map-container {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .contact-premium__hero {
            min-height: 60vh;
            padding-top: 60px;
          }
          .contact-premium__hero-title {
            font-size: 1.5rem;
          }
          .contact-premium__hero-desc {
            font-size: 0.85rem;
          }
          .contact-premium__hero-btn {
            width: 100%;
            justify-content: center;
          }
          .contact-premium__form-wrapper {
            padding: 1rem;
          }
          .contact-premium__info-card {
            padding: 1rem;
          }
          .contact-premium__hours-item {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.2rem;
          }
          .contact-premium__hero-tag {
            font-size: 0.6rem;
            padding: 0.3rem 1rem;
          }
        }
      `}</style>
    </div>
  )
}