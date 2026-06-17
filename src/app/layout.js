import './globals.css';

export const metadata = {
  metadataBase: new URL('https://royalcrestgems.com'),
  title: {
    default: 'Royal Crest Gems | Fine Jewelry & Luxury Timepieces',
    template: '%s | Royal Crest Gems',
  },
  description: 'Royal Crest Gems — Where Elegance Meets Legacy. Premium gold, diamond, and gemstone jewelry with showrooms in the United States and Sweden. Established 2011.',
  keywords: 'luxury jewelry, gold jewelry, diamond rings, fine jewelry, engagement rings, watches, Sweden jewelry, California jewelry, Royal Crest Gems',
  authors: [{ name: 'Royal Crest Gems' }],
  openGraph: {
    title: 'Royal Crest Gems | Fine Jewelry & Luxury Timepieces',
    description: 'Where Elegance Meets Legacy. Premium jewelry collections featuring gold, diamonds, and precious gemstones.',
    url: 'https://royalcrestgems.com',
    siteName: 'Royal Crest Gems',
    type: 'website',
  },
};

export const viewport = {
  themeColor: '#C9A96E',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
