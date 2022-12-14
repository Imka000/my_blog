import React from 'react';

const Title = (props) => {
    return (
        <div>
            <h1 className={`title-h1 ${props.color}`}>{props.text}</h1>
        </div>
    );
};

export default Title;