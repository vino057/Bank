
import { Link } from 'react-router-dom';
import {
  Wallet,
  BriefcaseBusiness,
  CreditCard,
  Crown,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Smartphone,
  Headphones,
} from 'lucide-react';

import '../styles/accounts.css';

const accounts = [
  {
    icon: Wallet,
    name: 'Savings Account',
    tag: 'Everyday banking',
    description:
      'A simple and convenient account for managing your daily money and building savings.',
    balance: '₹1,000',
    features: [
      'Easy everyday transactions',
      'Mobile and internet banking',
      'Debit card access',
      'Monthly account statements',
    ],
  },
  {
    icon: BriefcaseBusiness,
    name: 'Current Account',
    tag: 'For businesses',
    description:
      'A flexible banking solution designed for businesses and frequent transactions.',
    balance: '₹5,000',
    features: [
      'Business transaction support',
      'Digital account management',
      'Payment and collection services',
      'Detailed account statements',
    ],
  },
  {
    icon: CreditCard,
    name: 'Salary Account',
    tag: 'For professionals',
    description:
      'Manage your monthly salary with convenient digital banking and everyday benefits.',
    balance: 'Zero balance',
    features: [
      'Illustrative zero-balance option',
      'Salary credit tracking',
      'Digital banking access',
      'Debit card access',
    ],
  },
  {
    icon: Crown,
    name: 'Premium Savings',
    tag: 'Extra privileges',
    description:
      'An enhanced banking experience with additional services for premium customers.',
    balance: '₹10,000',
    features: [
      'Priority customer support',
      'Premium debit card concept',
      'Exclusive service benefits',
      'Personalised banking assistance',
    ],
  },
];

function Accounts() {
  return (
    <main className="accounts-page">

      <section className="accounts-hero">
        <div className="accounts-hero-content">
          <span className="accounts-eyebrow">BANKING MADE SIMPLE</span>

          <h1>
            Find an account that
            <span> fits your life.</span>
          </h1>

          <p>
            Whether you're saving for the future, managing your salary,
            or growing a business, discover banking designed around you.
          </p>

          <div className="accounts-hero-actions">
            <Link to="/open-account" className="accounts-primary-btn">
              Open an Account <ArrowRight size={18} />
            </Link>

            <a href="#account-options" className="accounts-secondary-btn">
              Explore Accounts
            </a>
          </div>

          <div className="accounts-trust">
            <ShieldCheck size={18} />
            <span>Digital-first banking experience</span>
          </div>
        </div>

        <div className="accounts-hero-visual">
          <div className="account-visual-card">
            <div className="visual-card-top">
              <span>NOVA BANK</span>
              <Wallet size={25} />
            </div>

            <div className="visual-card-middle">
              <span>YOUR MONEY. YOUR FUTURE.</span>
              <h2>Bank better.</h2>
            </div>

            <div className="visual-card-bottom">
              <span>SMART BANKING</span>
              <span>●●●● 2048</span>
            </div>
          </div>

          <div className="accounts-floating-note">
            <CheckCircle2 size={20} />
            <div>
              <strong>Simple banking</strong>
              <span>Made for everyday life</span>
            </div>
          </div>
        </div>
      </section>

      <section className="accounts-options section-padding" id="account-options">
        <div className="accounts-section-heading">
          <span className="accounts-eyebrow">EXPLORE OUR ACCOUNTS</span>
          <h2>Banking for every stage of life</h2>
          <p>
            Choose an account that matches your financial needs.
          </p>
        </div>

        <div className="accounts-grid">
          {accounts.map((account, index) => {
            const Icon = account.icon;

            return (
              <article className="account-card" key={account.name}>
                <div className="account-card-top">
                  <div className="account-icon">
                    <Icon size={25} />
                  </div>
                  <span className="account-tag">{account.tag}</span>
                </div>

                <h3>{account.name}</h3>
                <p className="account-description">
                  {account.description}
                </p>

                <div className="account-balance">
                  <span>Illustrative minimum balance</span>
                  <strong>{account.balance}</strong>
                </div>

                <div className="account-features">
                  {account.features.map((feature) => (
                    <div className="account-feature" key={feature}>
                      <CheckCircle2 size={16} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/open-account" className="account-apply-link">
                  Explore Account <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>

        <p className="accounts-demo-note">
          Portfolio demonstration only. All account types, benefits and
          minimum balance figures are fictional examples, not actual banking offers.
        </p>
      </section>

      <section className="accounts-benefits">
        <div className="accounts-section-heading">
          <span className="accounts-eyebrow">THE NOVABANK EXPERIENCE</span>
          <h2>More than just an account</h2>
          <p>Enjoy a convenient banking experience wherever life takes you.</p>
        </div>

        <div className="accounts-benefit-grid">
          <div className="accounts-benefit">
            <div className="benefit-icon"><Smartphone size={25} /></div>
            <h3>Bank on the go</h3>
            <p>Access your banking experience through a simple digital interface.</p>
          </div>

          <div className="accounts-benefit">
            <div className="benefit-icon"><ShieldCheck size={25} /></div>
            <h3>Security focused</h3>
            <p>Explore a design focused on privacy and secure banking practices.</p>
          </div>

          <div className="accounts-benefit">
            <div className="benefit-icon"><Headphones size={25} /></div>
            <h3>Customer support</h3>
            <p>Find assistance and guidance when you need help with banking.</p>
          </div>
        </div>
      </section>

      <section className="accounts-documents section-padding">
        <div className="documents-content">
          <span className="accounts-eyebrow">GETTING STARTED</span>
          <h2>Documents you may need</h2>
          <p>
            These are general examples of documents commonly requested
            during account opening in India. Actual requirements depend
            on the bank and account type.
          </p>

          <div className="documents-list">
            <div><CheckCircle2 size={18} /> PAN card</div>
            <div><CheckCircle2 size={18} /> Aadhaar or other accepted identity proof</div>
            <div><CheckCircle2 size={18} /> Address proof, where required</div>
            <div><CheckCircle2 size={18} /> Recent photograph, where required</div>
          </div>
        </div>

        <div className="documents-side-card">
          <ShieldCheck size={35} />
          <h3>Ready to get started?</h3>
          <p>Explore our interactive account-opening demonstration.</p>
          <Link to="/open-account">
            Start Application <ArrowRight size={17} />
          </Link>
        </div>
      </section>

      <section className="accounts-cta">
        <span className="accounts-eyebrow">YOUR NEXT STEP</span>
        <h2>Start your banking journey with NovaBank.</h2>
        <p>Explore the account options and find the right fit.</p>
        <Link to="/open-account">
          Open an Account <ArrowRight size={18} />
        </Link>
      </section>

    </main>
  );
}

export default Accounts;
