import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css'; 

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  const missions = useSelector((state) => state.missions.filter((mission) => mission.reserved));

  return (
    <div className="profile-container">
      <div className="profile-section">
        <h2 className="profile-title">My Missions</h2>
        <ul className="profile-list">
          {missions.map((mission) => (
            <li key={mission.id} className="profile-list-item">
              {mission.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="profile-section">
        <h2 className="profile-title">My Rockets</h2>
        <ul className="profile-list">
          {rockets.map((rocket) => (
            <li key={rocket.id} className="profile-list-item">
              {rocket.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MyProfile;
