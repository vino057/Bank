
import { useState } from 'react';
import { CreditCard, CheckCircle, ArrowRight } from 'lucide-react';
import '../styles/applycard.css';

function ApplyCard() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    cardType: 'Classic Card',
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
    <div className="apply-card-page">

      <section className="apply-card-hero">
        <span>NOVABANK CREDIT CARDS</span>
        <h1>Apply for Your <strong>Credit Card</strong></h1>
        <p>
          Explore our credit card application experience
          through this interactive portfolio demonstration.
        </p>
      </section>

      <div className="apply-card-container">

        <div className="apply-card-info">
          <div className="apply-card-icon">
            <CreditCard size={35} />
          </div>

          <h2>Find Your Perfect Card</h2>

          <p>
            Select a card type and enter sample information
            to explore the application process.
          </p>

          <div className="apply-card-benefit">
            <CheckCircle size={18} />
            Simple application experience
          </div>

          <div className="apply-card-benefit">
            <CheckCircle size={18} />
            Multiple card options
          </div>

          <div className="apply-card-benefit">
            <CheckCircle size={18} />
            Easy-to-understand form
          </div>
        </div>

        <form className="apply-card-form" onSubmit={handleSubmit}>

          {submitted && (
            <div className="apply-card-success">
              <CheckCircle size={32} />
              <h3>Demo Application Completed!</h3>
              <p>
                Thank you, {form.name}. Your demonstration
                application is complete. No real credit card
                application has been submitted.
              </p>
            </div>
          )}

          <h2>Application Details</h2>
          <p>Enter sample details below.</p>

          <div className="apply-card-fields">

            <div className="apply-field">
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

            <div className="apply-field">
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

            <div className="apply-field">
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

            <div className="apply-field">
              <label>Select Credit Card</label>
              <select
                name="cardType"
                value={form.cardType}
                onChange={handleChange}
                required
              >
                <option>Classic Card</option>
                <option>Platinum Card</option>
                <option>Travel Card</option>
                <option>Cashback Card</option>
              </select>
            </div>

            <div className="apply-field">
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

            <div className="apply-field">
              <label>Monthly Income (₹)</label>
              <input
                name="income"
                type="number"
                min="0"
                placeholder="Enter sample income"
                value={form.income}
                onChange={handleChange}
                required
              />
            </div>

          </div>

          <div className="apply-card-consent">
            <input type="checkbox" id="applyConsent" required />
            <label htmlFor="applyConsent">
              I understand this is a fictional portfolio
              demonstration and not a real credit card application.
            </label>
          </div>

          <button type="submit" className="apply-card-submit">
            Submit Demo Application
            <ArrowRight size={18} />
          </button>

          <p className="apply-card-disclaimer">
            Do not enter real financial or sensitive personal
            information. Nothing is stored or transmitted.
          </p>

        </form>

      </div>
    </div>
  );
}

export default ApplyCard;
