import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Home, FileText, Package, Settings, Menu, X } from 'lucide-react'
import { useState } from 'react'

function WaveHeader() {
    const location = useLocation()  // 🆕 Para saber la página activa
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)  // 🆕 Estado para menú móvil


    // 🐛 DEBUGGING TEMPORAL - eliminar después
    // console.log('📍 Ruta actual:', location.pathname)
    // console.log('🔍 ¿Está en tienda?:', location.pathname === '/' || location.pathname === '/tienda')
    // console.log('🔍 ¿Está en blog?:', location.pathname === '/blog')
    // console.log('🔍 ¿Está en admin?:', location.pathname === '/admin')
    // console.log('🔍 ¿Está en inventario?:', location.pathname === '/inventario')
    // console.log('🔍 ¿Está en carrito?:', location.pathname === '/carrito')

  // 🆕 Función para determinar si un link está activo
  /**
   * Determina si una ruta está activa
   * Maneja el caso especial de '/' que redirige a '/store'
   */
  const isActive = (path) => {
    if (path === '/store' && location.pathname === '/') return true
    return location.pathname === path
  }

  /**
   * Configuración centralizada de los items de navegación
   * Esto elimina la repetición y hace el código más mantenible
   */
  const navItems = [
    { 
      to: '/store', 
      label: 'Store', 
      icon: Home,
      // Ruta especial: '/' también activa 'Store'
      isActive: () => isActive('/store') || location.pathname === '/'
    },
    { 
      to: '/blog', 
      label: 'Blog', 
      icon: FileText,
      isActive: () => isActive('/blog')
    },
    { 
      to: '/admin', 
      label: 'Admin', 
      icon: Settings,
      isActive: () => isActive('/admin')
    },
    { 
      to: '/inventory', 
      label: 'Inventory', 
      icon: Package,
      isActive: () => isActive('/inventory')
    },
    { 
      to: '/cart', 
      label: '(0)',  // El número vendrá del carrito después
      icon: ShoppingCart,
      isActive: () => isActive('/cart')
    }
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="bg-cyan-600 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-5">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold">MadeByJane</h1>
        
        {/* Desktop Navigation - hidden on mobile */}
        <ul className="hidden md:flex gap-6">
        {/* <ul className="flex gap-6"> */}
          {navItems.map((item) => {
            const IconComponent = item.icon
            const active = item.isActive()
            
            return (
              <li key={item.to}>
                <Link 
                  to={item.to}
                  className={`
                    flex items-center gap-2 transition-all duration-200 font-medium
                    ${active 
                      ? 'text-white border-b-2 border-white pb-1' 
                      : 'text-cyan-100 hover:text-white hover:border-b-2 hover:border-cyan-300 hover:pb-1'
                    }
                  `}
                >
                  <IconComponent size={18} />
                  <span>{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
       {/* Mobile Menu - appears below when open */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cyan-700 border-t border-cyan-500">
          <ul className="container mx-auto py-4 flex flex-col gap-3">
            {navItems.map((item) => {
              const IconComponent = item.icon
              const active = item.isActive()
              
              return (
                <li key={item.to}>
                  <Link 
                    to={item.to}
                    onClick={closeMobileMenu}
                    className={`
                      flex items-center gap-3 p-3 rounded-lg transition-all duration-200 font-medium
                      ${active 
                        ? 'bg-cyan-800 text-white' 
                        : 'text-cyan-100 hover:bg-cyan-600 hover:text-white'
                      }
                    `}
                  >
                    <IconComponent size={20} />
                    <span className="text-lg">{item.label}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
     
    </header>
  )
}

export default WaveHeader
