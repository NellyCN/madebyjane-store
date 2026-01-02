import { useCart } from '../hooks/useCart'
import { useNavigate } from 'react-router-dom'
import Button from './ui/Button'

function MiniCart() {
    const { 
        items, 
        total, 
        removeFromCart, 
        isMiniCartOpen, 
        setIsMiniCartOpen 
    } = useCart()

    const navigate = useNavigate()

    // 🆕 CÁLCULOS
    // const subtotal = total;
    
    // const igv = subtotal * 0.18; // 18% IGV
    const shippingCost = total > 100 ? 0 : 15;
    const finalTotal = total + shippingCost;
    const remainingForFreeShipping = 100 - total;

    return (
        <>
        {/* Botón flotante */}
        <button
            variant="primary"
            className="fixed right-4 top-24 bg-cyan-600 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 transition z-40"
            onClick={() => 
                setIsMiniCartOpen(!isMiniCartOpen)}
        >
            🛒 
            {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {items.length}
                </span>
            )}
        </button>

        {/* MINI CART Sidebar */}
        {isMiniCartOpen && (
            <div className="fixed right-0 top-20 h-[calc(100vh-5rem)] w-80 bg-white shadow-xl border-l z-50">
                
                {/* Header */}
                <div className="p-4 border-b flex justify-between items-center">
                    <h3 className="font-semibold">Tu Carrito ({items.length})</h3>
                    <button 
                        onClick={() => setIsMiniCartOpen(false)}
                        className="p-1 hover:bg-gray-100 rounded"
                    >
                        ✕
                    </button>
                </div>

                {/* 🆕 LÍNEA DE ENVÍO GRATIS DEBAJO DEL TÍTULO */}
                {total > 0 && (
                    <div className="p-2 text-center text-xs">
                        {shippingCost === 0 ? (
                            <span className="text-green-600 font-semibold bg-green-100 p-1 rounded full block">
                                🎉 Envío Gratis desbloqueado!
                            </span>
                        ) : (
                            <span className="text-amber-700 bg-amber-100 p-1 rounded full block">
                                Agrega S/. {remainingForFreeShipping.toFixed(2)} para Envío Gratis
                            </span>
                        )}
                    </div>
                )}

                {/* Lista de productos */}
                <div className="p-4 overflow-y-auto flex-1">
                    {items.map(item => (
                        <div key={item.cartItemId} className="flex gap-3 py-3 border-b">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 object-cover rounded"
                            />
                            <div className="flex-1">
                                <p className="text-sm font-medium truncate">{item.name}</p>
                            
                                {/* 🆕 VARIANTS */}
                                <p className="text-xs text-gray-500">
                                    {item.selectedSize && `Size: ${item.selectedSize}`}{" "}
                                    {item.selectedColor && `| Color: ${item.selectedColor}`}
                                </p>

                                <p className="text-xs text-gray-600">
                                    S/. {item.price} × {item.quantity}
                                </p>
                            </div>

                            <button
                                onClick={() => removeFromCart(item.cartItemId)}
                                className="text-red-500 text-xs"
                            >
                                Eliminar
                            </button>
                        </div>
                    ))}
                </div>
                    
                {/* 🆕 RESUMEN */}
                <div className="p-4 border-t">
                    <div className="flex justify-between font-semibold mb-3">
                        <span>Total</span>
                        <span>S/. {finalTotal.toFixed(2)}</span>
                    </div>

                    <Button
                        variant="primary"
                        className="w-full"
                        // disabled={items.length === 0}
                        onClick={() => {
                            setIsMiniCartOpen(false)
                            navigate('/cart')
                        }}
                    >
                        Ver Carrito Completo
                    </Button>
                </div>
            </div>
        )}
        </>
    )
}

export default MiniCart
