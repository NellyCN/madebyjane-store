import { useState, useEffect, useMemo } from "react";
import { mockProducts } from "../data/mockProducts";
import { Button } from "./ui";

/**
 * 🟦 Componente de Productos Relacionados
 * Mantiene la misma lógica que estaba dentro de ProductDetail.jsx
 */
function RelatedProducts({ product, navigate }) {
    // ======================================================
    // 1. ESTADO LOCAL (solo para este componente)
    // ======================================================

    // Estado inicial para el carrusel de productos relacionados
    const [startIndex, setStartIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4);

    // -------------------------------------------------------
    // 1️⃣ Detecta automáticamente cuántos productos mostrar
    // -------------------------------------------------------
    // Ajusta visibleCount según ancho de pantalla (1 móvil, 2 tablet, 4 desktop)
    useEffect(() => {
        const updateVisible = () => {
            if (window.innerWidth < 640) setVisibleCount(2);   // 📱 En móvil mostramos 2 productos
            else if (window.innerWidth < 1024) setVisibleCount(3); // 🟦 En tablet mostramos 3
            else setVisibleCount(4); // 🖥️ En desktop mostramos 4
        };

        updateVisible();
        window.addEventListener("resize", updateVisible);

        return () => window.removeEventListener("resize", updateVisible);
    }, []);

    // -------------------------------------------------------
    // 2️⃣ Filtrar productos relacionados (memorizado)
    // -------------------------------------------------------

    // 🧩 Control de productos relacionados visibles por categoría
    const relatedProducts = useMemo(() => {
        if (!product) return [];
        return mockProducts.filter(
            (p) => p.category === product.category && p.id !== product.id
        );
    }, [product]);

    // Si no hay relacionados, no renderizar nada
    if (relatedProducts.length === 0) return null;

    // 🔁 Lista de Productos visibles dinámicos(paginada)
    const visibleProducts = relatedProducts.slice(startIndex, startIndex + visibleCount);

    // Evita índices negativos
    const maxIndex = Math.max(0, relatedProducts.length - visibleCount);


    // ======================================================
    // 3. HANDLERS
    // ======================================================

    // 3️⃣ Navegación del carrusel
    const scrollRelated = (direction) => {
        const newIndex = startIndex + direction; 
        
        if (newIndex >= 0 && newIndex <= maxIndex) {
            setStartIndex(newIndex);
        }
    };

    // ======================================================
    // 4. RENDER
    // ======================================================

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                Productos Relacionados
            </h2>

            {/* Carrusel */}
            <div className="relative flex items-center justify-center w-full">

                {/* Flecha izquierda (solo si hay más de visibleCount) */}
                {relatedProducts.length > visibleCount && (
                    <button
                        className={`absolute left-0 z-10 bg-white rounded-full p-2 sm:p-3 shadow transition ${
                            startIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-50"
                        }`}
                        onClick={() => scrollRelated(-1)}
                        disabled={startIndex === 0}
                        aria-label="Anterior"
                    >
                        ←
                    </button>
                )}

                {/* Lista */}
                <div className="flex gap-6 overflow-hidden w-full max-w-[1200px]
                mx-auto    /* ⭐ Centra carrusel COMPLETO */
                transition-transform duration-300 ease-out
                px-0 sm:px-0  /* ⭐ Quitamos padding que empujaba el carrusel */" >
                    {visibleProducts.map((rp) => (
                        <div
                            key={rp.id}
                            className="bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer 
                            hover:shadow-md transition 
                            flex-shrink-0
                            basis-1/2        /* 🆕 En móviles 2 tarjetas por fila */
                            sm:basis-1/3     /* 🆕 En tablets 3 tarjetas */
                            lg:basis-1/4     /* 🆕 En desktop 4 tarjetas */
                            max-w-[180px]    /* 🆕 Ancho máximo para evitar deformaciones */"
                            onClick={() => navigate(`/producto/${rp.id}`)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => e.key === "Enter" && navigate(`/producto/${rp.id}`)}
                        >
                            <div className="aspect-square bg-gray-100 flex items-center justify-center">
                                {rp.image ? (
                                    <img
                                        src={rp.image}
                                        alt={rp.name}
                                        className="w-full h-full object-cover rounded-t-lg"
                                    />
                                ) : (
                                    <div className="text-gray-400 text-sm">🖼️</div>
                                )}
                            </div>

                            <div className="p-4">
                                <h3 className="font-semibold text-gray-800 mb-1 text-sm line-clamp-2">
                                    {rp.name}
                                </h3>
                                <p className="text-cyan-600 font-bold text-lg">${rp.price}</p>
                                <p className="text-gray-500 text-xs mt-1">
                                    {rp.stock > 0
                                        ? `${rp.stock} disponibles`
                                        : "Agotado"}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Flecha derecha */}
                {relatedProducts.length > visibleCount && (
                    <button
                        className={`absolute right-0 z-10 bg-white rounded-full p-2 sm:p-3 shadow transition ${
                            startIndex >= maxIndex ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-50"
                        }`}
                        onClick={() => scrollRelated(1)}
                        disabled={startIndex >= maxIndex}
                        aria-label="Siguiente"
                    >
                        → 
                    </button>
                )}
            </div>

            {/* Botón ver más */}
            <div className="text-center mt-8">
                <Button
                    variant="outline"
                    onClick={() => {
                        navigate(`/store?category=${encodeURIComponent(product.category)}`);
                        window.scrollRelatedTo(0, 0);
                    }}
                    className="px-6 py-2 text-base"
                >
                    Ver todos los productos de {product.category}
                </Button>
            </div>
        </div>
    );
}

export default RelatedProducts;