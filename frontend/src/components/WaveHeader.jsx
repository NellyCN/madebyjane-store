import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Home, FileText, Package, Settings, Menu, X } from 'lucide-react'
import { useState } from 'react'

function WaveHeader() {
    const location = useLocation()  // 🆕 Para saber la página activa
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)  // 🆕 Estado para menú móvil

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
      mobileLabel: 'Store', // Same for mobile
      icon: Home,
      // Ruta especial: '/' también activa 'Store'
      isActive: () => isActive('/store') || location.pathname === '/'
    },
    { 
      to: '/blog', 
      label: 'Blog',
      mobileLabel: 'Blog',
      icon: FileText,
      isActive: () => isActive('/blog')
    },
    { 
      to: '/admin', 
      label: 'Admin', 
      mobileLabel: 'Admin',
      icon: Settings,
      isActive: () => isActive('/admin')
    },
    { 
      to: '/inventory', 
      label: 'Inventory',
      mobileLabel: 'Stock', // Shorter for mobile 
      icon: Package,
      isActive: () => isActive('/inventory')
    },
    { 
      to: '/cart', 
      label: '(0)',  // El número vendrá del carrito después
      mobileLabel: 'Cart (0)', // More descriptive in mobile
      icon: ShoppingCart,
      isActive: () => isActive('/cart')
    }
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header className="bg-cyan-600 text-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-3 sm:px-4">  {/* px-3 Menos padding y márgenes */}
        
        {/* Main nav bar */}
        <div className="flex justify-between items-center py-3">{/* py-3 padding y márgenes- Header principal*/}
        
        {/* Logo - smaller on mobile 
        📱 MÓVIL + 🖥️ MD + 💻 LG+ - aplica diferentes estilos por breakpoint*/}
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold truncate">
          MadeByJane
        </h1>
        
        {/* Desktop Navigation - hidden on mobile */}
        <ul className="hidden md:flex gap-4 lg:gap-6">
        {/* <ul className="flex gap-6"> */}
          {navItems.map((item) => {
            const IconComponent = item.icon
            const active = item.isActive()
            
            return (
              <li key={item.to}>
                <Link 
                  to={item.to}
                  className={`
                    flex items-center gap-1 lg:gap-2 transition-all duration-200 font-medium px-2 py-1 rounded-lg text-sm lg:text-base
                    ${active 
                      ? 'text-white bg-cyan-700 shadow-inner' 
                      : 'text-cyan-100 hover:text-white hover:bg-cyan-500'
                    }
                  `}
                >
                  <IconComponent size={16} className="flex-shrink-0" />
                  <span className="whitespace-nowrap">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>

        {/* 📱 Mobile Menu Button (default) - se aplica a TODOS los tamaños */}
        <button 
          className="md:hidden p-1 rounded-lg hover:bg-cyan-500 transition"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>  
      
      
       {/* Mobile Menu - More compact design */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cyan-700 border-t border-cyan-500 animate-slideDown">
          <ul className="py-2 flex flex-col"> {/* py-2 padding y márgenes-Menú móvil*/}
            {navItems.map((item, index) => {
              const IconComponent = item.icon
              const active = item.isActive()
              
              return (
                // Separadores entre items en lugar de gap grande
                <li key={item.to} className={index !== navItems.length - 1 ? 'border-b border-cyan-600' : ''}>

                  <Link 
                    to={item.to}
                    onClick={closeMobileMenu}
                    className={`
                      flex items-center gap-3 p-2 transition-all duration-150 font-medium
                      ${active 
                        ? 'bg-cyan-800 text-white' 
                        : 'text-cyan-100 hover:bg-cyan-600 hover:text-white'
                      }
                    `}
                  >

                    {/* Iconos reducidos para móvil */}
                    <IconComponent size={18} className="flex-shrink-0" />

                    <span className="text-sm whitespace-nowrap">{item.mobileLabel}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav> 

    {/* CSS for slide down animation */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slideDown {
          animation: slideDown 0.2s ease-out;
        }
      `}</style>
    </header>
  )
}

export default WaveHeader
