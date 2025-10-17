import { useState, useMemo } from 'react'
import { ProductCard, Badge, Button } from '../components/ui'
import { useCart } from '../hooks/useCart'
import { mockProducts, categories } from '../data/mockProducts'
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce'

function Store() {
  const navigate = useNavigate();
  // Estado existentes para filtros y búsqueda
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('featured')  // 🆕 Estado para ordenamiento
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // 🆕 AGREGAR ESTOS DOS ESTADOS PARA LOAD MORE
  const [visibleProducts, setVisibleProducts] = useState(8); // Mostrar 8 productos inicialmente
  const productsPerLoad = 8; // Cuántos productos cargar cada vez que se hace click

  // 🆕 DEBOUNCING para búsqueda - mejora performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const { items, total, removeFromCart, addToCart } = useCart();

   // 🆕 CÁLCULOS
  const subtotal = total;
  // const igv = subtotal * 0.18; // 18% IGV
  const shippingCost = subtotal > 100 ? 0 : 15;
  const finalTotal = subtotal + shippingCost;
  const remainingForFreeShipping = 100 - subtotal;

  /**
   * Función para manejar agregar al carrito
   */
  const handleAddToCart = (product) => {
    addToCart(product)
    // 🆕 Feedback visual temporal (puedes mejorar esto después)
    const button = document.querySelector(`[data-product-id="${product.id}"]`)
    if (button) {
      button.textContent = '¡Agregado!'
      button.classList.add('bg-green-500')
      setTimeout(() => {
        button.textContent = 'Agregar al Carrito'
        button.classList.remove('bg-green-500')
      }, 1500)
    }
  }

  // 🆕 FUNCIÓN DE ORDENAMIENTO
  // useMemo para optimizar - solo recalcula cuando cambian los datos o el orden
  const filteredAndSortedProducts = useMemo(() => {
    // Filtrar productos por categoría y búsqueda
    const filtered = mockProducts.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) || product.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    });    

    // Luego: Ordenar según el criterio seleccionado
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low-high': return a.price - b.price // Menor precio primero
        case 'price-high-low': return b.price - a.price // Mayor precio primero
        case 'name-asc': return a.name.localeCompare(b.name) // A-Z
        case 'name-desc': return b.name.localeCompare(a.name) // Z-A
        case 'stock-high-low': return b.stock - a.stock // Mayor stock primero
        case 'featured':
        default:
          {
            // Orden por destacados: primero los que tienen stock, luego por tags especiales
            const aHasStock = a.stock > 0
            const bHasStock = b.stock > 0
            if (aHasStock && !bHasStock) return -1
            if (!aHasStock && bHasStock) return 1
            // Si ambos tienen stock, los "nuevos" y "populares" primero
            const aIsFeatured = a.tags?.includes('nuevo') || a.tags?.includes('popular')
            const bIsFeatured = b.tags?.includes('nuevo') || b.tags?.includes('popular')
            if (aIsFeatured && !bIsFeatured) return -1
            if (!aIsFeatured && bIsFeatured) return 1
            return 0 // Mantener orden original
          }
      }    
    })
}, [selectedCategory, debouncedSearchTerm, sortBy])

