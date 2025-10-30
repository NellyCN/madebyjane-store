import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../components/ui";
import { useCart } from "../hooks/useCart";
import { mockProducts } from "../data/mockProducts";

function ProductDetail() {
    const { id } = useParams(); // 🆕 Obtiene el ID de la URL
    const navigate = useNavigate();
    const { addToCart } = useCart();

    const [quantity, setQuantity] = useState(1);

    // 🆕 Agregar estado para el toast
    const [showToast, setShowToast] = useState(false);
    const [buttonText, setButtonText] = useState(""); // 🆕 Estado para el texto del botón

    const [activeTab, setActiveTab] = useState("description"); // 🆕 Estado para pestaña

    // 🆕 Buscar el producto por ID
    const product = mockProducts.find((p) => p.id === parseInt(id));

    // 🧩 Control de productos relacionados visibles
    const relatedProducts = mockProducts.filter(
        (p) => p.category === product.category && p.id !== product.id
    );

    // Estado inicial para el índice de inicio de productos relacionados
    const [startIndex, setStartIndex] = useState(0);
    
    // 🔁 Función para definir cuántos productos se muestran según el tamaño
    const getVisibleCount = () => {
        if (window.innerWidth < 640) return 2; // móvil
        if (window.innerWidth < 1024) return 3; // tablet
        return 4; // desktop
    };

    const visibleCount = getVisibleCount();

    // 🔁 Productos visibles dinámicos
    const visibleProducts = relatedProducts.slice(startIndex, startIndex + visibleCount);

    // 🔁 Función para mover de a 1 producto
    const scrollRelated = (direction) => {
        const newIndex = startIndex + direction * 1; // 👈 avanzar o retroceder 1 producto
        const maxIndex = relatedProducts.length - visibleCount;

        if (newIndex >= 0 && newIndex <= maxIndex) {
            setStartIndex(newIndex);
        }
    };
    
    // 🔁 Actualiza texto del botón cuando cambia cantidad o producto
    useEffect(() => {
        if (product) {
            setButtonText(
                product.stock === 0
                    ? "Producto Agotado"
                    : `Agregar ${quantity} al Carrito - $${(
                        product.price * quantity
                    ).toFixed(2)}`
            );
        }
    }, [id, product, quantity]);

    // Forzar scroll al inicio cada vez que cambia el producto o pestaña activa.
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id, activeTab]);

    // 🚫 Si no encuentra el producto
    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20">
                <div className="container mx-auto px-4 py-8 text-center">
                    <div className="text-gray-400 text-6xl mb-4">❌</div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">
                        Producto no encontrado
                    </h1>
                    <Button variant="primary" onClick={() => navigate("/store")}>
                        Volver a la tienda
                    </Button>
                </div>
            </div>
        );
    }

    // 🛒 Agregar producto al carrito
    const handleAddToCart = () => {
        for (let i = 0; i < quantity; i++) addToCart(product);    // 🆕 Agregar la cantidad seleccionada
        setButtonText("¡Agregado! 🎉");    // 🆕 MEJORADO: Feedback visual del botón usando estado
        setShowToast(true);    // 🆕 Mostrar toast
        setTimeout(() => {    // 🆕 Resetear después de 2 segundos
            setButtonText(`Agregar ${quantity} al Carrito - $${(product.price * quantity).toFixed(2)}`);
            setShowToast(false);
        }, 2000);
    };

    // 📑 Función para renderizar el Contenido de pestañas dinámico
    const renderTabContent = () => {
        switch (activeTab) {
            case "description":
                return (
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                Descripción Completa
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {product.fullDescription || product.description}
                            </p>
                        </div>
                        {/* Características */}
                        {product.features?.length > 0 && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                    Características
                                </h3>
                                <ul className="space-y-2">
                                    {product.features.map((feature, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-green-500 mt-1">✓</span>
                                            <span className="text-gray-600">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                );

            case "specs":
                return (
                    <div className="space-y-6">
                        {/* Medidas */}
                        {product.measurements && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                Medidas y Tallas
                                </h3>
                                <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                                    {product.measurements}
                                </p>
                            </div>
                        )}

                        {/* Stock y categoría */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                    Disponibilidad
                                </h3>
                                <div className="bg-gray-50 p-4 rounded-lg">
                                    <p
                                        className={`text-lg font-medium ${
                                            product.stock > 0 ? "text-green-600" : "text-red-600"
                                        }`}
                                    >
                                        {product.stock > 0
                                            ? `✅ ${product.stock} disponibles`
                                            : "❌ Agotado"}
                                    </p>
                                    <p className="text-gray-500 mt-2">
                                        Categoría: {product.category}
                                    </p>
                                </div>
                            </div>

                            {/* Etiquetas */}
                            {product.tags?.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                        Etiquetas
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {product.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="bg-cyan-100 text-cyan-800 text-sm px-3 py-1 rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );

            case "care":
                return (
                    <div className="space-y-6">
                        {/* Cuidados */}
                        {product.careInstructions && (
                            <div>
                                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                    Instrucciones de Cuidado
                                </h3>
                                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                                    <p className="text-amber-800 leading-relaxed">
                                        {product.careInstructions}
                                    </p>
                                </div>
                            </div>
                        )}

                        {/* Información general de cuidado */}
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-3">
                                Consejos Generales
                            </h3>
                            <ul className="space-y-2 text-gray-600">
                                <li>• Guarda tus productos en un lugar fresco y seco</li>
                                <li>• Evita la exposición prolongada al sol directo</li>
                                <li>• Para tejidos, guárdalos planos cuando sea posible</li>
                            </ul>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };



    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-4 py-8">
                {/* 🆕 Botón volver */}
                <Button
                    variant="outline"
                    onClick={() => {
                        navigate(-1);
                        window.scrollTo(0, 0);
                    }}
                    className="mb-6"
                >
                    ← Volver
                </Button>

                {/* 🆕 CONTENIDO DEL PRODUCTO*/}
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
                        {/* 🖼️ Imagen del producto */}
                        <div className="bg-gray-100 rounded-lg p-6 flex items-center justify-center h-full min-h-[450px]">
                            {/* 🆕 Más padding y altura */}
                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="max-w-full max-h-[450px] object-contain rounded-lg"
                                />
                            ) : (
                                <div className="text-gray-400 text-6xl">🖼️</div>
                            )}
                        </div>

                        {/* 📋 Información del producto */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">
                                {product.name}
                            </h1>
                            <p className="text-2xl font-bold text-cyan-600 mb-4">
                                ${product.price}
                            </p>

                            {/* Descripción corta */}
                            <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                                {product.description}
                            </p>

                            {/* 🔢 Selector de cantidad */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-gray-700 font-medium">Cantidad:</span>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
                                        disabled={quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span className="w-8 text-center font-medium">{quantity}</span>
                                    <button
                                        onClick={() =>
                                            setQuantity((prev) => Math.min(product.stock, prev + 1))
                                            }
                                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 transition disabled:opacity-50"
                                        disabled={quantity >= product.stock}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* 🛒 Botón agregar al carrito */}
                            <Button
                                variant={
                                    buttonText.includes("¡Agregado!") ? "secondary" : "primary"
                                }
                                onClick={handleAddToCart}
                                disabled={product.stock === 0}
                                className={`w-full py-3 text-lg ${
                                    buttonText.includes("¡Agregado!")
                                        ? "bg-green-500 hover:bg-green-600"
                                        : ""
                                }`}
                            >
                                {buttonText}
                            </Button>
                        </div>
                    </div>

                    {/* PESTAÑAS DE INFORMACIÓN DETALLADA */}
                    <div className="border-t border-gray-200">
                        {/* Navegación de pestañas */}
                        <div className="flex border-b border-gray-200">
                            {["description", "specs", "care"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-4 px-6 text-center font-medium ${
                                        activeTab === tab
                                            ? "text-cyan-600 border-b-2 border-cyan-600"
                                            : "text-gray-500 hover:text-gray-700"
                                    }`}
                                >
                                    {tab === "description"
                                        ? "Descripción"
                                        : tab === "specs"
                                        ? "Especificaciones"
                                        : "Cuidados"}
                                </button>
                            ))}
                        </div>
                        {/* Contenido de pestañas */}
                        <div className="p-6">{renderTabContent()}</div>
                    </div>
                </div>

                {/* 🆕 SECCIÓN DE PRODUCTOS RELACIONADOS MEJORADA */}
                {product && (
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
                )}
            </div>

            {/* ✅ TOAST NOTIFICATION - Fuera del container principal */}
            {showToast && (
                <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slideIn">
                    <span>✅ ¡{quantity} {product.name} agregado(s) al carrito!</span>
                </div>
            )}

            {/* ✨ Animación del toast */}
            <style>{`
                @keyframes slideIn {
                    from { transform: translateX(100%); opacity: 0; }
                    to { transform: translateX(0); opacity: 1; }
                }
                .animate-slideIn { animation: slideIn 0.3s ease-out; }
            `}</style>
        </div>
    );
}

export default ProductDetail;