import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
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
        <NavLink exact to="/" activeClassName="active-link">Rockets</NavLink>
        <NavLink to="/missions" activeClassName="active-link">Missions</NavLink>
        <NavLink to="/profile" activeClassName="active-link">My Profile</NavLink>
      </nav>
      <Route exact path="/" component={Rockets} />
      <Route path="/missions" component={Missions} />
      <Route path="/profile" component={MyProfile} />
    </Router>
  );
}

export default App;
