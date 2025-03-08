import FlagSpain from "../assets/img/Flag_of_Spain.svg.webp";
import LogoTicketeam from "../assets/Logos/Logo-Ticketeam-3.png";
import "../styles/Header.css";

function Header() {
  return (
    <header>
      <div className="container-header_logos">
        <div className="container-header_logos_img">
          <img src={LogoTicketeam} alt="" />
        </div>
        <div className="container-header_logos_text">
          <p>TICKETEAME</p>
          <p>BETA 0.1</p>
        </div>
      </div>
      <div className="container-header">
        <nav className="navbar">
          <ul className="nav-list">
            <li>
              <a to="/eventos">Eventos</a>
            </li>
            <li>
              <a to="/mis-entradas">Mis Entradas</a>
            </li>
            <li>
              <a to="/marketplace">Marketplace</a>
            </li>
            <li>
              <a to="/validador-qr">Validador Qr</a>
            </li>
            <li>
              <button className="futuristic-btn">Entrar</button>
            </li>
            <li>
              <img src={FlagSpain} alt="Logo" className="Bandera España" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
