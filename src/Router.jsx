import { BrowserRouter, Route, Switch } from "react-router-dom";

// vistas
import Login from "./pages/Login";
import Home from "./pages/Home/Home";
import Store from "./pages/Store";
import Stores from "./pages/Stores";

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
        <Route exact path="/:category" component={Stores} />
      </Switch>
      <Switch>
        <Route exact path="/:category/:name" component={Store} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
