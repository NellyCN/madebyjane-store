import { useCart } from '../hooks/useCart';
import { Button } from './ui';
import { generateOrderCode } from '../services/orderService';
import { generateWhatsAppMessage } from '../services/whatsappMessage';
import { sendWhatsAppMessage } from '../services/whatsappSender';
import { useState } from 'react';

const paymentMethods = [
  {
    value: "Yape",
    label: "Yape",
    icons: ["/payments/yape-logo.png"]
  },
  {
    value: "Plin",
    label: "Plin",
    icons: ["/payments/plin-logo.png"]
  },
  {
    value: "Transferencia",
    label: "Transferencia bancaria",
    icons: [
            "/payments/bcp-logo.jpg",
            "/payments/ibk-logo.png"
            ]

  },
  {
    value: "Tarjeta de Crédito (Link MercadoPago)",
    label: "Tarjeta de crédito (Mercado Pago)",
    icons: ["/payments/mercadopago-logo.png"]
  }
];

function CartPanel() {
  const { items, removeFromCart, updateQuantity, total, clearCart } = useCart();

  /* ======================
      CÁLCULOS DE COMPRA
  ====================== */
  const subtotal = total;
  const igv = subtotal * 0.18;
  const shippingCost = subtotal > 100 ? 0 : 15; // Envío gratis sobre S/. 100.00
  const finalTotal = subtotal + shippingCost;

  /* ======================
      ESTADO DEL ACCORDEON
  ====================== */
  const [openSection, setOpenSection] = useState("contact"); 
  // "contact" | "delivery" | "payment"

  /* ======================
      ESTADO DEL ACCORDEON
  ====================== */
  const [checkoutFormData, setCheckoutFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    email: "",
    deliveryType: "pickup",
    address: "",
    paymentMethod: ""
  });

  // Función para actualizar campos del formulario de checkout
  const updateCheckoutField = (field, value) => {
    setCheckoutFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  /* ======================
      CONFIRMACIÓN FINAL
  ====================== */
  const handleCheckoutConfirm = () => {
    if (items.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }

        // Validaciones UX
    if (!checkoutFormData.name || !checkoutFormData.phone) {
      alert("Completa tus datos de contacto");
      setOpenSection("contact");
      return;
    }

    if (
      checkoutFormData.deliveryType === "delivery" &&
      !checkoutFormData.address
    ) {
      alert("Ingresa la dirección de entrega");
      setOpenSection("delivery");
      return;
    }

    if (!checkoutFormData.paymentMethod) {
      alert("Selecciona un método de pago");
      setOpenSection("payment");
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

  


  /* ======================
     CARRITO VACÍO
  ====================== */
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
          Tu Carrito 🛒 ({items.length} {items.length === 1 ? 'producto' : 'productos'})
        </h2>
        <Button 
          variant="outline" 
          size="sm"
          onClick={clearCart}
        >
          Vaciar Carrito
        </Button>
      </div>

      {/* LISTA DE PRODUCTOS */}
      <div className="space-y-4 mb-8">
        {items.map(item => (
          <div key={item.id} className="bg-white border rounded-lg shadow-sm border-gray-200 p-4">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              
              {/* Imagen del Producto */}
              <div className="w-20 h-20 bg-gray-200 rounded flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
                {item.image ? (
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <span className="text-gray-400 text-xs text-center">Sin imagen</span>
                )}
              </div>

              {/* Información del Producto */}
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm">S/. {item.price.toFixed(2)}</p>
                <p className="text-gray-500 text-xs">Categoría: {item.category}</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-end gap-3 sm:gap-6 w-full sm:w-auto">

                {/* Controles de Cantidad */}
                <div className="flex items-center justify-center gap-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center"
                  >
                    -
                  </button>

                  <span className="w-6 text-center font-medium">
                    {item.quantity}
                  </span>
                  
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gray-200 flex items-center justify-center"
                  >
                    +
                  </button>
                </div>

                {/* Subtotal y Eliminar */}
                <div className="text-center sm:text-right">
                  <p className="font-semibold text-gray-800 text-sm sm:text-base">
                    S/. {(item.price * item.quantity).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-xs sm:text-sm mt-1"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            </div>  
          </div>
        ))}
      </div>

        {/* 🆕 RESUMEN DE COMPRA */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold mb-4">Resumen de Compra</h3>
          
          <div className="space-y-2 ">
            <div className="flex justify-between">
              <span>Subtotal:</span>
              <span>S/. {subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>IGV (18%):</span>
              <span>S/. {igv.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>Envío:</span>
              <span>
                {shippingCost === 0 ? (
                  <span className="text-green-600">GRATIS</span>
                ) : (
                  `S/. ${shippingCost.toFixed(2)}`
                )}
              </span>
            </div>

            {shippingCost > 0 && subtotal < 100 && (
              <p className="text-sm text-green-600 text-center py-2 bg-green-50 rounded">
                ¡Faltan S/. {(100 - subtotal).toFixed(2)} para envío gratis!
              </p>
            )}
            <hr />
            <div className="flex justify-between text-lg font-bold">
              <span>Total:</span>
              <span className="text-cyan-600">S/. {finalTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* =======================
            ACCORDION CHECKOUT
        ======================= */}
        <div className="mt-6 space-y-4">

          {/* ====== 1. DATOS DE CONTACTO ====== */}
          
          <AccordionSection
            title="Déjanos tus datos de contacto"
            isOpen={openSection === "contact"}
            onOpen={() => setOpenSection("contact")}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Nombre"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={checkoutFormData.name}
                onChange={e => updateCheckoutField("name", e.target.value)} 
              />
              <input
                type="text"
                placeholder="Apellidos"
                className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                value={checkoutFormData.lastName}
                onChange={e => updateCheckoutField("lastName", e.target.value)}
              />
            </div>

            <input 
              type="tel"
              placeholder="Teléfono" 
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
              value={checkoutFormData.phone}
              onChange={e => updateCheckoutField("phone", e.target.value)}
            />
              
            <Button 
              className="w-full mt-2"
              onClick={() => setOpenSection("delivery")}
            >
              Continuar
            </Button>

          </AccordionSection>

          {/* ====== 2. MÉTODO DE ENTREGA ====== */}
          <AccordionSection
            title="Método de entrega"
            isOpen={openSection === "delivery"}
            onOpen={() => setOpenSection("delivery")}
          >
            <div className="space-y-3">
              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio"
                  className="accent-cyan-600"
                  checked={checkoutFormData.deliveryType === "pickup"}
                  onChange={() => updateCheckoutField("deliveryType", "pickup")}
                />
                <span>Recojo previa coordinación</span>
              </label>

              <label className="flex items-center gap-3 cursor-pointer">
                <input 
                  type="radio"
                  className="accent-cyan-600" 
                  checked={checkoutFormData.deliveryType === "delivery"}
                  onChange={() => updateCheckoutField("deliveryType", "delivery")}
                />
                <span>Envío a domicilio</span>
              </label>

              {checkoutFormData.deliveryType === "delivery" && (
                <input
                  type="text"
                  placeholder="Dirección de entrega"
                  className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  value={checkoutFormData.address}
                  onChange={e => updateCheckoutField("address", e.target.value)}
                />
              )}
            </div>

            <Button
              className="w-full mt-2"
              onClick={() => setOpenSection("payment")}
            >
              Continuar
            </Button>
          
          </AccordionSection>

          {/* ====== 3. MÉTODO DE PAGO ====== */}
          <AccordionSection
            title="Método de pago"
            isOpen={openSection === "payment"}
            onOpen={() => setOpenSection("payment")}
          >
            <div className="space-y-3">
              {paymentMethods.map(method => (
                <label
                  key={method.value}
                  className={`flex items-center gap-3 cursor-pointer border rounded-lg p-3 hover:bg-gray-50 transition
                    ${checkoutFormData.paymentMethod === method.value ? "border-cyan-600 bg-cyan-50" : "hover:bg-gray-50"}
                  `}
                >
                  <input
                    type="radio"
                    className="accent-cyan-600"
                    checked={checkoutFormData.paymentMethod === method.value}
                    onChange={() => updateCheckoutField("paymentMethod", method.value)
                    }
                  />

                  {/* ICONOS */}
                  <div className="flex items-center gap-2">
                    {method.icons.map((icon, idx) => (
                      <img
                        key={idx}
                        src={icon}
                        alt={method.label}
                        className="w-7 h-7 object-contain"
                      />
                    ))}
                  </div>

                  <span className="text-sm font-medium">
                    {method.label}
                  </span>
                </label>
              ))}
            </div>

            <Button
              className="w-full bg-cyan-600 hover:bg-cyan-700 mt-4"
              onClick={handleCheckoutConfirm}
            >
              Confirmar pedido y enviar por WhatsApp
            </Button>
            
          </AccordionSection>
        </div>

        {/* =======================
            FIN ACCORDION CHECKOUT
        ======================= */}
        
        <div className="mt-4">
          <Button 
            variant="outline" 
            className="w-full"
            onClick={() => window.history.back()}
          >
            Seguir Comprando
          </Button>
        </div>
      </div>
    );
  }

/* ======================
    COMPONENTE SIMPLE
====================== */
function AccordionSection({ title, isOpen, onOpen, children }) {
  return (
    <div className="border rounded-lg overflow-hidden bg-white">
      <button 
        onClick={onOpen} 
        className="w-full px-4 py-3 flex justify-between items-center font-semibold text-left hover:bg-gray-50"
      >
        <span>{title}</span>
        <span className="text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      
      {isOpen && (
        <div className="p-4 border-t space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}

export default CartPanel