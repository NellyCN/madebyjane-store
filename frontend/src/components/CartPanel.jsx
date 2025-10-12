import { useCart } from '../hooks/useCart';
import { Button } from './ui';

function CartPanel() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
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

      {/* Lista de Productos */}
      <div className="space-y-4">
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

      {/* Total y Checkout */}
      <div className="mt-8 bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-2xl font-bold text-cyan-600">${total}</span>
        </div>
        
        <div className="flex gap-3">
          <Button 
            variant="outline" 
            className="flex-1"
            onClick={() => window.history.back()}
          >
            Seguir Comprando
          </Button>
          <Button 
            variant="primary" 
            className="flex-1"
            onClick={() => alert('¡Checkout implementado próximamente!')}
          >
            Proceder al Pago
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartPanel