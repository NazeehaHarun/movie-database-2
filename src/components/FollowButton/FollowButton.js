import React, {useState} from 'react';
import { Container, Row, Col, Button, Toast } from "react-bootstrap";

const FollowButton = (props) => {
    const [followNotification, setFollowNotification] = useState(false);

    const toggleFollowNotification = () => {
        setFollowNotification(!followNotification);
    };

    return (
        <div className = "button">

            <Container>
                <Row >
                    <Col>
                        <Button onClick={toggleFollowNotification} size = {props.size}>Follow</Button>
                    </Col>

                    <Col>
                        <Toast show={followNotification} onClose={toggleFollowNotification} animation={false}>
                            <Toast.Header>Follow Notification</Toast.Header>
                            <Toast.Body>You have begun following {props.name}!</Toast.Body>
                        </Toast>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default FollowButton; 