// 🧵 Tablas de tallas automáticas por categoría
export const sizeTables = {
    //=========================================
    //                 CROCHET 
    //=========================================

    // ======= TOPS =======
    tops: {
        title: "Guía de Tallas - Tops Crochet",
        headers: ["Talla", "Contorno Bajo Busto(cm)", "Copa B", "Copa C", "Copa D"],
        rows: [
            ["32", "68–73 cm", "82–86 cm", "86–90 cm", "90–93 cm"],
            ["34", "73–79 cm", "82–86 cm", "86–90 cm", "90–93 cm"],
            ["36", "79–85 cm", "82–86 cm", "86–90 cm", "90–93 cm"],
            ["38", "85–91 cm", "82–86 cm", "86–90 cm", "90–93 cm"],
            ["40", "91–96 cm", "82–86 cm", "86–90 cm", "90–93 cm"],
        ]
    },

    // ======= BIKINIS =======
    bikinis: {
        title: "Guía de Tallas - Tops de Bikini Crochet",
        headers: ["Talla", "Contorno Bajo Busto", "Copa"],
        rows: [
            ["S", "68–78 cm", "A–B"],
            ["M", "78–88 cm", "B–C"],
            ["L", "88–98 cm", "C–D"],
        ]
    },

    // ======= PAREOS =======
    pareos: {
        title: "Guía de Medidas - Pareos Crochet",
        headers: ["Talla", "Ancho", "Largo"],
        rows: [["Única", "90–110 cm", "110–150 cm"]]
    },
    
    // ======= FALDAS =======
    faldas: {
        title: "Guía de Medidas - Faldas Crochet",
        headers: ["Talla", "Cintura", "Cadera", "Largo"],
        rows: [
            ["Única", "Elástica 60–95 cm", "85–110 cm", "30–45 cm"],
            ["M", "67 - 74", "94 - 102"],
            ["L", "74 - 81", "102 - 110"]
        ]
    },

    // ======= SHORTS =======
    shorts: {
        title: "Guía de Medidas - Shorts Crochet",
        headers: ["Talla", "Cintura", "Cadera", "Largo"],
        rows: [
            ["Única", "Elástica 60–90 cm", "85–110 cm", "25–35 cm"],
        ]
    },

    // ======= CONJUNTOS =======
    conjuntos: {
        title: "Guía de Medidas - Conjuntos Crochet",
        headers: ["Parte", "Medida"],
        rows: [
            ["Top", "Busto 80–100 cm (Elasticado)"],
            ["Short", "Cintura 60–85 cm | Cadera 85–110 cm"],
        ]
    },
    
    // ======= VESTIDOS =======
    vestidos: {
        title: "Guía de Tallas - Vestidos Crochet",
        headers: ["Talla", "Busto", "Cintura", "Cadera", "Largo"],
        rows: [
            ["Única", "80–100 cm", "60–85 cm", "85–105 cm", "80–100 cm"],
            ["S", "82 - 88", "60 - 67", "86 - 94"],
            ["M", "88 - 94", "67 - 74", "94 - 102"],
            ["L", "94 -100", "74 - 81", "102 - 110"]
        ]
    },

    // ======= CARTERAS =======
    carteras: {
        title: "Medidas - Carteras Crochet",
        headers: ["Característica", "Medida"],
        rows: [
            ["Alto", "20–28 cm"],
            ["Ancho", "18–25 cm"],
            ["Profundidad", "5–10 cm"],
            ["Largo de asa", "50–100 cm"],
        ]
    },

    // ======= ARETES =======
    aretes: {
        title: "Medidas - Aretes Crochet",
        headers: ["Detalle", "Medida"],
        rows: [
            ["Largo", "4–12 cm"],
            ["Ancho", "2–6 cm"],
            ["Peso", "Liviano (5–20 g)"],
        ]
    },

    // ======= CHOKERS =======
    chokers: {
        title: "Medidas - Chokers Crochet",
        headers: ["Detalle", "Medida"],
        rows: [
            ["Largo", "32–40 cm (ajustable)"],
            ["Ancho", "1–3 cm"],
        ]
    },

    // ======= VINCHAS =======
    vinchas: {
        title: "Medidas - Vinchas Crochet",
        headers: ["Detalle", "Medida"],
        rows: [
            ["Diámetro", "48–60 cm (elasticado)"],
            ["Ancho", "4–7 cm"],
        ]
    },

    // ======= PULSERAS =======
    pulseras: {
        title: "Medidas - Pulseras Crochet",
        headers: ["Detalle", "Medida"],
        rows: [
            ["Longitud", "16–22 cm (ajustable)"],
            ["Ancho", "0.5–2 cm"],
        ]
    },

    // ======= TOBILLERAS =======
    tobilleras: {
        title: "Medidas - Tobilleras Crochet",
        headers: ["Detalle", "Medida"],
        rows: [
            ["Longitud", "18–26 cm (ajustable)"],
            ["Ancho", "0.5–2 cm"],
        ]
    },

    //=========================================
    //         BIKINIS IMPORTADOS 
    //=========================================

    // ======= BIKINI =======
    Bikini: {
        title: "Guía de Tallas - Bikini Lycra",
        headers: ["Talla", "Busto", "Cintura", "Cadera"],
        rows: [
        ["S", "82–88 cm", "62–68 cm", "85–92 cm"],
        ["M", "88–94 cm", "68–74 cm", "92–98 cm"],
        ["L", "94–100 cm", "74–80 cm", "98–104 cm"],
        ]
    },

    // ======= TRIKINI =======
    Trikini: {
        title: "Guía de Tallas - Trikini Importado",
        headers: ["Talla", "Busto", "Cintura", "Cadera"],
        rows: [
        ["S", "82–88 cm", "62–68 cm", "85–92 cm"],
        ["M", "88–94 cm", "68–74 cm", "92–98 cm"],
        ["L", "94–100 cm", "74–80 cm", "98–104 cm"],
        ]
    },

    // ======= ENTERO =======
    Entero: {
        title: "Guía de Tallas - Entero Lycra",
        headers: ["Talla", "Busto", "Cintura", "Cadera"],
        rows: [
        ["S", "82–88 cm", "62–68 cm", "85–92 cm"],
        ["M", "88–94 cm", "68–74 cm", "92–98 cm"],
        ["L", "94–100 cm", "74–80 cm", "98–104 cm"],
        ]
    },

    //=========================================
    //              PIJAMAS 
    //=========================================

    // ======= ENTERIZOS =======
    enterizos: {
        title: "Guía de Tallas - Pijamas Enterizos",
        headers: ["Talla", "Altura Recomendada", "Cintura"],
        rows: [
            ["S-M", "1.50–1.60 m", "70–80 cm"],
            ["L-XL", "1.60–1.70 m", "80–100 cm"],
        ]
    },

    // ======= CONJUNTOS =======
    conjunto: {
        title: "Guía de Tallas - Conjuntos de Pijama",
        headers: ["Talla", "Busto", "Cintura", "Cadera"],
        rows: [
            ["S", "82–88 cm", "62–68 cm", "85–95 cm"],
            ["M", "88–94 cm", "68–74 cm", "95–102 cm"],
            ["L", "94–100 cm", "74–80 cm", "102–108 cm"],
        ]
    },

    // ======= PANTUFLAS =======
    pantuflas: {
        title: "Guía de Tallas - Pantuflas",
        headers: ["Talla", "Medida Pie"],
        rows: [
            ["S", "22–23 cm"],
            ["M", "24–25 cm"],
            ["L", "26–27 cm"],
        ]
    },

    //=========================================
    //              ACCESORIOS 
    //=========================================

    // ======= SOMBREROS =======
    sombreros: {
        title: "Medidas - Sombreros",
        headers: ["Detalle", "Medida"],
        rows: [
            ["Diámetro", "60 cm"],
            ["Ancho de Ala", "12 cm"],
        ]
    },
    // ======= CHOKERS =======
    choker: {
        title: "Medidas - Choker Crochet",
        headers: ["Detalle", "Medida"],
        rows: [
            ["Largo", "32–40 cm (ajustable)"],
            ["Ancho", "1–3 cm"],
        ]
    },
};