'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function BookAppointmentForm() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get('product') || '';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    product: initialProduct,
    date: '',
    time: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Build mailto link
    const subject = encodeURIComponent(`[APPOINTMENT] Sales Inquiry from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested Product: ${formData.product}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:sales@royalcrestgems.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <>
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '60px 32px', background: 'var(--cream)', borderRadius: '12px' }}>
          <div style={{ fontSize: '3rem', margin: '0 auto 16px' }}>✅</div>
          <h3>Request Sent!</h3>
          <p style={{ marginTop: '12px' }}>Your email client has opened with your appointment request. Please send the email to complete your booking. A sales representative will be in touch shortly.</p>
          <button
            className="btn btn-outline"
            style={{ marginTop: '24px' }}
            onClick={() => setSubmitted(false)}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} id="booking-form">
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
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="product">Product of Interest</label>
            <input
              className="form-input"
              type="text"
              id="product"
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="E.g., Diamond Tennis Bracelet"
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="form-label" htmlFor="date">Preferred Date</label>
              <input
                className="form-input"
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="time">Preferred Time</label>
              <input
                className="form-input"
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label" htmlFor="message">Additional Notes</label>
            <textarea
              className="form-textarea"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Any specific requests or questions?"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" id="book-submit-btn" style={{ width: '100%', marginTop: '16px' }}>
            Book Appointment
          </button>
        </form>
      )}
    </>
  );
}

export default function BookPage() {
  return (
    <>
      <Header />
      <section className="page-hero" id="book-hero">
        <div className="page-hero-content">
          <h1>Book an Appointment</h1>
          <p>Meet with a sales representative to explore our collections and finalize your purchase.</p>
        </div>
      </section>

      <section className="section" id="book-form-section">
        <div className="container-narrow">
          <div style={{ background: 'var(--white)', padding: '40px', borderRadius: '16px', boxShadow: 'var(--shadow-md)', border: '1px solid rgba(201, 169, 110, 0.15)' }}>
            <h2 style={{ marginBottom: '8px', textAlign: 'center' }}>Schedule a Consultation</h2>
            <p style={{ marginBottom: '32px', textAlign: 'center' }}>Please provide your details and our team will prepare the piece for your visit.</p>
            <Suspense fallback={<div style={{ textAlign: 'center', padding: '40px' }}>Loading form...</div>}>
              <BookAppointmentForm />
            </Suspense>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
