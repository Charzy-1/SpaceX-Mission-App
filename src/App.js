import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { fetchRockets } from './redux/rocketsSlice';
import { fetchMissions } from './redux/missionsSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <Router>
      <nav>
        <NavLink 
          to="/" 
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Rockets
        </NavLink>
        <NavLink 
          to="/missions" 
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          Missions
        </NavLink>
        <NavLink 
          to="/profile" 
          className={({ isActive }) => (isActive ? "active-link" : undefined)}
        >
          My Profile
        </NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
