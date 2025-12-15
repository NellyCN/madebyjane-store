// src/services/whatsappMessage.js
export function generateWhatsAppMessage({
    items,
    subtotal,
    igv,
    shippingCost,
    finalTotal,
    deliveryMethod
}) {
    const orderCode = `MBJ-${Math.floor(100000 + Math.random() * 900000)}`;

    let message = `Hola _*MadeByJane!*_
Quiero finalizar mi compra.

================
*Pedido: ${orderCode}*
================

*MI CARRITO:*

`;

    items.forEach(item => {
        message += `- ${item.name}
    Cantidad: ${item.quantity}
    Subtotal: S/. ${(item.price * item.quantity).toFixed(2)}

`;
    });

    message += `---------------------------
*RESUMEN DE COMPRA:*

Subtotal   : S/. ${subtotal.toFixed(2)}
IGV (18%) : S/. ${igv.toFixed(2)}
Envío        : ${shippingCost === 0 ? "GRATIS" : "S/. " + shippingCost}
---------------------------

*TOTAL A PAGAR : S/. ${finalTotal.toFixed(2)}*

*MÉTODO DE ENTREGA:*
${deliveryMethod}

Gracias.`;

    return message;
}