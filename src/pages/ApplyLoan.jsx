
import { useState } from 'react';
import { Landmark, CheckCircle, ArrowRight } from 'lucide-react';
import '../styles/applyloan.css';

function ApplyLoan() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: 'Personal Loan',
    amount: '',
    employment: '',
    income: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="apply-loan-page">

      <section className="apply-loan-hero">
        <span>NOVABANK LOAN SERVICES</span>
        <h1>Apply for a <strong>Loan</strong></h1>
        <p>
          Explore our simple loan application process
          through this interactive portfolio demonstration.
        </p>
      </section>

      <div className="apply-loan-container">

        <div className="apply-loan-info">
          <div className="apply-loan-icon">
            <Landmark size={35} />
          </div>

          <h2>Make Your Plans Possible</h2>

          <p>
            Select your preferred loan and enter sample
            information to explore the application experience.
          </p>

          <div className="apply-loan-benefit">
            <CheckCircle size={18} />
            Multiple loan categories
          </div>

          <div className="apply-loan-benefit">
            <CheckCircle size={18} />
            Simple application form
          </div>

          <div className="apply-loan-benefit">
            <CheckCircle size={18} />
            Interactive demo experience
          </div>
        </div>

        <form className="apply-loan-form" onSubmit={handleSubmit}>

          {submitted && (
            <div className="apply-loan-success">
              <CheckCircle size={32} />
              <h3>Demo Application Completed!</h3>
              <p>
                Thank you, {form.name}. Your demonstration
                loan application is complete. No real loan
                application has been submitted.
              </p>
            </div>
          )}

          <h2>Loan Application Details</h2>
          <p>Enter sample details below.</p>

          <div className="apply-loan-fields">

            <div className="apply-loan-field">
              <label>Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="apply-loan-field">
              <label>Email Address</label>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="apply-loan-field">
              <label>Phone Number</label>
              <input
                name="phone"
                type="tel"
                placeholder="10-digit sample number"
                pattern="[0-9]{10}"
                maxLength="10"
                value={form.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="apply-loan-field">
              <label>Loan Type</label>
              <select
                name="loanType"
                value={form.loanType}
                onChange={handleChange}
                required
              >
                <option>Personal Loan</option>
                <option>Home Loan</option>
                <option>Vehicle Loan</option>
                <option>Education Loan</option>
              </select>
            </div>

            <div className="apply-loan-field">
              <label>Requested Loan Amount (₹)</label>
              <input
                name="amount"
                type="number"
                min="1"
                placeholder="Enter sample loan amount"
                value={form.amount}
                onChange={handleChange}
                required
              />
            </div>

            <div className="apply-loan-field">
              <label>Employment Type</label>
              <select
                name="employment"
                value={form.employment}
                onChange={handleChange}
                required
              >
                <option value="">Select employment type</option>
                <option value="Salaried">Salaried</option>
                <option value="Self Employed">Self Employed</option>
                <option value="Business Owner">Business Owner</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="apply-loan-field">
              <label>Monthly Income (₹)</label>
              <input
                name="income"
                type="number"
                min="0"
                placeholder="Enter sample monthly income"
                value={form.income}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="apply-loan-consent">
            <input
              type="checkbox"
              id="loanConsent"
              required
            />
            <label htmlFor="loanConsent">
              I understand this is a fictional portfolio
              demonstration and not a real loan application.
            </label>
          </div>

          <button type="submit" className="apply-loan-submit">
            Submit Demo Application
            <ArrowRight size={18} />
          </button>

          <p className="apply-loan-disclaimer">
            Use sample information only. Nothing is stored
            or transmitted to a server.
          </p>

        </form>

      </div>
    </div>
  );
}

export default ApplyLoan;
