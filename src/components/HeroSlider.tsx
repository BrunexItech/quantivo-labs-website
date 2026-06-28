import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section className="hero-welcome">
      {/* Premium Background */}
      <div className="hero-welcome__bg">
        <div className="hero-welcome__gradient" />
        <div className="hero-welcome__mesh" />
        <div className="hero-welcome__orb hero-welcome__orb--1" />
        <div className="hero-welcome__orb hero-welcome__orb--2" />
        <div className="hero-welcome__orb hero-welcome__orb--3" />
        <div className="hero-welcome__orb hero-welcome__orb--4" />
      </div>

      {/* Floating Particles */}
      <div className="hero-welcome__particles">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="hero-welcome__particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="hero-welcome__container">
        <div className="hero-welcome__grid">
          {/* Content - Left Column */}
          <div className="hero-welcome__content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="hero-welcome__tag"
            >
              <span className="hero-welcome__tag-dot" />
              <span>Welcome to Quantivo Labs</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="hero-welcome__title"
            >
              Building Africa's
              <span className="hero-welcome__title-highlight">
                Digital Future
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="hero-welcome__desc"
            >
              We design and deliver AI-powered platforms that automate operations, 
              optimize performance, and enable intelligent growth for businesses 
              and institutions across Africa.
            </motion.p>
          </div>

          {/* Visual - Right Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hero-welcome__visual"
          >
            <div className="hero-welcome__visual-container">
              {/* Outer Glow */}
              <div className="hero-welcome__glow-ring" />

              {/* Rotating Rings */}
              <motion.div
                className="hero-welcome__ring hero-welcome__ring--1"
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
              >
                <div className="hero-welcome__ring-dash" />
                <div className="hero-welcome__ring-dash hero-welcome__ring-dash--2" />
                <div className="hero-welcome__ring-dash hero-welcome__ring-dash--3" />
              </motion.div>

              <motion.div
                className="hero-welcome__ring hero-welcome__ring--2"
                animate={{ rotate: -360 }}
                transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
              >
                <div className="hero-welcome__ring-dash" />
                <div className="hero-welcome__ring-dash hero-welcome__ring-dash--2" />
                <div className="hero-welcome__ring-dash hero-welcome__ring-dash--3" />
              </motion.div>

              <motion.div
                className="hero-welcome__ring hero-welcome__ring--3"
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
              >
                <div className="hero-welcome__ring-dash" />
                <div className="hero-welcome__ring-dash hero-welcome__ring-dash--2" />
                <div className="hero-welcome__ring-dash hero-welcome__ring-dash--3" />
              </motion.div>

              {/* Center Logo with Glow */}
              <div className="hero-welcome__center">
                <div className="hero-welcome__center-glow" />
                <div className="hero-welcome__center-box">
                  <span className="hero-welcome__center-text">Q</span>
                </div>
              </div>

              {/* Orbiting Dots with Color */}
              {[...Array(6)].map((_, i) => {
                const angle = (i / 6) * Math.PI * 2
                const radius = 155
                return (
                  <motion.div
                    key={i}
                    className="hero-welcome__orbit-dot"
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transformOrigin: '0 0',
                    }}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20 + i * 0.5,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div
                      className="hero-welcome__orbit-dot-inner"
                      style={{
                        transform: `rotate(${angle}rad) translateX(${radius}px)`,
                      }}
                    />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>

        {/* ===== BUTTONS - BELOW THE VISUAL ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="hero-welcome__actions-wrapper"
        >
          <div className="hero-welcome__actions">
            <Link to="/products" className="hero-welcome__btn-primary">
              Explore Solutions
              <ArrowRight size={18} className="hero-welcome__btn-icon" />
            </Link>
            <Link to="/contact" className="hero-welcome__btn-secondary">
              <Phone size={18} />
              Talk to Us
            </Link>
          </div>
        </motion.div>
      </div>

      <style>{`
        /* ================================================================
           HERO WELCOME - BUTTONS BELOW VISUAL WITH SPACING
           ================================================================ */

        .hero-welcome {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #0b1120;
          padding-top: 72px;
        }

        /* ---- Premium Background ---- */
        .hero-welcome__bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .hero-welcome__gradient {
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse at 20% 50%, rgba(37, 99, 235, 0.06) 0%, transparent 60%),
            radial-gradient(ellipse at 80% 50%, rgba(124, 58, 237, 0.04) 0%, transparent 60%),
            radial-gradient(ellipse at 50% 80%, rgba(20, 184, 166, 0.02) 0%, transparent 40%);
        }

        .hero-welcome__mesh {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 80px 80px;
          mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
        }

        .hero-welcome__orb {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          pointer-events: none;
        }

        .hero-welcome__orb--1 {
          top: 20%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: rgba(37, 99, 235, 0.08);
          animation: welcomeOrbFloat 20s ease-in-out infinite;
        }

        .hero-welcome__orb--2 {
          bottom: 20%;
          right: -10%;
          width: 450px;
          height: 450px;
          background: rgba(124, 58, 237, 0.06);
          animation: welcomeOrbFloat 25s ease-in-out infinite reverse;
        }

        .hero-welcome__orb--3 {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 500px;
          height: 500px;
          background: rgba(20, 184, 166, 0.03);
          animation: welcomeOrbPulse 15s ease-in-out infinite;
        }

        .hero-welcome__orb--4 {
          top: 10%;
          right: 20%;
          width: 300px;
          height: 300px;
          background: rgba(245, 158, 11, 0.03);
          animation: welcomeOrbFloat 22s ease-in-out infinite 3s;
        }

        @keyframes welcomeOrbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(40px, -40px) scale(1.05); }
          66% { transform: translate(-40px, 40px) scale(0.95); }
        }

        @keyframes welcomeOrbPulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.4; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.7; }
        }

        /* ---- Particles ---- */
        .hero-welcome__particles {
          position: absolute;
          inset: 0;
          pointer-events: none;
          overflow: hidden;
        }

        .hero-welcome__particle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.06);
          animation: welcomeParticleFloat 20s ease-in-out infinite;
        }

        @keyframes welcomeParticleFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(-20px, -30px) scale(1.5); opacity: 0.6; }
        }

        /* ---- Container ---- */
        .hero-welcome__container {
          position: relative;
          z-index: 10;
          width: 100%;
          padding: 0 28px;
          max-width: 1240px;
          margin: 0 auto;
        }

        .hero-welcome__grid {
          display: grid;
          gap: 4rem;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .hero-welcome__grid {
            grid-template-columns: 1fr 1fr;
            gap: 5rem;
          }
          .hero-welcome__content {
            order: 1;
          }
          .hero-welcome__visual {
            order: 2;
          }
        }

        /* ---- Content ---- */
        .hero-welcome__content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .hero-welcome__tag {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.6rem 1.5rem;
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(37, 99, 235, 0.12);
          border-radius: 100px;
          width: fit-content;
        }

        .hero-welcome__tag-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #3B82F6;
          animation: welcomeDotPulse 2s ease-in-out infinite;
        }

        @keyframes welcomeDotPulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }

        .hero-welcome__tag span {
          font-size: 0.9rem;
          font-weight: 500;
          color: #93BBFC;
          letter-spacing: 0.04em;
        }

        .hero-welcome__title {
          font-size: clamp(2.4rem, 4.5vw, 4rem);
          font-weight: 800;
          color: #F1F5F9;
          line-height: 1.08;
          letter-spacing: -0.03em;
        }

        .hero-welcome__title-highlight {
          background: linear-gradient(135deg, #60A5FA 0%, #A78BFA 50%, #F472B6 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-welcome__desc {
          font-size: clamp(0.95rem, 1.1vw, 1.05rem);
          color: #94A3B8;
          max-width: 520px;
          line-height: 1.8;
        }

        /* ---- Visual ---- */
        .hero-welcome__visual {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-welcome__visual-container {
          position: relative;
          width: 100%;
          max-width: 420px;
          aspect-ratio: 1/1;
        }

        .hero-welcome__glow-ring {
          position: absolute;
          inset: -30px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.04) 0%, transparent 70%);
          filter: blur(40px);
        }

        .hero-welcome__ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid;
        }

        .hero-welcome__ring--1 {
          border-color: rgba(37, 99, 235, 0.12);
        }

        .hero-welcome__ring--2 {
          inset: 2rem;
          border-color: rgba(124, 58, 237, 0.08);
        }

        .hero-welcome__ring--3 {
          inset: 4rem;
          border-color: rgba(20, 184, 166, 0.06);
        }

        .hero-welcome__ring-dash {
          position: absolute;
          top: -2px;
          left: 50%;
          width: 8px;
          height: 4px;
          background: #3B82F6;
          border-radius: 4px;
          transform: translateX(-50%);
          opacity: 0.6;
        }

        .hero-welcome__ring-dash--2 {
          top: auto;
          bottom: -2px;
          background: #8B5CF6;
          opacity: 0.4;
        }

        .hero-welcome__ring-dash--3 {
          top: 50%;
          left: -2px;
          transform: translateY(-50%) translateX(0);
          background: #14B8A6;
          opacity: 0.3;
          width: 4px;
          height: 8px;
        }

        .hero-welcome__ring--2 .hero-welcome__ring-dash {
          background: #8B5CF6;
        }

        .hero-welcome__ring--2 .hero-welcome__ring-dash--2 {
          background: #14B8A6;
        }

        .hero-welcome__ring--3 .hero-welcome__ring-dash {
          background: #14B8A6;
        }

        .hero-welcome__ring--3 .hero-welcome__ring-dash--2 {
          background: #3B82F6;
        }

        .hero-welcome__center {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .hero-welcome__center-glow {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.15), transparent 70%);
          animation: welcomeCenterGlow 3s ease-in-out infinite;
        }

        @keyframes welcomeCenterGlow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.15); opacity: 1; }
        }

        .hero-welcome__center-box {
          width: 80px;
          height: 80px;
          border-radius: 20px;
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 20px 60px rgba(37, 99, 235, 0.3);
          position: relative;
          z-index: 2;
          transition: transform 0.3s ease;
        }

        .hero-welcome__center-box:hover {
          transform: scale(1.05);
        }

        .hero-welcome__center-text {
          font-size: 2.2rem;
          font-weight: 800;
          color: #FFFFFF;
          font-family: 'Space Grotesk', sans-serif;
        }

        .hero-welcome__orbit-dot-inner {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.2);
          transition: all 0.3s ease;
        }

        .hero-welcome__orbit-dot:nth-child(1) .hero-welcome__orbit-dot-inner {
          background: rgba(37, 99, 235, 0.3);
        }
        .hero-welcome__orbit-dot:nth-child(2) .hero-welcome__orbit-dot-inner {
          background: rgba(124, 58, 237, 0.3);
        }
        .hero-welcome__orbit-dot:nth-child(3) .hero-welcome__orbit-dot-inner {
          background: rgba(20, 184, 166, 0.3);
        }
        .hero-welcome__orbit-dot:nth-child(4) .hero-welcome__orbit-dot-inner {
          background: rgba(59, 130, 246, 0.3);
        }
        .hero-welcome__orbit-dot:nth-child(5) .hero-welcome__orbit-dot-inner {
          background: rgba(124, 58, 237, 0.3);
        }
        .hero-welcome__orbit-dot:nth-child(6) .hero-welcome__orbit-dot-inner {
          background: rgba(20, 184, 166, 0.3);
        }

        /* ---- Actions Wrapper ---- */
        .hero-welcome__actions-wrapper {
          margin-top: 3rem;
          display: flex;
          justify-content: center;
          width: 100%;
        }

        .hero-welcome__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }

        .hero-welcome__btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          color: #FFFFFF;
          font-weight: 600;
          font-size: clamp(0.85rem, 0.95vw, 0.95rem);
          border-radius: 14px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          box-shadow: 0 12px 32px rgba(37, 99, 235, 0.25);
          white-space: nowrap;
        }

        .hero-welcome__btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 20px 48px rgba(37, 99, 235, 0.35);
        }

        .hero-welcome__btn-icon {
          transition: transform 0.3s ease;
        }

        .hero-welcome__btn-primary:hover .hero-welcome__btn-icon {
          transform: translateX(4px);
        }

        .hero-welcome__btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.85rem 2rem;
          background: rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          color: #F1F5F9;
          font-weight: 600;
          font-size: clamp(0.85rem, 0.95vw, 0.95rem);
          border-radius: 14px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          text-decoration: none;
          white-space: nowrap;
        }

        .hero-welcome__btn-secondary:hover {
          background: rgba(255, 255, 255, 0.08);
          transform: translateY(-3px);
          border-color: rgba(255, 255, 255, 0.15);
        }

        /* ================================================================
           RESPONSIVE
           ================================================================ */

        @media (max-width: 1024px) {
          .hero-welcome__container {
            padding: 0 24px;
          }
          .hero-welcome__visual-container {
            max-width: 340px;
          }
          .hero-welcome__orbit-dot-inner {
            transform: translateX(120px) !important;
          }
          .hero-welcome__orb--4 {
            display: none;
          }
          .hero-welcome__actions {
            gap: 1.25rem;
          }
        }

        @media (max-width: 820px) {
          .hero-welcome__container {
            padding: 0 20px;
          }
          .hero-welcome__actions {
            gap: 1rem;
          }
        }

        @media (max-width: 768px) {
          .hero-welcome {
            min-height: auto;
            padding: 5rem 0 3rem;
          }
          .hero-welcome__container {
            padding: 0 16px;
          }
          .hero-welcome__grid {
            gap: 2.5rem;
            display: flex;
            flex-direction: column;
          }
          
          .hero-welcome__content {
            order: 1 !important;
            width: 100%;
            align-items: center;
            text-align: center;
          }
          .hero-welcome__visual {
            order: 2 !important;
            width: 100%;
          }
          
          .hero-welcome__visual-container {
            max-width: 220px;
            margin: 0 auto;
          }
          
          .hero-welcome__title {
            font-size: 1.8rem;
            text-align: center;
          }
          .hero-welcome__title-highlight {
            display: inline;
          }
          
          .hero-welcome__desc {
            font-size: 0.95rem;
            text-align: center;
            max-width: 100%;
            padding: 0 0.5rem;
          }
          
          .hero-welcome__tag {
            margin: 0 auto;
          }
          .hero-welcome__tag span {
            font-size: 0.75rem;
          }
          .hero-welcome__tag {
            padding: 0.4rem 1rem;
          }
          
          .hero-welcome__actions-wrapper {
            order: 3 !important;
            margin-top: 1.5rem;
          }
          
          .hero-welcome__actions {
            flex-direction: row !important;
            justify-content: center;
            width: 100%;
            gap: 0.75rem;
            flex-wrap: wrap;
          }
          
          .hero-welcome__btn-primary,
          .hero-welcome__btn-secondary {
            flex: 1;
            min-width: 120px;
            justify-content: center;
            padding: 0.65rem 1rem;
            font-size: 0.8rem;
            white-space: nowrap;
            width: auto !important;
          }
          
          .hero-welcome__center-box {
            width: 56px;
            height: 56px;
          }
          .hero-welcome__center-text {
            font-size: 1.4rem;
          }
          .hero-welcome__orbit-dot-inner {
            transform: translateX(70px) !important;
          }
          .hero-welcome__center-glow {
            width: 90px;
            height: 90px;
          }
          .hero-welcome__orb--4 {
            display: none;
          }
          .hero-welcome__particles {
            display: none;
          }
          .hero-welcome__ring--2 {
            inset: 1.2rem;
          }
          .hero-welcome__ring--3 {
            inset: 2.4rem;
          }
        }

        @media (max-width: 600px) {
          .hero-welcome__container {
            padding: 0 14px;
          }
          .hero-welcome__actions {
            gap: 0.6rem;
          }
          .hero-welcome__btn-primary,
          .hero-welcome__btn-secondary {
            min-width: 100px;
            padding: 0.55rem 0.75rem;
            font-size: 0.7rem;
          }
          .hero-welcome__btn-primary svg,
          .hero-welcome__btn-secondary svg {
            width: 14px;
            height: 14px;
          }
        }

        @media (max-width: 480px) {
          .hero-welcome {
            padding: 4rem 0 2rem;
          }
          .hero-welcome__container {
            padding: 0 12px;
          }
          .hero-welcome__title {
            font-size: 1.5rem;
          }
          .hero-welcome__desc {
            font-size: 0.85rem;
            padding: 0 0.25rem;
          }
          
          .hero-welcome__visual-container {
            max-width: 160px;
          }
          .hero-welcome__orbit-dot-inner {
            transform: translateX(50px) !important;
          }
          .hero-welcome__ring--2 {
            inset: 1rem;
          }
          .hero-welcome__ring--3 {
            inset: 2rem;
          }
          .hero-welcome__center-box {
            width: 44px;
            height: 44px;
            border-radius: 12px;
          }
          .hero-welcome__center-text {
            font-size: 1.1rem;
          }
          .hero-welcome__center-glow {
            width: 70px;
            height: 70px;
          }
          .hero-welcome__tag span {
            font-size: 0.65rem;
          }
          .hero-welcome__tag {
            padding: 0.3rem 0.75rem;
            gap: 0.4rem;
          }
          .hero-welcome__tag-dot {
            width: 5px;
            height: 5px;
          }
          .hero-welcome__glow-ring {
            inset: -8px;
          }
          .hero-welcome__orb--1,
          .hero-welcome__orb--2,
          .hero-welcome__orb--3 {
            filter: blur(50px);
          }
          
          .hero-welcome__actions-wrapper {
            margin-top: 1rem;
          }
          
          .hero-welcome__actions {
            gap: 0.5rem;
          }
          
          .hero-welcome__btn-primary,
          .hero-welcome__btn-secondary {
            min-width: 80px;
            padding: 0.5rem 0.6rem;
            font-size: 0.65rem;
            gap: 0.3rem;
          }
          .hero-welcome__btn-primary svg,
          .hero-welcome__btn-secondary svg {
            width: 12px;
            height: 12px;
          }
          .hero-welcome__tag {
            padding: 0.25rem 0.6rem;
          }
          .hero-welcome__tag span {
            font-size: 0.6rem;
          }
        }

        @media (max-width: 360px) {
          .hero-welcome__container {
            padding: 0 10px;
          }
          .hero-welcome__title {
            font-size: 1.3rem;
          }
          .hero-welcome__actions {
            gap: 0.4rem;
          }
          .hero-welcome__btn-primary,
          .hero-welcome__btn-secondary {
            min-width: 70px;
            padding: 0.4rem 0.5rem;
            font-size: 0.6rem;
          }
          .hero-welcome__btn-primary svg,
          .hero-welcome__btn-secondary svg {
            width: 10px;
            height: 10px;
          }
        }
      `}</style>
    </section>
  )
}