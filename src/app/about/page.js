import Header from '../../components/Header';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'About Us | Royal Crest Gems',
  description: 'Learn about Royal Crest Gems, our story, our CEO Bruce Bleak, and our commitment to crafting the finest luxury jewelry since 2011.',
};

export default function AboutPage() {
  const milestones = [
    { year: '2011', title: 'The Beginning', desc: 'Bruce Bleak founds Royal Crest Gems in Malmö, Sweden, with a vision to create jewelry that bridges Scandinavian design with classical luxury.' },
    { year: '2013', title: 'First Gold Collection', desc: 'Launch of our signature 18K and 24K gold collection, establishing our reputation for exceptional gold craftsmanship.' },
    { year: '2015', title: 'Diamond Certification', desc: 'Royal Crest Gems receives certification as an authorized diamond dealer, sourcing ethically-mined stones from around the world.' },
    { year: '2017', title: 'US Expansion', desc: 'Opening of our Monterey Park, California showroom, bringing our Scandinavian-luxury aesthetic to the American market.' },
    { year: '2019', title: 'Platinum Collection Launch', desc: 'Introduction of our rare platinum collection, featuring investment-grade diamonds and the world’s finest colored gemstones.' },
    { year: '2021', title: 'A Decade of Excellence', desc: 'Celebrating 10 years of crafting timeless jewelry, with over 5,000 bespoke pieces created for clients worldwide.' },
    { year: '2024', title: 'Digital Experience', desc: 'Launch of our premium online experience, making our collections accessible to jewelry connoisseurs globally.' },
  ];

  const team = [
    {
      name: 'Edward Frank',
      initials: 'EF',
      role: 'Regional Manager — United States',
      bio: 'Edward Frank leads Royal Crest Gems’ United States operations from our Monterey Park, California showroom. A GIA-certified gemologist with over 18 years in fine jewelry and luxury retail, Edward began his career grading colorless diamonds before moving into private client advisory and showroom leadership. He has personally guided hundreds of collectors through bespoke commissions, investment-grade diamond acquisitions, and rare estate pieces — and is known for his discreet, white-glove service and his deep expertise in platinum craftsmanship.',
      email: 'e.frank@royalcrestgems.com',
      phone: '(256) 337-0106',
      phoneHref: '+12563370106',
    },
    {
      name: 'Lynda Quinn',
      initials: 'LQ',
      role: 'Regional Manager — Sweden',
      bio: 'Lynda Quinn oversees Royal Crest Gems’ Scandinavian operations from our flagship Malmö showroom. A graduate gemologist with more than 15 years across Europe’s leading luxury houses, Lynda specializes in rare colored gemstones — Burmese rubies, Colombian emeralds, and Ceylon sapphires — and in matching clients with heirloom-quality pieces. Fluent in Swedish, English, and French, she is celebrated for her refined eye, her warmth with clients, and her unwavering commitment to ethical sourcing.',
      email: 'l.quinn@royalcrestgems.com',
      phone: '(779) 513-0686',
      phoneHref: '+17795130686',
    },
  ];

  return (
    <>
      <Header />

      {/* PAGE HERO */}
      <section className="page-hero" id="about-hero">
        <div className="page-hero-content">
          <h1>Our Story</h1>
          <p>From the serene landscapes of Malmö to the vibrant energy of California, discover the heritage behind Royal Crest Gems.</p>
        </div>
      </section>

      {/* STORY SECTION */}
      <section className="section" id="our-story">
        <div className="container">
          <div className="ceo-section">
            <div className="ceo-image-wrapper">
              <img src="/images/about-store.png" alt="Royal Crest Gems Showroom Interior" />
              <div className="ceo-image-frame"></div>
            </div>
            <div className="ceo-info">
              <h2>Where Elegance Meets Legacy</h2>
              <hr className="gold-divider" style={{ margin: '20px 0' }} />
              <p>
                Royal Crest Gems was born from a passion for exceptional craftsmanship and a desire to create
                jewelry that transcends trends. Founded in 2011 in the historic city of Malmö, Sweden, our brand
                was built on the principle that every piece of jewelry should tell a story.
              </p>
              <br />
              <p>
                Our dual heritage — rooted in Scandinavian minimalism and inspired by the grandeur of classical
                jewelry making — gives each creation a unique character. We source the finest gold, diamonds,
                and gemstones from ethical suppliers worldwide, and our master artisans transform these raw
                materials into wearable works of art.
              </p>
              <br />
              <p>
                Today, with showrooms in both Monterey Park, California and Malmö, Sweden, we serve a global
                clientele of discerning individuals who appreciate the artistry that goes into every ring,
                necklace, bracelet, and gemstone we create.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO SECTION */}
      <section className="section section-cream" id="ceo-section">
        <div className="container">
          <div className="section-header">
            <h2>Meet Our Founder & CEO</h2>
          </div>
          <div className="ceo-section">
            <div className="ceo-image-wrapper">
              <img src="/images/ceo-1.jpg" alt="Bruce Bleak - Founder and CEO of Royal Crest Gems" style={{ aspectRatio: '3/4', objectFit: 'cover' }} />
              <div className="ceo-image-frame"></div>
            </div>
            <div className="ceo-info">
              <h3>Bruce Bleak</h3>
              <p className="ceo-title">Founder & Chief Executive Officer</p>
              <p>
                With over two decades of experience in the fine jewelry industry, Bruce Bleak founded
                Royal Crest Gems with a singular vision: to bridge Scandinavian craftsmanship with timeless
                luxury. Born and raised between the serene landscapes of Malmö, Sweden and the vibrant
                energy of California, Bruce developed an eye for exceptional gemstones and a passion
                for creating pieces that tell stories.
              </p>
              <br />
              <p>
                His dual heritage inspired the company&apos;s unique approach — merging Nordic minimalist
                design principles with the grandeur of classical jewelry making. Under his leadership,
                Royal Crest Gems has grown from a boutique atelier to an internationally recognized name
                in fine jewelry, serving discerning clients across two continents.
              </p>
              <br />
              <p>
                Bruce personally oversees the sourcing of every diamond and gemstone, ensuring that each
                piece meets the exacting standards that have become synonymous with the Royal Crest Gems name.
              </p>
              <blockquote>
                &ldquo;Every gemstone has a story waiting to be told. Our craft is to listen to that story
                and shape it into something that will be cherished for generations. That is the Royal Crest
                Gems promise.&rdquo;
              </blockquote>
            </div>
          </div>


        </div>
      </section>

      {/* REGIONAL LEADERSHIP */}
      <section className="section section-cream" id="regional-leadership">
        <div className="container">
          <div className="section-header">
            <h2>Regional Leadership</h2>
            <p>Meet the regional managers who lead our showrooms and personally care for our clients across two continents.</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <div className="team-card" key={member.email} id={`team-${member.initials.toLowerCase()}`}>
                {/* To use a real photo, replace the .team-photo block below with:
                    <img className="team-photo-img" src="/images/edward-frank.jpg" alt={member.name} /> */}
                <div className="team-photo">
                  <div className="team-photo-initials">{member.initials}</div>
                  <span className="team-photo-caption">Photo Coming Soon</span>
                </div>
                <div className="team-card-body">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p>{member.bio}</p>
                  <div className="team-contact">
                    <a href={`mailto:${member.email}`}>
                      <span className="team-contact-icon">✉️</span> {member.email}
                    </a>
                    <a href={`tel:${member.phoneHref}`}>
                      <span className="team-contact-icon">📞</span> {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="section" id="our-values">
        <div className="container">
          <div className="section-header">
            <h2>Our Values</h2>
            <p>The principles that guide every piece we create and every client we serve.</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🎨</div>
              <h4>Artisan Craftsmanship</h4>
              <p>Every piece is handcrafted by master jewelers who bring decades of experience and an unwavering attention to detail to their work.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h4>Integrity & Trust</h4>
              <p>We believe in transparent sourcing, honest pricing, and building lasting relationships with every client who walks through our doors.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h4>Timeless Elegance</h4>
              <p>Our designs transcend fleeting trends, creating pieces that remain as beautiful and relevant decades from now as they are today.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h4>Sustainability</h4>
              <p>We are committed to ethical sourcing and responsible practices, ensuring that our luxury comes without compromise to our planet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONES TIMELINE */}
      <section className="section section-cream" id="milestones">
        <div className="container">
          <div className="section-header">
            <h2>Our Journey</h2>
            <p>Key milestones in the Royal Crest Gems story.</p>
          </div>
          <div className="timeline">
            {milestones.map((m, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <div className="timeline-year">{m.year}</div>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
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
