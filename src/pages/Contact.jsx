
import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from 'lucide-react';

import '../styles/contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
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

  const contactDetails = [
    {
      icon: <Phone size={25} />,
      title: 'Call Us',
      detail: '+91 00000 00000',
      subtitle: 'Demo contact number',
    },
    {
      icon: <Mail size={25} />,
      title: 'Email Us',
      detail: 'support@novabank.demo',
      subtitle: 'Demo email address',
    },
    {
      icon: <MapPin size={25} />,
      title: 'Our Office',
      detail: 'Chennai, Tamil Nadu',
      subtitle: 'Fictional office location',
    },
    {
      icon: <Clock size={25} />,
      title: 'Working Hours',
      detail: 'Monday – Friday',
      subtitle: '9:00 AM – 5:00 PM (demo)',
    },
  ];

  return (
    <div className="contact-page">

      <section className="contact-hero">
        <span>CONTACT NOVABANK</span>
        <h1>We're Here to <strong>Help You</strong></h1>
        <p>
          Have a question about our banking services?
          Send us a message through this demonstration form.
        </p>
      </section>

      <section className="contact-details">
        {contactDetails.map((item, index) => (
          <div className="contact-info-card" key={index}>
            <div className="contact-info-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>
            <strong>{item.detail}</strong>
            <p>{item.subtitle}</p>
          </div>
        ))}
      </section>

      <section className="contact-main">

        <div className="contact-intro">
          <span>GET IN TOUCH</span>
          <h2>Let's Start a Conversation</h2>

          <p>
            Use the form to explore how a customer support
            experience could work on a modern banking website.
          </p>

          <div className="contact-help-box">
            <MessageCircle size={28} />

            <div>
              <h3>Need Quick Help?</h3>
              <p>
                Visit our FAQ page to explore common questions.
              </p>
              <a href="/faq">Explore FAQs →</a>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          {submitted && (
            <div className="contact-success">
              <h3>Message Submitted!</h3>
              <p>
                Thank you, {formData.name}. Your demo message
                has been submitted successfully.
                No message was sent or stored.
              </p>
            </div>
          )}

          <h2>Send Us a Message</h2>
          <p>Fill in the details below.</p>

          <div className="contact-form-grid">

            <div className="contact-form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="contact-form-group full">
              <label>Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              >
                <option value="">Select a subject</option>
                <option value="Account Enquiry">Account Enquiry</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Loan Enquiry">Loan Enquiry</option>
                <option value="General Support">General Support</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="contact-form-group full">
              <label>Your Message</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              />
            </div>

          </div>

          <button type="submit" className="contact-submit">
            Send Demo Message
            <Send size={17} />
          </button>

          <p className="contact-disclaimer">
            Portfolio demonstration only. Do not enter sensitive
            personal or banking information. Messages are not
            transmitted or saved.
          </p>

        </form>

      </section>

    </div>
  );
}

export default Contact;
