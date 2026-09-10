import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'alq-001',
    slug: 'the-ivory-essential',
    name: 'The Ivory Essential',
    category: 'shalwar-kameez',
    price: 8500,
    compareAtPrice: 9800,
    shortDescription: 'Warm ivory with a band collar, tonal buttons, and a relaxed silhouette.',
    description: 'A cornerstone of the Al Qasim wardrobe. Tailored from premium 100% cotton with a crisp yet fluid hand-feel. Features a minimalist band collar, tonal buttons, and an impeccably proportioned traditional shalwar designed for effortless daylong elegance.',
    fabric: 'Cotton',
    includes: 'Kameez + shalwar',
    fit: 'Relaxed Traditional Fit with tapered sleeves and fluid shalwar drape',
    colors: [
      { name: 'Warm Ivory', hex: '#FAF7F0', image: '/images/products/the-ivory-essential.webp' },
      { name: 'Muted Sage', hex: '#8B947E', image: '/images/products/sage-everyday-kurta.webp' },
      { name: 'Charcoal', hex: '#2D2D2D', image: '/images/products/the-charcoal-waistcoat.webp' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/products/the-ivory-essential.webp',
      '/images/products/the-ivory-essential-detail.webp'
    ],
    tags: ['everyday-wear', 'new-in', 'featured'],
    details: [
      'Tailored band collar with clean placket',
      'Dual concealed in-seam pockets',
      'Traditional cuffed sleeve with tonal button closure',
      'Pre-washed and shrink-resistant treatment',
      'Complete matching shalwar included'
    ],
    careInstructions: [
      'Gentle cold machine wash or hand wash with mild detergent',
      'Warm iron while slightly damp',
      'Do not bleach or tumble dry on high heat',
      'Dry in shade to preserve ivory brilliance'
    ],
    inStock: true
  },
  {
    id: 'alq-002',
    slug: 'sage-everyday-kurta',
    name: 'Sage Everyday Kurta',
    category: 'kurtas',
    price: 6500,
    compareAtPrice: 7500,
    shortDescription: 'Muted sage with a clean straight cut, band collar, and neatly finished cuffs.',
    description: 'Cut from breathable, soft-weave cotton in a muted botanical sage hue. Features a crisp band collar, straight silhouette with side vent gussets, and neatly tailored cuffs for understated everyday styling.',
    fabric: 'Cotton',
    includes: 'Kurta only',
    fit: 'Clean Straight Cut with comfortable side slits',
    colors: [
      { name: 'Muted Sage', hex: '#8B947E', image: '/images/products/sage-everyday-kurta.webp' },
      { name: 'Warm Ivory', hex: '#FAF7F0', image: '/images/products/the-ivory-essential.webp' },
      { name: 'Desert Sand', hex: '#C4B59E', image: '/images/products/sandstone-classic.webp' },
      { name: 'Midnight', hex: '#1C2536', image: '/images/products/midnight-signature.webp' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/products/sage-everyday-kurta.webp',
      '/images/products/sage-everyday-kurta-detail.webp'
    ],
    tags: ['everyday-wear', 'new-in', 'featured'],
    details: [
      'Clean mandarin band collar',
      'Straight cut hem with reinforced side vents',
      'Neatly finished button cuffs',
      'Dual functional side pockets'
    ],
    careInstructions: [
      'Machine wash cold on gentle cycle',
      'Warm iron or steam press',
      'Do not wring; line dry in shade'
    ],
    inStock: true
  },
  {
    id: 'alq-003',
    slug: 'the-charcoal-waistcoat',
    name: 'The Charcoal Waistcoat',
    category: 'waistcoats',
    price: 9000,
    compareAtPrice: 10500,
    shortDescription: 'Textured charcoal with a structured collar, button fastening, and welt pockets.',
    description: 'An artful sartorial layer designed to complement both ivory and dark kurtas. Crafted from a structured suiting blend with subtle tactile texture. Accented with a structured collar, engraved tonal buttons, and triple welt pockets.',
    fabric: 'Suiting blend',
    includes: 'Waistcoat only',
    fit: 'Structured Sartorial Fit with contoured back waist adjustment',
    colors: [
      { name: 'Textured Charcoal', hex: '#3B3A39', image: '/images/products/the-charcoal-waistcoat.webp' },
      { name: 'Deep Onyx', hex: '#1A1A1A', image: '/images/products/onyx-evening-kurta.webp' },
      { name: 'Midnight Navy', hex: '#1C2536', image: '/images/products/midnight-signature.webp' }
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)'],
    images: [
      '/images/products/the-charcoal-waistcoat.webp',
      '/images/products/the-charcoal-waistcoat-detail.webp'
    ],
    tags: ['occasion-wear', 'new-in', 'featured'],
    details: [
      'Structured mandarin collar',
      'Button fastening with engraved buttons',
      'Three functional welt pockets and interior chest pocket',
      'Breathable matte inner lining with back cinch belt'
    ],
    careInstructions: [
      'Professional dry clean recommended',
      'Steam press on low/medium setting',
      'Store on wide-shoulder wooden hanger'
    ],
    inStock: true
  },
  {
    id: 'alq-004',
    slug: 'sandstone-classic',
    name: 'Sandstone Classic',
    category: 'shalwar-kameez',
    price: 8200,
    shortDescription: 'Sand beige with a shirt collar, concealed placket, and matching relaxed shalwar.',
    description: 'Earthy elegance distilled into timeless Pakistani menswear. Cut from a smooth cotton blend in desert sandstone beige. Features an understated shirt collar, concealed front placket, and a matching full-cut shalwar.',
    fabric: 'Cotton blend',
    includes: 'Kameez + shalwar',
    fit: 'Traditional Relaxed Fit',
    colors: [
      { name: 'Sand Beige', hex: '#D3C4AE', image: '/images/products/sandstone-classic.webp' },
      { name: 'Warm Ivory', hex: '#FAF7F0', image: '/images/products/the-ivory-essential.webp' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/products/sandstone-classic.webp',
      '/images/products/sandstone-classic-detail.webp'
    ],
    tags: ['everyday-wear', 'new-in'],
    details: [
      'Point shirt collar with collar stay pockets',
      'Concealed placket with stitch reinforcement',
      'Dual deep in-seam pockets',
      'Complete matching relaxed shalwar'
    ],
    careInstructions: [
      'Machine wash cold with similar colors',
      'Medium heat iron',
      'Dry in shade'
    ],
    inStock: true
  },
  {
    id: 'alq-005',
    slug: 'midnight-signature',
    name: 'Midnight Signature',
    category: 'shalwar-kameez',
    price: 9200,
    shortDescription: 'Deep navy with tonal buttons and a refined, straight silhouette.',
    description: 'Commanding and distinguished. Tailored from an easy-care wash-and-wear blend with wrinkle-resistant drape. Rich midnight navy shade with tonal buttons and clean, sharp shoulder definition.',
    fabric: 'Wash-and-wear blend',
    includes: 'Kameez + shalwar',
    fit: 'Refined Straight Silhouette',
    colors: [
      { name: 'Deep Navy', hex: '#1C2536', image: '/images/products/midnight-signature.webp' },
      { name: 'Charcoal', hex: '#2D2D2D', image: '/images/products/the-charcoal-waistcoat.webp' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/products/midnight-signature.webp',
      '/images/products/midnight-signature-detail.webp'
    ],
    tags: ['everyday-wear', 'occasion-wear', 'new-in'],
    details: [
      'Structured band collar',
      'Tonal buttons with reinforced buttonholes',
      'Crease-resistant luxury wash-and-wear fabric',
      'Full matching shalwar with drawstring waist'
    ],
    careInstructions: [
      'Machine wash gentle cycle cold',
      'Low iron if needed; shake damp and hang dry',
      'Colorfast treatment preserves deep navy saturation'
    ],
    inStock: true
  },
  {
    id: 'alq-006',
    slug: 'rust-heritage-kurta',
    name: 'Rust Heritage Kurta',
    category: 'kurtas',
    price: 7200,
    shortDescription: 'Earthy terracotta with delicate tonal embroidery around the collar and placket.',
    description: 'A celebration of courtyard heritage. Warm terracotta tone woven in a textured cotton-linen blend. Detailed with intricate tonal geometric needlework bordering the collar and front placket.',
    fabric: 'Cotton-linen blend',
    includes: 'Kurta only',
    fit: 'Modern Regular Straight Fit',
    colors: [
      { name: 'Earthy Terracotta', hex: '#B3583C', image: '/images/products/rust-heritage-kurta.webp' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/products/rust-heritage-kurta.webp',
      '/images/products/rust-heritage-kurta-detail.webp'
    ],
    tags: ['everyday-wear', 'occasion-wear', 'new-in'],
    details: [
      'Mandarin collar with tonal embroidery',
      'Intricate needlework along placket',
      'Side vent openings for effortless movement',
      'Two deep side pockets'
    ],
    careInstructions: [
      'Hand wash or gentle cold machine wash',
      'Steam press or warm iron on reverse side',
      'Line dry away from direct sunlight'
    ],
    inStock: true
  },
  {
    id: 'alq-007',
    slug: 'pearl-occasion-waistcoat',
    name: 'Pearl Occasion Waistcoat',
    category: 'waistcoats',
    price: 10500,
    shortDescription: 'Pearl cream with a subtle woven pattern, covered buttons, and an elegant band collar.',
    description: 'Designed for celebratory occasions and evening festivities. Tailored from a luminous jacquard blend with delicate micro-geometric weave. Accented with fabric-covered buttons and a clean band collar.',
    fabric: 'Jacquard blend',
    includes: 'Waistcoat only',
    fit: 'Tailored Slim Fit',
    colors: [
      { name: 'Pearl Cream', hex: '#F4EFE6', image: '/images/products/pearl-occasion-waistcoat.webp' }
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)'],
    images: [
      '/images/products/pearl-occasion-waistcoat.webp',
      '/images/products/pearl-occasion-waistcoat-detail.webp'
    ],
    tags: ['occasion-wear', 'new-in'],
    details: [
      'Elegant band collar',
      'Hand-crafted fabric-covered button fastening',
      'Subtle woven jacquard pattern',
      'Smooth satin lining with interior pocket'
    ],
    careInstructions: [
      'Professional dry clean only',
      'Steam gently on low setting',
      'Do not apply direct hot iron to jacquard surface'
    ],
    inStock: true
  },
  {
    id: 'alq-008',
    slug: 'olive-everyday-set',
    name: 'Olive Everyday Set',
    category: 'shalwar-kameez',
    price: 8800,
    shortDescription: 'Deep olive with a patch chest pocket, band collar, and button cuffs.',
    description: 'Utilitarian precision meets heritage tailoring. Woven from durable cotton twill in deep olive. Features a functional patch chest pocket, tailored band collar, buttoned sleeve cuffs, and matching relaxed shalwar.',
    fabric: 'Cotton twill',
    includes: 'Kameez + shalwar',
    fit: 'Regular Traditional Cut',
    colors: [
      { name: 'Deep Olive', hex: '#4A533E', image: '/images/products/olive-everyday-set.webp' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/products/olive-everyday-set.webp',
      '/images/products/olive-everyday-set-detail.webp'
    ],
    tags: ['everyday-wear', 'new-in'],
    details: [
      'Reinforced band collar',
      'Exterior patch chest pocket with pen slot',
      'Buttoned cuff finish',
      'Matching traditional relaxed shalwar'
    ],
    careInstructions: [
      'Machine wash cold with like colors',
      'Tumble dry low or line dry in shade',
      'Warm iron for crisp appearance'
    ],
    inStock: true
  },
  {
    id: 'alq-009',
    slug: 'onyx-evening-kurta',
    name: 'Onyx Evening Kurta',
    category: 'kurtas',
    price: 7800,
    shortDescription: 'Matte black with fine tonal embroidery for understated occasion styling.',
    description: 'Sleek, enigmatic, and impeccably detailed. Tailored from a breathable cotton blend in deep matte black. Features fine tonal thread embroidery tracing the band collar and placket for quiet evening distinction.',
    fabric: 'Cotton blend',
    includes: 'Kurta only',
    fit: 'Tailored Straight Fit',
    colors: [
      { name: 'Matte Black', hex: '#1A1A1A', image: '/images/products/onyx-evening-kurta.webp' }
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    images: [
      '/images/products/onyx-evening-kurta.webp',
      '/images/products/onyx-evening-kurta-detail.webp'
    ],
    tags: ['occasion-wear', 'new-in'],
    details: [
      'Fine tonal embroidery along collar and placket',
      'Hidden stitch placket closure',
      'Straight hem with side vent gussets',
      'Two concealed in-seam pockets'
    ],
    careInstructions: [
      'Machine wash gentle cycle in cold water',
      'Do not bleach; wash dark colors separately',
      'Medium heat iron inside out'
    ],
    inStock: true
  },
  {
    id: 'alq-010',
    slug: 'mocha-tailored-waistcoat',
    name: 'Mocha Tailored Waistcoat',
    category: 'waistcoats',
    price: 9500,
    shortDescription: 'Warm brown with a V-neck, five-button front, and three welt pockets.',
    description: 'Warm earth tones tailored to perfection. Cut from a textured suiting blend in rich mocha brown. Features a classic tailored V-neck front, five-button closure, and three functional welt pockets.',
    fabric: 'Textured suiting blend',
    includes: 'Waistcoat only',
    fit: 'Tailored Sartorial Cut',
    colors: [
      { name: 'Warm Mocha Brown', hex: '#5C4535', image: '/images/products/mocha-tailored-waistcoat.webp' }
    ],
    sizes: ['38 (S)', '40 (M)', '42 (L)', '44 (XL)'],
    images: [
      '/images/products/mocha-tailored-waistcoat.webp',
      '/images/products/mocha-tailored-waistcoat-detail.webp'
    ],
    tags: ['occasion-wear', 'new-in'],
    details: [
      'Classic sartorial V-neck styling',
      'Five-button front fastening',
      'Three exterior welt pockets and one interior chest pocket',
      'Back adjustment buckle for custom taper'
    ],
    careInstructions: [
      'Professional dry clean only',
      'Steam press to maintain tailored silhouette',
      'Hanger storage in breathable suit cover'
    ],
    inStock: true
  },
  {
    id: 'alq-011',
    slug: 'giza-cotton-unstitched-fabric',
    name: 'Giza Cotton Unstitched Fabric',
    category: 'unstitched',
    price: 6800,
    compareAtPrice: 7800,
    shortDescription: 'Premium 4.5 meter unstitched Egyptian Giza cotton fabric for custom tailoring.',
    description: 'For gentlemen who commission bespoke tailoring. Woven from 100% genuine Egyptian Giza cotton (80s two-ply) with a silky luster and fluid drape. Generous 4.5 meter length accommodates custom kameez and full traditional shalwar.',
    fabric: '100% Egyptian Giza Cotton',
    includes: '4.5 meters unstitched fabric + presentation box + custom buttons & woven label tag',
    fit: 'Unstitched 4.5 Meter Cut (Width: 54-56 inches)',
    colors: [
      { name: 'Raw Ivory', hex: '#FAF7F0', image: '/images/unstitched/unstitch-1.webp' }
    ],
    sizes: ['4.5m Standard Cut'],
    isUnstitched: true,
    images: [
      '/images/unstitched/unstitch-1.webp'
    ],
    tags: ['unstitched', 'featured', 'new-in'],
    details: [
      'Full 4.5 meter length (54-56 inch width)',
      'High-twist Egyptian yarn for low-wrinkle recovery',
      'Includes original Al Qasim woven brand label and collar tags',
      'Set of 8 genuine mother-of-pearl engraved buttons included',
      'Packaged in signature Al Qasim rigid gift box'
    ],
    careInstructions: [
      'Soak in cold water for 2-3 hours before tailoring (pre-shrinking)',
      'Mild detergent hand wash or gentle machine cycle',
      'Press with damp cloth on cotton setting'
    ],
    inStock: true
  },
  {
    id: 'alq-012',
    slug: 'karandi-raw-silk-fabric',
    name: 'Obsidian Karandi Silk Fabric',
    category: 'unstitched',
    price: 9500,
    compareAtPrice: 11000,
    shortDescription: 'Rich textured Karandi raw silk blend 4.5m fabric for bespoke winter tailoring.',
    description: 'An iconic Pakistani winter textile. Woven with textured slub Karandi raw silk yarn, offering distinctive tactile structure and subtle warmth. Perfect for bespoke festive shalwar kameez or regal kurtas.',
    fabric: 'Karandi Raw Silk Blend',
    includes: '4.5 meters unstitched fabric + presentation box + custom buttons & woven label tag',
    fit: 'Unstitched 4.5 Meter Cut (Width: 54-56 inches)',
    colors: [
      { name: 'Obsidian Charcoal', hex: '#2B2B2B', image: '/images/unstitched/unstitch-2.webp' }
    ],
    sizes: ['4.5m Standard Cut'],
    isUnstitched: true,
    images: [
      '/images/unstitched/unstitch-2.webp'
    ],
    tags: ['unstitched', 'occasion-wear', 'featured'],
    details: [
      'Authentic handloom-feel Karandi weave',
      'Natural cross-hatch slub texture',
      'Complete with metallic Al Qasim buttons and chest embroidery crest tag',
      'Delivered in signature Al Qasim presentation sleeve'
    ],
    careInstructions: [
      'Dry clean recommended to preserve raw silk texture',
      'Do not machine wash or soak for extended periods',
      'Steam press on silk setting'
    ],
    inStock: true
  },
  {
    id: 'alq-013',
    slug: 'botanical-sage-linen-fabric',
    name: 'Botanical Sage Linen Fabric',
    category: 'unstitched',
    price: 7800,
    compareAtPrice: 8900,
    shortDescription: 'Crisp 4.5m botanical sage Irish linen unstitched fabric for bespoke styling.',
    description: 'Pure Irish linen in a soothing botanical sage hue. Offers breathable open weave texture with crisp, structured drape. Includes genuine Al Qasim signature buttons, woven brand label, and rigid presentation box.',
    fabric: '100% Irish Linen',
    includes: '4.5 meters unstitched fabric + presentation box + custom buttons & woven label tag',
    fit: 'Unstitched 4.5 Meter Cut (Width: 54-56 inches)',
    colors: [
      { name: 'Botanical Sage', hex: '#7D8872', image: '/images/unstitched/unstitch-3.webp' }
    ],
    sizes: ['4.5m Standard Cut'],
    isUnstitched: true,
    images: [
      '/images/unstitched/unstitch-3.webp'
    ],
    tags: ['unstitched', 'everyday-wear', 'new-in'],
    details: [
      '100% genuine breathable Irish linen yardage',
      'Natural cooling properties with tactile slub texture',
      'Includes original Al Qasim woven brand label and collar tags',
      'Set of engraved tonal buttons included',
      'Packaged in signature Al Qasim rigid gift box'
    ],
    careInstructions: [
      'Gentle cold hand wash or machine delicate cycle',
      'Warm iron while slightly damp for crisp finish',
      'Dry in shade away from direct sunlight'
    ],
    inStock: true
  }
];

export const CATEGORIES = [
  { slug: 'all', name: 'All Pieces', count: PRODUCTS.length },
  { slug: 'shalwar-kameez', name: 'Shalwar Kameez', count: PRODUCTS.filter(p => p.category === 'shalwar-kameez').length },
  { slug: 'kurtas', name: 'Kurtas', count: PRODUCTS.filter(p => p.category === 'kurtas').length },
  { slug: 'waistcoats', name: 'Waistcoats', count: PRODUCTS.filter(p => p.category === 'waistcoats').length },
  { slug: 'unstitched', name: 'Unstitched Fabric', count: PRODUCTS.filter(p => p.category === 'unstitched').length }
];

export const CATEGORIES_DATA = CATEGORIES;
