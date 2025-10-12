import { useState, useMemo } from 'react'
import { ProductCard, Badge, Button } from '../components/ui'
import { useCart } from '../hooks/useCart'
import { mockProducts, categories } from '../data/mockProducts'

function Store() {
  // Estado existentes para filtros y búsqueda
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  // 🆕 NUEVO ESTADO para ordenamiento
  const [sortBy, setSortBy] = useState('featured')
  const { addToCart } = useCart()  // 🆕 USAR EL CARRITO

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

  /**
   * 🆕 FUNCIÓN DE ORDENAMIENTO
   * useMemo para optimizar - solo recalcula cuando cambian los datos o el orden
   */
  const filteredAndSortedProducts = useMemo(() => {
    // Filtrar productos por categoría y búsqueda
    const filtered = mockProducts.filter(product => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.description.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCategory && matchesSearch
    })

    // Luego: Ordenar según el criterio seleccionado
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-low-high':
          return a.price - b.price // Menor precio primero
          
        case 'price-high-low':
          return b.price - a.price // Mayor precio primero
          
        case 'name-asc':
          return a.name.localeCompare(b.name) // A-Z
          
        case 'name-desc':
          return b.name.localeCompare(a.name) // Z-A
          
        case 'stock-high-low':
          return b.stock - a.stock // Mayor stock primero

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
}, [selectedCategory, searchTerm, sortBy])

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header de la Tienda */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Mar & Naturaleza
          </h1>
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
            Mostrando <span className="font-semibold">{filteredAndSortedProducts.length}</span> de <span className="font-semibold">{mockProducts.length}</span> productos
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
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredAndSortedProducts.map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        ) : (
          /* Estado vacío - cuando no hay resultados */
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🛍️</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No se encontraron productos
            </h3>
            <p className="text-gray-500 mb-4">
              Intenta con otros términos de búsqueda o categorías
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('all')
                setSortBy('featured')
              }}
            >
              Mostrar todos los productos
            </Button>
          </div>
        )}

      </div>
    </div>
  )
}


export default Store