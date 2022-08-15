import React from 'react';
import Form from 'react-bootstrap/Form';

function Input(props) {
    const { inputType, placeholder, inputFor} = props
    return (
        <>
        <Form.Group className="mb-3" controlId={inputFor}>
            <Form.Control required type={inputType} placeholder={placeholder} className="form-input" 
            {...props}
             />
        </Form.Group>
        </>
    );
}

export default Input;