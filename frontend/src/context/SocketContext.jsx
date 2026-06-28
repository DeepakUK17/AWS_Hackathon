import { createContext, useContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const SocketContext = createContext();

export function useSocket() {
  return useContext(SocketContext);
}

export function SocketProvider({ children }) {
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Auto-derive socket URL from API URL if missing to prevent environment variable typos
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
    const socketUrl = import.meta.env.VITE_SOCKET_URL || apiUrl.replace(/\/api\/?$/, '');
    
    const newSocket = io(socketUrl, {
      autoConnect: true
    });

    newSocket.on('connect', () => console.log('✅ Socket globally connected!', newSocket.id));
    newSocket.on('connect_error', (err) => console.error('❌ Socket connect error:', err.message));
    newSocket.on('data_updated', (data) => console.log('📡 Global socket received update for module:', data.module));
    
    setSocket(newSocket);

    // Cleanup on unmount
    return () => newSocket.close();
  }, []);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}
