// src/services/whatsappMessage.js
export function generateWhatsAppMessage(data) {
    const {
        orderCode,
        items,
        subtotal,
        igv,
        shippingCost,
        total,
        deliveryMethod,
        address,
        paymentMethod
    } = data;


    let message = `Hola _*MadeByJane!*_
Quiero finalizar mi compra.

================
*Pedido: ${orderCode}*
================

*MI CARRITO:*

`;

    items.map(item => {

        message += `• ${item.name}
        Talla: ${item.selectedSize}
        Color: ${item.selectedColor}     
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

*TOTAL A PAGAR : S/. ${total.toFixed(2)}*

*MÉTODO DE ENTREGA:*
${deliveryMethod}
${address ? 'Dirección: ' + address : ''}

*MÉTODO DE PAGO:*
${paymentMethod}

Gracias.
`;

    return message.trim();
}