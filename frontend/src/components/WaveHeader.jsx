import { Link, useLocation } from 'react-router-dom'
import { ShoppingCart, Home, FileText, Package, Settings } from 'lucide-react'

function WaveHeader() {
    const location = useLocation()  // 🆕 Para saber la página activa

    // 🐛 DEBUGGING TEMPORAL - eliminar después
    // console.log('📍 Ruta actual:', location.pathname)
    // console.log('🔍 ¿Está en tienda?:', location.pathname === '/' || location.pathname === '/tienda')
    // console.log('🔍 ¿Está en blog?:', location.pathname === '/blog')
    // console.log('🔍 ¿Está en admin?:', location.pathname === '/admin')
    // console.log('🔍 ¿Está en inventario?:', location.pathname === '/inventario')
    // console.log('🔍 ¿Está en carrito?:', location.pathname === '/carrito')

  // 🆕 Función para determinar si un link está activo
  const isActive = (path) => {
    return location.pathname === path
  }
  return (
    <header className="bg-cyan-600 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-5">

        {/* Logo */}
        <h1 className="text-2xl font-bold">MadeByJane</h1>
        
        {/* Links de Navegación */}
        <ul className="flex gap-4">
          <li><Link to="/store" className={`${
            isActive('/') || isActive('/store') ? 'text-white-500 border-b-4 border-white-500 transition font-medium' 
                  : 'text-white-600 hover:text-cyan-500'
              } flex items-center gap-1`}><Home size={18}/> Tienda</Link>
          </li>
          <li><Link to="/blog" className={`${
            isActive('/blog') ? 'text-white-500 border-b-4 border-white-500 transition font-medium' 
                  : 'text-white-600 hover:text-cyan-500'
              } flex items-center gap-1`}><FileText size={18}/> Blog</Link>
          </li>
          <li><Link to="/admin" className={`${
            isActive('/admin') ? 'text-white-500 border-b-2 outline-2 outline-offset-2 border-white-500 transition font-medium' 
                  : 'text-white-600 hover:text-cyan-500'
              } flex items-center gap-1`}><Settings size={18}/> Admin</Link>
          </li>
          <li><Link to="/inventory" className={`${
            isActive('/inventory') ? 'text-white-500 border-b-4 border-white-500 transition font-medium' 
                  : 'text-white-600 hover:text-cyan-500'
              } flex items-center gap-1`}><Package size={18}/> Inventario</Link>
          </li>
          <li><Link to="/cart" className={`${
            isActive('/cart') ? 'text-white-500 border-b-4 border-white-500 transition font-medium' 
                  : 'text-white-600 hover:text-cyan-500'
              } flex items-center gap-1`}><ShoppingCart size={18}/>(0)</Link></li>
        </ul>

      </nav>
    </header>
  )
}

export default WaveHeader
