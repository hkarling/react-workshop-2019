import React from 'react';
import './Form.css';

const Form = ({todo,myClick,myChange,myEnter}) => {
    return (
        <div>
            <div className="form">
                <input type="text" value={todo} 
                 onChange={myChange} onKeyPress={myEnter}
                />
                <div className="create-button" onClick={myClick}>
                    추가
                </div>
            </div>
        </div>
    );
};


export default Form;