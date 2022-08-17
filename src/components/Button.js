import React from 'react';
import { Button } from 'react-bootstrap';

function CSButton(props) {
    return (
        <Button {...props} style={{backgroundColor:props.backgroundColor, border:props.border }} className='btn'>
            <p style={{ fontSize: props.iconfontSize, margin: 0, color: '#fff', marginRight: 10 }}>{props.icon}</p>
            <p style={{
                fontSize: props.titlefontSize,
                color: props.color, width: props.width, margin: 0,
                backgroundColor:props.backgroundColor
                
            }}>{props.title} </p><i class={props.iconRight}></i> 
        </Button>
    );
}

export default CSButton;