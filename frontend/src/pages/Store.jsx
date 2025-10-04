import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import React from "react";
import ProductCard from "../components/ProductCard";

const mockProducts = [
  { id: 1, name: "Collar artesanal",
    categoria: "Tejidos Crochet (Algodón Pima)",
    price: 37, 
    stock: 8,
    talla: "S-M",
    medidas: "Busto 86-94 cm",
    descripcion:
      "Top tejido a crochet en hilo de algodón pima peruano, suave y respirable. Inspirado en las conchas del mar.",
    image: "https://i.pinimg.com/1200x/89/78/f0/8978f006b43b2ea385b5b8f338599a48.jpg" },
  { id: 2, name: "Pulsera tejida", price: 15, image: "https://i.pinimg.com/1200x/6e/05/18/6e0518676f5201fca7e001d496a66f06.jpg" },
  { id: 3, name: "Aretes tejidos", price: 25, image: "https://i.pinimg.com/1200x/dd/5b/af/dd5baf8db10a4aade15e59d70c7b54e0.jpg" },
  { id: 4, name: "Bolso Tejido", price: 150, image: "https://i.pinimg.com/1200x/cb/99/9a/cb999a971ffe75859bc42285c7f79ae0.jpg" },
  { id: 5, name: "Bikini Tejido",price: 195, image: "https://i.pinimg.com/736x/53/26/87/5326878f5339916eaa8a4909089c9aa3.jpg" },
  { id: 6, name: "Top Tejido", price: 125, image: "https://i.pinimg.com/736x/57/80/dd/5780dd8cae668995c5483616dcff1d5e.jpg" },
  { id: 7, name: "Conjunto Tejido", price: 475, image: "https://i.pinimg.com/736x/23/a6/3e/23a63e532c71ecd5754300c25b6b4b0b.jpg" },
  {id: 8,
    name: "Top crochet conchas marinas",
    categoria: "Tejidos Crochet (Algodón Pima)",
    price: 120,
    stock: 8,
    talla: "S-M",
    medidas: "Busto 86-94 cm",
    descripcion:
      "Top tejido a crochet en hilo de algodón pima peruano, suave y respirable. Inspirado en las conchas del mar.",
    image:
      "https://i.pinimg.com/1200x/64/dd/4b/64dd4b110f6e34b7da4c4074a3ee066d.jpg"},
]

// function Tienda() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
//       {mockProducts.map(p => <ProductCard key={p.id} product={p} />)}
//     </div>
//   )
// }

// export default Tienda

function Store() {
  // const location = useLocation()
  
  // useEffect(() => {
  //   console.log('🛍️ Página Tienda cargada - Ruta:', location.pathname)
  // }, [location])
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Nuestra Tienda</h1>
        <p className="text-gray-600">Próximamente: Catálogo de productos</p>
      </div>
    </div>
  )
}

export default Store