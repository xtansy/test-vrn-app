import axios from "axios";

const LOCAL = "http://localhost:8080/";

const api = axios.create({
    baseURL: LOCAL,
});

export default api;