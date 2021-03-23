import { NavLink, Link } from "react-router-dom";
import "./styles.css";
import { BiLogIn } from "react-icons/bi";


const NavBar = () => {
  return (
    <nav>
      
      <Link to="/" className="logo-marca" >Crespo tiendas</Link>

      <div className="group-nav">

        <ul>
          <li>
            <NavLink
              className="item-nav"
              activeClassName="active-item-nav"
              to="/inicio"
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              className="item-nav"
              activeClassName="active-item-nav"
              to="/stores"
            >
              Tiendas
            </NavLink>
          </li>
          <li>
            <NavLink
              className="item-nav"
              activeClassName="active-item-nav"
              to="/servicios"
            >
              Servicios
            </NavLink>
          </li>
          
        </ul>
      </div>
      
      <Link to="/login" className="log-in" >
        <BiLogIn />
      </Link>
      
    </nav>
  );
};
export default NavBar;
