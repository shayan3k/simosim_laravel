import React, { useEffect } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Shop from "./components/Shop";
import ContactUs from "./components/ContactUs";
import Rahnama from "./components/Rahnama";
import AboutUs from "./components/AboutUs";
import Ghavanin from "./components/Ghavanin";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import PageNotFound from "./components/PageNotFound";
import { JWTValidate } from "./components/services/Auth";
import secureStorage from "./components/services/Storage";
import { useStoreState, useStoreActions } from "easy-peasy";

function App() {
    const logedIn = useStoreState(state => state.auth.logedIn);
    const setLogedIn = useStoreActions(actions => actions.auth.setLogedIn);
    const setPhoneNumber = useStoreActions(
        actions => actions.auth.setPhoneNumber
    );
    const setNiceName = useStoreActions(actions => actions.auth.setNiceName);
    const islogedIn = () => {
        console.log("Authenticating ... ");
        JWTValidate()
            .then(res => {
                console.log(res);
                if (res.statusText === "OK") {
                    setLogedIn(true);
                    setPhoneNumber(res.phonenumber);
                    setNiceName(res.name);
                    console.log("AUTHORIZED in APP", res);
                } else {
                    console.log("NOT AUTHORIZED in appp");
                }
            })
            .catch(e => {
                console.log("NOT AUTHORIZED in APP", e);
                secureStorage.clear();
                setLogedIn(false);
                setPhoneNumber("");
                setNiceName("");
            });
    };

    useEffect(() => {
        islogedIn();
    }, []);

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                logedIn ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );

    const AuthenticatedRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                !logedIn ? <Component {...props} /> : <Redirect to="/" />
            }
        />
    );

    return (
        <>
            <Router>
                <Switch>
                    <Shop exact path="/" />
                    <Rahnama path="/rahnama" />
                    <ContactUs path="/contact-us" />
                    <AboutUs path="/about-us" />
                    <Ghavanin path="/ghavanin" />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                    <AuthenticatedRoute path="/login" component={LoginPage} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
