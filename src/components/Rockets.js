import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { reserveRocket, cancelRocketReservation } from '../redux/rocketsSlice';
import { Card, Button, Container, Row, Col, Badge } from 'react-bootstrap';

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
    <Container>
      <Row>
        {rockets.map((rocket) => (
          <Col md={4} key={rocket.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={rocket.flickr_images[0]} />
              <Card.Body>
                <Card.Title>{rocket.rocket_name}</Card.Title>
                <Card.Text>{rocket.description}</Card.Text>
                {rocket.reserved && <Badge bg="success">Reserved</Badge>}
                {rocket.reserved ? (
                  <Button
                    variant="danger"
                    onClick={() => handleCancelReservation(rocket.id)}
                  >
                    Cancel Reservation
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    onClick={() => handleReserve(rocket.id)}
                  >
                    Reserve Rocket
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Rockets;
