import {
  Flower2,
  ThermometerSun,
  FlaskConical,
  Activity,
  Droplets,
  ShieldCheck,
  Wind,
  Layers,
} from 'lucide-react'

// ─────────────────────────────────────────────────────────────────────────────
// "El Arte de la Fragancia" — fuente única de los 8 artículos educativos.
//
// La consumen tres lugares:
//   - src/components/education-section.tsx  (tarjetas en la home)
//   - src/app/aprende/page.tsx              (índice)
//   - src/app/aprende/[slug]/page.tsx       (artículo completo)
//   - src/app/sitemap.ts                    (URLs)
//
// Este módulo NO lleva "use client": lo importan tanto Server como Client
// Components, así que tiene que poder resolverse en los dos grafos.
// ─────────────────────────────────────────────────────────────────────────────

export type Level = 'basico' | 'intermedio' | 'avanzado'

export const levelMeta: Record<Level, { label: string; color: string; bg: string; border: string }> = {
  basico: { label: 'Básico', color: '#5fe3a1', bg: 'rgba(18,163,107,0.16)', border: 'rgba(31,191,127,0.45)' },
  intermedio: { label: 'Intermedio', color: '#f4d58d', bg: 'rgba(212,175,55,0.16)', border: 'rgba(212,175,55,0.5)' },
  avanzado: { label: 'Avanzado', color: '#c9b6ff', bg: 'rgba(139,92,246,0.16)', border: 'rgba(139,92,246,0.5)' },
}

/** Una sección del artículo: un <h2> con texto y/o una lista de <h3>. */
export interface ArticleSection {
  heading: string
  body?: string
  items?: Array<{ term: string; body: string }>
}

export interface Article {
  slug: string
  order: string
  /** Título completo — se usa como el único <h1> de la página. */
  title: string
  /** Título corto para tarjetas e índice. */
  shortTitle: string
  teaser: string
  /** <title> de la pestaña. Objetivo ~60 caracteres. */
  metaTitle: string
  /** meta description. Objetivo ~155 caracteres. */
  metaDescription: string
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>
  iconColor: string
  image: string
  level: Level
  readTime: string
  intro: string
  sections: ArticleSection[]
  /** Nombres exactos de src/lib/perfumes.ts. */
  relatedPerfumes: string[]
  /** Por qué esos perfumes conectan con el tema del artículo. */
  relatedNote: string
}

const UNSPLASH = (id: string) => `https://images.unsplash.com/${id}?w=800&q=80&auto=format&fit=crop`

