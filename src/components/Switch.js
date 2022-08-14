import React from "react";
import { Row, Col, Form } from 'react-bootstrap';

function Switch({text,id,defaultValue}) {
    return (
        <>
            <Form.Group as={Row} className="mb-4">
                            <Col sm={10}>
                                <Form.Check className="switch-button"
                                    type="switch"
                                    id={id}
                                    label={text}
                                    defaultChecked={defaultValue}
                                    // onChange={handleChange}
                                />
                            </Col>
                        </Form.Group>
                </>
                );
}
export default Switch;