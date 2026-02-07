import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [breatheText, setBreatheText] = useState('Inhale...')
  const [isScrolled, setIsScrolled] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
  const [activeService, setActiveService] = useState(null)
  const [expandedService, setExpandedService] = useState(null)
  const [isBreathing, setIsBreathing] = useState(false)
  const [selectedMood, setSelectedMood] = useState(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Breathing animation
  useEffect(() => {
    if (isBreathing) {
      const breatheInterval = setInterval(() => {
        setBreatheText(prev => prev === 'Inhale...' ? 'Exhale...' : 'Inhale...')
      }, 4000)
      return () => clearInterval(breatheInterval)
    }
  }, [isBreathing])

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Smooth scroll to section
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const services = [
    {
      id: 1,
      name: 'General Yoga Classes',
      description: 'Traditional yoga practices for all levels. Build strength, flexibility, and inner peace.',
      icon: '🧘‍♀️',
      benefits: ['Improves flexibility', 'Builds muscle strength', 'Enhances posture', 'Boosts energy levels'],
      duration: '60 mins',
      level: 'All Levels'
    },
    {
      id: 2,
      name: 'Weight Loss Yoga',
      description: 'Specialized sequences designed to boost metabolism and burn calories effectively.',
      icon: '🔥',
      benefits: ['Burns calories', 'Boosts metabolism', 'Tones muscles', 'Increases stamina'],
      duration: '75 mins',
      level: 'Intermediate'
    },
    {
      id: 3,
      name: 'Back Pain Therapy',
      description: 'Therapeutic yoga to relieve chronic back pain and improve spinal health.',
      icon: '💆‍♀️',
      benefits: ['Relieves back pain', 'Improves spine alignment', 'Strengthens core', 'Prevents future injury'],
      duration: '50 mins',
      level: 'Beginner-Friendly'
    },
    {
      id: 4,
      name: 'Stress Relief Yoga',
      description: 'Calming practices to reduce anxiety and restore mental balance.',
      icon: '🌸',
      benefits: ['Reduces anxiety', 'Calms the mind', 'Improves sleep', 'Enhances mood'],
      duration: '60 mins',
      level: 'All Levels'
    },
    {
      id: 5,
      name: 'Meditation Sessions',
      description: 'Guided meditation for mindfulness, clarity, and emotional well-being.',
      icon: '🕉️',
      benefits: ['Increases focus', 'Reduces stress', 'Improves emotional health', 'Enhances self-awareness'],
      duration: '30 mins',
      level: 'Beginner-Friendly'
    },
    {
      id: 6,
      name: 'Personal Training',
      description: 'One-on-one customized sessions tailored to your unique goals and needs.',
      icon: '⭐',
      benefits: ['Personalized attention', 'Custom workout plan', 'Faster results', 'Flexible scheduling'],
      duration: 'Flexible',
      level: 'Customized'
    }
  ]

  const moods = [
    { id: 1, emoji: '😌', label: 'Relaxed', service: 'General Yoga Classes' },
    { id: 2, emoji: '😫', label: 'Stressed', service: 'Stress Relief Yoga' },
    { id: 3, emoji: '😴', label: 'Low energy', service: 'Weight Loss Yoga' },
    { id: 4, emoji: '😤', label: 'Body pain', service: 'Back Pain Therapy' }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      review: 'After 3 months of yoga therapy, my chronic back pain is completely gone. Life-changing experience!',
      rating: 5,
      image: '👩'
    },
    {
      name: 'Michael Chen',
      review: 'Lost 15 kg with the weight loss yoga program. The trainer is incredibly knowledgeable and supportive.',
      rating: 5,
      image: '👨'
    },
    {
      name: 'Priya Sharma',
      review: 'The meditation sessions have helped me manage stress and anxiety. I feel more centered and peaceful.',
      rating: 5,
      image: '👩‍🦱'
    },
    {
      name: 'David Miller',
      review: 'Professional, patient, and passionate. Best yoga instructor I have worked with!',
      rating: 5,
      image: '👨‍🦰'
    }
  ]

  return (
    <div className="app">
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">YogGuru</div>
          <ul className="nav-menu">
            <li onClick={() => scrollToSection('home')}>Home</li>
            <li onClick={() => scrollToSection('about')}>About</li>
            <li onClick={() => scrollToSection('services')}>Services</li>
            <li onClick={() => scrollToSection('testimonials')}>Testimonials</li>
            <li onClick={() => scrollToSection('gallery')}>Gallery</li>
            <li onClick={() => scrollToSection('contact')}>Contact</li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-left">
            <h1 className="hero-title">Namaste, I'm Priya Mehta</h1>
            <p className="hero-tagline">Transform your body and mind with personalized yoga therapy</p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={() => scrollToSection('services')}>
                View Services
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                Contact Now
              </button>
            </div>
          </div>
          
          <div className="hero-right">
            <div className="breathing-wrapper">
              <h3 className="breathing-title">Breathing Exercise</h3>
              <div className="breathing-circle">
                <div className={`circle ${isBreathing ? 'active' : ''}`}></div>
                <div className={`breathe-text ${isBreathing ? 'visible' : ''}`}>{breatheText}</div>
              </div>
              <button 
                className={`btn ${isBreathing ? 'btn-breathe-stop' : 'btn-breathe'}`}
                onClick={() => setIsBreathing(!isBreathing)}
              >
                {isBreathing ? '⏸️ Stop Exercise' : '🫁 Start Breathing'}
              </button>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow">↓</div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <div className="about-content">
            <div className="about-image">
              <div className="image-placeholder">
                <span className="placeholder-icon">👤</span>
              </div>
            </div>
            <div className="about-text">
              <h2 className="section-title">About Me</h2>
              <div className="certifications">
                <div className="cert-badge">✓ Certified Yoga Instructor (RYT 500)</div>
                <div className="cert-badge">✓ Yoga Therapy Specialist</div>
                <div className="cert-badge">✓ Meditation & Mindfulness Coach</div>
              </div>
              <div className="experience">
                <h3>10+ Years of Experience</h3>
                <p>Helping people transform their lives through yoga</p>
              </div>
              <div className="specializations">
                <h3>Specializations</h3>
                <ul>
                  <li>Therapeutic Yoga for Pain Management</li>
                  <li>Weight Loss & Fitness</li>
                  <li>Stress & Anxiety Relief</li>
                  <li>Meditation & Mindfulness</li>
                  <li>Prenatal & Postnatal Yoga</li>
                </ul>
              </div>
              <div className="personal-message">
                <p>"Yoga is not about touching your toes, it's about what you learn on the way down. My mission is to guide you on a journey of self-discovery, healing, and transformation. Whether you're seeking relief from pain, stress, or simply want to improve your overall well-being, I'm here to support you every step of the way."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mood-Based Yoga Selector */}
      <section className="mood-selector">
        <div className="container">
          <h2 className="section-title">How Are You Feeling Today?</h2>
          <p className="section-subtitle">Choose your mood and discover the perfect yoga practice</p>
          <div className="mood-options">
            {moods.map((mood) => (
              <div
                key={mood.id}
                className={`mood-card ${selectedMood === mood.id ? 'selected' : ''}`}
                onClick={() => setSelectedMood(mood.id)}
              >
                <div className="mood-emoji">{mood.emoji}</div>
                <div className="mood-label">{mood.label}</div>
                {selectedMood === mood.id && (
                  <div className="check-mark">✓</div>
                )}
              </div>
            ))}
          </div>
          {selectedMood && (
            <div className="mood-recommendation">
              <div className="recommendation-card">
                <h3>Perfect for you!</h3>
                <div className="recommended-service">
                  <span className="rec-icon">{services.find(s => s.name === moods.find(m => m.id === selectedMood).service)?.icon}</span>
                  <div className="rec-info">
                    <h4>{moods.find(m => m.id === selectedMood).service}</h4>
                    <p>{services.find(s => s.name === moods.find(m => m.id === selectedMood).service)?.description}</p>
                  </div>
                </div>
                <button className="btn btn-primary btn-large" onClick={() => scrollToSection('contact')}>
                  Book This Session
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="section-title">My Services</h2>
          <p className="section-subtitle">Tap to explore each service</p>
          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                key={service.id} 
                className={`service-card ${expandedService === service.id ? 'expanded' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setExpandedService(expandedService === service.id ? null : service.id)}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
                <p className="service-description">{service.description}</p>
                
                {expandedService === service.id && (
                  <div className="service-details">
                    <div className="service-meta">
                      <span className="meta-item">⏱️ {service.duration}</span>
                      <span className="meta-item">📊 {service.level}</span>
                    </div>
                    <div className="service-benefits">
                      <h4>Benefits:</h4>
                      <ul>
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx}>✓ {benefit}</li>
                        ))}
                      </ul>
                    </div>
                    <button className="btn btn-primary" onClick={(e) => {
                      e.stopPropagation();
                      scrollToSection('contact');
                    }}>
                      Contact to Book
                    </button>
                  </div>
                )}
                
                {expandedService !== service.id && (
                  <div className="tap-hint">Tap to learn more</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Transformation */}
      <section className="transformation">
        <div className="container">
          <h2 className="section-title">Real Transformations</h2>
          <p className="section-subtitle">See the journey of healing and growth</p>
          <div className="slider-container">
            <div className="before-after">
              <div className="before-image" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
                <div className="image-content before">
                  <span className="label">Before</span>
                  <div className="posture-demo">
                    <div className="posture-icon">🧍</div>
                    <p>Poor Posture</p>
                  </div>
                </div>
              </div>
              <div className="after-image">
                <div className="image-content after">
                  <span className="label">After</span>
                  <div className="posture-demo">
                    <div className="posture-icon">🧘</div>
                    <p>Improved Alignment</p>
                  </div>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={(e) => setSliderPosition(e.target.value)}
                className="slider"
              />
              <div className="slider-handle" style={{ left: `${sliderPosition}%` }}>
                <div className="handle-line"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">What My Clients Say</h2>
          <p className="section-subtitle">Swipe to read more stories</p>
          <div className="testimonials-wrapper">
            <button 
              className="slider-btn prev"
              onClick={() => setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1)}
              aria-label="Previous testimonial"
            >
              ‹
            </button>
            <div className="testimonials-slider">
              <div className="testimonial-track" style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="testimonial-card"
                  >
                    <div className="testimonial-avatar">{testimonial.image}</div>
                    <div className="stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i}>⭐</span>
                      ))}
                    </div>
                    <p className="testimonial-text">"{testimonial.review}"</p>
                    <p className="testimonial-name">— {testimonial.name}</p>
                  </div>
                ))}
              </div>
            </div>
            <button 
              className="slider-btn next"
              onClick={() => setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1)}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
          <div className="slider-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentTestimonial === index ? 'active' : ''}`}
                onClick={() => setCurrentTestimonial(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2 className="section-title">Gallery</h2>
          <p className="section-subtitle">Moments from our yoga journey</p>
          <div className="gallery-layout">
            <div className="gallery-featured">
              <img 
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&h=800&fit=crop" 
                alt="Yoga Practice"
                className="gallery-img"
              />
              <div className="gallery-overlay">
                <span className="gallery-icon">🧘‍♀️</span>
                <p>Yoga Practice</p>
              </div>
            </div>
            <div className="gallery-row">
              <div className="gallery-item">
                <img 
                  src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=400&fit=crop" 
                  alt="Therapy Session"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-icon">💆‍♀️</span>
                  <p>Therapy</p>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop" 
                  alt="Meditation"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-icon">🕉️</span>
                  <p>Meditation</p>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=400&fit=crop" 
                  alt="Studio Space"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-icon">🏡</span>
                  <p>Studio</p>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=400&h=400&fit=crop" 
                  alt="Outdoor Session"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-icon">🌅</span>
                  <p>Outdoor</p>
                </div>
              </div>
              <div className="gallery-item">
                <img 
                  src="https://images.unsplash.com/photo-1588286840104-8957b019727f?w=400&h=400&fit=crop" 
                  alt="Peaceful Moment"
                  className="gallery-img"
                />
                <div className="gallery-overlay">
                  <span className="gallery-icon">🙏</span>
                  <p>Peace</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Book Your First Session</h2>
          <p className="section-subtitle">Let's start your transformation journey today</p>
          <div className="contact-grid">
            <div className="contact-left">
              <div className="contact-intro">
                <h3>Get In Touch</h3>
                <p>Ready to begin your wellness journey? Reach out and let's create a personalized plan for you.</p>
              </div>
              
              <div className="contact-methods">
                <a href="tel:+15551234567" className="contact-method">
                  <div className="method-icon">📞</div>
                  <div className="method-info">
                    <h4>Call Me</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </a>
                
                <a href="mailto:priya@yogguru.com" className="contact-method">
                  <div className="method-icon">✉️</div>
                  <div className="method-info">
                    <h4>Email</h4>
                    <p>priya@yogguru.com</p>
                  </div>
                </a>
                
                <a href="https://wa.me/15551234567" target="_blank" rel="noopener noreferrer" className="contact-method whatsapp">
                  <div className="method-icon">💬</div>
                  <div className="method-info">
                    <h4>WhatsApp</h4>
                    <p>Chat instantly</p>
                  </div>
                </a>
                
                <div className="contact-method">
                  <div className="method-icon">📍</div>
                  <div className="method-info">
                    <h4>Location</h4>
                    <p>123 Wellness Street, Yoga City</p>
                  </div>
                </div>
              </div>
              
              <div className="contact-hours">
                <h4>🕒 Available Hours</h4>
                <div className="hours-list">
                  <div className="hour-item">
                    <span>Monday - Friday</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span>Saturday</span>
                    <span>8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="hour-item">
                    <span>Sunday</span>
                    <span>9:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="contact-right">
              <div className="contact-form-card">
                <h3>Send a Message</h3>
                <form className="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input type="text" name="name" placeholder="John Doe" required />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label>Email</label>
                      <input type="email" name="email" placeholder="john@example.com" required />
                    </div>
                    <div className="form-group">
                      <label>Phone</label>
                      <input type="tel" name="phone" placeholder="(555) 123-4567" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Service Interest</label>
                    <select name="service" required>
                      <option value="">Choose a service</option>
                      {services.map(service => (
                        <option key={service.id} value={service.name}>{service.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Your Message</label>
                    <textarea name="message" placeholder="Tell me about your wellness goals and what you'd like to achieve..." rows="5" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-submit">
                    📨 Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Buttons */}
      <div className="floating-actions">
        <a 
          href="https://wa.me/15551234567" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="floating-btn floating-whatsapp"
          title="Chat on WhatsApp"
        >
          <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </a>
        
        <button 
          className="floating-btn floating-book" 
          onClick={() => scrollToSection('contact')}
          title="Book a Session"
        >
          <svg className="btn-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
          </svg>
        </button>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 YogGuru - Priya Mehta. All rights reserved.</p>
          <p className="footer-tagline">Namaste 🙏</p>
        </div>
      </footer>
    </div>
  )
}

export default App
