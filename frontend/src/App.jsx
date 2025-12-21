import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import MainLayout from './layout/MainLayout'

import Store from './pages/Store'
import Admin from './pages/Admin'
import Inventory from './pages/Inventory'
import Blog from './pages/Blog'
import Cart from './pages/Cart' 
import ComponentDemo from './pages/ComponentDemo'
import NotFound from './pages/NotFound'
import ProductDetail from './pages/ProductDetail'

function App() {
  return (
    /* 🆕 ENVOLVER TODO CON CART PROVIDER */
    <CartProvider>
      <Router>
                
          {/* 🆕 CONFIGURANDO RUTAS */}
          
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Store />} />
                <Route path="/store" element={<Store />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/admin" element={<Admin />} />
                <Route path="/inventory" element={<Inventory />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/demo" element={<ComponentDemo />} />
                <Route path="/producto/:id" element={<ProductDetail />} />
                {/* Ruta 404 - debe ir al final */}
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>

      </Router>
    </CartProvider>
  );
}

export default App