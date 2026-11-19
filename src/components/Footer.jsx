
import { Link } from 'react-router-dom';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="footer-logo-icon">N</span>
            NovaBank
          </Link>

          <p>
            Banking made simple. Explore modern banking services,
            financial tools and smarter money management.
          </p>

          <div className="footer-socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <span className="footer-social-letter">f</span>
            </a>

            <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
              <span className="footer-social-letter">◎</span>
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <span className="footer-social-letter">in</span>
            </a>

            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
              <span className="footer-social-letter">𝕏</span>
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/accounts">Accounts</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faq">FAQs</Link>
        </div>

        <div className="footer-column">
          <h3>Our Services</h3>
          <Link to="/credit-cards">Credit Cards</Link>
          <Link to="/loans">Loans</Link>
          <Link to="/rates">Deposits & Rates</Link>
          <Link to="/calculators">Calculators</Link>
          <Link to="/open-account">Open Account</Link>
        </div>

        <div className="footer-column footer-contact">
          <h3>Contact Information</h3>

          <p>
            <span>✉</span>
            support@novabank.demo
          </p>

          <p>
            <span>☎</span>
            +91 98765 43210
          </p>

          <p>
            <span>⌖</span>
            Chennai, Tamil Nadu
          </p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} NovaBank. All rights reserved.
        </p>

        <p>
          Fictional portfolio demonstration — Not a real bank.
        </p>
      </div>

    </footer>
  );
}

export default Footer;