// 🆕 Calcula qué productos mostrar
const displayedProducts = filteredAndSortedProducts.slice(0, visibleProducts);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header de la Tienda */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Mar & Naturaleza</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tejidos a crochet inspirados en el océano, accesorios con vibra natural 
            y pijamas de peluche para inviernos acogedores.
          </p>
        </div>

        {/* Filtros y Búsqueda */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center">
            
            {/* Barra de Búsqueda */}
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
              {/* 🆕 INDICADOR DE BÚSQUEDA */}
              {searchTerm && searchTerm !== debouncedSearchTerm && (
                <p className="text-xs text-cyan-600 mt-1 animate-pulse">⏳ Buscando...</p>
              )}
            </div>

            {/* Filtros por Categoría */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "primary" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Contador de Resultados y Ordenamiento */}
        <div className="flex justify-between items-center mb-6">
          <p className="text-gray-600">
            Mostrando <span className="font-semibold">{filteredAndSortedProducts.length}</span> productos
          </p>

          
          {/* 🆕 ORDENAMIENTO FUNCIONAL */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600 whitespace-nowrap">Ordenar por:</span>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              <option value="featured">Destacados</option>
              <option value="price-low-high">Precio: Menor a Mayor</option>
              <option value="price-high-low">Precio: Mayor a Menor</option>
              <option value="name-asc">Nombre: A-Z</option>
              <option value="name-desc">Nombre: Z-A</option>
              <option value="stock-high-low">Stock: Mayor primero</option>
            </select>
          </div>
        </div>

        {/* Grid de Productos */}
        {displayedProducts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayedProducts.map(product => (
                <ProductCard 
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
            
            {/* 🆕 BOTÓN LOAD MORE */}
            {visibleProducts < filteredAndSortedProducts.length && (
              <div className="text-center mt-8">
                <Button 
                  variant="outline" 
                  onClick={() => setVisibleProducts(prev => prev + productsPerLoad)}
                  className="px-8"
                >
                  Cargar más productos ({filteredAndSortedProducts.length - visibleProducts} restantes)
                </Button>
              </div>
            )}
          </>    
        ) : (
          /* 🆕 ESTADOS VACÍO MEJORADOS - Diferentes mensajes según la situación */
          
          /* 🔍 Estado vacío por BÚSQUEDA */
          displayedProducts.length === 0 && searchTerm ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No encontramos "{searchTerm}"
              </h3>
              <p className="text-gray-500 mb-4">
                Prueba con otras palabras o revisa la ortografía
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('')
                  setVisibleProducts(8)
                }}
              >
                Limpiar búsqueda
              </Button>
            </div>
          ) : 

          /* 📁 Estado vacío por CATEGORÍA */
          displayedProducts.length === 0 && selectedCategory !== 'all' && !searchTerm ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📁</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No hay productos en {categories.find(c => c.id === selectedCategory)?.name}
              </h3>
              <p className="text-gray-500 mb-4">
                Esta categoría está vacía por ahora
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSelectedCategory('all')
                  setVisibleProducts(8)
                }}
              >
                Ver todas las categorías
              </Button>
            </div>
          ) : 

          /* 🎯 Estado vacío por COMBINACIÓN de filtros */
          displayedProducts.length === 0 && (searchTerm || selectedCategory !== 'all') ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No hay productos que coincidan
              </h3>
              <p className="text-gray-500 mb-4">
                Tu búsqueda y filtros no generaron resultados
              </p>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                  setSortBy('featured')
                  setVisibleProducts(8)
                }}
              >
                Ver todos los productos
              </Button>
            </div>
          ) : 

          /* 🛍️ Estado vacío GENERAL (sin productos en absoluto) */
          displayedProducts.length === 0 && !searchTerm && selectedCategory === 'all' ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">🛍️</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No hay productos disponibles
              </h3>
              <p className="text-gray-500 mb-4">
                Pronto agregaremos nuevos productos a la tienda
              </p>
              <Button 
                variant="outline" 
                onClick={() => setVisibleProducts(8)}
              >
                Recargar productos
              </Button>
            </div>
          ) : null
        )}

      {/* MINI CART Sidebar */}
      {isCartOpen && (
        <div className="fixed right-0 top-20 h-[calc(100vh-5rem)] w-80 bg-white shadow-xl border-l z-50">
          <div className="p-4 border-b">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">Tu Carrito ({items.length})</h3>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                ✕
              </button>
            </div>

            {/* 🆕 LÍNEA DE ENVÍO GRATIS DEBAJO DEL TÍTULO */}
            {shippingCost > 0 && remainingForFreeShipping > 0 ? (
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-2">
                <p className="text-xs text-amber-800 text-center">
                  <span className="font-semibold">¡Faltan ${remainingForFreeShipping.toFixed(2)}</span> para envío gratis
                </p>
              </div>
            ) : shippingCost === 0 ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                <p className="text-xs text-green-800 text-center font-semibold">
                  🎉 ¡Tienes envío gratis!
                </p>
              </div>
            ) : null}
          </div>
                              
          {/* Lista de productos */}
          <div className="p-4 overflow-y-auto h-[calc(100%-180px)]">
            {items.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Tu carrito está vacío</p>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex gap-3 py-3 border-b">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-12 h-12 object-cover rounded flex-shrink-0" 
                  />
                  <div className="flex-grow min-w-0">
                    <p className="text-sm font-medium truncate">{item.name}</p>
                    <p className="text-xs text-gray-600">${item.price} x {item.quantity}</p>
                    <p className="text-xs font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-xs hover:text-red-700 flex-shrink-0"
                  >
                    Eliminar
                  </button>
                </div>
              ))
            )}
          </div>
          
          {/* 🆕 RESUMEN */}
          <div className="absolute bottom-0 left-0 right-0 p-4 border-t bg-white">
            <div className="space-y-2 text-sm mb-3">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío:</span>
                <span>
                  {shippingCost === 0 ? (
                    <span className="text-green-600 font-semibold">GRATIS</span>
                  ) : (
                    `$${shippingCost.toFixed(2)}`
                  )}
                </span>
              </div>
              <hr />
              <div className="flex justify-between font-semibold text-base">
                <span>Total:</span>
                <span className="text-cyan-600">${finalTotal.toFixed(2)}</span>
              </div>
            </div>
            
            <Button 
              variant="primary" 
              className="w-full"
              onClick={() => {
                setIsCartOpen(false);
                navigate('/cart');
              }}
              disabled={items.length === 0}
            >
              {items.length === 0 ? 'Carrito Vacío' : 'Ver Carrito Completo'}
            </Button>
          </div>
        </div>
      )}

      {/* Botón flotante */}
      <button 
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="fixed right-4 top-24 bg-cyan-600 text-white p-3 rounded-full shadow-lg hover:bg-cyan-700 transition z-40"
      >
        🛒 
        {items.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
            {items.length}
          </span>
        )}
      </button>
      </div>
    </div>
  )
}

export default Store