import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Clock, User, Tag, Calendar, Heart, 
  Share2, Bookmark, Eye, TrendingUp, Zap, Sparkles
} from 'lucide-react'

const posts = [
  { 
    id: 1,
    title: 'How AI Call Centers Are Transforming Customer Service in Africa', 
    excerpt: 'Intelligent voice agents with multilingual support are reducing support costs by 60% while dramatically improving customer satisfaction across the continent.', 
    category: 'AI & Automation', 
    categoryColor: '#7C3AED',
    author: 'Sophia Ochieng', 
    authorAvatar: 'SO',
    date: 'June 2, 2025', 
    readTime: '6 min read', 
    featured: true, 
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80',
    likes: 124,
    comments: 18,
  },
  { 
    id: 2,
    title: 'Building a PCI-DSS Compliant PSP in East Africa: Lessons Learned', 
    excerpt: 'A deep-dive into the technical and regulatory challenges of building payment infrastructure for the East African market, and how we achieved 99.97% uptime.', 
    category: 'Fintech', 
    categoryColor: '#2563EB',
    author: 'David Kamau', 
    authorAvatar: 'DK',
    date: 'May 28, 2025', 
    readTime: '9 min read', 
    featured: false, 
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80',
    likes: 89,
    comments: 12,
  },
  { 
    id: 3,
    title: 'Digital Financial Services: Bringing Unbanked Communities Online', 
    excerpt: 'How DFS platforms are closing the financial inclusion gap across East Africa — and what it takes to build compliant, scalable agent banking networks.', 
    category: 'Digital Finance', 
    categoryColor: '#059669',
    author: 'Priya Sharma', 
    authorAvatar: 'PS',
    date: 'May 22, 2025', 
    readTime: '7 min read', 
    featured: false, 
    image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80',
    likes: 67,
    comments: 9,
  },
  { 
    id: 4,
    title: 'School Management Systems: Digitising Education in Kenya', 
    excerpt: 'From fee collection via M-Pesa to digital attendance — how technology is transforming school administration across Kenya\'s private education sector.', 
    category: 'EduTech', 
    categoryColor: '#D97706',
    author: 'Grace Wanjiku', 
    authorAvatar: 'GW',
    date: 'May 15, 2025', 
    readTime: '6 min read', 
    featured: false, 
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80',
    likes: 45,
    comments: 6,
  },
  { 
    id: 5,
    title: 'Hospital Management Systems: The Road to a Paperless Ward', 
    excerpt: 'After deploying HMS across 5 hospital groups, our team shares the key integration challenges, clinical workflow lessons, and data security practices that matter most.', 
    category: 'HealthTech', 
    categoryColor: '#DC2626',
    author: 'James Otieno', 
    authorAvatar: 'JO',
    date: 'May 8, 2025', 
    readTime: '8 min read', 
    featured: false, 
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=800&q=80',
    likes: 78,
    comments: 14,
  },
  { 
    id: 6,
    title: 'Why African Businesses Need Offline-First Software Architecture', 
    excerpt: 'Connectivity challenges across Africa make offline-first design not just nice-to-have, but essential for any software that needs to operate reliably at scale.', 
    category: 'Engineering', 
    categoryColor: '#0891B2',
    author: 'Michael Abubakar', 
    authorAvatar: 'MA',
    date: 'April 30, 2025', 
    readTime: '8 min read', 
    featured: false, 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
    likes: 56,
    comments: 7,
  },
]

