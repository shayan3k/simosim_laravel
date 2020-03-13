import axios from "axios";
import secureStorage from "./Storage";

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
            secureStorage.setItem("name", res.data.name);
            secureStorage.setItem("phonenumber", res.data.phonenumber);
            secureStorage.setItem(
                "is_admin",
                res.data.is_admin ? "true" : "false"
            );
            console.log("IS_ADMIN", res.data.is_admin ? "true" : "false");
            return {
                status: res.status,
                message: "خوش آمدید"
            };
        })
        .catch(err => {
            console.log("The Error", err);
            return {
                status: err.response.status,
                message: err
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
                secureStorage.setItem(
                    "is_admin",
                    res.data.is_admin ? "true" : "false"
                );
                console.log("Authenticated in AUTH", res);
                return resolve({
                    statusText: res.statusText,
                    name: res.data.name,
                    phonenumber: res.data.phonenumber
                });
            })
            .catch(err => {
                console.log("NOT Authenticated in AUTH", err.response);
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
    //Check if the user is verified
    var authHeader =
        secureStorage.getItem("verified") == "true"
            ? "Bearer " + secureStorage.getItem("jwt")
            : "";

    return {
        headers: {
            // "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
            Authorization: authHeader
        }
    };
};
