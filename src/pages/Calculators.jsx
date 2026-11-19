
import { useState } from 'react';
import {
  Calculator,
  PiggyBank,
  CalendarDays,
  TrendingUp,
  IndianRupee
} from 'lucide-react';

import '../styles/calculators.css';

function formatMoney(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0
  }).format(Number.isFinite(value) ? value : 0);
}

function Calculators() {
  const [activeTab, setActiveTab] = useState('emi');

  // EMI values
  const [loanAmount, setLoanAmount] = useState(500000);
  const [loanRate, setLoanRate] = useState(10);
  const [loanYears, setLoanYears] = useState(5);

  // FD values
  const [fdAmount, setFdAmount] = useState(100000);
  const [fdRate, setFdRate] = useState(7);
  const [fdYears, setFdYears] = useState(2);

  // RD values
  const [rdAmount, setRdAmount] = useState(5000);
  const [rdRate, setRdRate] = useState(6.5);
  const [rdMonths, setRdMonths] = useState(24);

  // EMI calculation
  const monthlyRate = loanRate / 12 / 100;
  const totalMonths = loanYears * 12;

  const emi = monthlyRate === 0
    ? loanAmount / totalMonths
    : loanAmount *
      monthlyRate *
      Math.pow(1 + monthlyRate, totalMonths) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const totalPayment = emi * totalMonths;
  const totalInterest = totalPayment - loanAmount;

  // FD calculation - quarterly compounding
  const fdPeriods = fdYears * 4;
  const fdMaturity = fdAmount *
    Math.pow(1 + fdRate / 400, fdPeriods);

  const fdInterest = fdMaturity - fdAmount;

  // RD calculation - monthly deposits, monthly compounding approximation
  const rdMonthlyRate = rdRate / 1200;
  const rdMaturity = rdMonthlyRate === 0
    ? rdAmount * rdMonths
    : rdAmount *
      ((Math.pow(1 + rdMonthlyRate, rdMonths) - 1) /
      rdMonthlyRate) *
      (1 + rdMonthlyRate);

  const rdInvested = rdAmount * rdMonths;
  const rdInterest = rdMaturity - rdInvested;

  const tabs = [
    { id: 'emi', label: 'EMI Calculator', icon: Calculator },
    { id: 'fd', label: 'FD Calculator', icon: PiggyBank },
    { id: 'rd', label: 'RD Calculator', icon: CalendarDays }
  ];

  return (
    <div className="calculators-page">

      {/* HERO */}
      <section className="calculator-hero">
        <span>SMART FINANCIAL PLANNING</span>
        <h1>Calculate today.<br /><strong>Plan tomorrow.</strong></h1>
        <p>
          Use our financial calculators to estimate loan payments,
          deposit returns and your future savings.
        </p>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="calculator-section">

        <div className="calculator-heading">
          <span>FINANCIAL TOOLS</span>
          <h2>Choose your calculator</h2>
          <p>Adjust the values to see your estimated results instantly.</p>
        </div>

        <div className="calculator-tabs">
          {tabs.map((tab) => {
            const Icon = tab.icon;

            return (
              <button
                key={tab.id}
                className={activeTab === tab.id ? 'active' : ''}
                onClick={() => setActiveTab(tab.id)}
              >
                <Icon size={19} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="calculator-card">

          {/* EMI CALCULATOR */}
          {activeTab === 'emi' && (
            <div className="calculator-content">
              <div className="calculator-inputs">
                <h3>Loan EMI Calculator</h3>
                <p>Calculate your estimated monthly loan payment.</p>

                <div className="calc-field">
                  <div className="calc-field-heading">
                    <label>Loan Amount</label>
                    <strong>{formatMoney(loanAmount)}</strong>
                  </div>
                  <input
                    type="range"
                    min="50000"
                    max="5000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                  />
                  <div className="calc-limits">
                    <span>₹50,000</span>
                    <span>₹50,00,000</span>
                  </div>
                </div>

                <div className="calc-field">
                  <div className="calc-field-heading">
                    <label>Interest Rate (Annual)</label>
                    <strong>{loanRate}%</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="0.25"
                    value={loanRate}
                    onChange={(e) => setLoanRate(Number(e.target.value))}
                  />
                  <div className="calc-limits">
                    <span>1%</span>
                    <span>25%</span>
                  </div>
                </div>

                <div className="calc-field">
                  <div className="calc-field-heading">
                    <label>Loan Tenure</label>
                    <strong>{loanYears} Years</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    value={loanYears}
                    onChange={(e) => setLoanYears(Number(e.target.value))}
                  />
                  <div className="calc-limits">
                    <span>1 Year</span>
                    <span>30 Years</span>
                  </div>
                </div>
              </div>

              <div className="calculator-results">
                <span className="result-label">YOUR MONTHLY EMI</span>
                <h2>{formatMoney(emi)}</h2>

                <div className="result-divider"></div>

                <div className="result-row">
                  <span>Principal Amount</span>
                  <strong>{formatMoney(loanAmount)}</strong>
                </div>

                <div className="result-row">
                  <span>Total Interest</span>
                  <strong>{formatMoney(totalInterest)}</strong>
                </div>

                <div className="result-row">
                  <span>Total Payment</span>
                  <strong>{formatMoney(totalPayment)}</strong>
                </div>

                <div className="result-note">
                  <TrendingUp size={19} />
                  <p>
                    Your estimated repayment period is {totalMonths} months.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* FD CALCULATOR */}
          {activeTab === 'fd' && (
            <div className="calculator-content">
              <div className="calculator-inputs">
                <h3>Fixed Deposit Calculator</h3>
                <p>Estimate your fixed deposit maturity value.</p>

                <div className="calc-field">
                  <div className="calc-field-heading">
                    <label>Deposit Amount</label>
                    <strong>{formatMoney(fdAmount)}</strong>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="5000000"
                    step="1000"
                    value={fdAmount}
                    onChange={(e) => setFdAmount(Number(e.target.value))}
                  />
                  <div className="calc-limits">
                    <span>₹1,000</span>
                    <span>₹50,00,000</span>
                  </div>
                </div>

                <div className="calc-field">
                  <div className="calc-field-heading">
                    <label>Annual Interest Rate</label>
                    <strong>{fdRate}%</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="0.25"
                    value={fdRate}
                    onChange={(e) => setFdRate(Number(e.target.value))}
                  />
                  <div className="calc-limits">
                    <span>1%</span>
                    <span>12%</span>
                  </div>
                </div>

                <div className="calc-field">
                  <div className="calc-field-heading">
                    <label>Deposit Period</label>
                    <strong>{fdYears} Years</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={fdYears}
                    onChange={(e) => setFdYears(Number(e.target.value))}
                  />
                  <div className="calc-limits">
                    <span>1 Year</span>
                    <span>10 Years</span>
                  </div>
                </div>
              </div>

              <div className="calculator-results">
                <span className="result-label">MATURITY VALUE</span>
                <h2>{formatMoney(fdMaturity)}</h2>

                <div className="result-divider"></div>

                <div className="result-row">
                  <span>Invested Amount</span>
                  <strong>{formatMoney(fdAmount)}</strong>
                </div>

                <div className="result-row">
                  <span>Estimated Interest</span>
                  <strong>{formatMoney(fdInterest)}</strong>
                </div>

                <div className="result-row">
                  <span>Deposit Period</span>
                  <strong>{fdYears} Years</strong>
                </div>

                <div className="result-note">
                  <PiggyBank size={19} />
                  <p>
                    Estimated returns using quarterly compounding.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* RD CALCULATOR */}
          {activeTab === 'rd' && (
            <div className="calculator-content">
              <div className="calculator-inputs">
                <h3>Recurring Deposit Calculator</h3>
                <p>Estimate your savings from monthly deposits.</p>

                <div className="calc-field">
                  <div className="calc-field-heading">
                    <label>Monthly Deposit</label>
                    <strong>{formatMoney(rdAmount)}</strong>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="100000"
                    step="500"
                    value={rdAmount}
                    onChange={(e) => setRdAmount(Number(e.target.value))}
                  />
                  <div className="calc-limits">
                    <span>₹500</span>
                    <span>₹1,00,000</span>
                  </div>
                </div>

                <div className="calc-field">
                  <div className="calc-field-heading">
                    <label>Annual Interest Rate</label>
                    <strong>{rdRate}%</strong>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="0.25"
                    value={rdRate}
                    onChange={(e) => setRdRate(Number(e.target.value))}
                  />
                  <div className="calc-limits">
                    <span>1%</span>
                    <span>12%</span>
                  </div>
                </div>

                <div className="calc-field">
                  <div className="calc-field-heading">
                    <label>Deposit Period</label>
                    <strong>{rdMonths} Months</strong>
                  </div>
                  <input
                    type="range"
                    min="6"
                    max="120"
                    step="6"
                    value={rdMonths}
                    onChange={(e) => setRdMonths(Number(e.target.value))}
                  />
                  <div className="calc-limits">
                    <span>6 Months</span>
                    <span>120 Months</span>
                  </div>
                </div>
              </div>

              <div className="calculator-results">
                <span className="result-label">MATURITY VALUE</span>
                <h2>{formatMoney(rdMaturity)}</h2>

                <div className="result-divider"></div>

                <div className="result-row">
                  <span>Total Deposits</span>
                  <strong>{formatMoney(rdInvested)}</strong>
                </div>

                <div className="result-row">
                  <span>Estimated Interest</span>
                  <strong>{formatMoney(rdInterest)}</strong>
                </div>

                <div className="result-row">
                  <span>Deposit Period</span>
                  <strong>{rdMonths} Months</strong>
                </div>

                <div className="result-note">
                  <CalendarDays size={19} />
                  <p>
                    Estimated returns using a monthly compounding approximation.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        <p className="calculator-disclaimer">
          These calculators provide educational estimates only. Actual loan
          repayments and deposit returns depend on lender terms, compounding
          rules, payment dates, fees, taxes and other conditions.
          NovaBank is a fictional portfolio project.
        </p>

      </section>

    </div>
  );
}

export default Calculators;
