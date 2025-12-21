import { Outlet } from 'react-router-dom'
import MiniCart from '../components/MiniCart'
import WaveHeader from '../components/WaveHeader'
import Footer from '../components/footer/Footer'

function MainLayout() {
    return (

        <div className="flex flex-col min-h-screen">

            {/* Header GLOBAL */}
            <WaveHeader />    
        
            {/* Contenido principal de cada página */}
            <main className="flex-grow p-4">
                <Outlet /> {/* Home, About, Store, ProductDetail, Cart, Contact, etc */}
            </main>

            {/* Mini carrito GLOBAL flotante*/}
            <MiniCart />
        
            {/* Footer GLOBAL */}
            <Footer />
        </div>
    )
}

export default MainLayout