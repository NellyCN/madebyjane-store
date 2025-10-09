/**
 * Reusable Badge component for status, categories, etc.
 * @param {string} props.variant - 'default' | 'success' | 'warning' | 'error'
 * @param {ReactNode} props.children - Badge content
 */
function Badge({ variant = 'default', children, className = '' }) {
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