export const brand = {
  name: "GleamCo",
  shortName: "Gleam",
  tagline: "Home Services",
  fullName: "GleamCo Home Services",
  location: "Edmonton, Alberta",
  phoneDisplay: "+1-780-977-6822",
  emailDisplay: "gleampayments@gmail.com",
  hours: "Monday - Sunday · 8:00 AM - 6:00 PM",
};

export const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Our Process" },
  { href: "#why-us", label: "Why Choose Us" },
  { href: "#reviews", label: "Reviews" },
  { href: "#areas", label: "Service Areas" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
] as const;

export const trustBadges = [
  "Fully Insured",
  "100% Satisfaction Guarantee",
  "Local Edmonton Business",
] as const;

/** Free commercial use - Unsplash (hero) + Pexels (services/process) */
export const images = {
  // KEEP: existing hero (user-approved)
  hero: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
  // Water-fed pole cleaning a modern home exterior (local)
  windows: "/images/waterfed-pole.jpg",
  // Eavestrough clogged with fallen autumn leaves (before clean)
  gutters:
    "https://images.unsplash.com/photo-1665442348932-6e16d72fe163?auto=format&fit=crop&w=2000&q=85",
  // Suburban home with freshly wet driveway (pressure washing)
  pressure:
    "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=2000&dpr=2",
  // House exterior with Christmas lights installed at night
  lights:
    "https://images.unsplash.com/photo-1664289340914-e88538627c02?auto=format&fit=crop&w=2000&q=85",
  // Gutter guards installed on a residential eavestrough (local HD)
  gutterGuard: "/images/gutter-guard.jpg",
  // Clean residential vinyl siding (local HD)
  vinylSiding: "/images/vinyl-siding.jpg",
  // Water-fed pole on a home exterior - no faces, no logos (local)
  process: "/images/process-windows.jpg",
} as const;

export const services = [
  {
    id: "windows",
    title: "Exterior & Interior Window Cleaning",
    description:
      "Streak-free glass cleaning using advanced pure-water deionization technology.",
    details: [
      "We clean all the glass, sills, and frames-not just the panes.",
      "Extendable water-fed poles with soft nylon brushes are gentle on glass and window finishes.",
      "Specialized pure-water system dries completely spotless with no mineral marks.",
      "Safe reach for high, hard-to-access windows without damaging landscaping.",
    ],
    icon: "sparkles" as const,
    image: images.windows,
  },
  {
    id: "gutters",
    title: "Eavestroughs Cleaning & Front Scrubbing",
    description:
      "Complete gutter system maintenance to protect your home from water damage.",
    details: [
      "Full removal of leaves, pine needles, and debris.",
      "Downspout flushing to ensure proper drainage.",
      "Front eave & fascia hand-scrubbing to restore curb appeal.",
    ],
    icon: "droplets" as const,
    image: images.gutters,
  },
  {
    id: "gutter-guard",
    title: "Gutter Guard Installation",
    description:
      "Keep leaves and debris out of your eavestroughs with professionally fitted gutter guards.",
    details: [
      "Durable mesh guards that block leaves, pine needles, and debris.",
      "Reduces clogs, overflow, and the need for frequent cleaning.",
      "Custom-fit to your existing eavestrough and downspout system.",
    ],
    icon: "shield" as const,
    image: images.gutterGuard,
  },
  {
    id: "pressure",
    title: "Pressure Washing",
    description:
      "Deep cleaning for driveways, walkways, patios, and home exteriors.",
    details: [
      "Removes years of dirt, grime, oil stains, and mildew buildup.",
      "Safe pressure levels suited for concrete, stone, and siding.",
    ],
    icon: "spray" as const,
    image: images.pressure,
  },
  {
    id: "vinyl",
    title: "Vinyl Siding Washing",
    description:
      "Restore your home's curb appeal with a thorough vinyl siding wash.",
    details: [
      "Removes dirt, mildew, algae, and urban grime from vinyl surfaces.",
      "Soft-wash approach that cleans effectively without damaging siding.",
      "Leaves exterior walls looking fresh and well cared for.",
    ],
    icon: "home" as const,
    image: images.vinylSiding,
  },
  {
    id: "lights",
    title: "Christmas Light Installation",
    description:
      "Professional, hassle-free holiday lighting for the winter season.",
    details: [
      "Custom-fit commercial grade LED lighting.",
      "Full installation, ongoing maintenance, and post-holiday removal.",
    ],
    icon: "lightbulb" as const,
    image: images.lights,
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Assess & protect",
    description:
      "We walk the property, note access points, and protect landscaping and delicate finishes before we start.",
  },
  {
    step: "02",
    title: "Clean glass, sills & frames",
    description:
      "Every window gets a full clean-glass, sills, and frames. We don't skip the edges where dirt and pollen collect.",
  },
  {
    step: "03",
    title: "Water-fed pole with nylon brushes",
    description:
      "An extendable water-fed pole paired with soft nylon brushes gently scrubs the surface. It's kind to glass and window finishes while reaching high elevations safely from the ground.",
  },
  {
    step: "04",
    title: "Pure-water rinse & spotless dry",
    description:
      "Deionized pure water lifts dirt and minerals, then rinses clean and dries streak-free-no harsh chemicals and no mineral spotting.",
  },
] as const;

export const serviceOptions = [
  "Window Cleaning",
  "Eavestrough Cleaning",
  "Gutter Guard Installation",
  "Pressure Washing",
  "Vinyl Siding Washing",
  "Christmas Lights",
] as const;

