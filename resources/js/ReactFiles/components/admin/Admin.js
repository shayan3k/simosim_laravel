import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
import "./App.scss";
import "./App-modification.scss";

import {
    AppAside,
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppBreadcrumb2 as AppBreadcrumb,
    AppSidebarNav2 as AppSidebarNav
} from "@coreui/react";
// sidebar nav config
import navigation from "./_nav";
// routes config
import routes from "./routes";

import DefaultHeader from "./containers/DefaultHeader";

export default function Admin(props) {
    const loading = () => (
        <div className="animated fadeIn pt-1 text-center">Loading...</div>
    );

    const signOut = e => {
        e.preventDefault();
        props.history.push("/login");
    };

    return (
        <div className="app">
            <AppHeader fixed>
                <Suspense fallback={loading()}>
                    <DefaultHeader onLogout={e => signOut(e)} />
                </Suspense>
            </AppHeader>
            <div className="app-body">
                <AppSidebar fixed display="lg">
                    <AppSidebarForm />
                    <Suspense>
                        <AppSidebarNav
                            navConfig={navigation}
                            {...props}
                            router={router}
                        />
                    </Suspense>
                    <AppSidebarMinimizer />
                </AppSidebar>
                <main className="main">
                    <Container fluid>
                        <Suspense fallback={loading()}>
                            <Switch>
                                {routes.map((route, idx) => {
                                    return route.component ? (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact={route.exact}
                                            name={route.name}
                                            render={props => (
                                                <route.component {...props} />
                                            )}
                                        />
                                    ) : null;
                                })}
                            </Switch>
                        </Suspense>
                    </Container>
                </main>
            </div>
        </div>
    );
}
