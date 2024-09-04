import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelRocketReservation } from '../redux/rocketsSlice';
import '../App.css'; // Assuming this is where your custom styles are located

function Rockets() {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancelReservation = (id) => {
    dispatch(cancelRocketReservation(id));
  };

  return (
    <div className="rocket-list">
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket-card">
          <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="rocket-image" />
          <div className="rocket-details">
            <h2>{rocket.rocket_name}</h2>
            <p>{rocket.description}</p>
            {rocket.reserved && <span className="badge">Reserved</span>}
            <div className="button-container">
              {rocket.reserved ? (
                <button
                  type="button" // Added type attribute
                  className="cancel"
                  onClick={() => handleCancelReservation(rocket.id)}
                >
                  Cancel Reservation
                </button>
              ) : (
                <button
                  type="button" // Added type attribute
                  onClick={() => handleReserve(rocket.id)}
                >
                  Reserve Rocket
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rockets;
