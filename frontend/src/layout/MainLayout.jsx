import { Outlet } from 'react-router-dom'
import MiniCart from '../components/MiniCart'

function MainLayout() {
    return (

        <div className="min-h-screen">
        {/* Header */}
        

        {/* Contenido principal de cada página */}
        <Outlet /> {/* Store, ProductDetail, Cart, etc */}

        {/* Mini carrito GLOBAL */}
        <MiniCart />
        </div>
    )
}

export default MainLayout
