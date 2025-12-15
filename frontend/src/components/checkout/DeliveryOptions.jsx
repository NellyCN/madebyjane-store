export default function DeliveryOptions({ deliveryType, setDeliveryType, address, setAddress }) {
    return (
        <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Método de Entrega</h4>

            <label className="flex items-center gap-2 text-sm">
                <input
                    type="radio"
                    name="delivery"
                    value="pickup"
                    checked={deliveryType === "pickup"}
                    onChange={() => setDeliveryType("pickup")}
                />
                Recojo previa coordinación
            </label>

            <label className="flex items-center gap-2 text-sm">
                <input
                    type="radio"
                    name="delivery"
                    value="delivery"
                    checked={deliveryType === "delivery"}
                    onChange={() => setDeliveryType("delivery")}
                />
                Envío a domicilio
            </label>

            {deliveryType === "delivery" && (
                <input
                    type="text"
                    placeholder="Dirección de entrega"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full mt-2 px-3 py-2 border rounded text-sm"
                />
            )}
        </div>
    );
}
