/**
 * Central content model for the Propertiva landing page.
 * Copy & data extracted verbatim from the original Framer site CMS.
 */

const base = '/assets'
export const img = (n: string) => `${base}/img/${n}`
export const svg = (n: string) => `${base}/svg/${n}`

export const nav = {
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Properties', href: '#properties' },
    { label: 'Blog', href: '#blog' },
  ],
  cta: { label: 'Contact Us', href: '#contact' },
}

export const hero = {
  badge: { index: '#01', text: 'Real Estate Agency' },
  title: ['Building dreams,', 'one home at a time'],
  subtitle:
    'We connect people with their perfect homes through professional support & expertise.',
  primary: { label: 'Explore properties', href: '#properties' },
  secondary: { label: 'Our services', href: '#services' },
  wordmark: 'Propertiva',
  image: img('hero-building.jpg'),
}

export const trust = {
  rating: '4.9/5',
  ratingLabel: 'rating',
  trustedBy: 'Trusted by 1k+ businesses',
  avatars: [
    img('avatar-1.png'),
    img('avatar-2.png'),
    img('avatar-3.png'),
    img('avatar-4.png'),
    img('avatar-5.png'),
  ],
  logos: [
    svg('trust-logo-1.svg'),
    svg('trust-logo-2.svg'),
    svg('trust-logo-3.svg'),
    svg('trust-logo-4.svg'),
    svg('trust-logo-5.svg'),
  ],
}

export const about = {
  eyebrow: 'About us',
  heading:
    'Trusted-driven properties built through bold vision, expert strategy, and genuine attention to detail',
  primary: { label: "Let's connect", href: '#contact' },
  secondary: { label: 'Watch video', href: '#video' },
  images: [
    img('about-1.png'),
    img('about-2.png'),
    img('about-3.png'),
    img('about-4.png'),
  ],
}

export const stats = [
  { value: '99%', label: 'Client Satisfaction' },
  { value: '150+', label: 'Properties Listed' },
  { value: '08+', label: 'Years of Expertise' },
  { value: '100+', label: 'Cities Covered' },
]

export type Property = {
  badge: 'For Sale' | 'Investment'
  name: string
  location: string
  price: string
  image: string
  specs: { area: string; bedrooms: string; bathrooms: string; floors: string; parking: string; balconies: string }
}

export const properties: Property[] = [
  {
    badge: 'For Sale',
    name: 'Sunrise Domain',
    location: 'Illinois Central',
    price: '$150,000',
    image: img('prop-sunrise.jpg'),
    specs: { area: '1700 sq/ft', bedrooms: '04', bathrooms: '02', floors: '03', parking: '02', balconies: '03' },
  },
  {
    badge: 'Investment',
    name: 'Pine Havenly',
    location: 'Tennessee Grove',
    price: '$650,000',
    image: img('prop-pine.png'),
    specs: { area: '1100 sq/ft', bedrooms: '03', bathrooms: '02', floors: '02', parking: '02', balconies: '02' },
  },
  {
    badge: 'For Sale',
    name: 'Maple Sanctuary',
    location: 'Texas Hills',
    price: '$240,000',
    image: img('prop-maple.jpg'),
    specs: { area: '1200 sq/ft', bedrooms: '03', bathrooms: '02', floors: '02', parking: '02', balconies: '04' },
  },
  {
    badge: 'Investment',
    name: 'Luna Heightside',
    location: 'California Ridge',
    price: '$670,000',
    image: img('prop-luna.jpg'),
    specs: { area: '1100 sq/ft', bedrooms: '03', bathrooms: '02', floors: '03', parking: '02', balconies: '03' },
  },
  {
    badge: 'For Sale',
    name: 'Palm Eternity',
    location: 'Florida Bayfront',
    price: '$170,000',
    image: img('prop-palm.png'),
    specs: { area: '1900 sq/ft', bedrooms: '02', bathrooms: '02', floors: '03', parking: '02', balconies: '02' },
  },
]

