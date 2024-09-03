import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  const missions = useSelector((state) => state.missions.filter((mission) => mission.reserved));

  return (
    <div className="profile-container">
      <div className="profile-column">
        <h2 className="profile-heading">My Missions</h2>
        <div className="box-container">
          {missions.map((mission) => (
            <div key={mission.id} className="profile-box">
              {mission.name}
            </div>
          ))}
        </div>
      </div>
      <div className="profile-column">
        <h2 className="profile-heading">My Rockets</h2>
        <div className="box-container">
          {rockets.map((rocket) => (
            <div key={rocket.id} className="profile-box">
              {rocket.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
