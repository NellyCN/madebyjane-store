/**
 * Reusable Input component -Styled form fields
 * @param {string} props.type - Input type
 * @param {string} props.label - Label text
 * @param {string} props.error - Error message
 * @param {string} props.className - Additional classes
 */
function Input({ 
  type = 'text',
  label,
  error,
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