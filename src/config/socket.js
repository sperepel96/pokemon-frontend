import { io } from "socket.io-client";
import config from "./config.js";

const URL = config.SOCKET_URL;

export const socket = io(URL, {
  autoConnect: true,
});
export const connectSocket = (token) => {
  if (!token) {
    console.error("Token is required for socket connection");
    return;
  }
  socket.auth = { token };
  socket.connect();
};
