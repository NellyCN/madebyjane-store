import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaFacebook, FaWhatsapp, FaYoutube, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
    const year = new Date().getFullYear(); // Año dinámico para el copyright

    return (
        <footer className="bg-gray-100 text-gray-700 py-10 mt-2 border-t border-gray-300 ">

            {/* Contenedor principal */}
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

                {/* 1. Logo + tagline */}
                <div>
                    <div className="flex items-center space-x-2 mb-3">
                        <img src="/favicon.png" alt="Logo" className="w-7 h-7" />
                        <h2 className="text-xl font-semibold text-gray-800">MadeByJane</h2>
                    </div>

                    <p className="text-sm opacity-80">
                        Arte en crochet inspirado en el mar y la naturaleza.
                    </p>
                </div>                

                {/* 2. Navegación rápida */}
                <div>
                    <h3 className="font-semibold mb-3 text-gray-900">Navegación</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-cyan-600">Inicio</Link></li>
                        <li><Link to="/blog" className="hover:text-cyan-600">Blog</Link></li>
                        <li><Link to="/demo" className="hover:text-cyan-600">Demo UI</Link></li>
                        <li><Link to="/admin" className="hover:text-cyan-600">Admin</Link></li>
                        <li><Link to="/inventory" className="hover:text-cyan-600">Inventario</Link></li>
                    </ul>
                </div>

                {/* 3. Contacto */}
                <div>
                    <h3 className="font-semibold mb-3 text-gray-900">Contacto</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center gap-2">
                            <FaEnvelope className="text-gray-700" />
                            njane.store@gmail.com
                        </li>
                        <li className="flex items-center gap-2">
                            <FaPhone className="text-gray-700" />
                            +51 997473711
                        </li>
                        <li>
                            <a
                                href="https://wa.me/51997473711?text=Hola%20estoy%20interesado%20en%20un%20producto%20de%20MadeByJane"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-md text-sm font-semibold shadow hover:bg-cyan-700 transition"
                            >
                                <FaWhatsapp /> Comprar por WhatsApp
                            </a>
                        </li>
                    </ul>
                </div>

                {/* 4. Redes sociales */}
                <div>
                    <h3 className="font-semibold mb-3 text-gray-900">Sígueme</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="https://www.instagram.com/janestore.peru/" className="flex items-center gap-2 hover:text-cyan-600"> 
                            <FaInstagram /> Instagram</a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@janestore.peru" className="flex items-center gap-2 hover:text-cyan-600">
                            <FaTiktok /> TikTok</a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/Janestore.peru/" className="flex items-center gap-2 hover:text-cyan-600">
                            <FaFacebook /> Facebook</a>
                        </li>
                        {/* <li><a href="#" className="hover:text-cyan-600">YouTube</a></li> */}
                    </ul>
                </div>
            </div>

            {/* Línea separadora + copyright */}
            <div className="border-t border-gray-300 mt-10 pt-5 text-center text-sm text-gray-600">
                © {year} MadeByJane. Todos los derechos reservados.
            </div>
            
        </footer>
    );
};

export default Footer;