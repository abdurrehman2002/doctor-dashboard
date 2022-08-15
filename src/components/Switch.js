import React from "react";
import { Row, Col, Form } from 'react-bootstrap';

function Switch({text,id,defaultValue,handleSwitch}) {
    return (
        <>
            <Form.Group as={Row} className="mb-4">
                            <Col sm={10}>
                                <Form.Check className="switch-button"
                                    type="switch"
                                    id={id}
                                    label={text}
                                    defaultChecked={defaultValue}
                                    onChange={(e) => handleSwitch(e)}
                                />
                            </Col>
                        </Form.Group>
                </>
                );
}
export default Switch;