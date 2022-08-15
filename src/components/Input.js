import React from 'react';
import Form from 'react-bootstrap/Form';

function Input({ inputType, placeholder, inputFor,handleInput }) {
    return (
        <>
        <Form.Group className="mb-3" controlId={inputFor}>
            <Form.Control required type={inputType} placeholder={placeholder} className="form-input" onChange={(e) => handleInput(e)} />
        </Form.Group>
        </>
    );
}

export default Input;