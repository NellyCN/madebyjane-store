export default function PaymentMethods({ paymentMethod, setPaymentMethod }) {
    return (
        <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Método de pago</h4>

            {[
                "Yape",
                "Plin",
                "Transferencia bancaria",
                "Tarjeta Crédito (MercadoPago) (Visa / Mastercard / Amex / Diners)",
                
            ].map(method => (
                <label key={method} className="flex items-center gap-2 text-sm">
                    <input
                        type="radio"
                        name="payment"
                        value={method}
                        checked={paymentMethod === method}
                        onChange={() => setPaymentMethod(method)}
                    />
                    {method}
                </label>
            ))}
        </div>
    );
}
