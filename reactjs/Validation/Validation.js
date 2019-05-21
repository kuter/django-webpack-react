import React from 'react';


const validation = (props) => {
    let validationMessage = 'Text too short';

    if (props.inputLength > 5) {
        validationMessage = 'Text long enough'
    }
    return (
        <div>
            <p>{validationMessage}</p>
        {/*
        {props.inputLength > 5 ?
            <p>Text long enough</p> :
            <p>Text too short!</p>
        }
        */}
        </div>
    )
}

export default validation;
