import axios from "axios";

const httpClient = axios.create({ baseURL: "http://localhost:5000/api" });

export const createPhone = (values) => httpClient.post("/phones", values);

export const getPhones = () => httpClient.get("/phones");

export const removePhone = (id) => httpClient.delete(`/phones/${id}`);
