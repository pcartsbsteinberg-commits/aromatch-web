# Proyecto: Aura de Kant

**Producción:** [https://aromatch-web.vercel.app](https://aromatch-web.vercel.app)

## Estructura del Proyecto (tree)
```text
├── .gitignore
├── CONTE_PROYECTO_AURA.md
├── eslint.config.mjs
├── export-context.js
├── export_claude.ps1
├── next-env.d.ts
├── next.config.ts
├── optimize-video.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── process-decant.mjs
├── README.md
├── rules.md
├── src
│   ├── app
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── sitemap.ts
│   ├── components
│   │   ├── aromatch-app.tsx
│   │   ├── decant-showcase.tsx
│   │   ├── education-section.tsx
│   │   ├── footer-section.tsx
│   │   ├── hero-section.tsx
│   │   ├── navigation.tsx
│   │   ├── prestige-showcase.tsx
│   │   ├── products-section.tsx
│   │   ├── theme-provider.tsx
│   │   └── ui
│   │       ├── accordion.tsx
│   │       ├── alert-dialog.tsx
│   │       ├── alert.tsx
│   │       ├── aspect-ratio.tsx
│   │       ├── avatar.tsx
│   │       ├── badge.tsx
│   │       ├── breadcrumb.tsx
│   │       ├── button-group.tsx
│   │       ├── button.tsx
│   │       ├── calendar.tsx
│   │       ├── card.tsx
│   │       ├── carousel.tsx
│   │       ├── chart.tsx
│   │       ├── checkbox.tsx
│   │       ├── collapsible.tsx
│   │       ├── command.tsx
│   │       ├── context-menu.tsx
│   │       ├── dialog.tsx
│   │       ├── drawer.tsx
│   │       ├── dropdown-menu.tsx
│   │       ├── empty.tsx
│   │       ├── field.tsx
│   │       ├── form.tsx
│   │       ├── hover-card.tsx
│   │       ├── input-group.tsx
│   │       ├── input-otp.tsx
│   │       ├── input.tsx
│   │       ├── item.tsx
│   │       ├── kbd.tsx
│   │       ├── label.tsx
│   │       ├── menubar.tsx
│   │       ├── navigation-menu.tsx
│   │       ├── pagination.tsx
│   │       ├── popover.tsx
│   │       ├── progress.tsx
│   │       ├── radio-group.tsx
│   │       ├── resizable.tsx
│   │       ├── scroll-area.tsx
│   │       ├── select.tsx
│   │       ├── separator.tsx
│   │       ├── sheet.tsx
│   │       ├── sidebar.tsx
│   │       ├── skeleton.tsx
│   │       ├── slider.tsx
│   │       ├── sonner.tsx
│   │       ├── spinner.tsx
│   │       ├── switch.tsx
│   │       ├── table.tsx
│   │       ├── tabs.tsx
│   │       ├── textarea.tsx
│   │       ├── toast.tsx
│   │       ├── toaster.tsx
│   │       ├── toggle-group.tsx
│   │       ├── toggle.tsx
│   │       ├── tooltip.tsx
│   │       ├── use-mobile.tsx
│   │       └── use-toast.ts
│   ├── hooks
│   │   ├── use-mobile.ts
│   │   └── use-toast.ts
│   └── lib
│       ├── perfumes.ts
│       └── utils.ts
├── tsconfig.json
├── tsconfig.tsbuildinfo
└── vercel.json
```

## Archivos Clave

### package.json
```javascript
{
  "name": "aromatch-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  },
  "dependencies": {
    "@hookform/resolvers": "^5.2.2",
    "@radix-ui/react-accordion": "^1.2.12",
    "@radix-ui/react-alert-dialog": "^1.1.15",
    "@radix-ui/react-aspect-ratio": "^1.1.8",
    "@radix-ui/react-avatar": "^1.1.11",
    "@radix-ui/react-checkbox": "^1.3.3",
    "@radix-ui/react-collapsible": "^1.1.12",
    "@radix-ui/react-context-menu": "^2.2.16",
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-dropdown-menu": "^2.1.16",
    "@radix-ui/react-hover-card": "^1.1.15",
    "@radix-ui/react-label": "^2.1.8",
    "@radix-ui/react-menubar": "^1.1.16",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-popover": "^1.1.15",
    "@radix-ui/react-progress": "^1.1.8",
    "@radix-ui/react-radio-group": "^1.3.8",
    "@radix-ui/react-scroll-area": "^1.2.10",
    "@radix-ui/react-select": "^2.2.6",
    "@radix-ui/react-separator": "^1.1.8",
    "@radix-ui/react-slider": "^1.3.6",
    "@radix-ui/react-slot": "^1.2.4",
    "@radix-ui/react-switch": "^1.2.6",
    "@radix-ui/react-tabs": "^1.1.13",
    "@radix-ui/react-toast": "^1.2.15",
    "@radix-ui/react-toggle": "^1.1.10",
    "@radix-ui/react-toggle-group": "^1.1.11",
    "@radix-ui/react-tooltip": "^1.2.8",
    "@vercel/analytics": "^2.0.1",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "date-fns": "^4.1.0",
    "embla-carousel-react": "^8.6.0",
    "ffmpeg-static": "^5.3.0",
    "fluent-ffmpeg": "^2.1.3",
    "framer-motion": "^12.36.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.577.0",
    "next": "16.1.6",
    "next-themes": "^0.4.6",
    "react": "19.2.3",
    "react-day-picker": "^9.14.0",
    "react-dom": "19.2.3",
    "react-hook-form": "^7.71.2",
    "react-resizable-panels": "^4.7.2",
    "recharts": "^3.8.0",
    "sharp": "^0.34.5",
    "sonner": "^2.0.7",
    "tailwind-merge": "^3.5.0",
    "vaul": "^1.1.2",
    "zod": "^4.3.6"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "^4",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "^9",
    "eslint-config-next": "16.1.6",
    "tailwindcss": "^4",
    "tw-animate-css": "^1.4.0",
    "typescript": "^5"
  }
}

```

### next.config.ts
```javascript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

```

### tsconfig.json
```javascript
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": [
    "next-env.d.ts",
    "**/*.ts",
    "**/*.tsx",
    ".next/types/**/*.ts",
    ".next/dev/types/**/*.ts",
    "**/*.mts"
  ],
  "exclude": ["node_modules"]
}

```

### postcss.config.mjs
```javascript
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;

```

### rules.md
```javascript
# Configuración del Agente: Especialista en E-commerce de Perfumes de Lujo (AromaMatch)

## 1. Identidad y Rol
Eres el **Agente Antigravity**, un experto multidisciplinario que combina las habilidades de:
* **Diseñador Web Senior (UI/UX):** Especializado en interfaces "High-End", oscuras, minimalistas y elegantes, enfocadas en la conversión y el lujo.
* **Desarrollador Frontend Principal:** Experto en Next.js, React y Tailwind. Código limpio, semántico y profesional por capas (structure-by-layers).
* **Experto en SEO y Generación de Leads (CRO):** Enfocado en la venta de decants (perfumes fraccionados) nicho/árabes y en educar al cliente para maximizar la conversión.

## 2. Guía Visual (Dark Luxe Aesthetic)
* **Estética:** Oscura, misteriosa, lujosa y "Premium".
* **Paleta de Colores:**
    * **Fondo:** Negro profundo y grises muy oscuros (#000000, #0d0d0d).
    * **Acentos Vibrantes:** Verde Eléctrico Vibrante (para CTAs, resaltados e iconos) y acentos dorados sutiles.
    * **Texto:** Blanco puro para títulos y gris claro para descripciones.
* **Tipografía:** Playfair Display para títulos (elegancia) e Inter/Poppins para cuerpo (legibilidad).

## 3. Estructura y Capas de Conversión
Estructura la landing page completa para la venta de decants profesionalmente, detallando cada sección:

### Capa 1: Hero y Captura (Video fondoaura.mp4)
* **Visual Hero:** El visual principal es el video `fondoaura.mp4` en el fondo. Sobre la imagen, coloca la propuesta de valor principal de lujo.
* **CTA:** Un botón altamente visible que diga "Encuentra tu Match" en verde vibrante.

### Capa 2: Educación (Confianza y Autoridad)
* **Sección "Aprende":** Tarjetas educativas sobre qué es un Decant, sus beneficios y cómo detectar falsos.
* **Batch Code:** Incluye la confirmación de que con cada decant se entrega el Patch Code (Batch Code) original para tranquilidad del cliente.

### Capa 3: Catálogo (Valor y Catálogo Real)
* **Layout:** Una grilla limpia de los 16 perfumes de stock con fotos reales.
* **Visual Specs:** Asegurar que use `object-fit: cover` para que las botellas se vean profesionales y centradas.
* **Sin Precios:** Eliminar o comentar cualquier "price badge" amarillo de la grilla.
* **Disponibilidad:** Agregar el texto claro "Disponible en 5ml & 10ml" en cada tarjeta.

### Capa 4: El AroMatch Quiz (Conversión Inteligente)
* **Contexto:** Mantener y optimizar el quiz interactivo que recomienda perfumes.
* **CRO:** Asegurar que el copy de la recomendación sea persuasivo e incluya un CTA claro para adquirir el decant recomendado.

## 4. Protocolo de Eficiencia del Modelo (Pro vs. Flash)

Este protocolo es de cumplimiento obligatorio para optimizar el uso de créditos y mantener la calidad del output:

1. **USE GEMINI 3.1 PRO FOR (High Complexity):**
   - **Architecture & Logic:** Defining project structure, React state management (e.g., the Quiz logic).
   - **Advanced Animations:** Writing complex Framer Motion logic or custom CSS transitions.
   - **SEO & CRO Strategy:** High-conversion copywriting and Technical SEO schema (JSON-LD).
   - **Deep Debugging:** Troubleshooting build errors (ENOENT, build failures) or logical bugs.

2. **USE GEMINI FLASH FOR (Routine Tasks):**
   - **Boilerplate & Components:** Creating basic UI elements (Footers, Navbars, simple Buttons).
   - **CSS/Tailwind Tweaks:** Adjusting paddings, margins, colors, or basic responsive layouts.
   - **Content Expansion:** Generating FAQs, lists, or placeholder texts once the tone is set.
   - **Documentation:** Updating README files or walkthroughs.
   - **Asset Verification:** Checking file paths for images/videos.
```

## Código Fuente (src/)

### src\app\globals.css
```javascript
@import "tailwindcss";

/* ═══════════════════════════════════════════════════════════════════════════
   DESIGN TOKENS  —  AuraDecant / Dior-Versace aesthetic
   ═══════════════════════════════════════════════════════════════════════════ */
:root {
  /* Gold palette */
  --gold-bright:  #F5E1A4;
  --gold-mid:     #D4AF37;
  --gold-deep:    #A08850;
  --gold-glow:    rgba(212, 175, 55, 0.28);

  /* Typography */
  --font-display: var(--font-playfair),  'Playfair Display', Georgia, serif;
  --font-body:    var(--font-inter),     'Inter', system-ui, sans-serif;
  --font-serif:   var(--font-cormorant), 'Cormorant Garamond', Georgia, serif;

  /* Glassmorphism */
  --glass-bg:       rgba(255, 255, 255, 0.04);
  --glass-border:   rgba(255, 255, 255, 0.08);
  --glass-gold:     rgba(212, 175, 55, 0.18);

  /* Legacy compat */
  --background: #0a0a0a;
  --foreground: #ededed;
}

@theme inline {
  --color-background: var(--background);
  --color-foreground: var(--foreground);
}

/* ═══════════════════════════════════════════════════════════════════════════
   BASE RESETS
   ═══════════════════════════════════════════════════════════════════════════ */
*, *::before, *::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;
  background: #000;
}

body {
  background: transparent;
  color: var(--foreground);
  font-family: var(--font-body);
  font-weight: 300;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  letter-spacing: 0.01em;
}

section[id] {
  scroll-margin-top: 80px;
}

/* ═══════════════════════════════════════════════════════════════════════════
   TYPOGRAPHY SYSTEM
   ═══════════════════════════════════════════════════════════════════════════ */

/* Display headings — Playfair italic / regular */
.heading-display {
  font-family: var(--font-display);
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.05;
}

/* Section eyebrow labels — Inter small-caps all-caps */
.label-eyebrow {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 0.7rem;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  color: var(--gold-mid);
}

/* Body text */
.body-text {
  font-family: var(--font-body);
  font-weight: 300;
  letter-spacing: 0.02em;
  line-height: 1.7;
}

/* ═══════════════════════════════════════════════════════════════════════════
   GLASSMORPHISM UTILITIES
   ═══════════════════════════════════════════════════════════════════════════ */

.glass {
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid var(--glass-border);
}

.glass-strong {
  background: rgba(255, 255, 255, 0.07);
  backdrop-filter: blur(28px);
  -webkit-backdrop-filter: blur(28px);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.glass-gold {
  background: rgba(212, 175, 55, 0.06);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(212, 175, 55, 0.22);
}

/* ═══════════════════════════════════════════════════════════════════════════
   GOLD BUTTON SYSTEM
   ═══════════════════════════════════════════════════════════════════════════ */

.btn-gold {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 2rem;
  border-radius: 9999px;
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #000;
  background: linear-gradient(135deg, var(--gold-mid) 0%, var(--gold-bright) 60%, var(--gold-mid) 100%);
  box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
  transition: box-shadow 0.4s ease, transform 0.25s ease;
}
.btn-gold:hover {
  box-shadow: 0 0 32px rgba(212, 175, 55, 0.45);
  transform: translateY(-2px);
}
.btn-gold:active {
  transform: translateY(0);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.75rem;
  border-radius: 9999px;
  font-family: var(--font-body);
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.65);
  border: 0.5px solid rgba(212, 175, 55, 0.35);
  background: transparent;
  transition: color 0.3s ease, border-color 0.3s ease;
}
.btn-ghost:hover {
  color: #fff;
  border-color: rgba(212, 175, 55, 0.7);
}

/* ═══════════════════════════════════════════════════════════════════════════
   THIN-LINE SEPARATORS ("Versace Blueprint" dividers — 0.5px)
   ═══════════════════════════════════════════════════════════════════════════ */

.divider-gold {
  height: 0.5px;
  background: linear-gradient(90deg, transparent, var(--gold-mid), transparent);
  border: none;
  opacity: 0.4;
}

.divider-silver {
  height: 0.5px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
  border: none;
}

/* ═══════════════════════════════════════════════════════════════════════════
   GLOW EFFECTS
   ═══════════════════════════════════════════════════════════════════════════ */

.glow-gold {
  box-shadow: 0 0 30px rgba(212, 175, 55, 0.4), 0 0 60px rgba(212, 175, 55, 0.15);
}
.glow-gold-subtle {
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.2);
}

/* ═══════════════════════════════════════════════════════════════════════════
   GRADIENT TEXT UTILITY
   ═══════════════════════════════════════════════════════════════════════════ */

.text-gradient-gold {
  background: linear-gradient(135deg, #fffbe6 0%, #f4d58d 40%, #d4af37 75%, #c8a415 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ═══════════════════════════════════════════════════════════════════════════
   SCROLLBAR HIDE
   ═══════════════════════════════════════════════════════════════════════════ */
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

/* ═══════════════════════════════════════════════════════════════════════════
   SECTION SEPARATOR — 0.5px gold gradient (Elysian style)
   ═══════════════════════════════════════════════════════════════════════════ */
.section-separator {
  height: 0.5px;
  width: 100%;
  background: linear-gradient(90deg, transparent 0%, rgba(212,175,55,0.3) 40%, rgba(212,175,55,0.3) 60%, transparent 100%);
  border: none;
}

/* ═══════════════════════════════════════════════════════════════════════════
   PRESTIGE CARD — Elysian product card base + gold hover glow
   ═══════════════════════════════════════════════════════════════════════════ */
.card-prestige {
  background: #0a0800;
  border: 1px solid rgba(212,175,55,0.15);
  border-radius: 1rem;
  overflow: hidden;
  transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
              border-color 0.35s ease,
              box-shadow 0.35s ease;
}
.card-prestige:hover {
  transform: scale(1.035) translateY(-6px);
  border-color: rgba(212,175,55,0.50);
  box-shadow: 0 16px 60px rgba(212,175,55,0.20), 0 0 0 1px rgba(212,175,55,0.12);
}

/* ═══════════════════════════════════════════════════════════════════════════
   LEAD CAPTURE INPUT — gold-border input style
   ═══════════════════════════════════════════════════════════════════════════ */
.input-gold {
  width: 100%;
  padding: 1rem 1.25rem;
  border-radius: 0.75rem;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(212,175,55,0.35);
  color: #fff;
  font-family: var(--font-body);
  font-size: 0.9rem;
  letter-spacing: 0.02em;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}
.input-gold:focus {
  border-color: rgba(212,175,55,0.70);
  box-shadow: 0 0 20px rgba(212,175,55,0.18);
}
.input-gold::placeholder {
  color: rgba(255,255,255,0.25);
}

```

### src\app\layout.tsx
```javascript
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { perfumes } from '@/lib/perfumes'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AroMatch | Decants de Perfumes Árabes y Nicho Originales',
  description: 'Descubrí el lujo árabe en frascos de 5ml y 10ml. Decants 100% originales con Batch Code garantizado. Encontrá tu fragancia ideal con nuestro AroMatch Quiz.',
  keywords: 'decants perfumes árabes, fragancias nicho argentina, Lattafa decants, perfumes fraccionados',
  generator: 'Auradecant.ar',
  openGraph: {
    title: 'AroMatch - Encuentra Tu Match Olfativo',
    description: 'Decants premium de perfumes arabes y nicho. Experimenta fragancias de lujo a precios accesibles.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AroMatch",
    "url": "https://auradecant.ar",
    "logo": "https://auradecant.ar/icon.svg"
  };

  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Colección de Perfumes Decant",
    "itemListElement": perfumes.map((perfume, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Product",
        "name": perfume.name,
        "brand": {
          "@type": "Brand",
          "name": perfume.brand
        },
        "description": perfume.description,
        "category": "Perfume Decant",
        "image": `https://auradecant.ar${perfume.image}`
      }
    }))
  };

  return (
    <html lang="es" className={`${cormorant.variable} ${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
        />
      </head>
      <body className="font-sans antialiased text-white min-h-screen">
        {/* ── Global Background Video ─────────────────────────────────────────── */}
        <video
          src="/videos/fondoaura.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="fixed inset-0 w-full h-full object-cover -z-20"
        />
        {/* ── Radial Spotlight Overlay (gold centre → pure black edges) ─────── */}
        <div
          className="fixed inset-0 -z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 50% 30%, rgba(212,175,55,0.10) 0%, rgba(10,10,10,0.75) 55%, rgba(0,0,0,0.97) 100%)',
          }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  )
}

```

### src\app\page.tsx
```javascript
import Navigation from '@/components/navigation'
import HeroSection from '@/components/hero-section'
import AroMatchApp from '@/components/aromatch-app'
import EducationSection from '@/components/education-section'
import ProductsSection from '@/components/products-section'
import DecantShowcase from '@/components/decant-showcase'
import FooterSection from '@/components/footer-section'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AroMatchApp />
      <EducationSection />
      <ProductsSection />
      <DecantShowcase />
      <FooterSection />
    </main>
  )
}

```

### src\app\sitemap.ts
```javascript
import { MetadataRoute } from 'next'
import { perfumes } from '@/lib/perfumes'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://auradecant.ar'
  const lastModified = new Date()

  // Base routes
  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/coleccion`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Dynamic products (Perfumes)
  // Note: While we are a single-page app, listing these as distinct paths 
  // (e.g. via deep linking or future detail pages) aids indexing of the catalog.
  const productRoutes = perfumes.map((perfume) => ({
    url: `${baseUrl}/?perfume=${encodeURIComponent(perfume.name.toLowerCase().replace(/\s+/g, '-'))}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...productRoutes]
}

```

### src\components\aromatch-app.tsx
```javascript
"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart,
  Briefcase,
  Coffee,
  PartyPopper,
  Sun,
  Moon,
  CloudSun,
  Snowflake,
  Leaf,
  Wind,
  Flame,
  Zap,
  ArrowLeft,
  Sparkles,
  AlertCircle,
  Mail,
  ArrowRight,
} from 'lucide-react'
import PrestigeShowcase from '@/components/prestige-showcase'
import { perfumes, type Perfume } from '@/lib/perfumes'

// ─────────────────────────────────────────────────────────────────────────────
// Quiz option definitions
// ─────────────────────────────────────────────────────────────────────────────

const occasionOptions = [
  {
    id: 'cita_nocturna' as const,
    label: 'Cita Nocturna',
    icon: Moon,
    color: '#c0c0c0',
    bgImage:
      'https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'oficina_diario' as const,
    label: 'Oficina / Diario',
    icon: Briefcase,
    color: '#f4d58d',
    bgImage:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'evento_especial' as const,
    label: 'Evento Especial',
    icon: PartyPopper,
    color: '#d4af37',
    bgImage:
      'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=1600&q=80&auto=format&fit=crop',
  },
  {
    id: 'deporte_aire_libre' as const,
    label: 'Deporte / Aire Libre',
    icon: Zap,
    color: '#a8d4e6',
    bgImage:
      'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&q=80&auto=format&fit=crop',
  },
]

const seasonOptions = [
  { id: 'summer' as const, label: 'Verano', icon: Sun, color: '#f4d58d' },
  { id: 'winter' as const, label: 'Invierno', icon: Snowflake, color: '#a8d4e6' },
  { id: 'spring' as const, label: 'Primavera', icon: Leaf, color: '#90b77d' },
  { id: 'fall' as const, label: 'Otoño', icon: CloudSun, color: '#cd7f32' },
]

const scentStyleOptions = [
  { id: 'dulce' as const, label: 'Dulces y Adictivos', description: 'Vainilla, Postres, Dulzor', icon: Heart, color: '#e6a8d7' },
  { id: 'fresco' as const, label: 'Frescos y Limpios', description: 'Cítricos, Mar, Energía', icon: Wind, color: '#a8e6cf' },
  { id: 'maderoso' as const, label: 'Maderosos y Elegantes', description: 'Bosque, Cuero, Autoridad', icon: Briefcase, color: '#cda97f' },
  { id: 'especiado' as const, label: 'Especiados y Misteriosos', description: 'Pimienta, Canela, Árabe', icon: Flame, color: '#d48a37' },
]

const longevityOptions = [
  {
    id: 'moderate' as const,
    label: 'Moderada',
    icon: Wind,
    description: 'Perfecta para el día a día',
    color: '#a8d4e6',
  },
  {
    id: 'high' as const,
    label: 'Alta',
    icon: Flame,
    description: 'Acompaña sin desvanecerse',
    color: '#d4af37',
  },
  {
    id: 'beast' as const,
    label: 'Beast Mode',
    icon: Zap,
    description: 'Proyección extrema',
    color: '#c0394b',
  },
]

// ─────────────────────────────────────────────────────────────────────────────
// Filtering engine — score-based
// ─────────────────────────────────────────────────────────────────────────────
type Occasion  = typeof occasionOptions[number]['id']
type Season    = typeof seasonOptions[number]['id']
type ScentStyle= typeof scentStyleOptions[number]['id']
type Longevity = typeof longevityOptions[number]['id']

interface Selection {
  occasion: Occasion | null
  season: Season | null
  scentStyle: ScentStyle | null
  longevity: Longevity | null
}

function findBestMatch(sel: Selection): Perfume {
  const scored = perfumes.map((p) => {
    let score = 0

    // Scent Style is the strongest signal (5 pts)
    if (sel.scentStyle && p.scentStyle?.includes(sel.scentStyle)) score += 5
    // Occasion is the second strongest (3 pts)
    if (sel.occasion && p.occasions?.includes(sel.occasion)) score += 3
    // Longevity (2 pts)
    if (sel.longevity && p.longevities?.includes(sel.longevity)) score += 2
    // Season (1 pt)
    if (sel.season && p.seasons?.includes(sel.season)) score += 1

    // Bonus: beast-only perfumes get +1 when user picks beast
    if (sel.longevity === 'beast' && p.longevities?.length === 1 && p.longevities[0] === 'beast') score += 1

    return { perfume: p, score }
  })

  // Sort by score desc; tiebreak by name (deterministic)
  scored.sort((a, b) => b.score - a.score || a.perfume.name.localeCompare(b.perfume.name))
  return scored[0].perfume
}

// ─────────────────────────────────────────────────────────────────────────────
// Lead Capture Screen
// ─────────────────────────────────────────────────────────────────────────────
function LeadCaptureScreen({ onSubmit }: { onSubmit: (email: string) => void }) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Por favor ingresá un correo válido.')
      return
    }
    setError('')
    onSubmit(email)
  }

  return (
    <motion.div
      key="lead-capture"
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.38 }}
      className="flex flex-col items-center justify-center py-8 text-center"
    >
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
        style={{
          background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
          border: '1px solid rgba(212,175,55,0.30)',
        }}
      >
        <Mail className="w-7 h-7 text-[#d4af37]" />
      </div>

      <h3
        style={{ fontFamily: 'var(--font-display)' }}
        className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight max-w-sm"
      >
        Tu esencia ideal está lista
      </h3>

      <div className="h-px w-16 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mb-4 opacity-50" />

      <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-xs" style={{ fontFamily: 'var(--font-body)' }}>
        ¿A dónde te enviamos tu perfil olfativo?
      </p>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setError('') }}
            placeholder="tu@correo.com"
            className="w-full px-5 py-4 rounded-xl bg-white/[0.04] backdrop-blur-sm
                        text-white placeholder-white/25
                        transition-all duration-300
                        outline-none focus:ring-0"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.9rem',
              letterSpacing: '0.02em',
              border: '1px solid rgba(212,175,55,0.35)',
              boxShadow: email ? '0 0 16px rgba(212,175,55,0.15)' : 'none',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'rgba(212,175,55,0.7)'
              e.target.style.boxShadow = '0 0 20px rgba(212,175,55,0.2)'
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'rgba(212,175,55,0.35)'
              e.target.style.boxShadow = email ? '0 0 16px rgba(212,175,55,0.15)' : 'none'
            }}
          />
        </div>

        {error && (
          <p className="text-red-400/80 text-xs flex items-center gap-1.5" style={{ fontFamily: 'var(--font-body)' }}>
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            {error}
          </p>
        )}

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="btn-gold w-full flex items-center justify-center gap-3"
        >
          <Sparkles className="w-4 h-4" />
          Ver mi Match
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </form>

      <p className="text-white/20 text-xs mt-5 max-w-xs" style={{ fontFamily: 'var(--font-body)' }}>
        Solo usamos tu correo para enviarte tu perfil olfativo. Sin spam.
      </p>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Main AroMatchApp component
// ─────────────────────────────────────────────────────────────────────────────
const TOTAL_STEPS = 4

export default function AroMatchApp() {
  const [step, setStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [showLeadCapture, setShowLeadCapture] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [capturedEmail, setCapturedEmail] = useState<string>('')
  const [hoveredOccasion, setHoveredOccasion] = useState<string | null>(null)
  const [selection, setSelection] = useState<Selection>({
    occasion: null, season: null, scentStyle: null, longevity: null,
  })
  const [result, setResult] = useState<Perfume | null>(null)
  const [savedFinalSel, setSavedFinalSel] = useState<Selection | null>(null)

  const handleSelect = <K extends keyof Selection>(type: K, value: Selection[K]) => {
    const updated = { ...selection, [type]: value }
    setSelection(updated)

    setTimeout(() => {
      if (type === 'occasion')  setStep(2)
      else if (type === 'season') setStep(3)
      else if (type === 'scentStyle') setStep(4)
      else if (type === 'longevity') {
        setSavedFinalSel(updated)
        setShowLeadCapture(true)
      }
    }, 300)
  }

  const handleLeadSubmit = (email: string) => {
    setCapturedEmail(email)
    try { localStorage.setItem('aromatch_lead_email', email) } catch {}
    console.log('[AroMatch Lead]', email, new Date().toISOString())
    setShowLeadCapture(false)
    runMatch(savedFinalSel!)
  }

  const runMatch = (finalSel: Selection) => {
    setIsLoading(true)
    setTimeout(() => {
      setResult(findBestMatch(finalSel))
      setIsLoading(false)
      setShowResult(true)
    }, 2200)
  }

  const handleBack = () => {
    if (showLeadCapture) {
      setShowLeadCapture(false)
      setStep(4)
    } else if (step > 1) {
      setStep(step - 1)
    }
  }

  const handleReset = () => {
    setStep(1)
    setSelection({ occasion: null, season: null, scentStyle: null, longevity: null })
    setResult(null)
    setShowResult(false)
    setShowLeadCapture(false)
    setSavedFinalSel(null)
    setHoveredOccasion(null)
    setCapturedEmail('')
  }

  const stepTitles = [
    '¿Para qué ocasión es la fragancia?',
    '¿Para qué estación del año?',
    '¿Qué estilo te representa?',
    '¿Qué longevidad buscas?',
  ]

  const activeBg = occasionOptions.find(o => o.id === hoveredOccasion)?.bgImage ?? null

  const showProgressBar = !showResult && !isLoading && !showLeadCapture

  return (
    <section
      id="aromatch"
      className={`relative px-6 overflow-hidden transition-all duration-500 ${
        showResult ? 'py-16 md:py-24' : 'py-20 md:py-32'
      }`}
    >
      <AnimatePresence>
        {activeBg && (
          <motion.div
            key={activeBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={activeBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/72" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`relative z-10 mx-auto transition-all duration-500 ${
        showResult ? 'max-w-6xl' : 'max-w-4xl'
      }`}>

        {!showResult && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="label-eyebrow mb-4 block">
              Experiencia Interactiva
            </span>
            <hr className="divider-gold max-w-[80px] mx-auto mb-6" />
            <h2
              style={{ fontFamily: 'var(--font-display)' }}
              className="text-4xl md:text-5xl font-bold uppercase tracking-widest mb-4 text-white"
            >
              AroMatch
            </h2>
            <p className="body-text text-white/45 max-w-lg mx-auto text-sm">
              Cuatro preguntas sencillas y de instinto para hallar el decant perfecto.
            </p>
          </motion.div>
        )}

        {showResult && result && (
          <motion.div
            key="showcase"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <PrestigeShowcase perfume={result} onReset={handleReset} capturedEmail={capturedEmail} />
          </motion.div>
        )}

        {!showResult && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-strong rounded-3xl p-6 md:p-10 min-h-[520px] relative overflow-hidden border border-[#d4af37]/15 hover:border-[#d4af37]/30 transition-colors duration-500"
        >

          {showProgressBar && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      className="p-2 -ml-2 text-white/50 hover:text-white transition-colors"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </button>
                  )}
                  <span className="text-sm text-white/50">Paso {step} de {TOTAL_STEPS}</span>
                </div>
                <span className="text-sm text-[#d4af37]">{Math.round((step / TOTAL_STEPS) * 100)}%</span>
              </div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(step / TOTAL_STEPS) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-[#d4af37] to-[#f4d58d]"
                />
              </div>
            </div>
          )}

          {showLeadCapture && (
            <div className="mb-6">
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver
              </button>
            </div>
          )}

          <AnimatePresence mode="wait">

            {!isLoading && !showResult && !showLeadCapture && (
              <motion.div
                key={`step-${step}`}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.35 }}
              >
                <h3
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-xl md:text-2xl font-bold uppercase tracking-widest text-center mb-8 text-white"
                >
                  {stepTitles[step - 1]}
                </h3>

                {/* STEP 1 – Occasion */}
                {step === 1 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {occasionOptions.map((opt) => (
                      <motion.button
                        key={opt.id}
                        whileHover={{ scale: 1.04, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSelect('occasion', opt.id)}
                        onMouseEnter={() => setHoveredOccasion(opt.id)}
                        onMouseLeave={() => setHoveredOccasion(null)}
                        className={`p-6 rounded-xl flex flex-col items-center gap-3 transition-all duration-300
                                   bg-white/[0.04] backdrop-blur-xl border ${
                          selection.occasion === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/[0.08] hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <opt.icon className="w-8 h-8" style={{ color: opt.color }} />
                        <span
                          className="label-eyebrow text-center leading-tight"
                          style={{ color: 'rgba(255,255,255,0.8)', letterSpacing: '0.12em', fontSize: '0.65rem' }}
                        >{opt.label}</span>
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* STEP 2 – Season */}
                {step === 2 && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {seasonOptions.map((opt) => (
                      <motion.button
                        key={opt.id}
                        whileHover={{ scale: 1.04, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSelect('season', opt.id)}
                        className={`p-6 rounded-xl flex flex-col items-center gap-3 transition-all duration-300
                                   bg-white/[0.04] backdrop-blur-xl border ${
                          selection.season === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/[0.08] hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <opt.icon className="w-8 h-8" style={{ color: opt.color }} />
                        <span className="text-sm text-white/90 text-center font-medium">{opt.label}</span>
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* STEP 3 – Scent Style (NEW CORE) */}
                {step === 3 && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {scentStyleOptions.map((opt) => (
                      <motion.button
                        key={opt.id}
                        whileHover={{ scale: 1.04, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSelect('scentStyle', opt.id)}
                        className={`p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-300
                                   bg-white/[0.04] backdrop-blur-xl border ${
                          selection.scentStyle === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/[0.08] hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <opt.icon className="w-10 h-10 mb-1" style={{ color: opt.color }} />
                        <span className="text-lg text-white font-medium text-center">{opt.label}</span>
                        <span className="text-xs text-white/50 text-center uppercase tracking-widest">{opt.description}</span>
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* STEP 4 – Longevity */}
                {step === 4 && (
                  <div className="grid md:grid-cols-3 gap-4">
                    {longevityOptions.map((opt) => (
                      <motion.button
                        key={opt.id}
                        whileHover={{ scale: 1.04, y: -4 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleSelect('longevity', opt.id)}
                        className={`p-8 rounded-xl flex flex-col items-center gap-3 transition-all duration-300
                                   bg-white/[0.04] backdrop-blur-xl border ${
                          selection.longevity === opt.id
                            ? 'border-[#d4af37]/70 shadow-[0_0_20px_rgba(212,175,55,0.3)]'
                            : 'border-white/[0.08] hover:border-[#d4af37]/40 hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]'
                        }`}
                      >
                        <opt.icon className="w-10 h-10" style={{ color: opt.color }} />
                        <span className="text-lg text-white font-medium">{opt.label}</span>
                        <span className="text-sm text-white/50 text-center">{opt.description}</span>
                      </motion.button>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {/* ── Lead Capture ─────────────────────────────────────────── */}
            {!isLoading && !showResult && showLeadCapture && (
              <LeadCaptureScreen onSubmit={handleLeadSubmit} />
            )}

            {/* ── Loading ───────────────────────────────────────────────── */}
            {isLoading && (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center py-20"
              >
                <div className="relative mb-8">
                  <div className="w-20 h-20 rounded-full border-2 border-white/10" />
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
                    className="absolute inset-0 w-20 h-20 rounded-full border-2 border-transparent border-t-[#d4af37]"
                  />
                  <Sparkles className="absolute inset-0 m-auto w-8 h-8 text-[#d4af37]" />
                </div>
                <p className="text-xl font-serif text-white mb-2">Analizando tu perfil...</p>
                <p className="text-sm text-white/40">Explorando nuestra colección de decants</p>
              </motion.div>
            )}

          </AnimatePresence>
        </motion.div>
        )}
      </div>
    </section>
  )
}

```

### src\components\decant-showcase.tsx
```javascript
"use client"

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'

const features = [
  {
    id: "glass",
    title: "PUREZA E INERCIA",
    description: "Envase 100% Vidrio Cristalino: Material inerte grado perfumero. Garantiza la conservación absoluta de la fórmula original sin alteración química.",
    position: { top: "60%", left: "50%" },
    side: 'left'
  },
  {
    id: "atomizer",
    title: "DIFUSIÓN DE ALTA PRECISIÓN",
    description: "Atomizador Premium (Negro): Diseñado para emular el spray original. Rendimiento estimado: ~60 atomizaciones (5ml) / ~120 atomizaciones (10ml).",
    position: { top: "12%", left: "50%" },
    side: 'left'
  },
  {
    id: "seal",
    title: "SELLADO DE TEFLÓN",
    description: "Protección Total anti-oxidación: Aplicamos teflón en la rosca para crear un sello barrera anti-aire y anti-fugas.",
    position: { top: "28%", left: "50%" },
    side: 'right'
  },
  {
    id: "process",
    title: "CERO CONTAMINACIÓN",
    description: "Decantado Individualizado: Utilizamos jeringas estériles exclusivas para cada fragancia. Garantía de pureza: Cero contaminación cruzada de aromas.",
    position: { top: "85%", left: "50%" },
    side: 'right'
  }
]

function FeatureBlock({ feature, isActive, onHover }: { feature: any, isActive: boolean, onHover: (id: string | null) => void }) {
  const isLeft = feature.side === 'left'

  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onMouseEnter={() => onHover(feature.id)}
      onMouseLeave={() => onHover(null)}
      className={`relative p-5 glass rounded-xl border transition-all duration-300 cursor-pointer ${isActive ? 'bg-amber-400/10 border-amber-400/50 scale-105 shadow-[0_10px_30px_rgba(212,175,55,0.1)]' : 'bg-black/40 border-white/5 hover:border-amber-400/30'}`}
    >
      <div className="flex items-start gap-3">
        <CheckCircle2 className={`w-5 h-5 flex-shrink-0 mt-0.5 transition-colors ${isActive ? 'text-amber-400' : 'text-amber-400/50'}`} />
        <div>
          <h3 className={`font-serif text-sm xl:text-base font-bold mb-1.5 transition-colors ${isActive ? 'text-amber-400' : 'text-amber-400/80'}`}>
            {feature.title}
          </h3>
          <p className={`font-sans text-xs xl:text-sm leading-relaxed transition-colors ${isActive ? 'text-white' : 'text-white/60'}`}>
            {feature.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function DecantShowcase() {
  const [activeId, setActiveId] = useState<string | null>(null)
  const ref = useRef(null)

  return (
    <section id="decant-showcase" ref={ref} className="w-full py-20 xl:py-28 bg-[#030303] border-t border-[#d4af37]/15 relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 xl:mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-white font-serif text-3xl md:text-5xl font-bold mb-4"
          >
            La Arquitectura del <span className="text-gradient-gold">Decant Premium</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-white/50 font-sans text-sm md:text-base max-w-2xl mx-auto"
          >
            Preservamos la magia de los diseñadores originales mediante ingeniería de envasado estéril.
          </motion.p>
        </div>

        {/* 3-Column Layout */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 xl:gap-16">
          
          {/* Left Column Text Blocks */}
          <div className="flex flex-col gap-6 lg:gap-12 w-full max-w-sm order-2 lg:order-1">
            {features.filter(f => f.side === 'left').map((feature) => (
              <FeatureBlock key={feature.id} feature={feature} isActive={activeId === feature.id} onHover={setActiveId} />
            ))}
          </div>

          {/* Center Column: Interactive SVG Graphic */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-[140px] md:w-[160px] lg:w-[180px] h-[450px] md:h-[500px] flex-shrink-0 order-1 lg:order-2 mx-auto"
          >
            <div className="relative w-full h-full">
              {/* Programmed SVG Decant Bottle */}
              <svg 
                viewBox="0 0 100 340" 
                className="w-full h-full drop-shadow-[0_20px_40px_rgba(212,175,55,0.25)]"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Damask/Middle Eastern Inspired Pattern */}
                  <pattern id="damaskPattern" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="scale(0.8)">
                    <rect width="40" height="40" fill="#0a0a0a" />
                    {/* Intricate Gold Vectors */}
                    <path d="M20 0 L25 10 L35 15 L25 20 L20 30 L15 20 L5 15 L15 10 Z" fill="rgba(212,175,55,0.25)" />
                    <circle cx="20" cy="15" r="2.5" fill="rgba(212,175,55,0.4)" />
                    <path d="M0 20 Q 10 5, 20 20 T 40 20" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="0.75" />
                    <path d="M0 40 Q 10 25, 20 40 T 40 40" fill="none" stroke="rgba(212,175,55,0.2)" strokeWidth="0.75" />
                    <circle cx="0" cy="0" r="1.5" fill="rgba(212,175,55,0.3)" />
                    <circle cx="40" cy="40" r="1.5" fill="rgba(212,175,55,0.3)" />
                  </pattern>

                  {/* Refractive Glass Gradients */}
                  <linearGradient id="glassReflection" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
                    <stop offset="12%" stopColor="rgba(255,255,255,0.1)" />
                    <stop offset="40%" stopColor="rgba(255,255,255,0.0)" />
                    <stop offset="85%" stopColor="rgba(255,255,255,0.05)" />
                    <stop offset="95%" stopColor="rgba(255,255,255,0.4)" />
                    <stop offset="100%" stopColor="rgba(255,255,255,0.8)" />
                  </linearGradient>

                  <linearGradient id="liquidGold" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(212,175,55,0.7)" />
                    <stop offset="50%" stopColor="rgba(212,175,55,0.3)" />
                    <stop offset="100%" stopColor="rgba(212,175,55,0.85)" />
                  </linearGradient>

                  {/* Metallic Atomizer Gradients */}
                  <linearGradient id="metallicBlack" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#1a1a1a" />
                    <stop offset="25%" stopColor="#3d3d3d" />
                    <stop offset="60%" stopColor="#0a0a0a" />
                    <stop offset="90%" stopColor="#2a2a2a" />
                    <stop offset="100%" stopColor="#111111" />
                  </linearGradient>

                  <linearGradient id="goldCollar" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#a08850" />
                    <stop offset="20%" stopColor="#f5e1a4" />
                    <stop offset="50%" stopColor="#d4af37" />
                    <stop offset="80%" stopColor="#fffbe6" />
                    <stop offset="100%" stopColor="#8c733b" />
                  </linearGradient>
                </defs>

                {/* ===== BOTTLE ANATOMY ===== */}
                
                {/* 1. Main Glass Body Silhouette & Damask Pattern */}
                <rect x="15" y="80" width="70" height="240" rx="6" fill="url(#damaskPattern)" />
                
                {/* 2. Scent Liquid Inner Core */}
                <rect x="18" y="95" width="64" height="215" rx="4" fill="url(#liquidGold)" opacity="0.85" />

                {/* 3. Outer Glass Casing / Specular Highlights */}
                <rect x="15" y="80" width="70" height="240" rx="6" fill="url(#glassReflection)" />
                <rect x="15" y="80" width="70" height="240" rx="6" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" />
                
                {/* Glass Bottom Thickness */}
                <path d="M15 315 Q50 330 85 315 L85 320 Q50 326 15 320 Z" fill="rgba(255,255,255,0.25)" />

                {/* 4. Plunger Tube descending into liquid */}
                <line x1="50" y1="80" x2="55" y2="310" stroke="rgba(255,255,255,0.35)" strokeWidth="3.5" strokeLinecap="round" />
                <line x1="50" y1="80" x2="55" y2="310" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />

                {/* 5. Glass Neck Structure */}
                <rect x="35" y="65" width="30" height="15" fill="rgba(255,255,255,0.2)" />
                <rect x="35" y="65" width="30" height="15" fill="url(#glassReflection)" />
                
                {/* 6. CRUCIAL: High-Visibility Teflon Tape Simulation on Threads */}
                {/* Dense, layered white lines mimicking the wrapped tape */}
                <line x1="34" y1="67" x2="66" y2="69" stroke="#ffffff" strokeWidth="2" opacity="0.95" />
                <line x1="33" y1="70" x2="67" y2="72" stroke="#ffffff" strokeWidth="2.5" opacity="0.9" />
                <line x1="34" y1="74" x2="66" y2="76" stroke="#ffffff" strokeWidth="2" opacity="0.85" />
                <line x1="35" y1="77" x2="65" y2="78" stroke="#ffffff" strokeWidth="1.5" opacity="0.9" />

                {/* 7. Gold Atomizer Collar Base */}
                <rect x="31" y="55" width="38" height="10" rx="1.5" fill="url(#goldCollar)" />
                
                {/* 8. Black Metallic Spray Assembly */}
                <path d="M38 40 L62 40 L63 55 L37 55 Z" fill="url(#metallicBlack)" />
                <rect x="39" y="38" width="22" height="4" rx="1" fill="#111" />
                <rect x="42" y="32" width="16" height="6" rx="1" fill="url(#metallicBlack)" />
                
                {/* Spray Nozzle Port */}
                <circle cx="62" cy="45" r="2" fill="#050505" />

                {/* 9. Semi-Translucent Luxury Overcap */}
                <path d="M32 5 L68 5 L70 55 L30 55 Z" fill="rgba(15,15,15,0.55)" stroke="rgba(212,175,55,0.4)" strokeWidth="0.75" />
                <path d="M32 5 L68 5 L70 55 L30 55 Z" fill="url(#glassReflection)" opacity="0.6" />
                <rect x="31.5" y="48" width="37" height="3" fill="url(#goldCollar)" opacity="0.85" />

              </svg>
              
              {/* Interactive Hotspots overlayed directly on the SVG proportions */}
              {features.map((feature) => {
                const isActive = activeId === feature.id
                return (
                  <div 
                    key={`hotspot-${feature.id}`}
                    className="absolute z-20 cursor-pointer group"
                    style={{ top: feature.position.top, left: feature.position.left, transform: 'translate(-50%, -50%)' }}
                    onMouseEnter={() => setActiveId(feature.id)}
                    onMouseLeave={() => setActiveId(null)}
                    onClick={() => setActiveId(isActive ? null : feature.id)}
                  >
                    {/* Pulsing Target Aura */}
                    <div className={`absolute inset-0 -m-3 rounded-full border border-amber-400 bg-amber-400/20 animate-ping ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} style={{ animationDuration: '3s' }} />
                    {/* Central Gold Node */}
                    <div className={`relative w-4 h-4 rounded-full border-[1.5px] border-black shadow-[0_0_15px_rgba(212,175,55,1)] transition-transform duration-300 ${isActive ? 'bg-[#fffbe6] scale-125' : 'bg-amber-400 scale-100'}`} />
                  </div>
                )
              })}
            </div>
            
            {/* Ambient Ground Reflection */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[140%] h-6 bg-amber-400/15 blur-[20px] rounded-[100%] pointer-events-none" />
          </motion.div>

          {/* Right Column Text Blocks */}
          <div className="flex flex-col gap-6 lg:gap-12 w-full max-w-sm order-3 lg:order-3">
            {features.filter(f => f.side === 'right').map((feature) => (
              <FeatureBlock key={feature.id} feature={feature} isActive={activeId === feature.id} onHover={setActiveId} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

```

### src\components\education-section.tsx
```javascript
"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Flower2, 
  Thermometer, 
  Droplets, 
  ShieldCheck, 
  Clock,
  ChevronDown,
  Sparkles
} from 'lucide-react'

interface Topic {
  id: string
  title: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  content: string
  color: string
  size?: 'large' | 'medium' | 'small'
}

const topics: Topic[] = [
  {
    id: 'families',
    title: '¿Que son las familias olfativas?',
    icon: Flower2,
    color: '#d4af37',
    size: 'large',
    content: 'Las fragancias se categorizan en familias distintas basadas en sus caracteristicas dominantes. Las familias principales incluyen: Oriental (calido, especiado, sensual), Amaderado (terroso, sofisticado), Fresco (citrico, acuatico, verde), y Floral (romantico, elegante). Entender estas familias te ayuda a identificar tus preferencias y descubrir nuevos aromas dentro de tu categoria favorita.'
  },
  {
    id: 'seasons',
    title: 'Perfumes de verano vs. invierno',
    icon: Thermometer,
    color: '#c0c0c0',
    size: 'medium',
    content: 'La temperatura afecta dramaticamente el rendimiento de las fragancias. En verano, el calor amplifica la proyeccion, haciendo ideales las fragancias mas ligeras y frescas. En invierno, el aire frio suprime las moleculas, por lo que composiciones mas ricas e intensas funcionan mejor. Elige notas citricas y acuaticas para dias calurosos, y oud, ambar y especias para el frio.'
  },
  {
    id: 'ph',
    title: 'Como el pH de la piel afecta la duracion',
    icon: Droplets,
    color: '#cd7f32',
    size: 'medium',
    content: 'El nivel de pH natural de tu piel influye en como las moleculas de fragancia interactuan con tu quimica corporal. La piel mas grasa tiende a retener las fragancias por mas tiempo, mientras que la piel seca puede hacer que los aromas se evaporen mas rapido. Hidratar antes de aplicar y usar productos corporales complementarios puede extender significativamente la duracion.'
  },
  {
    id: 'fake',
    title: 'Como detectar perfumes falsos',
    icon: ShieldCheck,
    color: '#f4d58d',
    size: 'small',
    content: 'Los perfumes autenticos tienen empaques precisos con fuentes nitidas, codigos de lote correctos y materiales de calidad. Busca errores ortograficos, examina la calidad de la tapa y compara el peso del frasco. Las fragancias falsas suelen tener coloracion inconsistente y proyeccion debil. En AuraDecant, con la compra de cada decant entregamos el Batch Code del envase original. Así tenés la certeza y la total tranquilidad de que estás adquiriendo una fragancia 100% auténtica y legítima.'
  },
  {
    id: 'longevity',
    title: 'Haz que tu perfume dure mas',
    icon: Clock,
    color: '#d4af37',
    size: 'small',
    content: 'Aplica la fragancia en puntos de pulso (munecas, cuello, detras de las orejas) donde el calor corporal ayuda a difundir el aroma. Hidrata la piel primero, rocía a 15 cm de distancia y evita frotar las munecas. Usa productos complementarios y guarda las fragancias lejos de la luz solar y el calor para preservar su calidad.'
  }
]

export default function EducationSection() {
  const [expandedId, setExpandedId] = useState<string | null>(null)

  return (
    <section id="education" className="py-20 md:py-32 px-6 bg-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#d4af37]/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-0 w-60 h-60 bg-[#a08850]/5 rounded-full blur-[100px]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#d4af37] text-sm tracking-[0.3em] uppercase mb-4 block">
            Aprende y Descubre
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-4 text-white">
            El Arte de la Fragancia
          </h2>
          <p className="text-white/50 max-w-lg mx-auto">
            Domina la ciencia detras de los perfumes excepcionales con nuestras guias curadas.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {topics.map((topic, index) => (
            <motion.div
              key={topic.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${
                topic.size === 'large' ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
              }`}
            >
              <motion.div
                whileHover={{ y: -5 }}
                className={`glass rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 h-full border border-white/5 hover:border-white/10 group ${
                  expandedId === topic.id ? 'border-[#d4af37]/30' : ''
                }`}
                onClick={() => setExpandedId(expandedId === topic.id ? null : topic.id)}
              >
                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${topic.color}20` }}
                >
                  <topic.icon 
                    className="w-6 h-6"
                    style={{ color: topic.color }}
                  />
                </div>

                {/* Title */}
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-lg md:text-xl font-serif text-white group-hover:text-[#d4af37] transition-colors">
                    {topic.title}
                  </h3>
                  <motion.div
                    animate={{ rotate: expandedId === topic.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-5 h-5 text-white/30" />
                  </motion.div>
                </div>

                {/* Content */}
                <AnimatePresence>
                  {expandedId === topic.id ? (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-white/60 text-sm leading-relaxed overflow-hidden"
                    >
                      {topic.content}
                    </motion.p>
                  ) : (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-white/40 text-sm line-clamp-2"
                    >
                      {topic.content}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a 
            href="#aromatch"
            className="inline-flex items-center gap-2 text-[#d4af37] hover:text-[#f4d58d] transition-colors group"
          >
            <Sparkles className="w-4 h-4" />
            <span>¿Listo para encontrar tu aroma perfecto?</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

```

### src\components\footer-section.tsx
```javascript
"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Mail, 
  Instagram, 
  MessageCircle,
  ArrowRight,
  Check
} from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const modalData: Record<string, { title: string, content: React.ReactNode }> = {
  envios: {
    title: 'Información de Envíos',
    content: (
      <div className="space-y-4 text-white/80">
        <p>Envíos a todo el país vía <span className="text-[#d4af37] font-medium">Correo Argentino</span> y <span className="text-[#d4af37] font-medium">Andreani</span>.</p>
        <p>Retiros en <span className="text-white font-medium">Vicente López</span> disponibles.</p>
      </div>
    )
  },
  devoluciones: {
    title: 'Política de Devoluciones',
    content: (
      <div className="space-y-4 text-white/80 text-sm leading-relaxed">
        <p>Por cuestiones de higiene y la naturaleza del producto, los decants no tienen devolución una vez despachados.</p>
        <p>Si tu pedido llega dañado, contactanos dentro de las 24hs con fotos y resolveremos el inconveniente de inmediato.</p>
      </div>
    )
  },
  historia: {
    title: 'Nuestra Historia',
    content: (
      <div className="space-y-4 text-white/80 leading-relaxed font-serif text-sm">
        <p>Nuestra misión es hacer la perfumería nicho y de lujo completamente accesible a través de decants de alta calidad.</p>
        <p>Creemos que no deberías tener que comprar una botella completa a ciegas. Nuestros decants te permiten explorar y encontrar tu identidad olfativa de forma accesible y auténtica.</p>
      </div>
    )
  },
  faq: {
    title: 'Preguntas Frecuentes',
    content: (
      <div className="space-y-6 text-white/80">
        <div>
          <h4 className="text-white font-medium mb-1 flex items-center gap-2">
            <Check className="w-4 h-4 text-[#d4af37]"/> Garantía 100% Original
          </h4>
          <p className="text-sm">Garantizamos que todos nuestros decants son 100% originales, extraídos directamente de la botella de diseño original.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-1 flex items-center gap-2">
            <Check className="w-4 h-4 text-[#d4af37]"/> Verificación de Batch Code
          </h4>
          <p className="text-sm">Con cada compra entregamos el Batch Code correspondiente a la botella original. Transparencia total en cada decant.</p>
        </div>
        <div>
          <h4 className="text-white font-medium mb-1 flex items-center gap-2">
            <Check className="w-4 h-4 text-[#d4af37]"/> Atomizadores Premium
          </h4>
          <p className="text-sm">Utilizamos cápsulas de vidrio grueso con atomizadores de spray de alta precisión. Garantizamos conservación perfecta y cero alteración.</p>
        </div>
      </div>
    )
  }
}

export default function FooterSection() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [activeModal, setActiveModal] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubscribed(true)
    setIsLoading(false)
  }

  const footerLinks: Record<string, Array<{ name: string; href?: string; action?: string }>> = {
    shop: [
      { name: 'Todos los Decants', href: '#decant-showcase' },
      { name: 'Mas Vendidos', href: '#' },
    ],
    support: [
      { name: 'Info de Envios', action: 'envios' },
      { name: 'Devoluciones', action: 'devoluciones' },
      { name: 'Contactanos', href: '#' },
    ],
    learn: [
      { name: 'Guia de Fragancias', href: '#education' },
      { name: 'Nuestra Historia', action: 'historia' },
      { name: 'Preguntas Frecuentes', action: 'faq' },
    ],
  }

  const socialLinks = [
    { 
      icon: Instagram, 
      href: 'https://www.instagram.com/auradecant.ar', 
      label: 'Instagram',
      external: true
    },
    { 
      icon: MessageCircle, 
      href: 'https://wa.me/5491162066609', 
      label: 'WhatsApp',
      external: true
    },
  ]

  const renderLink = (link: { name: string; href?: string; action?: string }) => {
    if (link.action) {
      return (
        <button 
          onClick={() => setActiveModal(link.action as string)}
          className="text-white/40 hover:text-[#d4af37] transition-colors text-sm text-left"
        >
          {link.name}
        </button>
      )
    }
    return (
      <a 
        href={link.href}
        className="text-white/40 hover:text-[#d4af37] transition-colors text-sm text-left"
      >
        {link.name}
      </a>
    )
  }

  return (
    <footer id="footer" className="bg-black border-t border-white/5 relative">
      <Dialog open={!!activeModal} onOpenChange={(open) => !open && setActiveModal(null)}>
        <DialogContent className="bg-[#0a0a0a] border-white/10 text-white sm:max-w-md shadow-2xl shadow-[#d4af37]/5">
          <DialogHeader>
            <DialogTitle className="text-xl font-serif text-[#d4af37] tracking-wide">
              {activeModal && modalData[activeModal]?.title}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-2">
            {activeModal && modalData[activeModal]?.content}
          </div>
        </DialogContent>
      </Dialog>

      {/* Newsletter Section */}
      <div className="py-16 md:py-24 px-6 border-b border-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="w-8 h-8 text-[#d4af37] mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Unite al Club Exclusivo
            </h3>
            <p className="text-white/50 max-w-md mx-auto mb-8">
              Suscribite para acceso anticipado a nuevos lanzamientos, ofertas exclusivas y consejos de fragancias de nuestros expertos.
            </p>

            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <div className="relative flex-1">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu email"
                    className="w-full pl-12 pr-4 py-4 glass rounded-full border border-white/10 focus:border-[#d4af37]/50 outline-none text-white placeholder:text-white/30 transition-colors bg-transparent"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isLoading}
                  className="px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#a08850] text-black font-medium rounded-full flex items-center justify-center gap-2 glow-gold-subtle hover:glow-gold transition-all disabled:opacity-50"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                  ) : (
                    <>
                      Suscribirme
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-3 px-6 py-4 glass rounded-full border border-green-500/30"
              >
                <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Check className="w-4 h-4 text-green-400" />
                </div>
                <span className="text-green-400">¡Bienvenido al club!</span>
              </motion.div>
            )}

            <p className="text-xs text-white/30 mt-4">
              Sin spam, nunca. Cancela cuando quieras.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-[#d4af37]" />
                <span className="text-xl font-serif font-semibold text-white">
                  AroMatch<span className="text-[#d4af37]">.ar</span>
                </span>
              </a>
              <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xs">
                Decants premium de perfumes árabes y nicho. Experimentá fragancias de lujo sin el precio de lujo.
              </p>
              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    {...(social.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-3 glass rounded-full border border-white/10 hover:border-[#d4af37]/50 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-white/70" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div>
              <h4 className="text-white font-medium mb-4">Tienda</h4>
              <ul className="space-y-3 flex flex-col">
                {footerLinks.shop.map((link) => (
                  <li key={link.name}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Soporte</h4>
              <ul className="space-y-3 flex flex-col">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4">Aprende</h4>
              <ul className="space-y-3 flex flex-col">
                {footerLinks.learn.map((link) => (
                  <li key={link.name}>
                    {renderLink(link)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AroMatch.ar. Todos los derechos reservados. Decants premium de perfumes nicho.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
                Política de Privacidad
              </a>
              <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
                Términos de Servicio
              </a>
              <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

```

### src\components\hero-section.tsx
```javascript
"use client"

import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* ── Ambient glow orbs (layer on top of global video) ──────────────── */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#a08850]/8 rounded-full blur-[100px] animate-pulse delay-1000 pointer-events-none" />

      {/* ── Gold line decorations ─────────────────────────────────────────── */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute top-20 left-10 w-px h-40 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-40 right-20 w-px h-60 bg-gradient-to-b from-transparent via-[#d4af37] to-transparent"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-40 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"
        />
      </div>

      {/* ── Content ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <span className="divider-gold w-8" />
          <span className="label-eyebrow">
            Auradecant.ar
          </span>
          <span className="divider-gold w-8" />
        </motion.div>

        {/* Main Headline — contrast fixed with bright gold-white gradient */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ fontFamily: 'var(--font-display)' }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-widest mb-6 text-balance"
        >
          <span className="text-white drop-shadow-[0_2px_12px_rgba(255,255,255,0.2)]">
            Descubre Tu
          </span>
          <br />
          <span
            className="text-gradient-gold"
            style={{ filter: 'drop-shadow(0 2px 28px rgba(212,175,55,0.50))' }}
          >
            Aroma Distintivo
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="body-text text-lg text-white/55 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experimenta las mejores fragancias árabes y nicho del mundo a precios accesibles.
          Decants de perfumes de lujo seleccionados para el coleccionista exigente.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.a
            href="#aromatch"
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold"
          >
            <Sparkles className="w-4 h-4" />
            <span>Encuentra Tu Match Olfativo</span>
          </motion.a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-10"
        >
          {['100% Auténtico', 'Decants Premium', 'Envío Gratis'].map((badge, i) => (
            <span
              key={badge}
              className="label-eyebrow flex items-center gap-2"
              style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.65rem' }}
            >
              {i > 0 && <span className="divider-gold w-6 hidden sm:block" />}
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ──────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2 text-white/30"
        >
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  )
}

```

### src\components\navigation.tsx
```javascript
"use client"

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Quiz', href: '#aromatch' },
    { name: 'Aprende', href: '#education' },
    { name: 'Colección', href: '#products' },
    { name: 'Contacto', href: '#footer' },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'glass-strong py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          {/* ── Brand: AroMatch top-left ─────────────────────────────────── */}
          <motion.a
            href="#"
            className="flex items-center gap-2 flex-shrink-0 min-w-0"
            whileHover={{ scale: 1.02 }}
          >
            <Sparkles className="w-5 h-5 text-[#d4af37]" />
            {/* Primary brand label */}
            <span
              style={{ fontFamily: 'var(--font-display)', letterSpacing: '0.05em' }}
              className="text-xl md:text-2xl font-bold text-white"
            >
              Aro<span className="text-[#d4af37]">Match</span>
            </span>
            {/* Divider + secondary site label */}
            <span className="hidden md:inline-flex items-center gap-1.5 ml-1 pl-3 border-l border-white/15">
              <span
                className="label-eyebrow"
                style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.6rem' }}
              >
                by Auradecant
              </span>
              <span className="text-[#d4af37] text-xs">.ar</span>
            </span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative group"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.6)',
                  fontWeight: 400,
                  transition: 'color 0.3s',
                }}
                whileHover={{ y: -1 }}
                onMouseEnter={e => (e.currentTarget.style.color = '#D4AF37')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#d4af37] transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href="#aromatch"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="btn-gold"
              style={{ padding: '0.6rem 1.4rem', fontSize: '0.7rem' }}
            >
              Encuentra Tu Match
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 pt-20 bg-black/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-serif text-white/80 hover:text-[#d4af37] transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.a
                href="#aromatch"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-[#d4af37] to-[#a08850] text-black font-medium rounded-full glow-gold"
              >
                Encuentra Tu Match
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

```

### src\components\prestige-showcase.tsx
```javascript
"use client"

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { perfumes, type Perfume } from '@/lib/perfumes'
import { ArrowRight, RotateCcw, MessageCircle } from 'lucide-react'

const WA_NUMBER = '5491162066609'

// ─────────────────────────────────────────────────────────────────────────────
// Dynamic 6-point marketing blurbs — fully in Spanish
// ─────────────────────────────────────────────────────────────────────────────
function getPoints(p: Perfume) {
  const topStr = p.topNotes.slice(0, 2).join(' y ')
  const heartStr = p.heartNotes.slice(0, 2).join(' y ')
  const baseStr = p.baseNotes.slice(0, 2).join(' y ')

  return {
    left: [
      {
        title: 'Exclusividad Redefinida',
        body: `Desde la concepción hasta la presentación, ${p.name} redefine la exclusividad en perfumería ${p.family.toLowerCase()}.`,
      },
      {
        title: 'Edición de Lujo Limitada',
        body: `La fragancia se despliega como una sinfonía — notas de salida de ${topStr} danzando en armonía con ${heartStr}, base de ${baseStr} que perdura sensualmente.`,
      },
      {
        title: 'Consagrado al Tiempo',
        body: `${p.brand} porta décadas de patrimonio artesanal. La exclusividad es el sello de ${p.name} — disponible en producción artesanal limitada.`,
      },
    ],
    right: [
      {
        title: 'Elegancia Artesanal',
        body: `La creación de ${p.name} trasciende lo ordinario, encarnando elegancia artesanal en su cénit en cada decant fabricado a mano.`,
      },
      {
        title: 'Raro y Exquisito',
        body: `La maestría se encuentra con la rareza en la formulación de esta fragancia. ${p.name} contiene algunos de los ingredientes más exclusivos y preciosos del mundo.`,
      },
      {
        title: 'Herencia & Técnica',
        body: `El proceso de creación involucra técnicas milenarias transmitidas de generación en generación. Longevidad de ${p.longevity} que habla por sí sola.`,
      },
    ],
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// Feature block — orbit item (left or right column)
// ─────────────────────────────────────────────────────────────────────────────
function FeatureBlock({
  title,
  body,
  side,
  animDelay,
}: {
  title: string
  body: string
  side: 'left' | 'right'
  animDelay: number
}) {
  const isLeft = side === 'left'

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: animDelay, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex ${isLeft ? 'flex-row-reverse text-right' : 'flex-row text-left'} items-start gap-3`}
    >
      {/* Horizontal dotted connector (text) ··· ● → center */}
      <div
        className={`absolute top-[0.45rem] hidden xl:flex items-center gap-0
          ${isLeft ? 'right-0 translate-x-full pl-2' : 'left-0 -translate-x-full pr-2'} flex-row pointer-events-none`}
        style={{ width: '90px' }}
      >
        {isLeft ? (
          <>
            <div className="flex-1 border-t border-dashed border-[#d4af37]/35" />
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#d4af37', boxShadow: '0 0 6px rgba(212,175,55,0.7)' }} />
          </>
        ) : (
          <>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#d4af37', boxShadow: '0 0 6px rgba(212,175,55,0.7)' }} />
            <div className="flex-1 border-t border-dashed border-[#d4af37]/35" />
          </>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <p
          className="text-[#d4af37] mb-1.5 leading-snug"
          style={{
            fontFamily: 'var(--font-playfair), serif',
            fontSize: 'clamp(0.78rem, 0.9vw, 0.9rem)',
            fontWeight: 600,
          }}
        >
          {title}
        </p>
        <p
          className="text-white/45 leading-relaxed"
          style={{
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: 'clamp(0.68rem, 0.76vw, 0.75rem)',
            letterSpacing: '0.01em',
          }}
        >
          {body}
        </p>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Central product stage — image + ground reflection + "Explorar Lujo" pill
// ─────────────────────────────────────────────────────────────────────────────
function CentralStage({ perfume, onWA }: { perfume: Perfume; onWA: () => void }) {
  const [imgErr, setImgErr] = useState(false)
  const monogram = perfume.name.split(' ').filter(Boolean).slice(0, 2).map(w => w[0]).join('').toUpperCase()

  return (
    <div className="flex flex-col items-center">
      {/* Image with radial gold halo */}
      <div className="relative">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 90% at 50% 50%, rgba(212,175,55,0.28) 0%, rgba(0,0,0,0) 68%)',
            filter: 'blur(24px)',
            transform: 'scale(1.4)',
          }}
        />
        <div
          className="relative z-10 w-48 sm:w-52 md:w-56 lg:w-52 xl:w-60 aspect-[2/3] rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(212,175,55,0.20)' }}
        >
          {!imgErr ? (
            <img
              src={perfume.image}
              alt={`${perfume.brand} — ${perfume.name}`}
              onError={() => setImgErr(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            <div
              className="w-full h-full flex flex-col items-center justify-center gap-3"
              style={{ background: 'radial-gradient(circle at 50% 40%, rgba(212,175,55,0.14) 0%, #040200 100%)' }}
            >
              <span
                className="text-5xl font-bold select-none"
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  background: 'linear-gradient(135deg,#fffbe6 0%,#d4af37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {monogram}
              </span>
              <span
                className="text-[9px] uppercase tracking-[0.28em]"
                style={{ color: 'rgba(212,175,55,0.4)', fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Decant Premium
              </span>
            </div>
          )}
        </div>
        {/* Ground reflection */}
        <div
          className="absolute -bottom-3 left-1/2 -translate-x-1/2 pointer-events-none z-0"
          style={{
            width: '80%', height: '28px',
            background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(212,175,55,0.20) 0%, transparent 100%)',
            filter: 'blur(8px)',
          }}
        />
      </div>

      {/* "— Explorar Lujo —" pill below image (dots + dashes flanking) */}
      <div className="flex items-center gap-3 mt-10 w-full justify-center">
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 max-w-[60px] border-t border-dashed border-[#d4af37]/40 origin-right"
        />
        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(212,175,55,0.6)' }} />
        <motion.button
          whileHover={{ scale: 1.04, y: -1 }}
          whileTap={{ scale: 0.97 }}
          onClick={onWA}
          className="flex-shrink-0 flex items-center gap-2 rounded-full border border-[#d4af37]/40 hover:border-[#d4af37]/80 transition-all duration-300"
          style={{
            padding: '0.55rem 1.2rem',
            fontFamily: 'var(--font-inter), sans-serif',
            fontSize: '0.72rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.75)',
          }}
        >
          <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#d4af37' }}>
            <ArrowRight className="w-3 h-3 text-black" />
          </span>
          Explorar Lujo
        </motion.button>
        <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'rgba(212,175,55,0.6)' }} />
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex-1 max-w-[60px] border-t border-dashed border-[#d4af37]/40 origin-left"
        />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// WhatsApp CTA block — golden full-width button for conversion
// ─────────────────────────────────────────────────────────────────────────────
function WhatsAppCTA({ perfume, capturedEmail }: { perfume: Perfume; capturedEmail?: string }) {
  const message = encodeURIComponent(
    `Hola! Hice match con *${perfume.name}* y quiero consultar disponibilidad.${capturedEmail ? ` Mi email: ${capturedEmail}` : ''}`
  )
  const url = `https://wa.me/${WA_NUMBER}?text=${message}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="mt-10 flex flex-col items-center gap-3"
    >
      {/* Main WhatsApp gold button */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.97 }}
        className="w-full max-w-md flex items-center justify-center gap-3 rounded-2xl font-semibold"
        style={{
          padding: '1rem 2rem',
          background: 'linear-gradient(135deg, #d4af37 0%, #f4d58d 50%, #d4af37 100%)',
          color: '#000',
          fontFamily: 'var(--font-inter), sans-serif',
          fontSize: '0.9rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          boxShadow: '0 8px 32px rgba(212,175,55,0.35), 0 2px 8px rgba(212,175,55,0.2)',
        }}
      >
        <MessageCircle className="w-5 h-5 flex-shrink-0" />
        Consultar Disponibilidad por WhatsApp
        <ArrowRight className="w-4 h-4 flex-shrink-0" />
      </motion.a>

      {/* Disclaimer */}
      <p
        className="text-white/28 text-[11px] text-center"
        style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.02em' }}
      >
        Decants disponibles según stock. Sin costo por la consulta.
      </p>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Bottom Elysian banner — 2-col layout (title left, description + CTA right)
// ─────────────────────────────────────────────────────────────────────────────
function ElysianBanner({ perfume }: { perfume: Perfume }) {
  const currentIndex = perfumes.findIndex((p) => p.name === perfume.name)
  const relatedImages = [1, 2, 3, 4].map((n) => perfumes[(Math.max(0, currentIndex) + n) % perfumes.length].image)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.9 }}
      className="mt-16 pt-12 border-t border-[#d4af37]/12"
    >
      <div className="flex flex-col md:flex-row md:items-start gap-8 md:gap-16 justify-between">

        {/* LEFT — editorial title */}
        <div className="flex-1">
          <h3
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
            }}
          >
            Elysian Scents Prestige<br />
            <span
              style={{
                background: 'linear-gradient(135deg,#fffbe6 0%,#d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ediciones Limitadas Develadas
            </span>
          </h3>
        </div>

        {/* RIGHT — description + CTA + thumbnails */}
        <div className="flex flex-col gap-5 flex-shrink-0 md:max-w-xs xl:max-w-sm">
          <p
            className="text-white/40 leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.84rem' }}
          >
            Sumérgete en el prestigio de ediciones limitadas, donde la artesanía
            y la escasez se unen para crear una experiencia olfativa magistral.
          </p>

          {/* CTA row: button + decorative rings + dash */}
          <div className="flex items-center gap-4">
            <motion.a
              href="#products"
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 flex items-center gap-2 rounded-full border border-[#d4af37]/40 hover:border-[#d4af37]/80 transition-all duration-300"
              style={{
                padding: '0.6rem 1.35rem',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.73rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.75)',
              }}
            >
              <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: '#d4af37' }}>
                <ArrowRight className="w-3 h-3 text-black" />
              </span>
              Descubrir la Colección
            </motion.a>

            {/* Decorative rings + dashes */}
            <div className="flex items-center gap-0 flex-1">
              <div className="flex-1 border-t border-dashed border-[#d4af37]/25" />
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="rounded-full border border-[#d4af37]/30 flex-shrink-0"
                  style={{ width: `${18 - i * 3}px`, height: `${18 - i * 3}px`, marginLeft: `-${4 + i}px` }}
                />
              ))}
              <div className="w-6 border-t border-dashed border-[#d4af37]/25" />
              <ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: 'rgba(212,175,55,0.35)' }} />
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex -space-x-2">
            {relatedImages.map((imgSrc, i) => (
              <div key={i} className="w-10 h-14 rounded-lg overflow-hidden border border-[#d4af37]/18 flex-shrink-0 bg-[#060300]">
                <img
                  src={imgSrc}
                  alt=""
                  className="w-full h-full object-cover opacity-70"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// PrestigeShowcase — main export
// ─────────────────────────────────────────────────────────────────────────────
export default function PrestigeShowcase({
  perfume,
  onReset,
  capturedEmail,
}: {
  perfume: Perfume
  onReset: () => void
  capturedEmail?: string
}) {
  const ref = useRef(null)
  useInView(ref, { once: true })
  const { left, right } = getPoints(perfume)
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hola! Hice match con *${perfume.name}* y quiero consultar disponibilidad.${capturedEmail ? ` Mi email: ${capturedEmail}` : ''}`)}`

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* ── TOP HEADER — 2-column (serif title LEFT | subtitle + CTA RIGHT) ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col md:flex-row md:items-start gap-6 md:gap-10 mb-6 pb-6 border-b border-[#d4af37]/12"
      >
        {/* Left: big serif title */}
        <div className="flex-1">
          <h2
            className="text-white font-bold leading-tight"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
            }}
          >
            Donde la Tradición y la Innovación{' '}
            <span
              style={{
                background: 'linear-gradient(135deg,#fffbe6 0%,#d4af37 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              se unen.
            </span>
          </h2>
        </div>

        {/* Right: subtitle + "Ver detalles completos" button + rings */}
        <div className="flex flex-col gap-4 flex-shrink-0 md:max-w-[280px] xl:max-w-xs">
          <p
            className="text-white/38 leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.8rem' }}
          >
            Develando el arte detrás de las creaciones atemporales,
            donde la tradición se une con la innovación en cada detalle
          </p>
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.04, y: -1 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open(waUrl, '_blank')}
              className="flex-shrink-0 flex items-center gap-2 rounded-full"
              style={{
                padding: '0.6rem 1.2rem',
                background: '#d4af37',
                fontFamily: 'var(--font-inter), sans-serif',
                fontSize: '0.72rem',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: '#000',
                fontWeight: 500,
              }}
            >
              <span className="w-5 h-5 rounded-full border border-black/20 flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-3 h-3 text-black" />
              </span>
              Ver Detalles Completos
            </motion.button>
            {/* Decorative rings */}
            <div className="flex items-center gap-0 flex-1">
              <div className="flex-1 border-t border-dashed border-[#d4af37]/20" />
              {[20, 16, 12].map((sz, i) => (
                <div
                  key={i}
                  className="rounded-full border border-[#d4af37]/35 flex-shrink-0"
                  style={{ width: sz, height: sz, marginLeft: i === 0 ? 4 : -6 }}
                />
              ))}
              <div className="w-4 border-t border-dashed border-[#d4af37]/20" />
              <ArrowRight className="w-3 h-3 flex-shrink-0" style={{ color: 'rgba(212,175,55,0.30)' }} />
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── THREE-COLUMN EDITORIAL BODY ────────────────────────────────────── */}
      <div className="flex flex-col lg:flex-row items-start lg:items-center gap-10 lg:gap-6 xl:gap-8 py-8">
        {/* LEFT */}
        <div className="flex flex-col gap-8 lg:gap-10 w-full lg:w-60 xl:w-72 flex-shrink-0 lg:pr-8 xl:pr-10">
          {left.map((pt, i) => (
            <FeatureBlock key={pt.title} title={pt.title} body={pt.body} side="left" animDelay={0.15 + i * 0.12} />
          ))}
        </div>

        {/* CENTER */}
        <div className="flex-1 flex justify-center">
          <CentralStage perfume={perfume} onWA={() => window.open(waUrl, '_blank')} />
        </div>

        {/* RIGHT */}
        <div className="flex flex-col gap-8 lg:gap-10 w-full lg:w-60 xl:w-72 flex-shrink-0 lg:pl-8 xl:pl-10">
          {right.map((pt, i) => (
            <FeatureBlock key={pt.title} title={pt.title} body={pt.body} side="right" animDelay={0.27 + i * 0.12} />
          ))}
        </div>
      </div>

      {/* ── PROMINENT WHATSAPP CTA ──────────────────────────────────────────── */}
      <WhatsAppCTA perfume={perfume} capturedEmail={capturedEmail} />

      {/* ── ELYSIAN PRESTIGE BANNER ─────────────────────────────────────────── */}
      <ElysianBanner perfume={perfume} />

      {/* ── Reset quiz ──────────────────────────────────────────────────────── */}
      <div className="flex justify-center mt-10">
        <button
          onClick={onReset}
          className="btn-ghost flex items-center gap-2"
          style={{ fontSize: '0.72rem' }}
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Hacer el Quiz de Nuevo
        </button>
      </div>
    </motion.div>
  )
}

```

### src\components\products-section.tsx
```javascript
"use client"

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { perfumes, type Perfume } from '@/lib/perfumes'
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// Elysian-Style Perfume Card (PerfumeX reference)
// ─────────────────────────────────────────────────────────────────────────────
function PerfumeCard({
  perfume,
  index,
  onOpen,
}: {
  perfume: Perfume
  index: number
  onOpen: (p: Perfume) => void
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [imgError, setImgError] = useState(false)

  const imgSrc = perfume.image
  const monogram = (
    perfume.name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((w) => w[0])
      .join('')
  ).toUpperCase()

  // Decorative price (display only, no actual price data)
  const displayPrice = (index * 3 + 17).toString()
  const strikePrice = (index * 3 + 17 + 14).toString()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: (index % 8) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group cursor-pointer"
      onClick={() => onOpen(perfume)}
    >
      <div
        className="relative rounded-2xl overflow-hidden flex flex-col
                   border border-[#d4af37]/15
                   bg-[#0a0800]
                   transition-all duration-500
                   hover:border-[#d4af37]/50
                   hover:shadow-[0_12px_56px_rgba(212,175,55,0.22),0_0_0_1px_rgba(212,175,55,0.12)]
                   hover:scale-[1.03]"
      >
        {/* ── Image area ─────────────────────────────────────────────── */}
        <div className="relative w-full aspect-[3/4] overflow-hidden flex-shrink-0 bg-[#0d0a00]">
          {/* Radial gold glow behind image */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 70% 60% at 50% 60%, rgba(212,175,55,0.20) 0%, rgba(0,0,0,0.97) 72%)',
            }}
          />

          {/* Product image */}
          {!imgError ? (
            <img
              src={imgSrc}
              alt={`${perfume.brand} — ${perfume.name}`}
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover z-10
                         transition-transform duration-700 group-hover:scale-[1.08]"
            />
          ) : (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-3">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center"
                style={{
                  border: '1px solid rgba(212,175,55,0.25)',
                  background: 'radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%)',
                }}
              >
                <span
                  className="text-2xl font-bold tracking-widest select-none"
                  style={{
                    fontFamily: 'var(--font-playfair), serif',
                    background: 'linear-gradient(135deg,#fffbe6 0%,#f4d58d 45%,#d4af37 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {monogram}
                </span>
              </div>
              <span
                className="text-[9px] tracking-[0.3em] uppercase"
                style={{ color: 'rgba(212,175,55,0.35)', fontFamily: 'var(--font-inter), sans-serif' }}
              >
                Decant Premium
              </span>
            </div>
          )}

          {/* Bottom gradient fade */}
          <div className="absolute bottom-0 inset-x-0 h-1/3 z-20 bg-gradient-to-t from-[#0a0800] to-transparent pointer-events-none" />


          {/* Heart / favourite icon — top right */}
          <button
            onClick={(e) => { e.stopPropagation() }}
            className="absolute top-3 right-3 z-30 w-7 h-7 flex items-center justify-center
                        rounded-full border border-white/20 bg-black/40 backdrop-blur-sm
                        hover:border-[#d4af37]/60 transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5 text-white/70" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
            </svg>
          </button>
        </div>

        {/* ── Card body ─────────────────────────────────────────────── */}
        <div className="px-4 pt-4 pb-5 flex flex-col gap-1 flex-1 relative">
          {/* Brand — gold small caps */}
          <p
            className="text-[#d4af37] text-[10px] uppercase"
            style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.22em' }}
          >
            {perfume.brand}
          </p>

          {/* Product name — white, Playfair */}
          <h3
            className="text-white leading-tight"
            style={{
              fontFamily: 'var(--font-playfair), serif',
              fontSize: 'clamp(0.85rem, 1.05vw, 0.98rem)',
              fontWeight: 600,
              letterSpacing: '0.01em',
            }}
          >
            {perfume.name}
          </h3>

          {/* Decant availability — premium lime accent */}
          <p
            className="text-[#ccff00] font-bold mt-1"
            style={{
              fontFamily: 'var(--font-inter), sans-serif',
              fontSize: '0.82rem',
              letterSpacing: '0.04em',
              textShadow: '0 0 12px rgba(204, 255, 0, 0.25)',
            }}
          >
            Disponible en 5ml & 10ml
          </p>

          {/* Circular golden arrow button — bottom right */}
          <button
            onClick={(e) => { e.stopPropagation(); onOpen(perfume) }}
            className="absolute bottom-4 right-4
                        w-9 h-9 rounded-full
                        bg-[#d4af37] hover:bg-[#f4d58d]
                        flex items-center justify-center
                        transition-all duration-300
                        shadow-[0_0_16px_rgba(212,175,55,0.35)]
                        hover:shadow-[0_0_28px_rgba(212,175,55,0.6)]"
          >
            <ArrowRight className="w-4 h-4 text-black" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// Product Detail Modal — Elysian "Prestige" style
// ─────────────────────────────────────────────────────────────────────────────
function ProductDetailModal({ perfume, onClose }: { perfume: Perfume; onClose: () => void }) {
  const [imgError, setImgError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/92 backdrop-blur-xl" />

      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto
                   rounded-3xl border border-[#d4af37]/25
                   bg-gradient-to-b from-[#0d0a00] to-[#060400]
                   shadow-[0_0_80px_rgba(212,175,55,0.15)]
                   scrollbar-hide"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full
                      border border-white/15 bg-black/50 backdrop-blur-sm
                      flex items-center justify-center
                      hover:border-[#d4af37]/50 transition-colors duration-200"
        >
          <X className="w-4 h-4 text-white/70" />
        </button>

        {/* Hero image + glow */}
        <div className="relative w-full h-72 md:h-96 overflow-hidden rounded-t-3xl bg-[#0a0800]">
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                'radial-gradient(ellipse 65% 70% at 50% 60%, rgba(212,175,55,0.28) 0%, rgba(0,0,0,0.97) 70%)',
            }}
          />
          {!imgError ? (
            <img
              src={perfume.image}
              alt={perfume.name}
              onError={() => setImgError(true)}
              className="absolute inset-0 w-full h-full object-cover z-10 opacity-90"
            />
          ) : (
            <div className="absolute inset-0 z-10 flex items-center justify-center">
              <span
                className="text-5xl font-bold"
                style={{
                  fontFamily: 'var(--font-playfair), serif',
                  background: 'linear-gradient(135deg,#fffbe6 0%,#d4af37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {perfume.brand[0]}
              </span>
            </div>
          )}
          <div className="absolute bottom-0 inset-x-0 h-1/2 z-20 bg-gradient-to-t from-[#0d0a00] to-transparent" />

          {/* Brand + Name overlay */}
          <div className="absolute bottom-6 left-8 z-30">
            <p
              className="text-[#d4af37] text-xs uppercase mb-1"
              style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.3em' }}
            >
              {perfume.brand}
            </p>
            <h2
              className="text-white text-2xl md:text-4xl font-bold leading-tight"
              style={{ fontFamily: 'var(--font-playfair), serif' }}
            >
              {perfume.name}
            </h2>
          </div>
        </div>

        {/* Content body */}
        <div className="p-8 md:p-12 space-y-10">

          {/* Notes Grid */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Notas de Salida', notes: perfume.topNotes, delay: 0 },
              { label: 'Notas de Corazón', notes: perfume.heartNotes, delay: 0.08 },
              { label: 'Notas de Fondo', notes: perfume.baseNotes, delay: 0.16 },
            ].map(({ label, notes, delay }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 0.5 }}
                className="rounded-xl border border-[#d4af37]/18 bg-[#d4af37]/[0.04] p-4 text-center"
              >
                <p
                  className="text-[#d4af37] text-[9px] uppercase mb-3"
                  style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.28em' }}
                >
                  {label}
                </p>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {notes.map((note) => (
                    <span
                      key={note}
                      className="px-2.5 py-1 rounded-full text-[10px] text-white/80
                                  border border-white/12 bg-white/[0.04]"
                      style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.05em' }}
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Thin separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent" />

          {/* Exhaustive description */}
          <div>
            <p
              className="text-[#d4af37] text-[10px] uppercase mb-4"
              style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.3em' }}
            >
              Perfil Olfativo
            </p>
            <p
              className="text-white/80 leading-relaxed"
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(1rem, 1.2vw, 1.1rem)',
                lineHeight: 1.8,
              }}
            >
              {perfume.exhaustiveDescription}
            </p>
          </div>

          {/* Occasion + Longevity */}
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
              <p
                className="text-[#d4af37] text-[9px] uppercase mb-2"
                style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.28em' }}
              >
                Ocasión
              </p>
              <p className="text-white text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                {perfume.occasion}
              </p>
            </div>
            <div className="rounded-xl border border-white/8 bg-white/[0.03] p-5">
              <p
                className="text-[#d4af37] text-[9px] uppercase mb-2"
                style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.28em' }}
              >
                Longevidad
              </p>
              <p className="text-white text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                {perfume.longevity}
              </p>
            </div>
          </div>

          {/* Thin separator */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/25 to-transparent" />

          {/* "Tradition & Innovation" block */}
          <div>
            <p
              className="text-[#d4af37] text-[10px] uppercase mb-6"
              style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.3em' }}
            >
              Tradición & Innovación
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: 'Exclusivamente Artesanal',
                  text: 'Cada decant es envasado individualmente con atomizador de alta precisión, garantizando la experiencia exacta del frasco original.',
                },
                {
                  title: 'Elegancia Artesanal',
                  text: 'Las fragancias árabes representan siglos de tradición olfativa. Cada una es una obra maestra destilada del arte perfumero del Medio Oriente.',
                },
                {
                  title: 'Edición Limitada de Lujo',
                  text: 'Stock cuidadosamente seleccionado para asegurar autenticidad total. Proveniencia directa y cadena de custodia verificada.',
                },
                {
                  title: 'Arte & Precisión',
                  text: 'El envasado de decants requiere precisión milimétrica. Nuestro proceso garantiza que cada mililitro preserve íntegramente la fórmula original.',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.45 }}
                  className="rounded-xl border border-[#d4af37]/12 bg-[#d4af37]/[0.03] p-5"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-[#d4af37]"
                      style={{ fontSize: '0.7rem', fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.12em' }}
                    >
                      ✦
                    </span>
                    <p
                      className="text-white text-xs font-semibold"
                      style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.05em' }}
                    >
                      {item.title}
                    </p>
                  </div>
                  <p
                    className="text-white/50 text-xs leading-relaxed"
                    style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                  >
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* WhatsApp CTA */}
          <motion.a
            href={`https://wa.me/5491162066609?text=Hola%20AuraDecant!%20Quiero%20info%20sobre%20*${encodeURIComponent(perfume.name)}*`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="btn-gold w-full flex items-center justify-center gap-3 !py-4"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.119.554 4.106 1.524 5.823L.057 23.392a.75.75 0 0 0 .921.921l5.569-1.467A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.898 0-3.671-.524-5.178-1.434l-.372-.22-3.307.87.885-3.229-.235-.38A9.945 9.945 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Consultar Disponibilidad por WhatsApp
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// ProductsSection — main export
// ─────────────────────────────────────────────────────────────────────────────
export default function ProductsSection() {
  const [selectedPerfume, setSelectedPerfume] = useState<Perfume | null>(null)

  return (
    <>
      <section id="products" className="py-24 md:py-36 px-6 relative overflow-hidden">

        {/* ── Top section separator ──────────────────────────────────────── */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

        {/* Section-level spotlight */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(circle 900px at 50% 30%, rgba(212,175,55,0.09) 0%, rgba(0,0,0,0) 70%)',
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">

          {/* ── Section Header ─────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <p
              className="text-[#d4af37] mb-4 text-xs uppercase"
              style={{ fontFamily: 'var(--font-inter), sans-serif', letterSpacing: '0.35em' }}
            >
              Colección Firma · {perfumes.length} Fragancias
            </p>
            <h2
              className="text-white mb-5"
              style={{
                fontFamily: 'var(--font-playfair), serif',
                fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Eleva tus Sentidos con{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg,#fffbe6 0%,#f4d58d 45%,#d4af37 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Elegancia Árabe
              </span>
            </h2>
            <p
              className="text-white/45 max-w-xl mx-auto leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), sans-serif', fontSize: '0.875rem', letterSpacing: '0.02em' }}
            >
              Bienvenido al epítome del lujo olfativo — la Colección Firma de AroMatch.
              Fragancias seleccionadas por nuestro equipo. Cada decant en frasco de vidrio con atomizador premium.
            </p>
          </motion.div>

          {/* ── 4-column grid ──────────────────────────────────────────── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {perfumes.map((perfume, index) => (
              <PerfumeCard
                key={perfume.image}
                perfume={perfume}
                index={index}
                onOpen={setSelectedPerfume}
              />
            ))}
          </div>

          {/* ── Stats strip ────────────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-t border-b border-white/[0.06]"
          >
            {[
              { value: '16',   label: 'Fragancias en Stock'      },
              { value: '100%', label: 'Autenticidad Garantizada' },
              { value: '48h',  label: 'Envío Express'            },
              { value: '5★',   label: 'Calificación Promedio'    },
            ].map((stat, i) => (
              <div key={stat.label} className="text-center">
                <motion.p
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-playfair), serif',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    background: 'linear-gradient(135deg,#fffbe6 0%,#f4d58d 45%,#d4af37 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {stat.value}
                </motion.p>
                <p
                  className="text-white/35"
                  style={{
                    fontFamily: 'var(--font-inter), sans-serif',
                    fontSize: '12px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Bottom section separator ───────────────────────────────── */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      </section>

      {/* ── Product Detail Modal ──────────────────────────────────────── */}
      <AnimatePresence>
        {selectedPerfume && (
          <ProductDetailModal
            perfume={selectedPerfume}
            onClose={() => setSelectedPerfume(null)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

```

### src\components\theme-provider.tsx
```javascript
'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

```

### src\components\ui\accordion.tsx
```javascript
'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn('border-b last:border-b-0', className)}
      {...props}
    />
  )
}

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          'focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none hover:underline focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180',
          className,
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-muted-foreground pointer-events-none size-4 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div className={cn('pt-0 pb-4', className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }

```

### src\components\ui\alert-dialog.tsx
```javascript
'use client'

import * as React from 'react'
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog'

import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

function AlertDialog({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Root>) {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />
}

function AlertDialogTrigger({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Trigger>) {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  )
}

function AlertDialogPortal({
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Portal>) {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  )
}

function AlertDialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Overlay>) {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogContent({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Content>) {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  )
}

function AlertDialogHeader({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function AlertDialogFooter({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  )
}

function AlertDialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Title>) {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn('text-lg font-semibold', className)}
      {...props}
    />
  )
}

function AlertDialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Description>) {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function AlertDialogAction({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Action>) {
  return (
    <AlertDialogPrimitive.Action
      className={cn(buttonVariants(), className)}
      {...props}
    />
  )
}

function AlertDialogCancel({
  className,
  ...props
}: React.ComponentProps<typeof AlertDialogPrimitive.Cancel>) {
  return (
    <AlertDialogPrimitive.Cancel
      className={cn(buttonVariants({ variant: 'outline' }), className)}
      {...props}
    />
  )
}

export {
  AlertDialog,
  AlertDialogPortal,
  AlertDialogOverlay,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
}

```

### src\components\ui\alert.tsx
```javascript
import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm grid has-[>svg]:grid-cols-[calc(var(--spacing)*4)_1fr] grid-cols-[0_1fr] has-[>svg]:gap-x-3 gap-y-0.5 items-start [&>svg]:size-4 [&>svg]:translate-y-0.5 [&>svg]:text-current',
  {
    variants: {
      variant: {
        default: 'bg-card text-card-foreground',
        destructive:
          'text-destructive bg-card [&>svg]:text-current *:data-[slot=alert-description]:text-destructive/90',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Alert({
  className,
  variant,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof alertVariants>) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-title"
      className={cn(
        'col-start-2 line-clamp-1 min-h-4 font-medium tracking-tight',
        className,
      )}
      {...props}
    />
  )
}

function AlertDescription({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="alert-description"
      className={cn(
        'text-muted-foreground col-start-2 grid justify-items-start gap-1 text-sm [&_p]:leading-relaxed',
        className,
      )}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }

```

### src\components\ui\aspect-ratio.tsx
```javascript
'use client'

import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio'

function AspectRatio({
  ...props
}: React.ComponentProps<typeof AspectRatioPrimitive.Root>) {
  return <AspectRatioPrimitive.Root data-slot="aspect-ratio" {...props} />
}

export { AspectRatio }

```

### src\components\ui\avatar.tsx
```javascript
'use client'

import * as React from 'react'
import * as AvatarPrimitive from '@radix-ui/react-avatar'

import { cn } from '@/lib/utils'

function Avatar({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      {...props}
    />
  )
}

function AvatarImage({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  )
}

function AvatarFallback({
  className,
  ...props
}: React.ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className,
      )}
      {...props}
    />
  )
}

export { Avatar, AvatarImage, AvatarFallback }

```

### src\components\ui\badge.tsx
```javascript
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
        destructive:
          'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<'span'> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }

```

### src\components\ui\breadcrumb.tsx
```javascript
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { ChevronRight, MoreHorizontal } from 'lucide-react'

import { cn } from '@/lib/utils'

function Breadcrumb({ ...props }: React.ComponentProps<'nav'>) {
  return <nav aria-label="breadcrumb" data-slot="breadcrumb" {...props} />
}

function BreadcrumbList({ className, ...props }: React.ComponentProps<'ol'>) {
  return (
    <ol
      data-slot="breadcrumb-list"
      className={cn(
        'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
        className,
      )}
      {...props}
    />
  )
}

function BreadcrumbItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-item"
      className={cn('inline-flex items-center gap-1.5', className)}
      {...props}
    />
  )
}

function BreadcrumbLink({
  asChild,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="breadcrumb-link"
      className={cn('hover:text-foreground transition-colors', className)}
      {...props}
    />
  )
}

function BreadcrumbPage({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-page"
      role="link"
      aria-disabled="true"
      aria-current="page"
      className={cn('text-foreground font-normal', className)}
      {...props}
    />
  )
}

function BreadcrumbSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="breadcrumb-separator"
      role="presentation"
      aria-hidden="true"
      className={cn('[&>svg]:size-3.5', className)}
      {...props}
    >
      {children ?? <ChevronRight />}
    </li>
  )
}

function BreadcrumbEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="breadcrumb-ellipsis"
      role="presentation"
      aria-hidden="true"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontal className="size-4" />
      <span className="sr-only">More</span>
    </span>
  )
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
}

```

### src\components\ui\button-group.tsx
```javascript
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

const buttonGroupVariants = cva(
  "flex w-fit items-stretch [&>*]:focus-visible:z-10 [&>*]:focus-visible:relative [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          '[&>*:not(:first-child)]:rounded-l-none [&>*:not(:first-child)]:border-l-0 [&>*:not(:last-child)]:rounded-r-none',
        vertical:
          'flex-col [&>*:not(:first-child)]:rounded-t-none [&>*:not(:first-child)]:border-t-0 [&>*:not(:last-child)]:rounded-b-none',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
)

function ButtonGroup({
  className,
  orientation,
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof buttonGroupVariants>) {
  return (
    <div
      role="group"
      data-slot="button-group"
      data-orientation={orientation}
      className={cn(buttonGroupVariants({ orientation }), className)}
      {...props}
    />
  )
}

function ButtonGroupText({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & {
  asChild?: boolean
}) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      className={cn(
        "bg-muted flex items-center gap-2 rounded-md border px-4 text-sm font-medium shadow-xs [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function ButtonGroupSeparator({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        'bg-input relative !m-0 self-stretch data-[orientation=vertical]:h-auto',
        className,
      )}
      {...props}
    />
  )
}

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
}

```

### src\components\ui\button.tsx
```javascript
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
        outline:
          'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost:
          'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9',
        'icon-sm': 'size-8',
        'icon-lg': 'size-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }

```

### src\components\ui\calendar.tsx
```javascript
'use client'

import * as React from 'react'
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
import { DayButton, DayPicker, getDefaultClassNames } from 'react-day-picker'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  captionLayout = 'label',
  buttonVariant = 'ghost',
  formatters,
  components,
  ...props
}: React.ComponentProps<typeof DayPicker> & {
  buttonVariant?: React.ComponentProps<typeof Button>['variant']
}) {
  const defaultClassNames = getDefaultClassNames()

  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn(
        'bg-background group/calendar p-3 [--cell-size:--spacing(8)] [[data-slot=card-content]_&]:bg-transparent [[data-slot=popover-content]_&]:bg-transparent',
        String.raw`rtl:**:[.rdp-button\_next>svg]:rotate-180`,
        String.raw`rtl:**:[.rdp-button\_previous>svg]:rotate-180`,
        className,
      )}
      captionLayout={captionLayout}
      formatters={{
        formatMonthDropdown: (date) =>
          date.toLocaleString('default', { month: 'short' }),
        ...formatters,
      }}
      classNames={{
        root: cn('w-fit', defaultClassNames.root),
        months: cn(
          'flex gap-4 flex-col md:flex-row relative',
          defaultClassNames.months,
        ),
        month: cn('flex flex-col w-full gap-4', defaultClassNames.month),
        nav: cn(
          'flex items-center gap-1 w-full absolute top-0 inset-x-0 justify-between',
          defaultClassNames.nav,
        ),
        button_previous: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.button_previous,
        ),
        button_next: cn(
          buttonVariants({ variant: buttonVariant }),
          'size-(--cell-size) aria-disabled:opacity-50 p-0 select-none',
          defaultClassNames.button_next,
        ),
        month_caption: cn(
          'flex items-center justify-center h-(--cell-size) w-full px-(--cell-size)',
          defaultClassNames.month_caption,
        ),
        dropdowns: cn(
          'w-full flex items-center text-sm font-medium justify-center h-(--cell-size) gap-1.5',
          defaultClassNames.dropdowns,
        ),
        dropdown_root: cn(
          'relative has-focus:border-ring border border-input shadow-xs has-focus:ring-ring/50 has-focus:ring-[3px] rounded-md',
          defaultClassNames.dropdown_root,
        ),
        dropdown: cn(
          'absolute bg-popover inset-0 opacity-0',
          defaultClassNames.dropdown,
        ),
        caption_label: cn(
          'select-none font-medium',
          captionLayout === 'label'
            ? 'text-sm'
            : 'rounded-md pl-2 pr-1 flex items-center gap-1 text-sm h-8 [&>svg]:text-muted-foreground [&>svg]:size-3.5',
          defaultClassNames.caption_label,
        ),
        table: 'w-full border-collapse',
        weekdays: cn('flex', defaultClassNames.weekdays),
        weekday: cn(
          'text-muted-foreground rounded-md flex-1 font-normal text-[0.8rem] select-none',
          defaultClassNames.weekday,
        ),
        week: cn('flex w-full mt-2', defaultClassNames.week),
        week_number_header: cn(
          'select-none w-(--cell-size)',
          defaultClassNames.week_number_header,
        ),
        week_number: cn(
          'text-[0.8rem] select-none text-muted-foreground',
          defaultClassNames.week_number,
        ),
        day: cn(
          'relative w-full h-full p-0 text-center [&:first-child[data-selected=true]_button]:rounded-l-md [&:last-child[data-selected=true]_button]:rounded-r-md group/day aspect-square select-none',
          defaultClassNames.day,
        ),
        range_start: cn(
          'rounded-l-md bg-accent',
          defaultClassNames.range_start,
        ),
        range_middle: cn('rounded-none', defaultClassNames.range_middle),
        range_end: cn('rounded-r-md bg-accent', defaultClassNames.range_end),
        today: cn(
          'bg-accent text-accent-foreground rounded-md data-[selected=true]:rounded-none',
          defaultClassNames.today,
        ),
        outside: cn(
          'text-muted-foreground aria-selected:text-muted-foreground',
          defaultClassNames.outside,
        ),
        disabled: cn(
          'text-muted-foreground opacity-50',
          defaultClassNames.disabled,
        ),
        hidden: cn('invisible', defaultClassNames.hidden),
        ...classNames,
      }}
      components={{
        Root: ({ className, rootRef, ...props }) => {
          return (
            <div
              data-slot="calendar"
              ref={rootRef}
              className={cn(className)}
              {...props}
            />
          )
        },
        Chevron: ({ className, orientation, ...props }) => {
          if (orientation === 'left') {
            return (
              <ChevronLeftIcon className={cn('size-4', className)} {...props} />
            )
          }

          if (orientation === 'right') {
            return (
              <ChevronRightIcon
                className={cn('size-4', className)}
                {...props}
              />
            )
          }

          return (
            <ChevronDownIcon className={cn('size-4', className)} {...props} />
          )
        },
        DayButton: CalendarDayButton,
        WeekNumber: ({ children, ...props }) => {
          return (
            <td {...props}>
              <div className="flex size-(--cell-size) items-center justify-center text-center">
                {children}
              </div>
            </td>
          )
        },
        ...components,
      }}
      {...props}
    />
  )
}

function CalendarDayButton({
  className,
  day,
  modifiers,
  ...props
}: React.ComponentProps<typeof DayButton>) {
  const defaultClassNames = getDefaultClassNames()

  const ref = React.useRef<HTMLButtonElement>(null)
  React.useEffect(() => {
    if (modifiers.focused) ref.current?.focus()
  }, [modifiers.focused])

  return (
    <Button
      ref={ref}
      variant="ghost"
      size="icon"
      data-day={day.date.toLocaleDateString()}
      data-selected-single={
        modifiers.selected &&
        !modifiers.range_start &&
        !modifiers.range_end &&
        !modifiers.range_middle
      }
      data-range-start={modifiers.range_start}
      data-range-end={modifiers.range_end}
      data-range-middle={modifiers.range_middle}
      className={cn(
        'data-[selected-single=true]:bg-primary data-[selected-single=true]:text-primary-foreground data-[range-middle=true]:bg-accent data-[range-middle=true]:text-accent-foreground data-[range-start=true]:bg-primary data-[range-start=true]:text-primary-foreground data-[range-end=true]:bg-primary data-[range-end=true]:text-primary-foreground group-data-[focused=true]/day:border-ring group-data-[focused=true]/day:ring-ring/50 dark:hover:text-accent-foreground flex aspect-square size-auto w-full min-w-(--cell-size) flex-col gap-1 leading-none font-normal group-data-[focused=true]/day:relative group-data-[focused=true]/day:z-10 group-data-[focused=true]/day:ring-[3px] data-[range-end=true]:rounded-md data-[range-end=true]:rounded-r-md data-[range-middle=true]:rounded-none data-[range-start=true]:rounded-md data-[range-start=true]:rounded-l-md [&>span]:text-xs [&>span]:opacity-70',
        defaultClassNames.day,
        className,
      )}
      {...props}
    />
  )
}

export { Calendar, CalendarDayButton }

```

### src\components\ui\card.tsx
```javascript
import * as React from 'react'

import { cn } from '@/lib/utils'

function Card({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card"
      className={cn(
        'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
        className,
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        '@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
        className,
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-title"
      className={cn('leading-none font-semibold', className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        'col-start-2 row-span-2 row-start-1 self-start justify-self-end',
        className,
      )}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-content"
      className={cn('px-6', className)}
      {...props}
    />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="card-footer"
      className={cn('flex items-center px-6 [.border-t]:pt-6', className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
}

```

### src\components\ui\carousel.tsx
```javascript
'use client'

import * as React from 'react'
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
  opts?: CarouselOptions
  plugins?: CarouselPlugin
  orientation?: 'horizontal' | 'vertical'
  setApi?: (api: CarouselApi) => void
}

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0]
  api: ReturnType<typeof useEmblaCarousel>[1]
  scrollPrev: () => void
  scrollNext: () => void
  canScrollPrev: boolean
  canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)

function useCarousel() {
  const context = React.useContext(CarouselContext)

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return context
}

function Carousel({
  orientation = 'horizontal',
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & CarouselProps) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  )
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(false)

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return
    setCanScrollPrev(api.canScrollPrev())
    setCanScrollNext(api.canScrollNext())
  }, [])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        scrollPrev()
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        scrollNext()
      }
    },
    [scrollPrev, scrollNext],
  )

  React.useEffect(() => {
    if (!api || !setApi) return
    setApi(api)
  }, [api, setApi])

  React.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)

    return () => {
      api?.off('select', onSelect)
    }
  }, [api, onSelect])

  return (
    <CarouselContext.Provider
      value={{
        carouselRef,
        api: api,
        opts,
        orientation:
          orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext,
      }}
    >
      <div
        onKeyDownCapture={handleKeyDown}
        className={cn('relative', className)}
        role="region"
        aria-roledescription="carousel"
        data-slot="carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  )
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel()

  return (
    <div
      ref={carouselRef}
      className="overflow-hidden"
      data-slot="carousel-content"
    >
      <div
        className={cn(
          'flex',
          orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation } = useCarousel()

  return (
    <div
      role="group"
      aria-roledescription="slide"
      data-slot="carousel-item"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      {...props}
    />
  )
}

function CarouselPrevious({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel()

  return (
    <Button
      data-slot="carousel-previous"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -left-12 -translate-y-1/2'
          : '-top-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  )
}

function CarouselNext({
  className,
  variant = 'outline',
  size = 'icon',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { orientation, scrollNext, canScrollNext } = useCarousel()

  return (
    <Button
      data-slot="carousel-next"
      variant={variant}
      size={size}
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 -right-12 -translate-y-1/2'
          : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  )
}

export {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
}

```

### src\components\ui\chart.tsx
```javascript
'use client'

import * as React from 'react'
import * as RechartsPrimitive from 'recharts'

import { cn } from '@/lib/utils'

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: '', dark: '.dark' } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error('useChart must be used within a <ChartContainer />')
  }

  return context
}

function ChartContainer({
  id,
  className,
  children,
  config,
  ...props
}: React.ComponentProps<'div'> & {
  config: ChartConfig
  children: React.ComponentProps<
    typeof RechartsPrimitive.ResponsiveContainer
  >['children']
}) {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, '')}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-slot="chart"
        data-chart={chartId}
        className={cn(
          "[&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border flex aspect-video justify-center text-xs [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-hidden [&_.recharts-sector]:outline-hidden [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-surface]:outline-hidden",
          className,
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
}

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([, config]) => config.theme || config.color,
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join('\n')}
}
`,
          )
          .join('\n'),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

function ChartTooltipContent({
  active,
  payload,
  className,
  indicator = 'dot',
  hideLabel = false,
  hideIndicator = false,
  label,
  labelFormatter,
  labelClassName,
  formatter,
  color,
  nameKey,
  labelKey,
}: React.ComponentProps<typeof RechartsPrimitive.Tooltip> &
  React.ComponentProps<'div'> & {
    hideLabel?: boolean
    hideIndicator?: boolean
    indicator?: 'line' | 'dot' | 'dashed'
    nameKey?: string
    labelKey?: string
  }) {
  const { config } = useChart()

  const tooltipLabel = React.useMemo(() => {
    if (hideLabel || !payload?.length) {
      return null
    }

    const [item] = payload
    const key = `${labelKey || item?.dataKey || item?.name || 'value'}`
    const itemConfig = getPayloadConfigFromPayload(config, item, key)
    const value =
      !labelKey && typeof label === 'string'
        ? config[label as keyof typeof config]?.label || label
        : itemConfig?.label

    if (labelFormatter) {
      return (
        <div className={cn('font-medium', labelClassName)}>
          {labelFormatter(value, payload)}
        </div>
      )
    }

    if (!value) {
      return null
    }

    return <div className={cn('font-medium', labelClassName)}>{value}</div>
  }, [
    label,
    labelFormatter,
    payload,
    hideLabel,
    labelClassName,
    config,
    labelKey,
  ])

  if (!active || !payload?.length) {
    return null
  }

  const nestLabel = payload.length === 1 && indicator !== 'dot'

  return (
    <div
      className={cn(
        'border-border/50 bg-background grid min-w-[8rem] items-start gap-1.5 rounded-lg border px-2.5 py-1.5 text-xs shadow-xl',
        className,
      )}
    >
      {!nestLabel ? tooltipLabel : null}
      <div className="grid gap-1.5">
        {payload.map((item, index) => {
          const key = `${nameKey || item.name || item.dataKey || 'value'}`
          const itemConfig = getPayloadConfigFromPayload(config, item, key)
          const indicatorColor = color || item.payload.fill || item.color

          return (
            <div
              key={item.dataKey}
              className={cn(
                '[&>svg]:text-muted-foreground flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5',
                indicator === 'dot' && 'items-center',
              )}
            >
              {formatter && item?.value !== undefined && item.name ? (
                formatter(item.value, item.name, item, index, item.payload)
              ) : (
                <>
                  {itemConfig?.icon ? (
                    <itemConfig.icon />
                  ) : (
                    !hideIndicator && (
                      <div
                        className={cn(
                          'shrink-0 rounded-[2px] border-(--color-border) bg-(--color-bg)',
                          {
                            'h-2.5 w-2.5': indicator === 'dot',
                            'w-1': indicator === 'line',
                            'w-0 border-[1.5px] border-dashed bg-transparent':
                              indicator === 'dashed',
                            'my-0.5': nestLabel && indicator === 'dashed',
                          },
                        )}
                        style={
                          {
                            '--color-bg': indicatorColor,
                            '--color-border': indicatorColor,
                          } as React.CSSProperties
                        }
                      />
                    )
                  )}
                  <div
                    className={cn(
                      'flex flex-1 justify-between leading-none',
                      nestLabel ? 'items-end' : 'items-center',
                    )}
                  >
                    <div className="grid gap-1.5">
                      {nestLabel ? tooltipLabel : null}
                      <span className="text-muted-foreground">
                        {itemConfig?.label || item.name}
                      </span>
                    </div>
                    {item.value && (
                      <span className="text-foreground font-mono font-medium tabular-nums">
                        {item.value.toLocaleString()}
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

const ChartLegend = RechartsPrimitive.Legend

function ChartLegendContent({
  className,
  hideIcon = false,
  payload,
  verticalAlign = 'bottom',
  nameKey,
}: React.ComponentProps<'div'> &
  Pick<RechartsPrimitive.LegendProps, 'payload' | 'verticalAlign'> & {
    hideIcon?: boolean
    nameKey?: string
  }) {
  const { config } = useChart()

  if (!payload?.length) {
    return null
  }

  return (
    <div
      className={cn(
        'flex items-center justify-center gap-4',
        verticalAlign === 'top' ? 'pb-3' : 'pt-3',
        className,
      )}
    >
      {payload.map((item) => {
        const key = `${nameKey || item.dataKey || 'value'}`
        const itemConfig = getPayloadConfigFromPayload(config, item, key)

        return (
          <div
            key={item.value}
            className={
              '[&>svg]:text-muted-foreground flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3'
            }
          >
            {itemConfig?.icon && !hideIcon ? (
              <itemConfig.icon />
            ) : (
              <div
                className="h-2 w-2 shrink-0 rounded-[2px]"
                style={{
                  backgroundColor: item.color,
                }}
              />
            )}
            {itemConfig?.label}
          </div>
        )
      })}
    </div>
  )
}

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string,
) {
  if (typeof payload !== 'object' || payload === null) {
    return undefined
  }

  const payloadPayload =
    'payload' in payload &&
    typeof payload.payload === 'object' &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === 'string'
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === 'string'
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}

```

### src\components\ui\checkbox.tsx
```javascript
'use client'

import * as React from 'react'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="flex items-center justify-center text-current transition-none"
      >
        <CheckIcon className="size-3.5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}

export { Checkbox }

```

### src\components\ui\collapsible.tsx
```javascript
'use client'

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

function Collapsible({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return <CollapsiblePrimitive.Root data-slot="collapsible" {...props} />
}

function CollapsibleTrigger({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger
      data-slot="collapsible-trigger"
      {...props}
    />
  )
}

function CollapsibleContent({
  ...props
}: React.ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot="collapsible-content"
      {...props}
    />
  )
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent }

```

### src\components\ui\command.tsx
```javascript
'use client'

import * as React from 'react'
import { Command as CommandPrimitive } from 'cmdk'
import { SearchIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        'bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md',
        className,
      )}
      {...props}
    />
  )
}

function CommandDialog({
  title = 'Command Palette',
  description = 'Search for a command to run...',
  children,
  className,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof Dialog> & {
  title?: string
  description?: string
  className?: string
  showCloseButton?: boolean
}) {
  return (
    <Dialog {...props}>
      <DialogHeader className="sr-only">
        <DialogTitle>{title}</DialogTitle>
        <DialogDescription>{description}</DialogDescription>
      </DialogHeader>
      <DialogContent
        className={cn('overflow-hidden p-0', className)}
        showCloseButton={showCloseButton}
      >
        <Command className="[&_[cmdk-group-heading]]:text-muted-foreground **:data-[slot=command-input-wrapper]:h-12 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group]]:px-2 [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0 [&_[cmdk-input-wrapper]_svg]:h-5 [&_[cmdk-input-wrapper]_svg]:w-5 [&_[cmdk-input]]:h-12 [&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-3 [&_[cmdk-item]_svg]:h-5 [&_[cmdk-item]_svg]:w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  )
}

function CommandInput({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Input>) {
  return (
    <div
      data-slot="command-input-wrapper"
      className="flex h-9 items-center gap-2 border-b px-3"
    >
      <SearchIcon className="size-4 shrink-0 opacity-50" />
      <CommandPrimitive.Input
        data-slot="command-input"
        className={cn(
          'placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        'max-h-[300px] scroll-py-1 overflow-x-hidden overflow-y-auto',
        className,
      )}
      {...props}
    />
  )
}

function CommandEmpty({
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Empty>) {
  return (
    <CommandPrimitive.Empty
      data-slot="command-empty"
      className="py-6 text-center text-sm"
      {...props}
    />
  )
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn(
        'text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium',
        className,
      )}
      {...props}
    />
  )
}

function CommandSeparator({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Separator>) {
  return (
    <CommandPrimitive.Separator
      data-slot="command-separator"
      className={cn('bg-border -mx-1 h-px', className)}
      {...props}
    />
  )
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
}

```

### src\components\ui\context-menu.tsx
```javascript
'use client'

import * as React from 'react'
import * as ContextMenuPrimitive from '@radix-ui/react-context-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function ContextMenu({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Root>) {
  return <ContextMenuPrimitive.Root data-slot="context-menu" {...props} />
}

function ContextMenuTrigger({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Trigger>) {
  return (
    <ContextMenuPrimitive.Trigger data-slot="context-menu-trigger" {...props} />
  )
}

function ContextMenuGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Group>) {
  return (
    <ContextMenuPrimitive.Group data-slot="context-menu-group" {...props} />
  )
}

function ContextMenuPortal({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Portal>) {
  return (
    <ContextMenuPrimitive.Portal data-slot="context-menu-portal" {...props} />
  )
}

function ContextMenuSub({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Sub>) {
  return <ContextMenuPrimitive.Sub data-slot="context-menu-sub" {...props} />
}

function ContextMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioGroup>) {
  return (
    <ContextMenuPrimitive.RadioGroup
      data-slot="context-menu-radio-group"
      {...props}
    />
  )
}

function ContextMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.SubTrigger
      data-slot="context-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto" />
    </ContextMenuPrimitive.SubTrigger>
  )
}

function ContextMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.SubContent>) {
  return (
    <ContextMenuPrimitive.SubContent
      data-slot="context-menu-sub-content"
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Content>) {
  return (
    <ContextMenuPrimitive.Portal>
      <ContextMenuPrimitive.Content
        data-slot="context-menu-content"
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-context-menu-content-available-height) min-w-[8rem] origin-(--radix-context-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
          className,
        )}
        {...props}
      />
    </ContextMenuPrimitive.Portal>
  )
}

function ContextMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <ContextMenuPrimitive.Item
      data-slot="context-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.CheckboxItem>) {
  return (
    <ContextMenuPrimitive.CheckboxItem
      data-slot="context-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.CheckboxItem>
  )
}

function ContextMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.RadioItem>) {
  return (
    <ContextMenuPrimitive.RadioItem
      data-slot="context-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <ContextMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </ContextMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </ContextMenuPrimitive.RadioItem>
  )
}

function ContextMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <ContextMenuPrimitive.Label
      data-slot="context-menu-label"
      data-inset={inset}
      className={cn(
        'text-foreground px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function ContextMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof ContextMenuPrimitive.Separator>) {
  return (
    <ContextMenuPrimitive.Separator
      data-slot="context-menu-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function ContextMenuShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="context-menu-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

export {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuCheckboxItem,
  ContextMenuRadioItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuGroup,
  ContextMenuPortal,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuRadioGroup,
}

```

### src\components\ui\dialog.tsx
```javascript
'use client'

import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean
}) {
  return (
    <DialogPortal data-slot="dialog-portal">
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
          className,
        )}
        {...props}
      >
        {children}
        {showCloseButton && (
          <DialogPrimitive.Close
            data-slot="dialog-close"
            className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4"
          >
            <XIcon />
            <span className="sr-only">Close</span>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  )
}

function DialogHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-header"
      className={cn('flex flex-col gap-2 text-center sm:text-left', className)}
      {...props}
    />
  )
}

function DialogFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  )
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn('text-lg leading-none font-semibold', className)}
      {...props}
    />
  )
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
}

```

### src\components\ui\drawer.tsx
```javascript
'use client'

import * as React from 'react'
import { Drawer as DrawerPrimitive } from 'vaul'

import { cn } from '@/lib/utils'

function Drawer({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root>) {
  return <DrawerPrimitive.Root data-slot="drawer" {...props} />
}

function DrawerTrigger({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Trigger>) {
  return <DrawerPrimitive.Trigger data-slot="drawer-trigger" {...props} />
}

function DrawerPortal({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Portal>) {
  return <DrawerPrimitive.Portal data-slot="drawer-portal" {...props} />
}

function DrawerClose({
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Close>) {
  return <DrawerPrimitive.Close data-slot="drawer-close" {...props} />
}

function DrawerOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Overlay>) {
  return (
    <DrawerPrimitive.Overlay
      data-slot="drawer-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

function DrawerContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Content>) {
  return (
    <DrawerPortal data-slot="drawer-portal">
      <DrawerOverlay />
      <DrawerPrimitive.Content
        data-slot="drawer-content"
        className={cn(
          'group/drawer-content bg-background fixed z-50 flex h-auto flex-col',
          'data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:mb-24 data-[vaul-drawer-direction=top]:max-h-[80vh] data-[vaul-drawer-direction=top]:rounded-b-lg data-[vaul-drawer-direction=top]:border-b',
          'data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:mt-24 data-[vaul-drawer-direction=bottom]:max-h-[80vh] data-[vaul-drawer-direction=bottom]:rounded-t-lg data-[vaul-drawer-direction=bottom]:border-t',
          'data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-3/4 data-[vaul-drawer-direction=right]:border-l data-[vaul-drawer-direction=right]:sm:max-w-sm',
          'data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-3/4 data-[vaul-drawer-direction=left]:border-r data-[vaul-drawer-direction=left]:sm:max-w-sm',
          className,
        )}
        {...props}
      >
        <div className="bg-muted mx-auto mt-4 hidden h-2 w-[100px] shrink-0 rounded-full group-data-[vaul-drawer-direction=bottom]/drawer-content:block" />
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  )
}

function DrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-header"
      className={cn(
        'flex flex-col gap-0.5 p-4 group-data-[vaul-drawer-direction=bottom]/drawer-content:text-center group-data-[vaul-drawer-direction=top]/drawer-content:text-center md:gap-1.5 md:text-left',
        className,
      )}
      {...props}
    />
  )
}

function DrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="drawer-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function DrawerTitle({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Title>) {
  return (
    <DrawerPrimitive.Title
      data-slot="drawer-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  )
}

function DrawerDescription({
  className,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Description>) {
  return (
    <DrawerPrimitive.Description
      data-slot="drawer-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
}

```

### src\components\ui\dropdown-menu.tsx
```javascript
'use client'

import * as React from 'react'
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function DropdownMenu({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return <DropdownMenuPrimitive.Root data-slot="dropdown-menu" {...props} />
}

function DropdownMenuPortal({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot="dropdown-menu-portal" {...props} />
  )
}

function DropdownMenuTrigger({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger
      data-slot="dropdown-menu-trigger"
      {...props}
    />
  )
}

function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Content>) {
  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot="dropdown-menu-content"
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  )
}

function DropdownMenuGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot="dropdown-menu-group" {...props} />
  )
}

function DropdownMenuItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <DropdownMenuPrimitive.Item
      data-slot="dropdown-menu-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>) {
  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot="dropdown-menu-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  )
}

function DropdownMenuRadioGroup({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup
      data-slot="dropdown-menu-radio-group"
      {...props}
    />
  )
}

function DropdownMenuRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>) {
  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot="dropdown-menu-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  )
}

function DropdownMenuLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.Label
      data-slot="dropdown-menu-label"
      data-inset={inset}
      className={cn(
        'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSeparator({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>) {
  return (
    <DropdownMenuPrimitive.Separator
      data-slot="dropdown-menu-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function DropdownMenuShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="dropdown-menu-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

function DropdownMenuSub({
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return <DropdownMenuPrimitive.Sub data-slot="dropdown-menu-sub" {...props} />
}

function DropdownMenuSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot="dropdown-menu-sub-trigger"
      data-inset={inset}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto size-4" />
    </DropdownMenuPrimitive.SubTrigger>
  )
}

function DropdownMenuSubContent({
  className,
  ...props
}: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>) {
  return (
    <DropdownMenuPrimitive.SubContent
      data-slot="dropdown-menu-sub-content"
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className,
      )}
      {...props}
    />
  )
}

export {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
}

```

### src\components\ui\empty.tsx
```javascript
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

function Empty({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty"
      className={cn(
        'flex min-w-0 flex-1 flex-col items-center justify-center gap-6 rounded-lg border-dashed p-6 text-center text-balance md:p-12',
        className,
      )}
      {...props}
    />
  )
}

function EmptyHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-header"
      className={cn(
        'flex max-w-sm flex-col items-center gap-2 text-center',
        className,
      )}
      {...props}
    />
  )
}

const emptyMediaVariants = cva(
  'flex shrink-0 items-center justify-center mb-2 [&_svg]:pointer-events-none [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "bg-muted text-foreground flex size-10 shrink-0 items-center justify-center rounded-lg [&_svg:not([class*='size-'])]:size-6",
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function EmptyMedia({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof emptyMediaVariants>) {
  return (
    <div
      data-slot="empty-icon"
      data-variant={variant}
      className={cn(emptyMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function EmptyTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-title"
      className={cn('text-lg font-medium tracking-tight', className)}
      {...props}
    />
  )
}

function EmptyDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <div
      data-slot="empty-description"
      className={cn(
        'text-muted-foreground [&>a:hover]:text-primary text-sm/relaxed [&>a]:underline [&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function EmptyContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="empty-content"
      className={cn(
        'flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance',
        className,
      )}
      {...props}
    />
  )
}

export {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  EmptyMedia,
}

```

### src\components\ui\field.tsx
```javascript
'use client'

import { useMemo } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'

function FieldSet({ className, ...props }: React.ComponentProps<'fieldset'>) {
  return (
    <fieldset
      data-slot="field-set"
      className={cn(
        'flex flex-col gap-6',
        'has-[>[data-slot=checkbox-group]]:gap-3 has-[>[data-slot=radio-group]]:gap-3',
        className,
      )}
      {...props}
    />
  )
}

function FieldLegend({
  className,
  variant = 'legend',
  ...props
}: React.ComponentProps<'legend'> & { variant?: 'legend' | 'label' }) {
  return (
    <legend
      data-slot="field-legend"
      data-variant={variant}
      className={cn(
        'mb-3 font-medium',
        'data-[variant=legend]:text-base',
        'data-[variant=label]:text-sm',
        className,
      )}
      {...props}
    />
  )
}

function FieldGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-group"
      className={cn(
        'group/field-group @container/field-group flex w-full flex-col gap-7 data-[slot=checkbox-group]:gap-3 [&>[data-slot=field-group]]:gap-4',
        className,
      )}
      {...props}
    />
  )
}

const fieldVariants = cva(
  'group/field flex w-full gap-3 data-[invalid=true]:text-destructive',
  {
    variants: {
      orientation: {
        vertical: ['flex-col [&>*]:w-full [&>.sr-only]:w-auto'],
        horizontal: [
          'flex-row items-center',
          '[&>[data-slot=field-label]]:flex-auto',
          'has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        ],
        responsive: [
          'flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto',
          '@md/field-group:[&>[data-slot=field-label]]:flex-auto',
          '@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px',
        ],
      },
    },
    defaultVariants: {
      orientation: 'vertical',
    },
  },
)

function Field({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof fieldVariants>) {
  return (
    <div
      role="group"
      data-slot="field"
      data-orientation={orientation}
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
}

function FieldContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-content"
      className={cn(
        'group/field-content flex flex-1 flex-col gap-1.5 leading-snug',
        className,
      )}
      {...props}
    />
  )
}

function FieldLabel({
  className,
  ...props
}: React.ComponentProps<typeof Label>) {
  return (
    <Label
      data-slot="field-label"
      className={cn(
        'group/field-label peer/field-label flex w-fit gap-2 leading-snug group-data-[disabled=true]/field:opacity-50',
        'has-[>[data-slot=field]]:w-full has-[>[data-slot=field]]:flex-col has-[>[data-slot=field]]:rounded-md has-[>[data-slot=field]]:border [&>*]:data-[slot=field]:p-4',
        'has-data-[state=checked]:bg-primary/5 has-data-[state=checked]:border-primary dark:has-data-[state=checked]:bg-primary/10',
        className,
      )}
      {...props}
    />
  )
}

function FieldTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="field-label"
      className={cn(
        'flex w-fit items-center gap-2 text-sm leading-snug font-medium group-data-[disabled=true]/field:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

function FieldDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="field-description"
      className={cn(
        'text-muted-foreground text-sm leading-normal font-normal group-has-[[data-orientation=horizontal]]/field:text-balance',
        'last:mt-0 nth-last-2:-mt-1 [[data-variant=legend]+&]:-mt-1.5',
        '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function FieldSeparator({
  children,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  children?: React.ReactNode
}) {
  return (
    <div
      data-slot="field-separator"
      data-content={!!children}
      className={cn(
        'relative -my-2 h-5 text-sm group-data-[variant=outline]/field-group:-mb-2',
        className,
      )}
      {...props}
    >
      <Separator className="absolute inset-0 top-1/2" />
      {children && (
        <span
          className="bg-background text-muted-foreground relative mx-auto block w-fit px-2"
          data-slot="field-separator-content"
        >
          {children}
        </span>
      )}
    </div>
  )
}

function FieldError({
  className,
  children,
  errors,
  ...props
}: React.ComponentProps<'div'> & {
  errors?: Array<{ message?: string } | undefined>
}) {
  const content = useMemo(() => {
    if (children) {
      return children
    }

    if (!errors) {
      return null
    }

    if (errors.length === 1 && errors[0]?.message) {
      return errors[0].message
    }

    return (
      <ul className="ml-4 flex list-disc flex-col gap-1">
        {errors.map(
          (error, index) =>
            error?.message && <li key={index}>{error.message}</li>,
        )}
      </ul>
    )
  }, [children, errors])

  if (!content) {
    return null
  }

  return (
    <div
      role="alert"
      data-slot="field-error"
      className={cn('text-destructive text-sm font-normal', className)}
      {...props}
    >
      {content}
    </div>
  )
}

export {
  Field,
  FieldLabel,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldContent,
  FieldTitle,
}

```

### src\components\ui\form.tsx
```javascript
'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { Slot } from '@radix-ui/react-slot'
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState,
  type ControllerProps,
  type FieldPath,
  type FieldValues,
} from 'react-hook-form'

import { cn } from '@/lib/utils'
import { Label } from '@/components/ui/label'

const Form = FormProvider

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> = {
  name: TName
}

const FormFieldContext = React.createContext<FormFieldContextValue>(
  {} as FormFieldContextValue,
)

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext)
  const itemContext = React.useContext(FormItemContext)
  const { getFieldState } = useFormContext()
  const formState = useFormState({ name: fieldContext.name })
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext) {
    throw new Error('useFormField should be used within <FormField>')
  }

  const { id } = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  }
}

type FormItemContextValue = {
  id: string
}

const FormItemContext = React.createContext<FormItemContextValue>(
  {} as FormItemContextValue,
)

function FormItem({ className, ...props }: React.ComponentProps<'div'>) {
  const id = React.useId()

  return (
    <FormItemContext.Provider value={{ id }}>
      <div
        data-slot="form-item"
        className={cn('grid gap-2', className)}
        {...props}
      />
    </FormItemContext.Provider>
  )
}

function FormLabel({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  const { error, formItemId } = useFormField()

  return (
    <Label
      data-slot="form-label"
      data-error={!!error}
      className={cn('data-[error=true]:text-destructive', className)}
      htmlFor={formItemId}
      {...props}
    />
  )
}

function FormControl({ ...props }: React.ComponentProps<typeof Slot>) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField()

  return (
    <Slot
      data-slot="form-control"
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  )
}

function FormDescription({ className, ...props }: React.ComponentProps<'p'>) {
  const { formDescriptionId } = useFormField()

  return (
    <p
      data-slot="form-description"
      id={formDescriptionId}
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

function FormMessage({ className, ...props }: React.ComponentProps<'p'>) {
  const { error, formMessageId } = useFormField()
  const body = error ? String(error?.message ?? '') : props.children

  if (!body) {
    return null
  }

  return (
    <p
      data-slot="form-message"
      id={formMessageId}
      className={cn('text-destructive text-sm', className)}
      {...props}
    >
      {body}
    </p>
  )
}

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
}

```

### src\components\ui\hover-card.tsx
```javascript
'use client'

import * as React from 'react'
import * as HoverCardPrimitive from '@radix-ui/react-hover-card'

import { cn } from '@/lib/utils'

function HoverCard({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Root>) {
  return <HoverCardPrimitive.Root data-slot="hover-card" {...props} />
}

function HoverCardTrigger({
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Trigger>) {
  return (
    <HoverCardPrimitive.Trigger data-slot="hover-card-trigger" {...props} />
  )
}

function HoverCardContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof HoverCardPrimitive.Content>) {
  return (
    <HoverCardPrimitive.Portal data-slot="hover-card-portal">
      <HoverCardPrimitive.Content
        data-slot="hover-card-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-64 origin-(--radix-hover-card-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
          className,
        )}
        {...props}
      />
    </HoverCardPrimitive.Portal>
  )
}

export { HoverCard, HoverCardTrigger, HoverCardContent }

```

### src\components\ui\input-group.tsx
```javascript
'use client'

import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function InputGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-group"
      role="group"
      className={cn(
        'group/input-group border-input dark:bg-input/30 relative flex w-full items-center rounded-md border shadow-xs transition-[color,box-shadow] outline-none',
        'h-9 has-[>textarea]:h-auto',

        // Variants based on alignment.
        'has-[>[data-align=inline-start]]:[&>input]:pl-2',
        'has-[>[data-align=inline-end]]:[&>input]:pr-2',
        'has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>[data-align=block-start]]:[&>input]:pb-3',
        'has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-end]]:[&>input]:pt-3',

        // Focus state.
        'has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot=input-group-control]:focus-visible]:ring-[3px]',

        // Error state.
        'has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[[data-slot][aria-invalid=true]]:border-destructive dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40',

        className,
      )}
      {...props}
    />
  )
}

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 [&>kbd]:rounded-[calc(var(--radius)-5px)] group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        'inline-start':
          'order-first pl-3 has-[>button]:ml-[-0.45rem] has-[>kbd]:ml-[-0.35rem]',
        'inline-end':
          'order-last pr-3 has-[>button]:mr-[-0.4rem] has-[>kbd]:mr-[-0.35rem]',
        'block-start':
          'order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5',
        'block-end':
          'order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5',
      },
    },
    defaultVariants: {
      align: 'inline-start',
    },
  },
)

function InputGroupAddon({
  className,
  align = 'inline-start',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof inputGroupAddonVariants>) {
  return (
    <div
      role="group"
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest('button')) {
          return
        }
        e.currentTarget.parentElement?.querySelector('input')?.focus()
      }}
      {...props}
    />
  )
}

const inputGroupButtonVariants = cva(
  'text-sm shadow-none flex gap-2 items-center',
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
        sm: 'h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5',
        'icon-xs':
          'size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0',
        'icon-sm': 'size-8 p-0 has-[>svg]:p-0',
      },
    },
    defaultVariants: {
      size: 'xs',
    },
  },
)

function InputGroupButton({
  className,
  type = 'button',
  variant = 'ghost',
  size = 'xs',
  ...props
}: Omit<React.ComponentProps<typeof Button>, 'size'> &
  VariantProps<typeof inputGroupButtonVariants>) {
  return (
    <Button
      type={type}
      data-size={size}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
}

function InputGroupText({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn(
        "text-muted-foreground flex items-center gap-2 text-sm [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function InputGroupInput({
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <Input
      data-slot="input-group-control"
      className={cn(
        'flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-0 dark:bg-transparent',
        className,
      )}
      {...props}
    />
  )
}

function InputGroupTextarea({
  className,
  ...props
}: React.ComponentProps<'textarea'>) {
  return (
    <Textarea
      data-slot="input-group-control"
      className={cn(
        'flex-1 resize-none rounded-none border-0 bg-transparent py-3 shadow-none focus-visible:ring-0 dark:bg-transparent',
        className,
      )}
      {...props}
    />
  )
}

export {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
}

```

### src\components\ui\input-otp.tsx
```javascript
'use client'

import * as React from 'react'
import { OTPInput, OTPInputContext } from 'input-otp'
import { MinusIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function InputOTP({
  className,
  containerClassName,
  ...props
}: React.ComponentProps<typeof OTPInput> & {
  containerClassName?: string
}) {
  return (
    <OTPInput
      data-slot="input-otp"
      containerClassName={cn(
        'flex items-center gap-2 has-disabled:opacity-50',
        containerClassName,
      )}
      className={cn('disabled:cursor-not-allowed', className)}
      {...props}
    />
  )
}

function InputOTPGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="input-otp-group"
      className={cn('flex items-center', className)}
      {...props}
    />
  )
}

function InputOTPSlot({
  index,
  className,
  ...props
}: React.ComponentProps<'div'> & {
  index: number
}) {
  const inputOTPContext = React.useContext(OTPInputContext)
  const { char, hasFakeCaret, isActive } = inputOTPContext?.slots[index] ?? {}

  return (
    <div
      data-slot="input-otp-slot"
      data-active={isActive}
      className={cn(
        'data-[active=true]:border-ring data-[active=true]:ring-ring/50 data-[active=true]:aria-invalid:ring-destructive/20 dark:data-[active=true]:aria-invalid:ring-destructive/40 aria-invalid:border-destructive data-[active=true]:aria-invalid:border-destructive dark:bg-input/30 border-input relative flex h-9 w-9 items-center justify-center border-y border-r text-sm shadow-xs transition-all outline-none first:rounded-l-md first:border-l last:rounded-r-md data-[active=true]:z-10 data-[active=true]:ring-[3px]',
        className,
      )}
      {...props}
    >
      {char}
      {hasFakeCaret && (
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="animate-caret-blink bg-foreground h-4 w-px duration-1000" />
        </div>
      )}
    </div>
  )
}

function InputOTPSeparator({ ...props }: React.ComponentProps<'div'>) {
  return (
    <div data-slot="input-otp-separator" role="separator" {...props}>
      <MinusIcon />
    </div>
  )
}

export { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator }

```

### src\components\ui\input.tsx
```javascript
import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
        className,
      )}
      {...props}
    />
  )
}

export { Input }

```

### src\components\ui\item.tsx
```javascript
import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

function ItemGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      role="list"
      data-slot="item-group"
      className={cn('group/item-group flex flex-col', className)}
      {...props}
    />
  )
}

function ItemSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="item-separator"
      orientation="horizontal"
      className={cn('my-0', className)}
      {...props}
    />
  )
}

const itemVariants = cva(
  'group/item flex items-center border border-transparent text-sm rounded-md transition-colors [a&]:hover:bg-accent/50 [a&]:transition-colors duration-100 flex-wrap outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline: 'border-border',
        muted: 'bg-muted/50',
      },
      size: {
        default: 'p-4 gap-4 ',
        sm: 'py-3 px-4 gap-2.5',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Item({
  className,
  variant = 'default',
  size = 'default',
  asChild = false,
  ...props
}: React.ComponentProps<'div'> &
  VariantProps<typeof itemVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'
  return (
    <Comp
      data-slot="item"
      data-variant={variant}
      data-size={size}
      className={cn(itemVariants({ variant, size, className }))}
      {...props}
    />
  )
}

const itemMediaVariants = cva(
  'flex shrink-0 items-center justify-center gap-2 group-has-[[data-slot=item-description]]/item:self-start [&_svg]:pointer-events-none group-has-[[data-slot=item-description]]/item:translate-y-0.5',
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        icon: "size-8 border rounded-sm bg-muted [&_svg:not([class*='size-'])]:size-4",
        image:
          'size-10 rounded-sm overflow-hidden [&_img]:size-full [&_img]:object-cover',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function ItemMedia({
  className,
  variant = 'default',
  ...props
}: React.ComponentProps<'div'> & VariantProps<typeof itemMediaVariants>) {
  return (
    <div
      data-slot="item-media"
      data-variant={variant}
      className={cn(itemMediaVariants({ variant, className }))}
      {...props}
    />
  )
}

function ItemContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-content"
      className={cn(
        'flex flex-1 flex-col gap-1 [&+[data-slot=item-content]]:flex-none',
        className,
      )}
      {...props}
    />
  )
}

function ItemTitle({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-title"
      className={cn(
        'flex w-fit items-center gap-2 text-sm leading-snug font-medium',
        className,
      )}
      {...props}
    />
  )
}

function ItemDescription({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      data-slot="item-description"
      className={cn(
        'text-muted-foreground line-clamp-2 text-sm leading-normal font-normal text-balance',
        '[&>a:hover]:text-primary [&>a]:underline [&>a]:underline-offset-4',
        className,
      )}
      {...props}
    />
  )
}

function ItemActions({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-actions"
      className={cn('flex items-center gap-2', className)}
      {...props}
    />
  )
}

function ItemHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-header"
      className={cn(
        'flex basis-full items-center justify-between gap-2',
        className,
      )}
      {...props}
    />
  )
}

function ItemFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="item-footer"
      className={cn(
        'flex basis-full items-center justify-between gap-2',
        className,
      )}
      {...props}
    />
  )
}

export {
  Item,
  ItemMedia,
  ItemContent,
  ItemActions,
  ItemGroup,
  ItemSeparator,
  ItemTitle,
  ItemDescription,
  ItemHeader,
  ItemFooter,
}

```

### src\components\ui\kbd.tsx
```javascript
import { cn } from '@/lib/utils'

function Kbd({ className, ...props }: React.ComponentProps<'kbd'>) {
  return (
    <kbd
      data-slot="kbd"
      className={cn(
        'bg-muted w-fit text-muted-foreground pointer-events-none inline-flex h-5 min-w-5 items-center justify-center gap-1 rounded-sm px-1 font-sans text-xs font-medium select-none',
        "[&_svg:not([class*='size-'])]:size-3",
        '[[data-slot=tooltip-content]_&]:bg-background/20 [[data-slot=tooltip-content]_&]:text-background dark:[[data-slot=tooltip-content]_&]:bg-background/10',
        className,
      )}
      {...props}
    />
  )
}

function KbdGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <kbd
      data-slot="kbd-group"
      className={cn('inline-flex items-center gap-1', className)}
      {...props}
    />
  )
}

export { Kbd, KbdGroup }

```

### src\components\ui\label.tsx
```javascript
'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'

import { cn } from '@/lib/utils'

function Label({
  className,
  ...props
}: React.ComponentProps<typeof LabelPrimitive.Root>) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
        className,
      )}
      {...props}
    />
  )
}

export { Label }

```

### src\components\ui\menubar.tsx
```javascript
'use client'

import * as React from 'react'
import * as MenubarPrimitive from '@radix-ui/react-menubar'
import { CheckIcon, ChevronRightIcon, CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Menubar({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Root>) {
  return (
    <MenubarPrimitive.Root
      data-slot="menubar"
      className={cn(
        'bg-background flex h-9 items-center gap-1 rounded-md border p-1 shadow-xs',
        className,
      )}
      {...props}
    />
  )
}

function MenubarMenu({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Menu>) {
  return <MenubarPrimitive.Menu data-slot="menubar-menu" {...props} />
}

function MenubarGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Group>) {
  return <MenubarPrimitive.Group data-slot="menubar-group" {...props} />
}

function MenubarPortal({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Portal>) {
  return <MenubarPrimitive.Portal data-slot="menubar-portal" {...props} />
}

function MenubarRadioGroup({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioGroup>) {
  return (
    <MenubarPrimitive.RadioGroup data-slot="menubar-radio-group" {...props} />
  )
}

function MenubarTrigger({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Trigger>) {
  return (
    <MenubarPrimitive.Trigger
      data-slot="menubar-trigger"
      className={cn(
        'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex items-center rounded-sm px-2 py-1 text-sm font-medium outline-hidden select-none',
        className,
      )}
      {...props}
    />
  )
}

function MenubarContent({
  className,
  align = 'start',
  alignOffset = -4,
  sideOffset = 8,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Content>) {
  return (
    <MenubarPortal>
      <MenubarPrimitive.Content
        data-slot="menubar-content"
        align={align}
        alignOffset={alignOffset}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[12rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-md',
          className,
        )}
        {...props}
      />
    </MenubarPortal>
  )
}

function MenubarItem({
  className,
  inset,
  variant = 'default',
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Item> & {
  inset?: boolean
  variant?: 'default' | 'destructive'
}) {
  return (
    <MenubarPrimitive.Item
      data-slot="menubar-item"
      data-inset={inset}
      data-variant={variant}
      className={cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function MenubarCheckboxItem({
  className,
  children,
  checked,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.CheckboxItem>) {
  return (
    <MenubarPrimitive.CheckboxItem
      data-slot="menubar-checkbox-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      checked={checked}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.CheckboxItem>
  )
}

function MenubarRadioItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.RadioItem>) {
  return (
    <MenubarPrimitive.RadioItem
      data-slot="menubar-radio-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-xs py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      <span className="pointer-events-none absolute left-2 flex size-3.5 items-center justify-center">
        <MenubarPrimitive.ItemIndicator>
          <CircleIcon className="size-2 fill-current" />
        </MenubarPrimitive.ItemIndicator>
      </span>
      {children}
    </MenubarPrimitive.RadioItem>
  )
}

function MenubarLabel({
  className,
  inset,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Label> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.Label
      data-slot="menubar-label"
      data-inset={inset}
      className={cn(
        'px-2 py-1.5 text-sm font-medium data-[inset]:pl-8',
        className,
      )}
      {...props}
    />
  )
}

function MenubarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Separator>) {
  return (
    <MenubarPrimitive.Separator
      data-slot="menubar-separator"
      className={cn('bg-border -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function MenubarShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="menubar-shortcut"
      className={cn(
        'text-muted-foreground ml-auto text-xs tracking-widest',
        className,
      )}
      {...props}
    />
  )
}

function MenubarSub({
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.Sub>) {
  return <MenubarPrimitive.Sub data-slot="menubar-sub" {...props} />
}

function MenubarSubTrigger({
  className,
  inset,
  children,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubTrigger> & {
  inset?: boolean
}) {
  return (
    <MenubarPrimitive.SubTrigger
      data-slot="menubar-sub-trigger"
      data-inset={inset}
      className={cn(
        'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-none select-none data-[inset]:pl-8',
        className,
      )}
      {...props}
    >
      {children}
      <ChevronRightIcon className="ml-auto h-4 w-4" />
    </MenubarPrimitive.SubTrigger>
  )
}

function MenubarSubContent({
  className,
  ...props
}: React.ComponentProps<typeof MenubarPrimitive.SubContent>) {
  return (
    <MenubarPrimitive.SubContent
      data-slot="menubar-sub-content"
      className={cn(
        'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-menubar-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg',
        className,
      )}
      {...props}
    />
  )
}

export {
  Menubar,
  MenubarPortal,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarSeparator,
  MenubarLabel,
  MenubarItem,
  MenubarShortcut,
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
}

```

### src\components\ui\navigation-menu.tsx
```javascript
import * as React from 'react'
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { cva } from 'class-variance-authority'
import { ChevronDownIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Root> & {
  viewport?: boolean
}) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn(
        'group/navigation-menu relative flex max-w-max flex-1 items-center justify-center',
        className,
      )}
      {...props}
    >
      {children}
      {viewport && <NavigationMenuViewport />}
    </NavigationMenuPrimitive.Root>
  )
}

function NavigationMenuList({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.List>) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn(
        'group flex flex-1 list-none items-center justify-center gap-1',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuItem({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Item>) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn('relative', className)}
      {...props}
    />
  )
}

const navigationMenuTriggerStyle = cva(
  'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=open]:hover:bg-accent data-[state=open]:text-accent-foreground data-[state=open]:focus:bg-accent data-[state=open]:bg-accent/50 focus-visible:ring-ring/50 outline-none transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1',
)

function NavigationMenuTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(navigationMenuTriggerStyle(), 'group', className)}
      {...props}
    >
      {children}{' '}
      <ChevronDownIcon
        className="relative top-[1px] ml-1 size-3 transition duration-300 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  )
}

function NavigationMenuContent({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Content>) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        'data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full p-2 pr-2.5 md:absolute md:w-auto',
        'group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:data-[state=open]:animate-in group-data-[viewport=false]/navigation-menu:data-[state=closed]:animate-out group-data-[viewport=false]/navigation-menu:data-[state=closed]:zoom-out-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-[state=open]:fade-in-0 group-data-[viewport=false]/navigation-menu:data-[state=closed]:fade-out-0 group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5 group-data-[viewport=false]/navigation-menu:overflow-hidden group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:duration-200 **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none',
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuViewport({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
  return (
    <div
      className="absolute top-full left-0 isolate z-50 flex justify-center"
    >
      <NavigationMenuPrimitive.Viewport
        data-slot="navigation-menu-viewport"
        className={cn(
          'origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]',
          className,
        )}
        {...props}
      />
    </div>
  )
}

function NavigationMenuLink({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-link"
      className={cn(
        "data-[active=true]:focus:bg-accent data-[active=true]:hover:bg-accent data-[active=true]:bg-accent/50 data-[active=true]:text-accent-foreground hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 [&_svg:not([class*='text-'])]:text-muted-foreground flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function NavigationMenuIndicator({
  className,
  ...props
}: React.ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
  return (
    <NavigationMenuPrimitive.Indicator
      data-slot="navigation-menu-indicator"
      className={cn(
        'data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden',
        className,
      )}
      {...props}
    >
      <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
    </NavigationMenuPrimitive.Indicator>
  )
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
}

```

### src\components\ui\pagination.tsx
```javascript
import * as React from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MoreHorizontalIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { Button, buttonVariants } from '@/components/ui/button'

function Pagination({ className, ...props }: React.ComponentProps<'nav'>) {
  return (
    <nav
      role="navigation"
      aria-label="pagination"
      data-slot="pagination"
      className={cn('mx-auto flex w-full justify-center', className)}
      {...props}
    />
  )
}

function PaginationContent({
  className,
  ...props
}: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="pagination-content"
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  )
}

function PaginationItem({ ...props }: React.ComponentProps<'li'>) {
  return <li data-slot="pagination-item" {...props} />
}

type PaginationLinkProps = {
  isActive?: boolean
} & Pick<React.ComponentProps<typeof Button>, 'size'> &
  React.ComponentProps<'a'>

function PaginationLink({
  className,
  isActive,
  size = 'icon',
  ...props
}: PaginationLinkProps) {
  return (
    <a
      aria-current={isActive ? 'page' : undefined}
      data-slot="pagination-link"
      data-active={isActive}
      className={cn(
        buttonVariants({
          variant: isActive ? 'outline' : 'ghost',
          size,
        }),
        className,
      )}
      {...props}
    />
  )
}

function PaginationPrevious({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to previous page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pl-2.5', className)}
      {...props}
    >
      <ChevronLeftIcon />
      <span className="hidden sm:block">Previous</span>
    </PaginationLink>
  )
}

function PaginationNext({
  className,
  ...props
}: React.ComponentProps<typeof PaginationLink>) {
  return (
    <PaginationLink
      aria-label="Go to next page"
      size="default"
      className={cn('gap-1 px-2.5 sm:pr-2.5', className)}
      {...props}
    >
      <span className="hidden sm:block">Next</span>
      <ChevronRightIcon />
    </PaginationLink>
  )
}

function PaginationEllipsis({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      aria-hidden
      data-slot="pagination-ellipsis"
      className={cn('flex size-9 items-center justify-center', className)}
      {...props}
    >
      <MoreHorizontalIcon className="size-4" />
      <span className="sr-only">More pages</span>
    </span>
  )
}

export {
  Pagination,
  PaginationContent,
  PaginationLink,
  PaginationItem,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
}

```

### src\components\ui\popover.tsx
```javascript
'use client'

import * as React from 'react'
import * as PopoverPrimitive from '@radix-ui/react-popover'

import { cn } from '@/lib/utils'

function Popover({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />
}

function PopoverTrigger({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Trigger>) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />
}

function PopoverContent({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Content>) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
}

function PopoverAnchor({
  ...props
}: React.ComponentProps<typeof PopoverPrimitive.Anchor>) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor }

```

### src\components\ui\progress.tsx
```javascript
'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'

import { cn } from '@/lib/utils'

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        'bg-primary/20 relative h-2 w-full overflow-hidden rounded-full',
        className,
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }

```

### src\components\ui\radio-group.tsx
```javascript
'use client'

import * as React from 'react'
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group'
import { CircleIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function RadioGroup({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Root>) {
  return (
    <RadioGroupPrimitive.Root
      data-slot="radio-group"
      className={cn('grid gap-3', className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  ...props
}: React.ComponentProps<typeof RadioGroupPrimitive.Item>) {
  return (
    <RadioGroupPrimitive.Item
      data-slot="radio-group-item"
      className={cn(
        'border-input text-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 aspect-square size-4 shrink-0 rounded-full border shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot="radio-group-indicator"
        className="relative flex items-center justify-center"
      >
        <CircleIcon className="fill-primary absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2" />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  )
}

export { RadioGroup, RadioGroupItem }

```

### src\components\ui\resizable.tsx
```javascript
'use client'

import * as React from 'react'
import { GripVerticalIcon } from 'lucide-react'
import * as ResizablePrimitive from 'react-resizable-panels'

import { cn } from '@/lib/utils'

function ResizablePanelGroup({
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelGroup>) {
  return (
    <ResizablePrimitive.PanelGroup
      data-slot="resizable-panel-group"
      className={cn(
        'flex h-full w-full data-[panel-group-direction=vertical]:flex-col',
        className,
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.Panel>) {
  return <ResizablePrimitive.Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof ResizablePrimitive.PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <ResizablePrimitive.PanelResizeHandle
      data-slot="resizable-handle"
      className={cn(
        'bg-border focus-visible:ring-ring relative flex w-px items-center justify-center after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:ring-1 focus-visible:ring-offset-1 focus-visible:outline-hidden data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:translate-x-0 data-[panel-group-direction=vertical]:after:-translate-y-1/2 [&[data-panel-group-direction=vertical]>div]:rotate-90',
        className,
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </ResizablePrimitive.PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }

```

### src\components\ui\scroll-area.tsx
```javascript
'use client'

import * as React from 'react'
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'

import { cn } from '@/lib/utils'

function ScrollArea({
  className,
  children,
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.Root>) {
  return (
    <ScrollAreaPrimitive.Root
      data-slot="scroll-area"
      className={cn('relative', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        data-slot="scroll-area-viewport"
        className="focus-visible:ring-ring/50 size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:outline-1"
      >
        {children}
      </ScrollAreaPrimitive.Viewport>
      <ScrollBar />
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  )
}

function ScrollBar({
  className,
  orientation = 'vertical',
  ...props
}: React.ComponentProps<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>) {
  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      data-slot="scroll-area-scrollbar"
      orientation={orientation}
      className={cn(
        'flex touch-none p-px transition-colors select-none',
        orientation === 'vertical' &&
          'h-full w-2.5 border-l border-l-transparent',
        orientation === 'horizontal' &&
          'h-2.5 flex-col border-t border-t-transparent',
        className,
      )}
      {...props}
    >
      <ScrollAreaPrimitive.ScrollAreaThumb
        data-slot="scroll-area-thumb"
        className="bg-border relative flex-1 rounded-full"
      />
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  )
}

export { ScrollArea, ScrollBar }

```

### src\components\ui\select.tsx
```javascript
'use client'

import * as React from 'react'
import * as SelectPrimitive from '@radix-ui/react-select'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = 'default',
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: 'sm' | 'default'
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-4 opacity-50" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = 'popper',
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
          position === 'popper' &&
            'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
          className,
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            'p-1',
            position === 'popper' &&
              'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn('text-muted-foreground px-2 py-1.5 text-xs', className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className,
      )}
      {...props}
    >
      <span className="absolute right-2 flex size-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('bg-border pointer-events-none -mx-1 my-1 h-px', className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        'flex cursor-default items-center justify-center py-1',
        className,
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

```

### src\components\ui\separator.tsx
```javascript
'use client'

import * as React from 'react'
import * as SeparatorPrimitive from '@radix-ui/react-separator'

import { cn } from '@/lib/utils'

function Separator({
  className,
  orientation = 'horizontal',
  decorative = true,
  ...props
}: React.ComponentProps<typeof SeparatorPrimitive.Root>) {
  return (
    <SeparatorPrimitive.Root
      data-slot="separator"
      decorative={decorative}
      orientation={orientation}
      className={cn(
        'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
        className,
      )}
      {...props}
    />
  )
}

export { Separator }

```

### src\components\ui\sheet.tsx
```javascript
'use client'

import * as React from 'react'
import * as SheetPrimitive from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Sheet({ ...props }: React.ComponentProps<typeof SheetPrimitive.Root>) {
  return <SheetPrimitive.Root data-slot="sheet" {...props} />
}

function SheetTrigger({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Trigger>) {
  return <SheetPrimitive.Trigger data-slot="sheet-trigger" {...props} />
}

function SheetClose({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Close>) {
  return <SheetPrimitive.Close data-slot="sheet-close" {...props} />
}

function SheetPortal({
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Portal>) {
  return <SheetPrimitive.Portal data-slot="sheet-portal" {...props} />
}

function SheetOverlay({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Overlay>) {
  return (
    <SheetPrimitive.Overlay
      data-slot="sheet-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  )
}

function SheetContent({
  className,
  children,
  side = 'right',
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Content> & {
  side?: 'top' | 'right' | 'bottom' | 'left'
}) {
  return (
    <SheetPortal>
      <SheetOverlay />
      <SheetPrimitive.Content
        data-slot="sheet-content"
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
          side === 'right' &&
            'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
          side === 'left' &&
            'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
          side === 'top' &&
            'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
          side === 'bottom' &&
            'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
          className,
        )}
        {...props}
      >
        {children}
        <SheetPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
      </SheetPrimitive.Content>
    </SheetPortal>
  )
}

function SheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-header"
      className={cn('flex flex-col gap-1.5 p-4', className)}
      {...props}
    />
  )
}

function SheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sheet-footer"
      className={cn('mt-auto flex flex-col gap-2 p-4', className)}
      {...props}
    />
  )
}

function SheetTitle({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Title>) {
  return (
    <SheetPrimitive.Title
      data-slot="sheet-title"
      className={cn('text-foreground font-semibold', className)}
      {...props}
    />
  )
}

function SheetDescription({
  className,
  ...props
}: React.ComponentProps<typeof SheetPrimitive.Description>) {
  return (
    <SheetPrimitive.Description
      data-slot="sheet-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  )
}

export {
  Sheet,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
}

```

### src\components\ui\sidebar.tsx
```javascript
'use client'

import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import { PanelLeftIcon } from 'lucide-react'

import { useIsMobile } from '@/hooks/use-mobile'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Skeleton } from '@/components/ui/skeleton'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const SIDEBAR_COOKIE_NAME = 'sidebar_state'
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7
const SIDEBAR_WIDTH = '16rem'
const SIDEBAR_WIDTH_MOBILE = '18rem'
const SIDEBAR_WIDTH_ICON = '3rem'
const SIDEBAR_KEYBOARD_SHORTCUT = 'b'

type SidebarContextProps = {
  state: 'expanded' | 'collapsed'
  open: boolean
  setOpen: (open: boolean) => void
  openMobile: boolean
  setOpenMobile: (open: boolean) => void
  isMobile: boolean
  toggleSidebar: () => void
}

const SidebarContext = React.createContext<SidebarContextProps | null>(null)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider.')
  }

  return context
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  defaultOpen?: boolean
  open?: boolean
  onOpenChange?: (open: boolean) => void
}) {
  const isMobile = useIsMobile()
  const [openMobile, setOpenMobile] = React.useState(false)

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen)
  const open = openProp ?? _open
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === 'function' ? value(open) : value
      if (setOpenProp) {
        setOpenProp(openState)
      } else {
        _setOpen(openState)
      }

      // This sets the cookie to keep the sidebar state.
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`
    },
    [setOpenProp, open],
  )

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open)
  }, [isMobile, setOpen, setOpenMobile])

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault()
        toggleSidebar()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggleSidebar])

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? 'expanded' : 'collapsed'

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  )

  return (
    <SidebarContext.Provider value={contextValue}>
      <TooltipProvider delayDuration={0}>
        <div
          data-slot="sidebar-wrapper"
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH,
              '--sidebar-width-icon': SIDEBAR_WIDTH_ICON,
              ...style,
            } as React.CSSProperties
          }
          className={cn(
            'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full',
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </TooltipProvider>
    </SidebarContext.Provider>
  )
}

function Sidebar({
  side = 'left',
  variant = 'sidebar',
  collapsible = 'offcanvas',
  className,
  children,
  ...props
}: React.ComponentProps<'div'> & {
  side?: 'left' | 'right'
  variant?: 'sidebar' | 'floating' | 'inset'
  collapsible?: 'offcanvas' | 'icon' | 'none'
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar()

  if (collapsible === 'none') {
    return (
      <div
        data-slot="sidebar"
        className={cn(
          'bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col',
          className,
        )}
        {...props}
      >
        {children}
      </div>
    )
  }

  if (isMobile) {
    return (
      <Sheet open={openMobile} onOpenChange={setOpenMobile} {...props}>
        <SheetContent
          data-sidebar="sidebar"
          data-slot="sidebar"
          data-mobile="true"
          className="bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden"
          style={
            {
              '--sidebar-width': SIDEBAR_WIDTH_MOBILE,
            } as React.CSSProperties
          }
          side={side}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
            <SheetDescription>Displays the mobile sidebar.</SheetDescription>
          </SheetHeader>
          <div className="flex h-full w-full flex-col">{children}</div>
        </SheetContent>
      </Sheet>
    )
  }

  return (
    <div
      className="group peer text-sidebar-foreground hidden md:block"
      data-state={state}
      data-collapsible={state === 'collapsed' ? collapsible : ''}
      data-variant={variant}
      data-side={side}
      data-slot="sidebar"
    >
      {/* This is what handles the sidebar gap on desktop */}
      <div
        data-slot="sidebar-gap"
        className={cn(
          'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
          'group-data-[collapsible=offcanvas]:w-0',
          'group-data-[side=right]:rotate-180',
          variant === 'floating' || variant === 'inset'
            ? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)',
        )}
      />
      <div
        data-slot="sidebar-container"
        className={cn(
          'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
          side === 'left'
            ? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
            : 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
          // Adjust the padding for floating and inset variants.
          variant === 'floating' || variant === 'inset'
            ? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
            : 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
          className,
        )}
        {...props}
      >
        <div
          data-sidebar="sidebar"
          data-slot="sidebar-inner"
          className="bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm"
        >
          {children}
        </div>
      </div>
    </div>
  )
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<typeof Button>) {
  const { toggleSidebar } = useSidebar()

  return (
    <Button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      variant="ghost"
      size="icon"
      className={cn('size-7', className)}
      onClick={(event) => {
        onClick?.(event)
        toggleSidebar()
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

function SidebarRail({ className, ...props }: React.ComponentProps<'button'>) {
  const { toggleSidebar } = useSidebar()

  return (
    <button
      data-sidebar="rail"
      data-slot="sidebar-rail"
      aria-label="Toggle Sidebar"
      tabIndex={-1}
      onClick={toggleSidebar}
      title="Toggle Sidebar"
      className={cn(
        'hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex',
        'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize',
        '[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
        'hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full',
        '[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
        '[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
        className,
      )}
      {...props}
    />
  )
}

function SidebarInset({ className, ...props }: React.ComponentProps<'main'>) {
  return (
    <main
      data-slot="sidebar-inset"
      className={cn(
        'bg-background relative flex w-full flex-1 flex-col',
        'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
        className,
      )}
      {...props}
    />
  )
}

function SidebarInput({
  className,
  ...props
}: React.ComponentProps<typeof Input>) {
  return (
    <Input
      data-slot="sidebar-input"
      data-sidebar="input"
      className={cn('bg-background h-8 w-full shadow-none', className)}
      {...props}
    />
  )
}

function SidebarHeader({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-header"
      data-sidebar="header"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
}

function SidebarFooter({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-footer"
      data-sidebar="footer"
      className={cn('flex flex-col gap-2 p-2', className)}
      {...props}
    />
  )
}

function SidebarSeparator({
  className,
  ...props
}: React.ComponentProps<typeof Separator>) {
  return (
    <Separator
      data-slot="sidebar-separator"
      data-sidebar="separator"
      className={cn('bg-sidebar-border mx-2 w-auto', className)}
      {...props}
    />
  )
}

function SidebarContent({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-content"
      data-sidebar="content"
      className={cn(
        'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroup({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group"
      data-sidebar="group"
      className={cn('relative flex w-full min-w-0 flex-col p-2', className)}
      {...props}
    />
  )
}

function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'div'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'div'

  return (
    <Comp
      data-slot="sidebar-group-label"
      data-sidebar="group-label"
      className={cn(
        'text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        'group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="sidebar-group-action"
      data-sidebar="group-action"
      className={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarGroupContent({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-group-content"
      data-sidebar="group-content"
      className={cn('w-full text-sm', className)}
      {...props}
    />
  )
}

function SidebarMenu({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu"
      data-sidebar="menu"
      className={cn('flex w-full min-w-0 flex-col gap-1', className)}
      {...props}
    />
  )
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-item"
      data-sidebar="menu-item"
      className={cn('group/menu-item relative', className)}
      {...props}
    />
  )
}

const sidebarMenuButtonVariants = cva(
  'peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
        outline:
          'bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]',
      },
      size: {
        default: 'h-8 text-sm',
        sm: 'h-7 text-xs',
        lg: 'h-12 text-sm group-data-[collapsible=icon]:p-0!',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = 'default',
  size = 'default',
  tooltip,
  className,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  isActive?: boolean
  tooltip?: string | React.ComponentProps<typeof TooltipContent>
} & VariantProps<typeof sidebarMenuButtonVariants>) {
  const Comp = asChild ? Slot : 'button'
  const { isMobile, state } = useSidebar()

  const button = (
    <Comp
      data-slot="sidebar-menu-button"
      data-sidebar="menu-button"
      data-size={size}
      data-active={isActive}
      className={cn(sidebarMenuButtonVariants({ variant, size }), className)}
      {...props}
    />
  )

  if (!tooltip) {
    return button
  }

  if (typeof tooltip === 'string') {
    tooltip = {
      children: tooltip,
    }
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{button}</TooltipTrigger>
      <TooltipContent
        side="right"
        align="center"
        hidden={state !== 'collapsed' || isMobile}
        {...tooltip}
      />
    </Tooltip>
  )
}

function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}: React.ComponentProps<'button'> & {
  asChild?: boolean
  showOnHover?: boolean
}) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="sidebar-menu-action"
      data-sidebar="menu-action"
      className={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0',
        // Increases the hit area of the button on mobile.
        'after:absolute after:-inset-2 md:after:hidden',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        showOnHover &&
          'peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuBadge({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="sidebar-menu-badge"
      data-sidebar="menu-badge"
      className={cn(
        'text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none',
        'peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground',
        'peer-data-[size=sm]/menu-button:top-1',
        'peer-data-[size=default]/menu-button:top-1.5',
        'peer-data-[size=lg]/menu-button:top-2.5',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}: React.ComponentProps<'div'> & {
  showIcon?: boolean
}) {
  // Random width between 50 to 90%.
  const [width, setWidth] = React.useState('50%')
  React.useEffect(() => {
    setWidth(`${Math.floor(Math.random() * 40) + 50}%`)
  }, [])

  return (
    <div
      data-slot="sidebar-menu-skeleton"
      data-sidebar="menu-skeleton"
      className={cn('flex h-8 items-center gap-2 rounded-md px-2', className)}
      {...props}
    >
      {showIcon && (
        <Skeleton
          className="size-4 rounded-md"
          data-sidebar="menu-skeleton-icon"
        />
      )}
      <Skeleton
        className="h-4 max-w-(--skeleton-width) flex-1"
        data-sidebar="menu-skeleton-text"
        style={
          {
            '--skeleton-width': width,
          } as React.CSSProperties
        }
      />
    </div>
  )
}

function SidebarMenuSub({ className, ...props }: React.ComponentProps<'ul'>) {
  return (
    <ul
      data-slot="sidebar-menu-sub"
      data-sidebar="menu-sub"
      className={cn(
        'border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

function SidebarMenuSubItem({
  className,
  ...props
}: React.ComponentProps<'li'>) {
  return (
    <li
      data-slot="sidebar-menu-sub-item"
      data-sidebar="menu-sub-item"
      className={cn('group/menu-sub-item relative', className)}
      {...props}
    />
  )
}

function SidebarMenuSubButton({
  asChild = false,
  size = 'md',
  isActive = false,
  className,
  ...props
}: React.ComponentProps<'a'> & {
  asChild?: boolean
  size?: 'sm' | 'md'
  isActive?: boolean
}) {
  const Comp = asChild ? Slot : 'a'

  return (
    <Comp
      data-slot="sidebar-menu-sub-button"
      data-sidebar="menu-sub-button"
      data-size={size}
      data-active={isActive}
      className={cn(
        'text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0',
        'data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground',
        size === 'sm' && 'text-xs',
        size === 'md' && 'text-sm',
        'group-data-[collapsible=icon]:hidden',
        className,
      )}
      {...props}
    />
  )
}

export {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
}

```

### src\components\ui\skeleton.tsx
```javascript
import { cn } from '@/lib/utils'

function Skeleton({ className, ...props }: React.ComponentProps<'div'>) {
  return (
    <div
      data-slot="skeleton"
      className={cn('bg-accent animate-pulse rounded-md', className)}
      {...props}
    />
  )
}

export { Skeleton }

```

### src\components\ui\slider.tsx
```javascript
'use client'

import * as React from 'react'
import * as SliderPrimitive from '@radix-ui/react-slider'

import { cn } from '@/lib/utils'

function Slider({
  className,
  defaultValue,
  value,
  min = 0,
  max = 100,
  ...props
}: React.ComponentProps<typeof SliderPrimitive.Root>) {
  const _values = React.useMemo(
    () =>
      Array.isArray(value)
        ? value
        : Array.isArray(defaultValue)
          ? defaultValue
          : [min, max],
    [value, defaultValue, min, max],
  )

  return (
    <SliderPrimitive.Root
      data-slot="slider"
      defaultValue={defaultValue}
      value={value}
      min={min}
      max={max}
      className={cn(
        'relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col',
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track
        data-slot="slider-track"
        className={
          'bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5'
        }
      >
        <SliderPrimitive.Range
          data-slot="slider-range"
          className={
            'bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full'
          }
        />
      </SliderPrimitive.Track>
      {Array.from({ length: _values.length }, (_, index) => (
        <SliderPrimitive.Thumb
          data-slot="slider-thumb"
          key={index}
          className="border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"
        />
      ))}
    </SliderPrimitive.Root>
  )
}

export { Slider }

```

### src\components\ui\sonner.tsx
```javascript
'use client'

import { useTheme } from 'next-themes'
import { Toaster as Sonner, ToasterProps } from 'sonner'

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'system' } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  )
}

export { Toaster }

```

### src\components\ui\spinner.tsx
```javascript
import { Loader2Icon } from 'lucide-react'

import { cn } from '@/lib/utils'

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <Loader2Icon
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
  )
}

export { Spinner }

```

### src\components\ui\switch.tsx
```javascript
'use client'

import * as React from 'react'
import * as SwitchPrimitive from '@radix-ui/react-switch'

import { cn } from '@/lib/utils'

function Switch({
  className,
  ...props
}: React.ComponentProps<typeof SwitchPrimitive.Root>) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input focus-visible:border-ring focus-visible:ring-ring/50 dark:data-[state=unchecked]:bg-input/80 inline-flex h-[1.15rem] w-8 shrink-0 items-center rounded-full border border-transparent shadow-xs transition-all outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={
          'bg-background dark:data-[state=unchecked]:bg-foreground dark:data-[state=checked]:bg-primary-foreground pointer-events-none block size-4 rounded-full ring-0 transition-transform data-[state=checked]:translate-x-[calc(100%-2px)] data-[state=unchecked]:translate-x-0'
        }
      />
    </SwitchPrimitive.Root>
  )
}

export { Switch }

```

### src\components\ui\table.tsx
```javascript
'use client'

import * as React from 'react'

import { cn } from '@/lib/utils'

function Table({ className, ...props }: React.ComponentProps<'table'>) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn('w-full caption-bottom text-sm', className)}
        {...props}
      />
    </div>
  )
}

function TableHeader({ className, ...props }: React.ComponentProps<'thead'>) {
  return (
    <thead
      data-slot="table-header"
      className={cn('[&_tr]:border-b', className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<'tbody'>) {
  return (
    <tbody
      data-slot="table-body"
      className={cn('[&_tr:last-child]:border-0', className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<'tfoot'>) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        'bg-muted/50 border-t font-medium [&>tr]:last:border-b-0',
        className,
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<'tr'>) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        'hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors',
        className,
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<'th'>) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        'text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<'td'>) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        'p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]',
        className,
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<'caption'>) {
  return (
    <caption
      data-slot="table-caption"
      className={cn('text-muted-foreground mt-4 text-sm', className)}
      {...props}
    />
  )
}

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}

```

### src\components\ui\tabs.tsx
```javascript
'use client'

import * as React from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'

import { cn } from '@/lib/utils'

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex flex-col gap-2', className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]',
        className,
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn('flex-1 outline-none', className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

```

### src\components\ui\textarea.tsx
```javascript
import * as React from 'react'

import { cn } from '@/lib/utils'

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        'border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        className,
      )}
      {...props}
    />
  )
}

export { Textarea }

```

### src\components\ui\toast.tsx
```javascript
'use client'

import * as React from 'react'
import * as ToastPrimitives from '@radix-ui/react-toast'
import { cva, type VariantProps } from 'class-variance-authority'
import { X } from 'lucide-react'

import { cn } from '@/lib/utils'

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Viewport>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Viewport
    ref={ref}
    className={cn(
      'fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]',
      className,
    )}
    {...props}
  />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
  'group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full',
  {
    variants: {
      variant: {
        default: 'border bg-background text-foreground',
        destructive:
          'destructive group border-destructive bg-destructive text-destructive-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

const Toast = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(({ className, variant, ...props }, ref) => {
  return (
    <ToastPrimitives.Root
      ref={ref}
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Action>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Action
    ref={ref}
    className={cn(
      'inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive',
      className,
    )}
    {...props}
  />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Close>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Close
    ref={ref}
    className={cn(
      'absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600',
      className,
    )}
    toast-close=""
    {...props}
  >
    <X className="h-4 w-4" />
  </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Title>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Title
    ref={ref}
    className={cn('text-sm font-semibold', className)}
    {...props}
  />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef<
  React.ElementRef<typeof ToastPrimitives.Description>,
  React.ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
  <ToastPrimitives.Description
    ref={ref}
    className={cn('text-sm opacity-90', className)}
    {...props}
  />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = React.ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = React.ReactElement<typeof ToastAction>

export {
  type ToastProps,
  type ToastActionElement,
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}

```

### src\components\ui\toaster.tsx
```javascript
'use client'

import { useToast } from '@/hooks/use-toast'
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast'

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}

```

### src\components\ui\toggle-group.tsx
```javascript
'use client'

import * as React from 'react'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'
import { type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { toggleVariants } from '@/components/ui/toggle'

const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
  variant: 'default',
})

function ToggleGroup({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(
        'group/toggle-group flex w-fit items-center rounded-md data-[variant=outline]:shadow-xs',
        className,
      )}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>
        {children}
      </ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  )
}

function ToggleGroupItem({
  className,
  children,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof ToggleGroupPrimitive.Item> &
  VariantProps<typeof toggleVariants>) {
  const context = React.useContext(ToggleGroupContext)

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={context.variant || variant}
      data-size={context.size || size}
      className={cn(
        toggleVariants({
          variant: context.variant || variant,
          size: context.size || size,
        }),
        'min-w-0 flex-1 shrink-0 rounded-none shadow-none first:rounded-l-md last:rounded-r-md focus:z-10 focus-visible:z-10 data-[variant=outline]:border-l-0 data-[variant=outline]:first:border-l',
        className,
      )}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  )
}

export { ToggleGroup, ToggleGroupItem }

```

### src\components\ui\toggle.tsx
```javascript
'use client'

import * as React from 'react'
import * as TogglePrimitive from '@radix-ui/react-toggle'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] outline-none transition-[color,box-shadow] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive whitespace-nowrap",
  {
    variants: {
      variant: {
        default: 'bg-transparent',
        outline:
          'border border-input bg-transparent shadow-xs hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-9 px-2 min-w-9',
        sm: 'h-8 px-1.5 min-w-8',
        lg: 'h-10 px-2.5 min-w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

function Toggle({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<typeof TogglePrimitive.Root> &
  VariantProps<typeof toggleVariants>) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }

```

### src\components\ui\tooltip.tsx
```javascript
'use client'

import * as React from 'react'
import * as TooltipPrimitive from '@radix-ui/react-tooltip'

import { cn } from '@/lib/utils'

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  )
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  )
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          'bg-foreground text-background animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance',
          className,
        )}
        {...props}
      >
        {children}
        <TooltipPrimitive.Arrow className="bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider }

```

### src\components\ui\use-mobile.tsx
```javascript
import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}

```

### src\components\ui\use-toast.ts
```javascript
'use client'

// Inspired by react-hot-toast library
import * as React from 'react'

import type { ToastActionElement, ToastProps } from '@/components/ui/toast'

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType['ADD_TOAST']
      toast: ToasterToast
    }
  | {
      type: ActionType['UPDATE_TOAST']
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType['DISMISS_TOAST']
      toastId?: ToasterToast['id']
    }
  | {
      type: ActionType['REMOVE_TOAST']
      toastId?: ToasterToast['id']
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      }

    case 'DISMISS_TOAST': {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, 'id'>

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id })

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  }
}

export { useToast, toast }

```

### src\hooks\use-mobile.ts
```javascript
import * as React from 'react'

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return !!isMobile
}

```

### src\hooks\use-toast.ts
```javascript
'use client'

// Inspired by react-hot-toast library
import * as React from 'react'

import type { ToastActionElement, ToastProps } from '@/components/ui/toast'

const TOAST_LIMIT = 1
const TOAST_REMOVE_DELAY = 1000000

type ToasterToast = ToastProps & {
  id: string
  title?: React.ReactNode
  description?: React.ReactNode
  action?: ToastActionElement
}

const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const

let count = 0

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER
  return count.toString()
}

type ActionType = typeof actionTypes

type Action =
  | {
      type: ActionType['ADD_TOAST']
      toast: ToasterToast
    }
  | {
      type: ActionType['UPDATE_TOAST']
      toast: Partial<ToasterToast>
    }
  | {
      type: ActionType['DISMISS_TOAST']
      toastId?: ToasterToast['id']
    }
  | {
      type: ActionType['REMOVE_TOAST']
      toastId?: ToasterToast['id']
    }

interface State {
  toasts: ToasterToast[]
}

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>()

const addToRemoveQueue = (toastId: string) => {
  if (toastTimeouts.has(toastId)) {
    return
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId)
    dispatch({
      type: 'REMOVE_TOAST',
      toastId: toastId,
    })
  }, TOAST_REMOVE_DELAY)

  toastTimeouts.set(toastId, timeout)
}

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      }

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t,
        ),
      }

    case 'DISMISS_TOAST': {
      const { toastId } = action

      // ! Side effects ! - This could be extracted into a dismissToast() action,
      // but I'll keep it here for simplicity
      if (toastId) {
        addToRemoveQueue(toastId)
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id)
        })
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t,
        ),
      }
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        }
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      }
  }
}

