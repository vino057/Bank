
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Plane,
  ShoppingBag,
  Crown,
  Wallet,
  ShieldCheck,
  Gift,
  CreditCard,
} from 'lucide-react';

import '../styles/creditcards.css';

const cards = [
  {
    name: 'Classic Card',
    category: 'EVERYDAY SPENDING',
    description: 'A simple card for your everyday shopping and payments.',
    fee: '₹499',
    renewal: '₹499',
    reward: '1 point per ₹100',
    cashback: '1% on selected purchases',
    theme: 'classic',
    icon: ShoppingBag,
    features: [
      'Everyday purchase rewards',
      'Online shopping benefits',
      'Contactless payment concept',
      'Basic purchase protection concept',
    ],
  },
  {
    name: 'Platinum Card',
    category: 'PREMIUM LIFESTYLE',
    description: 'A premium card concept with enhanced rewards and privileges.',
    fee: '₹1,499',
    renewal: '₹1,499',
    reward: '3 points per ₹100',
    cashback: '2% on selected purchases',
    theme: 'platinum',
    icon: Crown,
    features: [
      'Higher reward points',
      'Premium lifestyle benefits',
      'Dining offer concept',
      'Priority customer assistance',
    ],
  },
  {
    name: 'Travel Card',
    category: 'TRAVEL & EXPERIENCES',
    description: 'A travel-focused card concept for your next adventure.',
    fee: '₹999',
    renewal: '₹999',
    reward: '2 points per ₹100',
    cashback: 'Travel purchase offers',
    theme: 'travel',
    icon: Plane,
    features: [
      'Travel booking rewards',
      'Illustrative airport lounge benefit',
      'Foreign travel offer concept',
      'Travel-related privileges',
    ],
  },
  {
    name: 'Cashback Card',
    category: 'SMART SAVINGS',
    description: 'A cashback-focused card concept for eligible purchases.',
    fee: '₹299',
    renewal: '₹299',
    reward: 'Cashback instead of points',
    cashback: 'Up to 5% on selected purchases',
    theme: 'cashback',
    icon: Wallet,
    features: [
      'Cashback on selected shopping',
      'Online payment benefits',
      'Monthly cashback summary',
      'Simple reward tracking',
    ],
  },
];

