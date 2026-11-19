
import { ShieldCheck, Target, Eye, Users, Globe, Award } from 'lucide-react';
import '../styles/about.css';

function About() {
  const values = [
    {
      icon: <ShieldCheck size={28} />,
      title: 'Trust & Security',
      description: 'We believe trust and security are the foundation of every banking relationship.',
    },
    {
      icon: <Users size={28} />,
      title: 'Customer First',
      description: 'We focus on creating simple and convenient banking experiences.',
    },
    {
      icon: <Globe size={28} />,
      title: 'Innovation',
      description: 'We explore modern technology to make banking easier for everyone.',
    },
    {
      icon: <Award size={28} />,
      title: 'Excellence',
      description: 'We aim to deliver reliable and quality financial services.',
    },
  ];

  return (
    <div className="about-page">

      <section className="about-hero">
        <span>ABOUT NOVABANK</span>
        <h1>Banking Made <strong>Simple</strong></h1>
        <p>
          Building a smarter and more convenient banking experience
          through innovation, trust and simplicity.
        </p>
      </section>

      <section className="about-story">
        <div className="about-story-content">
          <span>OUR STORY</span>
          <h2>A New Perspective on Banking</h2>
          <p>
            NovaBank is a fictional digital banking concept created
            to demonstrate modern financial services through a
            simple and user-friendly website.
          </p>
          <p>
            Our concept brings together everyday banking information,
            account options, credit cards, loans and financial
            calculators in one convenient place.
          </p>
        </div>

        <div className="about-story-card">
          <div className="story-icon">
            <ShieldCheck size={42} />
          </div>
          <h3>Banking with Confidence</h3>
          <p>
            A demonstration of how technology can make financial
            information easier to understand and access.
          </p>
        </div>
      </section>

      <section className="about-mission">
        <div className="mission-card">
          <Target size={35} />
          <h2>Our Mission</h2>
          <p>
            To make banking information accessible, understandable
            and convenient through a modern digital experience.
          </p>
        </div>

        <div className="mission-card">
          <Eye size={35} />
          <h2>Our Vision</h2>
          <p>
            To demonstrate a future where financial services are
            simple, transparent and easy to explore.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-section-heading">
          <span>WHAT WE BELIEVE</span>
          <h2>Our Core Values</h2>
          <p>The principles behind the NovaBank concept.</p>
        </div>

        <div className="values-grid">
          {values.map((value, index) => (
            <div className="value-card" key={index}>
              <div className="value-icon">
                {value.icon}
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-cta">
        <h2>Explore a Smarter Banking Experience</h2>
        <p>
          Discover our account options, financial tools and
          banking services.
        </p>
        <a href="/accounts">Explore Our Services</a>
      </section>

      <p className="about-disclaimer">
        NovaBank is a fictional portfolio project, not a licensed
        bank or financial institution.
      </p>

    </div>
  );
}

export default About;
