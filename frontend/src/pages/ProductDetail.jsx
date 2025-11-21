import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "../components/ui";
import { useCart } from "../hooks/useCart";
import { mockProducts } from "../data/mockProducts";
import RelatedProducts from "../components/RelatedProducts";

function ProductDetail() {
    // ======================================================
    // 1. ROUTER & BASIC DATA
    // ======================================================

    const { id } = useParams(); // 🆕 Obtiene el ID de la URL
    const navigate = useNavigate();
    const { addToCart } = useCart();
    
    // 🆕 Buscar el PRODUCTO por ID
    const product = mockProducts.find((p) => p.id === parseInt(id,10));
    
    // ======================================================
    // 2. STATES
    // ======================================================

    /* -----------------------------------
        🟦 ESTADOS BASE DEL PRODUCTO
    ----------------------------------- */

    // Cantidad seleccionada
    const [quantity, setQuantity] = useState(1);

    // 🆕 Estados nuevos para variantes seleccionadas
    const [selectedSize, setSelectedSize] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null);

    // 🆕 Estado para Errores de selección (tallas/colores)
    const [variantError, setVariantError] = useState("");

    // Imagen activa del slider
    const [activeImage, setActiveImage] = useState("");

    // Índice actual de la imagen en la galería
    const [imageIndex, setImageIndex] = useState(0);

    /* -----------------------------------
        🟩 ESTADOS DE INTERFAZ (UI)
    ----------------------------------- */

    // Estado Pestaña activa (Descripción / Especificaciones / Cuidados)
    const [activeTab, setActiveTab] = useState("description");

    // Control del toast que aparece al agregar al carrito
    const [showToast, setShowToast] = useState(false);

    // Texto dinámico del botón "Agregar al carrito"
    const [buttonText, setButtonText] = useState("");

    // ======================================================
    // 3. EFFECTS
    // ======================================================

    // Sync activeImage when product changes
    useEffect(() => {
        if (!product) return;
        // usa la primera imagen de gallery si existe, si no fallback a product.image
        const first = (product.gallery && product.gallery.length > 0) ? product.gallery[0] : product.image || "";
        setActiveImage(first);
        setImageIndex(0);
        setSelectedColor(null);
        setSelectedSize(null);
        setVariantError("");
    }, [product]);


    // 🔁 Actualiza texto del botón cuando cambia cantidad o producto
    useEffect(() => {
        if (!product) return;
            setButtonText(
                product.stock === 0
                    ? "Producto Agotado"
                    : `Agregar ${quantity} al Carrito - $${(
                        product.price * quantity
                    ).toFixed(2)}`
            );
    }, [product, quantity]);

    // Forzar scroll al inicio cada vez que cambia el producto o pestaña activa.
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [id, activeTab]);

    // 🚫 Si no encuentra el producto
    if (!product) {
        return (
            <div className="min-h-screen bg-gray-50 pt-20">
                <div className="container mx-auto px-3 sm:px-4 py-8 text-center">
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

    // ======================================================
    // 4. HANDLERS & FUNCTIONS
    // ======================================================

    // 🛒 Agregar producto al carrito
    const handleAddToCart = () => {
        // 🛑 Validación de variantes
        if (product.variants?.sizes?.length > 0 && !selectedSize) {
            setVariantError("Selecciona una talla.");
            return;
        }
        if (product.variants?.colors?.length > 0 && !selectedColor) {
            setVariantError("Selecciona un color.");
            return;
        }

        setVariantError("");

        // 🆕 Crear un producto con variantes seleccionadas
        const productWithVariants = {
            ...product,
            selectedSize,
            selectedColor,
        };

        // Agregar varias unidades
        for (let i = 0; i < quantity; i++) addToCart(productWithVariants);
        
        setButtonText("¡Agregado! 🎉");
        setShowToast(true);
        setTimeout(() => {
            setButtonText(
                `Agregar ${quantity} al Carrito - $${(product.price * quantity).toFixed(2)}`
            );
            setShowToast(false);
        }, 1400);
    };

    // 🆕 Funciones del SLIDER (para cambiar imagen en galería)
    const prevImage = () => {
        if (!product.gallery || product.gallery.length === 0) return;
        const newIndex = (imageIndex - 1 + product.gallery.length) % product.gallery.length;
        setImageIndex(newIndex);
        setActiveImage(product.gallery[newIndex]);
    };

    const nextImage = () => {
        if (!product.gallery || product.gallery.length === 0) return;
        const newIndex = (imageIndex + 1) % product.gallery.length;
        setImageIndex(newIndex);
        setActiveImage(product.gallery[newIndex]);
    };

    // ======================================================
    // 5. RENDER HELPERS
    // ======================================================

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

    // ======================================================
    // 6. RETURN
    // ======================================================

    // Responsive paddings and sizes
    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8">
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
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-3 sm:p-6">

                        {/* 🖼️ Columna 1: Galería de imágenes */}
                        <div className="flex flex-col items-center">
                            {/* IMAGEN PRINCIPAL */}
                            <div className="relative bg-gray-100 rounded-lg p-4 sm:p-6 flex items-center justify-center w-full min-h-[320px] sm:min-h-[450px]">
                                {/* 🆕 Miniaturas de galería */}
                                {activeImage ? (
                                    <img src={activeImage} alt={product.name} className="max-w-full max-h-[350px] sm:max-h-[450px] object-contain rounded-lg" />
                                ) : (
                                    <div className="text-gray-400 text-6xl">🖼️</div>
                                )}

                                {/* 🆕 Flechas flotantes */}
                                {product.gallery?.length > 1 && (
                                    <>
                                        <button onClick={prevImage} aria-label="Imagen anterior"
                                            className="absolute left-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-2 shadow hover:bg-opacity-100">
                                            ←
                                        </button>
                                        <button onClick={nextImage} aria-label="Imagen siguiente"
                                            className="absolute right-3 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 rounded-full p-2 shadow hover:bg-opacity-100">
                                            →
                                        </button>
                                    </>
                                )}
                            </div>

                            {/* MINIATURAS DEBAJO */}
                            {product.gallery?.length > 0 && (
                                <div className="flex gap-3 mt-4 justify-center">
                                    {product.gallery.map((img, index) => (
                                        <img
                                            key={index}
                                            src={img}
                                            onClick={() => {
                                                setActiveImage(img)
                                                setImageIndex(index);
                                            }}
                                            // alt={`Miniatura ${index + 1}`}
                                            className={`w-20 h-20 object-cover rounded-lg border cursor-pointer transition ${
                                                activeImage === img
                                                    ? "border-cyan-600 shadow-md"
                                                    : "border-gray-300 hover:border-cyan-400"
                                            }`}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* 📋 Columna 2: Información del producto */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 mb-3">{product.name}</h1>
                            <p className="text-2xl font-bold text-cyan-600 mb-4">${product.price}</p>
                            {/* Descripción corta */}
                            <p className="text-gray-600 mb-4 text-lg leading-relaxed">{product.description}</p>
    
                            {/* 🆕 Variantes de tallas */}
                            {product.variants?.sizes?.length > 0 && (
                                <div className="mb-4">
                                    <span className="block text-gray-700 font-medium mb-2">Talla:</span>
                                    <div className="flex flex-wrap gap-2">
                                        {product.variants.sizes.map((size) => (
                                            <button key={size.name} onClick={() => setSelectedSize(size.name)}
                                                className={`px-3 py-2 rounded-lg border text-sm ${selectedSize === size.name ? "bg-cyan-600 text-white border-cyan-600" : "bg-white border-gray-300"}`}>
                                                {size.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* 🆕 Variantes de colores */}
                            {product.variants?.colors?.length > 0 && (
                                <div className="mb-4">
                                    <span className="block text-gray-700 font-medium mb-2">Color:</span>
                                    <div className="flex flex-wrap gap-2 items-center">
                                        {product.variants.colors.map((color) => (
                                            <button
                                                key={color.name}
                                                onClick={() => {
                                                    setSelectedColor(color.name);
                                                    setActiveImage(color.image || activeImage);  // 🆕 Cambiar imagen del producto
                                                }}
                                                className={`px-3 py-2 rounded-lg border text-sm ${
                                                    selectedColor === color.name
                                                        ? "bg-cyan-600 text-white border-cyan-600" : "bg-white border-gray-300"
                                                }`}
                                            >
                                                {color.name}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* 🔢 Selector de cantidad */}
                            <div className="flex items-center gap-4 mb-6">
                                <span className="text-gray-700 font-medium">Cantidad:</span>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
                                        disabled={quantity <= 1}
                                    >
                                        -
                                    </button>
                                    <span className="w-8 text-center font-medium">{quantity}</span>
                                    <button
                                        onClick={() =>
                                            setQuantity((prev) => Math.min(product.stock, prev + 1))
                                            }
                                        className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300" disabled={quantity >= product.stock}
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
                                className="w-full py-3 text-lg">
                                    {buttonText}
                            </Button>

                            {/* 🚫 Mensaje de error de variantes */}
                            {variantError && (
                                <p className="text-red-600 font-medium mt-2">{variantError}</p>
                            )}
                        </div>
                    </div>

                    {/* PESTAÑAS DE INFORMACIÓN DETALLADA */}
                    <div className="border-t border-gray-200">
                        {/* Navegación de pestañas */}
                        <div className="flex overflow-x-auto whitespace-nowrap border-b border-gray-200">
                            {["description", "specs", "care"].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`flex-1 py-3 px-3 sm:px-6 text-sm sm:text-base text-center font-medium ${activeTab === tab ? "text-cyan-600 border-b-2 border-cyan-600" : "text-gray-500 hover:text-gray-700"}`}>
                                    {tab === "description" ? "Descripción" : tab === "specs" ? "Especificaciones" : "Cuidados"}
                                </button>
                            ))}
                        </div>

                        {/* Contenido de pestañas */}
                        <div className="p-4 sm:p-6">{renderTabContent()}</div>
                    </div>
                </div>

                {/* 🆕 Sección de productos relacionados */}
                <RelatedProducts product={product} navigate={navigate} />

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
                    .animate-slideIn { animation: slideIn 0.25s ease-out; }
                `}</style>
            </div>
        </div>
    );
}

export default ProductDetail;