export const pricingPlanOptions = [
  "One-time service",
  "Fall & Spring priority list (discounted pricing)",
] as const;

export const about = {
  eyebrow: "About GleamCo",
  headline: "Your partner for year-round exterior care",
  paragraphs: [
    "Unlike traditional cleaning companies, GleamCo focuses on ongoing property maintenance with convenient service plans designed to keep your home clean and protected year-round. Our team delivers reliable service, consistent quality, and hassle-free scheduling so you never have to worry about exterior upkeep again.",
    "Whether you need a one-time service or ongoing maintenance, GleamCo is your go-to partner for keeping your property looking its best.",
  ],
} as const;

export const whyChooseUs = [
  {
    title: "Deionized Pure-Water System",
    description:
      "Spotless, streak-free window finish without harsh chemicals.",
    icon: "droplets" as const,
  },
  {
    title: "Gentle on your windows",
    description:
      "Extendable water-fed poles with nylon brushes clean thoroughly while staying soft on glass, frames, and finishes.",
    icon: "heart" as const,
  },
  {
    title: "100% Satisfaction Guarantee",
    description:
      "If you aren't completely satisfied with our work, we will make it right.",
    icon: "shield" as const,
  },
  {
    title: "Transparent Pricing",
    description: "No hidden fees or surprise costs.",
    icon: "badge" as const,
  },
] as const;

export const serviceAreas = {
  hub: "Edmonton, Alberta",
  surrounding: [
    "St. Albert",
    "Sherwood Park",
    "Leduc",
    "Spruce Grove",
    "Stony Plain",
    "Beaumont",
  ],
} as const;

export const reviewsSummary = {
  rating: 5.0,
  source: "Google",
  url: "https://share.google/tIYTLH7ZNKYNNLqER",
} as const;

/** Customer reviews from GleamCo. Google Business Profile */
export const testimonials = [
  {
    name: "Jennifer Green",
    rating: 5,
    text: "Great price. We're very satisfied with GleamCo's window service. The technicians were extremely polite and willing to go the extra mile. I even received a lesson on how to clean organic matter from our siding and sills myself, when I asked the technician about it. I recommend being home during the service so you can give feedback, because to be fair, the technicians can't see what you see from inside the house. I will recommend GleamCo to family and friends.",
  },
  {
    name: "John Traish",
    rating: 5,
    text: "Had some mold growth on north side of my vinyl siding. I saw my neighbour getting theirs cleaned and asked for a quote for mine. Reasonable price and a proper clean of my whole house. Really like supporting young entrepreneurs and would recommend these guys to anyone",
  },
  {
    name: "Ian Mackenzie",
    rating: 5,
    text: "",
  },
  {
    name: "Sandeep Agrawal",
    rating: 5,
    text: "Awesome people. Hassle-free service. Help the young folks!",
  },
  {
    name: "Julianne Isaac Simmonds",
    rating: 5,
    text: "This is our 2nd year working with the team and they do a really good job.",
  },
  {
    name: "Gail M",
    rating: 5,
    text: "Excellent service and quality. I entirely recommend GleamCo.",
  },
  {
    name: "Joe Deutscher",
    rating: 5,
    text: "I recently had my eavestroughs cleaned along with the windows of my home. GleamCo's technician Elvir was very professional; respected that my dogs needed to be kept secure in the home; and he was clearly respectful of my property and his personal safety. Polite and courteous behaviour will always be appreciated by customers like myself.",
  },
  {
    name: "Tricia Johnston",
    rating: 5,
    text: "Fantastic service, excellent communication and gleaming windows and gutters. Highly recommend GleamCo, Isaaac, Elvir and the team!",
  },
] as const;

export const faqs = [
  {
    question: "What exactly do you clean on each window?",
    answer:
      "We clean all the glass, sills, and frames-not just the centre of the pane. Tracks and edges get attention too, so the whole window looks finished.",
  },
  {
    question: "How do you reach high windows safely?",
    answer:
      "We use extendable water-fed poles with soft nylon brushes. That lets us reach high and hard-to-access windows from the ground-gentle on the glass and safer than unnecessary ladder work where the pole system is suitable.",
  },
  {
    question: "Are nylon brushes safe for my windows?",
    answer:
      "Yes. Our nylon brushes are designed to scrub away dirt without scratching glass or being harsh on window finishes. Paired with pure water, they leave a clean, streak-free result.",
  },
  {
    question: "How does your pure-water window cleaning work?",
    answer:
      "We use a deionized pure-water system that lifts dirt and minerals from the glass, then rinses and dries spotless-no streaks, no mineral marks, and no harsh chemicals.",
  },
  {
    question: "Do you only clean the exterior?",
    answer:
      "We offer both exterior and interior window cleaning. When you request a quote, tell us which sides you need and we'll tailor the visit.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We're based in Edmonton and also serve St. Albert, Sherwood Park, Leduc, Spruce Grove, Stony Plain, and Beaumont.",
  },
  {
    question: "Are you insured?",
    answer:
      "Yes. GleamCo is fully insured, and we take care around delicate roofing, custom gutters, and landscaping on every job.",
  },
  {
    question: "What if I'm not satisfied with the results?",
    answer:
      "We stand behind a 100% satisfaction guarantee. If something isn't right, we'll come back and make it right.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Fill out the free quote form with your address and the services you need, or call/text us during our Monday - Sunday hours (8:00 AM - 6:00 PM).",
  },
] as const;
