/**
 * Botón reutilizable para acciones en la interfaz con variantes de estilo y tamaño
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {'primary' | 'secondary' | 'outline' | 'danger'} [props.variant='primary'] - Variante visual del botón
 * @param {'sm' | 'md' | 'lg'} [props.size='md'] - Tamaño del botón
 * @param {boolean} [props.disabled=false] - Estado deshabilitado
 * @param {function} [props.onClick] - Función llamada al hacer click
 * @param {React.ReactNode} props.children - Contenido del botón
 * @param {string} [props.className=''] - Clases CSS adicionales
 * @param {Object} [props.rest] - Otras propiedades HTML
 * 
 * @example
 * // Botón primario estándar
 * <Button variant="primary" onClick={handleSave}>
 *   Guardar Cambios
 * </Button>
 * 
 * @example
 * // Botón outline pequeño deshabilitado
 * <Button variant="outline" size="sm" disabled>
 *   No disponible
 * </Button>
 * 
 * @example
 * // Botón de peligro con clases adicionales
 * <Button variant="danger" className="w-full">
 *   Eliminar
 * </Button>
 */

export function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  onClick,
  className = '',
  ...props 
}) {
  // Base classes that apply to all buttons
  const baseClasses = 'font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  
  // Variant styles
  const variants = {
    primary: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    outline: 'border border-cyan-600 text-cyan-600 hover:bg-cyan-50 focus:ring-cyan-500'
  }
  
  // Size styles
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }

  const combinedClasses = `
    ${baseClasses}
    ${variants[variant]}
    ${sizes[size]}
    ${className}
  `.trim()

  return (
    <button 
      className={combinedClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button