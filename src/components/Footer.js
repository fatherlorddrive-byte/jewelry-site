import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <img src="/images/logo.png" alt="Royal Crest Gems" />
            <p>
              Where Elegance Meets Legacy. Crafting timeless jewelry since 2011,
              with showrooms in the United States and Sweden.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4>Explore</h4>
            <ul className="footer-links">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/collections">Collections</Link></li>
              <li><Link href="/locations">Our Showrooms</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Collections */}
          <div>
            <h4>Collections</h4>
            <ul className="footer-links">
              <li><Link href="/collections#necklaces">Necklaces & Pendants</Link></li>
              <li><Link href="/collections#rings">Rings</Link></li>
              <li><Link href="/collections#bracelets">Bracelets & Bangles</Link></li>
              <li><Link href="/collections#earrings">Earrings</Link></li>
              <li><Link href="/collections#gold_collection">Gold Collection</Link></li>
              <li><Link href="/collections#diamond_collection">Diamond Collection</Link></li>
              <li><Link href="/collections#platinum_collection">Platinum Collection</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4>Get in Touch</h4>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span className="footer-contact-text">
                500 N Atlantic Blvd, Monterey Park, CA 91754
              </span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📍</span>
              <span className="footer-contact-text">
                Hyllie Stationsväg 11, 215 32 Malmö, Sweden
              </span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">📞</span>
              <span className="footer-contact-text">
                (747) 745-1791<br/>(747) 352-1178
              </span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">✉️</span>
              <span className="footer-contact-text">
                sales@royalcrestgems.com<br/>
                b.bruce@royalcrestgems.com
              </span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Royal Crest Gems. All rights reserved.</p>
          <p>Established 2011 &middot; United States &amp; Sweden</p>
        </div>
      </div>
    </footer>
  );
}
