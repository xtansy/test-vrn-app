import axios from "axios";

const URL = process.env.REACT_APP_URL || "http://localhost:8080/";
console.log(URL);
console.log(process.env);

const api = axios.create({
    baseURL: URL,
});

export default api;