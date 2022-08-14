import React from 'react';
import { Button } from 'react-bootstrap';

function CSButton(props) {
    return (
        <Button {...props} variant="primary" className='btn'>
            <p style={{fontSize:props.iconfontSize, margin:0, color:'#fff', marginRight:10}}>{props.icon}</p> 
            <p style={{fontSize:props.titlefontSize, margin:0, color:'#fff', }}>{props.title}</p>
        </Button>
    );
}

export default CSButton;