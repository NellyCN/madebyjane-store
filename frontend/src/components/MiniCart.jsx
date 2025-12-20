import { useCart } from '../hooks/useCart'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Button from './ui/Button'

function MiniCart() {
    const { items, total, removeFromCart } = useCart()
    const navigate = useNavigate()
    const [isCartOpen, setIsCartOpen] = useState(false);
    
    // 🆕 CÁLCULOS
    const subtotal = total;
    
    // const igv = subtotal * 0.18; // 18% IGV
    const shippingCost = subtotal > 100 ? 0 : 15;
    const finalTotal = subtotal + shippingCost;
    const remainingForFreeShipping = 100 - subtotal;

    return (
        <>
        {/* Botón flotante */}
        <button 
            onClick={() => setIsCartOpen(!isCartOpen)}
            className="fixed right-4 top-24 bg-cyan-600 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 transition z-40"
            >
            🛒 
            {items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {items.length}
                </span>
            )}
        </button>

        {/* MINI CART Sidebar */}
        {isCartOpen && (
            <div className="fixed right-0 top-20 h-[calc(100vh-5rem)] w-80 bg-white shadow-xl border-l z-50">
                
                {/* Header */}
                <div className="p-4 border-b">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">Tu Carrito ({items.length})</h3>
                        <button 
                        onClick={() => setIsCartOpen(false)}
                        className="p-1 hover:bg-gray-100 rounded"
                        >
                        ✕
                        </button>
                    </div>

                    {/* 🆕 LÍNEA DE ENVÍO GRATIS DEBAJO DEL TÍTULO */}
                    {shippingCost > 0 && remainingForFreeShipping > 0 ? (
                        <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
                        <p className="text-xs text-amber-800 text-center">
                            <span className="font-semibold">¡Faltan S/. {remainingForFreeShipping.toFixed(2)}</span> para envío gratis
                        </p>
                        </div>
                    ) : shippingCost === 0 ? (
                        <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                        <p className="text-xs text-green-800 text-center font-semibold">
                            🎉 ¡Tienes envío gratis!
                        </p>
                        </div>
                    ) : null}
                </div>
                                        
                {/* Lista de productos */}
                <div className="p-4 overflow-y-auto h-[calc(100%-180px)]">
                {items.length === 0 ? (
                    <p className="text-gray-500 text-center py-8">Tu carrito está vacío</p>
                ) : (
                    items.map(item => (
                    <div key={item.id} className="flex gap-3 py-3 border-b">
                        <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-12 h-12 object-cover rounded flex-shrink-0" 
                        />
                        <div className="flex-grow min-w-0">
                        <p className="text-sm font-medium truncate">{item.name}</p>
                        <p className="text-xs text-gray-600">S/. {item.price.toFixed(2)} x {item.quantity}</p>
                        <p className="text-xs font-semibold">S/. {(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 text-xs hover:text-red-700 flex-shrink-0"
                        >
                        Eliminar
                        </button>
                    </div>
                    ))
                )}
                </div>
                    
                    {/* 🆕 RESUMEN */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
                        <div className="space-y-2 text-sm mb-3">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>S/. {subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Envío:</span>
                                <span>
                                    {shippingCost === 0 ? (
                                    <span className="text-green-600 font-semibold">GRATIS</span>
                                    ) : (
                                    `S/. ${shippingCost.toFixed(2)}`
                                    )}
                                </span>
                            </div>
                            <hr />
                            <div className="flex justify-between font-semibold text-base">
                                <span>Total:</span>
                                <span className="text-cyan-600">S/. {finalTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    
                        <Button 
                            variant="primary" 
                            className="w-full"
                            onClick={() => {
                            setIsCartOpen(false);
                            navigate('/cart');
                            }}
                            disabled={items.length === 0}
                        >
                            {items.length === 0 ? 'Carrito Vacío' : 'Ver Carrito Completo'}
                        </Button>
                    </div>
                </div>
            )}
        </>
    )
}

export default MiniCart
