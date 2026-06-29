import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, Clock, User, Tag, Calendar, Heart, 
  Share2, Bookmark, Eye, TrendingUp, Zap, Sparkles
} from 'lucide-react'
import { api } from '../api'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  category: string
  category_color: string
  author: string
  author_avatar: string
  date: string
  read_time: string
  featured: boolean
  image: string
  likes: number
  comments: number
  slug: string
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

  // Get unique categories from posts
  const categories = ['All', ...new Set(posts.map(p => p.category))]

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true)
        const data = await api.getBlogPosts()
        const postList = data.results || data || []
        setPosts(postList)
      } catch (error) {
        console.error('Error fetching blog posts:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  const featured = posts.find(p => p.featured)
  const filteredPosts = activeCategory === 'All' 
    ? posts.filter(p => !p.featured)
    : posts.filter(p => p.category === activeCategory && !p.featured)

  // Hero section - Full screen image only, no text
  const heroSection = (
    <section className="blog-vanguard__hero">
      <div className="blog-vanguard__hero-bg">
        <img 
          src="https://images.unsplash.com/photo-1563986768711-b3bde3dc821e"
          alt="Blog hero background"
          className="blog-vanguard__hero-image"
        />
        <div className="blog-vanguard__hero-overlay" />
      </div>
    </section>
  )

  if (loading) {
    return (
      <div className="blog-vanguard">
        {heroSection}
        <div className="blog-vanguard__container" style={{ padding: '2rem 0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.1rem', color: '#64748B' }}>Loading posts...</div>
        </div>
      </div>
    )
  }

  if (posts.length === 0) {
    return (
      <div className="blog-vanguard">
        {heroSection}
        <div className="blog-vanguard__container" style={{ padding: '2rem 0', textAlign: 'center' }}>
          <div style={{ fontSize: '1.1rem', color: '#64748B' }}>No blog posts found.</div>
        </div>
      </div>
    )
  }

  return (
    <div className="blog-vanguard">
      {/* Hero - Full Screen Image Only */}
      {heroSection}

      {/* Featured Article */}
      {featured && (
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
                    style={{ background: `${featured.category_color}12`, color: featured.category_color }}
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
                      style={{ background: featured.category_color }}
                    >
                      {featured.author_avatar}
                    </div>
                    <div>
                      <div className="blog-vanguard__featured-author-name">{featured.author}</div>
                      <div className="blog-vanguard__featured-author-role">Contributor</div>
                    </div>
                  </div>
                  <Link to={`/blog/${featured.slug}`} className="blog-vanguard__featured-btn">
                    Read Article <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

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
                      style={{ background: post.category_color }}
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
                          style={{ background: post.category_color }}
                        >
                          {post.author_avatar}
                        </div>
                        <span className="blog-vanguard__post-author-name">{post.author}</span>
                      </div>
                      <div className="blog-vanguard__post-stats">
                        <span><Clock size={12} /> {post.read_time}</span>
                        <span><Heart size={12} /> {post.likes}</span>
                      </div>
                    </div>
                    <Link to={`/blog/${post.slug}`} className="blog-vanguard__post-link">
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

        /* ---- Hero Full Screen with Image Only ---- */
        .blog-vanguard__hero {
          position: relative;
          min-height: 100vh;
          width: 100%;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .blog-vanguard__hero-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
        }

        .blog-vanguard__hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .blog-vanguard__hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(15, 23, 42, 0.6) 0%, rgba(15, 23, 42, 0.3) 50%, rgba(15, 23, 42, 0.6) 100%);
          z-index: 1;
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
          .blog-vanguard__hero {
            min-height: 80vh;
          }
        }

        @media (max-width: 768px) {
          .blog-vanguard__container {
            padding: 0 16px;
          }
          .blog-vanguard__hero {
            min-height: 70vh;
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
          .blog-vanguard__hero {
            min-height: 60vh;
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