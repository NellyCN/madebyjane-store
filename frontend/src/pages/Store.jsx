import { useState, useMemo } from 'react'
import { ProductCard, Badge, Button } from '../components/ui'
import { mockProducts, categories } from '../data/mockProducts'
import { useNavigate } from 'react-router-dom';
import { useDebounce } from '../hooks/useDebounce'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

function Store() {
  const navigate = useNavigate();
  // Estado existentes para filtros y búsqueda
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('featured')  // 🆕 Estado para ordenamiento

  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryFilter = queryParams.get("category"); // 👈 Captura la categoría
  
  // Aplicar el filtro de categoría, al llegar desde un enlace 
  // con ?category=accesorios y se muestran en Store.jsx
  useEffect(() => {
      // Solo aplicar el filtro de la URL si el usuario aún no seleccionó algo manualmente
      if (categoryFilter) {
          setSelectedCategory(categoryFilter);
      }
  }, [categoryFilter]);

  // 🆕 AGREGAR ESTOS DOS ESTADOS PARA LOAD MORE
  const [visibleProducts, setVisibleProducts] = useState(8); // Mostrar 8 productos inicialmente
  const productsPerLoad = 8; // Cuántos productos cargar cada vez que se hace click

  // 🆕 DEBOUNCING para búsqueda - mejora performance
  const debouncedSearchTerm = useDebounce(searchTerm, 300);



  /**
   * Función para manejar agregar al carrito
   */
  // const handleAddToCart = (product) => {

  //   addToCart(product)

  //   // 🆕 Feedback visual temporal
  //   const button = document.querySelector(`[data-product-id="${product.id}"]`)
    
  //   if (button) {
  //     button.textContent = '¡Agregado!'
  //     button.classList.add('bg-green-500')
      
  //     setTimeout(() => {
  //       button.textContent = 'Agregar al Carrito'
  //       button.classList.remove('bg-green-500')
  //     }, 1500)
    
  //   }
  // }

  // 🆕 FUNCIÓN DE ORDENAMIENTO
  // 🧠 MEMOIZACIÓN para evitar cálculos innecesarios
  const filteredAndSortedProducts = useMemo(() => {
    // 🔍 Determinar categoría activa:
    // Si llegamos desde un enlace con ?category= en la URL,
    // usamos ese valor, de lo contrario, el estado seleccionado por botones.
    // const activeCategory = categoryFilter || selectedCategory;
    // 🔧 Prioriza la selección del usuario (selectedCategory) y no el query param
    const activeCategory = selectedCategory !== 'all'
      ? selectedCategory
      : categoryFilter || 'all';


    // 🧹 Filtrar productos según categoría y búsqueda
    const filtered = mockProducts.filter(product => {
      // Coincide si la categoría activa es "all" o coincide exactamente con la del producto
      const matchesCategory = activeCategory === 'all' || product.category === activeCategory;

      // Coincide si el nombre o descripción contiene el término de búsqueda
      const matchesSearch =
        product.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(debouncedSearchTerm.toLowerCase());

      return matchesCategory && matchesSearch;
    });    

    // 🔄 Ordenamiento según el criterio seleccionado
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
            // Productos destacados primero: los que tienen stock y tags relevantes
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
  // 🔄 Dependencias: recalcula solo cuando cambian estas variables
  }, [selectedCategory, debouncedSearchTerm, sortBy, categoryFilter]);

  // 🎯 Determinar los productos visibles (paginación o "load more")
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
                    onClick={() => {
                      if (category.id === 'all') {
                        // Limpiar filtros y URL
                        setSelectedCategory('all');
                        navigate('/store'); // limpia los filtros de la URL
                      } else {
                        setSelectedCategory(category.id);
                        // También limpiar el parámetro de la URL para evitar interferencias
                        navigate(`/store?category=${category.id}`); // actualiza la URL con la categoría
                      }
                    }}
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

        
        </div>
      </div>
    )
}

export default Store