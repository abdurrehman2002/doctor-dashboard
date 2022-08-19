import React from 'react';
import Form from 'react-bootstrap/Form';

function Input(props) {
    const { inputType, placeholder, inputFor,searchIcon,value} = props
    return (
        <>
        <Form.Group className="mb-3 d-flex align-items-center justify-content-center" controlId={inputFor}>
            <Form.Control required value={value} type={inputType} placeholder={placeholder} className={props.InputCSS} 
            style={{padding:props.padding ,}}
            {...props}
             />
             
                    <i className={`${searchIcon} inputSearchIcon`} ></i>
              
            
        </Form.Group>
        </>
    );
}

export default Input;