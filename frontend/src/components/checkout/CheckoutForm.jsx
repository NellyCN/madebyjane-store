import { useState } from "react";
import DeliveryOptions from "./DeliveryOptions";
import PaymentMethods from "./PaymentMethods";

export default function CheckoutForm({ onConfirm }) {
    const [deliveryType, setDeliveryType] = useState("pickup");
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");

    const handleConfirm = () => {
        if (!paymentMethod) {
            alert("Selecciona un método de pago");
            return;
        }

        if (deliveryType === "delivery" && !address.trim()) {
            alert("Ingresa la dirección de entrega");
            return;
        }

        onConfirm({
            deliveryType,
            address,
            paymentMethod
        });
    };

    return (
        <div className="mt-6 space-y-6 border-t pt-6">
            <DeliveryOptions
                deliveryType={deliveryType}
                setDeliveryType={setDeliveryType}
                address={address}
                setAddress={setAddress}
            />

            <PaymentMethods
                paymentMethod={paymentMethod}
                setPaymentMethod={setPaymentMethod}
            />

            <button
                onClick={handleConfirm}
                className="w-full bg-cyan-600 text-white py-2 rounded font-semibold hover:bg-cyan-700 transition"
            >
                Confirmar datos y continuar
            </button>
        </div>
    );
}
