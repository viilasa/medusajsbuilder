import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  ChevronRight,
  ChevronDown,
  Code,
  Rocket,
  Store,
  Zap,
  Users,
  CheckCircle2,
  XCircle,
  Globe,
  Mail,
  Twitter,
  ArrowRight,
  Shield,
  Database,
  Cloud,
  Layers,
  Send,
  Menu,
  X,
  Linkedin
} from 'lucide-react';
import './App.css';

// ===== SCROLL ANIMATION HOOK =====
const useScrollReveal = () => {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// ===== ANIMATED BACKGROUND =====
const AnimatedBackground = () => {
  return (
    <div className="animated-bg">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <div className="noise-overlay"></div>
      <div className="grid-overlay"></div>
    </div>
  );
};

// ===== NAVBAR =====
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar glass"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="navbar-content">
        <a href="/" className="logo">
          <div className="logo-icon">
            <Code className="logo-svg" />
          </div>
          <span className="logo-text">MedusaJS builder</span>
        </a>

        <div className={`nav - links ${mobileMenuOpen ? 'open' : ''} `}>
          <a href="#work" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Work</a>
          <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>

        <motion.a
          href="#contact"
          className="btn btn-primary nav-cta"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
          <ArrowRight className="btn-icon" />
        </motion.a>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <motion.div
          className="mobile-menu"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
        >
          <a href="#work" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Work</a>
          <a href="#services" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
          <a href="#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <a href="#contact" className="btn btn-primary btn-full" onClick={() => setMobileMenuOpen(false)}>
            Get Started
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};

// ===== HERO SECTION =====
const Hero = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section className="hero" ref={containerRef}>
      <motion.div className="hero-content" style={{ y, opacity }}>
        <div className="hero-grid">
          {/* Left Content */}
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="hero-badge">
              <span className="badge-dot"></span>
              <span>Fast-Track Development</span>
            </div>

            <h1 className="hero-title">
              High-Performance Headless <br className="hide-mobile" />
              <span className="text-gradient">eCommerce with Medusa.js</span>
            </h1>

            <p className="hero-description">
              Transition from Shopify to a world with no limits. High-speed builds in
              <strong> 7-14 days</strong> for custom B2B brands and modern marketplaces.
            </p>

            <div className="hero-cta">
              <motion.a
                href="#contact"
                className="btn btn-primary btn-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ChevronRight className="btn-icon" />
              </motion.a>
              <motion.a
                href="#work"
                className="btn btn-ghost btn-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Free Call
              </motion.a>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <span className="stat-value">50+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat">
                <span className="stat-value">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat">
                <span className="stat-value">7 Days</span>
                <span className="stat-label">Average Delivery</span>
              </div>
            </div>
          </motion.div>

          {/* Right Code Block */}
          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="code-window">
              <div className="code-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="code-filename">medusa.config.ts</span>
              </div>
              <pre className="code-content">
                <code>
                  <span className="code-keyword">const</span>{" "}
                  <span className="code-variable">medusa</span> ={" "}
                  <span className="code-keyword">new</span>{" "}
                  <span className="code-class">MedusaAgency</span>();{"\n\n"}
                  <span className="code-variable">medusa</span>.<span className="code-method">optimize</span>({"{"}
                  {"\n  "}checkout:{" "}<span className="code-string">'unlimited'</span>,
                  {"\n  "}performance:{" "}<span className="code-string">'ultra'</span>,
                  {"\n  "}b2b_logic:{" "}<span className="code-string">'custom'</span>,
                  {"\n  "}scalability:{" "}<span className="code-string">'infinite'</span>
                  {"\n"}{"}"});{"\n\n"}
                  <span className="code-comment">// Migration complete in 8 days...</span>
                  {"\n"}<span className="code-comment">// 🚀 Performance: 340%</span>
                </code>
              </pre>
              <div className="code-glow"></div>
            </div>

            {/* Floating Elements */}
            <motion.div
              className="floating-card floating-1"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="floating-icon" />
              <span>3x Faster</span>
            </motion.div>

            <motion.div
              className="floating-card floating-2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <Shield className="floating-icon green" />
              <span>100% Custom</span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

