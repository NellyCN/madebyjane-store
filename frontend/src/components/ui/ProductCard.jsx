import Card from './Card'
import Button from './Button'
import Badge from './Badge'

/**
 * Product Card component specifically for e-commerce products
 * @param {Object} props.product - Product data
 */
function ProductCard({ product, onAddToCart }) {
  const { 
    name, 
    price, 
    description, 
    stock, 
    category,
    image 
  } = product

  const isLowStock = stock < 5
  const isOutOfStock = stock === 0

  return (
    <Card className="overflow-hidden">
      {/* Product Image */}
      <div className="aspect-square bg-gray-200 flex items-center justify-center">
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-sm">Imagen no disponible</div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="mb-2">
          <Badge variant="default">
            {category}
          </Badge>
        </div>

        {/* Product Name */}
        <h3 className="font-semibold text-lg text-gray-800 mb-1 line-clamp-1">
          {name}
        </h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {description}
        </p>

        {/* Price and Stock */}
        <div className="flex justify-between items-center mb-3">
          <span className="text-2xl font-bold text-cyan-600">
            ${price}
          </span>
          <div className="text-right">
            <div className={`text-sm ${isLowStock ? 'text-orange-600' : 'text-gray-600'}`}>
              {isOutOfStock ? 'Agotado' : `${stock} en stock`}
            </div>
            {isLowStock && !isOutOfStock && (
              <Badge variant="warning" className="text-xs">
                Bajo stock
              </Badge>
            )}
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          variant={isOutOfStock ? "secondary" : "primary"}
          size="md"
          disabled={isOutOfStock}
          onClick={() => onAddToCart && onAddToCart(product)}
          className="w-full"
        >
          {isOutOfStock ? 'Agotado' : 'Agregar al Carrito'}
        </Button>
      </div>
    </Card>
  )
}

export default ProductCard