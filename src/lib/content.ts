// ─── Hero ──────────────────────────────────────────────────────────────────
export const HERO = {
  headline1:         "Premium websites",
  headline2:         "voor",
  headlineHighlight: "Nederlandse bedrijven",
  headline3:         "die opvallen.",
  sub:               "Gleric Studio bouwt snelle, moderne en conversiegerichte websites voor ambitieuze Nederlandse bedrijven. Vaste prijs. Geen verrassingen.",
  bullets: [
    "Vanaf €699 — vaste prijs",
    "Oplevering in 2 – 5 weken",
    "Mobile-first & razendsnel",
    "Zelf bewerkbaar (optioneel)",
  ],
  cta1: "Start jouw website",
  cta2: "Zo werken we",
};

// ─── Trust pills ───────────────────────────────────────────────────────────
export const TRUST_PILLS = [
  { text: "Vaste, transparante prijs",          color: "var(--c-amber)" },
  { text: "Oplevering in 2 – 5 weken",          color: "var(--c-blue)"  },
  { text: "Mobile-first & Core Web Vitals",     color: "var(--c-sage)"  },
  { text: "100% Nederlandstalige communicatie", color: "var(--c-rose)"  },
  { text: "Persoonlijk contact — altijd",       color: "var(--c-amber)" },
  { text: "SEO-klaar uit de doos",              color: "var(--c-blue)"  },
  { text: "Zelf bewerkbaar via CMS",            color: "var(--c-sage)"  },
];

// ─── Services ──────────────────────────────────────────────────────────────
export interface Service {
  idx:      string;
  name:     string;
  tier:     "amber" | "blue" | "sage";
  timeline: string;
  price:    string;
  featured: boolean;
  badge:    string | null;
  included: string[];
}

export const SERVICES: Service[] = [
  {
    idx:      "01",
    name:     "Starter",
    tier:     "amber",
    timeline: "4 – 5 dagen",
    price:    "Vanaf €699",
    featured: false,
    badge:    null,
    included: [
      "Tot 5 pagina's",
      "Responsief ontwerp",
      "Contactformulier",
      "Basis-SEO setup",
      "Google Analytics",
      "1 revisieronde",
    ],
  },
  {
    idx:      "02",
    name:     "Business",
    tier:     "blue",
    timeline: "3 – 5 weken",
    price:    "Vanaf €1.500",
    featured: true,
    badge:    "Meest gekozen",
    included: [
      "Tot 12 pagina's",
      "Maatwerk design",
      "CMS (zelf bewerken)",
      "Uitgebreide SEO",
      "Conversie-optimalisatie",
      "2 revisierondes",
      "3 maanden Care+ gratis",
    ],
  },
  {
    idx:      "03",
    name:     "Premium",
    tier:     "sage",
    timeline: "5 – 8 weken",
    price:    "Prijs op aanvraag",
    featured: false,
    badge:    null,
    included: [
      "Onbeperkt pagina's",
      "Volledig maatwerk",
      "Headless CMS / API",
      "Geavanceerde animaties",
      "Performance-audit",
      "Meerdere revisierondes",
      "6 maanden Care+ gratis",
    ],
  },
];

// ─── Industries ────────────────────────────────────────────────────────────
export const INDUSTRIES = [
  { icon: "👗", label: "Mode & Retail",        sub: "Webshops & lookbooks",       color: "var(--c-rose)"  },
  { icon: "🚗", label: "Automotive",           sub: "Dealers & lease",             color: "var(--c-blue)"  },
  { icon: "🏠", label: "Vastgoed",             sub: "Makelaars & ontwikkelaars",   color: "var(--c-amber)" },
  { icon: "💪", label: "Health & Fitness",     sub: "Studios & coaches",           color: "var(--c-sage)"  },
  { icon: "🍽️", label: "Horeca",               sub: "Restaurants & hotels",        color: "var(--c-rose)"  },
  { icon: "⚖️", label: "Juridisch & Finance",  sub: "Kantoren & adviseurs",        color: "var(--c-blue)"  },
  { icon: "🏗️", label: "Bouw & Ambacht",       sub: "Aannemers & installateurs",   color: "var(--c-amber)" },
  { icon: "🎓", label: "Onderwijs & Coaching", sub: "Trainers & instituten",       color: "var(--c-sage)"  },
];

