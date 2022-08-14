import React from 'react';
import Form from 'react-bootstrap/Form';

function Input({ inputType, placeholder, inputFor }) {
    return (
        <>
        <Form.Group className="mb-3" controlId={inputFor}>
            <Form.Control type={inputType} placeholder={placeholder} className="form-input" />
        </Form.Group>
        </>
    );
}

export default Input;