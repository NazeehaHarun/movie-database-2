import React from "react";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";

const NavigateButton = (props) => {

    return (
        <div>
            <Link to = {props.route}>
                <Button>
                {props.text}
                </Button>
            </Link>
        </div>
    );
};

export default NavigateButton;