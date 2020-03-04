import axios from "axios";
import secureStorage from "../services/Storage";

//Move to Process.env
const baseUrl = process.env.MIX_BASEURL;
const loginRoute = process.env.MIX_AUTH_LOGIN;
// const logoutRoute = process.enc.MIX_AUTH_LOGOUT;
const meRoute = process.env.MIX_AUTH_ME;
export const JWTLogin = async data => {
    console.log(data);
    return axios
        .post(baseUrl + "/auth/login", data)
        .then(res => {
            secureStorage.setItem("jwt", res.data.access_token);
            console.log(res.data.access_token, secureStorage.getItem("jwt"));
            return {
                status: res.status,
                message: "خوش آمدید"
            };
        })
        .catch(err => {
            console.log("The Error", err);
            console.log("The Error1", err.response);
            return {
                status: err.response.status,
                message: err.response.data.message
            };
        });
};

export const JWTLogout = () => {
    return new Promise((resolve, reject) => {
        return axios
            .post(baseUrl + "/auth/logout", {}, JWTHeader())
            .then(res => {
                secureStorage.clear();
                console.log("storage cleared");
                return resolve({ status: res.status });
            })
            .catch(err => {
                return reject({ status: err.status });
            });
    });
};

export const JWTValidate = async () => {
    console.log("header USED", JWTHeader());
    console.log(baseUrl + "/auth/me");

    return new Promise((resolve, reject) => {
        return axios
            .post(baseUrl + "/auth/me", {}, JWTHeader())
            .then(res => {
                secureStorage.setItem("name", res.data.name);
                secureStorage.setItem("phonenumber", res.data.phonenumber);
                console.log("Authenticated in AUTH", res);
                return resolve({
                    statusText: res.statusText,
                    name: res.data.name,
                    phonenumber: res.data.phonenumber
                });
            })
            .catch(err => {
                console.log("sdsdsadad", err.response);
                return reject(err);
            });
    });

    return;
};

export const JWTCheck = async () => {
    return new Promise((resolve, reject) => {
        if (secureStorage.getItem("jwt")) {
            JWTValidate().then(data => {
                if (data.status === 200) resolve({ status: 200 });
                else reject({ status: 201 });
            });
        } else reject({ status: 201 });
    });
};

export const JWTHeader = () => {
    return {
        headers: {
            // "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: "Bearer " + secureStorage.getItem("jwt")
        }
    };
};
