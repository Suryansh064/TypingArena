import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { AppProvider } from './context/AppContext.jsx';
import { ResultProvider } from './context/ResultContext.jsx';
import { RoomProvider } from './context/RoomContext.jsx';
import { BrowserRouter } from 'react-router';
import { io } from 'socket.io-client';

// Initialize socket connection
const socket = io('http://localhost:3000', {
  withCredentials: true,
  transports: ['websocket'],
});
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ResultProvider>
      <RoomProvider>
        <AppProvider>
          <App socket={socket} />
        </AppProvider>
      </RoomProvider>
    </ResultProvider>
  </BrowserRouter>
);