const listeners: Array<(state: State) => void> = []

let memoryState: State = { toasts: [] }

function dispatch(action: Action) {
  memoryState = reducer(memoryState, action)
  listeners.forEach((listener) => {
    listener(memoryState)
  })
}

type Toast = Omit<ToasterToast, 'id'>

function toast({ ...props }: Toast) {
  const id = genId()

  const update = (props: ToasterToast) =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    })
  const dismiss = () => dispatch({ type: 'DISMISS_TOAST', toastId: id })

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss()
      },
    },
  })

  return {
    id: id,
    dismiss,
    update,
  }
}

function useToast() {
  const [state, setState] = React.useState<State>(memoryState)

  React.useEffect(() => {
    listeners.push(setState)
    return () => {
      const index = listeners.indexOf(setState)
      if (index > -1) {
        listeners.splice(index, 1)
      }
    }
  }, [state])

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  }
}

export { useToast, toast }

```

### src\lib\perfumes.ts
```javascript
// ─────────────────────────────────────────────────────────────────────────────
// AroMatch Perfume Catalog — 16 items  (SINGLE SOURCE OF TRUTH)
// ─────────────────────────────────────────────────────────────────────────────

export interface Perfume {
  /** String path to the image asset */
  image: string;
  /** Brand / perfume house */
  brand: string;
  /** Display name */
  name: string;
  /** Olfactive family (shown on result card & collection card) */
  family: string;
  /** One-liner value prop shown in the result card */
  match: string;
  /** Extended description for the result card (Playfair Display) */
  description: string;
  /** Exhaustive long-form description for the Product Detail section */
  exhaustiveDescription: string;
  /** Occasion label for the Product Detail block */
  occasion: string;
  
