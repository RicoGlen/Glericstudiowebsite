export const NAV_ITEMS = [
  { label: "Werk",     href: "#showcase" },
  { label: "Diensten", href: "#services"  },
  { label: "Proces",   href: "#process"   },
  { label: "Care+",    href: "#careplus"  },
  { label: "Contact",  href: "#contact"   },
] as const;

export const HERO = {
  meta: "Nieuwe projecten · beschikbaar Q3 / Q4 2026",
  metaRight: "Webstudio uit Nederland",
  headline1: "Premium websites",
  headline2: "voor Nederlandse bedrijven die",
  headline3: "opvallen.",
  sub: "Gleric Studio bouwt snelle, moderne en conversiegerichte websites voor kleine en middelgrote bedrijven. In-house ontworpen, op tijd opgeleverd, en gebouwd om klanten op te leveren.",
  cta1: "Start jouw website",
  cta2: "Bekijk onze aanpak",
  cornerTL1: "52.37° N  ·  4.90° E",
  cornerTL2: "Nederland",
  cornerTR1: "EST · MMXXV",
  cornerTR2: "Gleric Studio",
} as const;

export const TRUST_ITEMS = [
  { icon: "sparkles",   label: "AI-ondersteunde ontwikkeling" },
  { icon: "zap",        label: "Moderne frontend-stack"       },
  { icon: "smartphone", label: "Mobile-first design"          },
  { icon: "search",     label: "SEO-klare structuur"          },
  { icon: "rocket",     label: "Snelle oplevering"            },
  { icon: "git-branch", label: "Vercel & GitHub deploys"      },
  { icon: "shield",     label: "Optionele maandelijkse Care+" },
] as const;

export const TRUST_HEADING = {
  eyebrow: "Positionering · 001",
  h2a: "Een eerlijke studio-aanpak.",
  h2b: "Geen nepcijfers, geen templatewerk, geen agency-theater. Alleen websites die ook echt live gaan.",
} as const;

export const SERVICES = [
  {
    idx: "01",
    name: "Starter Website",
    best: "Kleine bedrijven die een verzorgde, geloofwaardige online uitstraling nodig hebben.",
    included: [
      "Tot 5 essentiële pagina's",
      "Custom one-page of multi-page design",
      "Mobile-first responsive build",
      "Basis SEO + Google Search Console",
      "Contactformulier & WhatsApp-integratie",
    ],
    timeline: "2 – 3 weken",
    price: "Vanaf €1.950",
    featured: false,
    badge: null,
  },
  {
    idx: "02",
    name: "Business Website",
    best: "Bedrijven die structuur, dienstenpagina's en duidelijke conversie nodig hebben.",
    included: [
      "Tot 10 pagina's incl. detailpagina's",
      "Custom design system + UI-componenten",
      "Performance-budget (Lighthouse 95+)",
      "SEO-basis, sitemap, structured data",
      "Analytics + lead-tracking dashboard",
    ],
    timeline: "3 – 5 weken",
    price: "Vanaf €3.450",
    featured: true,
    badge: "Meest gekozen",
  },
  {
    idx: "03",
    name: "Premium + Care+",
    best: "Bedrijven die een flagship-website willen met blijvende support en polish.",
    included: [
      "Volledig custom, geen template-patronen",
      "Animatie, beweging, micro-interacties",
      "CMS voor bewerkbare content (optioneel)",
      "Care+-onderhoud 6 maanden inbegrepen",
      "Conversie-review na 3 maanden",
    ],
    timeline: "5 – 8 weken",
    price: "Prijs op aanvraag",
    featured: false,
    badge: null,
  },
] as const;

export const INDUSTRIES = [
  { icon: "shirt",    name: "Kleding & retail",       hint: "Boetieks, lookbooks, drops"              },
  { icon: "sparkle",  name: "Car detailing & auto",    hint: "Detailers, garages, dealers"             },
  { icon: "utensils", name: "Restaurants & cafés",     hint: "Menukaarten, reserveringen, brand sites" },
  { icon: "hammer",   name: "Aannemers & vakmensen",   hint: "Bouw, installatie, afwerking"            },
  { icon: "scissors", name: "Kappers & beauty",        hint: "Salons, studio's, boekingsflows"         },
  { icon: "store",    name: "Lokale dienstverleners",  hint: "Schoonmakers, verhuizers, specialisten"  },
  { icon: "car",      name: "Auto & dealers",          hint: "Showrooms, listings, lead-capture"       },
  { icon: "globe",    name: "Iets anders op maat",     hint: "Vertel ons wat je bouwt"                 },
] as const;

export const PROCESS_STEPS = [
  {
    n: "01",
    title: "Intake",
    body: "We starten met een gericht gesprek om je bedrijf, doelen, concurrenten en wat er nu niet werkt op je huidige site goed te begrijpen. Geen vage briefings — we gaan weg met een heldere scope.",
    deliverables: ["Discovery-call (45–60 min)", "Doelen + randvoorwaarden document", "Scope & vaste offerte"],
  },
  {
    n: "02",
    title: "Designrichting",
    body: "We vertalen je merk naar een high-fidelity designrichting. Één of twee routes, in context gepresenteerd, met echte copy en echte layouts. We itereren tot je er trots op bent.",
    deliverables: ["1–2 visuele richtingen", "High-fidelity desktop & mobile", "Component- & typografiesysteem"],
  },
  {
    n: "03",
    title: "Build",
    body: "We bouwen in een moderne, snelle frontend-stack met AI-ondersteunde tooling — daardoor blijft er meer tijd over voor wat er écht toe doet: motion, polish, copy, performance. Deploys via Vercel & GitHub.",
    deliverables: ["Performance-budget (Lighthouse 95+)", "Staging-omgeving", "Pre-launch QA checklist"],
  },
  {
    n: "04",
    title: "Lancering & Support",
    body: "We zetten de site live, dragen domein & analytics over, en lopen samen door hoe je content bewerkt. Daarna kun je zelfstandig verder — of op Care+ blijven voor maandelijkse updates en rust in je hoofd.",
    deliverables: ["DNS, hosting & SSL setup", "Editor-overdracht sessie", "30-dagen post-launch venster"],
  },
] as const;

export const CARE_PLUS_ITEMS = [
  { t: "Maandelijkse content-edits",   d: "Kleine tekst- en foto-updates binnen enkele werkdagen." },
  { t: "Technische checks",            d: "Uptime, broken links, SSL, performance & toegankelijkheid." },
  { t: "Performance-monitoring",       d: "Core Web Vitals, paginasnelheid en Lighthouse maandelijks gecontroleerd." },
  { t: "Deployment-ondersteuning",     d: "Wij regelen Vercel deploys, DNS en rollback als er iets misgaat." },
  { t: "Voorrang in support",          d: "Care+-klanten staan vooraan. We reageren binnen één werkdag." },
  { t: "Transparante scope",           d: "Groter werk (nieuwe pagina's, features, redesigns) wordt apart geoffreerd — nooit stiekem." },
] as const;

export const CONTACT_INFO = {
  eyebrow: "Contact · 007",
  headline: "Plan een kennismaking.",
  email: "info@glericstudio.nl",
  studio: "Nederland\nRemote-first, EU-breed",
  response: "Binnen 1 werkdag\nMa – Vr",
  availability: "Q3 / Q4 2026\nNieuwe projecten welkom",
  languages: "Nederlands · English",
} as const;

export const CONTACT_OPTIONS = [
  "Starter Website",
  "Business Website",
  "Premium + Care+",
  "Redesign",
  "Alleen Care+",
  "Anders",
] as const;