export const services = {
  eyebrow: 'Our Services',
  heading: 'Complete support for property owners',
  items: [
    { n: '01', title: 'Property Sales', image: img('service-sales.jpg'), caption: 'Helping clients sell properties faster with strategic pricing marketing and expert negotiation' },
    { n: '02', title: 'Property Purchase', image: img('prop-sunrise.jpg'), caption: 'Guiding buyers to the right home with tailored search, viewings and confident decision making' },
    { n: '03', title: 'Property Leasing', image: img('prop-maple.jpg'), caption: 'Connecting owners and tenants through smooth leasing, agreements and reliable coordination' },
    { n: '04', title: 'Investment Advisory', image: img('prop-luna.jpg'), caption: 'Advising investors with market analysis, returns forecasting and curated property opportunities' },
    { n: '05', title: 'Market Analysis', image: img('blog-3.png'), caption: 'Delivering accurate market data, pricing trends and local insights for informed property decisions' },
    { n: '06', title: 'Property Management', image: img('gallery-6.png'), caption: 'Managing maintenance, rent collection and tenants with dependable end-to-end operational support' },
    { n: '07', title: 'Legal Assistance', image: img('t-img-laura.jpg'), caption: 'Supporting documentation compliance contracts and transactions to ensure secure property dealings' },
    { n: '08', title: 'Relocation Support', image: img('prop-palm.png'), caption: 'Easing every move with relocation planning, logistics and a smooth, stress-free transition' },
  ],
}

export const amenities = {
  eyebrow: 'Our Amenites',
  heading: "Exceptional amenities for residents' comfort",
  subtitle: 'Carefully designed facilities ensuring safety, relaxation, wellness, & daily conveniences',
  items: [
    { icon: svg('amenity-parking.svg'), title: 'Parking space', desc: 'Secure and spacious parking available for residents and visitors' },
    { icon: svg('amenity-elevator.svg'), title: 'Elevator access', desc: 'Modern elevators providing smooth access to all floors' },
    { icon: svg('amenity-children.svg'), title: "Children's play", desc: 'Safe and engaging play areas designed for children of all ages' },
    { icon: svg('amenity-internet.svg'), title: 'Speedy internet', desc: 'High speed internet connection for work entertainment & smart living' },
    { icon: svg('amenity-fire.svg'), title: 'Fire protection', desc: 'Advanced fire safety systems ensuring protection and peace' },
    { icon: svg('amenity-yoga.svg'), title: 'Yoga equipment', desc: 'Dedicated yoga equipment supporting wellness & daily fitness' },
  ],
}

export const howItWorks = {
  eyebrow: 'How it works',
  heading: 'Step-by-step real estate process for you',
  subtitle: 'Navigate each stage of property buying, selling, or leasing with our simple, step-by-step guidance.',
  primary: { label: 'Explore properties', href: '#properties' },
  secondary: { label: 'Contact us', href: '#contact' },
  steps: [
    { n: '01', title: 'Search a Property', desc: 'Explore multiple listings online carefully to identify homes that meet all your new unique needs' },
    { n: '02', title: 'Visit Property', desc: 'Attend in-person visits to evaluate spaces, features and overall lifestyle compatibility carefully' },
    { n: '03', title: 'Close Agreement', desc: 'Negotiate terms, finalize contracts, and secure your new home with confidence and peace full' },
  ],
}

export const gallery = {
  eyebrow: 'Our Gallery',
  heading: 'Property moments captured beautifully',
  subtitle: 'Explore high quality images reflecting comfort, design, location, & everyday living experience',
  images: [
    img('gallery-1.png'),
    img('gallery-2.png'),
    img('gallery-3.png'),
    img('gallery-4.png'),
    img('gallery-5.png'),
    img('gallery-6.png'),
    img('gallery-7.png'),
    img('gallery-8.png'),
    img('gallery-9.png'),
    img('gallery-10.png'),
  ],
}

export const video = {
  poster: img('video-poster.png'),
  src: `${base}/video/showcase.mp4`,
}

export type Testimonial = {
  variant: 'light' | 'image'
  quote?: string
  name: string
  role: string
  logo?: string
  avatar?: string
  image?: string
}

