'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function BookAppointmentForm() {
  const searchParams = useSearchParams();
  const initialProduct = searchParams.get('product') || '';

  // Formspree form ID. Defaults to the live form; override with NEXT_PUBLIC_FORMSPREE_ID
  // if you ever swap forms. (A Formspree ID is a public endpoint, safe to ship in the bundle.)
  const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || 'mrevvkrb';

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
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendViaMailto = () => {
    const subject = encodeURIComponent(`[APPOINTMENT] Sales Inquiry from ${formData.firstName} ${formData.lastName}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nInterested Product: ${formData.product}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:sales@royalcrestgems.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Fall back to email client if Formspree isn't configured yet.
    if (!FORMSPREE_ID) {
      sendViaMailto();
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          product: formData.product,
          preferredDate: formData.date,
          preferredTime: formData.time,
          message: formData.message,
          _subject: `[APPOINTMENT] Sales Inquiry from ${formData.firstName} ${formData.lastName}`,
        }),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => ({}));
        setError(
          data?.errors?.map((err) => err.message).join(', ') ||
            'Something went wrong sending your request. Please try again or email us directly at sales@royalcrestgems.com.'
        );
      }
    } catch {
      setError('Network error. Please check your connection and try again, or email us at sales@royalcrestgems.com.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '60px 32px', background: 'var(--cream)', borderRadius: '12px' }}>
          <div style={{ fontSize: '3rem', margin: '0 auto 16px' }}>✅</div>
          <h3>Request Sent!</h3>
          <p style={{ marginTop: '12px' }}>
            {FORMSPREE_ID
              ? 'Thank you — your appointment request has been received. A sales representative will be in touch with you shortly to confirm the details.'
              : 'Your email client has opened with your appointment request. Please send the email to complete your booking. A sales representative will be in touch shortly.'}
          </p>
          <button
            className="btn btn-outline"
            style={{ marginTop: '24px' }}
            onClick={() => {
              setSubmitted(false);
              setFormData({ firstName: '', lastName: '', email: '', phone: '', product: '', date: '', time: '', message: '' });
            }}
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
          {error && (
            <p style={{ marginTop: '16px', color: '#B3261E', fontSize: '0.9rem', textAlign: 'center' }}>
              {error}
            </p>
          )}
          <button
            type="submit"
            className="btn btn-primary"
            id="book-submit-btn"
            style={{ width: '100%', marginTop: '16px', opacity: submitting ? 0.7 : 1, pointerEvents: submitting ? 'none' : 'auto' }}
            disabled={submitting}
          >
            {submitting ? 'Sending…' : 'Book Appointment'}
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
