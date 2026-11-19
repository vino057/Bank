
import { useState } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import '../styles/openaccount.css';

function OpenAccount() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    accountType: 'Savings Account',
    city: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    // Demo only: no information is sent to a server.
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="open-account-page">

      <section className="open-account-hero">
        <span>NOVABANK ACCOUNT SERVICES</span>

        <h1>
          Start Your Banking <strong>Journey</strong>
        </h1>

        <p>
          Complete this demonstration form to explore the NovaBank
          account-opening experience.
        </p>
      </section>

      <div className="open-account-container">

        <form className="open-account-form" onSubmit={handleSubmit}>

          {submitted && (
            <div className="form-success">
              <CheckCircle size={35} />

              <h3>Demo Application Submitted!</h3>

              <p>
                Thank you, {formData.fullName}. Your demonstration
                application has been completed successfully.
                No real bank account has been created and no data
                has been transmitted.
              </p>
            </div>
          )}

          <div className="form-section">
            <h2>Personal Information</h2>
            <p>Enter sample details to test this form.</p>

            <div className="form-grid">

              <div className="form-group full-width">
                <label>Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter a sample phone number"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="dob"
                  max={new Date().toISOString().split('T')[0]}
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>City</label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Address</label>
                <textarea
                  name="address"
                  placeholder="Enter a sample address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>
          </div>

          <div className="form-divider"></div>

          <div className="form-section">
            <h2>Select Account Type</h2>
            <p>Choose the type of account you want to explore.</p>

            <div className="account-type-options">

              {[
                {
                  name: 'Savings Account',
                  description: 'For everyday personal banking',
                },
                {
                  name: 'Current Account',
                  description: 'For business transactions',
                },
                {
                  name: 'Salary Account',
                  description: 'For monthly salary management',
                },
                {
                  name: 'Premium Account',
                  description: 'For premium banking features',
                },
              ].map((account) => (
                <label
                  className="account-type-option"
                  key={account.name}
                >
                  <input
                    type="radio"
                    name="accountType"
                    value={account.name}
                    checked={formData.accountType === account.name}
                    onChange={handleChange}
                  />

                  <span>
                    <strong>{account.name}</strong>
                    <small>{account.description}</small>
                  </span>
                </label>
              ))}

            </div>
          </div>

          <div className="form-consent">
            <input type="checkbox" required id="demoConsent" />

            <label htmlFor="demoConsent">
              I understand that NovaBank is a fictional portfolio
              demonstration and this form does not create a real
              bank account.
            </label>
          </div>

          <button type="submit" className="form-submit-button">
            Submit Demo Application
            <ArrowRight size={18} />
          </button>

          <p className="form-disclaimer">
            Portfolio demonstration only. Do not enter real banking,
            identity or sensitive personal information. No information
            is saved or transmitted.
          </p>

        </form>
      </div>
    </div>
  );
}

export default OpenAccount;
