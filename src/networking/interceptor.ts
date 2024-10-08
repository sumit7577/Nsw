import Axios from "axios";
import { AuthenticationError, ServerError, NetworkError, ClientError } from "./error-type"
import { loginResp } from "./resp-type"
import AppStorge from "../constants/database";

const shopName = "https://nswtest.pythonanywhere.com";
//const shopName = "http://192.168.2.188:8000/";

const client = Axios.create({
    headers: {
        "Content-Type": "application/json",
    }
});

client.interceptors.request.use(async (request:any) => {
    const token = AppStorge.getString("token");
    if (token) {
        request.headers['Authorization'] = `Token ${token}`;
    }
    return request;
});

client.interceptors.response.use(
    (response) => {
        //console.log("response",response.data);
        return response;
    },
    (error) => {
        //console.log("resp",error.response.data);
        //console.log("error",error)
        if (error.message === "Network Error") {
            return Promise.reject(new NetworkError('Please Turn On Your Mobile Data'));
        } else if (error.response.status >= 500) {
            return Promise.reject(
                new ServerError(error.response.data.error, error.response.status)
            );
        } else if (error.response.status === 401) {
            return Promise.reject(new AuthenticationError("The username or password that you've entered is incorrect."));
        } else if (error.response.status >= 400 && error.response.status < 500) {
            return Promise.reject(
                new ClientError(
                    error.response.data.message ?? Object.entries(error.response.data.errors).join(" ").replace(","," "),
                    error.response.status
                )
            );
        }
        return Promise.reject({ ...error });
    }
);



export { client, shopName };