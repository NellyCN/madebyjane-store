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

  // 🆕 Efecto para resetear el texto del botón
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
  }, [product, quantity]);

  // 🆕 Si no encuentra el producto
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

  const handleAddToCart = () => {
    // 🆕 Agregar la cantidad seleccionada
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }

    // 🆕 MEJORADO: Feedback visual del botón usando estado
    setButtonText("¡Agregado! 🎉");

    // 🆕 Mostrar toast
    setShowToast(true);

    // 🆕 Resetear después de 2 segundos
    setTimeout(() => {
      setButtonText(
        `Agregar ${quantity} al Carrito - $${(product.price * quantity).toFixed(
          2
        )}`
      );
      setShowToast(false);
    }, 2000);
  };

  // 🆕 Función para renderizar el contenido según la pestaña activa
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
            {product.features && product.features.length > 0 && (
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

              {/* Tags */}
              {product.tags && product.tags.length > 0 && (
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
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Guarda tus productos en un lugar fresco y seco</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>Evita la exposición prolongada al sol directo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  <span>
                    Para productos tejidos, almacena planos cuando sea posible
                  </span>
                </li>
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
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-6">
          ← Volver
        </Button>

        {/* 🆕 CONTENIDO DEL PRODUCTO*/}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* 🖼️ Imagen del producto */}
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="max-w-full max-h-96 object-contain rounded-lg"
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
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition disabled:opacity-50"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="w-8 text-center font-medium">
                    {quantity}
                  </span>
                  <button
                    onClick={() =>
                      setQuantity((prev) => Math.min(product.stock, prev + 1))
                    }
                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition disabled:opacity-50"
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
                className={`w-full py-3 text-lg transition-all duration-300 ${
                  buttonText.includes("¡Agregado!")
                    ? "bg-green-500 hover:bg-green-600"
                    : ""
                }`}
              >
                {buttonText}
              </Button>
            </div>
          </div>

          {/* 🆕 PESTAÑAS DE INFORMACIÓN DETALLADA */}
          <div className="border-t border-gray-200">
            {/* Navegación de pestañas */}
            <div className="flex border-b border-gray-200">
              <button
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "description"
                    ? "text-cyan-600 border-b-2 border-cyan-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Descripción
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "specs"
                    ? "text-cyan-600 border-b-2 border-cyan-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("specs")}
              >
                Especificaciones
              </button>
              <button
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeTab === "care"
                    ? "text-cyan-600 border-b-2 border-cyan-600"
                    : "text-gray-500 hover:text-gray-700"
                }`}
                onClick={() => setActiveTab("care")}
              >
                Cuidados
              </button>
            </div>

            {/* Contenido de pestañas */}
            <div className="p-6">{renderTabContent()}</div>
          </div>
        </div>
      </div>

      {/* 🆕 TOAST NOTIFICATION - Fuera del container principal */}
      {showToast && (
        <div className="fixed top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-slideIn">
          <div className="flex items-center gap-2">
            <span>✅</span>
            <span>
              ¡{quantity} {product.name} agregado(s) al carrito!
            </span>
          </div>
        </div>
      )}

      {/* 🆕 AGREGAR ESTILOS DE ANIMACIÓN */}
      <style>{`
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        .animate-slideIn {
            animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default ProductDetail;
