'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import products from '../../data/products';

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubcategory, setActiveSubcategory] = useState('all');

  const categoryKeys = Object.keys(products);
  const categoryLabels = {
    all: 'All Collections',
    necklaces: 'Necklaces',
    rings: 'Rings',
    bracelets: 'Bracelets',
    earrings: 'Earrings',
    watches: 'Watches',
    gold_collection: 'Gold',
    diamond_collection: 'Diamonds',
  };

  useEffect(() => {
    // Handle hash navigation
    const hash = window.location.hash.replace('#', '');
    if (hash && categoryKeys.includes(hash)) {
      setActiveCategory(hash);
    }
  }, []);

  useEffect(() => {
    setActiveSubcategory('all');
  }, [activeCategory]);

  const getVisibleCategories = () => {
    if (activeCategory === 'all') return categoryKeys;
    return [activeCategory];
  };

  const getSubcategoryKeys = (catKey) => {
    return Object.keys(products[catKey].subcategories);
  };

  return (
    <>
      <Header />

      {/* PAGE HERO */}
      <section className="page-hero" id="collections-hero">
        <div className="page-hero-content">
          <h1>Our Collections</h1>
          <p>Explore our curated categories of fine jewelry, luxury watches, and precious gemstones — each piece crafted with passion and precision.</p>
        </div>
      </section>

      {/* CATEGORY TABS */}
      <section className="section" id="collections-content">
        <div className="container">
          <div className="category-tabs" id="category-tabs">
            <button
              className={`category-tab ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
              id="tab-all"
            >
              All
            </button>
            {categoryKeys.map((key) => (
              <button
                key={key}
                className={`category-tab ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
                id={`tab-${key}`}
              >
                {categoryLabels[key] || products[key].title}
              </button>
            ))}
          </div>

          {/* COLLECTIONS DISPLAY */}
          {getVisibleCategories().map((catKey) => {
            const category = products[catKey];
            const subcatKeys = getSubcategoryKeys(catKey);

            return (
              <div key={catKey} id={catKey} style={{ marginBottom: '80px' }}>
                {/* Category Header */}
                <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                  <h2 style={{ marginBottom: '12px' }}>{category.title}</h2>
                  <p style={{ maxWidth: '640px', margin: '0 auto', fontSize: '1.05rem' }}>{category.description}</p>
                  <hr className="gold-divider" />
                </div>

                {/* Subcategory Tabs (if viewing single category) */}
                {activeCategory !== 'all' && subcatKeys.length > 1 && (
                  <div className="category-tabs" style={{ marginBottom: '36px' }}>
                    <button
                      className={`category-tab ${activeSubcategory === 'all' ? 'active' : ''}`}
                      onClick={() => setActiveSubcategory('all')}
                    >
                      All {categoryLabels[catKey] || category.title}
                    </button>
                    {subcatKeys.map((subKey) => (
                      <button
                        key={subKey}
                        className={`category-tab ${activeSubcategory === subKey ? 'active' : ''}`}
                        onClick={() => setActiveSubcategory(subKey)}
                      >
                        {category.subcategories[subKey].title}
                      </button>
                    ))}
                  </div>
                )}

                {/* Subcategories */}
                {subcatKeys
                  .filter((subKey) => activeSubcategory === 'all' || activeSubcategory === subKey)
                  .map((subKey) => {
                    const subcategory = category.subcategories[subKey];
                    return (
                      <div className="subcategory-section" key={subKey} id={`${catKey}-${subKey}`}>
                        <div className="subcategory-header">
                          <h3>{subcategory.title}</h3>
                          <span className="count">{subcategory.items.length} {subcategory.items.length === 1 ? 'piece' : 'pieces'}</span>
                        </div>
                        <div className="product-grid">
                          {subcategory.items.map((product) => (
                            <div className="product-card" key={product.id} id={`product-${product.id}`}>
                              <div className="product-card-image">
                                <img src={product.image} alt={product.name} />
                                {product.totalCarat && (
                                  <span className="product-card-badge">{product.totalCarat}</span>
                                )}
                                {product.centerStone && !product.totalCarat && (
                                  <span className="product-card-badge">{product.centerStone.split(' ')[0]}</span>
                                )}
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
                                {/* Additional details */}
                                <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                  {product.weight && (
                                    <span style={{ fontSize: '0.75rem', padding: '3px 10px', background: 'rgba(201,169,110,0.1)', borderRadius: '100px', color: '#6B5E50' }}>
                                      {product.weight}
                                    </span>
                                  )}
                                  {product.length && (
                                    <span style={{ fontSize: '0.75rem', padding: '3px 10px', background: 'rgba(201,169,110,0.1)', borderRadius: '100px', color: '#6B5E50' }}>
                                      {product.length}
                                    </span>
                                  )}
                                  {product.movement && (
                                    <span style={{ fontSize: '0.75rem', padding: '3px 10px', background: 'rgba(201,169,110,0.1)', borderRadius: '100px', color: '#6B5E50' }}>
                                      {product.movement}
                                    </span>
                                  )}
                                  {product.waterResistance && (
                                    <span style={{ fontSize: '0.75rem', padding: '3px 10px', background: 'rgba(201,169,110,0.1)', borderRadius: '100px', color: '#6B5E50' }}>
                                      {product.waterResistance}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="cta-banner" id="collections-cta">
        <div className="container">
          <h2>Interested in a Piece?</h2>
          <p>Contact us for pricing, custom orders, or to schedule a private viewing at one of our showrooms.</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:+17477451791" className="btn btn-primary" id="collections-call-btn">
              Call (747) 745-1791
            </a>
            <a href="mailto:sales@royalcrestgems.com" className="btn btn-white" id="collections-email-btn">
              Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
