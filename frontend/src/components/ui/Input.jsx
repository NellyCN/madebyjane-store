/**
 * Campo de entrada de texto con soporte para diferentes tipos y estados de validación
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {string} [props.label] - Etiqueta descriptiva del campo
 * @param {string} [props.type='text'] - Tipo de input (text, email, password, etc.)
 * @param {string} [props.placeholder] - Texto placeholder
 * @param {string} [props.value] - Valor controlado del input
 * @param {function} [props.onChange] - Función llamada al cambiar el valor
 * @param {string} [props.error] - Mensaje de error para validación
 * @param {boolean} [props.disabled=false] - Estado deshabilitado
 * @param {string} [props.className=''] - Clases CSS adicionales
 * @param {Object} [props.rest] - Otras propiedades HTML
 * 
 * @example
 * // Input básico con label
 * <Input 
 *   label="Email"
 *   type="email" 
 *   placeholder="tu@email.com"
 * />
 * 
 * @example
 * // Input con estado de error
 * <Input 
 *   label="Contraseña"
 *   type="password"
 *   error="La contraseña debe tener al menos 8 caracteres"
 * />
 * 
 * @example
 * // Input deshabilitado
 * <Input 
 *   label="Campo no editable"
 *   disabled
 *   value="Valor fijo"
 * />
 */

function Input({ 
  type = 'text',
  label,
  placeholder, 
  value, 
  onChange, 
  error, 
  disabled = false,
  className = '',
  ...props 
}) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        type={type}
        className={`
          w-full px-3 py-2 border border-gray-300 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent
          transition-all duration-200
          placeholder:text-gray-400
          ${error ? 'border-red-500 focus:ring-red-500' : ''}
          ${className}
        `.trim()}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}

export default Input