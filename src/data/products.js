const products = {
  necklaces: {
    title: "Necklaces & Pendants",
    description: "Exquisite necklaces and pendants crafted with the finest materials, designed to complement every occasion.",
    subcategories: {
      gold: {
        title: "Gold Necklaces",
        items: [
          {
            id: "gn-001",
            name: "Royal Cuban Link Chain",
            description: "A bold 18K gold Cuban link chain with a polished finish. This heavyweight piece commands attention with its classic interlocking pattern and secure lobster clasp.",
            price: "$4,850",
            material: "18K Yellow Gold",
            weight: "45g",
            length: '22"',
            image: "/images/gold-mens-chain.png"
          },
          {
            id: "gn-002",
            name: "Aurora Pendant Necklace",
            description: "A stunning teardrop pendant adorned with micro-pavé diamonds on a delicate 18K gold chain. The pendant catches light from every angle, creating a mesmerizing display.",
            price: "$3,200",
            material: "18K Yellow Gold, Diamonds",
            weight: "12g",
            length: '18"',
            image: "/images/gold-womens-pendant.png"
          },
          {
            id: "gn-003",
            name: "Sovereign Rope Chain",
            description: "An intricately woven 14K gold rope chain that blends timeless craftsmanship with modern elegance. Its twisted links create a luxurious texture that shimmers with movement.",
            price: "$2,950",
            material: "14K Yellow Gold",
            weight: "28g",
            length: '24"',
            image: "/images/gold-collection.png"
          }
        ]
      },
      diamond: {
        title: "Diamond Necklaces",
        items: [
          {
            id: "dn-001",
            name: "Celestial Diamond Rivière",
            description: "A breathtaking rivière necklace featuring 42 round brilliant-cut diamonds graduated in size. Each stone is hand-selected for exceptional clarity and fire.",
            price: "$18,500",
            material: "Platinum, VS1 Diamonds",
            weight: "32g",
            totalCarat: "8.5ct",
            image: "/images/diamond-collection.png"
          },
          {
            id: "dn-002",
            name: "Empress Solitaire Pendant",
            description: "A magnificent 2-carat pear-shaped diamond suspended from an invisible platinum setting. The stone appears to float on the chest, creating an ethereal effect.",
            price: "$12,800",
            material: "Platinum, VVS2 Diamond",
            totalCarat: "2.0ct",
            image: "/images/necklace-collection.png"
          }
        ]
      },
      silver: {
        title: "Silver Necklaces",
        items: [
          {
            id: "sn-001",
            name: "Nordic Frost Chain",
            description: "A sleek sterling silver box chain with a rhodium-plated finish for lasting shine. Inspired by Scandinavian minimalism, this piece is elegant in its simplicity.",
            price: "$380",
            material: "925 Sterling Silver",
            weight: "18g",
            length: '20"',
            image: "/images/necklace-collection.png"
          },
          {
            id: "sn-002",
            name: "Moonstone Cascade Pendant",
            description: "A radiant moonstone set in an intricate sterling silver bezel with cascading silver droplets. The moonstone displays a captivating blue adularescence.",
            price: "$520",
            material: "925 Sterling Silver, Moonstone",
            weight: "14g",
            image: "/images/necklace-collection.png"
          }
        ]
      },
      pearl: {
        title: "Pearl Necklaces",
        items: [
          {
            id: "pn-001",
            name: "South Sea Pearl Strand",
            description: "A graduated strand of lustrous South Sea pearls ranging from 10mm to 14mm. Each pearl is hand-matched for its orient, luster, and surface quality.",
            price: "$8,900",
            material: "South Sea Pearls, 18K Gold Clasp",
            length: '18"',
            image: "/images/necklace-collection.png"
          }
        ]
      }
    }
  },

  rings: {
    title: "Rings",
    description: "From engagement rings to statement pieces, our collection features masterfully crafted rings that symbolize love, achievement, and personal style.",
    subcategories: {
      engagement: {
        title: "Engagement Rings",
        items: [
          {
            id: "er-001",
            name: "Eternal Promise Solitaire",
            description: "A timeless round brilliant-cut diamond solitaire in a classic six-prong platinum setting. The cathedral mount elevates the diamond for maximum light performance.",
            price: "$9,500",
            material: "Platinum, VVS1 Diamond",
            centerStone: "1.5ct Round Brilliant",
            image: "/images/diamond-engagement-ring.png"
          },
          {
            id: "er-002",
            name: "Halo of Light",
            description: "A dazzling cushion-cut center diamond surrounded by a halo of micro-pavé diamonds. The split shank adds an extra dimension of sparkle and modern sophistication.",
            price: "$11,200",
            material: "18K White Gold, Diamonds",
            centerStone: "2.0ct Cushion Cut",
            image: "/images/rings-collection.png"
          }
        ]
      },
      gold: {
        title: "Gold Rings",
        items: [
          {
            id: "gr-001",
            name: "Monarch Signet Ring",
            description: "A distinguished 18K gold signet ring with a brushed matte top and polished sides. The substantial weight gives it a commanding presence on the hand.",
            price: "$2,400",
            material: "18K Yellow Gold",
            weight: "18g",
            image: "/images/rings-collection.png"
          },
          {
            id: "gr-002",
            name: "Twisted Vine Band",
            description: "An organic 14K rose gold band featuring intertwined vine motifs with tiny diamond accents nestled between the leaves. Nature-inspired luxury.",
            price: "$1,850",
            material: "14K Rose Gold, Diamonds",
            weight: "6g",
            image: "/images/rings-collection.png"
          }
        ]
      },
      diamond: {
        title: "Diamond Rings",
        items: [
          {
            id: "dr-001",
            name: "Eternity Embrace Band",
            description: "A full eternity band featuring channel-set princess-cut diamonds all the way around. Representing never-ending love with unbroken brilliance.",
            price: "$5,600",
            material: "Platinum, VS Diamonds",
            totalCarat: "3.2ct",
            image: "/images/rings-collection.png"
          },
          {
            id: "dr-002",
            name: "Royal Three-Stone Ring",
            description: "A magnificent trilogy ring featuring a center emerald-cut diamond flanked by two trapezoid diamonds. Symbolizing past, present, and future.",
            price: "$14,500",
            material: "Platinum, VVS Diamonds",
            centerStone: "2.5ct Emerald Cut",
            image: "/images/diamond-engagement-ring.png"
          }
        ]
      },
      silver: {
        title: "Silver Rings",
        items: [
          {
            id: "sr-001",
            name: "Scandinavian Minimalist Band",
            description: "A clean, contemporary sterling silver band with a brushed satin finish. Inspired by the clean lines of Nordic design philosophy.",
            price: "$180",
            material: "925 Sterling Silver",
            weight: "8g",
            image: "/images/rings-collection.png"
          },
          {
            id: "sr-002",
            name: "Crystal Frost Cocktail Ring",
            description: "A bold sterling silver cocktail ring featuring a large oval cubic zirconia stone surrounded by an ornate filigree setting.",
            price: "$340",
            material: "925 Sterling Silver, CZ",
            image: "/images/rings-collection.png"
          }
        ]
      }
    }
  },

  bracelets: {
    title: "Bracelets & Bangles",
    description: "Wrist-defining pieces that range from delicate chains to statement bangles, each crafted to perfection with premium materials.",
    subcategories: {
      diamond: {
        title: "Diamond Bracelets",
        items: [
          {
            id: "db-001",
            name: "Radiance Tennis Bracelet",
            description: "A classic tennis bracelet featuring 48 round brilliant-cut diamonds in a four-prong inline setting. The flexible articulated design drapes beautifully on the wrist.",
            price: "$7,800",
            material: "18K White Gold, VS Diamonds",
            totalCarat: "5.0ct",
            length: '7"',
            image: "/images/diamond-tennis-bracelet.png"
          },
          {
            id: "db-002",
            name: "Constellation Bangle",
            description: "A rigid 18K white gold bangle with scattered diamond accents arranged like stars. The hinged clasp ensures a secure and comfortable fit.",
            price: "$4,200",
            material: "18K White Gold, Diamonds",
            totalCarat: "1.8ct",
            image: "/images/bracelet-collection.png"
          }
        ]
      },
      gold: {
        title: "Gold Bracelets",
        items: [
          {
            id: "gb-001",
            name: "Imperial Cuff Bangle",
            description: "A bold 18K yellow gold cuff bangle with a hammered texture finish. The wide profile and substantial weight make this a true statement piece.",
            price: "$5,600",
            material: "18K Yellow Gold",
            weight: "42g",
            image: "/images/bracelet-collection.png"
          },
          {
            id: "gb-002",
            name: "Figaro Link Bracelet",
            description: "A classic men's 14K gold Figaro chain bracelet with alternating flat and round links. Finished with a secure fold-over clasp.",
            price: "$2,100",
            material: "14K Yellow Gold",
            weight: "22g",
            length: '8.5"',
            image: "/images/bracelet-collection.png"
          }
        ]
      },
      silver: {
        title: "Silver Bracelets",
        items: [
          {
            id: "sb-001",
            name: "Woven Heritage Cuff",
            description: "A hand-woven sterling silver cuff bracelet with an oxidized finish for depth and character. Each piece has subtle variations, making it truly unique.",
            price: "$420",
            material: "925 Sterling Silver",
            weight: "35g",
            image: "/images/bracelet-collection.png"
          },
          {
            id: "sb-002",
            name: "Charm Garden Bracelet",
            description: "A delicate sterling silver chain bracelet with hand-selected charms including a crown, diamond, heart, and star. Tell your story through elegant symbols.",
            price: "$290",
            material: "925 Sterling Silver",
            image: "/images/bracelet-collection.png"
          }
        ]
      }
    }
  },

  earrings: {
    title: "Earrings",
    description: "From sparkling studs to dramatic chandelier designs, our earring collection offers the perfect finishing touch for every look.",
    subcategories: {
      diamond: {
        title: "Diamond Earrings",
        items: [
          {
            id: "de-001",
            name: "Brilliance Stud Earrings",
            description: "Classic round brilliant-cut diamond stud earrings in a four-prong basket setting. These timeless studs are the cornerstone of any fine jewelry collection.",
            price: "$4,200",
            material: "18K White Gold, VS1 Diamonds",
            totalCarat: "2.0ct (1.0ct each)",
            image: "/images/earrings-collection.png"
          },
          {
            id: "de-002",
            name: "Chandelier Cascade Earrings",
            description: "Stunning chandelier earrings with cascading tiers of marquise and round diamonds. These show-stopping pieces move gracefully with every turn of the head.",
            price: "$8,900",
            material: "18K White Gold, VS Diamonds",
            totalCarat: "4.5ct",
            image: "/images/earrings-collection.png"
          }
        ]
      },
      gold: {
        title: "Gold Earrings",
        items: [
          {
            id: "ge-001",
            name: "Classic Gold Hoops",
            description: "Timeless 18K gold hoop earrings with a polished finish and click-top closure. The perfect diameter for everyday elegance that transitions seamlessly from day to night.",
            price: "$1,200",
            material: "18K Yellow Gold",
            weight: "8g",
            image: "/images/earrings-collection.png"
          },
          {
            id: "ge-002",
            name: "Teardrop Gold Drops",
            description: "Elegant 14K gold teardrop earrings with a hammered texture that catches and reflects light beautifully. Lightweight comfort meets high-end style.",
            price: "$890",
            material: "14K Yellow Gold",
            weight: "5g",
            image: "/images/earrings-collection.png"
          }
        ]
      },
      silver: {
        title: "Silver Earrings",
        items: [
          {
            id: "se-001",
            name: "Nordic Star Studs",
            description: "Sterling silver star-shaped stud earrings with a brushed satin finish. A subtle nod to Scandinavian design, perfect for everyday wear.",
            price: "$120",
            material: "925 Sterling Silver",
            image: "/images/earrings-collection.png"
          },
          {
            id: "se-002",
            name: "Twilight Drop Earrings",
            description: "Long sterling silver drop earrings with an elongated oval design and a high-polish finish. Modern minimalism at its finest.",
            price: "$210",
            material: "925 Sterling Silver",
            weight: "6g",
            image: "/images/earrings-collection.png"
          }
        ]
      }
    }
  },

  watches: {
    title: "Luxury Watches",
    description: "Precision timepieces that merge Swiss and Scandinavian craftsmanship. Each watch is a masterwork of engineering and design, built to last generations.",
    subcategories: {
      mens: {
        title: "Men's Watches",
        items: [
          {
            id: "mw-001",
            name: "Sovereign Chronograph",
            description: "A commanding 18K gold automatic chronograph with a champagne sunburst dial, Roman numeral markers, and three subdials. The exhibition caseback reveals the intricate movement.",
            price: "$15,800",
            material: "18K Yellow Gold",
            movement: "Swiss Automatic",
            waterResistance: "100m",
            image: "/images/mens-gold-watch.png"
          },
          {
            id: "mw-002",
            name: "Commander Dress Watch",
            description: "A refined men's dress watch with a slim profile, silver guilloché dial, and dauphine hands. The alligator leather strap adds a touch of classic sophistication.",
            price: "$8,900",
            material: "Stainless Steel, Sapphire Crystal",
            movement: "Swiss Automatic",
            waterResistance: "50m",
            image: "/images/mens-gold-watch.png"
          }
        ]
      },
      womens: {
        title: "Women's Watches",
        items: [
          {
            id: "ww-001",
            name: "Rose Diamond Timepiece",
            description: "An exquisite women's watch with a diamond-encrusted rose gold bezel, mother-of-pearl dial, and slender rose gold bracelet. Jewel indices mark each hour with elegance.",
            price: "$12,500",
            material: "18K Rose Gold, Diamonds",
            movement: "Swiss Quartz",
            waterResistance: "30m",
            image: "/images/womens-diamond-watch.png"
          },
          {
            id: "ww-002",
            name: "Luna Pearl Watch",
            description: "A graceful women's timepiece featuring a luminous mother-of-pearl dial with diamond hour markers and a mesh rose gold bracelet. Sophisticated femininity redefined.",
            price: "$6,800",
            material: "Rose Gold-Plated Steel, Diamonds",
            movement: "Swiss Quartz",
            waterResistance: "30m",
            image: "/images/womens-diamond-watch.png"
          }
        ]
      },
      luxury: {
        title: "Limited Edition",
        items: [
          {
            id: "lw-001",
            name: "Heritage Tourbillon",
            description: "A masterpiece of horology featuring a visible tourbillon complication, hand-engraved 18K gold case, and sapphire crystal exhibition caseback. Limited to 50 pieces worldwide.",
            price: "Contact for Price",
            material: "18K Yellow Gold, Sapphire Crystal",
            movement: "Manual Tourbillon",
            waterResistance: "30m",
            image: "/images/mens-gold-watch.png"
          }
        ]
      }
    }
  },

  gold_collection: {
    title: "Gold Collection",
    description: "Our signature gold collection showcases the timeless beauty of gold in all its forms — from radiant yellow gold to romantic rose gold and contemporary white gold.",
    subcategories: {
      yellow_gold: {
        title: "24K & 18K Yellow Gold",
        items: [
          {
            id: "yg-001",
            name: "Royal Bar Pendant",
            description: "A sleek 24K gold bar pendant with laser-engraved Royal Crest Gems insignia. The high-karat gold gleams with an unmistakable rich warmth that only pure gold can achieve.",
            price: "$6,200",
            material: "24K Yellow Gold",
            weight: "15g",
            image: "/images/gold-collection.png"
          },
          {
            id: "yg-002",
            name: "Heritage Byzantine Bracelet",
            description: "An intricate Byzantine chain bracelet in 18K yellow gold. The complex interlocking pattern is a testament to the art of fine goldsmithing.",
            price: "$4,800",
            material: "18K Yellow Gold",
            weight: "32g",
            image: "/images/bracelet-collection.png"
          }
        ]
      },
      rose_gold: {
        title: "Rose Gold",
        items: [
          {
            id: "rg-001",
            name: "Blush Infinity Necklace",
            description: "A delicate 14K rose gold infinity pendant on a fine cable chain. The warm pink hue of rose gold adds a romantic touch to this symbolic design.",
            price: "$1,450",
            material: "14K Rose Gold",
            weight: "6g",
            image: "/images/necklace-collection.png"
          },
          {
            id: "rg-002",
            name: "Rose Petal Earrings",
            description: "Sculpted 18K rose gold earrings shaped like delicate flower petals with a satin-brushed finish. Light as air with an organic, natural beauty.",
            price: "$1,890",
            material: "18K Rose Gold",
            weight: "4g",
            image: "/images/earrings-collection.png"
          }
        ]
      },
      white_gold: {
        title: "White Gold",
        items: [
          {
            id: "wg-001",
            name: "Glacier Link Bracelet",
            description: "A contemporary 18K white gold link bracelet with alternating polished and matte links. The cool silver tone of white gold exudes modern sophistication.",
            price: "$3,600",
            material: "18K White Gold",
            weight: "28g",
            image: "/images/bracelet-collection.png"
          }
        ]
      }
    }
  },

  diamond_collection: {
    title: "Diamond Collection",
    description: "Diamonds are the ultimate expression of luxury. Our collection features only the finest stones, each certified and hand-selected for exceptional brilliance.",
    subcategories: {
      solitaire: {
        title: "Solitaire Diamonds",
        items: [
          {
            id: "sd-001",
            name: "The Crown Jewel Solitaire",
            description: "An extraordinary 3-carat round brilliant diamond in a knife-edge platinum solitaire setting. GIA certified D color, IF clarity — the pinnacle of perfection.",
            price: "Contact for Price",
            material: "Platinum, GIA Certified Diamond",
            centerStone: "3.0ct D/IF Round Brilliant",
            image: "/images/diamond-engagement-ring.png"
          }
        ]
      },
      pave: {
        title: "Pavé Diamonds",
        items: [
          {
            id: "pd-001",
            name: "Stardust Pavé Bangle",
            description: "An 18K white gold bangle completely encrusted with micro-pavé diamonds. Over 200 individual diamonds create a continuous carpet of brilliant light.",
            price: "$9,200",
            material: "18K White Gold, VS Diamonds",
            totalCarat: "3.8ct",
            image: "/images/bracelet-collection.png"
          }
        ]
      },
      colored: {
        title: "Fancy Color Diamonds",
        items: [
          {
            id: "cd-001",
            name: "Champagne Diamond Ring",
            description: "A rare 1.5-carat fancy champagne diamond set in a rose gold cathedral mount with white diamond side stones. The warm cognac hue is utterly captivating.",
            price: "$7,500",
            material: "18K Rose Gold, Fancy Champagne Diamond",
            centerStone: "1.5ct Champagne Diamond",
            image: "/images/rings-collection.png"
          }
        ]
      }
    }
  }
};

export default products;