const categories = ['All', 'AI & Automation', 'Fintech', 'Digital Finance', 'EduTech', 'HealthTech', 'Engineering']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  const featured = posts.find(p => p.featured)!
  const filteredPosts = activeCategory === 'All' 
    ? posts.filter(p => !p.featured)
    : posts.filter(p => p.category === activeCategory && !p.featured)

  return (
    <div className="blog-vanguard">
      {/* Hero */}
      <section className="blog-vanguard__hero">
        <div className="blog-vanguard__hero-bg">
          <div className="blog-vanguard__hero-orb" />
          <div className="blog-vanguard__hero-grid" />
        </div>
        <div className="blog-vanguard__container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="blog-vanguard__hero-content"
          >
            <div className="blog-vanguard__hero-badge">
              <Sparkles size={14} />
              <span>Insights & Perspectives</span>
            </div>
            <h1 className="blog-vanguard__hero-title">
              Thoughts from the <br />
              <span className="blog-vanguard__hero-accent">Technology Frontier</span>
            </h1>
            <p className="blog-vanguard__hero-desc">
              Perspectives on AI, fintech, digital finance, healthcare IT, and the future of technology in Africa and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="blog-vanguard__featured">
        <div className="blog-vanguard__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="blog-vanguard__featured-card"
          >
            <div className="blog-vanguard__featured-image">
              <img src={featured.image} alt={featured.title} />
              <div className="blog-vanguard__featured-tag">Featured</div>
            </div>
            <div className="blog-vanguard__featured-content">
              <div className="blog-vanguard__featured-meta">
                <span 
                  className="blog-vanguard__featured-category"
                  style={{ background: `${featured.categoryColor}12`, color: featured.categoryColor }}
                >
                  {featured.category}
                </span>
                <span className="blog-vanguard__featured-date">{featured.date}</span>
              </div>
              <h2 className="blog-vanguard__featured-title">{featured.title}</h2>
              <p className="blog-vanguard__featured-excerpt">{featured.excerpt}</p>
              <div className="blog-vanguard__featured-footer">
                <div className="blog-vanguard__featured-author">
                  <div 
                    className="blog-vanguard__featured-avatar"
                    style={{ background: featured.categoryColor }}
                  >
                    {featured.authorAvatar}
                  </div>
                  <div>
                    <div className="blog-vanguard__featured-author-name">{featured.author}</div>
                    <div className="blog-vanguard__featured-author-role">CTO, Quantivo Labs</div>
                  </div>
                </div>
                <Link to="/blog" className="blog-vanguard__featured-btn">
                  Read Article <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="blog-vanguard__filter">
        <div className="blog-vanguard__container">
          <div className="blog-vanguard__filter-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`blog-vanguard__filter-btn ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="blog-vanguard__grid-section">
        <div className="blog-vanguard__container">
          <div className="blog-vanguard__grid">
            <AnimatePresence mode="wait">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="blog-vanguard__post"
                  onMouseEnter={() => setHoveredPost(post.id)}
                  onMouseLeave={() => setHoveredPost(null)}
                >
                  <div className="blog-vanguard__post-image">
                    <img src={post.image} alt={post.title} />
                    <span 
                      className="blog-vanguard__post-category"
                      style={{ background: post.categoryColor }}
                    >
                      {post.category}
                    </span>
                  </div>
                  <div className="blog-vanguard__post-content">
                    <h3 className="blog-vanguard__post-title">{post.title}</h3>
                    <p className="blog-vanguard__post-excerpt">{post.excerpt}</p>
                    <div className="blog-vanguard__post-meta">
                      <div className="blog-vanguard__post-author">
                        <div 
                          className="blog-vanguard__post-avatar"
                          style={{ background: post.categoryColor }}
                        >
                          {post.authorAvatar}
                        </div>
                        <span className="blog-vanguard__post-author-name">{post.author}</span>
                      </div>
                      <div className="blog-vanguard__post-stats">
                        <span><Clock size={12} /> {post.readTime}</span>
                        <span><Heart size={12} /> {post.likes}</span>
                      </div>
                    </div>
                    <Link to="/blog" className="blog-vanguard__post-link">
                      Read More <ArrowRight size={14} />
                    </Link>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="blog-vanguard__newsletter">
        <div className="blog-vanguard__container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="blog-vanguard__newsletter-card"
          >
            <div className="blog-vanguard__newsletter-icon">
              <Zap size={24} />
            </div>
            <h3 className="blog-vanguard__newsletter-title">Stay Ahead of the Curve</h3>
            <p className="blog-vanguard__newsletter-desc">
              Get our latest insights on AI, fintech, digital finance, and transformation delivered weekly.
            </p>
            <div className="blog-vanguard__newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="blog-vanguard__newsletter-input"
              />
              <button className="blog-vanguard__newsletter-btn">
                Subscribe <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* ============================================================
           BLOG VANGUARD - MODERN, FRESH, UNIQUE
           ============================================================ */

        .blog-vanguard {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: #0F172A;
        }

        .blog-vanguard__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 28px;
        }

        /* ---- Hero ---- */
        .blog-vanguard__hero {
          position: relative;
          padding: 5rem 0 4rem;
          overflow: hidden;
          background: linear-gradient(160deg, #0F172A 0%, #1E293B 50%, #0F172A 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }

        .blog-vanguard__hero-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }

        .blog-vanguard__hero-orb {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.06), transparent 70%);
          border-radius: 50%;
          filter: blur(80px);
        }

        .blog-vanguard__hero-grid {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
        }

        .blog-vanguard__hero-content {
          position: relative;
          z-index: 10;
          text-align: center;
          max-width: 700px;
          margin: 0 auto;
        }

        .blog-vanguard__hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.4rem 1.25rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 100px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #94A3B8;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 1.25rem;
        }

        .blog-vanguard__hero-badge svg {
          color: #FBBF24;
        }

        .blog-vanguard__hero-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: clamp(2.4rem, 4vw, 3.6rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 1rem;
        }

        .blog-vanguard__hero-accent {
          background: linear-gradient(135deg, #818CF8 0%, #F472B6 50%, #FBBF24 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .blog-vanguard__hero-desc {
          font-size: 1.05rem;
          color: #94A3B8;
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* ---- Featured ---- */
        .blog-vanguard__featured {
          padding: 3rem 0 2rem;
          background: #F8FAFC;
        }

        .blog-vanguard__featured-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          background: #FFFFFF;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
          border: 1px solid #E2E8F0;
        }

        .blog-vanguard__featured-image {
          position: relative;
          overflow: hidden;
          min-height: 300px;
        }

        .blog-vanguard__featured-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-vanguard__featured-card:hover .blog-vanguard__featured-image img {
          transform: scale(1.03);
        }

        .blog-vanguard__featured-tag {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.3rem 0.8rem;
          background: #F59E0B;
          color: #FFFFFF;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          border-radius: 6px;
        }

        .blog-vanguard__featured-content {
          padding: 2.5rem 2.5rem 2.5rem 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .blog-vanguard__featured-meta {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .blog-vanguard__featured-category {
          font-size: 0.7rem;
          font-weight: 600;
          padding: 0.25rem 0.75rem;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .blog-vanguard__featured-date {
          font-size: 0.8rem;
          color: #94A3B8;
        }

        .blog-vanguard__featured-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.6rem;
          font-weight: 800;
          color: #0F172A;
          line-height: 1.2;
          margin-bottom: 0.75rem;
        }

        .blog-vanguard__featured-excerpt {
          font-size: 0.95rem;
          color: #64748B;
          line-height: 1.7;
          margin-bottom: 1.5rem;
        }

        .blog-vanguard__featured-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .blog-vanguard__featured-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .blog-vanguard__featured-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.85rem;
        }

        .blog-vanguard__featured-author-name {
          font-weight: 600;
          font-size: 0.9rem;
          color: #0F172A;
        }

        .blog-vanguard__featured-author-role {
          font-size: 0.75rem;
          color: #94A3B8;
        }

        .blog-vanguard__featured-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.5rem;
          background: #2563EB;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.85rem;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .blog-vanguard__featured-btn:hover {
          background: #1D4ED8;
          transform: translateX(4px);
        }

        /* ---- Filter ---- */
        .blog-vanguard__filter {
          padding: 2rem 0 1.5rem;
          background: #FFFFFF;
          border-bottom: 1px solid #E2E8F0;
        }

        .blog-vanguard__filter-wrap {
          display: flex;
          gap: 0.5rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .blog-vanguard__filter-btn {
          padding: 0.4rem 1.25rem;
          border-radius: 100px;
          border: 1px solid #E2E8F0;
          background: #FFFFFF;
          font-size: 0.8rem;
          font-weight: 500;
          color: #64748B;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .blog-vanguard__filter-btn:hover {
          border-color: #94A3B8;
          color: #0F172A;
        }

        .blog-vanguard__filter-btn.active {
          background: #2563EB;
          border-color: #2563EB;
          color: #FFFFFF;
        }

        /* ---- Grid ---- */
        .blog-vanguard__grid-section {
          padding: 3rem 0 4rem;
          background: #F8FAFC;
        }

        .blog-vanguard__grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .blog-vanguard__post {
          background: #FFFFFF;
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid #E2E8F0;
          transition: all 0.4s ease;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.02);
        }

        .blog-vanguard__post:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.06);
          border-color: #CBD5E1;
        }

        .blog-vanguard__post-image {
          position: relative;
          height: 180px;
          overflow: hidden;
        }

        .blog-vanguard__post-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .blog-vanguard__post:hover .blog-vanguard__post-image img {
          transform: scale(1.05);
        }

        .blog-vanguard__post-category {
          position: absolute;
          bottom: 0.75rem;
          left: 0.75rem;
          padding: 0.2rem 0.7rem;
          color: #FFFFFF;
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          border-radius: 4px;
        }

        .blog-vanguard__post-content {
          padding: 1.25rem;
        }

        .blog-vanguard__post-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1rem;
          font-weight: 700;
          color: #0F172A;
          line-height: 1.3;
          margin-bottom: 0.4rem;
        }

        .blog-vanguard__post-excerpt {
          font-size: 0.85rem;
          color: #64748B;
          line-height: 1.6;
          margin-bottom: 1rem;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .blog-vanguard__post-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 1rem;
          padding-top: 0.75rem;
          border-top: 1px solid #F1F5F9;
        }

        .blog-vanguard__post-author {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .blog-vanguard__post-avatar {
          width: 28px;
          height: 28px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #FFFFFF;
          font-weight: 700;
          font-size: 0.6rem;
        }

        .blog-vanguard__post-author-name {
          font-size: 0.8rem;
          font-weight: 500;
          color: #0F172A;
        }

        .blog-vanguard__post-stats {
          display: flex;
          gap: 0.75rem;
          font-size: 0.7rem;
          color: #94A3B8;
        }

        .blog-vanguard__post-stats span {
          display: flex;
          align-items: center;
          gap: 0.2rem;
        }

        .blog-vanguard__post-link {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          font-size: 0.8rem;
          font-weight: 600;
          color: #2563EB;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .blog-vanguard__post-link:hover {
          gap: 0.6rem;
          color: #1D4ED8;
        }

        /* ---- Newsletter ---- */
        .blog-vanguard__newsletter {
          padding: 4rem 0;
          background: #FFFFFF;
        }

        .blog-vanguard__newsletter-card {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          padding: 3rem;
          background: #F8FAFC;
          border-radius: 20px;
          border: 1px solid #E2E8F0;
        }

        .blog-vanguard__newsletter-icon {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #EEF2FF;
          color: #2563EB;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
        }

        .blog-vanguard__newsletter-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #0F172A;
          margin-bottom: 0.5rem;
        }

        .blog-vanguard__newsletter-desc {
          font-size: 0.95rem;
          color: #64748B;
          margin-bottom: 1.5rem;
        }

        .blog-vanguard__newsletter-form {
          display: flex;
          gap: 0.75rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .blog-vanguard__newsletter-input {
          padding: 0.7rem 1.25rem;
          border: 1px solid #E2E8F0;
          border-radius: 10px;
          font-size: 0.9rem;
          flex: 1;
          min-width: 200px;
          max-width: 340px;
          transition: border-color 0.3s ease;
        }

        .blog-vanguard__newsletter-input:focus {
          outline: none;
          border-color: #2563EB;
        }

        .blog-vanguard__newsletter-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.7rem 1.5rem;
          background: #2563EB;
          color: #FFFFFF;
          font-weight: 600;
          font-size: 0.9rem;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .blog-vanguard__newsletter-btn:hover {
          background: #1D4ED8;
          transform: translateX(4px);
        }

        /* ===== Responsive ===== */
        @media (max-width: 1024px) {
          .blog-vanguard__featured-card {
            grid-template-columns: 1fr;
          }
          .blog-vanguard__featured-content {
            padding: 2rem;
          }
          .blog-vanguard__grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .blog-vanguard__container {
            padding: 0 16px;
          }
          .blog-vanguard__hero {
            padding: 3.5rem 0;
          }
          .blog-vanguard__hero-title {
            font-size: 2rem;
          }
          .blog-vanguard__grid {
            grid-template-columns: 1fr;
          }
          .blog-vanguard__featured-title {
            font-size: 1.3rem;
          }
          .blog-vanguard__featured-footer {
            flex-direction: column;
            align-items: flex-start;
          }
          .blog-vanguard__newsletter-card {
            padding: 2rem 1.5rem;
          }
        }

        @media (max-width: 480px) {
          .blog-vanguard__hero-title {
            font-size: 1.6rem;
          }
          .blog-vanguard__post-image {
            height: 140px;
          }
          .blog-vanguard__featured-image {
            min-height: 200px;
          }
        }
      `}</style>
    </div>
  )
}