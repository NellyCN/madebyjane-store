/**
 * Tarjeta de producto para mostrar en grids de tienda con información completa y acciones
 * 
 * @component
 * @param {Object} props - Propiedades del componente
 * @param {Object} props.product - Datos del producto a mostrar
 * @param {number} props.product.id - ID único del producto
 * @param {string} props.product.name - Nombre del producto
 * @param {number} props.product.price - Precio del producto
 * @param {string} props.product.description - Descripción del producto
 * @param {number} props.product.stock - Cantidad disponible en stock
 * @param {string} props.product.category - Categoría del producto
 * @param {string} [props.product.image] - URL opcional de la imagen del producto
 * @param {string[]} [props.product.tags] - Etiquetas opcionales del producto
 * @param {function} props.onAddToCart - Función llamada al agregar el producto al carrito
 * @param {string} [props.className=''] - Clases CSS adicionales
 * 
 * @example
 * // Uso básico en la tienda
 * <ProductCard 
 *   product={productData}
 *   onAddToCart={(product) => addToCart(product)}
 * />
 * 
 * @example
 * // Con clases personalizadas para grid
 * <ProductCard 
 *   product={featuredProduct}
 *   onAddToCart={handleAddToCart}
 *   className="hover:scale-105 transition-transform"
 * />
 */

import Card from './Card'
import Button from './Button'
import Badge from './Badge'
import { useNavigate } from 'react-router-dom';

export function ProductCard({ product, onAddToCart }) {
  const { 
    name, 
    price, 
    description, 
    stock, 
    category,
    image,
    tags = []  // 🆕 Agregar tags
  } = product

  const isLowStock = stock < 5
  const isOutOfStock = stock === 0
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/producto/${product.id}`);
  };

  // 🆕 Determinar si es destacado
  // const isFeatured = tags.includes('nuevo') || tags.includes('popular')
  // 🆕 VERSIÓN MÁS ROBUSTA para determinar si es destacado
  const isFeatured = () => {
    if (!tags || !Array.isArray(tags)) return false
    return tags.some(tag => {
      const cleanTag = tag.toString().toLowerCase().trim()
      return cleanTag === 'nuevo' || cleanTag === 'popular'
    })
  }

  return (
    <Card className="overflow-hidden cursor-pointer"> {/* 🆕 AGREGANDO cursor-pointer */}

      {/* Product Image - CLICKABLE */}
      <div className="aspect-square bg-gray-200 flex items-center justify-center relative cursor-pointer"
        onClick={handleCardClick}  // 🆕 Navegar al detalle al hacer click en la imagen
      > 
        {image ? (
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="text-gray-400 text-sm">Imagen no disponible</div>
        )}
        
        {/* 🆕 Badge de Destacado */}
        {isFeatured && (
          <div className="absolute top-2 left-2">
            <Badge variant="success" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg border border-cyan-600 font-bold">
              ⭐ Destacado
            </Badge>
          </div>
        )}
      </div>

      {/* Product Info - CLICKABLE */}
      <div className="p-4 cursor-pointer" onClick={handleCardClick}>
        
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
          <span className="text-xl font-bold text-cyan-600">
            S/. {price.toFixed(2)}
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
      </div>

      {/* 🆕 Botón con stopPropagation */}
      <div className="px-4 pb-4"> {/* 🆕 Se agrega Contenedor para separar */}

        {/* Add to Cart Button - EVITAR que el click navegue */}
        <Button
          variant={isOutOfStock ? "secondary" : "primary"}
          size="md"
          disabled={isOutOfStock}
          onClick={(e) => {
            e.stopPropagation(); // 🆕 IMPORTANTE: Evitar que el click navegue a la página de detalle
            onAddToCart && onAddToCart(product);
          }}
          className="w-full"
        >
          {isOutOfStock ? 'Agotado' : 'Agregar al Carrito'}
        </Button>
      </div>
    </Card>
  )
}

export default ProductCard