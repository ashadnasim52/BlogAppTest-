import IO from "socket.io-client";
let socket = IO("localhost:8000");
export default socket;
