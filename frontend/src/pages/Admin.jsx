import ProductForm from '../components/ProductForm'

function Admin() {
  // const handleAddProduct = (product) => {
  //   console.log("Nuevo producto:", product)
  // }

  // return (
  //   <div className="p-4">
  //     <h1 className="text-xl font-bold mb-4">Panel de Administración</h1>
  //     <ProductForm onSubmit={handleAddProduct} />
  //   </div>
  // )
  
    return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Panel de Administración</h1>
        <p className="text-gray-600">Próximamente: Gestión de productos y ventas</p>
      </div>
    </div>
  )
}

export default Admin
