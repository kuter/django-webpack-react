import React from 'react';


const userInput = (props) => {
    const style = {
        border: '2px solid red'
    };

    return (
        <input 
            type="Text" 
            style={style}
            onChange={props.change} 
            defaultValue={props.currentName}
        />
    )
};

export default userInput;
