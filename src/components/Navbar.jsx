
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronDown,
  Search,
  ArrowUpRight
} from 'lucide-react';
import '../styles/navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Accounts', path: '/accounts' },
    { name: 'Credit Cards', path: '/credit-cards' },
    { name: 'Loans', path: '/loans' },
    { name: 'Deposits & Rates', path: '/rates' },
    { name: 'Calculators', path: '/calculators' },
    { name: 'About Us', path: '/about' }
  ];

  return (
    <header className="navbar">
      <div className="navbar-top">
        <div className="navbar-container top-content">
          <span>Welcome to NovaBank</span>

          <div className="top-links">
            <Link to="/contact">Contact Us</Link>
            <Link to="/faq">FAQs</Link>
            <span>Customer Support: 1800 000 2026</span>
          </div>
        </div>
      </div>

      <div className="navbar-main">
        <div className="navbar-container navbar-content">

          <Link to="/" className="brand" onClick={closeMenu}>
            <span className="brand-icon">N</span>
            <span>Nova<span className="brand-highlight">Bank</span></span>
          </Link>

          <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? 'nav-link active-link' : 'nav-link'
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="nav-actions">
            <button
              className="search-btn"
              aria-label="Search"
              onClick={() => alert('Search feature coming soon')}
            >
              <Search size={19} />
            </button>

            <Link to="/open-account" className="open-account-btn">
              Open Account <ArrowUpRight size={16} />
            </Link>
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </div>
    </header>
  );
}

export default Navbar;
