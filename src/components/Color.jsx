import React from 'react';

const Color = (props) => {
    return (
        <div>
            <h1 style={{color: props.wordColor,  background: props.bgColor}}>Hello</h1>
        </div>
    );
}

export default Color;