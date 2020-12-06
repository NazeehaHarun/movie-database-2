import React from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const NavigateButton = (props) => {

    return (
        <div>
            <Link exact to = {props.route}>
                <Button variant = "primary">
                {props.text}
                </Button>
            </Link>
        </div>
    );
};

export default NavigateButton;