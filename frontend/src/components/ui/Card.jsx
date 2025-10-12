/**
 * Contenedor con estilo de tarjeta para agrupar contenido relacionado
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {React.ReactNode} props.children - Contenido de la tarjeta
 * @param {string} [props.className=''] - Clases CSS adicionales
 * @param {Object} [props.rest] - Otras propiedades HTML
 * 
 * @example
 * // Card simple con contenido
 * <Card className="p-6">
 *   <h3>Título de la card</h3>
 *   <p>Contenido descriptivo aquí.</p>
 * </Card>
 * 
 * @example
 * // Card con elementos interactivos
 * <Card className="p-4">
 *   <h4>Configuración</h4>
 *   <Button variant="primary">Guardar</Button>
 * </Card>
 * 
 * @example
 * // Card para grid responsivo
 * <Card className="p-4 hover:shadow-md transition-shadow">
 *   Contenido interactivo
 * </Card>
 */

export function Card({ children, className = '', ...props }) {
  return (
    <div 
      className={`
        bg-white rounded-lg shadow-md border border-gray-200
        transition-all duration-200 hover:shadow-lg
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </div>
  )
}

export default Card