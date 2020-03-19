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
        logedIn: false,
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
            console.log(state.msg);
        }),
        setStatus: action((state, payload) => {
            state.status = payload;
            console.log(state.status);
        }),
        setError: action((state, payload) => {
            state.msg = payload.msg;
            state.status = payload.status;
            console.log(state.msg, state.status);
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
            console.log(state.phonenumber);
        }),
        setStatus: action((state, payload) => {
            state.status = payload;
            console.log(state.status);
        }),
        setValue: action((state, payload) => {
            state.value = payload;
            console.log(state.value);
        }),
        setRond: action((state, payload) => {
            state.rond = payload;
            console.log(state.rond);
        }),
        setCode: action((state, payload) => {
            state.code = payload;
            console.log(state.code);
        }),
        setLocation: action((state, payload) => {
            state.location = payload;
            console.log(state.location);
        }),
        setSale: action((state, payload) => {
            state.sale = payload;
            console.log(state.sale);
        }),
        setPriceRange: action((state, payload) => {
            state.priceRange = payload;
            console.log(state.priceRange);
        })
    },
    listUpdate: {
        dashboardAdvertisment: false,
        setDashboardAdvertisment: action((state, payload) => {
            state.dashboardAdvertisment = payload;
            console.log(state.dashboardAdvertisment);
        })
    },
    register: {
        smsToken: "",
        phonenumber: "",
        name: "",
        password: "",
        setSmsToken: action((state, payload) => {
            state.smsToken = payload;
            console.log(state.smsToken);
        }),
        setPhonenumber: action((state, payload) => {
            state.phonenumber = payload;
            console.log(state.phonenumber);
        }),
        setName: action((state, payload) => {
            state.name = payload;
            console.log(state.name);
        }),
        setPassword: action((state, payload) => {
            state.password = payload;
            console.log(state.password);
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