// ===== CLIENTS SECTION =====
const Clients = () => {
  const clients = [
    "TechCorp", "Innovate", "ScaleUp", "GrowthX", "NextGen", "FutureComm"
  ];

  return (
    <section className="clients-section">
      <div className="container">
        <p className="clients-label">Trusted by forward-thinking brands</p>
        <div className="clients-grid">
          {clients.map((client, i) => (
            <motion.div
              key={i}
              className="client-logo"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              {client}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== FEATURES SECTION =====
const Features = () => {
  const features = [
    {
      title: "Founders & Startups",
      desc: "Scale without architectural debt from day one. Launch faster with production-ready commerce.",
      icon: Rocket,
      color: "blue"
    },
    {
      title: "Marketplaces",
      desc: "Complex multi-vendor logic, split payments, and seller management built-in.",
      icon: Store,
      color: "purple"
    },
    {
      title: "B2B Brands",
      desc: "Custom pricing, wholesale tiers, ERP sync, and advanced quote workflows.",
      icon: Users,
      color: "green"
    },
    {
      title: "D2C Powerhouses",
      desc: "Zero-friction checkout with total design control and blazing performance.",
      icon: Zap,
      color: "orange"
    },
  ];

  return (
    <section className="features-section section" id="services">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">Built for Scale</span>
          <h2 className="section-title">Built for the Next Generation of Brands</h2>
          <p className="section-subtitle">
            Scale without the technical debt of legacy platforms. We build custom commerce logic for complex needs.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className={`feature - card reveal delay - ${(i + 1) * 100} `}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              <div className={`feature - icon ${feature.color} `}>
                <feature.icon />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
              <a href="#contact" className="feature-link">
                Get started <ArrowRight className="link-icon" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== COMPARISON SECTION =====
const Comparison = () => {
  const shopifyLimits = [
    "Rigid checkout logic and limited custom fields",
    "Expensive monthly plugin subscriptions",
    "Slow load times due to script bloating",
    "Lack of ownership over core customer data",
    "Limited B2B and wholesale capabilities",
    "Vendor lock-in with proprietary systems"
  ];

  const medusaBenefits = [
    "Fully customizable checkout experience",
    "Open-source with no licensing fees",
    "Lightning-fast headless architecture",
    "Complete data ownership and control",
    "Native B2B, wholesale, and multi-currency",
    "Composable and API-first design"
  ];

  return (
    <section className="comparison-section section">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">Why Switch</span>
          <h2 className="section-title">Stop Settling for Shopify Limits</h2>
          <p className="section-subtitle">
            Platform constraints shouldn't dictate your business strategy. Reclaim control over your data and customer experience.
          </p>
        </div>

        <div className="comparison-grid">
          {/* Shopify Limitations */}
          <motion.div
            className="comparison-card shopify reveal-left"
            whileHover={{ scale: 1.02 }}
          >
            <div className="card-header red">
              <h3>Shopify Limitations</h3>
            </div>
            <ul className="comparison-list">
              {shopifyLimits.map((item, i) => (
                <li key={i}>
                  <XCircle className="list-icon red" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* VS Divider */}
          <div className="vs-divider reveal-scale">
            <span>VS</span>
          </div>

          {/* Medusa Benefits */}
          <motion.div
            className="comparison-card medusa reveal-right"
            whileHover={{ scale: 1.02 }}
          >
            <div className="card-header green">
              <h3>Medusa.js Benefits</h3>
            </div>
            <ul className="comparison-list">
              {medusaBenefits.map((item, i) => (
                <li key={i}>
                  <CheckCircle2 className="list-icon green" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ===== SERVICES SECTION =====
const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Storefronts",
      desc: "Pixel-perfect Next.js or Gatsby storefronts optimized for conversion and performance.",
      features: ["Headless Architecture", "SEO Optimized", "Mobile-First Design"]
    },
    {
      icon: Database,
      title: "Backend Integration",
      desc: "Seamless integration with ERP, CRM, PIM, and payment gateways.",
      features: ["API Development", "Data Migration", "Real-time Sync"]
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      desc: "Scalable deployment on AWS, GCP, or Vercel with 99.99% uptime.",
      features: ["Auto-scaling", "CDN Setup", "Monitoring"]
    },
    {
      icon: Layers,
      title: "Plugin Development",
      desc: "Custom Medusa plugins for unique business requirements.",
      features: ["Custom Workflows", "Third-party Integrations", "White-label Solutions"]
    },
  ];

  return (
    <section className="services-section section" id="work">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-badge">Our Expertise</span>
          <h2 className="section-title">Full-Stack Medusa.js Development</h2>
          <p className="section-subtitle">
            End-to-end commerce solutions from architecture to deployment.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className={`service - card reveal delay - ${(i + 1) * 100} `}
              whileHover={{ y: -8 }}
            >
              <div className="service-icon-wrap">
                <service.icon className="service-icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <ul className="service-features">
                {service.features.map((feature, j) => (
                  <li key={j}>
                    <CheckCircle2 /> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ===== CUSTOM DROPDOWN COMPONENT =====
interface DropdownOption {
  value: string;
  label: string;
  icon: string;
}

interface CustomDropdownProps {
  id: string;
  name: string;
  label: string;
  options: DropdownOption[];
  value: string;
  onChange: (name: string, value: string) => void;
  required?: boolean;
}

const CustomDropdown = ({ id, name, label, options, value, onChange, required }: CustomDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find(opt => opt.value === value) || options[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (optionValue: string) => {
    onChange(name, optionValue);
    setIsOpen(false);
  };

  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <div className="custom-dropdown" ref={dropdownRef}>
        <button
          type="button"
          className={`dropdown - trigger ${isOpen ? 'open' : ''} ${value ? 'has-value' : ''} `}
          onClick={() => setIsOpen(!isOpen)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className="dropdown-selected">
            <span className="dropdown-icon">{selectedOption.icon}</span>
            <span className="dropdown-text">{selectedOption.label}</span>
          </span>
          <ChevronDown className={`dropdown - arrow ${isOpen ? 'rotated' : ''} `} />
        </button>

        {isOpen && (
          <motion.ul
            className="dropdown-menu"
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            role="listbox"
          >
            {options.filter(opt => opt.value !== '').map((option, index) => (
              <motion.li
                key={option.value}
                className={`dropdown - option ${value === option.value ? 'selected' : ''} `}
                onClick={() => handleSelect(option.value)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
                role="option"
                aria-selected={value === option.value}
              >
                <span className="option-icon">{option.icon}</span>
                <span className="option-text">{option.label}</span>
                {value === option.value && <CheckCircle2 className="option-check" />}
              </motion.li>
            ))}
          </motion.ul>
        )}

        {/* Hidden input for form validation */}
        <input
          type="hidden"
          id={id}
          name={name}
          value={value}
          required={required}
        />
      </div>
    </div>
  );
};

// ===== CONTACT FORM SECTION =====
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    workType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const workTypes: DropdownOption[] = [
    { value: '', label: 'Select project type', icon: '📋' },
    { value: 'new-storefront', label: 'New Medusa.js Storefront', icon: '🚀' },
    { value: 'shopify-migration', label: 'Shopify Migration', icon: '🔄' },
    { value: 'b2b-commerce', label: 'B2B Commerce Solution', icon: '🏢' },
    { value: 'marketplace', label: 'Multi-vendor Marketplace', icon: '🏪' },
    { value: 'other', label: 'Other / Not Sure', icon: '💭' }
  ];

  const budgets: DropdownOption[] = [
    { value: '', label: 'Select your budget', icon: '💰' },
    { value: '2k-5k', label: '$2,000 - $5,000', icon: '💵' },
    { value: '5k-10k', label: '$5,000 - $10,000', icon: '💵' },
    { value: '10k-15k', label: '$10,000 - $15,000', icon: '💎' },
    { value: '15k-30k', label: '$15,000 - $30,000', icon: '💎' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDropdownChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate dropdowns
    if (!formData.workType || !formData.budget) {
      return;
    }

    setIsSubmitting(true);

    // Get labels for dropdown values
    const selectedWorkType = workTypes.find(w => w.value === formData.workType)?.label || formData.workType;
    const selectedBudget = budgets.find(b => b.value === formData.budget)?.label || formData.budget;

    try {
      const response = await fetch('https://formsubmit.co/ajax/viilasacontact@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          'Project Type': selectedWorkType,
          'Budget Range': selectedBudget,
          message: formData.message || 'No additional details provided',
          _subject: `🚀 New Free Audit Call Request from ${formData.name} `,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({
            name: '',
            email: '',
            company: '',
            workType: '',
            budget: '',
            message: ''
          });
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch {
      alert('There was an error submitting the form. Please try again or email us directly at viilasacontact@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-section section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Content */}
          <div className="contact-content reveal-left">
            <span className="section-badge">Get In Touch</span>
            <h2 className="section-title">Let's Build Something Amazing</h2>
            <p className="contact-description">
              Ready to transform your eCommerce? Fill out the form and we'll get back to you within 24 hours with a custom proposal tailored to your needs.
            </p>

            <div className="contact-features">
              <div className="contact-feature">
                <CheckCircle2 className="contact-feature-icon" />
                <div>
                  <h4>Free Consultation</h4>
                  <p>No-obligation architecture review</p>
                </div>
              </div>
              <div className="contact-feature">
                <CheckCircle2 className="contact-feature-icon" />
                <div>
                  <h4>Fast Response</h4>
                  <p>We respond within 24 hours</p>
                </div>
              </div>
              <div className="contact-feature">
                <CheckCircle2 className="contact-feature-icon" />
                <div>
                  <h4>Custom Proposals</h4>
                  <p>Tailored solutions for your business</p>
                </div>
              </div>
            </div>

            <div className="contact-social-proof">
              <div className="avatars">
                {[11, 12, 13, 14].map(i => (
                  <img key={i} src={`https://i.pravatar.cc/100?img=${i}`} alt="client" className="avatar" />
                ))}
              </div >
              <span>Join 50+ brands building on Medusa.js</span>
            </div >

            <motion.a
              href="#contact"
              className="audit-cta"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="audit-cta-icon">📞</span>
              <span className="audit-cta-text">Book a Free Audit</span>
              <ArrowRight className="audit-cta-arrow" />
            </motion.a>
          </div >

          {/* Right Form */}
          < motion.div
            className="contact-form-wrapper reveal-right"
            whileHover={{ scale: 1.01 }}
          >
            <div className="form-glow"></div>

            {
              submitted ? (
                <motion.div
                  className="form-success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle2 className="success-icon" />
                  <h3>Thank You!</h3>
                  <p>Your free architecture call is being scheduled. We'll reach out within 24 hours to confirm your time slot.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <h3>Book Your Free Call</h3>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="company">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company"
                    />
                  </div>

                  <div className="form-row">
                    <CustomDropdown
                      id="workType"
                      name="workType"
                      label="Project Type *"
                      options={workTypes}
                      value={formData.workType}
                      onChange={handleDropdownChange}
                      required
                    />
                    <CustomDropdown
                      id="budget"
                      name="budget"
                      label="Budget Range *"
                      options={budgets}
                      value={formData.budget}
                      onChange={handleDropdownChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Project Details</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project, goals, and timeline..."
                      rows={4}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="btn btn-primary btn-lg btn-full"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <span className="loading-spinner"></span>
                    ) : (
                      <>
                        Book Free Call
                        <Send className="btn-icon" />
                      </>
                    )}
                  </motion.button>

                  <p className="form-disclaimer">
                    By submitting this form, you agree to our privacy policy. We'll never share your information.
                  </p>
                </form>
              )
            }
          </motion.div >
        </div >
      </div >
    </section >
  );
};

// ===== FOOTER =====
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="/" className="logo">
              <div className="logo-icon small">
                <Code className="logo-svg" />
              </div>
              <span className="logo-text">MedusaJS builder</span>
            </a>
            <p>Your trusted partner for headless commerce solutions powered by Medusa.js.</p>
            <div className="social-links">
              <a href="https://suryaportfolio-omega.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Portfolio"><Globe /></a>
              <a href="https://x.com/lrdsurya" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)"><Twitter /></a>
              <a href="https://www.linkedin.com/in/surya-narayan-51a0a0119/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
              <a href="mailto:viilasacontact@gmail.com" aria-label="Email"><Mail /></a>
            </div>
          </div>

          <div className="footer-links">
            <h5>Services</h5>
            <a href="#services">Custom Development</a>
            <a href="#services">Shopify Migration</a>
            <a href="#services">B2B Commerce</a>
            <a href="#services">Marketplace Development</a>
          </div>

          <div className="footer-links">
            <h5>Company</h5>
            <a href="#work">Our Work</a>
            <a href="#contact">Contact Us</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
          </div>

          <div className="footer-links">
            <h5>Resources</h5>
            <a href="#">Documentation</a>
            <a href="#">API Reference</a>
            <a href="#">Community</a>
            <a href="#contact">Support</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {currentYear} MedusaAgency. All rights reserved.</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ===== MAIN APP =====
function App() {
  useScrollReveal();

  return (
    <>
      <Helmet>
        <title>MedusaJS Builder | Premium Headless eCommerce Development | Free Audit Call</title>
        <meta name="description" content="Transform your eCommerce with Medusa.js. Book a free 20-min architecture audit call. We build high-performance headless commerce solutions for B2B, marketplaces, and D2C brands. Migrate from Shopify in 7-14 days." />
      </Helmet>

      <div className="app">
        <AnimatedBackground />
        <Navbar />

        <main>
          <Hero />
          <Clients />
          <Features />
          <Services />
          <Comparison />
          <ContactForm />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
