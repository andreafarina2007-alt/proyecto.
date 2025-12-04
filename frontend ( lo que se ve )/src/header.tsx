import './Header.css'
import logo from './assets/exit-logo.png'
import CartIcon from './CartIcon'
import { Link } from "react-router-dom"

function Header() {
  return (
    <header className="header">
      
      <nav className="nav-left">
        <Link to="/productos" className="nav-btn">Productos</Link>
        <Link to="/colecciones" className="nav-btn">Colecciones</Link>
        <Link to="/contacto" className="nav-btn">Contacta con nosotros</Link>
      </nav>

      <img src={logo} alt="EXIT" className="header-logo" />

      <div className="nav-right">
        <CartIcon />
      </div>
    </header>
  )
}

export default Header
