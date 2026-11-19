import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Home,
  Car,
  GraduationCap,
  Wallet,
  ShieldCheck,
  Clock,
  FileText
} from 'lucide-react';

import '../styles/loans.css';

const loanTypes = [
  {
    icon: Wallet,
    title: 'Personal Loan',
    description: 'Manage personal expenses, travel, medical needs and more.',
    amount: 'Up to ₹10 Lakhs',
    rate: 'From 10.5% p.a.',
    tenure: 'Up to 5 years'
  },
  {
    icon: Home,
    title: 'Home Loan',
    description: 'Make your dream home a reality with flexible repayment options.',
    amount: 'Up to ₹75 Lakhs',
    rate: 'From 8.5% p.a.',
    tenure: 'Up to 30 years'
  },
  {
    icon: Car,
    title: 'Vehicle Loan',
    description: 'Get moving with financing for your next vehicle.',
    amount: 'Up to ₹25 Lakhs',
    rate: 'From 9% p.a.',
    tenure: 'Up to 7 years'
  },
  {
    icon: GraduationCap,
    title: 'Education Loan',
    description: 'Invest in your future with support for higher education.',
    amount: 'Up to ₹20 Lakhs',
    rate: 'From 8% p.a.',
    tenure: 'Up to 10 years'
  }
];

function Loans() {
  return (
    <div className="loans-page">

      <section className="loans-hero">
        <div className="loans-hero-content">
          <span className="loans-tag">NOVA LOAN SERVICES</span>

          <h1>
            The right support for
            <span> your next big step.</span>
          </h1>

          <p>
            Explore flexible loan options designed to help you achieve
            your personal, educational and financial goals.
          </p>

          <div className="loans-hero-buttons">
            <a href="#loan-options" className="loan-primary-btn">
              Explore Loans <ArrowRight size={18} />
            </a>
            <Link to="/calculators" className="loan-secondary-btn">
              Calculate EMI
            </Link>
          </div>

          <small>
            *All rates and amounts shown are fictional portfolio-demo examples.
          </small>
        </div>

        <div className="loans-hero-card">
          <div className="loan-card-icon">
            <Wallet size={30} />
          </div>
          <span>Plan your future</span>
          <h2>Dream big.<br />Move forward.</h2>
          <div className="loan-card-line"></div>
          <p>Simple planning starts with the right financial information.</p>
        </div>
      </section>

      <section className="loan-options section-padding" id="loan-options">
        <div className="loan-section-heading">
          <span>OUR LOAN OPTIONS</span>
          <h2>Find a loan that fits your goals</h2>
          <p>Explore our illustrative loan categories and features.</p>
        </div>

        <div className="loan-grid">
          {loanTypes.map((loan, index) => {
            const Icon = loan.icon;

            return (
              <div className="loan-type-card" key={index}>
                <div className="loan-type-icon">
                  <Icon size={25} />
                </div>

                <h3>{loan.title}</h3>
                <p>{loan.description}</p>

                <div className="loan-details">
                  <div>
                    <span>Loan amount</span>
                    <strong>{loan.amount}</strong>
                  </div>
                  <div>
                    <span>Interest rate</span>
                    <strong>{loan.rate}</strong>
                  </div>
                  <div>
                    <span>Repayment period</span>
                    <strong>{loan.tenure}</strong>
                  </div>
                </div>

                <Link to="/apply-loan" className="loan-card-link">
                  Apply Now <ArrowRight size={17} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      <section className="loan-benefits section-padding">
        <div className="loan-section-heading">
          <span>WHY NOVABANK</span>
          <h2>A simpler way to plan your borrowing</h2>
        </div>

        <div className="loan-benefit-grid">
          <div className="loan-benefit">
            <ShieldCheck size={28} />
            <h3>Transparent Information</h3>
            <p>Understand illustrative loan terms and charges clearly.</p>
          </div>

          <div className="loan-benefit">
            <Clock size={28} />
            <h3>Flexible Repayment</h3>
            <p>Explore different repayment periods for your financial plans.</p>
          </div>

          <div className="loan-benefit">
            <FileText size={28} />
            <h3>Simple Documentation</h3>
            <p>Learn about the documents commonly required for applications.</p>
          </div>
        </div>
      </section>

      <section className="loan-documents section-padding">
        <div>
          <span>BEFORE YOU APPLY</span>
          <h2>Common documents required</h2>
          <p>
            Requirements vary by loan type and lender. The following are
            examples for this portfolio demonstration.
          </p>
        </div>

        <ul>
          {[
            'Identity proof',
            'Address proof',
            'Recent income proof',
            'Recent bank statements',
            'Photograph',
            'Loan-specific supporting documents'
          ].map((item, index) => (
            <li key={index}>
              <CheckCircle2 size={19} />
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="loan-cta">
        <h2>Planning your next big move?</h2>
        <p>Explore your options and understand your estimated EMI.</p>
        <Link to="/calculators">
          Calculate Your EMI <ArrowRight size={18} />
        </Link>
      </section>

      <p className="loan-disclaimer">
        NovaBank is a fictional portfolio project. All loan amounts, rates,
        terms and features are illustrative only and are not real financial
        products or offers.
      </p>

    </div>
  );
}

export default Loans;