// ─── Process ───────────────────────────────────────────────────────────────
export interface ProcessStep {
  n:        string;
  title:    string;
  color:    string;
  desc:     string;
  duration: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    n:        "01",
    title:    "Intake",
    color:    "var(--c-blue)",
    desc:     "We bespreken jouw doelen, doelgroep en wensen in een gratis kennismaking. Geen verplichtingen.",
    duration: "30 – 60 min",
  },
  {
    n:        "02",
    title:    "Design",
    color:    "var(--c-amber)",
    desc:     "We ontwerpen een uniek design op maat. Jij geeft feedback, wij verfijnen tot het perfect is.",
    duration: "3 – 5 dagen",
  },
  {
    n:        "03",
    title:    "Build",
    color:    "var(--c-sage)",
    desc:     "We bouwen jouw website met moderne technologie. Razendsnel, veilig en toekomstbestendig.",
    duration: "1 – 4 weken",
  },
  {
    n:        "04",
    title:    "Lancering",
    color:    "var(--c-rose)",
    desc:     "We lanceren jouw website, zorgen voor de technische setup en staan klaar voor nazorg.",
    duration: "1 – 2 dagen",
  },
];

// ─── Care+ ─────────────────────────────────────────────────────────────────
export const CAREPLUS = {
  eyebrow:  "Care+",
  title:    "Wij houden jouw website gezond",
  sub:      "Na de lancering verdient jouw website aandacht. Met Care+ zorgen Ricardo en Glen voor updates, beveiliging en ondersteuning — zodat jij je kunt focussen op je bedrijf.",
  cta:      "Meer over Care+",
  features: [
    "Maandelijkse CMS- & plugin-updates",
    "Uptime monitoring 24/7",
    "Snelheidsoptimalisatie",
    "SSL & beveiliging",
    "1 uur aanpassingen per maand",
    "Prioriteit support via WhatsApp",
  ],
};

// ─── Showcase ──────────────────────────────────────────────────────────────
export interface ShowcaseItem {
  name:   string;
  sector: string;
  desc:   string;
  bg:     string;
  accent: string;
  href?:  string;
}

export const SHOWCASE: ShowcaseItem[] = [
  {
    name:   "Vestique",
    sector: "Mode & Retail",
    desc:   "Premium fashion webshop met lookbook-editor en realtime voorraad.",
    bg:     "oklch(0.22 0.05 30)",
    accent: "var(--c-rose)",
  },
  {
    name:   "AutoElite NL",
    sector: "Automotive",
    desc:   "Occasion-platform met AI-zoekfilter en financieringsmodule.",
    bg:     "oklch(0.20 0.06 245)",
    accent: "var(--c-blue)",
  },
  {
    name:   "De Lokale Kapper",
    sector: "Health & Lifestyle",
    desc:   "Boekingssite met online agenda, cadeaubonnen en Google Reviews.",
    bg:     "oklch(0.21 0.05 155)",
    accent: "var(--c-sage)",
  },
];

// ─── Contact ───────────────────────────────────────────────────────────────
export const CONTACT_INFO = {
  studio:    "Nederland\nRemote-first",
  response:  "Binnen 1 werkdag\nMa – Vr",
  werkgebied:"Heel Nederland\n& EU op aanvraag",
  languages: "Nederlands\nEnglish\nEspañol",
  email:     "info@glericstudio.nl",
};

export const CONTACT_OPTIONS = [
  "Starter",
  "Business",
  "Premium",
  "Redesign",
  "Alleen Care+",
  "Anders",
];
