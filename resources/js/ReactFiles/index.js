import React from "react";
import ReactDOM from "react-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import { createStore, StoreProvider, action } from "easy-peasy";
import App from "./App";
import JavascriptTimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en";
import fa from "javascript-time-ago/locale/fa";
JavascriptTimeAgo.locale(en);
JavascriptTimeAgo.locale(fa);

const store = createStore({
    auth: {
        logedIn: "notset",
        Phonenumber: null,
        Nicename: null,

        setLogedIn: action((state, payload) => {
            state.logedIn = payload;
        }),
        setNiceName: action((state, payload) => {
            state.Nicename = payload;
        }),
        setPhoneNumber: action((state, payload) => {
            state.Phonenumber = payload;
        })
    },
    message: {
        msg: "",
        status: "",
        setMsg: action((state, payload) => {
            state.msg = payload;
        }),
        setStatus: action((state, payload) => {
            state.status = payload;
        }),
        setError: action((state, payload) => {
            state.msg = payload.msg;
            state.status = payload.status;
        })
    },
    searchBox: {
        phonenumber: "",
        status: "",
        value: "",
        rond: "",
        code: "",
        location: "",
        sale: false,
        priceRange: "",

        setPhonenumber: action((state, payload) => {
            state.phonenumber = payload;
        }),
        setStatus: action((state, payload) => {
            state.status = payload;
        }),
        setValue: action((state, payload) => {
            state.value = payload;
        }),
        setRond: action((state, payload) => {
            state.rond = payload;
        }),
        setCode: action((state, payload) => {
            state.code = payload;
        }),
        setLocation: action((state, payload) => {
            state.location = payload;
        }),
        setSale: action((state, payload) => {
            state.sale = payload;
        }),
        setPriceRange: action((state, payload) => {
            state.priceRange = payload;
        })
    },
    listUpdate: {
        dashboardAdvertisment: false,
        setDashboardAdvertisment: action((state, payload) => {
            state.dashboardAdvertisment = payload;
        })
    },
    register: {
        smsToken: "",
        phonenumber: "",
        name: "",
        password: "",
        setSmsToken: action((state, payload) => {
            state.smsToken = payload;
        }),
        setPhonenumber: action((state, payload) => {
            state.phonenumber = payload;
        }),
        setName: action((state, payload) => {
            state.name = payload;
        }),
        setPassword: action((state, payload) => {
            state.password = payload;
        })
    },
    navbar: {
        navbarData: [],
        setNavbarData: action((state, payload) => {
            state.navbarData = payload;
        })
    }
});
if (document.getElementById("app")) {
    ReactDOM.render(
        <StoreProvider store={store}>
            <App />
        </StoreProvider>,

        document.getElementById("app")
    );
}
