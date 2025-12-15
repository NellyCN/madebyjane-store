import { useCart } from '../hooks/useCart';
import { Button } from './ui';
import CheckoutForm from "./checkout/CheckoutForm";

import { generateOrderCode } from '../services/orderService';
import { generateWhatsAppMessage } from '../services/whatsappMessage';
import { sendWhatsAppMessage } from '../services/whatsappSender';

function CartPanel() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  // Cálculos adicionales
  const subtotal = total;
  const igv = subtotal * 0.18;
  const shippingCost = subtotal > 100 ? 0 : 15; // Envío gratis sobre $100
  const finalTotal = subtotal + shippingCost;

  const handleCheckoutConfirm = (checkoutFormData) => {
    if (items.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }

    const orderCode = generateOrderCode();

    const checkoutData = {
      orderCode,
      items,
      subtotal,
      igv,
      shippingCost,
      total: finalTotal,
      deliveryMethod:
        checkoutFormData.deliveryType === "delivery"
          ? "Envío a domicilio"
          : "Recojo previa coordinación",
      address: checkoutFormData.address,
      paymentMethod: checkoutFormData.paymentMethod
    };

    localStorage.setItem("mbj-last-order", orderCode);

    const message = generateWhatsAppMessage(checkoutData);
    sendWhatsAppMessage(message);
  };

  // Renderizado cuando el carrito está vacío
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <div className="text-gray-400 text-6xl mb-4">🛒</div>
        <h3 className="text-xl font-semibold text-gray-600 mb-2">
          Tu carrito está vacío
        </h3>
        <p className="text-gray-500">
          Agrega algunos productos increíbles de nuestra tienda
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header del Carrito */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Tu Carrito ({items.length} {items.length === 1 ? 'producto' : 'productos'})
        </h2>
        <Button 
          variant="outline" 
          size="sm"
          onClick={clearCart}
        >
          Vaciar Carrito
        </Button>
      </div>

      {/* listado de productos */}
      {/* resumen de compra */}

      {/* Lista de Productos */}
      <div className="space-y-4 mb-8">
        {items.map(item => (
          <div key={item.id} className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex items-center gap-4">
              {/* Imagen del Producto */}
              <div className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="text-gray-400 text-xs text-center">Sin imagen</div>
                )}
              </div>

              {/* Información del Producto */}
              <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm">${item.price}</p>
                <p className="text-gray-500 text-xs">Categoría: {item.category}</p>
              </div>

              {/* Controles de Cantidad */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                >
                  -
                </button>
                <span className="w-8 text-center font-medium">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                >
                  +
                </button>
              </div>

              {/* Subtotal y Eliminar */}
              <div className="text-right">
                <p className="font-semibold text-gray-800">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm mt-1"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🆕 RESUMEN DE COMPRA */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-semibold mb-4">Resumen de Compra</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex justify-between">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>IGV (18%):</span>
            <span>${igv.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Envío:</span>
            <span>
              {shippingCost === 0 ? (
                <span className="text-green-600">GRATIS</span>
              ) : (
                `$${shippingCost.toFixed(2)}`
              )}
            </span>
          </div>

          {shippingCost > 0 && subtotal < 100 && (
            <p className="text-sm text-green-600 text-center py-2 bg-green-50 rounded">
              ¡Faltan ${(100 - subtotal).toFixed(2)} para envío gratis!
            </p>
          )}
          <hr />
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span className="text-cyan-600">${finalTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <CheckoutForm onConfirm={handleCheckoutConfirm} />

      <div className="mt-4">
        <Button variant="outline" onClick={() => window.history.back()}>
          Seguir Comprando
        </Button>
      </div>
    </div>
  );
}

export default CartPanel