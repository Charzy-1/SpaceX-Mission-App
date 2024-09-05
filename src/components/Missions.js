import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, Button, Badge } from 'react-bootstrap';
import { joinMission, leaveMission } from '../redux/missionsSlice';
import '../App.css';

function Missions() {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <div className="missions-container">
      <Table bordered hover className="missions-table">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <tr key={mission.mission_id}>
              <td className="mission-name">{mission.mission_name}</td>
              <td className="mission-description">{mission.description}</td>
              <td className="mission-status">
                <div className="status-container">
                  {mission.reserved ? (
                    <>
                      <Badge bg="success" className="status-badge">
                        Active Member
                      </Badge>
                      <Button
                        variant="danger"
                        size="sm"
                        className="status-button"
                        onClick={() => handleLeaveMission(mission.mission_id)}
                      >
                        Leave Mission
                      </Button>
                    </>
                  ) : (
                    <>
                      <Badge bg="secondary" className="status-badge">
                        Not A Member
                      </Badge>
                      <Button
                        variant="primary"
                        size="sm"
                        className="status-button"
                        onClick={() => handleJoinMission(mission.mission_id)}
                      >
                        Join Mission
                      </Button>
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Missions;