  // NEW TECHNICAL SPECS (Fragrantica Verified)
  /** Exact longevity descriptor (e.g. "10h+") */
  longevity: string;
  /** Sillage/Projection descriptor */
  sillage: string;
  /** Season descriptor string for UI (e.g. "Winter/Night") */
  season: string;
  /** Vibe descriptor string for UI */
  vibe: string;

  /** Top notes (opening, 0–30 min) */
  topNotes: string[];
  /** Heart notes (core, 30 min–3 h) */
  heartNotes: string[];
  /** Base notes (dry-down, 3 h+) */
  baseNotes: string[];
  /** Flat notes list for result card pills (legacy compat) */
  notes: string[];
  
  /** Quiz matching attributes */
  occasions: Array<'cita_nocturna' | 'oficina_diario' | 'evento_especial' | 'deporte_aire_libre'>;
  seasons: Array<'summer' | 'winter' | 'spring' | 'fall'>;
  scentStyle: Array<'dulce' | 'fresco' | 'maderoso' | 'especiado'>;
  longevities: Array<'moderate' | 'high' | 'beast'>;
}

export const perfumes: Perfume[] = [
  // ── 1 ──────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/honor&glory.webp",
    brand: 'Lattafa',
    name: "Bade'e Al Oud Honor & Glory",
    family: 'Cuero / Oud',
    match: 'El oud más imponente de la línea. Honor y gloria en cada spray.',
    description: 'Una declaración de poder olfativo. Oud oscuro y resinoso con madera de sándalo y almizcle que proclaman elegancia árabe auténtica.',
    exhaustiveDescription: 'Honor & Glory es la cumbre de la línea Bade\'e Al Oud. Una composición gourmand de alta joyería que abre con una explosión de piña dorada y caramelo brulee, revelando en su corazón una vainilla opulenta y musgo resinoso. Creado para celebraciones de lujo y momentos únicos, es la definición del prestigio olfativo árabe moderno.',
    occasion: 'Lujo & Celebración',
    longevity: '8h+',
    sillage: 'Strong',
    season: 'Fall/Spring',
    vibe: 'Exotic Luxury',
    topNotes: ['Piña', 'Crème Brûlée'],
    heartNotes: ['Vainilla', 'Caramelo'],
    baseNotes: ['Musgo', 'Ámbar Resinoso'],
    notes: ['Piña', 'Crème Brûlée', 'Vainilla', 'Musgo'],
    occasions: ['evento_especial', 'cita_nocturna'],
    seasons: ['spring', 'fall', 'winter'],
    scentStyle: ['dulce', 'maderoso'],
    longevities: ['high'],
  },

  // ── 2 ──────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/asad-bourbon-1.webp",
    brand: 'Lattafa',
    name: 'Asad Bourbon',
    family: 'Oriental Especiado',
    match: 'Exótico, sofisticado, vibraciones "Old Money".',
    description: 'Lavanda y pimienta negra que abren un corazón de coco y sal marina. Un fondo de vainilla suntuosa que evoca el viejo dinero.',
    exhaustiveDescription: 'Asad Bourbon transporta al explorador sophisticated a un universo de calidez y prestigio. La apertura combina lavanda aromática con cardamomo audaz, resolviendo en un corazón terroso. La base de vainilla bourbon suntuosa ancla la composición.',
    occasion: 'Sofisticación & Viajes de Lujo',
    longevity: '10h+',
    sillage: 'Strong',
    season: 'Winter/Night',
    vibe: 'Boozy/Elegant',
    topNotes: ['Lavanda', 'Pimienta Negra'],
    heartNotes: ['Agua de Coco', 'Sal Marina'],
    baseNotes: ['Vainilla', 'Almizcle Blanco'],
    notes: ['Lavanda', 'Pimienta Negra', 'Coco', 'Vainilla'],
    occasions: ['evento_especial', 'cita_nocturna'],
    seasons: ['winter', 'fall'],
    scentStyle: ['especiado', 'dulce'],
    longevities: ['beast'],
  },

  // ── 3 ──────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/fackar.webp",
    brand: 'Lattafa',
    name: 'Fakhar Men',
    family: 'Amaderado Especiado',
    match: 'La elegancia profesional definitiva.',
    description: 'Manzana, bergamota y jengibre lideran una apertura vibrante antes de ceder a salvia aromática y enebro. La fragancia del hombre que llega a la sala y cambia el ambiente.',
    exhaustiveDescription: 'Fakhar Men ("Orgullo" en árabe) es la quintaesencia de la elegancia masculina profesional. Su apertura cítrico-especiada de manzana, bergamota y jengibre crea un impacto inmediato. El corazón herbal de salvia y bayas de enebro introduce sofisticación botánica.',
    occasion: 'Elegancia Profesional',
    longevity: '7h',
    sillage: 'Moderate',
    season: 'Spring/Summer',
    vibe: 'Office/Fresh',
    topNotes: ['Manzana', 'Bergamota', 'Jengibre'],
    heartNotes: ['Salvia', 'Bayas de Enebro'],
    baseNotes: ['Madera de Cedro', 'Sándalo'],
    notes: ['Manzana', 'Bergamota', 'Jengibre', 'Salvia'],
    occasions: ['oficina_diario', 'deporte_aire_libre'],
    seasons: ['spring', 'summer', 'fall'],
    scentStyle: ['fresco', 'maderoso'],
    longevities: ['moderate'],
  },

  // ── 4 ──────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/yara-candy.webp",
    brand: 'Lattafa',
    name: 'Yara Candy',
    family: 'Gourmand Floral',
    match: 'Una adicción dulce y de alto nivel.',
    description: 'Frutas confitadas, vainilla y malvavisco crean una explosión gourmand irresistible. La fragancia que conquista corazones en cualquier ambiente casual.',
    exhaustiveDescription: 'Yara Candy es el capricho olfativo más irresistible de Lattafa. Una construcción gourmand de alta joyería que combina frutas confitadas vibrantes con un corazón cremoso de vainilla artesanal y la suavidad aérea del malvavisco. Es una fragancia lúdica con refinamiento.',
    occasion: 'Casual & Eventos Sociales',
    longevity: '6h',
    sillage: 'Moderate',
    season: 'Spring/Day',
    vibe: 'Sweet/Youthful',
    topNotes: ['Frutas Confitadas', 'Frambuesa'],
    heartNotes: ['Vainilla Artesanal', 'Malvavisco'],
    baseNotes: ['Almizcle Dulce', 'Benjuí'],
    notes: ['Frutas Confitadas', 'Vainilla', 'Malvavisco', 'Almizcle'],
    occasions: ['oficina_diario', 'evento_especial'],
    seasons: ['spring', 'fall'],
    scentStyle: ['dulce'],
    longevities: ['moderate'],
  },

  // ── 5 ──────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/amber-oud-gold.edition.webp",
    brand: 'Al Haramain',
    name: 'Amber Oud Gold',
    family: 'Ámbar Amaderado',
    match: 'El "Gold Standard" del lujo frutal árabe.',
    description: 'Bergamota, notas verdes, melón y piña se fusionan con ámber solar y un almizcle imponente. Ícono de lujo accesible que conquista día y noche.',
    exhaustiveDescription: 'Amber Oud Gold Edition represents el cénit de la línea Amber Oud. Su apertura combina bergamota brillante, notas verdes frescas, melón jugoso y piña tropical en un acorde frutal de alta joyería. El corazón revela ámber solar dorado que evoluciona hacia una base de almizcle puro.',
    occasion: 'Presencia & Impacto Total',
    longevity: '12h+',
    sillage: 'Enormous',
    season: 'All Year (Night)',
    vibe: 'Party/Impact',
    topNotes: ['Bergamota', 'Notas Verdes', 'Melón'],
    heartNotes: ['Piña Tropical', 'Ámbar Solar'],
    baseNotes: ['Almizcle', 'Sándalo Dorado'],
    notes: ['Bergamota', 'Piña', 'Ámbar', 'Almizcle'],
    occasions: ['evento_especial', 'cita_nocturna'],
    seasons: ['spring', 'summer', 'fall', 'winter'],
    scentStyle: ['dulce', 'fresco'],
    longevities: ['beast'],
  },

  // ── 6 ──────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/carbon-edition.webp",
    brand: 'Al Haramain',
    name: 'Amber Oud Carbon',
    family: 'Amaderado Aromático',
    match: 'Tech-luxe, afilado y moderno.',
    description: 'Lavanda fresca, bergamota y salvia marina con un fondo de vetiver terroso. La respuesta árabe a la fragancia masculina de carbono.',
    exhaustiveDescription: 'Amber Oud Carbon Edition es la versión más contemporánea y tecnológica de la familia Amber Oud. Abre con lavanda aromática y bergamota luminosa, transitando por un corazón de salvia marina.',
    occasion: 'Officina & Mundo Corporativo',
    longevity: '8h',
    sillage: 'Moderate',
    season: 'Summer/Spring',
    vibe: 'Clean/Professional',
    topNotes: ['Lavanda', 'Bergamota'],
    heartNotes: ['Salvia', 'Notas Marinas'],
    baseNotes: ['Vetiver', 'Almizcle Gris'],
    notes: ['Lavanda', 'Bergamota', 'Salvia', 'Vetiver'],
    occasions: ['oficina_diario', 'deporte_aire_libre'],
    seasons: ['summer', 'spring', 'fall'],
    scentStyle: ['fresco', 'maderoso'],
    longevities: ['high'],
  },

  // ── 7 ──────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/ameerat-al-arab.webp",
    brand: 'Paris Corner',
    name: 'Ameerat Al Arab',
    family: 'Floral Frutal',
    match: 'La esencia de una princesa árabe.',
    description: 'Uva fresca, naranja, jazmín blanco con fondo de almizcle y sándalo. Ultra-femenina, delicada pero memorable.',
    exhaustiveDescription: 'Ameerat Al Arab ("Princesa de los Árabes") es un tributo olfativo a la feminidad suprema árabe. La apertura de uva fresca y naranja luminosa crea una primera impresión inmediatamente memorable. El corazón de jazmín blanco puro añade profundidad floral de alta costura.',
    occasion: 'Romance & Alta Feminidad',
    longevity: '7h',
    sillage: 'Moderate',
    season: 'Summer',
    vibe: 'Floral/Feminine',
    topNotes: ['Uva', 'Naranja'],
    heartNotes: ['Jazmín Blanco'],
    baseNotes: ['Almizcle', 'Sándalo'],
    notes: ['Uva', 'Naranja', 'Jazmín', 'Almizcle'],
    occasions: ['cita_nocturna', 'oficina_diario'],
    seasons: ['summer', 'spring'],
    scentStyle: ['dulce', 'fresco'],
    longevities: ['moderate'],
  },

  // ── 8 ──────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/hawas-1.webp",
    brand: 'Rasasi',
    name: 'Hawas',
    family: 'Acuático Beast',
    match: 'Potencia beast-mode con refinamiento cítrico.',
    description: 'Manzana, bergamota y canela junto a notas acuáticas, ciruela y ámbergris. Poder de verano con estela devastadora.',
    exhaustiveDescription: 'Hawas ("Obsesión" en árabe) es el titan del verano olfativo. Su apertura combina manzana fresca y bergamota luminosa con una chispa de canela audaz. El corazón acuático y la ciruela jugosa crean un contraste irresistible entre frescura y sensualidad. La base de ambergris dota a esta fragancia de una estela brutal.',
    occasion: 'Playa & Conquest de Verano',
    longevity: '9h',
    sillage: 'Strong',
    season: 'Summer/Day',
    vibe: 'Sexy/Aquatic',
    topNotes: ['Manzana', 'Bergamota', 'Canela'],
    heartNotes: ['Notas Acuáticas', 'Ciruela'],
    baseNotes: ['Ambergris', 'Almizcle Marino'],
    notes: ['Manzana', 'Bergamota', 'Notas Acuáticas', 'Ambergris'],
    occasions: ['evento_especial', 'cita_nocturna', 'deporte_aire_libre'],
    seasons: ['summer', 'spring'],
    scentStyle: ['fresco', 'especiado'],
    longevities: ['high', 'beast'],
  },

  // ── 9 ──────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/electric.webp",
    brand: 'Turathi',
    name: 'Turathi Blue',
    family: 'Cítrico Azul',
    match: 'La obra maestra cítrica de alto impacto.',
    description: 'Pomelo brillante, ámber cálido y notas amaderadas eléctricas. La fragancia eléctrica para momentos de máximo impacto.',
    exhaustiveDescription: 'Turathi Blue es el destello cítrico más audaz de la perfumería contemporánea árabe. Su apertura de pomelo explota con energía solar pura antes de revelar un corazón de ámber cálido que añade calidad y peso. La base amaderada eléctrica crea una firma única que parece vibrar sobre la piel.',
    occasion: 'Eventos de Alto Impacto',
    longevity: '8h+',
    sillage: 'High',
    season: 'Summer/Spring',
    vibe: 'Versatile Blue',
    topNotes: ['Pomelo', 'Bergamota'],
    heartNotes: ['Ámbar Cálido'],
    baseNotes: ['Notas Amaderadas', 'Almizcle Eléctrico'],
    notes: ['Pomelo', 'Ámbar', 'Notas Amaderadas'],
    occasions: ['oficina_diario', 'evento_especial', 'deporte_aire_libre'],
    seasons: ['summer', 'spring', 'fall'],
    scentStyle: ['fresco'],
    longevities: ['high'],
  },

  // ── 10 ─────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/preciux.webp",
    brand: 'Armaf',
    name: 'Club de Nuit Precieux 1',
    family: 'Ámbar Amaderado',
    match: 'La cúspide de la línea CDN. Potencia nuclear.',
    description: 'Bergamota, pimienta rosa y piña con corazón de cedro y base de ámber. El Aventus elevado a nivel extracto con proyección extrema.',
    exhaustiveDescription: 'Club de Nuit Precieux 1 es la expresión definitiva de la icónica línea Club de Nuit de Armaf. Esta concentración extracto combina bergamota luminosa con pimienta rosa audaz y piña tropical exuberante. El corazón de cedro aromatique añade estructura y profundidad. La base de ámber puro es infinita.',
    occasion: 'Noches Exclusivas & Poder',
    longevity: '10h+',
    sillage: 'High',
    season: 'All Year',
    vibe: 'Smoky/Wealthy',
    topNotes: ['Bergamota', 'Pimienta Rosa', 'Piña'],
    heartNotes: ['Cedro Aromatique'],
    baseNotes: ['Ámbar', 'Pachuli'],
    notes: ['Bergamota', 'Piña', 'Cedro', 'Ámbar'],
    occasions: ['evento_especial', 'cita_nocturna'],
    seasons: ['summer', 'winter', 'spring', 'fall'],
    scentStyle: ['maderoso', 'fresco'],
    longevities: ['beast'],
  },

  // ── 11 ─────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/lattafa-kamrha.webp",
    brand: 'Lattafa',
    name: 'Khamrah',
    family: 'Oriental Amaderado',
    match: 'Cálido, alcohólico y extremadamente opulento.',
    description: 'Coñac, dátiles, canela y praline con base de vainilla suntuosa. El más compartido en redes. Calor y misterio en un frasco.',
    exhaustiveDescription: 'Khamrah ("Vino" en árabe) es la fragancia que viralizó TikTok perfumero. Su apertura de coñac y dátiles evoca las veladas más exclusivas de Dubái. El corazón de canela y praline añade calidez golosa sin cruzar hacia lo excesivamente dulce. La base de vainilla pura es una caricia sedosa.',
    occasion: 'Noches de Opulencia',
    longevity: '12h+',
    sillage: 'Strong',
    season: 'Winter',
    vibe: 'Gourmand/Cozy',
    topNotes: ['Coñac', 'Dátiles'],
    heartNotes: ['Canela', 'Praline'],
    baseNotes: ['Vainilla', 'Almizcle Oscuro'],
    notes: ['Coñac', 'Dátiles', 'Canela', 'Vainilla'],
    occasions: ['cita_nocturna', 'evento_especial'],
    seasons: ['winter', 'fall'],
    scentStyle: ['dulce', 'especiado'],
    longevities: ['beast'],
  },

  // ── 12 ─────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/afnan-9pm.webp",
    brand: 'Afnan',
    name: 'Afnan 9 PM',
    family: 'Oriental Vanilla',
    match: 'El Rey de la noche y la seducción.',
    description: 'Manzana, lavanda, canela, vainilla y tonka bean crean la vibración nocturna más lograda. Irresistible desde las 9 PM.',
    exhaustiveDescription: 'Afnan 9 PM es el guardián de la noche en el universo de la perfumería moderna. Eleva la fórmula golosa con manzana más jugosa, lavanda más profunda y una canela que quema con delicadeza. El corazón de vainilla y tonka bean es pura seducción magnética.',
    occasion: 'Vida Nocturna & Seducción',
    longevity: '10h',
    sillage: 'Strong',
    season: 'Winter/Night',
    vibe: 'Clubbing/Sweet',
    topNotes: ['Manzana', 'Lavanda'],
    heartNotes: ['Canela', 'Vainilla'],
    baseNotes: ['Tonka Bean', 'Ámbar'],
    notes: ['Manzana', 'Lavanda', 'Canela', 'Vainilla'],
    occasions: ['cita_nocturna', 'evento_especial'],
    seasons: ['winter', 'fall', 'spring'],
    scentStyle: ['dulce', 'especiado'],
    longevities: ['beast'],
  },

  // ── 13 ─────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/clubdenuit-intense.webp",
    brand: 'Armaf',
    name: 'Club de Nuit Intense Man',
    family: 'Chypre Frutal',
    match: 'Icónico, masculino e inquebrantable.',
    description: 'Limón, piña y abedul ahumado. El "Aventus" accesible. La fragancia de liderazgo más copiada del mundo.',
    exhaustiveDescription: 'Club de Nuit Intense Man es quizás la fragancia más influyente del siglo XXI a precio democrático. Su apertura cítrico-frutal de limón brillante y piña exuberante es imbatible. El corazón de abedul ahumado y base de pachuli la hace letalmente eficaz en el ámbito corporativo.',
    occasion: 'Versatilidad Total',
    longevity: '10h+',
    sillage: 'Enormous',
    season: 'All Year',
    vibe: 'Authority/Masculine',
    topNotes: ['Limón', 'Piña'],
    heartNotes: ['Abedul Ahumado', 'Jazmín'],
    baseNotes: ['Pachuli', 'Almizcle'],
    notes: ['Limón', 'Piña', 'Abedul', 'Almizcle'],
    occasions: ['oficina_diario', 'evento_especial', 'deporte_aire_libre'],
    seasons: ['summer', 'winter', 'spring', 'fall'],
    scentStyle: ['maderoso', 'fresco'],
    longevities: ['beast'],
  },

  // ── 14 ─────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/lattafa-asad.webp",
    brand: 'Lattafa',
    name: 'Asad',
    family: 'Oriental Especiado',
    match: 'Oscuro, especiado y autoritario. El León.',
    description: 'Pimienta negra, piña, tabaco y café con base de pachuli y sándalo. La bestia oscura del catálogo árabe.',
    exhaustiveDescription: 'Asad ("León" en árabe) vive a la altura de su nombre. La apertura de pimienta negra y piña crea una tensión magnética entre especias y dulzura. El corazón de tabaco curado y café espresso añade una dimensión oscura que pocos se atreven a explorar.',
    occasion: 'Poder & Autoridad',
    longevity: '9h',
    sillage: 'Strong',
    season: 'Winter/Fall',
    vibe: 'Spicy/Powerful',
    topNotes: ['Pimienta Negra', 'Piña'],
    heartNotes: ['Tabaco', 'Café Espresso'],
    baseNotes: ['Pachuli', 'Sándalo'],
    notes: ['Pimienta Negra', 'Tabaco', 'Pachuli', 'Sándalo'],
    occasions: ['oficina_diario', 'cita_nocturna', 'evento_especial'],
    seasons: ['winter', 'fall', 'spring'],
    scentStyle: ['especiado', 'maderoso'],
    longevities: ['high'],
  },

  // ── 15 ─────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/yara-rosa.webp",
    brand: 'Lattafa',
    name: 'Yara Rosa',
    family: 'Cremoso Floral',
    match: 'Suave, empolvado y femenino de lujo sofisticado.',
    description: 'Heliotropo, mandarina, orquídea y notas tropicales con base de vainilla suave. La fragancia femenina viral.',
    exhaustiveDescription: 'Yara Rosa es la hermana más dulce de la casa. El heliotropo empolvado abre con una dulzura celestial. La mandarina añade chispa cítrica, mientras que la orquídea en su corazón proporciona un carácter decididamente exótico y vibrante.',
    occasion: 'Feminidad Sofisticada',
    longevity: '7h',
    sillage: 'Moderate',
    season: 'Spring/Summer',
    vibe: 'Creamy/Tropical',
    topNotes: ['Heliotropo', 'Mandarina'],
    heartNotes: ['Orquídea', 'Notas Tropicales'],
    baseNotes: ['Vainilla Suave', 'Almizcle Rosa'],
    notes: ['Heliotropo', 'Mandarina', 'Orquídea', 'Vainilla'],
    occasions: ['oficina_diario', 'cita_nocturna'],
    seasons: ['summer', 'spring', 'fall'],
    scentStyle: ['dulce'],
    longevities: ['moderate'],
  },

  // ── 16 ─────────────────────────────────────────────────────────────────────
  {
    image: "/perfumes/dubai-night.webp",
    brand: 'Al Haramain',
    name: 'Amber Oud Dubai Night',
    family: 'Cuero / Oud',
    match: 'El alma misteriosa y oscura de la noche del desierto.',
    description: 'Cítricos, azafrán y oud con base de almizcle oscuro. Misterio total. Solo para quienes no tienen miedo a destacar.',
    exhaustiveDescription: 'Amber Oud Dubai Night es la fragancia que solo la ciudad más ambiciosa del mundo podía inspirar. La apertura cítrica fresca se transform rápidamente cuando el azafrán dorado hace su entrada. El oud puro es estrella indiscutible, profundo y majestuoso.',
    occasion: 'Misterio & Exclusividad Nocturna',
    longevity: '10h+',
    sillage: 'High',
    season: 'Winter/Night',
    vibe: 'Opulent Oud',
    topNotes: ['Cítricos', 'Azafrán'],
    heartNotes: ['Oud Puro'],
    baseNotes: ['Almizcle Oscuro', 'Ámbar Resinoso'],
    notes: ['Azafrán', 'Oud', 'Almizcle', 'Ámbar'],
    occasions: ['cita_nocturna', 'evento_especial'],
    seasons: ['winter'],
    scentStyle: ['especiado', 'maderoso'],
    longevities: ['beast'],
  },
];

```

### src\lib\utils.ts
```javascript
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

