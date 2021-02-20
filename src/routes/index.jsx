import { Switch, Route } from "react-router-dom"
import Home from "../pages/Home"
import Register from "../pages/Register"
import Login from "../pages/Login"
import NotFound from "../pages/NotFound"


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/register">
                <Register />
            </Route>
            <Route exact path="/home">
                <Home />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Routes;