export const articles: Article[] = [
  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'familias-olfativas',
    order: '01',
    title: 'Las Familias Olfativas: el mapa de los aromas',
    shortTitle: 'Las Familias Olfativas',
    teaser: 'El sistema de clasificación que predice cómo huele un perfume.',
    metaTitle: 'Las Familias Olfativas | AuraDecant',
    metaDescription:
      'Oriental, floral, fresco y amaderado: la guía para entender cómo se clasifican los perfumes y predecir cómo huele uno antes de probarlo.',
    icon: Flower2,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1465146344425-f00d5f5c8f07'),
    level: 'basico',
    readTime: '2 min',
    intro:
      'Las fragancias se organizan en familias olfativas — el sistema de clasificación más importante de la perfumería moderna. Saber a qué familia pertenece un perfume es la forma más rápida de anticipar cómo va a oler.',
    sections: [
      {
        heading: 'Las cuatro grandes familias',
        items: [
          {
            term: 'Oriental',
            body: 'Especiado, cálido y amaderado, con notas de vainilla, oud, ámbar y resinas. Son perfumes intensos y sensuales, ideales para la noche y el frío.',
          },
          {
            term: 'Floral',
            body: 'La familia más grande, dominada por rosas, jazmín, tuberosa y lirio. Versátil y romántica.',
          },
          {
            term: 'Fresco',
            body: 'Cítricos, notas acuáticas, verdes y aromáticas. Perfectos para el calor y el día a día.',
          },
          {
            term: 'Amaderado',
            body: 'Cedro, sándalo, vetiver y pachulí. Sofisticados y con gran longevidad.',
          },
        ],
      },
      {
        heading: 'Las subfamilias: el segundo nivel',
        body: 'Dentro de cada familia existen subfamilias que afinan mucho más la descripción. Un perfume puede ser **Oriental Gourmand** (dulce y comestible, como Khamrah), **Floral Frutal** (como Yara Candy) o **Amaderado Aromático** (como Club de Nuit). La subfamilia es la que te dice si un oriental va a ser goloso o seco, y si un floral va a ser fresco o denso.',
      },
      {
        heading: 'Por qué conviene conocerlas',
        body: 'Conocer la familia de un perfume te permite predecir cómo va a oler antes de probarlo, y entender por qué ciertos perfumes te gustan más que otros. Si descubrís que casi todo lo que usás cae en la misma familia, ya tenés un mapa para elegir el próximo sin equivocarte.',
      },
    ],
    relatedPerfumes: ['Khamrah', 'Yara Candy', 'Club de Nuit Intense Man'],
    relatedNote: 'Un ejemplo de cada subfamilia mencionada arriba, para que puedas oler la diferencia.',
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'temperatura-y-estacion',
    order: '02',
    title: 'Temperatura y estación: la física detrás del aroma',
    shortTitle: 'Temperatura y Estación',
    teaser: 'Por qué el calor y el frío cambian todo en tu fragancia.',
    metaTitle: 'Temperatura y Estación del Perfume | AuraDecant',
    metaDescription:
      'Por qué el calor amplifica la proyección y el frío la suprime, y cómo elegir la fragancia correcta para cada estación del año.',
    icon: ThermometerSun,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1418985991508-e47386d96a71'),
    level: 'basico',
    readTime: '2 min',
    intro:
      'La temperatura ambiente tiene un impacto directo y medible en cómo se percibe una fragancia. No es una impresión subjetiva: es física de la evaporación.',
    sections: [
      {
        heading: 'Verano y climas cálidos',
        body: 'El calor acelera la evaporación de las moléculas aromáticas. Esto amplifica la proyección y puede hacer que perfumes intensos como el 9PM o el Khamrah resulten abrumadores. Para el calor, las fragancias frescas y cítricas (familia Fresco) y los florales ligeros proyectan de manera equilibrada sin saturar el ambiente.',
      },
      {
        heading: 'Invierno y climas fríos',
        body: 'El frío suprime la evaporación molecular. Por eso necesitás fragancias con mayor concentración y notas más densas: orientales, amaderados y oud funcionan a la perfección porque sus moléculas pesadas se perciben aún en temperaturas bajas.',
      },
      {
        heading: 'La regla práctica',
        body: 'Cuanto más frío el clima, más intenso puede ser el perfume. Un **Amber Oud** en verano puede ser difícil de usar; en invierno, es exactamente lo que necesitás. Esto también explica por qué los países árabes, con climas extremos de calor y frío, desarrollaron las fragancias más potentes del mundo.',
      },
    ],
    relatedPerfumes: ['Mandarin Sky', '9PM', 'Amber Oud Gold Edition'],
    relatedNote: 'Uno para el calor, dos para el frío: el mismo criterio del artículo aplicado al catálogo.',
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'edp-vs-edt-vs-parfum',
    order: '03',
    title: 'Concentración: EDP vs EDT vs Parfum',
    shortTitle: 'EDP vs EDT vs Parfum',
    teaser: 'EDC, EDT, EDP y Parfum: qué significan esos porcentajes.',
    metaTitle: 'EDP vs EDT vs Parfum | AuraDecant',
    metaDescription:
      'Qué significan EDC, EDT, EDP y Parfum, cuánto dura cada concentración y por qué casi toda la perfumería árabe se produce como Eau de Parfum.',
    icon: FlaskConical,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1594035910387-fea47794261f'),
    level: 'basico',
    readTime: '2 min',
    intro:
      'La concentración de aceites esenciales en una fragancia determina su intensidad, su duración y su precio. Es el dato que más se ignora al comparar dos perfumes.',
    sections: [
      {
        heading: 'Las cuatro concentraciones',
        items: [
          {
            term: 'Eau de Cologne (EDC)',
            body: '2-5% de concentración. Dura 2-3 horas, ideal para el día y el verano.',
          },
          {
            term: 'Eau de Toilette (EDT)',
            body: '5-15%. Dura 4-6 horas, el formato más común para fragancias diurnas.',
          },
          {
            term: 'Eau de Parfum (EDP)',
            body: '15-20%. Dura 6-10 horas, el formato más popular en perfumería árabe porque equilibra duración e intensidad.',
          },
          {
            term: 'Parfum o Extrait',
            body: '20-40%. Dura 8-12+ horas, la mayor concentración posible, el lujo máximo.',
          },
        ],
      },
      {
        heading: 'Por qué la perfumería árabe es casi toda EDP',
        body: 'La mayoría de las fragancias árabes de Lattafa, Armaf y Afnan son EDP, lo que explica su extraordinaria duración en comparación con fragancias occidentales de la misma categoría de precio. Cuando ves **Beast Mode** en una fragancia, significa EDP con concentración alta en aceites de alta persistencia como el oud, el ámbar y la vainilla.',
      },
      {
        heading: 'La concentración cambia la evolución',
        body: 'La concentración también afecta la forma en que el perfume evoluciona: a mayor concentración, más notable la diferencia entre las notas de salida, corazón y fondo.',
      },
    ],
    relatedPerfumes: ['Khamrah', 'Asad', 'Club de Nuit Intense Man'],
    relatedNote: 'Tres EDP de alta concentración donde la duración se nota desde la primera puesta.',
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'notas-de-salida-corazon-y-fondo',
    order: '04',
    title: 'Las tres notas: cómo evoluciona un perfume en tu piel',
    shortTitle: 'Las Tres Notas',
    teaser: 'Salida, corazón y fondo: la historia en tres actos.',
    metaTitle: 'Notas de Salida, Corazón y Fondo | AuraDecant',
    metaDescription:
      'Cómo evoluciona un perfume en tu piel hora a hora, y por qué nunca deberías juzgar una fragancia en el primer spray.',
    icon: Activity,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1547887538-e3a2f32cb1cc'),
    level: 'intermedio',
    readTime: '2 min',
    intro:
      'Todo perfume de calidad cuenta una historia en tres actos sobre tu piel. Entender esa progresión es lo que separa comprar a ciegas de comprar sabiendo.',
    sections: [
      {
        heading: 'Los tres actos',
        items: [
          {
            term: 'Notas de salida',
            body: 'También llamadas notas de cabeza. Son lo primero que percibís al aplicar el perfume: duran los primeros 15-30 minutos y están compuestas por moléculas ligeras y volátiles como cítricos, frutas frescas y hierbas aromáticas. Son la primera impresión, pero no representan el perfume completo.',
          },
          {
            term: 'Notas de corazón',
            body: 'O notas medias. Emergen después de 30 minutos y duran entre 2 y 4 horas. Son el alma del perfume, compuestas por florales, especias y notas aromáticas más complejas. Es en esta etapa donde el perfume muestra su verdadero carácter.',
          },
          {
            term: 'Notas de fondo',
            body: 'O notas base. Son el fundamento que permanece en tu piel 4-8 horas después: maderas, resinas, ámbar, oud y almizcle. Son las moléculas más pesadas y persistentes, y determinan la estela del perfume.',
          },
        ],
      },
      {
        heading: 'Nunca juzgues un perfume en el primer spray',
        body: 'Esto explica por qué lo que olés en la tienda no es lo que vas a oler en tres horas. Siempre esperá al menos 30 minutos antes de decidir: si el corazón no te convence, el frasco entero no te va a convencer.',
      },
    ],
    relatedPerfumes: ['Khamrah', 'Amber Oud Gold Edition', 'Yara Rosa'],
    relatedNote: 'Tres pirámides olfativas bien marcadas, donde la evolución se sigue paso a paso.',
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'ph-de-la-piel',
    order: '05',
    title: 'pH de la piel y química personal',
    shortTitle: 'pH de la Piel',
    teaser: 'Por qué el mismo frasco huele distinto en cada persona.',
    metaTitle: 'pH de la Piel y Química Personal | AuraDecant',
    metaDescription:
      'Por qué el mismo perfume huele distinto en cada persona: pH, temperatura corporal e hidratación, y cómo hacer que dure más en tu piel.',
    icon: Droplets,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1559825481-12a05cc00344'),
    level: 'intermedio',
    readTime: '2 min',
    intro:
      'Uno de los fenómenos más fascinantes de la perfumería es que el mismo frasco puede oler de manera completamente distinta en dos personas. Esto no es marketing: tiene una explicación química concreta.',
    sections: [
      {
        heading: 'Los tres factores de tu química personal',
        items: [
          {
            term: 'El pH natural de la piel',
            body: 'Varía entre 4.5 y 6.5 según la persona, y afecta directamente cómo las moléculas aromáticas se adhieren y evolucionan. Las pieles más ácidas (pH bajo) tienden a proyectar más los cítricos y florales, mientras que las pieles alcalinas potencian los amaderados y orientales.',
          },
          {
            term: 'La temperatura corporal',
            body: 'Las personas con temperatura corporal más alta naturalmente amplifican la proyección de cualquier fragancia.',
          },
          {
            term: 'La hidratación de la piel',
            body: 'Quizás el factor más importante: la piel seca absorbe y "come" el perfume rápidamente, reduciendo su duración, mientras que la piel hidratada retiene las moléculas aromáticas por mucho más tiempo.',
          },
        ],
      },
      {
        heading: 'Cómo hacer que dure más',
        body: 'Aplicar el perfume sobre una capa de crema sin perfume o vaselina puede duplicar su duración en piel. Los puntos de pulso —muñecas, cuello, detrás de las orejas, pliegue del codo— generan calor corporal que activa y amplifica la fragancia.',
      },
    ],
    relatedPerfumes: ['Yara Rosa', 'Salvo Intense', 'Fakhar Rose'],
    relatedNote: 'Fragancias versátiles que se adaptan bien a distintos tipos de piel.',
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'como-detectar-un-perfume-original',
    order: '06',
    title: 'Cómo detectar un perfume original: guía definitiva',
    shortTitle: 'Detectar un Perfume Original',
    teaser: 'La guía definitiva para verificar la autenticidad.',
    metaTitle: 'Cómo Detectar un Perfume Original | AuraDecant',
    metaDescription:
      'Packaging, frasco, batch code, drydown y precio: cinco señales para verificar que una fragancia sea auténtica antes de comprarla.',
    icon: ShieldCheck,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1592945403244-b3fbafd7f539'),
    level: 'intermedio',
    readTime: '2 min',
    intro:
      'Con el mercado de réplicas más sofisticado que nunca, saber verificar la autenticidad de una fragancia es una habilidad esencial. Los perfumes originales tienen características específicas que las réplicas raramente replican con exactitud.',
    sections: [
      {
        heading: 'Las cinco señales',
        items: [
          {
            term: 'El packaging',
            body: 'Las cajas originales tienen tipografía perfectamente alineada, colores sólidos y uniformes, y materiales de alta calidad. Cualquier impresión borrosa, colores inconsistentes o cartón débil es señal de alerta.',
          },
          {
            term: 'El frasco',
            body: 'El vidrio original es pesado, uniforme y sin burbujas. El spray debe atomizar finamente y de manera uniforme.',
          },
          {
            term: 'El batch code',
            body: 'Cada frasco legítimo tiene un código de lote impreso o grabado en la base o el lateral, que podés verificar en checkfresh.com o checkcosmetic.net para confirmar año de producción y autenticidad.',
          },
          {
            term: 'El olor',
            body: 'Las réplicas suelen tener notas de salida similares, pero el drydown (la evolución después de 2-3 horas) es completamente diferente. Las moléculas de calidad que generan la estela larga y compleja son costosas y raramente se replican.',
          },
          {
            term: 'El precio',
            body: 'Una fragancia original tiene un costo de producción mínimo que hace imposible venderla legítimamente por debajo de cierto umbral. Si el precio parece demasiado bueno para ser verdad, generalmente lo es.',
          },
        ],
      },
    ],
    relatedPerfumes: ['Khamrah', 'Club de Nuit Intense Man', 'Amber Oud Gold Edition'],
    relatedNote: 'Todos nuestros frascos llegan sellados de fábrica y con su batch code verificable.',
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'proyeccion-y-estela',
    order: '07',
    title: 'Proyección y estela: la diferencia entre ser notado y saturar',
    shortTitle: 'Proyección y Estela',
    teaser: 'Sillage vs longevidad: presencia sin invadir.',
    metaTitle: 'Proyección y Estela (Sillage) | AuraDecant',
    metaDescription:
      'Qué es el sillage, en qué se diferencia de la longevidad y cuándo conviene Beast Mode o una proyección moderada según el contexto.',
    icon: Wind,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1495195129352-aeb325a55b65'),
    level: 'avanzado',
    readTime: '2 min',
    intro:
      'En perfumería, la **proyección** —también llamada sillage, del francés "estela de barco"— describe la nube de aroma que el perfume crea alrededor de tu cuerpo. Un perfume con alta proyección puede ser detectado por personas a 1-2 metros de distancia; uno de proyección moderada solo es perceptible en contacto cercano.',
    sections: [
      {
        heading: 'Ni máxima ni mínima: depende del contexto',
        body: 'Ninguna proyección es objetivamente mejor. La proyección **Beast Mode** es ideal para salidas nocturnas, eventos y situaciones donde querés ser percibido como una presencia olfativa fuerte. Sin embargo, en oficinas, transporte público o espacios cerrados, una proyección extrema puede resultar invasiva y generar el efecto contrario al deseado. La proyección **moderada** es la elección inteligente para el día a día: presente pero no abrumadora.',
      },
      {
        heading: 'Proyección no es lo mismo que longevidad',
        body: 'Un perfume puede tener alta longevidad (durar 12 horas en tu piel) pero proyección moderada, siendo solo perceptible de cerca después de las primeras horas. Los orientales y oud árabes generalmente tienen ambas características en su punto máximo, mientras que los frescos suelen tener buena proyección inicial que decrece rápidamente.',
      },
    ],
    relatedPerfumes: ['Club de Nuit Intense Man', 'Yara Rosa', 'Club de Nuit Urban'],
    relatedNote: 'De Beast Mode a proyección moderada, para que compares los tres registros.',
  },

  // ───────────────────────────────────────────────────────────────────────────
  {
    slug: 'layering-como-combinar-perfumes',
    order: '08',
    title: 'Capas y combinaciones: el arte de usar más de un perfume',
    shortTitle: 'Layering de Fragancias',
    teaser: 'Layering: combiná fragancias como un experto.',
    metaTitle: 'Layering: Cómo Combinar Perfumes | AuraDecant',
    metaDescription:
      'El arte de superponer fragancias: qué combinaciones funcionan, cuáles conviene evitar y cómo el layering extiende la duración.',
    icon: Layers,
    iconColor: '#f4d58d',
    image: UNSPLASH('photo-1541643600914-78b084683601'),
    level: 'avanzado',
    readTime: '2 min',
    intro:
      'El layering o superposición de fragancias es una técnica avanzada que permite crear combinaciones olfativas únicas y personalizadas. La práctica tiene raíces profundas en la perfumería árabe, donde aplicar múltiples aceites y perfumes en capas es parte de la cultura.',
    sections: [
      {
        heading: 'La regla fundamental',
        body: 'Las notas de fondo se aplican primero, las de salida después. Esto significa que un amaderado denso como el **Amber Oud** se aplica directamente sobre la piel, y un floral más ligero se aplica encima. El resultado es una fragancia completamente nueva que ninguno de los dos crearía solo.',
      },
      {
        heading: 'Combinaciones que funcionan',
        items: [
          { term: 'Fresco cítrico + amaderado', body: 'El cítrico suaviza la densidad del amaderado.' },
          { term: 'Oriental especiado + floral', body: 'El floral ilumina la pesadez del oriental.' },
          { term: 'Gourmand dulce + amaderado seco', body: 'Un contraste que crea profundidad.' },
        ],
      },
      {
        heading: 'Qué conviene evitar',
        items: [
          { term: 'Dos Beast Mode juntos', body: 'El resultado puede ser abrumador.' },
          { term: 'Dos florales similares', body: 'Se neutralizan entre sí.' },
          {
            term: 'Misma familia, distinta concentración',
            body: 'Uno termina dominando al otro y se pierde el sentido de combinarlos.',
          },
        ],
      },
      {
        heading: 'Un efecto secundario útil',
        body: 'El layering también extiende la longevidad: aplicar primero un aceite de perfume y después el spray puede añadir 3-4 horas extra de duración.',
      },
    ],
    relatedPerfumes: ['Amber Oud Gold Edition', 'Yara Rosa', 'Salvo Intense'],
    relatedNote: 'Una base amaderada, un floral para superponer y un cítrico versátil: el kit para empezar.',
  },
]

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
