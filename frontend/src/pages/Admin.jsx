import ProductForm from '../components/ProductForm'

function Admin() {
  const handleAddProduct = (product) => {
    console.log("Nuevo producto:", product)
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Panel de Administración</h1>
      <ProductForm onSubmit={handleAddProduct} />
    </div>
  )
}

export default Admin
