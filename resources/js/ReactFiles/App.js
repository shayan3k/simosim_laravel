import React, { useEffect, Suspense } from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Shop from "./components/Shop";
import GoogleReCaptcha from "./components/services/GoogleReCaptcha";
import ContactUs from "./components/ContactUs";
import Rahnama from "./components/Rahnama";
import AboutUs from "./components/AboutUs";
import Ghavanin from "./components/Ghavanin";
import LoginPage from "./components/LoginPage";
import Dashboard from "./components/Dashboard";
import PageNotFound from "./components/PageNotFound";
import AdminPage from "./components/AdminPage";
import { JWTCheck, JWTHeader } from "./components/services/Auth";
import secureStorage from "./components/services/Storage";
import { useStoreState, useStoreActions } from "easy-peasy";

function App() {
    const baseUrl = process.env.MIX_BASEURL;
    const navbarUrl = process.env.MIX_NAVBAR;
    // const navbarUrl = "/navbar";
    const adminSecretKey = process.env.MIX_ADMIN_SECRET_KEY;
    // const adminSecretKey = "true";

    const logedIn = useStoreState(state => state.auth.logedIn);
    const setLogedIn = useStoreActions(actions => actions.auth.setLogedIn);
    const setNiceName = useStoreActions(actions => actions.auth.setNiceName);
    const setPhoneNumber = useStoreActions(
        actions => actions.auth.setPhoneNumber
    );
    const setNavbarData = useStoreActions(
        actions => actions.navbar.setNavbarData
    );

    console.log("BASE URL is" + process.env.MIX_BASEURL);

    const islogedIn = () => {
        console.log("Authenticating ... ");
        JWTCheck()
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
    const setNavbar = () => {
        axios({
            method: "GET",
            url: baseUrl + navbarUrl,
            headers: JWTHeader().headers
        })
            .then(res => {
                console.log(res.data);
                setNavbarData(res.data);
            })
            .catch(e => console.log(e));
    };

    useEffect(() => {
        islogedIn();
        setNavbar();
    }, []);

    const PrivateRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                secureStorage.getItem("jwt") || logedIn ? (
                    <Suspense fallback={Loading}>
                        <Component {...props} />
                    </Suspense>
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );

    const AuthenticatedRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                !logedIn ? (
                    <Suspense fallback={Loading}>
                        <Component {...props} />
                    </Suspense>
                ) : (
                    <Redirect to="/" />
                )
            }
        />
    );

    const AdminRoute = ({ component: Component, ...rest }) => (
        <Route
            {...rest}
            render={props =>
                secureStorage.getItem("is_admin") == adminSecretKey ? (
                    <Suspense fallback={Loading}>
                        <Component {...props} />
                    </Suspense>
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
    const Loading = () => {
        return <div>Loading...</div>;
    };

    return (
        <>
            <GoogleReCaptcha>
                <Router>
                    <Switch>
                        <Route exact path="/">
                            <Suspense fallback={Loading}>
                                <Shop />
                            </Suspense>
                        </Route>
                        <Route exact path="/rahnama">
                            <Suspense fallback={Loading}>
                                <Rahnama />
                            </Suspense>
                        </Route>
                        <Route exact path="/contact-us">
                            <Suspense fallback={Loading}>
                                <ContactUs />
                            </Suspense>
                        </Route>
                        <Route exact path="/about-us">
                            <Suspense fallback={Loading}>
                                <AboutUs />
                            </Suspense>
                        </Route>
                        <Route path="/admin">
                            <AdminRoute component={AdminPage} />
                        </Route>
                        <Route exact path="/ghavanin">
                            <Suspense fallback={Loading}>
                                <Ghavanin />
                            </Suspense>
                        </Route>

                        <PrivateRoute
                            exact
                            path="/dashboard"
                            component={Dashboard}
                        />

                        <AuthenticatedRoute
                            exact
                            path="/login"
                            component={LoginPage}
                        />
                        <Route component={PageNotFound} />
                    </Switch>
                </Router>
            </GoogleReCaptcha>
        </>
    );
}

export default App;
