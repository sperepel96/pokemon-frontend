import axios from "axios";
import config from "../config/config.js";

const API = axios.create({
  baseURL: config.BASE_URL + "/fight",
  timeout: 100000,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const FightsApi = {
  async getFights({ page, limit, sortOrder }) {
    try {
      const params = {
        page,
        limit,
        sortOrder,
      };
      const response = await API.get(`/getFights`, { params });
      return response.data;
    } catch (error) {
      console.error("Error fetching Pokémon by ID:", error.message);
      throw error;
    }
  },
};
