import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Rockets from './components/Rockets';
import Missions from './components/Missions';
import MyProfile from './components/MyProfile';
import { fetchRockets } from './redux/rocketsSlice';
import { fetchMissions } from './redux/missionsSlice';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRockets());
    dispatch(fetchMissions());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      {' '}
      {/* Add the Navbar component here */}
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/missions" element={<Missions />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
