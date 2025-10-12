import { Button, Input, Card, Badge, ProductCard } from '../components/ui'

function ComponentDemo() {
  // Datos de ejemplo para probar ProductCard
  const sampleProduct = {
    id: 1,
    name: "Top Crochet Conchas Marinas",
    price: 45.99,
    description: "Top tejido a crochet en hilo de algodón pima peruano, suave y respirable. Inspirado en las conchas marinas.",
    stock: 7,
    category: "Tejidos Crochet",
    image: "" // Por ahora vacío, usará el placeholder
  }

  const handleAddToCart = (product) => {
    console.log('Producto agregado:', product)
    alert(`¡${product.name} agregado al carrito!`)
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Demo - Componentes UI
        </h1>

        {/* Sección: Botones */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Botones</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" size="md">
              Botón Primario
            </Button>
            <Button variant="secondary" size="md">
              Botón Secundario
            </Button>
            <Button variant="outline" size="md">
              Botón Outline
            </Button>
            <Button variant="danger" size="md">
              Botón Peligro
            </Button>
            <Button variant="primary" size="md" disabled>
              Deshabilitado
            </Button>
          </div>
        </section>

        {/* Sección: Inputs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Campos de Entrada</h2>
          <div className="max-w-md space-y-4">
            <Input 
              label="Nombre completo"
              placeholder="Ingresa tu nombre"
            />
            <Input 
              label="Email"
              type="email"
              placeholder="tu@email.com"
            />
            <Input 
              label="Contraseña"
              type="password"
              placeholder="••••••••"
            />
            <Input 
              label="Campo con error"
              error="Este campo es requerido"
            />
          </div>
        </section>

        {/* Sección: Badges */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Etiquetas (Badges)</h2>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="success">En Stock</Badge>
            <Badge variant="warning">Bajo Stock</Badge>
            <Badge variant="error">Agotado</Badge>
          </div>
        </section>

        {/* Sección: Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Cards</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Card Simple</h3>
              <p className="text-gray-600">
                Este es un ejemplo de card con contenido simple.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold mb-2">Card con Botones</h3>
              <p className="text-gray-600 mb-4">
                Card que contiene elementos interactivos.
              </p>
              <div className="flex gap-2">
                <Button variant="primary" size="sm">Aceptar</Button>
                <Button variant="outline" size="sm">Cancelar</Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Sección: ProductCard */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Product Card</h2>
          <div className="max-w-sm">
            <ProductCard 
              product={sampleProduct}
              onAddToCart={handleAddToCart}
            />
          </div>
        </section>

        {/* Sección: Loaders/Spinners */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Loaders</h2>
          <div className="flex gap-4">
            {/* Si tienes un componente Loading */}
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-2">Spinner pequeño</p>
              {/* <Loading size="sm" /> */}
            </div>
          </div>
        </section>

        {/* Sección: Modales/Dialogs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Modales</h2>
          <Button 
            variant="outline"
            onClick={() => alert('Aquí se abriría un modal')}
          >
            Abrir Modal de Ejemplo
          </Button>
        </section>
        
      </div>
    </div>
  )
}

export default ComponentDemo