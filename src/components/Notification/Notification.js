import React, {useState} from 'react';

import {Toast} from 'react-bootstrap';

const Notification = (props) => {

    const [show, setShow] = useState(true);

    const toggleShow = () => {
        setShow(!show);
    }

    return (
        <Toast show = {show} onClose = {toggleShow} animation = {false}>
            <Toast.Header>Search Notification</Toast.Header>
            <Toast.Body>You have searched for {props.message}</Toast.Body>
        </Toast>

    );
};

export default Notification;