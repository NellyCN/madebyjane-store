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

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* 🆕 Botón volver */}
        <Button variant="outline" onClick={() => navigate(-1)} className="mb-6">
          ← Volver
        </Button>

        {/* 🆕 CONTENIDO DEL PRODUCTO*/}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

              <p className="text-gray-600 mb-6">{product.description}</p>

              {/* 🏷️ Stock y categoría */}
              <div className="mb-6">
                <p
                  className={`text-sm font-medium ${
                    product.stock > 0 ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {product.stock > 0
                    ? `✅ ${product.stock} disponibles`
                    : "❌ Agotado"}
                </p>
                <p className="text-gray-500 text-sm">
                  Categoría: {product.category}
                </p>

                {/* 🆕 Mostrar tags si existen */}
                {product.tags && product.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {product.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

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
