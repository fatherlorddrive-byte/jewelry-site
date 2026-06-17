const products = {
  necklaces: {
    title: "Necklaces & Pendants",
    description: "Exquisite necklaces and pendants in solid gold, platinum, and investment-grade diamonds — designed to command attention at the most exclusive occasions.",
    subcategories: {
      gold: {
        title: "Gold Necklaces",
        items: [
          {
            id: "gn-001",
            name: "Royal Cuban Link Chain",
            description: "A bold 18K gold Cuban link chain with a hand-polished finish. This heavyweight masterpiece commands attention with its classic interlocking pattern and diamond-set lobster clasp.",
            price: "$52,000",
            material: "18K Yellow Gold, Diamonds",
            weight: "215g",
            length: '22"',
            image: "/images/gold-mens-chain.png"
          },
          {
            id: "gn-002",
            name: "Aurora Diamond Pendant Necklace",
            description: "A stunning teardrop pendant adorned with micro-pavé VS diamonds on a delicate 18K gold chain. The pendant catches light from every angle, creating a mesmerizing display.",
            price: "$38,500",
            material: "18K Yellow Gold, VS Diamonds",
            weight: "24g",
            length: '18"',
            image: "/images/gold-womens-pendant.png"
          },
          {
            id: "gn-003",
            name: "Imperial Byzantine Gold Collar",
            description: "An extraordinary 22K gold collar woven in the ancient Byzantine pattern, accented with bezel-set diamonds. A sculptural statement of pure goldsmithing artistry.",
            price: "$74,000",
            material: "22K Yellow Gold, Diamonds",
            weight: "180g",
            length: '16"',
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
            description: "A breathtaking rivière necklace featuring 42 round brilliant-cut diamonds graduated in size. Each stone is hand-selected for exceptional clarity and fire — our crown jewel of necklaces.",
            price: "$215,000",
            material: "Platinum, VS1 Diamonds",
            weight: "32g",
            totalCarat: "8.5ct",
            image: "/images/diamond-collection.png"
          },
          {
            id: "dn-002",
            name: "Empress Solitaire Pendant",
            description: "A magnificent 2-carat pear-shaped D-color diamond suspended from an invisible platinum setting. The stone appears to float on the chest, creating an ethereal effect.",
            price: "$96,000",
            material: "Platinum, VVS2 Diamond",
            totalCarat: "2.0ct",
            image: "/images/necklace-collection.png"
          }
        ]
      },
      platinum: {
        title: "Platinum Necklaces",
        items: [
          {
            id: "pn-001",
            name: "Glacier Platinum Diamond Lariat",
            description: "A fluid platinum lariat cascading with a ribbon of channel-set diamonds. The cool brilliance of platinum frames each stone for a contemporary, architectural elegance.",
            price: "$58,000",
            material: "950 Platinum, VS Diamonds",
            totalCarat: "4.2ct",
            length: '20"',
            image: "/images/necklace-collection.png"
          }
        ]
      }
    }
  },

  rings: {
    title: "Rings",
    description: "From flawless engagement diamonds to platinum statement pieces, our rings symbolize love, legacy, and uncompromising luxury.",
    subcategories: {
      engagement: {
        title: "Engagement Rings",
        items: [
          {
            id: "er-001",
            name: "Eternal Promise Solitaire",
            description: "A timeless round brilliant-cut diamond solitaire in a classic six-prong platinum setting. The cathedral mount elevates the diamond for maximum light performance.",
            price: "$48,000",
            material: "Platinum, VVS1 Diamond",
            centerStone: "1.5ct Round Brilliant",
            image: "/images/diamond-engagement-ring.png"
          },
          {
            id: "er-002",
            name: "Halo of Light",
            description: "A dazzling cushion-cut center diamond surrounded by a halo of micro-pavé diamonds. The split shank adds an extra dimension of sparkle and modern sophistication.",
            price: "$63,000",
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
            name: "Monarch Diamond Signet Ring",
            description: "A distinguished 18K gold signet ring crowned with a pavé-diamond face and polished sides. The substantial weight gives it a commanding presence on the hand.",
            price: "$31,000",
            material: "18K Yellow Gold, Diamonds",
            weight: "42g",
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
            price: "$44,000",
            material: "Platinum, VS Diamonds",
            totalCarat: "3.2ct",
            image: "/images/rings-collection.png"
          },
          {
            id: "dr-002",
            name: "Royal Three-Stone Ring",
            description: "A magnificent trilogy ring featuring a center emerald-cut diamond flanked by two trapezoid diamonds. Symbolizing past, present, and future.",
            price: "$138,000",
            material: "Platinum, VVS Diamonds",
            centerStone: "2.5ct Emerald Cut",
            image: "/images/diamond-engagement-ring.png"
          }
        ]
      },
      platinum: {
        title: "Platinum Rings",
        items: [
          {
            id: "ptr-001",
            name: "The Sovereign Platinum Solitaire",
            description: "Our flagship engagement ring: a GIA-certified 5-carat D-color, internally flawless round brilliant diamond set in a knife-edge platinum band. The pinnacle of perfection.",
            price: "$240,000",
            material: "950 Platinum, GIA D/IF Diamond",
            centerStone: "5.0ct Round Brilliant",
            image: "/images/diamond-engagement-ring.png"
          }
        ]
      }
    }
  },

  bracelets: {
    title: "Bracelets & Bangles",
    description: "Wrist-defining pieces in gold, platinum, and diamonds — each crafted to perfection for those who appreciate rare brilliance.",
    subcategories: {
      diamond: {
        title: "Diamond Bracelets",
        items: [
          {
            id: "db-001",
            name: "Radiance Tennis Bracelet",
            description: "A classic tennis bracelet featuring 48 round brilliant-cut diamonds in a four-prong inline setting. The flexible articulated design drapes beautifully on the wrist.",
            price: "$86,000",
            material: "18K White Gold, VS Diamonds",
            totalCarat: "5.0ct",
            length: '7"',
            image: "/images/diamond-tennis-bracelet.png"
          },
          {
            id: "db-002",
            name: "Constellation Diamond Bangle",
            description: "A rigid 18K white gold bangle with scattered diamond accents arranged like stars. The hinged clasp ensures a secure and comfortable fit.",
            price: "$54,000",
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
            description: "A bold 18K yellow gold cuff bangle with a hammered texture finish and diamond-set edges. The wide profile and substantial weight make this a true statement piece.",
            price: "$33,000",
            material: "18K Yellow Gold, Diamonds",
            weight: "98g",
            image: "/images/bracelet-collection.png"
          }
        ]
      },
      platinum: {
        title: "Platinum Bracelets",
        items: [
          {
            id: "ptb-001",
            name: "Aurora Platinum Diamond Bracelet",
            description: "A flagship line bracelet of 60 emerald-cut diamonds graduating in size, set in handcrafted platinum. A breathtaking river of light for the most discerning collector.",
            price: "$192,000",
            material: "950 Platinum, VVS Diamonds",
            totalCarat: "12.0ct",
            length: '7"',
            image: "/images/bracelet-collection.png"
          }
        ]
      }
    }
  },

  earrings: {
    title: "Earrings",
    description: "From investment-grade diamond studs to dramatic chandelier designs, our earrings offer the perfect finishing touch for every grand occasion.",
    subcategories: {
      diamond: {
        title: "Diamond Earrings",
        items: [
          {
            id: "de-001",
            name: "Brilliance Stud Earrings",
            description: "Classic round brilliant-cut diamond stud earrings in a four-prong basket setting. These timeless studs are the cornerstone of any fine jewelry collection.",
            price: "$58,000",
            material: "Platinum, VS1 Diamonds",
            totalCarat: "4.0ct (2.0ct each)",
            image: "/images/earrings-collection.png"
          },
          {
            id: "de-002",
            name: "Chandelier Cascade Earrings",
            description: "Stunning chandelier earrings with cascading tiers of marquise and round diamonds. These show-stopping pieces move gracefully with every turn of the head.",
            price: "$124,000",
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
            name: "Imperial Gold Diamond Hoops",
            description: "Statement 18K gold hoop earrings encrusted with two rows of pavé diamonds and a click-top closure. Elegance that transitions seamlessly from day to night.",
            price: "$30,000",
            material: "18K Yellow Gold, Diamonds",
            weight: "28g",
            image: "/images/earrings-collection.png"
          }
        ]
      }
    }
  },

  gold_collection: {
    title: "Gold Collection",
    description: "Our signature gold collection showcases the timeless beauty of gold in all its forms — radiant yellow gold, romantic rose gold, and contemporary white gold.",
    subcategories: {
      yellow_gold: {
        title: "24K & 18K Yellow Gold",
        items: [
          {
            id: "yg-001",
            name: "Royal Bar Pendant",
            description: "A sleek 24K gold bar pendant with laser-engraved Royal Crest Gems insignia and a diamond bail. The high-karat gold gleams with an unmistakable rich warmth.",
            price: "$36,000",
            material: "24K Yellow Gold, Diamonds",
            weight: "95g",
            image: "/images/gold-collection.png"
          },
          {
            id: "yg-002",
            name: "Heritage Byzantine Bracelet",
            description: "An intricate Byzantine chain bracelet in 18K yellow gold. The complex interlocking pattern is a testament to the art of fine goldsmithing.",
            price: "$48,000",
            material: "18K Yellow Gold",
            weight: "120g",
            image: "/images/bracelet-collection.png"
          }
        ]
      },
      rose_gold: {
        title: "Rose Gold",
        items: [
          {
            id: "rg-001",
            name: "Blush Eternal Diamond Necklace",
            description: "A delicate 18K rose gold pendant pavé-set with pink and white diamonds on a fine cable chain. The warm hue of rose gold adds a romantic touch to this radiant design.",
            price: "$34,000",
            material: "18K Rose Gold, Pink & White Diamonds",
            weight: "16g",
            image: "/images/necklace-collection.png"
          }
        ]
      },
      white_gold: {
        title: "White Gold",
        items: [
          {
            id: "wg-001",
            name: "Glacier Diamond Link Bracelet",
            description: "A contemporary 18K white gold link bracelet with alternating polished and diamond-pavé links. The cool silver tone exudes modern sophistication.",
            price: "$51,000",
            material: "18K White Gold, VS Diamonds",
            weight: "78g",
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
            price: "$420,000",
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
            price: "$92,000",
            material: "18K White Gold, VS Diamonds",
            totalCarat: "3.8ct",
            image: "/images/bracelet-collection.png"
          }
        ]
      },
      colored: {
        title: "Fancy Color & Rare Stones",
        items: [
          {
            id: "cd-001",
            name: "Champagne Diamond Ring",
            description: "A rare 1.5-carat fancy champagne diamond set in a rose gold cathedral mount with white diamond side stones. The warm cognac hue is utterly captivating.",
            price: "$78,000",
            material: "18K Rose Gold, Fancy Champagne Diamond",
            centerStone: "1.5ct Champagne Diamond",
            image: "/images/rings-collection.png"
          },
          {
            id: "cd-002",
            name: "Imperial Blue Sapphire Halo Ring",
            description: "A rare 5-carat unheated Ceylon blue sapphire encircled by a double halo of brilliant diamonds, set in platinum. A regal centerpiece of extraordinary provenance.",
            price: "$205,000",
            material: "Platinum, Ceylon Sapphire, Diamonds",
            centerStone: "5.0ct Ceylon Sapphire",
            image: "/images/rings-collection.png"
          },
          {
            id: "cd-003",
            name: "Midnight Fancy Black Diamond Ring",
            description: "A dramatic 4-carat natural fancy black diamond framed by a halo of white diamonds in blackened-platinum and white gold. Bold, rare, and unforgettable.",
            price: "$190,000",
            material: "Platinum & 18K White Gold, Black & White Diamonds",
            centerStone: "4.0ct Fancy Black Diamond",
            image: "/images/diamond-collection.png"
          }
        ]
      }
    }
  },

  platinum_collection: {
    title: "Platinum Collection",
    description: "The rarest of precious metals paired with the world's finest gemstones. Our platinum masterpieces represent the very summit of the Royal Crest Gems atelier.",
    subcategories: {
      signature: {
        title: "Signature Platinum",
        items: [
          {
            id: "ptc-001",
            name: "The Regent Platinum Necklace",
            description: "A monumental platinum necklace set with a graduated row of D-color diamonds totaling 15 carats. A once-in-a-lifetime heirloom and the masterwork of our atelier.",
            price: "$190,000",
            material: "950 Platinum, D-Color Diamonds",
            totalCarat: "15.0ct",
            length: '16"',
            image: "/images/diamond-collection.png"
          },
          {
            id: "ptc-002",
            name: "Platinum Eternity Crown Ring",
            description: "A sculptural crown-motif eternity ring in solid platinum, fully set with brilliant-cut diamonds. Regal architecture for the hand.",
            price: "$67,000",
            material: "950 Platinum, VVS Diamonds",
            totalCarat: "3.0ct",
            image: "/images/rings-collection.png"
          }
        ]
      },
      gemstone: {
        title: "Rare Gemstone Platinum",
        items: [
          {
            id: "ptc-003",
            name: "Burmese Ruby Platinum Ring",
            description: "An exceptional 4-carat unheated Burmese 'pigeon's blood' ruby flanked by tapered diamond baguettes in platinum. Among the rarest and most coveted of all gemstones.",
            price: "$310,000",
            material: "950 Platinum, Burmese Ruby, Diamonds",
            centerStone: "4.0ct Burmese Ruby",
            image: "/images/rings-collection.png"
          },
          {
            id: "ptc-004",
            name: "Colombian Emerald Platinum Pendant",
            description: "A vivid 6-carat Colombian emerald of remarkable saturation, suspended within a frame of pavé diamonds on a platinum chain. A treasure of the Andes.",
            price: "$165,000",
            material: "950 Platinum, Colombian Emerald, Diamonds",
            centerStone: "6.0ct Colombian Emerald",
            image: "/images/gold-womens-pendant.png"
          }
        ]
      }
    }
  }
};

export default products;
