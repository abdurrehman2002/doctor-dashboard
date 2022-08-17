import React from 'react';
import Form from 'react-bootstrap/Form';

function Input(props) {
    const { inputType, placeholder, inputFor,searchIcon} = props
    return (
        <>
        <Form.Group className="mb-3 d-flex align-items-center justify-content-center" controlId={inputFor}>
            <Form.Control required type={inputType} placeholder={placeholder} className="form-input" 
            style={{padding:props.padding}}
            {...props}
             />
             
                    <i className={`${searchIcon} inputSearchIcon`} ></i>
              
            
        </Form.Group>
        </>
    );
}

export default Input;