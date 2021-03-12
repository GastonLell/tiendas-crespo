import { NavLink } from "react-router-dom";

import "./styles.css";

import Seeker from "../Seeker";

const NavBar = () => {
  return (
    <nav>
      <h1>Crespo tiendas</h1>

      <div className="group-nav">
        <Seeker />

        <ul>
          <li>
            <NavLink
              className="item-nav"
              activeClassName="active-item-nav"
              to="/inicio"
            >
              INICIO
            </NavLink>
          </li>
          <li>
            <NavLink
              className="item-nav"
              activeClassName="active-item-nav"
              to="/me"
            >
              MI PERFIL
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
