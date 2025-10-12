/**
 * Etiqueta pequeña para mostrar estados, categorías o información destacada
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {'default' | 'success' | 'warning' | 'error'} [props.variant='default'] - Variante de color del badge
 * @param {React.ReactNode} props.children - Contenido del badge
 * @param {string} [props.className=''] - Clases CSS adicionales
 * 
 * @example
 * // Badge para estado de stock
 * <Badge variant="success">En Stock</Badge>
 * 
 * @example
 * // Badge de advertencia
 * <Badge variant="warning">Bajo Stock</Badge>
 * 
 * @example
 * // Badge de categoría
 * <Badge variant="default">Tejidos Crochet</Badge>
 * 
 * @example
 * // Badge personalizado
 * <Badge variant="error" className="uppercase">
 *   Agotado
 * </Badge>
 */

export function Badge({ variant = 'default', children, className = '' }) {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800'
  }

  return (
    <span className={`
      inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
      ${variants[variant]}
      ${className}
    `.trim()}>
      {children}
    </span>
  )
}

export default Badge