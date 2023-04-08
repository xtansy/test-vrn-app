import axios from "axios";

const URL = process.env.BACKEND_URL || "http://localhost:8080/";
console.log(URL);

const api = axios.create({
    baseURL: URL,
});

export default api;