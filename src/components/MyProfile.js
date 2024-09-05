import React from 'react';
import { useSelector } from 'react-redux';
import '../App.css';

const MyProfile = () => {
  // Filter for reserved rockets and missions
  const rockets = useSelector((state) => state.rockets.filter((rocket) => rocket.reserved));
  const missions = useSelector((state) => state.missions.filter((mission) => mission.reserved));

  return (
    <div className="profile-container">
      {/* My Missions Section */}
      <div className="profile-column">
        <h2 className="profile-heading">My Missions</h2>
        <div className="box-container">
          {missions.length > 0 ? (
            missions.map((mission) => (
              <div key={mission.id} className="profile-box">
                {mission.mission_name}
              </div>
            ))
          ) : (
            <p>No missions joined yet.</p>
          )}
        </div>
      </div>

      {/* My Rockets Section */}
      <div className="profile-column">
        <h2 className="profile-heading">My Rockets</h2>
        <div className="box-container">
          {rockets.length > 0 ? (
            rockets.map((rocket) => (
              <div key={rocket.id} className="profile-box">
                {rocket.rocket_name}
              </div>
            ))
          ) : (
            <p>No rockets reserved yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
