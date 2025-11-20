import { useState } from "react";
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

    // ======================================================
    // 2. LÓGICA DERIVADA
    // ======================================================

    // 🔁 Determina cuántos productos se muestran según el ancho de pantalla
    const getVisibleCount = () => {
        if (window.innerWidth < 640) return 2; // móvil
        if (window.innerWidth < 1024) return 3; // tablet
        return 4; // desktop
    };

    const visibleCount = getVisibleCount();

    // 🧩 Control de productos relacionados visibles por categoría
    const relatedProducts = product
        ? mockProducts.filter(
            (p) => p.category === product.category && p.id !== product.id
        )
        : [];

    // 🔁 Lista de Productos visibles dinámicos(paginada)
    const visibleProducts = relatedProducts.slice(startIndex, startIndex + visibleCount);

    // ======================================================
    // 3. HANDLERS
    // ======================================================

    // 🔁 Función para mover de a 1 producto
    const scrollRelated = (direction) => {
        const newIndex = startIndex + direction * 1; // mover de a 1
        const maxIndex = relatedProducts.length - visibleCount;

        if (newIndex >= 0 && newIndex <= maxIndex) {
            setStartIndex(newIndex);
        }
    };

    // ======================================================
    // 4. RENDER
    // ======================================================

    if (!product) return null;

    return (
        <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Productos Relacionados
            </h2>

            <div className="relative flex items-center justify-center">
                {/* 🔙 Flecha izquierda */}
                <button
                    className={`absolute left-0 z-10 bg-white rounded-full p-2 sm:p-3 shadow-md transition ${
                        startIndex === 0 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-50"
                    }`}
                    onClick={() => scrollRelated(-1)}
                    disabled={startIndex === 0}
                >
                    ←
                </button>

                {/* 🔁 Contenedor de productos */}
                <div
                    id="related-products-scroll"
                    className="flex flex-nowrap gap-6 overflow-hidden px-10 transition-all duration-300"
                >
                    {visibleProducts.map((relatedProduct) => (
                    <div
                        key={relatedProduct.id}
                        className="bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition w-60 flex-shrink-0"
                        onClick={() => navigate(`/producto/${relatedProduct.id}`)}
                    >
                        {/* Imagen */}
                        <div className="aspect-square bg-gray-100 flex items-center justify-center">
                            {relatedProduct.image ? (
                                <img
                                    src={relatedProduct.image}
                                    alt={relatedProduct.name}
                                    className="w-full h-full object-cover rounded-t-lg"
                                />
                            ) : (
                                <div className="text-gray-400 text-sm">🖼️</div>
                            )}
                        </div>
                        {/* Info */}
                        <div className="p-4">
                            <h3 className="font-semibold text-gray-800 mb-1 line-clamp-2 text-sm">
                                {relatedProduct.name}
                            </h3>
                            <p className="text-cyan-600 font-bold text-lg">${relatedProduct.price}</p>
                            <p className="text-gray-500 text-xs mt-1">
                                {relatedProduct.stock > 0
                                ? `${relatedProduct.stock} disponibles`
                                : "Agotado"}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>

                {/* 👉 Flecha derecha */}
                <button
                    className={`absolute right-0 z-10 bg-white rounded-full p-2 sm:p-3 shadow-md transition ${
                        startIndex >= relatedProducts.length - visibleCount
                            ? "opacity-40 cursor-not-allowed"
                            : "hover:bg-gray-50"
                    }`}
                    onClick={() => scrollRelated(1)}
                    disabled={startIndex >= relatedProducts.length - visibleCount}
                >
                    →
                </button>
            </div>

            {/* 🆕 Botón “Ver todos los productos” */}
            <div className="text-center mt-8">
                <Button
                    variant="outline"
                    onClick={() => {
                        navigate(`/store?category=${encodeURIComponent(product.category)}`);
                        window.scrollTo(0, 0);
                    }}
                    className="px-8 py-2 text-base"
                >
                    Ver todos los productos de {product.category}
                </Button>
            </div>
        </div>
    );
}

export default RelatedProducts;