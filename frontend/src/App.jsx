import { Routes, Route } from 'react-router-dom'
import WaveHeader from './components/WaveHeader'
import Store from './pages/Store'
import Admin from './pages/Admin'
import Inventory from './pages/Inventory'
import Blog from './pages/Blog'
import Cart from './pages/Cart' 
import NotFound from './pages/NotFound'
import './App.css'

function App() {
  // const location = useLocation()
  
  // 🐛 Verificar que las rutas se configuran bien
  // console.log('🚀 App montada - Ruta:', location.pathname)

 
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
        
          {/* Ruta 404 - debe ir al final */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

