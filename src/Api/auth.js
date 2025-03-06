import axios from "axios";
import config from "../config/config.js";

const API = axios.create({
  baseURL: config.BASE_URL + "/auth",
  timeout: 5000,
});

export const AuthApi = {
  async register(address) {
    try {
      const response = await API.post("/register", { address });
      return response.data;
    } catch (error) {
      console.error("Error during registration:", error.message);
      throw error;
    }
  },

  async verify(address, signature) {
    try {
      const response = await API.post("/verify", { address, signature });
      return response.data;
    } catch (error) {
      console.error("Error during verification:", error.message);
      throw error;
    }
  },

  async fetchProfile(token) {
    try {
      const response = await API.get("/profile", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching profile:", error.message);
      throw error;
    }
  },
};
