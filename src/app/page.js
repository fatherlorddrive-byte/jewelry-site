'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import products from '../data/products';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const featuredCategories = [
    { key: 'necklaces', image: '/images/necklace-collection.png', title: 'Necklaces & Pendants', count: '6 Pieces' },
    { key: 'rings', image: '/images/rings-collection.png', title: 'Rings', count: '6 Pieces' },
    { key: 'bracelets', image: '/images/bracelet-collection.png', title: 'Bracelets & Bangles', count: '4 Pieces' },
    { key: 'earrings', image: '/images/earrings-collection.png', title: 'Earrings', count: '3 Pieces' },
    { key: 'platinum_collection', image: '/images/gold-womens-pendant.png', title: 'Platinum Collection', count: '4 Pieces' },
    { key: 'diamond_collection', image: '/images/diamond-collection.png', title: 'Diamond Collection', count: '5 Pieces' },
  ];

  const testimonials = [
    {
      name: 'Margaret Lindström',
      location: 'Malmö, Sweden',
      text: 'The diamond necklace I purchased for our anniversary is absolutely breathtaking. The craftsmanship is unlike anything I have seen. Every detail is perfection.',
      initials: 'ML',
    },
    {
      name: 'James & Claire Patterson',
      location: 'Los Angeles, CA',
      text: 'Bruce and his team helped us design custom engagement rings. The attention to detail was extraordinary and the experience was truly memorable.',
      initials: 'JP',
    },
    {
      name: 'Dr. Erik Johansson',
      location: 'Stockholm, Sweden',
      text: 'I have been a loyal customer for five years. Every piece from Royal Crest Gems is a work of art. Their platinum and diamond collection is unmatched.',
      initials: 'EJ',
    },
    {
      name: 'Sophia Chen',
      location: 'Pasadena, CA',
      text: 'Their gold collection is stunning. I receive compliments every time I wear my Royal Crest Gems bracelet. Truly exceptional quality.',
      initials: 'SC',
    },
    {
      name: 'Anna-Karin Bergström',
      location: 'Lund, Sweden',
      text: 'From the moment I walked into their Malmö showroom, I knew this was something special. Impeccable service and breathtaking pieces.',
      initials: 'AB',
    },
  ];

  // Get a few featured products
  const featuredProducts = [
    products.diamond_collection.subcategories.solitaire.items[0],
    products.platinum_collection.subcategories.gemstone.items[0],
    products.necklaces.subcategories.diamond.items[0],
    products.bracelets.subcategories.platinum.items[0],
  ];

  return (
    <>
      <Header />

      {/* HERO SECTION */}
      <section className="hero" id="hero-section">
        <img src="/images/hero-banner.png" alt="Luxury jewelry collection" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="hero-sparkle"></div>
        <div className="container">
          <div className={`hero-content ${isVisible ? 'animate-fade-in' : ''}`}>
            <div className="hero-badge">✦ Where Elegance Meets Legacy</div>
            <h1>Timeless Jewelry, Crafted for Generations</h1>
            <p>
              Discover exquisite collections of fine gold, diamonds, and precious gemstones.
              Handcrafted with passion since 2011, with showrooms in California and Malmö, Sweden.
            </p>
            <div className="hero-btns">
              <Link href="/collections" className="btn btn-primary" id="hero-explore-btn">
                Explore Collections
              </Link>
              <Link href="/contact" className="btn btn-outline" id="hero-contact-btn">
                Book Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED COLLECTIONS */}
      <section className="section" id="featured-collections">
        <div className="container">
          <div className="section-header">
            <h2>Our Collections</h2>
            <p>Explore our curated categories of fine jewelry, each piece telling a story of craftsmanship, heritage, and timeless elegance.</p>
          </div>
          <div className="collection-grid">
            {featuredCategories.map((cat, index) => (
              <Link
                href={`/collections#${cat.key}`}
                key={cat.key}
                className={`collection-card ${isVisible ? 'animate-fade-in animate-delay-' + ((index % 4) + 1) : ''}`}
                id={`collection-card-${cat.key}`}
              >
                <div className="collection-card-img">
                  <img src={cat.image} alt={cat.title} />
                  <div className="collection-card-overlay">
                    <h3>{cat.title}</h3>
                    <p>{cat.count}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="section section-cream" id="featured-products">
        <div className="container">
          <div className="section-header">
            <h2>Featured Pieces</h2>
            <p>A selection of our most sought-after creations, each handpicked for its exceptional beauty and craftsmanship.</p>
          </div>
          <div className="product-grid">
            {featuredProducts.map((product) => (
              <div className="product-card" key={product.id} id={`product-${product.id}`}>
                <div className="product-card-image">
                  <img src={product.image} alt={product.name} />
                  <span className="product-card-badge">Featured</span>
                </div>
                <div className="product-card-content">
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                  <div className="product-card-meta">
                    <span className="product-card-price">{product.price}</span>
                    <span className="product-card-material">{product.material}</span>
                  </div>
                  <div style={{ marginTop: '16px' }}>
                    <Link href={`/book?product=${encodeURIComponent(product.name)}`} className="btn btn-primary" style={{ width: '100%', padding: '10px 20px', fontSize: '0.85rem' }}>
                      Buy Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT / CEO PREVIEW */}
      <section className="section" id="ceo-preview">
        <div className="container">
          <div className="ceo-section">
            <div className="ceo-image-wrapper">
              <img src="/images/ceo-1.jpg" alt="Bruce Bleak - CEO of Royal Crest Gems" />
              <div className="ceo-image-frame"></div>
            </div>
            <div className="ceo-info">
              <h2>Meet Our Founder</h2>
              <h3>Bruce Bleak</h3>
              <p className="ceo-title">Founder & Chief Executive Officer</p>
              <p>
                With over two decades of experience in the fine jewelry industry, Bruce Bleak founded
                Royal Crest Gems with a singular vision: to bridge Scandinavian craftsmanship with timeless luxury.
              </p>
              <blockquote>
                &ldquo;Every gemstone has a story. Our mission is to craft that story into a piece
                that will be treasured for generations.&rdquo;
              </blockquote>
              <Link href="/about" className="btn btn-outline" id="ceo-learn-more">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section section-cream" id="why-choose-us">
        <div className="container">
          <div className="section-header">
            <h2>Why Royal Crest Gems</h2>
            <p>Four pillars that define our commitment to excellence in every piece we create.</p>
          </div>
          <div className="values-grid">
            <div className="value-card" id="value-certified">
              <div className="value-icon">💎</div>
              <h4>Certified Quality</h4>
              <p>Every diamond and gemstone comes with certified authenticity. We source only the finest materials from trusted suppliers worldwide.</p>
            </div>
            <div className="value-card" id="value-global">
              <div className="value-icon">🌍</div>
              <h4>Global Presence</h4>
              <p>With showrooms in California and Malmö, Sweden, we serve discerning clients across two continents with personalized attention.</p>
            </div>
            <div className="value-card" id="value-handcrafted">
              <div className="value-icon">✋</div>
              <h4>Handcrafted Excellence</h4>
              <p>Each piece is meticulously crafted by master artisans, combining traditional techniques with modern precision for flawless results.</p>
            </div>
            <div className="value-card" id="value-warranty">
              <div className="value-icon">🛡️</div>
              <h4>Lifetime Warranty</h4>
              <p>We stand behind every piece with a comprehensive lifetime warranty, offering complimentary cleaning, inspection, and repair services.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section" id="testimonials">
        <div className="container">
          <div className="section-header">
            <h2>What Our Clients Say</h2>
            <p>Hear from clients who have experienced the Royal Crest Gems difference.</p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i} id={`testimonial-${i}`}>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div className="testimonial-author-info">
                    <h5>{t.name}</h5>
                    <p>{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="cta-banner" id="cta-section">
        <div className="container">
          <h2>Visit Our Showrooms</h2>
          <p>Experience our collections in person at our showrooms in Monterey Park, California and Malmö, Sweden.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/locations" className="btn btn-primary" id="cta-locations">
              Our Locations
            </Link>
            <Link href="/contact" className="btn btn-white" id="cta-contact">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