export const testimonials = {
  eyebrow: 'Testimonials',
  heading: 'Hear from people who trust propertiva',
  subtitle: 'Real experiences from clients sharing their journey, satisfaction, and success here',
  items: [
    {
      variant: 'light',
      quote: 'Propertiva made buying our first home simple, transparent, and stress free with expert guidance, quick responses, and trustworthy support throughout entire process.',
      name: 'Alex Morgan',
      role: 'CEO at Nestify',
      logo: svg('t-logo-1.svg'),
      avatar: img('t-avatar-alex.png'),
    },
    {
      variant: 'image',
      quote: 'Their team understood our needs, suggested ideal options, and managed negotiations professionally saving us time and stress',
      name: 'Sarah Collins',
      role: 'Property Investor',
      image: img('t-img-sarah.png'),
    },
    {
      variant: 'light',
      quote: 'Selling our property was smooth and fast thanks to accurate pricing, strong marketing, and constant communication from the Propertiva experts team always.',
      name: 'Nasir Nawaz',
      role: 'CEO at Designhaus',
      logo: svg('t-logo-2.svg'),
      avatar: img('t-avatar-nasir.jpg'),
    },
    {
      variant: 'light',
      quote: 'Their property management service is reliable, responsive, and professional, ensuring tenants are happy while owners enjoy stress free ownership with complete peace.',
      name: 'Laura Bennett',
      role: 'Property Owner',
      logo: svg('t-logo-3.svg'),
      avatar: img('avatar-3.png'),
    },
    {
      variant: 'light',
      quote: 'From consultation to closing, the team guided us clearly, answered every question, and delivered a smooth, confident buying experience for our family.',
      name: 'Ryan Parker',
      role: 'First-Time Buyer',
      logo: svg('t-logo-4.svg'),
      avatar: img('t-img-ryan.jpg'),
    },
    {
      variant: 'image',
      quote: 'Excellent service from start to finish, helping us find a rental home while handling paperwork, coordination & follow ups efficiently professionally.',
      name: 'Angline Julie',
      role: 'CEO at Realestic',
      image: img('t-img-angline.jpg'),
    },
  ] as Testimonial[],
}

export const blog = {
  eyebrow: 'Blog',
  heading: 'Property guides and market trends',
  subtitle: 'Stay informed with expert insights, market updates, and practical property guidance.',
  featured: {
    title: 'Designing the communities for the future generations',
    author: 'Nasir Nawaz',
    date: 'Jun 21, 2024',
    image: img('blog-featured.png'),
    avatar: img('t-img-laura.jpg'),
    readTime: '8 min read',
  },
  side: [
    { title: 'Future of urban real estate & sustainable community growth', image: img('blog-2.png'), readTime: '8 min read' },
    { title: 'Greener spaces and the rise of eco cities worldwide', image: img('blog-3.png'), readTime: '9 min read' },
  ],
}

export const faq = {
  eyebrow: "FAQ's",
  heading: 'Need answers about properties?',
  subtitle: 'Helpful responses covering buying, selling, renting, investing, and property management essentials',
  cta: { label: 'Contact Agents', href: '#contact' },
  items: [
    { q: 'Do you help with rentals?', a: 'Yes, we assist with rentals by managing listings, viewings, agreements, and tenant coordination.' },
    { q: 'Is property valuation accurate?', a: 'Our valuations use market data, trends, and local insights to provide reliable pricing guidance.' },
    { q: 'Do you support investors?', a: 'We offer expert investment advice, market analysis, and property recommendations for better returns.' },
    { q: 'How long does buying take?', a: 'The buying process varies, but our guidance helps streamline steps and reduce delays significantly.' },
    { q: 'Are legal services included?', a: 'Yes, we assist with documentation, contracts, and compliance for secure transactions.' },
    { q: 'Can you manage properties?', a: 'Our property management covers maintenance, rent collection, tenants, and ongoing operational support.' },
  ],
}

export const cta = {
  badge: 'Get started',
  title: "Let's make your property move easy",
  subtitle: 'Contact us today and experience a smooth, stress-free real estate process today.',
  primary: { label: 'About propertica', href: '#about' },
  secondary: { label: 'Contact us', href: '#contact' },
  image: img('cta-building.png'),
}

export const footer = {
  description: 'A high-converting template designed for real estate success and property growth.',
  cta: { label: 'Contact propertica', href: '#contact' },
  columns: [
    {
      title: 'Links',
      links: ['About', 'Services', 'Properties', 'Blog', 'Contact', '404'],
    },
    {
      title: 'Socials',
      links: ['Instagram', 'Twitter', 'Linkedin', 'Dribbble'],
    },
  ],
  otherInfo: {
    title: 'Other info:',
    items: [
      { icon: svg('icon-mail.svg'), text: 'test@gmail.com' },
      { icon: svg('icon-phone.svg'), text: '+123 456 000' },
      { icon: svg('icon-location.svg'), text: 'California, USA' },
    ],
  },
  copyright: 'Copyright@2025',
  builtIn: 'Built in framer',
  templateBy: 'Nasir Nawaz',
}
