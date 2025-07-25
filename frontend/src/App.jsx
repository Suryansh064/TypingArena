import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TypingBox from './components/TypingBox';
import Header from './components/Header';
import Profile from './components/Profile';
import Settings from './components/Settings';
import RoomPage from './components/RoomPage';
import TypingRoom from './components/TypingRoom';
import ProtectedRoute from './components/ProtectedRoute';
import RankCard from './components/RankCard';
import SignUp from './pages/Signup';
import Login from './pages/Login';
import { useState } from 'react';

const AppContent = () => {
  const location = useLocation();
  const hideHeader = location.pathname === '/login' || location.pathname === '/register';
  const [paragraph, setParagraph] = useState('');
  const [duration, setDuration] = useState(1);

  return (
    <div className="text-green-900">
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/register" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<TypingBox />} />
        <Route
          path="/room"
          element={<ProtectedRoute><RoomPage setParagraph={setParagraph} setDuration={setDuration} duration={duration} /></ProtectedRoute> }
        />
        <Route path="/profile" element={<ProtectedRoute> <Profile /></ProtectedRoute>}/>
        <Route path="/settings" element={<Settings />} />
        <Route path="/typeRoom" element={<TypingRoom paragraph={paragraph} duration={duration} />} />
        <Route path="/rank" element={<ProtectedRoute><RankCard /></ProtectedRoute>} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
        <AppContent />
  );
};

export default App;
