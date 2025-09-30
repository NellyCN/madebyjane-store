import { Link } from 'react-router-dom'
import { ShoppingCart, Home, FileText, Package, Settings } from 'lucide-react'

function WaveHeader() {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">MadeByJane</h1>
        <ul className="flex gap-6">
          <li><Link to="/" className="flex items-center gap-1"><Home size={18}/> Tienda</Link></li>
          <li><Link to="/inventario" className="flex items-center gap-1"><Package size={18}/> Inventario</Link></li>
          <li><Link to="/admin" className="flex items-center gap-1"><Settings size={18}/> Admin</Link></li>
          <li><Link to="/blog" className="flex items-center gap-1"><FileText size={18}/> Blog</Link></li>
          <li><Link to="/cart" className="flex items-center gap-1"><ShoppingCart size={18}/> Carrito</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default WaveHeader
