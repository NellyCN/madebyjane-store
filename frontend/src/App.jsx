import { Routes, Route } from 'react-router-dom'
import WaveHeader from './components/WaveHeader'
import Tienda from './pages/Tienda'
import Admin from './pages/Admin'
import Inventario from './pages/Inventario'
import Blog from './pages/Blog'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <WaveHeader />
      <main className="p-4">
        <Routes>
          <Route path="/" element={<Tienda />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </div>
  )
}

export default App

