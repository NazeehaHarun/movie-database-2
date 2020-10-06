import React, { useState } from "react";
import Header from "../../components/Header/Header";

import { Container, Row, Col, Jumbotron, Button, Toast } from "react-bootstrap";

const UserProfile = () => {
  const [followNotification, setFollowNotification] = useState(false);

  const toggleFollowNotification = () => {
    setFollowNotification(!followNotification);
  };

  return (
    <div>

      <Jumbotron>
        <Container>
          <Row >
              <Col>
              Dave McKenney
              </Col>

              <Col>
              <Button onClick={toggleFollowNotification} >Follow</Button>
              </Col>

              <Col>
                <Toast show={followNotification} onClose={toggleFollowNotification} animation = {false}>
                    <Toast.Header>Follow Notification</Toast.Header>
                    <Toast.Body>You have begun following Dave!</Toast.Body>
                </Toast>
              </Col>
          </Row>

        </Container>
      </Jumbotron>

      <Container>
        <Row>
          <Col>Reviews</Col>

          <Col>Following</Col>
        </Row>
      </Container>
    </div>
  );
};

export default UserProfile;
