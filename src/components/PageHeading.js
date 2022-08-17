import React from 'react';


function PageHeading(props) {
    return (
        <div>
            <h3 style={{
                fontSize: props.fontSize, fontWeight: props.fontWeight, color: props.color,
                marginBottom:props.marginBottom, marginLeft:props.marginLeft, marginTop: props.marginTop
            }} >{props.heading}</h3>
        </div>
    );
}

export default PageHeading;