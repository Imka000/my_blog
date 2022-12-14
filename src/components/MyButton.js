import React, {useState} from 'react';

const MyButton = (props) => {
    const [text, setText] = useState('Читать');

    return (
        <p>
            <button onClick={() => {
                setText('Пошел читать')
            }} className={`w3-button w3-padding-large w3-border ${props.color}`}><b>{text} »</b>
            </button>
        </p>
    );
};

MyButton.defaultProps = {
    color:'w3-black'
}

export default MyButton;