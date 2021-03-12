import { BrowserRouter, Route, Switch } from "react-router-dom";

// componentes y vistas
import Home from "../views/Home";
import NavBar from '../components/Navbar'
const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