function CreditCards() {
  return (
    <main className="creditcards-page">

      {/* HERO */}
      <section className="cc-hero">
        <div className="cc-hero-content">
          <span className="cc-eyebrow">NOVA BANK CREDIT CARDS</span>

          <h1>
            Make every
            <span> purchase count.</span>
          </h1>

          <p>
            Discover credit card options designed around shopping,
            travel, rewards and everyday spending.
          </p>

          <div className="cc-hero-actions">
            <a href="#card-options" className="cc-primary-btn">
              Explore Cards <ArrowRight size={18} />
            </a>

            <a href="#compare-cards" className="cc-outline-btn">
              Compare Cards
            </a>
          </div>

          <div className="cc-hero-trust">
            <ShieldCheck size={18} />
            <span>Explore smart and responsible credit card features</span>
          </div>
        </div>

        <div className="cc-hero-visual">
          <div className="cc-showcase-card">
            <div className="cc-showcase-top">
              <span>NOVA BANK</span>
              <CreditCard size={25} />
            </div>

            <div className="cc-chip" />

            <div className="cc-showcase-number">
              4829 &nbsp; 2048 &nbsp; 7610 &nbsp; 3095
            </div>

            <div className="cc-showcase-bottom">
              <div>
                <small>CARDHOLDER</small>
                <strong>NOVA MEMBER</strong>
              </div>
              <strong>VISA*</strong>
            </div>
          </div>

          <div className="cc-floating-reward">
            <Gift size={21} />
            <div>
              <strong>Rewards await</strong>
              <span>Explore card benefits</span>
            </div>
          </div>
        </div>
      </section>

      {/* CARD OPTIONS */}
      <section className="cc-options section-cc" id="card-options">
        <div className="cc-heading">
          <span className="cc-eyebrow">FIND YOUR CARD</span>
          <h2>Choose your spending style</h2>
          <p>Explore four illustrative credit card options from NovaBank.</p>
        </div>

        <div className="cc-grid">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article className="cc-product-card" key={card.name}>
                <div className={`cc-product-visual ${card.theme}`}>
                  <div className="cc-product-top">
                    <span>NOVA BANK</span>
                    <Icon size={23} />
                  </div>

                  <div className="cc-product-chip" />

                  <div className="cc-product-bottom">
                    <span>VINO MEMBER</span>
                    <strong>{card.name.toUpperCase()}</strong>
                  </div>
                </div>

                <span className="cc-category">{card.category}</span>

                <h3>{card.name}</h3>

                <p className="cc-product-description">
                  {card.description}
                </p>

                <div className="cc-product-details">
                  <div>
                    <span>Joining fee</span>
                    <strong>{card.fee}</strong>
                  </div>

                  <div>
                    <span>Annual fee</span>
                    <strong>{card.renewal}</strong>
                  </div>
                </div>

                <Link to="/apply-card" className="cc-apply-link">
                  Explore Card <ArrowRight size={17} />
                </Link>
              </article>
            );
          })}
        </div>

        <p className="cc-demo-note">
          *Fictional portfolio demonstration. Card names, fees, rewards,
          benefits and designs are illustrative only. No actual credit card
          is issued or available through this website.
        </p>
      </section>

      {/* REWARDS */}
      <section className="cc-rewards">
        <div className="cc-heading">
          <span className="cc-eyebrow">CARD BENEFITS</span>
          <h2>More value in every swipe</h2>
          <p>Different cards offer different types of illustrative rewards.</p>
        </div>

        <div className="cc-rewards-grid">
          <div className="cc-reward-box">
            <ShoppingBag size={27} />
            <h3>Shopping Rewards</h3>
            <p>Explore shopping-related reward concepts and special offers.</p>
          </div>

          <div className="cc-reward-box">
            <Plane size={27} />
            <h3>Travel Benefits</h3>
            <p>Explore travel-focused privileges and booking reward concepts.</p>
          </div>

          <div className="cc-reward-box">
            <Gift size={27} />
            <h3>Reward Points</h3>
            <p>Understand how reward points could be earned on eligible spends.</p>
          </div>

          <div className="cc-reward-box">
            <Wallet size={27} />
            <h3>Cashback Offers</h3>
            <p>Explore cashback examples on selected eligible transactions.</p>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section className="cc-comparison section-cc" id="compare-cards">
        <div className="cc-heading">
          <span className="cc-eyebrow">SIDE-BY-SIDE COMPARISON</span>
          <h2>Compare our cards</h2>
          <p>See how the four fictional card options differ.</p>
        </div>

        <div className="cc-table-wrapper">
          <table className="cc-table">
            <thead>
              <tr>
                <th>Features</th>
                <th>Classic</th>
                <th>Platinum</th>
                <th>Travel</th>
                <th>Cashback</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Joining Fee</td>
                <td>₹499</td>
                <td>₹1,499</td>
                <td>₹999</td>
                <td>₹299</td>
              </tr>

              <tr>
                <td>Annual Fee</td>
                <td>₹499</td>
                <td>₹1,499</td>
                <td>₹999</td>
                <td>₹299</td>
              </tr>

              <tr>
                <td>Rewards</td>
                <td>1 point / ₹100</td>
                <td>3 points / ₹100</td>
                <td>2 points / ₹100</td>
                <td>Cashback</td>
              </tr>

              <tr>
                <td>Best For</td>
                <td>Daily use</td>
                <td>Premium lifestyle</td>
                <td>Travel</td>
                <td>Shopping</td>
              </tr>

              <tr>
                <td>Cashback / Offers</td>
                <td>1% selected spends</td>
                <td>2% selected spends</td>
                <td>Travel offers</td>
                <td>Up to 5% selected spends</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="cc-demo-note">
          Reward rates and fees are fictional examples. Real credit card
          terms would include eligibility, exclusions, caps and other conditions.
        </p>
      </section>

      {/* ELIGIBILITY */}
      <section className="cc-eligibility">
        <div className="cc-eligibility-content">
          <span className="cc-eyebrow">BEFORE YOU APPLY</span>
          <h2>Understand credit card eligibility</h2>
          <p>
            Actual eligibility depends on the card issuer's policies and
            individual credit assessment. The following are general examples,
            not NovaBank approval criteria.
          </p>

          <div className="cc-eligibility-list">
            <div><CheckCircle2 size={18} /> Meet the issuer's minimum age requirement.</div>
            <div><CheckCircle2 size={18} /> Have an accepted identity and address verification.</div>
            <div><CheckCircle2 size={18} /> Meet the issuer's income or employment criteria.</div>
            <div><CheckCircle2 size={18} /> Complete the issuer's credit assessment.</div>
          </div>
        </div>

        <div className="cc-eligibility-card">
          <ShieldCheck size={35} />
          <h3>Use credit responsibly</h3>
          <p>
            Pay your statement on time, understand interest charges,
            and borrow only what you can comfortably repay.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cc-cta">
        <span className="cc-eyebrow">DISCOVER NOVABANK</span>
        <h2>Find the card that matches your lifestyle.</h2>
        <p>Explore the features and compare your options.</p>

        <a href="#card-options">
          Explore Credit Cards <ArrowRight size={18} />
        </a>
      </section>

    </main>
  );
}

export default CreditCards;
