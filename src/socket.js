import { io } from "socket.io-client";
import config from "./config/config.js";

const URL = config.SOCKET_URL;

export const socket = io(URL, {
  autoConnect: true,
  auth: {
    token: localStorage.getItem("token"),
  },
});
