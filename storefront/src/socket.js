import { io } from 'socket.io-client';

// Auto-derive socket URL from API URL to prevent environment variable typos
const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
const socketUrl = import.meta.env.VITE_SOCKET_URL || apiUrl.replace(/\/api\/?$/, '');

const socket = io(socketUrl, {
  autoConnect: true,
});

export default socket;
