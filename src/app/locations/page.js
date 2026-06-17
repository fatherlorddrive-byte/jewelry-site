import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Our Locations | Royal Crest Gems',
  description: 'Visit Royal Crest Gems showrooms in Monterey Park, California and Malmö, Sweden. Experience our luxury jewelry collections in person.',
};

export default function LocationsPage() {
  return (
    <>
      <Header />

      {/* PAGE HERO */}
      <section className="page-hero" id="locations-hero">
        <div className="page-hero-content">
          <h1>Our Showrooms</h1>
          <p>Experience our collections in person at our elegant showrooms in the United States and Sweden.</p>
        </div>
      </section>

      {/* LOCATIONS */}
      <section className="section" id="locations-content">
        <div className="container">
          <div className="locations-grid">
            {/* US Location */}
            <div className="location-card" id="location-us">
              <div className="location-card-header">
                <span className="location-flag">🇺🇸</span>
                <div>
                  <h3>United States</h3>
                  <p>Monterey Park, California</p>
                </div>
              </div>
              <div className="location-card-body">
                <div className="location-detail">
                  <div className="location-detail-icon">📍</div>
                  <div className="location-detail-text">
                    <h5>Address</h5>
                    <p>500 N Atlantic Blvd<br />Monterey Park, CA 91754</p>
                  </div>
                </div>
                <div className="location-detail">
                  <div className="location-detail-icon">📞</div>
                  <div className="location-detail-text">
                    <h5>Phone</h5>
                    <p>(747) 745-1791<br />(747) 352-1178</p>
                  </div>
                </div>
                <div className="location-detail">
                  <div className="location-detail-icon">✉️</div>
                  <div className="location-detail-text">
                    <h5>Email</h5>
                    <p>sales@royalcrestgems.com</p>
                  </div>
                </div>
                <div className="location-detail">
                  <div className="location-detail-icon">🕐</div>
                  <div className="location-detail-text">
                    <h5>Business Hours</h5>
                    <p>
                      Monday – Friday: 10:00 AM – 7:00 PM<br />
                      Saturday: 10:00 AM – 6:00 PM<br />
                      Sunday: 11:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>
                <iframe
                  className="location-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3304.5!2d-118.1287!3d34.0488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c53e5d4a5f27%3A0x5c5ce1b6f0c8c!2s500+N+Atlantic+Blvd%2C+Monterey+Park%2C+CA+91754!5e0!3m2!1sen!2sus!4v1"
                  allowFullScreen=""
                  loading="lazy"
                  title="Royal Crest Gems US Location"
                  id="map-us"
                ></iframe>
              </div>
            </div>

            {/* Sweden Location */}
            <div className="location-card" id="location-sweden">
              <div className="location-card-header">
                <span className="location-flag">🇸🇪</span>
                <div>
                  <h3>Sweden</h3>
                  <p>Malmö, Skåne</p>
                </div>
              </div>
              <div className="location-card-body">
                <div className="location-detail">
                  <div className="location-detail-icon">📍</div>
                  <div className="location-detail-text">
                    <h5>Address</h5>
                    <p>Hyllie Stationsväg 11<br />215 32 Malmö, Sweden</p>
                  </div>
                </div>
                <div className="location-detail">
                  <div className="location-detail-icon">📞</div>
                  <div className="location-detail-text">
                    <h5>Phone</h5>
                    <p>(747) 745-1791<br />(747) 352-1178</p>
                  </div>
                </div>
                <div className="location-detail">
                  <div className="location-detail-icon">✉️</div>
                  <div className="location-detail-text">
                    <h5>Email</h5>
                    <p>b.bruce@royalcrestgems.com</p>
                  </div>
                </div>
                <div className="location-detail">
                  <div className="location-detail-icon">🕐</div>
                  <div className="location-detail-text">
                    <h5>Business Hours</h5>
                    <p>
                      Monday – Friday: 10:00 – 18:00<br />
                      Saturday: 10:00 – 16:00<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
                <iframe
                  className="location-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.8!2d13.0038!3d55.5636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a3e7a5c1f3ed%3A0x91a4f0d95c7e8a!2sHyllie+Stationsv%C3%A4g+11%2C+215+32+Malm%C3%B6!5e0!3m2!1sen!2sse!4v1"
                  allowFullScreen=""
                  loading="lazy"
                  title="Royal Crest Gems Sweden Location"
                  id="map-sweden"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" id="locations-cta">
        <div className="container">
          <h2>Schedule a Private Viewing</h2>
          <p>Book a personalized appointment to explore our collections with the guidance of our jewelry experts.</p>
          <a href="/contact" className="btn btn-primary" id="locations-contact-btn">
            Contact Us
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
