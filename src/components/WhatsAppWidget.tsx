import { useState, useRef, useEffect } from 'react'
import { X } from 'lucide-react'

interface Message {
  text: string
  sender: 'user' | 'bot'
}

interface QuickReply {
  label: string
  value: string
}

// Replace with your phone number
const PHONE_NUMBER = '254700000000'

const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]>([
    { text: "👋 Hi there! Welcome to Quantivo Labs. How can we help you today?", sender: 'bot' }
  ])
  const [input, setInput] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showBubble, setShowBubble] = useState<boolean>(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const quickReplies: QuickReply[] = [
    { label: '📦 View Products', value: 'I want to see your products' },
    { label: '📞 Contact Sales', value: 'I want to speak to a sales agent' },
    { label: '❓ Ask Question', value: 'I have a question' },
  ]

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(false)
    }, 5000)
    return () => clearTimeout(timer)
  }, [])

  const handleSend = async (text: string): Promise<void> => {
    if (!text.trim()) return

    const userMsg: Message = { text: text.trim(), sender: 'user' }
    setMessages(prev => [...prev, userMsg])
    setInput('')
    setIsLoading(true)
    setShowBubble(false)

    try {
      const response = await fetch('http://127.0.0.1:8008/chat/api/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text.trim() })
      })
      
      const data = await response.json()
      
      if (data.response) {
        setMessages(prev => [...prev, { text: data.response, sender: 'bot' }])
      } else {
        setMessages(prev => [...prev, { 
          text: "I couldn't process that. Please try again or contact us directly.", 
          sender: 'bot' 
        }])
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        text: "Error connecting. Please try again or contact us directly.", 
        sender: 'bot' 
      }])
    }
    setIsLoading(false)
  }

  const handleQuickReply = (text: string): void => {
    handleSend(text)
  }

  const handleWhatsAppRedirect = (): void => {
    const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent('Hello Quantivo Labs, I need assistance with:')}`
    window.open(url, '_blank')
  }

  return (
    <>
      {/* Floating Button with Bubble */}
      <div className="whatsapp-container">
        {/* Chat Bubble Prompt */}
        {showBubble && !isOpen && (
          <div className="whatsapp-bubble">
            <span>💬 Need help? Chat with us!</span>
            <div className="whatsapp-bubble-arrow" />
          </div>
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="whatsapp-trigger"
          aria-label="WhatsApp Chat"
        >
          {isOpen ? (
            <X className="whatsapp-trigger-icon" />
          ) : (
            <svg className="whatsapp-trigger-icon" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="whatsapp-window">
          {/* Header */}
          <div className="whatsapp-header">
            <div className="whatsapp-header-icon">💬</div>
            <div>
              <h3 className="whatsapp-header-title">Quantivo Labs</h3>
              <p className="whatsapp-header-status">Online • Usually replies instantly</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="whatsapp-header-close"
            >
              <X className="whatsapp-header-close-icon" />
            </button>
          </div>

          {/* Messages */}
          <div className="whatsapp-messages">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`whatsapp-message-wrapper ${
                  msg.sender === 'user' ? 'whatsapp-message-wrapper--user' : 'whatsapp-message-wrapper--bot'
                }`}
              >
                <div
                  className={`whatsapp-message ${
                    msg.sender === 'user'
                      ? 'whatsapp-message--user'
                      : 'whatsapp-message--bot'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="whatsapp-message-wrapper whatsapp-message-wrapper--bot">
                <div className="whatsapp-message whatsapp-message--bot whatsapp-message--typing">
                  <span className="whatsapp-typing-dot" />
                  <span className="whatsapp-typing-dot" />
                  <span className="whatsapp-typing-dot" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          <div className="whatsapp-quick-replies">
            {quickReplies.map((reply, idx) => (
              <button
                key={idx}
                onClick={() => handleQuickReply(reply.value)}
                className="whatsapp-quick-reply"
              >
                {reply.label}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="whatsapp-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
              placeholder="Type a message..."
              className="whatsapp-input"
            />
            <button
              onClick={() => handleSend(input)}
              className="whatsapp-send-btn"
            >
              Send
            </button>
          </div>

          {/* WhatsApp Redirect */}
          <div className="whatsapp-redirect">
            <button
              onClick={handleWhatsAppRedirect}
              className="whatsapp-redirect-btn"
            >
              Or continue on WhatsApp →
            </button>
          </div>
        </div>
      )}

      <style>{`
        /* ===== WHATSAPP CONTAINER ===== */
        .whatsapp-container {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          z-index: 50;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          will-change: auto;
        }

        body.menu-open .whatsapp-container {
          position: fixed;
          right: 1.5rem;
          bottom: 1.5rem;
        }

        /* ===== BUBBLE ===== */
        .whatsapp-bubble {
          background: #FFFFFF;
          color: #0F172A;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
          margin-bottom: 0.75rem;
          position: relative;
          border: 1px solid #E2E8F0;
          animation: whatsappBounce 2s infinite;
        }

        .whatsapp-bubble span {
          font-size: 0.875rem;
          font-weight: 500;
        }

        .whatsapp-bubble-arrow {
          position: absolute;
          bottom: -0.5rem;
          right: 1.5rem;
          width: 0.75rem;
          height: 0.75rem;
          background: #FFFFFF;
          transform: rotate(45deg);
          border-right: 1px solid #E2E8F0;
          border-bottom: 1px solid #E2E8F0;
        }

        @keyframes whatsappBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* ===== TRIGGER BUTTON ===== */
        .whatsapp-trigger {
          background: #25D366;
          color: #FFFFFF;
          border: none;
          border-radius: 50%;
          padding: 1rem;
          box-shadow: 0 8px 32px rgba(37, 211, 102, 0.35);
          cursor: pointer;
          transition: all 0.3s ease;
          width: 64px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .whatsapp-trigger:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 40px rgba(37, 211, 102, 0.45);
        }

        .whatsapp-trigger-icon {
          width: 32px;
          height: 32px;
        }

        /* ===== CHAT WINDOW ===== */
        .whatsapp-window {
          position: fixed;
          bottom: 6rem;
          right: 1.5rem;
          z-index: 50;
          width: 320px;
          background: #FFFFFF;
          border-radius: 1rem;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
          border: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          max-height: 500px;
          transition: all 0.3s ease;
        }

        @media (min-width: 640px) {
          .whatsapp-window {
            width: 384px;
          }
        }

        /* ===== HEADER ===== */
        .whatsapp-header {
          background: linear-gradient(135deg, #2563EB, #06B6D4);
          color: #FFFFFF;
          border-radius: 1rem 1rem 0 0;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .whatsapp-header-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
        }

        .whatsapp-header-title {
          font-weight: 700;
          font-size: 0.875rem;
          margin: 0;
        }

        .whatsapp-header-status {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.7);
          margin: 0;
        }

        .whatsapp-header-close {
          margin-left: auto;
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.7);
          cursor: pointer;
          transition: color 0.2s ease;
          padding: 0.25rem;
        }

        .whatsapp-header-close:hover {
          color: #FFFFFF;
        }

        .whatsapp-header-close-icon {
          width: 20px;
          height: 20px;
        }

        /* ===== MESSAGES ===== */
        .whatsapp-messages {
          flex: 1;
          overflow-y: auto;
          padding: 1rem;
          background: #F8FAFC;
          max-height: 288px;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .whatsapp-message-wrapper {
          display: flex;
        }

        .whatsapp-message-wrapper--user {
          justify-content: flex-end;
        }

        .whatsapp-message-wrapper--bot {
          justify-content: flex-start;
        }

        .whatsapp-message {
          max-width: 80%;
          padding: 0.5rem 1rem;
          border-radius: 1rem;
          font-size: 0.875rem;
          line-height: 1.5;
        }

        .whatsapp-message--user {
          background: #2563EB;
          color: #FFFFFF;
          border-bottom-right-radius: 0;
        }

        .whatsapp-message--bot {
          background: #FFFFFF;
          color: #0F172A;
          border: 1px solid #E2E8F0;
          border-bottom-left-radius: 0;
        }

        .whatsapp-message--typing {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          padding: 0.5rem 1rem;
        }

        .whatsapp-typing-dot {
          width: 8px;
          height: 8px;
          background: #94A3B8;
          border-radius: 50%;
          display: inline-block;
          animation: whatsappTyping 1.4s infinite both;
        }

        .whatsapp-typing-dot:nth-child(1) { animation-delay: 0s; }
        .whatsapp-typing-dot:nth-child(2) { animation-delay: 0.2s; }
        .whatsapp-typing-dot:nth-child(3) { animation-delay: 0.4s; }

        @keyframes whatsappTyping {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }

        /* ===== QUICK REPLIES ===== */
        .whatsapp-quick-replies {
          padding: 0.5rem 1rem;
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          border-top: 1px solid #F1F5F9;
        }

        .whatsapp-quick-reply {
          background: #F1F5F9;
          color: #475569;
          border: none;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .whatsapp-quick-reply:hover {
          background: #DBEAFE;
          color: #2563EB;
        }

        /* ===== INPUT ===== */
        .whatsapp-input-container {
          border-top: 1px solid #E2E8F0;
          padding: 0.5rem;
          display: flex;
          gap: 0.5rem;
          border-radius: 0 0 1rem 1rem;
          background: #FFFFFF;
        }

        .whatsapp-input {
          flex: 1;
          padding: 0.5rem 0.75rem;
          border: 1px solid #E2E8F0;
          border-radius: 9999px;
          font-size: 0.875rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .whatsapp-input:focus {
          border-color: #2563EB;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
        }

        .whatsapp-send-btn {
          background: linear-gradient(135deg, #2563EB, #06B6D4);
          color: #FFFFFF;
          border: none;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          cursor: pointer;
          transition: opacity 0.2s ease;
        }

        .whatsapp-send-btn:hover {
          opacity: 0.9;
        }

        /* ===== REDIRECT ===== */
        .whatsapp-redirect {
          border-top: 1px solid #F1F5F9;
          padding: 0.5rem;
          text-align: center;
        }

        .whatsapp-redirect-btn {
          background: none;
          border: none;
          font-size: 0.75rem;
          font-weight: 500;
          color: #2563EB;
          cursor: pointer;
          transition: color 0.2s ease;
        }

        .whatsapp-redirect-btn:hover {
          color: #1D4ED8;
        }

        @media (max-width: 480px) {
          .whatsapp-window {
            width: calc(100vw - 2rem);
            right: 1rem;
            bottom: 5.5rem;
            max-height: 420px;
          }

          .whatsapp-trigger {
            width: 56px;
            height: 56px;
          }

          .whatsapp-trigger-icon {
            width: 28px;
            height: 28px;
          }
        }
      `}</style>
    </>
  )
}

export default WhatsAppWidget