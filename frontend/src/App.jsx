import { Routes, Route } from 'react-router-dom'
import WaveHeader from './components/WaveHeader'
import Store from './pages/Store'
import Admin from './pages/Admin'
import Inventory from './pages/Inventory'
import Blog from './pages/Blog'
import Cart from './pages/Cart' 
import ComponentDemo from './pages/ComponentDemo'  // 🆕 AGREGAR
import NotFound from './pages/NotFound'


function App() {
  return (
    // <div className="min-h-screen bg-gray-50 text-gray-900">
    <div className="App">
      <WaveHeader />
       
      {/* 🆕 CONFIGURAR RUTAS */}
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Store />} />
           <Route path="/store" element={<Store />} />
           <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/demo" element={<ComponentDemo />} />
          {/* Ruta 404 - debe ir al final */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

