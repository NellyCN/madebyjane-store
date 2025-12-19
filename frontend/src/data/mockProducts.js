import { Links } from "react-router-dom";

/** Mock Data - Productos */
export const mockProducts = [
  {
    id: 1,
    name: "Top Crochet Conchas Marinas",
    price: 145.00,
    description: "Top tejido a crochet en hilo de algodón pima peruano, suave y respirable. Inspirado en las conchas marinas.",
    fullDescription: "Este top tejido a crochet está elaborado en hilo de algodón pima peruano de la más alta calidad. Es suave al tacto, respirable y perfecto para climas cálidos. El diseño único de conchas marinas lo hace ideal para looks playeros o urbanos. Cada pieza es tejida a mano con atención al detalle, asegurando un producto único y duradero.",
    features: [
      "Material: 100% algodón pima peruano",
      "Tejido a mano artesanalmente", 
      "Lavable a mano con agua fría",
      "Secado plano para mantener la forma",
      "Ideal para verano y climas cálidos"
    ],
    careInstructions: "Lavar a mano con agua fría. No usar blanqueador. Secar plano. No meter a la lavadora o secadora.",
    stock: 7,
    category: "crochet",
    subcategory: "tops",
    requiresVariants: true, 
    image:
      "https://i.pinimg.com/1200x/64/dd/4b/64dd4b110f6e34b7da4c4074a3ee066d.jpg",
    tags: ["nuevo", "popular"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Marrón", hex: "#3a2b1fff", image: "https://i.pinimg.com/1200x/64/dd/4b/64dd4b110f6e34b7da4c4074a3ee066d.jpg" },
        { name: "Negro", hex: "#000000ff", image: "https://i.pinimg.com/1200x/d1/9c/ab/d19cabec77a4480624a57f7036b28dac.jpg" },
        { name: "Beige  ", hex: "#cfc5b0ff", image: "https://i.pinimg.com/1200x/4f/ac/33/4fac335ffcf499858d0d933722a24b50.jpg" }
      ],
      sizes: [
        { name: "32", measurements: " " },
        { name: "34", measurements: " " },
        { name: "36", measurements: " " },
        { name: "38", measurements: " " },
        { name: "40", measurements: " " }
      ],
    },
    gallery: [
      "https://i.pinimg.com/1200x/64/dd/4b/64dd4b110f6e34b7da4c4074a3ee066d.jpg",
      "https://i.pinimg.com/1200x/4f/ac/33/4fac335ffcf499858d0d933722a24b50.jpg",
      "https://i.pinimg.com/1200x/d1/9c/ab/d19cabec77a4480624a57f7036b28dac.jpg"
    ]
  },
  {
    id: 2,
    name: "Bolso Red Marinero",
    price: 145.50,
    description: "Bolso tipo red inspirado en redes de pesca. Súper resistente y lavable. Perfecto para playa o día casual.",
    // 🆕 CAMPOS NUEVOS:
    fullDescription: "Este bolso tipo red está inspirado en las redes de pesca tradicionales, combinando estilo y funcionalidad. Elaborado con hilos de algodón resistentes pero flexibles, es perfecto para llevar tus essentials a la playa, piscina o como complemento de tu outfit casual. Su diseño abierto permite ver el contenido mientras mantiene todo seguro.",
    features: [
      "Material: Algodón resistente y lavable",
      "Capacidad espaciosa para objetos personales",
      "Asas largas para portar al hombro o mano",
      "Ideal para playa, piscina y uso diario",
      "Ligero y fácil de guardar"
    ],
    careInstructions: "Lavar a mano con agua fría. Secar al aire libre. No usar secadora.",
    measurements: "Dimensiones: 30cm x 35cm - Asas de 50cm",
    stock: 1,
    category: "crochet",
    subcategory: "carteras",
    requiresVariants: true,
    image: "https://i.pinimg.com/1200x/c4/94/62/c49462aeb762b8e47ab71adcd1b40538.jpg",
    tags: ["popular", "últimas unidades"],
        // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Blanco/Rojo/Azul", hex: "#FFFFFF", image: "https://i.pinimg.com/1200x/c4/94/62/c49462aeb762b8e47ab71adcd1b40538.jpg" },
        { name: "Acero/Rojo/Beige", hex: "#c00303ff", image: "https://i.pinimg.com/1200x/9b/57/8d/9b578d5df8200b86757a4d9ed00630e6.jpg" },
        { name: "Celeste/Blanco", hex: "#18acfbff", image: "https://i.pinimg.com/1200x/21/da/a9/21daa9b769d464123fc795f8fdaefad1.jpg" }
      ],
      sizes: [
        { name: "Unica", measurements: "Ancho 40cm / Alto 30cm / Profundidad 8cm / Asa 45cm" }
      ],
    },
    gallery: [
      "https://i.pinimg.com/1200x/c4/94/62/c49462aeb762b8e47ab71adcd1b40538.jpg",
      "https://i.pinimg.com/1200x/9b/57/8d/9b578d5df8200b86757a4d9ed00630e6.jpg",
      "https://i.pinimg.com/1200x/21/da/a9/21daa9b769d464123fc795f8fdaefad1.jpg"
    ]
  },
  {
    id: 3,
    name: "Aretes Nácar Dorado",
    price: 27.00,
    description: "Aretes artesanales con efecto nácar y baño dorado. Elegantes y versátiles para cualquier ocasión.",
    // 🆕 CAMPOS NUEVOS:
    fullDescription: "Estos aretes artesanales presentan un hermoso efecto nácar combinado con un delicado baño dorado. Cada par es único, elaborado cuidadosamente a mano para asegurar calidad y durabilidad. Perfectos para elevar cualquier outfit, desde looks casuales hasta ocasiones especiales.",
    features: [
      "Material: Aleación con baño dorado y efecto nácar",
      "Postes de acero quirúrgico para pieles sensibles",
      "Hechos a mano artesanalmente",
      "Incluyen tapas de seguridad",
      "Peso ligero para comodidad diaria"
    ],
    careInstructions: "Evitar contacto con perfumes, cremas y agua. Guardar en seco.",
    measurements: "Longitud: 3cm - Peso: 2g por arete",
    stock: 9,
    category: "accesorios",
    subcategory: "aretes",
    requiresVariants: true,
    image: "https://i.etsystatic.com/15490967/r/il/85e6ef/3116169667/il_1588xN.3116169667_59y3.jpg",
    tags: ["nuevo"],
        // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Dorado", hex: "#d2a204ff", image: "https://i.etsystatic.com/15490967/r/il/85e6ef/3116169667/il_1588xN.3116169667_59y3.jpg" }        
      ],
      sizes: [
        { name: "Unica", measurements: "4cm" }
      ],
    },
    gallery: [
      "https://i.etsystatic.com/15490967/r/il/85e6ef/3116169667/il_1588xN.3116169667_59y3.jpg"
    ]
  },
  {
    id: 4,
    name: "Pijama Peluche - Cíclope",
    price: 120.00,
    description: "Pijama de peluche ultra suave para noches frías. Incluye abrigo con capucha y pantalón. Tallas S-M disponibles.",
    // 🆕 CAMPOS NUEVOS:
    fullDescription: "Dulce pijama de peluche con diseño de adorable cíclope. Confeccionado en tejido polar ultra suave que te mantendrá abrigado y cómodo durante las noches más frías. Incluye abrigo con capucha con detalles del personaje y pantalón ajustable. Perfecto para regalar o consentirte en invierno.",
    features: [
      "Material: Polar ultra suave de alta calidad",
      "Conjunto enterizo con capucha",
      "Capucha con detalles del personaje",
      "Bolsillos frontales en el abrigo",
      "Elásticos en puños y tobillos para mejor ajuste"
    ],
    careInstructions: "Lavable en lavadora a 30°C. No usar blanqueador. Secar en secadora a baja temperatura.",
    measurements: "Tallas disponibles: S (1.50-1.60m), M (1.60-1.70m)",
    stock: 5,
    category: "pijamas",
    subcategory: "enterizos",
    requiresVariants: true,
    image: "https://i.pinimg.com/1200x/b8/84/dd/b884dd621e06e6328cb7de4c447ef61b.jpg",
    tags: ["invierno", "acogedor"],
    
    variants: {
      colors: [
        { name: "Celeste", hex: "#ADD8E6", image: "https://i.pinimg.com/1200x/b8/84/dd/b884dd621e06e6328cb7de4c447ef61b.jpg" },
        { name: "Rosa", hex: "#FFC0CB", image: "https://i.pinimg.com/1200x/12/34/aa/imagen_pijama_rosa.jpg" }
      ],
      sizes: [
        { name: "S", measurements: "Altura 1.50-1.60m / Cintura 60-70cm" },
        { name: "M", measurements: "Altura 1.60-1.70m / Cintura 70-80cm" },
        { name: "L", measurements: "Altura 1.70-1.80m / Cintura 80-90cm" }
      ]
    },
    gallery: [
      "https://i.pinimg.com/1200x/b8/84/dd/b884dd621e06e6328cb7de4c447ef61b.jpg",
      "https://i.pinimg.com/1200x/98/54/23/imagen_pijama_detalle.jpg",
      "https://i.pinimg.com/1200x/43/12/76/imagen_pijama_modelo.jpg"
    ]
  },
  {
    id: 5,
    name: "Pijama Peluche - Panda",
    price: 120.00,
    description: "Pijama de peluche ultra suave para noches frías. Incluye abrigo con capucha y pantalón. Tallas S-M y M-L disponibles.",
    // 🆕 CAMPOS NUEVOS:
    fullDescription: "Dulce pijama de peluche con diseño de adorable pandita o conejito. Confeccionado en tejido peluche ultra suave que te mantendrá abrigado y cómodo durante las noches más frías. Incluye capucha con detalles del personaje, bolsillos laterales, cierre en el pecho, pretina en puños y basta, corte amplio oversize. Perfecto para regalar o consentirte en invierno.",
    features: [
      "Material: Peluche suave de calidad",
      "Conjunto enterizo con capucha",
      "Capucha con detalles del personaje",
      "Bolsillos laterales",
      "Pretina en puños y tobillos para mejor abrigo",
      "Diseño del personaje en el pecho, con cierre frontal",
      "Adorable colita en el trasero - Opcional (puedes solicitar sin colita al hacer tu pedido)"
    ],
    careInstructions: "Lavable en lavadora a 30°C. No usar blanqueador. Secar en secadora a baja temperatura.",
    stock: 4,
    category: "pijamas",
    subcategory: "enterizos",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/b3/fc/65/b3fc65e5798d1ccb2e0a60f102a3678b.jpg",
    tags: ["invierno", "acogedor"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "negro/blanco", hex1: "#00000000", hex2: "#ffffffff", image: "https://i.pinimg.com/736x/b3/fc/65/b3fc65e5798d1ccb2e0a60f102a3678b.jpg" },
        { name: "marron/crema", hex1: "#402f10ff", hex2: "#f4dfb8ff", image: "https://i.pinimg.com/736x/10/bc/79/10bc7991140da42b6ed2d6f54187214c.jpg" }
      ],
      sizes: [
        { name: "S-M", measurements: "Altura 2.50-1.60m / Cintura 70-80cm" },
        { name: "L-XL", measurements: "Altura 1.60-1.70m / Cintura 80-100cm" },
      ]
    },
    gallery: [
      "https://i.pinimg.com/736x/b3/fc/65/b3fc65e5798d1ccb2e0a60f102a3678b.jpg",
      "https://i.pinimg.com/736x/8a/1a/3d/8a1a3d1eece848979333a276359b21b8.jpg",
      "https://i.pinimg.com/1200x/2c/93/9a/2c939a1a43f9e8d21bc867cd98e00ef3.jpg",
      "https://i.pinimg.com/736x/10/bc/79/10bc7991140da42b6ed2d6f54187214c.jpg",
      "https://i.pinimg.com/1200x/a3/86/c2/a386c2ed6c7d1bb02b54e692e7bf850f.jpg",
    ]
  },
  {
    id: 6,
    name: "Set Bikini Crochet Conchas Verano",
    price: 279.00,
    description: "Set completo de bikini tejido a crochet con conchas marinas. Incluye top y bottom. Disponible en los colores de tu elección.",
    // 🆕 CAMPOS NUEVOS:
    fullDescription: "Elegante set de bikini tejido completamente a crochet con un diseño inspirado en las conchas marinas. Este conjunto único incluye top con soporte interno y bottom de tiro medio. Disponible en una variedad de colores vibrantes perfectos para el verano. Cada pieza es tejida a mano con atención a los detalles.",
    features: [
      "Material: Algodón pima peruano de alta calidad",
      "Set completo: top con soporte + bottom",
      "Tejido a mano artesanalmente",
      "Disponible en múltiples colores",
      "Forro interno en top para mayor comodidad"
    ],
    careInstructions: "Lavar exclusivamente a mano con agua fría. Secar plano. No retorcer.",
    measurements: "Top: Copas A-B - Bottom: Talla única (ajustable)",
    stock: 3,
    category: "crochet",
    subcategory: "bikinis",
    requiresVariants: true,
    image: "https://i.pinimg.com/1200x/0e/b2/2d/0eb22df83ba177c4e356a47ffd488abe.jpg",
    tags: ["verano", "playa"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Brown", hex: "#6b584cff", image: "https://i.pinimg.com/1200x/0e/b2/2d/0eb22df83ba177c4e356a47ffd488abe.jpg" },
        { name: "Rosa", hex: "#eeacdcff", image: "https://i.pinimg.com/736x/80/34/ab/8034ab897d3440df47748756e1cf3348.jpg" }, 
        { name: "Celeste", hex: "#419fe2ff", image: "https://i.pinimg.com/1200x/e0/e1/6b/e0e16bd2447c789d8821818ed39af5e5.jpg" }, 
      ],
      sizes: [
        { name: "32", measurements: "" },
        { name: "34", measurements: "" },
        { name: "36", measurements: "" },
        { name: "38", measurements: "" },
        { name: "40", measurements: "" }
      ],
      gallery: [
        "https://i.pinimg.com/1200x/0e/b2/2d/0eb22df83ba177c4e356a47ffd488abe.jpg",
        "https://i.pinimg.com/736x/80/34/ab/8034ab897d3440df47748756e1cf3348.jpg",
        "https://i.pinimg.com/1200x/e0/e1/6b/e0e16bd2447c789d8821818ed39af5e5.jpg"
      ]  
    },
  },
  {
    id: 7,
    name: "Pantuflas Conejito Peluche",
    price: 42.00,
    description: "Pantuflas ultra suaves con diseño de conejito. Suela antideslizante. Ideales para el hogar.",
    fullDescription: "Adorables pantuflas de conejito elaboradas en peluche ultra suave que harán que tus pies se sientan acariciados. Cuentan con suela antideslizante de goma para mayor seguridad en pisos lisos y orejitas de conejo que dan un toque divertido. Perfectas para mantener tus pies calientitos durante las mañanas y noches frías en casa.",
    features: [
      "Material: Peluche ultra suave premium",
      "Suela de goma antideslizante",
      "Diseño de conejo con orejitas",
      "Forro interno mullido para confort",
      "Ligeras y fáciles de lavar"
    ],
    careInstructions: "Lavar a mano con agua fría. No retorcer. Secar al aire libre lejos del sol directo.",
    measurements: "Tallas disponibles: 36-37, 38-39, 40-41",
    stock: 0,
    category: "pijamas",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/98/70/76/98707651f390ca3681a92f848ca698c0.jpg",
    tags: ["agotado"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "melon", hex: "#edb39aff", image: "https://i.pinimg.com/736x/98/70/76/98707651f390ca3681a92f848ca698c0.jpg" },
        { name: "gris", hex: "#6c6c6bff", image: "https://i.pinimg.com/736x/98/70/76/98707651f390ca3681a92f848ca698c0.jpg" }
      ],
      sizes: [
        { name: "35-36", measurements: "Ancho 8.00-9.00cm / Largo 23-24cm" },
        { name: "37-38", measurements: "Ancho 10.00-11.00cm / Largo 25-27cm" },
      ]
    },
    gallery: [
      "https://i.pinimg.com/736x/b3/fc/65/b3fc65e5798d1ccb2e0a60f102a3678b.jpg",
      "https://i.pinimg.com/1200x/23/8b/3a/238b3a0a74e2586dbd8a032914ef6161.jpg",
      "https://i.pinimg.com/736x/92/df/1f/92df1fe907e09c929b59f42ae3cddca5.jpg",
      "https://i.pinimg.com/1200x/87/c0/3e/87c03e3a8938cb767748137479d268d4.jpg",
      "",
    ]
  },
  {
    id: 8,
    name: "Collar Artesanal Conchas",
    price: 37.00,
    description: "Collar artesanal con conchas naturales y detalles en plata. Largo ajustable.",
    fullDescription: "Hermoso collar artesanal que combina conchas naturales recolectadas responsablemente con delicados detalles en hilo tejido. Cada concha es única, mostrando los patrones y colores que la naturaleza creó. El largo ajustable permite usarlo como collar corto o largo, adaptándose a diferentes estilos y ocasiones.",
    features: [
      "Material: Conchas naturales y hilo resistente",
      "Largo ajustable de 40-50cm",
      "Cierre con nudo deslizante",
      "Cada pieza es única y natural",
      "Ideal para looks boho y playeros"
    ],
    careInstructions: "Limpiar con paño húmedo. Evitar contacto con productos químicos.",
    measurements: "Largo ajustable: 40cm - 50cm",
    stock: 6,
    category: "accesorios",
    subcategory: "chokers-conchas",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/30/d9/2a/30d92a104c16b4ef28391e7890e52a9b.jpg",
    tags: ["artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Dorado", hex: "#FFD700", image: "https://i.etsystatic.com/15490967/r/il/85e6ef/3116169667/il_1588xN.3116169667_59y3.jpg" },
        { name: "Nácar Blanco", hex: "#F8F8FF", image: "https://i.pinimg.com/736x/30/d9/2a/30d92a104c16b4ef28391e7890e52a9b.jpg" }
      ]
    },

    gallery: [
      "https://i.pinimg.com/736x/30/d9/2a/30d92a104c16b4ef28391e7890e52a9b.jpg",
      "https://i.pinimg.com/736x/30/d9/2a/30d92a104c16b4ef28391e7890e52a9b.jpg",
      "https://i.pinimg.com/736x/30/d9/2a/30d92a104c16b4ef28391e7890e52a9b.jpg"
    ]  
  },
  {
    id: 9,
    name: "Collar Artesanal Floral",
    price: 37.00,
    description: "Collar artesanal con flor tejida en vivos colores. Largo ajustable.",
    fullDescription: "Encantador collar artesanal con una flor tejida a crochet en colores vibrantes que evocan la primavera. La flor central está elaborada con técnica de micro-crochet y combinada con cuentas de madera natural. Perfecto para agregar un toque de color y artesanía a tus outfits diarios o especiales.",
    features: [
      "Flor tejida a mano con micro-crochet",
      "Cuentas de madera natural ligera",
      "Largo ajustable para múltiples usos",
      "Cierre metálico dorado",
      "Colores vibrantes y duraderos"
    ],
    careInstructions: "Limpieza en seco solamente. Evitar humedad y productos químicos.",
    measurements: "Largo: 45cm - Diámetro flor: 4cm",
    stock: 6,
    category: "crochet",
    subcategory: "chokers",
    requiresVariants: true,
    image: "https://i.pinimg.com/1200x/89/78/f0/8978f006b43b2ea385b5b8f338599a48.jpg",
    tags: ["nuevo", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Multicolor", hex: "#5b3df3ff", image: "https://i.pinimg.com/1200x/89/78/f0/8978f006b43b2ea385b5b8f338599a48.jpg" },
        { name: "Perla", hex: "#F8F8FF", image: "https://i.pinimg.com/736x/40/fb/ff/40fbff815b88117ea8c3ea04c13f5033.jpg" }
      ]
    },

    gallery: [
      "https://i.pinimg.com/1200x/89/78/f0/8978f006b43b2ea385b5b8f338599a48.jpg",
      "https://i.pinimg.com/736x/40/fb/ff/40fbff815b88117ea8c3ea04c13f5033.jpg"
    ]  
  },
  {
    id: 10,
    name: "Pulsera Tejida",
    price: 25.00,
    description: "Pulsera artesanal tejida en crochet. Largo ajustable.",
    fullDescription: "Delicada pulsera tejida a crochet utilizando técnica tradicional con hilos de algodón de colores naturales. Su diseño simple pero elegante la hace versátil para usar sola o apilada con otras pulseras. El cierre ajustable permite adaptarse a diferentes medidas de muñeca, asegurando comodidad perfecta.",
    features: [
      "Material: Algodón 100% natural",
      "Técnica de tejido tradicional",
      "Cierre ajustable de nudo deslizante",
      "Ligera y cómoda para uso diario",
      "Ideal para apilar con otras pulseras"
    ],
    careInstructions: "Resistente al agua, pero secar rápidamente. Evitar productos químicos agresivos.",
    measurements: "Largo ajustable: 10cm - 16cm",
    stock: 6,
    category: "crochet",
    subcategory: "pulseras",
    requiresVariants: true,
    image: "https://i.pinimg.com/1200x/6e/05/18/6e0518676f5201fca7e001d496a66f06.jpg",
   
    tags: ["nuevo", "artesanal"],
        // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Marron/Crema", hex: "#c8260dff", image: "https://i.pinimg.com/1200x/6e/05/18/6e0518676f5201fca7e001d496a66f06.jpg" },
        { name: "Giraso/beige", hex: "#f9d016ff", image: "https://i.pinimg.com/236x/5f/3b/1c/5f3b1c8fcf362bc639d105337cdbd392.jpg" },
        { name: "Natural", hex: "#F8F8FF", image: "https://i.pinimg.com/1200x/de/d6/39/ded6395fba31d8959af9cab6f43a05d1.jpg" },
        { name: "Celeste", hex: "#59c5efff", image: "https://i.pinimg.com/1200x/0f/43/55/0f4355c39be1091cf7ad8b19f7f6b6d8.jpg" },
        { name: "Blanco", hex: "#ffffffff", image: "https://i.pinimg.com/1200x/e3/4e/33/e34e3320288fca350bb63d2802d3126c.jpg" },
      ]
    },

    gallery: [
      "https://i.pinimg.com/1200x/6e/05/18/6e0518676f5201fca7e001d496a66f06.jpg",
      "https://i.pinimg.com/236x/5f/3b/1c/5f3b1c8fcf362bc639d105337cdbd392.jpg",
      "https://i.pinimg.com/1200x/de/d6/39/ded6395fba31d8959af9cab6f43a05d1.jpg",
      "https://i.pinimg.com/1200x/0f/43/55/0f4355c39be1091cf7ad8b19f7f6b6d8.jpg",
      "https://i.pinimg.com/1200x/e3/4e/33/e34e3320288fca350bb63d2802d3126c.jpg"
    ]  
  },
    {
    id: 11,
    name: "Vincha Tejida",
    price: 35.00,
    description: "Vincha artesanal tejida en crochet. Largo ajustable.",
    fullDescription: "Delicada vincha tejida a crochet utilizando técnica tradicional con hilos de algodón de colores naturales. Su diseño simple pero elegante la hace versátil para hacer match con tu outfit. El cierre ajustable permite adaptarse a diferentes medidas, asegurando comodidad perfecta.",
    features: [
      "Material: Algodón 100% natural",
      "Técnica de tejido a crochet tradicional",
      "Cierre ajustable de nudo deslizante",
      "Ligera y cómoda para uso diario",
      "Ideal para apilar con otras Vinchas"
    ],
    careInstructions: "Resistente al agua, pero secar rápidamente. Evitar productos químicos agresivos.",
    measurements: "Largo ajustable: 25cm - 33cm",
    stock: 5,
    category: "crochet",
    subcategory: "vinchas",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/eb/70/62/eb7062514ec438d2e3674a02c57ea546.jpg",
    tags: ["nuevo", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Marrón", hex: "#432207ff", image: "https://i.pinimg.com/736x/eb/70/62/eb7062514ec438d2e3674a02c57ea546.jpg" },
        { name: "Natural", hex: "#F8F8FF", image: "https://i.pinimg.com/736x/5e/5d/2a/5e5d2ac689f80e2138914e8e445200c7.jpg" },
        { name: "Cobalto", hex: "#124c69ff", image: " https://i.pinimg.com/1200x/26/d3/0a/26d30ad9b316ba4c2cd590e8ae2b6096.jpg" },
        { name: "Beige", hex: "#c3b4a3ff", image: "https://i.pinimg.com/1200x/d1/c6/83/d1c6834851587f944e22da2dcf5b6a17.jpg" },
        { name: "Perla", hex: "#faf3ebff", image: "https://i.pinimg.com/1200x/d1/c6/83/d1c6834851587f944e22da2dcf5b6a17.jpg" }
      ],
      sizes: [
        { name: "S - Largo 20-25cm", measurements: "Largo 20-25cm" },
        { name: "M - Largo 25-30cm", measurements: "Largo 25-30cm" },
        { name: "L - Largo 30-35cm", measurements: "Largo 30-35cm" }
      ],
    },
    gallery: [
      "https://i.pinimg.com/736x/eb/70/62/eb7062514ec438d2e3674a02c57ea546.jpg",
      "https://i.pinimg.com/736x/5e/5d/2a/5e5d2ac689f80e2138914e8e445200c7.jpg",
      "https://i.pinimg.com/1200x/26/d3/0a/26d30ad9b316ba4c2cd590e8ae2b6096.jpg",
      "https://i.pinimg.com/1200x/d1/c6/83/d1c6834851587f944e22da2dcf5b6a17.jpg",
      "https://i.pinimg.com/1200x/d1/c6/83/d1c6834851587f944e22da2dcf5b6a17.jpg"
    ]  
  },
  {
    id: 12,
    name: "Aretes Tejidos",
    price: 37.00,
    description: "Aretes artesanales tejidos en crochet. Con postes de plata.",
    fullDescription: "Exquisitos aretes tejidos a crochet con diseños geométricos y delicados que demuestran la maestría artesanal. Combinan la suavidad del hilo de algodón con la elegancia de postes de plata 925, creando una pieza única que es ligera pero impactante. Perfectos para quienes buscan accesorios únicos y con historia.",
    features: [
      "Tejido a crochet con hilo de algodón fino",
      "Postes de plata 925 para pieles sensibles",
      "Diseños geométricos únicos",
      "Peso ligero para comodidad prolongada",
      "Incluyen tapas de seguridad"
    ],
    careInstructions: "Limpieza con paño suave seco. Evitar agua, perfumes y cremas.",
    measurements: "Longitud: 4cm - Peso: 3g por arete",
    stock: 2,
    category: "crochet",
    subcategory: "aretes",
    requiresVariants: true,
    image: "https://i.pinimg.com/1200x/dd/5b/af/dd5baf8db10a4aade15e59d70c7b54e0.jpg",
    tags: ["nuevo", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Natural", hex: "#F8F8FF", image: "https://i.pinimg.com/1200x/dd/5b/af/dd5baf8db10a4aade15e59d70c7b54e0.jpg" },
        { name: "Tierra", hex: "#392709ff", image: "https://i.pinimg.com/736x/1e/c8/a0/1ec8a04239059cfd50be476347f2b2d7.jpg" },
        { name: "Colorfull", hex: "#cf533dff", image: "https://i.pinimg.com/736x/42/cb/f4/42cbf48d92ee994b756bd4aae26046eb.jpg" },
        { name: "Crema/Celeste", hex: "#4988d5ff", image: "https://i.pinimg.com/1200x/64/7f/80/647f8002afbefa585df0f147cdb55800.jpg" },
        { name: "Blanco/Verde", hex: "#83bd4cff", image: "https://i.pinimg.com/736x/73/d0/22/73d0227dc321efe6a607372734e8163f.jpg" },
        { name: "Rosa/Blanco/Coral", hex: "#c56444ff", image: "https://i.pinimg.com/736x/67/69/ca/6769cafca6ce71392f7944fc68208a87.jpg" },
        { name: "Verde", hex: "#269b37ff", image: "https://i.pinimg.com/1200x/d4/5c/12/d45c1274a352cb0771c773349e956588.jpg" },
        { name: "Natural", hex: "#F8F8FF", image: "https://i.pinimg.com/1200x/0b/b4/43/0bb44306510afd07afed290d6a3bd2d0.jpg" },
        { name: "Marrón", hex: "#433005ff", image: "https://i.pinimg.com/736x/52/8f/7c/528f7c8f5644740fab9ed6f81f8f8412.jpg" },
        { name: "Celeste/Amarillo/Naranja/Lila", hex: "#d4aa00ff", image: "https://i.pinimg.com/736x/40/85/3e/40853e89254f915da95ec4b823af52ae.jpg" },
        { name: "Rojo/Coral/Rosa", hex: "#2525e2ff", image: "https://i.pinimg.com/736x/70/87/34/70873435eb2154111e89f7c82f0224f5.jpg" },
        { name: "Blanco/Amarillo", hex: "#26aec3ff", image: "https://i.pinimg.com/736x/85/25/94/852594467482dca9ccb7437cb48ceb72.jpg" },
        { name: "Coral/Turqueza/Cobalto", hex: "#b7553dff", image: "https://i.pinimg.com/736x/59/7b/55/597b559377a0069de140bd40a887a063.jpg" },
        { name: "Coral/Mostaza/Crema/Turqueza", hex: "#84e7faff", image: "https://i.pinimg.com/1200x/ac/e9/45/ace94527e152da4254f5c4b7ea37bcc9.jpg" },
        { name: "Turqueza", hex: "#e28da9ff", image: "https://i.pinimg.com/736x/87/52/e6/8752e67a46b77e80996f925d360b0de5.jpg" },
        { name: "Celeste", hex: "#f6af15ff", image: "https://i.pinimg.com/736x/fc/e1/0c/fce10ca681ebbe66f5ab4ce8ebe39f92.jpg" },
        { name: "Rosa", hex: "#F8F8FF", image: "https://i.pinimg.com/1200x/b8/18/26/b818267f76247d7eb48df5963da6a9dd.jpg" },
        { name: "Amarillo", hex: "#F8F8FF", image: "https://i.pinimg.com/736x/94/f8/12/94f8123544822b8f5dc8cf86714f6feb.jpg" }, 
      ],
      sizes: [
        { name: "S - Largo 2-2.5cm", measurements: "Largo 2-2.5cm" },
        { name: "M - Largo 2.5-3.5cm", measurements: "Largo 2.5-3.5cm" },
        { name: "L - Largo 3.5-5cm", measurements: "Largo 3.5-5cm" }
      ],
    },
    gallery: [
      "https://i.pinimg.com/1200x/dd/5b/af/dd5baf8db10a4aade15e59d70c7b54e0.jpg",
      "https://i.pinimg.com/736x/1e/c8/a0/1ec8a04239059cfd50be476347f2b2d7.jpg",
      "https://i.pinimg.com/736x/42/cb/f4/42cbf48d92ee994b756bd4aae26046eb.jpg",
      "https://i.pinimg.com/1200x/64/7f/80/647f8002afbefa585df0f147cdb55800.jpg",
      "https://i.pinimg.com/736x/73/d0/22/73d0227dc321efe6a607372734e8163f.jpg",
      "https://i.pinimg.com/736x/67/69/ca/6769cafca6ce71392f7944fc68208a87.jpg",
      "https://i.pinimg.com/1200x/d4/5c/12/d45c1274a352cb0771c773349e956588.jpg",
      "https://i.pinimg.com/1200x/0b/b4/43/0bb44306510afd07afed290d6a3bd2d0.jpg",
      "https://i.pinimg.com/736x/52/8f/7c/528f7c8f5644740fab9ed6f81f8f8412.jpg",
      "https://i.pinimg.com/736x/40/85/3e/40853e89254f915da95ec4b823af52ae.jpg",
      "https://i.pinimg.com/736x/70/87/34/70873435eb2154111e89f7c82f0224f5.jpg",
      "https://i.pinimg.com/736x/85/25/94/852594467482dca9ccb7437cb48ceb72.jpg",
      "https://i.pinimg.com/736x/59/7b/55/597b559377a0069de140bd40a887a063.jpg",
      "https://i.pinimg.com/1200x/ac/e9/45/ace94527e152da4254f5c4b7ea37bcc9.jpg",
      "https://i.pinimg.com/736x/87/52/e6/8752e67a46b77e80996f925d360b0de5.jpg",
      "https://i.pinimg.com/736x/fc/e1/0c/fce10ca681ebbe66f5ab4ce8ebe39f92.jpg",
      "https://i.pinimg.com/1200x/b8/18/26/b818267f76247d7eb48df5963da6a9dd.jpg",
      "https://i.pinimg.com/736x/94/f8/12/94f8123544822b8f5dc8cf86714f6feb.jpg",   
    ]  
  },
  {
    id: 13,
    name: "Bolso Tejido Tapa",
    price: 185.00,
    description: "Bolso tejido a crochet en hilo de algodón, suave. Combina con cualquier outfit.",
    fullDescription: "Versátil bolso tejido a crochet con diseño de tapa que combina funcionalidad y estilo artesanal. Elaborado completamente en hilo de algodón de alta densidad que le da estructura y durabilidad. La tapa con botón de madera añade seguridad mientras mantiene el acceso fácil. Perfecto para el día a día, compras o como complemento de moda.",
    features: [
      "Material: Algodón de alta densidad",
      "Tejido compacto para mayor durabilidad",
      "Tapa con botón de madera natural",
      "Asas reforzadas para mayor resistencia",
      "Forro interno opcional disponible"
    ],
    careInstructions: "Limpieza en seco recomendada. Para manchas, limpiar con paño húmedo.",
    measurements: "Dimensiones: 25cm x 30cm x 12cm - Asas: 55cm",
    stock: 7,
    category: "crochet",
    subcategory: "carteras",
    requiresVariants: true,
    image: "https://i.pinimg.com/1200x/cb/99/9a/cb999a971ffe75859bc42285c7f79ae0.jpg",
    tags: ["nuevo", "popular", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Perla", hex: "#fbf8e5ff", image: "https://i.pinimg.com/1200x/cb/99/9a/cb999a971ffe75859bc42285c7f79ae0.jpg" },
        { name: "Verde", hex: "#8ee2a8ff", image: "https://i.pinimg.com/736x/94/65/83/946583999e4d2f761fefb71fd4b312a3.jpg" },
        { name: "Marrón", hex: "#433005ff", image: "https://i.pinimg.com/736x/f2/97/ad/f297ad3639e8882da9cfd3faec5d20e9.jpg" },
        { name: "Ocre/Mostaza", hex: "#b14b1fff", image: "https://i.pinimg.com/736x/80/1a/6d/801a6d3147d553bd59b1c75a106c3de1.jpg" },
        { name: "Maiz/Marrón", hex: "#f6af15ff", image: "https://i.pinimg.com/736x/16/68/e7/1668e71c72d71195ef394e7fdab8ae63.jpg" },
        { name: "Beige/Acero", hex: "#4f99bcff", image: "https://i.pinimg.com/736x/7e/0e/2f/7e0e2fa6ea11bf9ad7ac6dcf006a36b7.jpg" },
        { name: "Rojo coral", hex: "#F8F8FF", image: "https://i.pinimg.com/1200x/58/2e/45/582e4501c2ee84c96daeac1c03e13add.jpg" },
        { name: "Negro/Beige", hex: "#030303ff", image: "https://i.pinimg.com/736x/05/eb/67/05eb673e0a3364f96f90b0744f179046.jpg" },
        { name: "Beige", hex: "#d8cebcff", image: "https://i.pinimg.com/736x/74/69/d4/7469d4a89d56734626681433c40e5a10.jpg" }, 
      ],
      sizes: [
        { name: "S 18cm x 12cm x 4cm Correa 60-70cm", measurements: "Largo 2-2.5cm" },
        { name: "M 25cm x 30cm x 6cm Asa: 60-70cm", measurements: "Largo 70cm" }
      ],
    },
    gallery: [
      "https://i.pinimg.com/1200x/cb/99/9a/cb999a971ffe75859bc42285c7f79ae0.jpg",
      "https://i.pinimg.com/736x/94/65/83/946583999e4d2f761fefb71fd4b312a3.jpg",
      "https://i.pinimg.com/736x/f2/97/ad/f297ad3639e8882da9cfd3faec5d20e9.jpg",
    ]  
  },
  {
    id: 14,
    name: "Top Crochet Flores",
    price: 125.00,
    description: "Top tejido a crochet en hilo de algodón pima peruano, suave y respirable. Inspirado en la primavera.",
    fullDescription: "Encantador top tejido a crochet con un diseño floral que celebra la primavera. Elaborado en hilo de algodón pima peruano que ofrece suavidad incomparable y respirabilidad perfecta para climas cálidos. Los detalles florales están tejidos con técnica de relieve que añade textura y dimensión. Ideal para verano, festivales o como pieza statement en tu guardarropa.",
    features: [
      "Material: Algodón pima peruano premium",
      "Diseño floral en relieve tejido a mano",
      "Tirantes ajustables para mejor fit",
      "Forro interno suave para comodidad",
      "Patrón único inspirado en la primavera"
    ],
    careInstructions: "Lavar a mano con agua fría. Secar plano. No retorcer ni centrifugar.",
    measurements: [
      "  32  |     68cm - 73cm    | B 82-86cm | C 86-90cm | D 90-93cm",
   
    ],
    sizeTable: [
      { Talla: "32", "Bajo Busto": "68-73cm", Copa: "B 82-86 / C 86-90 / D 90-93", Cintura: "—" },
      { Talla: "34", "Bajo Busto": "73-79cm", Copa: "B 82-86 / C 86-90 / D 90-93", Cintura: "69-74cm" },
      { Talla: "36", "Bajo Busto": "79-85cm", Copa: "B 82-86 / C 86-90 / D 90-93", Cintura: "75-80cm" },
      { Talla: "38", "Bajo Busto": "85-91cm", Copa: "B 82-86 / C 86-90 / D 90-93", Cintura: "81-86cm" },
      { Talla: "40", "Bajo Busto": "91-96cm", Copa: "B 82-86 / C 86-90 / D 90-93", Cintura: "87-92cm" }
    ],
    stock: 7,
    category: "crochet",
    subcategory: "tops",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/57/80/dd/5780dd8cae668995c5483616dcff1d5e.jpg",
    tags: ["nuevo", "popular", "artesanal"],
        // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Perla", hex: "#fbf8e5ff", image: "https://i.pinimg.com/736x/57/80/dd/5780dd8cae668995c5483616dcff1d5e.jpg" },
        { name: "Verde Menta", hex: "#c6fcf2ff", image: "https://i.pinimg.com/736x/ba/fe/90/bafe909358d775d0eb4a7bff1f1e4658.jpg" },
        { name: "Blanco", hex: "#ffffffff", image: "https://i.pinimg.com/1200x/c9/2f/ed/c92fedaf08eac1b498beb77cdcef7a18.jpg" },
        { name: "Fucsia", hex: "#b11f91ff", image: "https://i.pinimg.com/736x/dc/68/0c/dc680cc9cc8b7652a475890c28d51a5b.jpg" },
        { name: "Moraodo", hex: "#4f286dff", image: "https://i.pinimg.com/736x/dc/68/0c/dc680cc9cc8b7652a475890c28d51a5b.jpg" },
        { name: "Rojo", hex: "#a30202ff", image: "https://i.pinimg.com/1200x/e6/d4/2a/e6d42aba98ff8d408e6859720473151e.jpg" },
        { name: "Camel", hex: "#8f654bff", image: "https://i.pinimg.com/1200x/a5/75/f3/a575f3677a6f64bb84e8b68b75d4e5e0.jpg" },
        { name: "Azul", hex: "#25347fff", image: "https://i.pinimg.com/1200x/08/07/be/0807be48f230d107bf8e48e45d05c7d7.jpg" },
        { name: "Beige", hex: "#d8cebcff", image: "https://i.pinimg.com/736x/6c/10/7a/6c107ae000326f987b18a329cc409507.jpg" }, 
      ],
      sizes: [
        { name: "32", measurements: "Contorno Bajo Busto 68-73cm COPA B 82-86cm COPA C 86-90cm COPA D 90-93cm / Cintura 64-68cm" },
        { name: "S", measurements: "Contorno Bajo Busto  73-79cm / Cintura 69-74cm" },
        { name: "M", measurements: "Contorno Bajo Busto  79-85cm / Cintura 75-80cm" },
        { name: "L", measurements: "Contorno Bajo Busto  85-91cm / Cintura 81-86cm" },
        { name: "XL", measurements: "Contorno Bajo Busto  91-96cm / Cintura 87-92cm" }
      ],
    },
    gallery: [
      "https://i.pinimg.com/736x/57/80/dd/5780dd8cae668995c5483616dcff1d5e.jpg",
      "https://i.pinimg.com/736x/ba/fe/90/bafe909358d775d0eb4a7bff1f1e4658.jpg",
      "https://i.pinimg.com/1200x/c9/2f/ed/c92fedaf08eac1b498beb77cdcef7a18.jpg",
      "https://i.pinimg.com/736x/dc/68/0c/dc680cc9cc8b7652a475890c28d51a5b.jpg",
      "https://i.pinimg.com/1200x/e6/d4/2a/e6d42aba98ff8d408e6859720473151e.jpg",
      "https://i.pinimg.com/1200x/a5/75/f3/a575f3677a6f64bb84e8b68b75d4e5e0.jpg",
      "https://i.pinimg.com/1200x/08/07/be/0807be48f230d107bf8e48e45d05c7d7.jpg",
      "https://i.pinimg.com/736x/6c/10/7a/6c107ae000326f987b18a329cc409507.jpg",
      "https://i.pinimg.com/1200x/3e/48/f5/3e48f50e6d9735492fc2696fd8b9f358.jpg"
    ]  
  },
  {
    id: 15,
    name: "Bikini Tejido a Crochet Conchitas",
    price: 255.00,
    description: "Set completo de bikini tejido a crochet con conchas marinas en el top. Incluye top y bottom. Disponible en los colores de tu elección.",
    fullDescription: "Sophisticado set de bikini tejido completamente a crochet con un elegante diseño de conchitas marinas en el top. Cada conchita está tejida individualmente y unida para crear un patrón tridimensional único. El bottom de tiro brasileño complementa el conjunto con elegancia. Disponible en colores que evocan el mar y la arena para tu verano perfecto.",
    features: [
      "Material: Algodón resistente al cloro",
      "Top con diseño 3D de conchitas",
      "Bottom de tiro brasileño",
      "Soporte interno en el top",
      "Multiple opciones de colores disponibles"
    ],
    careInstructions: "Enjuagar con agua dulce después de cada uso en mar/piscina. Lavar a mano.",
    measurements: "Top: Copas A-C - Bottom: Talla única (ajustable)",
    stock: 7,
    category: "crochet",
    subcategory: "bikinis",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/53/26/87/5326878f5339916eaa8a4909089c9aa3.jpg",
    tags: ["nuevo", "popular", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Perla", hex: "#fbf8e5ff", image: "https://i.pinimg.com/736x/57/80/dd/5780dd8cae668995c5483616dcff1d5e.jpg" },
        { name: "Verde Menta", hex: "#c6fcf2ff", image: "https://i.pinimg.com/736x/ba/fe/90/bafe909358d775d0eb4a7bff1f1e4658.jpg" },
        { name: "Blanco", hex: "#ffffffff", image: "https://i.pinimg.com/1200x/c9/2f/ed/c92fedaf08eac1b498beb77cdcef7a18.jpg" },
        { name: "Fucsia", hex: "#b11f91ff", image: "https://i.pinimg.com/736x/dc/68/0c/dc680cc9cc8b7652a475890c28d51a5b.jpg" },
        { name: "Morado", hex: "#4f286dff", image: "https://i.pinimg.com/736x/dc/68/0c/dc680cc9cc8b7652a475890c28d51a5b.jpg" },
        { name: "Rojo", hex: "#a30202ff", image: "https://i.pinimg.com/1200x/e6/d4/2a/e6d42aba98ff8d408e6859720473151e.jpg" },
        { name: "Camel", hex: "#8f654bff", image: "https://i.pinimg.com/1200x/a5/75/f3/a575f3677a6f64bb84e8b68b75d4e5e0.jpg" },
        { name: "Azul", hex: "#25347fff", image: "https://i.pinimg.com/1200x/08/07/be/0807be48f230d107bf8e48e45d05c7d7.jpg" },
        { name: "Beige", hex: "#d8cebcff", image: "https://i.pinimg.com/736x/6c/10/7a/6c107ae000326f987b18a329cc409507.jpg" }, 
      ],
      sizes: [
        { name: "32", measurements: "" },
        { name: "34", measurements: "" },
        { name: "36", measurements: "" },
        { name: "38", measurements: "" },
        { name: "40", measurements: "" }
      ],
    
      gallery: [
        "https://i.pinimg.com/736x/c8/37/73/c83773bec7be3608e50b4d25efd6082c.jpg",
        "https://i.pinimg.com/736x/a8/d2/62/a8d2622a0a83cf14a3a1a7821eb6fac7.jpg",

      ]  
    },
  },
  {
    id: 16,
    name: "Conjunto Crochet Flores",
    price: 495.00,
    description: "Conjunto completo tejido a crochet con diseño floral. Incluye top y falda coordinados.",
    fullDescription: "Exquisito conjunto completo tejido a crochet que incluye top y falda con un diseño floral coordinado. Cada pieza es una obra de arte tejida a mano con hilos de algodón de la más alta calidad. El top presenta un patrón floral detallado mientras la falda fluida complementa con un diseño más sutil. Perfecto para ocasiones especiales, bodas en la playa o eventos de verano donde quieres destacar con elegancia artesanal.",
    features: [
      "Conjunto completo: top + falda",
      "Diseño floral coordinado en ambas piezas",
      "Material: Algodón premium de alta calidad",
      "Tejido a mano con técnica avanzada",
      "Forro interno en ambas piezas"
    ],
    careInstructions: "Lavado profesional recomendado. Si lava en casa, hacer a mano con agua fría.",
    measurements: "Top: Talla única - Falda: Largo 70cm, elástico en cintura",
    stock: 7,
    category: "crochet",
    subcategory: "conjuntos",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/23/a6/3e/23a63e532c71ecd5754300c25b6b4b0b.jpg",
    tags: ["nuevo", "popular", "crochet", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Perla", hex: "#fbf8e5ff", image: "https://i.pinimg.com/736x/23/a6/3e/23a63e532c71ecd5754300c25b6b4b0b.jpg" }, 
      ],
      sizes: [
        { name: "32", measurements: "" },
        { name: "34", measurements: "" },
        { name: "36", measurements: "" },
        { name: "38", measurements: "" },
        { name: "40", measurements: "" }
      ],
    },
    gallery: [
      "https://i.pinimg.com/736x/23/a6/3e/23a63e532c71ecd5754300c25b6b4b0b.jpg",
      "https://assets.ajio.com/medias/sys_master/root/20240929/F7ji/66f8df4a260f9c41e83da5ad/-1117Wx1400H-700508927-cream-MODEL2.jpg",
      "https://sugercandy.com/cdn/shop/files/434D6117-7B91-43D0-9A98-35F76BAEFB01.jpg?v=1729094815&width=1445",
      "https://sugercandy.com/cdn/shop/files/327C1AA6-0874-41A8-876C-4728EEFF40A0.jpg?v=1729094815&width=1445"
    ]
  },
  {
    id: 17,
    name: "Bolso Tejido Circular",
    price: 245.00,
    description: "Bolso tejido a crochet en hilo de algodón, suave. Combina con cualquier outfit.",
    fullDescription: "Versátil bolso tejido a crochet con diseño circular y profundidad necesaria para llevar todo lo que necesites. Elaborado completamente en hilo de algodón de alta densidad que le da estructura y durabilidad. Correa larga para llevar al hombro. Perfecto para el día a día, compras o como complemento de tu outfit.",
    features: [
      "Material: Algodón de alta densidad",
      "Tejido compacto para mayor durabilidad",
      "Asas reforzadas para mayor resistencia",
      "Forro interno opcional disponible"
    ],
    careInstructions: "Limpieza en seco recomendada. Para manchas, limpiar con paño húmedo.",
    measurements: "Dimensiones Circular 35cm x 35cm x 10cm / Correa 60cm",
    stock: 7,
    category: "crochet",
    subcategory: "carteras",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/f0/63/41/f06341c17ed36656c101596712033ecb.jpg",
    tags: ["nuevo", "popular", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Ocre", hex: "#b14b1fff", image: "https://i.pinimg.com/736x/f0/63/41/f06341c17ed36656c101596712033ecb.jpg" },
        { name: "Perla", hex: "#f6efe3ff", image: "https://i.pinimg.com/736x/22/1e/83/221e8366569023c2415e02b7a1d0f6b3.jpg" },
        { name: "Beige", hex: "#d8cebcff", image: "https://i.pinimg.com/736x/8e/b7/83/8eb7833b05f6dd6710bced67d70d390b.jpg" },
        { name: "Rojo Coral", hex: "#ce4a30ff", image: "https://i.pinimg.com/736x/66/89/7b/66897b91df3cc8a156dbff217fa36bc7.jpg" },
        { name: "Natural", hex: "#f2eee5ff", image: "https://i.pinimg.com/1200x/47/73/1f/47731f725de6aa5c4e52106571da1c09.jpg" }, 
        { name: "Marrón Claro", hex: "#c1a686ff", image: "https://i.pinimg.com/1200x/b3/f2/9d/b3f29d10f87649182c1d09178f618b2b.jpg" },
        { name: "Verde", hex: "#559c45ff", image: "https://i.pinimg.com/736x/59/54/94/595494c87db8458b724acf4983873114.jpg" },
        { name: "Azul", hex: "#091946ff", image: "https://i.pinimg.com/1200x/ef/1b/72/ef1b72cc28bbb8b53ab62ce0e83b3642.jpg" }
      ],
      sizes: [
        { name: "Circular 35cm x 35cm x 10cm / Correa 60cm - 70cm", measurements: "Largo 60cm - 70cm" },
      ],
    },
    gallery: [
      "https://i.pinimg.com/736x/f0/63/41/f06341c17ed36656c101596712033ecb.jpg",
      "https://i.pinimg.com/736x/22/1e/83/221e8366569023c2415e02b7a1d0f6b3.jpg",
      "https://i.pinimg.com/736x/8e/b7/83/8eb7833b05f6dd6710bced67d70d390b.jpg",
      "https://i.pinimg.com/736x/66/89/7b/66897b91df3cc8a156dbff217fa36bc7.jpg",
      "https://i.pinimg.com/1200x/47/73/1f/47731f725de6aa5c4e52106571da1c09.jpg",
      "https://i.pinimg.com/1200x/b3/f2/9d/b3f29d10f87649182c1d09178f618b2b.jpg",
      "https://i.pinimg.com/736x/59/54/94/595494c87db8458b724acf4983873114.jpg",
      "https://i.pinimg.com/1200x/ef/1b/72/ef1b72cc28bbb8b53ab62ce0e83b3642.jpg"
    ]  
  },
  {
    id: 18,
    name: "Bolso Tejido Cuadrado",
    price: 225.00,
    description: "Bolso tejido a crochet en hilo de algodón, suave. Combina con cualquier outfit.",
    fullDescription: "Versátil bolso tejido a crochet con diseño en Granys y profundidad necesaria para llevar todo lo que necesites. Elaborado completamente en hilo de algodón de alta densidad que le da estructura y durabilidad. Correa larga para llevar al hombro. Perfecto para el día a día, compras o como complemento de tu outfit.",
    features: [
      "Material: Algodón de alta densidad",
      "Tejido compacto para mayor durabilidad",
      "Asas reforzadas para mayor resistencia",
      "Forro interno opcional disponible"
    ],
    careInstructions: "Limpieza en seco recomendada. Para manchas, limpiar con paño húmedo.",
    measurements: "Dimensiones: -Cuadrado 39cm x 39cm x 13cm / Correa 45cm -Cuadrado 40cm x 40cm x 6cm / Correa 65cm",
    stock: 4,
    category: "crochet",
    subcategory: "carteras",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/3e/ae/43/3eae43844e679d043680ea2abb5eb508.jpg",
    tags: ["nuevo", "popular", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Marrón/Natural", hex: "#423018ff", image: "https://i.pinimg.com/736x/3e/ae/43/3eae43844e679d043680ea2abb5eb508.jpg" },
        { name: "Negro/Natural", hex: "#030303ff", image: "https://i.pinimg.com/736x/05/eb/67/05eb673e0a3364f96f90b0744f179046.jpg" },
        { name: "Natural/Negro", hex: "#d8cebcff", image: "https://i.pinimg.com/736x/05/eb/67/05eb673e0a3364f96f90b0744f179046.jpg" },
        { name: "Natural/Celeste", hex: "#d8cebcff", image: "https://i.pinimg.com/736x/51/26/e4/5126e4ccbe98318517bf9b352f85de8c.jpg" }, 
        { name: "Beige/Natural", hex: "#a39681ff", image: "https://i.pinimg.com/736x/65/d8/a6/65d8a6c92452f087ce4a074427e81b7e.jpg" },

      ],
      sizes: [
        { name: "Cuadrado 39cm x 39cm x 13cm / Correa 45cm", measurements: "Largo 45cm" }
      ],
    },
    gallery: [
      "https://i.pinimg.com/736x/3e/ae/43/3eae43844e679d043680ea2abb5eb508.jpg",
      "https://i.pinimg.com/736x/05/eb/67/05eb673e0a3364f96f90b0744f179046.jpg",
      "https://i.pinimg.com/736x/51/26/e4/5126e4ccbe98318517bf9b352f85de8c.jpg",
      "https://i.pinimg.com/736x/65/d8/a6/65d8a6c92452f087ce4a074427e81b7e.jpg"  
    ]  
            // { name: "Crema", hex: "#b14b1fff", image: "https://i.pinimg.com/736x/74/69/d4/7469d4a89d56734626681433c40e5a10.jpg" },
    // "https://i.pinimg.com/736x/74/69/d4/7469d4a89d56734626681433c40e5a10.jpg",
  },
  {
    id: 19,
    name: "Bolso Tote Tejido en Granny",
    price: 225.00,
    description: "Bolso tejido a crochet en hilo de algodón, suave. Combina con cualquier outfit.",
    fullDescription: "Versátil bolso tejido a crochet con diseño de tapa que combina funcionalidad y estilo artesanal. Elaborado completamente en hilo de algodón de alta densidad que le da estructura y durabilidad. La tapa con botón de madera añade seguridad mientras mantiene el acceso fácil. Perfecto para el día a día, compras o como complemento de moda.",
    features: [
      "Material: Algodón de alta densidad",
      "Tejido compacto para mayor durabilidad",
      "Tapa con botón de madera natural",
      "Asas reforzadas para mayor resistencia",
      "Forro interno opcional disponible"
    ],
    careInstructions: "Limpieza en seco recomendada. Para manchas, limpiar con paño húmedo.",
    measurements: "Dimensiones: Cuadrado 40cm x 40cm x 25cm / Correa 65cm",
    stock: 3,
    category: "crochet",
    subcategory: "carteras",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/74/69/d4/7469d4a89d56734626681433c40e5a10.jpg",
    tags: ["nuevo", "popular", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Beige", hex: "#d8cebcff", image: "https://i.pinimg.com/736x/74/69/d4/7469d4a89d56734626681433c40e5a10.jpg" }, 
        { name: "Camel", hex: "#95722bff", image: "https://i.pinimg.com/1200x/55/0f/ac/550faca043a6d73e353b84e785f76522.jpg" },
        { name: "Verde/Natural", hex: "#659173ff", image: "https://i.pinimg.com/1200x/7c/16/24/7c162499c757ceaf8e17d9c1fc78308f.jpg" },
        { name: "Marrón claro/Natural", hex: "#966a52ff", image: "https://i.pinimg.com/1200x/7c/16/24/7c162499c757ceaf8e17d9c1fc78308f.jpg" },
        { name: "Negro/Natural", hex: "#000000ff", image: "https://i.pinimg.com/1200x/7c/16/24/7c162499c757ceaf8e17d9c1fc78308f.jpg" }
      ],
      sizes: [
        { name: "Cuadrado 40cm x 40cm x 25cm / Correa 65cm", measurements: "Largo 65cm" }
      ],
    },
    gallery: [

      "https://i.pinimg.com/736x/74/69/d4/7469d4a89d56734626681433c40e5a10.jpg",
      "https://i.pinimg.com/1200x/55/0f/ac/550faca043a6d73e353b84e785f76522.jpg",
      "https://i.pinimg.com/1200x/7c/16/24/7c162499c757ceaf8e17d9c1fc78308f.jpg",
      "https://i.pinimg.com/736x/bc/55/3e/bc553edae5dc0a4ffed16de58fb7c4e4.jpg",
    ]  
  },
  {
    id: 20,
    name: "Bolso Tejido Rectangular",
    price: 220.00,
    description: "Bolso tejido a crochet en hilo de algodón, suave. Combina con cualquier outfit.",
    fullDescription: "Versátil bolso tejido a crochet con diseño de tapa que combina funcionalidad y estilo artesanal. Elaborado completamente en hilo de algodón de alta densidad que le da estructura y durabilidad. La tapa con botón de madera añade seguridad mientras mantiene el acceso fácil. Perfecto para el día a día, compras o como complemento de moda.",
    features: [
      "Material: Algodón de alta densidad",
      "Tejido compacto para mayor durabilidad",
      "Tapa con botón de madera natural",
      "Asas reforzadas para mayor resistencia",
      "Forro interno opcional disponible"
    ],
    careInstructions: "Limpieza en seco recomendada. Para manchas, limpiar con paño húmedo.",
    measurements: "Dimensiones: Rectangular 32cm x 26cm x 8cm / Correa 45cm",
    stock: 5,
    category: "crochet",
    subcategory: "carteras",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/16/68/e7/1668e71c72d71195ef394e7fdab8ae63.jpg",
    tags: ["nuevo", "popular", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Marrón", hex: "#433005ff", image: "https://i.pinimg.com/736x/16/68/e7/1668e71c72d71195ef394e7fdab8ae63.jpg" },
        { name: "Maiz", hex: "#f6af15ff", image: "https://i.pinimg.com/1200x/56/50/17/565017f5b5f8cd05d4cca46b69dc7c2b.jpg" },
        { name: "Beige", hex: "#d8cebcff", image: "https://i.pinimg.com/1200x/e1/52/ad/e152adcc6d3253e56c867e0a0c1b5bf4.jpg" },
        { name: "Fucsia", hex: "#b22a6aff", image: "https://i.pinimg.com/1200x/b6/15/87/b61587968acf393e8513c339566d192e.jpg" },
        { name: "Canela", hex: "#b96143ff", image: "https://i.pinimg.com/1200x/b7/f9/b2/b7f9b20bf6aca9bac6f77934b32e69db.jpg" },
        { name: "Rojo", hex: "#b72a2aff", image: "https://i.pinimg.com/1200x/ed/14/c0/ed14c00e46d4518ffadf4e7fb9f5090c.jpg" },
        { name: "Marrón Claro", hex: "#c9ab8dff", image: "https://i.pinimg.com/736x/fd/17/e7/fd17e71c9aaff9701458103dc2782f99.jpg" },
        { name: "Verde Limón", hex: "#9ecb67ff", image: "https://i.pinimg.com/1200x/ca/da/1d/cada1d4e64ae25757356ad009aa552dc.jpg" },
        { name: "Naranja", hex: "#d1570cff", image: "https://i.pinimg.com/1200x/45/06/a7/4506a74a5bcfe9d7ddc96f7553acf15a.jpg" }
      ],
      sizes: [
        { name: "Alto Ancho Profundidad Correa 70cm", measurements: "Largo 70cm" },

      ],
    },
    gallery: [
      "https://i.pinimg.com/736x/16/68/e7/1668e71c72d71195ef394e7fdab8ae63.jpg",
      "https://i.pinimg.com/1200x/56/50/17/565017f5b5f8cd05d4cca46b69dc7c2b.jpg",
      "https://i.pinimg.com/1200x/e1/52/ad/e152adcc6d3253e56c867e0a0c1b5bf4.jpg",
      "https://i.pinimg.com/1200x/b6/15/87/b61587968acf393e8513c339566d192e.jpg",  
      "https://i.pinimg.com/1200x/b7/f9/b2/b7f9b20bf6aca9bac6f77934b32e69db.jpg",
      "https://i.pinimg.com/1200x/ed/14/c0/ed14c00e46d4518ffadf4e7fb9f5090c.jpg",
      "https://i.pinimg.com/736x/fd/17/e7/fd17e71c9aaff9701458103dc2782f99.jpg",
      "https://i.pinimg.com/1200x/ca/da/1d/cada1d4e64ae25757356ad009aa552dc.jpg",
      "https://i.pinimg.com/1200x/45/06/a7/4506a74a5bcfe9d7ddc96f7553acf15a.jpg"
    ]  
  },
    {
    id: 21,
    name: "Bolso Tejido Tipo mochila",
    price: 195.00,
    description: "Bolso tejido a crochet en hilo de algodón, suave. Combina con cualquier outfit.",
    fullDescription: "Versátil bolso tejido a crochet con diseño de tapa que combina funcionalidad y estilo artesanal. Elaborado completamente en hilo de algodón de alta densidad que le da estructura y durabilidad. La tapa con botón de madera añade seguridad mientras mantiene el acceso fácil. Perfecto para el día a día, compras o como complemento de moda.",
    features: [
      "Material: Algodón de alta densidad",
      "Tejido compacto para mayor durabilidad",
      "Tapa con botón de madera natural",
      "Asas reforzadas para mayor resistencia",
      "Forro interno opcional disponible"
    ],
    careInstructions: "Limpieza en seco recomendada. Para manchas, limpiar con paño húmedo.",
    measurements: "Dimensiones: 20cm x 27cm x 6cm - Asa: 60-75cm",
    stock: 5,
    category: "crochet",
    subcategory: "carteras",
    requiresVariants: true,
    image: "https://i.pinimg.com/1200x/58/2e/45/582e4501c2ee84c96daeac1c03e13add.jpg",
    tags: ["nuevo", "popular", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Beige/Acero", hex: "#b8b59fff", image: "https://i.pinimg.com/736x/7e/0e/2f/7e0e2fa6ea11bf9ad7ac6dcf006a36b7.jpg" },
        { name: "Rojo Coral", hex: "#aa2b37ff", image: "https://i.pinimg.com/1200x/58/2e/45/582e4501c2ee84c96daeac1c03e13add.jpg" },
        { name: "Natural/Camel", hex: "#fbf8e5ff", image: "https://i.pinimg.com/736x/fb/d6/fb/fbd6fbb094bda04b361228ea26c4d284.jpg" },
        { name: "Verde", hex: "#7a9b5aff", image: "https://i.pinimg.com/1200x/64/a2/2a/64a22a81155baccd027c51f78a3605c6.jpg" },
        { name: "Perla", hex: "#d9c497ff", image: "https://i.pinimg.com/1200x/5b/ba/00/5bba00b72401423767474ff33acc7d4d.jpg" },
        { name: "Perla/Cuentas madera", hex: "#d9c497ff", image: "https://i.pinimg.com/1200x/a5/60/fe/a560fef0d2354ecd3dca9a6874ea1b3a.jpg" },
        { name: "Colorfull 1", hex: "#e4431bff", image: "https://i.pinimg.com/1200x/c5/84/68/c58468f739b6e848ab1405e77263c7d2.jpg" },
        { name: "Colorfull 2", hex: "#8bee27ff", image: "https://i.pinimg.com/1200x/c5/84/68/c58468f739b6e848ab1405e77263c7d2.jpg" },
        { name: "Colorfull 3", hex: "#0194b6ff", image: "https://i.pinimg.com/1200x/c5/84/68/c58468f739b6e848ab1405e77263c7d2.jpg" },
        { name: "Colorfull 4", hex: "#bd4e48ff", image: "https://i.pinimg.com/1200x/c5/84/68/c58468f739b6e848ab1405e77263c7d2.jpg" },
        { name: "Colorfull 5", hex: "#b8b59fff", image: "https://i.pinimg.com/1200x/c5/84/68/c58468f739b6e848ab1405e77263c7d2.jpg" },
        { name: "Colorfull 6", hex: "#d9c497ff", image: "https://i.pinimg.com/1200x/c5/84/68/c58468f739b6e848ab1405e77263c7d2.jpg" },
        { name: "Azul/Mostaza", hex: "#201f63ff", image: "https://i.pinimg.com/1200x/c5/84/68/c58468f739b6e848ab1405e77263c7d2.jpg" },
        { name: "Guinda/Marròn", hex: "#501f13ff", image: "https://i.pinimg.com/1200x/c5/84/68/c58468f739b6e848ab1405e77263c7d2.jpg" }
      ],
      sizes: [
        { name: "20cm x 27cm x 6cm - Asa: 60-75cm", measurements: "Largo 60 - 75cm" }
      ],
    },
    gallery: [
      "https://i.pinimg.com/736x/7e/0e/2f/7e0e2fa6ea11bf9ad7ac6dcf006a36b7.jpg",
      "https://i.pinimg.com/1200x/58/2e/45/582e4501c2ee84c96daeac1c03e13add.jpg",
      "https://i.pinimg.com/736x/fb/d6/fb/fbd6fbb094bda04b361228ea26c4d284.jpg",
      "https://i.pinimg.com/1200x/64/a2/2a/64a22a81155baccd027c51f78a3605c6.jpg",
      "https://i.pinimg.com/1200x/5b/ba/00/5bba00b72401423767474ff33acc7d4d.jpg",
      "https://i.pinimg.com/1200x/a5/60/fe/a560fef0d2354ecd3dca9a6874ea1b3a.jpg",
      "https://i.pinimg.com/1200x/c5/84/68/c58468f739b6e848ab1405e77263c7d2.jpg",
      "https://i.pinimg.com/736x/39/32/eb/3932eba2bd8dd0dacb3269a030ff31bc.jpg",
      "https://i.pinimg.com/1200x/36/aa/c0/36aac03f6cd89c3c968d766d010edcba.jpg"
    ]  
  },
  {
    id: 22,
    name: "Bolso peq Tejido Tapa",
    price: 160.00,
    description: "Bolso tejido a crochet en hilo de algodón, suave. Combina con cualquier outfit.",
    fullDescription: "Versátil bolsito tejido a crochet con diseño de tapa que combina funcionalidad y estilo artesanal. Elaborado completamente en hilo de algodón de alta densidad que le da estructura y durabilidad. La tapa con diseño elegante y elementos de borlas, ondas o flecos, mantiene el acceso fácil. Perfecto para el día a día, compras o como complemento de moda. Puedes usarlo como Crossbody o como Clutch (Pídelo CON o SIN correa).",
    features: [
      "Material: Algodón de alta densidad",
      "Tejido compacto para mayor durabilidad",
      "Tapa con botón de madera natural",
      "Asas reforzadas para mayor resistencia",
      "Forro interno opcional disponible"
    ],
    careInstructions: "Limpieza en seco recomendada. Para manchas, limpiar con paño húmedo.",
    measurements: "Dimensiones: S 18cm x 12cm Correa 60-70cm / M 22cm x 15cm Correa 60-70cm / S 18cm x 12cm SIN Correa / M 22cm x 15cm SIN Correa",
    stock: 7,
    category: "crochet",
    subcategory: "carteras",
    requiresVariants: true,
    image: "https://i.pinimg.com/1200x/2f/11/c6/2f11c67a8433366a1e3e3555eb2d4f01.jpg",
    tags: ["nuevo", "popular", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Camel", hex: "#a37844ff", image: "https://i.pinimg.com/1200x/2f/11/c6/2f11c67a8433366a1e3e3555eb2d4f01.jpg" },
        { name: "Verde Olivo", hex: "#8ee2a8ff", image: "https://i.pinimg.com/1200x/2f/11/c6/2f11c67a8433366a1e3e3555eb2d4f01.jpg" },
        { name: "Azul", hex: "#433005ff", image: "https://i.pinimg.com/1200x/08/5d/59/085d593018586aeadc74a144c9fa3bae.jpg" },
        { name: "Verde/Perla ", hex: "#8acea1ff", image: "https://i.pinimg.com/736x/94/65/83/946583999e4d2f761fefb71fd4b312a3.jpg" },
        { name: "Perla/Verde", hex: "#fbf8e5ff", image: "https://i.pinimg.com/736x/94/65/83/946583999e4d2f761fefb71fd4b312a3.jpg" },
        { name: "Beige Borlas", hex: "#d8cebcff", image: "https://i.pinimg.com/736x/ea/1d/69/ea1d69ce8a3dcb8677c02daf97e7d80e.jpg" },
        { name: "Celeste", hex: "#83e9eeff", image: "https://i.pinimg.com/736x/02/ad/8b/02ad8b798716b6032501dc7494bc1a76.jpg" }
      ],
      sizes: [
        { name: "S 18cm x 12cm Correa 60-70cm", measurements: "Largo 60-70cm" },        
        { name: "M 22cm x 15cm Correa 60-70cm", measurements: "Largo 60-70cm" },
        { name: "S 18cm x 12cm SIN Correa", measurements: "" },
        { name: "M 22cm x 15cm  SIN Correa", measurements: "" }
      ],
    },
    gallery: [
      "https://i.pinimg.com/1200x/2f/11/c6/2f11c67a8433366a1e3e3555eb2d4f01.jpg",
      "https://i.pinimg.com/736x/94/65/83/946583999e4d2f761fefb71fd4b312a3.jpg",
      "https://i.pinimg.com/1200x/08/5d/59/085d593018586aeadc74a144c9fa3bae.jpg", 
      "https://i.pinimg.com/736x/ea/1d/69/ea1d69ce8a3dcb8677c02daf97e7d80e.jpg",
      "https://i.pinimg.com/736x/02/ad/8b/02ad8b798716b6032501dc7494bc1a76.jpg"
    ]
  },
    {
    id: 23,
    name: "Vestido Crochet Flores",
    price: 750.00,
    description: "Vestido tejido a crochet en hilo de algodón pima peruano, suave y respirable. Inspirado en la primavera.",
    fullDescription: "Encantador Vestido tejido a crochet con un diseño floral que celebra la primavera. Elaborado en hilo de algodón pima peruano que ofrece suavidad incomparable y respirabilidad perfecta para climas cálidos. Los detalles florales están tejidos con técnica de relieve que añade textura y dimensión. Ideal para verano, festivales o como pieza statement en tu guardarropa.",
    features: [
      "Material: Algodón pima peruano premium",
      "Diseño floral en relieve tejido a mano",
      "Tirantes ajustables para mejor fit",
      "Forro interno suave para comodidad",
      "Patrón único inspirado en la primavera"
    ],
    careInstructions: "Lavar a mano con agua fría. Secar plano. No retorcer ni centrifugar.",
    stock: 7,
    category: "crochet",
    subcategory: "tops",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/c8/37/73/c83773bec7be3608e50b4d25efd6082c.jpg",
    tags: ["nuevo", "popular", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Perla", hex: "#fbf8e5ff", image: "https://i.pinimg.com/736x/57/80/dd/5780dd8cae668995c5483616dcff1d5e.jpg" },
        { name: "Verde Menta", hex: "#c6fcf2ff", image: "https://i.pinimg.com/736x/ba/fe/90/bafe909358d775d0eb4a7bff1f1e4658.jpg" },
        { name: "Blanco", hex: "#ffffffff", image: "https://i.pinimg.com/1200x/c9/2f/ed/c92fedaf08eac1b498beb77cdcef7a18.jpg" },
        { name: "Fucsia", hex: "#b11f91ff", image: "https://i.pinimg.com/736x/dc/68/0c/dc680cc9cc8b7652a475890c28d51a5b.jpg" },
        { name: "Morado", hex: "#4f286dff", image: "https://i.pinimg.com/736x/dc/68/0c/dc680cc9cc8b7652a475890c28d51a5b.jpg" },
        { name: "Rojo", hex: "#a30202ff", image: "https://i.pinimg.com/1200x/e6/d4/2a/e6d42aba98ff8d408e6859720473151e.jpg" },
        { name: "Camel", hex: "#8f654bff", image: "https://i.pinimg.com/1200x/a5/75/f3/a575f3677a6f64bb84e8b68b75d4e5e0.jpg" },
        { name: "Azul", hex: "#25347fff", image: "https://i.pinimg.com/1200x/08/07/be/0807be48f230d107bf8e48e45d05c7d7.jpg" },
        { name: "Beige", hex: "#d8cebcff", image: "https://i.pinimg.com/736x/6c/10/7a/6c107ae000326f987b18a329cc409507.jpg" }, 
      ],
      sizes: [
        { name: "32", measurements: "" },
        { name: "34", measurements: "" },
        { name: "36", measurements: "" },
        { name: "38", measurements: "" },
        { name: "40", measurements: "" }
      ],
    },
    gallery: [
      "https://i.pinimg.com/736x/c8/37/73/c83773bec7be3608e50b4d25efd6082c.jpg",
      "https://i.pinimg.com/736x/a8/d2/62/a8d2622a0a83cf14a3a1a7821eb6fac7.jpg",

    ]  
  },
  {
    id: 24,
    name: "Vestido Crochet Granys",
    price: 950.00,
    description: "Vestido tejido a crochet en hilo de algodón pima peruano, suave y respirable. Inspirado en la primavera.",
    fullDescription: "Encantador Vestido tejido a crochet con un diseño floral que celebra la primavera. Elaborado en hilo de algodón pima peruano que ofrece suavidad incomparable y respirabilidad perfecta para climas cálidos. Los detalles florales están tejidos con técnica de relieve que añade textura y dimensión. Ideal para verano, festivales o como pieza statement en tu guardarropa.",
    features: [
      "Material: Algodón pima peruano premium",
      "Diseño floral en relieve tejido a mano",
      "Tirantes ajustables para mejor fit",
      "Forro interno suave para comodidad",
      "Patrón único inspirado en la primavera"
    ],
    careInstructions: "Lavar a mano con agua fría. Secar plano. No retorcer ni centrifugar.",
    stock: 7,
    category: "crochet",
    subcategory: "tops",
    requiresVariants: true,
    image: "https://i.pinimg.com/1200x/bc/c6/ab/bcc6ab6a1018e411a418a9651d0c8442.jpg",
    tags: ["nuevo", "popular", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Tiera", hex: "#2b1f17ff", image: "https://i.pinimg.com/1200x/bc/c6/ab/bcc6ab6a1018e411a418a9651d0c8442.jpg" },
        { name: "Colores", hex: "#a30202ff", image: "https://i.pinimg.com/736x/a1/43/9d/a1439decb4ad833ee17db2050676eb6c.jpg" },
        { name: "Verde Olivo", hex: "#2b4c21ff", image: "https://i.pinimg.com/1200x/14/e3/f4/14e3f4ac63c65cb24b9a541fcb7d60d9.jpg" },
        { name: "Perla/Naranjas", hex: "#fbf8e5ff", image: "https://i.pinimg.com/736x/70/7d/9e/707d9e79258ad04e9f7c49353f090180.jpg" },
        { name: "Negro/Beige", hex: "#d8cebcff", image: "https://i.pinimg.com/736x/ef/67/89/ef678942f4b95ea7b39dacdb1a42ad5d.jpg" } 
      ],
      sizes: [
        { name: "32", measurements: "" },
        { name: "34", measurements: "" },
        { name: "36", measurements: "" },
        { name: "38", measurements: "" },
        { name: "40", measurements: "" }
      ],
    },
    gallery: [
      "https://i.pinimg.com/1200x/bc/c6/ab/bcc6ab6a1018e411a418a9651d0c8442.jpg",
      "https://i.pinimg.com/736x/a1/43/9d/a1439decb4ad833ee17db2050676eb6c.jpg",
      "https://i.pinimg.com/1200x/14/e3/f4/14e3f4ac63c65cb24b9a541fcb7d60d9.jpg",
      "https://i.pinimg.com/736x/70/7d/9e/707d9e79258ad04e9f7c49353f090180.jpg",
      "https://i.pinimg.com/736x/ef/67/89/ef678942f4b95ea7b39dacdb1a42ad5d.jpg",
    ]  
  },

  {
    id: 25,
    name: "Vestido Crochet Granys Amplio",
    price: 1190.00,
    description: "Vestido tejido a crochet en hilo de algodón pima peruano, suave y respirable. Inspirado en la primavera.",
    fullDescription: "Encantador Vestido tejido a crochet con un diseño floral que celebra la primavera. Elaborado en hilo de algodón pima peruano que ofrece suavidad incomparable y respirabilidad perfecta para climas cálidos. Los detalles florales están tejidos con técnica de relieve que añade textura y dimensión. Ideal para verano, festivales o como pieza statement en tu guardarropa.",
    features: [
      "Material: Algodón pima peruano premium",
      "Diseño floral en relieve tejido a mano",
      "Tirantes ajustables para mejor fit",
      "Forro interno suave para comodidad",
      "Patrón único inspirado en la primavera"
    ],
    careInstructions: "Lavar a mano con agua fría. Secar plano. No retorcer ni centrifugar.",
    stock: 7,
    category: "crochet",
    subcategory: "tops",
    requiresVariants: true,
    image: "https://i.pinimg.com/736x/bb/ad/76/bbad76e2518c52de453a9098dd17c9b9.jpg",
    tags: ["nuevo", "popular", "artesanal"],
    // 🧩 Variantes y galería nuevas
    variants: {
      colors: [
        { name: "Perla/Negro", hex: "#fbf8e5ff", image: "https://i.pinimg.com/736x/bb/ad/76/bbad76e2518c52de453a9098dd17c9b9.jpg" },
      ],
      sizes: [
        { name: "32", measurements: "" },
        { name: "34", measurements: "" },
        { name: "36", measurements: "" },
        { name: "38", measurements: "" },
        { name: "40", measurements: "" }
      ],
    },
    gallery: [
      "https://i.pinimg.com/736x/bb/ad/76/bbad76e2518c52de453a9098dd17c9b9.jpg",
    ]  
  },
];

/**
 * Categorías para filtros
 */
export const categories = [
  { id: "all", name: "Todos los productos" },
  { id: "crochet", name: "Tejidos Crochet" },
  { id: "accesorios", name: "Accesorios" },
  { id: "pijamas", name: "Pijamas" },
];
