import React, {useState} from 'react';
import { Container, Row, Col, Button, Toast } from "react-bootstrap";
import axios from "axios";

const UnfollowButton = (props) => {
    const [followNotification, setFollowNotification] = useState(false);

    const toggleFollowNotification = () => {
        setFollowNotification(!followNotification);
    };

    const handleChange = (event) => {
        event.preventDefault();

        if (!props.peopleId === null) {
            axios.delete(`/people/${props.peopleId}/follow`).then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });

        } else {
            axios.delete(`/users/${props.userId}/follow`).then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });
        }
    };

    return (
        <div className = "button">

            <Container>
                <Row >
                    <Col>
                        <Button size = {props.size} onClick = {handleChange}>Un-Follow</Button>
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

export default UnfollowButton; 