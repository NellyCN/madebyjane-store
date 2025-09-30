import { useState } from 'react'

// Formulario básico para Admin:

function ProductForm({ onSubmit }) {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({ name, price, image: "https://via.placeholder.com/150" })
    setName('')
    setPrice('')
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 shadow-md rounded-xl max-w-md">
      <h2 className="text-lg font-bold mb-2">Agregar Producto</h2>
      <input 
        type="text" 
        placeholder="Nombre" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        className="w-full border p-2 rounded mb-2"
      />
      <input 
        type="number" 
        placeholder="Precio" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
        className="w-full border p-2 rounded mb-2"
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
        Guardar
      </button>
    </form>
  )
}

export default ProductForm
