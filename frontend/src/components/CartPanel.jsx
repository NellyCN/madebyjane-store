import { useCart } from '../hooks/useCart';
import { Button } from './ui';
import { generateOrderCode } from '../services/orderService';
import { generateWhatsAppMessage } from '../services/whatsappMessage';
import { sendWhatsAppMessage } from '../services/whatsappSender';
import { useState } from 'react';

/* ==========================
    OBJETO MÉTODOS DE PAGO
  ========================== */
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
      ESTADO DEL MODAL
  ====================== */
  const [showConfirm, setShowConfirm] = useState(false);

  
  const [formErrors, setFormErrors] = useState({});

  /* ======================
      CONFIRMACIÓN FINAL
  ====================== */
  const handleCheckoutConfirm = () => {

    const errors = {};
    
    // Validaciones básicas

    // 1️⃣ Carrito vacío
    if (items.length === 0) {
      alert("Tu carrito está vacío");
      return;
    }

    // 2️⃣ Datos obligatorios
    if (!checkoutFormData.name.trim()) {
      errors.name = "Ingresa tu nombre";
    }

    // 3️⃣ Teléfono correcto
    if (!checkoutFormData.phone || checkoutFormData.phone.length !== 9) {
      errors.phone = "El teléfono debe tener 9 dígitos";
    }

    // 4️⃣ Email válido
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(checkoutFormData.email)) {
      errors.email = "Correo electrónico no válido";
    }

    // 5️⃣ Dirección si es delivery
    if (
      checkoutFormData.deliveryType === "delivery" &&
      !checkoutFormData.address.trim()
    ) {
      errors.address = "Ingresa la dirección de entrega";
    }

    // 6️⃣ Método de pago
    if (!checkoutFormData.paymentMethod) {
      errors.paymentMethod = "Selecciona un método de pago";
    }

    // 🚫 Si hay errores → UX controlado
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);

      if (errors.name || errors.phone || errors.email) {
        setOpenSection("contact");
      } else if (errors.address) {
        setOpenSection("delivery");
      } else {
        setOpenSection("payment");
      }

      return;
    }

    // 🧹 Limpia errores si todo OK
    setFormErrors({});

    // ✅ TODO OK → WhatsApp
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
                <p className="text-gray-500 text-sm">Talla: {item.selectedSize}</p>
                <p className="text-gray-500 text-sm">Color: {item.selectedColor}</p>
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
              {/* <div> */}
              {/* Nombre */}
              <input
                type="text"
                placeholder="Nombre"
                value={checkoutFormData.name}
                onChange={e => updateCheckoutField("name", e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ""))
                }
                className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-2
                  ${formErrors.name ? "border-red-500 focus:ring-red-500" : "focus:ring-cyan-500"}
                `}
              />
              {formErrors.name && (
                <p className="text-xs text-red-500 mt-1">{formErrors.name}</p>
              )}
            </div>
              
              {/* Apellido */}
              <div>
                <input
                  type="text"
                  placeholder="Apellidos"
                  value={checkoutFormData.lastName}
                  onChange={e => updateCheckoutField("lastName", e.target.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, ""))
                  }
                  className={`border rounded px-3 py-2 w-full focus:outline-none focus:ring-2
                    ${formErrors.lastName ? "border-red-500 focus:ring-red-500" : "focus:ring-cyan-500"}
                  `}
                />
              </div>

            {/* Teléfono */}
            <div>          
              <input 
                type="tel"
                inputMode="numeric"
                placeholder="Teléfono"
                maxLength={9}
                pattern="[0-9]*"
                value={checkoutFormData.phone}
                onChange={e => updateCheckoutField("phone", e.target.value.replace(/\D/g,""))}
                className={`border rounded px-3 py-2 focus:outline-none focus:ring-2
                  ${formErrors.phone ? "border-red-500 focus:ring-red-500" : "focus:ring-cyan-500"}
                `}
              />
              {formErrors.phone && (
                <p className="text-xs text-red-500 mt-1">{formErrors.phone}</p>
              )}
            </div>
            {/* Email */}
            <div> 
              <input
                type="email"
                placeholder="Correo electrónico"
                value={checkoutFormData.email}
                onChange={e => updateCheckoutField("email", e.target.value)}
                className={`border rounded px-3 py-2 focus:outline-none focus:ring-2
                  ${formErrors.email ? "border-red-500 focus:ring-red-500" : "focus:ring-cyan-500"}
                `}
              />
              {formErrors.email && (
                <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>
              )}
            </div>
            
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
              onClick={() => setShowConfirm(true)}
            >
              Confirmar pedido
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


        {/* ==============================
            🪟COMPONENTE MODAL SIMPLE
        ============================== */}
        {showConfirm && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-[90%] max-w-md space-y-4">
              
              <h3 className="text-lg font-bold text-center bg-cyan-100 text-cyan-800 rounded-lg px-3 py-1">
                Revisa tu pedido 🧾
              </h3>

              {/* PRODUCTOS */}
              <div className="space-y-2 max-h-40 overflow-auto border rounded-md p-3 bg-gray-50">
                {items.map(item => (
                  <div key={item.id} className="text-sm">
                    <p className="font-medium text-gray-800">
                      {item.name} x {item.quantity}
                    </p>
                    <p className="text-xs text-gray-600">
                      Talla: {item.selectedSize} · Color: {item.selectedColor}
                    </p>
                  </div>
                ))}
              </div>

              {/* RESUMEN */}
              <div className="text-sm space-y-1 border-t pt-3">
                <p className="flex justify-between">
                  <span>Total</span>
                  <strong>S/. {finalTotal.toFixed(2)}</strong>
                </p>

                <p className="flex justify-between">
                  <span>Pago</span>
                  <span>{checkoutFormData.paymentMethod}</span>
                </p>

                <p className="flex justify-between">
                  <span>Entrega</span>
                  <span>
                    {checkoutFormData.deliveryType === "delivery"
                      ? "Envío a domicilio"
                      : "Recojo previa coordinación"}
                  </span>
                </p>
              </div>

              {/* MENSAJE */}
              <p className="text-xs text-gray-500 text-center">
                Podrás coordinar el pago y la entrega en el siguiente paso
              </p>

              {/* BOTONES */}
              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => setShowConfirm(false)}
                >
                  Editar
                </Button>

                <Button
                  className="w-full bg-cyan-600 hover:bg-cyan-700"
                  onClick={handleCheckoutConfirm}
                >
                  Confirma tu pedido
                </Button>
              </div>
            </div>
          </div>
        )}

      </div>
    );
  }

/* ==============================
    COMPONENTE ACORDEÓN SIMPLE
============================== */
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
      
      <div
        className={`
          overflow-hidden transition-all duration-300 ease-in-out
          ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="p-4 border-t space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}

export default CartPanel