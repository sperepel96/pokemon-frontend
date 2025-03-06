import axios from "axios";
import config from "../config/config.js";

const API = axios.create({
  baseURL: config.BASE_URL + "/types",
  timeout: 5000,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const PokemonTypesApi = {
  async getAll() {
    try {
      const response = await API.get(`/getPokemonTypes`, {});
      return response.data;
    } catch (error) {
      console.error("Error get pokemon types:", error.message);
      throw error;
    }
  },
};
