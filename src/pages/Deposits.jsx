
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  PiggyBank,
  CalendarDays,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
  Clock,
  Wallet
} from 'lucide-react';

import '../styles/deposits.css';

const depositTypes = [
  {
    icon: PiggyBank,
    title: 'Savings Account',
    description: 'Keep your money accessible while earning illustrative interest.',
    rate: '3.00% p.a.',
    detail: 'Flexible withdrawals'
  },
  {
    icon: TrendingUp,
    title: 'Fixed Deposit',
    description: 'Plan ahead with a fixed deposit and a selected maturity period.',
    rate: '7.00% p.a.',
    detail: 'Fixed tenure'
  },
  {
    icon: CalendarDays,
    title: 'Recurring Deposit',
    description: 'Build your savings by depositing a fixed amount regularly.',
    rate: '6.50% p.a.',
    detail: 'Monthly deposits'
  }
];

const rateData = [
  {
    type: 'Savings Account',
    tenure: 'Flexible',
    rate: '3.00%'
  },
  {
    type: 'Fixed Deposit',
    tenure: '1 Year',
    rate: '6.50%'
  },
  {
    type: 'Fixed Deposit',
    tenure: '2 Years',
    rate: '7.00%'
  },
  {
    type: 'Fixed Deposit',
    tenure: '3 Years',
    rate: '7.10%'
  },
  {
    type: 'Recurring Deposit',
    tenure: '1 Year',
    rate: '6.50%'
  },
  {
    type: 'Recurring Deposit',
    tenure: '2 Years',
    rate: '6.75%'
  }
];

function Deposits() {
  return (
    <div className="deposits-page">

      {/* HERO SECTION */}
      <section className="deposits-hero">
        <div className="deposits-hero-content">
          <span className="deposits-tag">SAVE SMARTER WITH NOVABANK</span>

          <h1>
            Make your money
            <span> work for you.</span>
          </h1>

          <p>
            Explore savings options designed to help you plan,
            grow and manage your money with confidence.
          </p>

          <div className="deposits-hero-buttons">
            <a href="#deposit-options" className="deposit-primary-btn">
              Explore Deposits <ArrowRight size={18} />
            </a>

            <Link to="/calculators" className="deposit-secondary-btn">
              Calculate Returns
            </Link>
          </div>

          <small>
            *All interest rates are fictional portfolio-demo examples.
          </small>
        </div>

        <div className="deposits-hero-card">
          <div className="deposit-hero-icon">
            <PiggyBank size={34} />
          </div>

          <span>Your savings journey</span>
          <h2>Save today.<br />Grow tomorrow.</h2>

          <div className="deposit-hero-divider"></div>

          <p>
            Small steps towards your financial goals can make a difference.
          </p>
        </div>
      </section>

      {/* DEPOSIT OPTIONS */}
      <section
        className="deposit-options section-padding"
        id="deposit-options"
      >
        <div className="deposit-section-heading">
          <span>OUR DEPOSIT OPTIONS</span>
          <h2>Choose how you want to save</h2>
          <p>Explore different ways to build your savings.</p>
        </div>

        <div className="deposit-grid">
          {depositTypes.map((deposit, index) => {
            const Icon = deposit.icon;

            return (
              <div className="deposit-card" key={index}>
                <div className="deposit-icon">
                  <Icon size={27} />
                </div>

                <h3>{deposit.title}</h3>
                <p>{deposit.description}</p>

                <div className="deposit-rate">
                  <span>Illustrative interest rate</span>
                  <strong>{deposit.rate}</strong>
                  <small>{deposit.detail}</small>
                </div>

                <Link to="/calculators" className="deposit-card-link">
                  Calculate Returns <ArrowRight size={17} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* INTEREST RATE TABLE */}
      <section className="deposit-rates section-padding">
        <div className="deposit-section-heading">
          <span>INTEREST RATE GUIDE</span>
          <h2>Explore illustrative interest rates</h2>
          <p>
            Compare sample rates across different deposit types and tenures.
          </p>
        </div>

        <div className="deposit-table-wrapper">
          <table className="deposit-table">
            <thead>
              <tr>
                <th>Deposit Type</th>
                <th>Tenure</th>
                <th>Interest Rate</th>
              </tr>
            </thead>

            <tbody>
              {rateData.map((item, index) => (
                <tr key={index}>
                  <td>{item.type}</td>
                  <td>{item.tenure}</td>
                  <td>
                    <strong>{item.rate} p.a.</strong>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="deposit-table-note">
          These rates are illustrative examples only, not actual NovaBank
          products or current market rates.
        </p>
      </section>

      {/* BENEFITS */}
      <section className="deposit-benefits section-padding">
        <div className="deposit-section-heading">
          <span>WHY PLAN WITH NOVABANK</span>
          <h2>Build better saving habits</h2>
        </div>

        <div className="deposit-benefit-grid">
          <div className="deposit-benefit">
            <ShieldCheck size={29} />
            <h3>Plan with Clarity</h3>
            <p>Understand sample rates, tenure and maturity concepts.</p>
          </div>

          <div className="deposit-benefit">
            <Clock size={29} />
            <h3>Choose Your Tenure</h3>
            <p>Compare different savings periods to understand your options.</p>
          </div>

          <div className="deposit-benefit">
            <Wallet size={29} />
            <h3>Build Consistency</h3>
            <p>Explore regular saving and long-term deposit planning.</p>
          </div>
        </div>
      </section>

      {/* DOCUMENTS */}
      <section className="deposit-documents section-padding">
        <div>
          <span>GETTING STARTED</span>
          <h2>Common documents for deposits</h2>
          <p>
            Actual documentation depends on the account, institution
            and applicable regulations.
          </p>
        </div>

        <ul>
          {[
            'Identity proof',
            'Address proof',
            'PAN card, where applicable',
            'Recent photograph',
            'Bank account details',
            'Additional KYC documents, if required'
          ].map((item, index) => (
            <li key={index}>
              <CheckCircle2 size={19} />
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="deposit-cta">
        <h2>Ready to plan your savings?</h2>
        <p>Explore your options and estimate your potential returns.</p>

        <Link to="/calculators">
          Calculate Your Returns <ArrowRight size={18} />
        </Link>
      </section>

      <p className="deposit-disclaimer">
        NovaBank is a fictional portfolio project. All interest rates,
        deposit terms and benefits displayed are illustrative only.
        They are not real financial offers or guaranteed returns.
      </p>

    </div>
  );
}

export default Deposits;
