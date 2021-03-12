import { BrowserRouter, Route, Switch} from 'react-router-dom';

// componentes y vistas

const Routes = () => {
    return(
        <BrowserRouter>
            <Navbar/>

            <Switch>
                <Route exact path="/">
                    <h1>entrando a mi app</h1>
                </Route>               
            </Switch>
            
        </BrowserRouter>
    )
}

export default Routes;