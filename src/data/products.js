const PRODUCTS = [
  {
    id: 1,
    category: 1,
    name: 'Remera lisa',
    price: 5000,
    description: 'Remera negra lisa corte oversize, la que no puede faltarte',
    image: 'https://http2.mlstatic.com/D_NQ_NP_812629-MLA50540346177_072022-W.jpg',
  },
  {
    id: 2,
    category: 1,
    name: 'Remera estampada',
    price: 6000,
    description: 'Remera de algodón con estampa en serigrafia premium',
    image: 'https://www.warriorsdeportes.com/wp-content/uploads/2019/10/1657382494806cf668e1fbc8d3086b1acceac42868-768x768.jpg',
  },
  {
    id: 3,
    category: 2,
    name: 'Jean slim-fit',
    price: 13000,
    description: 'Jean clásico slim-fit para toda ocasion',
    image: 'https://resources.claroshop.com/medios-plazavip/fotos/productos_sears1/original/2957845.jpg',
  },
  {
    id: 4,
    category: 2,
    name: 'Pantalón carpintero',
    price: 15000,
    description: 'Pantalón de bull rígido carpintero para uso diario con mucho estilo',
    image: 'https://onboardsk8.com/wp-content/uploads/2019/12/Pantalon-Simple-Co-Jean-Carpintero-denim-Black-2.jpg',
  },
  {
    id: 5,
    category: 3,
    name: 'Air force 1 low undefeated 5 on it',
    price: 73000,
    description: 'Nike air force 1 vs dunk low undefeated 5 on it son las mejores zapatillas del mundo',
    image: 'https://nextgrail.dk/wp-content/uploads/2021/08/templatesneakers-11-900x900.jpg',
  },
  {
    id: 6,
    category: 3,
    name: 'SB Dunk yellow bear x Grateful dead',
    price: 137000,
    description: 'Calzado exclusivo de Nike',
    image: 'https://www.kicksonfire.com/wp-content/uploads/2020/06/Grateful-Dead-x-Nike-SB-Dunk-Low-Yellow-Bear-3.jpeg?x27993',
  },
  {
    id: 7,
    category: 4,
    name: 'Hoodie oversize chocolate',
    price: 13500,
    description: 'Buzo de algodón frisado premium color chocolate. La tendencia de este invierno',
    image: 'https://studios-tc.com/wp-content/uploads/2021/10/oversize-hoodie-chocolate-front-1587x1800.jpg',
  },
  {
    id: 8,
    category: 4,
    name: 'Hoodie tussy pact',
    price: 19700,
    description: 'Zarpado buzo de la marca tussy. Toda la onda',
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/021/090/products/buzo-aa24-back1-2cf103542961144cd016063344706529-480-0.png',
  },
  {
    id: 9,
    category: 5,
    name: 'Gorra Nike SB',
    price: 7900,
    description: 'La gorra de los skaters',
    image: 'https://http2.mlstatic.com/gorra-trucker-nike-sb-aero-cap-verde-olivo-para-hombre-D_NQ_NP_674993-MLM27396064328_052018-O.jpg',
  },
  {
    id: 10,
    category: 5,
    name: 'Mini Bag Louis Vuitton',
    price: 793000,
    description: 'Mini bag cheto mal. Para los que tienen toda la teka',
    image: 'https://images.summitmedia-digital.com/esquiremagph/images/2019/07/31/Small-Bags-Trend-01.jpg',
  },
  {
    id: 11,
    category: 1,
    name: 'Remera rayada',
    price: 5500,
    description: 'Remera con rayas blancas y negras para un look moderno',
    image: 'https://example.com/remera-rayada.jpg',
  },
  {
    id: 12,
    category: 2,
    name: 'Pantalón chino',
    price: 10000,
    description: 'Pantalón estilo chino en color caqui',
    image: 'https://example.com/pantalon-chino.jpg',
  },
  {
    id: 13,
    category: 3,
    name: 'Zapatillas running',
    price: 9500,
    description: 'Zapatillas diseñadas para corredores profesionales',
    image: 'https://example.com/zapatillas-running.jpg',
  },
  {
    id: 14,
    category: 3,
    name: 'Zapatillas casuales',
    price: 7500,
    description: 'Zapatillas cómodas para uso diario',
    image: 'https://example.com/zapatillas-casuales.jpg',
  },
  {
    id: 15,
    category: 4,
    name: 'Hoodie con capucha',
    price: 12000,
    description: 'Buzo con capucha y bolsillo canguro',
    image: 'https://example.com/hoodie-capucha.jpg',
  },
  {
    id: 16,
    category: 4,
    name: 'Hoodie de invierno',
    price: 15500,
    description: 'Buzo de invierno con interior polar',
    image: 'https://example.com/hoodie-invierno.jpg',
  },
  {
    id: 17,
    category: 5,
    name: 'Gorra de béisbol',
    price: 4500,
    description: 'Gorra clásica de béisbol con ajuste ajustable',
    image: 'https://example.com/gorra-beisbol.jpg',
  },
  {
    id: 18,
    category: 5,
    name: 'Bufanda de lana',
    price: 6500,
    description: 'Bufanda de lana suave y abrigada',
    image: 'https://example.com/bufanda-lana.jpg',
  },
  {
    id: 19,
    category: 1,
    name: 'Remera manga larga',
    price: 5500,
    description: 'Remera de manga larga en varios colores',
    image: 'https://example.com/remera-manga-larga.jpg',
  },
  {
    id: 20,
    category: 2,
    name: 'Pantalón de mezclilla',
    price: 11500,
    description: 'Pantalón clásico de mezclilla para un estilo informal',
    image: 'https://example.com/pantalon-mezclilla.jpg',
  },
  {
    id: 21,
    category: 3,
    name: 'Zapatillas de skate',
    price: 8500,
    description: 'Zapatillas diseñadas especialmente para skateboarding',
    image: 'https://example.com/zapatillas-skate.jpg',
  },
  {
    id: 22,
    category: 4,
    name: 'Hoodie estampado',
    price: 12500,
    description: 'Buzo con estampado de diseño único',
    image: 'https://example.com/hoodie-estampado.jpg',
  },
  {
    id: 23,
    category: 5,
    name: 'Gorra de moda',
    price: 5800,
    description: 'Gorra moderna con estilo urbano',
    image: 'https://example.com/gorra-moda.jpg',
  },
  {
    id: 24,
    category: 1,
    name: 'Remera estampada de flores',
    price: 6500,
    description: 'Remera con estampado de flores primaverales',
    image: 'https://example.com/remera-flores.jpg',
  },
  {
    id: 25,
    category: 2,
    name: 'Pantalón cargo',
    price: 13500,
    description: 'Pantalón estilo cargo con múltiples bolsillos',
    image: 'https://example.com/pantalon-cargo.jpg',
  },
  {
    id: 26,
    category: 3,
    name: 'Zapatillas de baloncesto',
    price: 12000,
    description: 'Zapatillas diseñadas para brindar soporte y agarre en la cancha',
    image: 'https://example.com/zapatillas-baloncesto.jpg',
  },
  {
    id: 27,
    category: 4,
    name: 'Hoodie con cierre',
    price: 14500,
    description: 'Buzo con cierre frontal y capucha ajustable',
    image: 'https://example.com/hoodie-cierre.jpg',
  },
  {
    id: 28,
    category: 5,
    name: 'Gorra trucker',
    price: 5200,
    description: 'Gorra estilo trucker con malla trasera transpirable',
    image: 'https://example.com/gorra-trucker.jpg',
  },
  {
    id: 29,
    category: 1,
    name: 'Remera estampada de animales',
    price: 6900,
    description: 'Remera con estampado de animales salvajes',
    image: 'https://example.com/remera-animales.jpg',
  },
  {
    id: 30,
    category: 2,
    name: 'Shorts deportivos',
    price: 7800,
    description: 'Shorts cómodos y ligeros para actividades deportivas',
    image: 'https://example.com/shorts-deportivos.jpg',
  },
];
