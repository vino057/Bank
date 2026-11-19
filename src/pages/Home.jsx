
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  Smartphone,
  CreditCard,
  Wallet,
  Home as HomeIcon,
  PiggyBank,
  Landmark,
  TrendingUp,
  Headphones,
  CheckCircle2
} from 'lucide-react';

import '../styles/home.css';

function Home() {
  const services = [
    {
      icon: <Wallet />,
      title: 'Savings Account',
      description: 'Grow your savings with flexible banking solutions.',
      link: '/accounts'
    },
    {
      icon: <CreditCard />,
      title: 'Credit Cards',
      description: 'Enjoy rewards, cashback and exclusive privileges.',
      link: '/credit-cards'
    },
    {
      icon: <HomeIcon />,
      title: 'Home Loans',
      description: 'Make your dream home a reality with easy financing.',
      link: '/loans'
    },
    {
      icon: <PiggyBank />,
      title: 'Fixed Deposits',
      description: 'Build your future with planned savings.',
      link: '/rates'
    }
  ];

  const features = [
    'Simple and convenient banking',
    'Flexible banking solutions',
    'Transparent product information',
    'Customer-first service experience'
  ];

  return (
    <main className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">

          <div className="hero-content">
            <span className="hero-tag">
              <span className="tag-dot"></span>
              YOUR FINANCIAL FUTURE STARTS HERE
            </span>

            <h1>
              Banking that moves
              <span> life forward.</span>
            </h1>

            <p>
              Discover smarter ways to save, spend and grow.
              Experience banking designed around your goals
              and your everyday life.
            </p>

            <div className="hero-buttons">
              <Link to="/open-account" className="primary-btn">
                Open an Account <ArrowUpRight size={18} />
              </Link>

              <Link to="/accounts" className="secondary-btn">
                Explore Accounts <ArrowRight size={18} />
              </Link>
            </div>

            <div className="hero-trust">
              <ShieldCheck size={19} />
              <span>Simple. Secure. Convenient.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-circle"></div>

            <div className="hero-decoration decoration-one"></div>
            <div className="hero-decoration decoration-two"></div>

            <div className="hero-card">
              <div className="hero-card-top">
                <span className="mini-logo">N</span>
                <span className="card-type">SIGNATURE</span>
              </div>

              <div className="card-chip"></div>

              <div className="card-number">
                •••• &nbsp; •••• &nbsp; •••• &nbsp; 2048
              </div>

              <div className="hero-card-bottom">
                <div>
                  <small>CARD HOLDER</small>
                  <strong>NOVABANK MEMBER</strong>
                </div>
                <div className="card-master">
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>

            <div className="floating-info">
              <div className="floating-icon">
                <TrendingUp size={20} />
              </div>
              <div>
                <small>Smart Banking</small>
                <strong>Built Around You</strong>
              </div>
            </div>

            <div className="floating-shield">
              <ShieldCheck size={27} />
            </div>
          </div>

        </div>
      </section>

      {/* QUICK SERVICES */}
      <section className="quick-services">
        <div className="quick-services-container">

          <div className="quick-title">
            <span>EXPLORE NOVABANK</span>
            <h2>Banking made easier</h2>
          </div>

          <div className="quick-links">
            <Link to="/open-account">
              <Wallet />
              <span>Open Account</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link to="/credit-cards">
              <CreditCard />
              <span>Credit Cards</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link to="/loans">
              <Landmark />
              <span>Apply for Loans</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link to="/calculators">
              <TrendingUp />
              <span>Calculators</span>
              <ArrowUpRight size={15} />
            </Link>
          </div>

        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services-section">
        <div className="section-container">

          <div className="section-heading">
            <div>
              <span className="section-label">BANKING SOLUTIONS</span>
              <h2>Everything you need,<br />all in one place.</h2>
            </div>

            <Link to="/accounts" className="view-all">
              View All Services <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <Link
                to={service.link}
                className="service-card"
                key={index}
              >
                <div className="service-icon">
                  {service.icon}
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <span className="service-arrow">
                  Explore <ArrowUpRight size={17} />
                </span>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* CREDIT CARD PROMOTION */}
      <section className="credit-promo">
        <div className="section-container promo-container">

          <div className="promo-content">
            <span className="section-label">NOVABANK CREDIT CARDS</span>

            <h2>
              More than a card.<br />
              <span>More possibilities.</span>
            </h2>

            <p>
              Discover a new way to enjoy everyday purchases,
              travel experiences and exclusive rewards with
              NovaBank credit cards.
            </p>

            <div className="promo-benefits">
              <span><CheckCircle2 /> Reward benefits</span>
              <span><CheckCircle2 /> Exclusive privileges</span>
              <span><CheckCircle2 /> Flexible payments</span>
            </div>

            <Link to="/credit-cards" className="primary-btn">
              Explore Credit Cards <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="promo-card-area">
            <div className="promo-credit-card">
              <div className="promo-card-top">
                <span className="promo-brand">NOVA<span>BANK</span></span>
                <span className="promo-chip">✦</span>
              </div>

              <div className="promo-card-middle">
                <div className="promo-chip-shape"></div>
                <span>•••• &nbsp; •••• &nbsp; •••• &nbsp; 8392</span>
              </div>

              <div className="promo-card-bottom">
                <span>PLATINUM EDITION</span>
                <strong>VISA</strong>
              </div>
            </div>

            <div className="promo-orbit"></div>
          </div>

        </div>
      </section>

      {/* WHY NOVABANK */}
      <section className="why-section">
        <div className="section-container why-container">

          <div className="why-content">
            <span className="section-label">WHY NOVABANK</span>

            <h2>
              Banking with a<br />
              better perspective.
            </h2>

            <p>
              We believe banking should be simple, transparent
              and accessible. Our services are designed to
              support your financial journey at every step.
            </p>

            <div className="why-list">
              {features.map((feature, index) => (
                <div key={index}>
                  <CheckCircle2 size={19} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Link to="/about" className="text-link">
              Discover NovaBank <ArrowRight size={17} />
            </Link>
          </div>

          <div className="why-visual">
            <div className="why-main-icon">
              <Landmark size={65} />
            </div>

            <div className="why-stat stat-one">
              <ShieldCheck size={24} />
              <div>
                <strong>Security First</strong>
                <small>Designed for peace of mind</small>
              </div>
            </div>

            <div className="why-stat stat-two">
              <Smartphone size={24} />
              <div>
                <strong>Digital Convenience</strong>
                <small>Banking on your terms</small>
              </div>
            </div>

            <div className="why-stat stat-three">
              <Headphones size={24} />
              <div>
                <strong>Customer Support</strong>
                <small>Here when you need us</small>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* FINAL CTA */}
      <section className="home-cta">
        <div className="section-container cta-container">
          <div>
            <span>YOUR NEXT CHAPTER STARTS HERE</span>
            <h2>Ready to experience better banking?</h2>
            <p>Explore our banking solutions and find what works for you.</p>
          </div>

          <Link to="/open-account" className="cta-btn">
            Get Started <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>

    </main>
  );
}

export default Home;
