import { ShoppingCart } from 'lucide-react'
import { useCart } from '../../context/CartContext'
import { Button } from './Button'

function CartButton({ onClick, className = '' }) {
  const { itemCount } = useCart()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={onClick}
      className={`relative ${className}`}
    >
      <ShoppingCart size={18} />
      <span className="ml-1">Carrito</span>
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Button>
  )
}

export default CartButton