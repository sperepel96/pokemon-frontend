import axios from "axios";
import config from "../config/config.js";

const API = axios.create({
  baseURL: config.BASE_URL + "/pokemons",
  timeout: 5000,
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const PokemonApi = {
  async getPokemonById(id) {
    try {
      const response = await API.get(`/getPokemonById`, {
        params: { id },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching Pokémon by ID:", error.message);
      throw error;
    }
  },
  async getAlllazy({ page, limit, type, sortBy, order, search }) {
    try {
      const params = {
        page,
        limit,
        ...(type && { type: type.map((item) => item.value) }),
        ...(sortBy && { sortBy }),
        ...(order && { order }),
        ...(search && { search }),
      };

      const response = await API.get(`/getAllPokemons`, { params });
      return response.data;
    } catch (error) {
      console.error("Error start fight with ID:", error.message);
      throw error;
    }
  },
};
