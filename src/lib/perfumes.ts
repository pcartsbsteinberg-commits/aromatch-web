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
