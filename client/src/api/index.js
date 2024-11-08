import axios from "axios";
import queryString from "query-string";

const httpClient = axios.create({ baseURL: "http://localhost:5000/api" });

export const createPhone = (body) => httpClient.post("/phones", body);

export const getPhones = (filter) =>
  httpClient.get(`/phones?${queryString.stringify(filter)}`);

export const removePhone = (id) => httpClient.delete(`/phones/${id}`);
