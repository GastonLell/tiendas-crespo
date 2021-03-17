import { BrowserRouter, Route, Switch } from "react-router-dom";

// vistas
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Tiendas from "./pages/Tiendas";
import Servicios from "./pages/Servicios";

// componentes generales
import NavBar from "./components/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Switch>
        <Route exact path="/login" component={Login} />
      </Switch>
      <Switch>
        <Route exact path="/tiendas" component={Tiendas} />
      </Switch>
      <Switch>
        <Route exact path="/servicios" component={Servicios} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
