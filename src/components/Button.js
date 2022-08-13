import React from 'react';
import { Button } from 'react-bootstrap';

function CSButton(props) {
    return (
        <Button as="a" variant="primary">
            {props.title} {props.icon}
        </Button>
    );
}

export default CSButton;