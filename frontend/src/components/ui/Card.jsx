/**
 * Reusable Card container component with shadows and borders
 * @param {ReactNode} props.children - Card content
 * @param {string} props.className - Additional classes
 */
function Card({ children, className = '', ...props }) {
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