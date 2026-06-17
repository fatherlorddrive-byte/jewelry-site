'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    inquiry: 'general',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(`[${formData.inquiry.toUpperCase()}] Inquiry from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInquiry Type: ${formData.inquiry}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:sales@royalcrestgems.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'Do you ship internationally?',
      a: 'Yes, we offer insured international shipping to most countries. All shipments are fully insured and require signature upon delivery. Contact us for shipping rates and estimated delivery times to your location.',
    },
    {
      q: 'Can I request a custom piece?',
      a: 'Absolutely. Custom design is one of our specialties. Schedule a consultation with our design team to discuss your vision, and we will create a one-of-a-kind piece tailored to your specifications.',
    },
    {
      q: 'What is your return policy?',
      a: 'We offer a 30-day return policy on all non-custom pieces in their original, unworn condition. Custom-designed pieces are final sale. All returns are subject to inspection and must include original packaging and certification.',
    },
    {
      q: 'Are your diamonds ethically sourced?',
      a: 'Yes. All our diamonds comply with the Kimberley Process Certification Scheme and are sourced from conflict-free origins. We maintain full chain-of-custody documentation for every stone we sell.',
    },
    {
      q: 'Do you offer financing options?',
      a: 'Yes, we offer flexible financing plans on purchases over $1,000. Contact our sales team to discuss available options including interest-free installment plans for qualified buyers.',
    },
    {
      q: 'Can I schedule a private viewing?',
      a: 'Of course. We encourage private viewings for our premium collections. Contact us to book an appointment at either our Monterey Park or Malmö showroom. After-hours appointments are also available.',
    },
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      <Header />

      {/* PAGE HERO */}
      <section className="page-hero" id="contact-hero">
        <div className="page-hero-content">
          <h1>Contact Us</h1>
          <p>We would love to hear from you. Reach out for inquiries, custom orders, or to schedule a showroom visit.</p>
        </div>
      </section>

      {/* CONTACT FORM + INFO */}
      <section className="section" id="contact-form-section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div>
              <h2 style={{ marginBottom: '8px' }}>Send Us a Message</h2>
              <p style={{ marginBottom: '32px' }}>Fill out the form below and our team will get back to you within 24 hours.</p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '60px 32px', background: 'var(--cream)', borderRadius: '12px' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                  <h3>Thank You!</h3>
                  <p style={{ marginTop: '12px' }}>Your email client has opened with your message. Please send the email to complete your inquiry. We will respond within 24 hours.</p>
                  <button
                    className="btn btn-outline"
                    style={{ marginTop: '24px' }}
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} id="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="firstName">First Name</label>
                      <input
                        className="form-input"
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Your first name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="lastName">Last Name</label>
                      <input
                        className="form-input"
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Your last name"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address</label>
                      <input
                        className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input
                        className="form-input"
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="inquiry">Inquiry Type</label>
                    <select
                      className="form-select"
                      id="inquiry"
                      name="inquiry"
                      value={formData.inquiry}
                      onChange={handleChange}
                    >
                      <option value="general">General Inquiry</option>
                      <option value="purchase">Purchase Inquiry</option>
                      <option value="custom">Custom Design Request</option>
                      <option value="appointment">Schedule Appointment</option>
                      <option value="wholesale">Wholesale / Partnership</option>
                      <option value="repair">Repair & Maintenance</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Your Message</label>
                    <textarea
                      className="form-textarea"
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your inquiry, the piece you are interested in, or any questions you may have..."
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" id="contact-submit-btn" style={{ width: '100%' }}>
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info Sidebar */}
            <div>
              <div style={{ background: 'var(--cream)', borderRadius: '16px', padding: '36px', marginBottom: '28px' }}>
                <h3 style={{ marginBottom: '24px' }}>Direct Contact</h3>
                <div className="location-detail">
                  <div className="location-detail-icon">📞</div>
                  <div className="location-detail-text">
                    <h5>Phone</h5>
                    <p>
                      <a href="tel:+17477451791">(747) 745-1791</a><br />
                      <a href="tel:+17473521178">(747) 352-1178</a>
                    </p>
                  </div>
                </div>
                <div className="location-detail">
                  <div className="location-detail-icon">✉️</div>
                  <div className="location-detail-text">
                    <h5>Email</h5>
                    <p>
                      <a href="mailto:sales@royalcrestgems.com">sales@royalcrestgems.com</a><br />
                      <a href="mailto:b.bruce@royalcrestgems.com">b.bruce@royalcrestgems.com</a>
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ background: 'var(--cream)', borderRadius: '16px', padding: '36px', marginBottom: '28px' }}>
                <h3 style={{ marginBottom: '24px' }}>US Showroom</h3>
                <div className="location-detail">
                  <div className="location-detail-icon">📍</div>
                  <div className="location-detail-text">
                    <h5>Address</h5>
                    <p>500 N Atlantic Blvd<br />Monterey Park, CA 91754</p>
                  </div>
                </div>
                <div className="location-detail">
                  <div className="location-detail-icon">🕐</div>
                  <div className="location-detail-text">
                    <h5>Hours</h5>
                    <p>Mon–Fri: 10AM – 7PM<br />Sat: 10AM – 6PM<br />Sun: 11AM – 5PM</p>
                  </div>
                </div>
              </div>

              <div style={{ background: 'var(--cream)', borderRadius: '16px', padding: '36px' }}>
                <h3 style={{ marginBottom: '24px' }}>Sweden Showroom</h3>
                <div className="location-detail">
                  <div className="location-detail-icon">📍</div>
                  <div className="location-detail-text">
                    <h5>Address</h5>
                    <p>Hyllie Stationsväg 11<br />215 32 Malmö, Sweden</p>
                  </div>
                </div>
                <div className="location-detail">
                  <div className="location-detail-icon">🕐</div>
                  <div className="location-detail-text">
                    <h5>Hours</h5>
                    <p>Mon–Fri: 10:00 – 18:00<br />Sat: 10:00 – 16:00<br />Sun: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section-cream" id="faq-section">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to our most commonly asked questions below.</p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div className={`faq-item ${activeFaq === i ? 'active' : ''}`} key={i} id={`faq-${i}`}>
                <button
                  className="faq-question"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className="faq-icon">+</span>
                </button>
                <div className="faq-answer">
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
