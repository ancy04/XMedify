import React from 'react';
//styles
import "./Button.css";

const Button = ({text, buttonClass, icon, clickFuntion, formSubmit, rotateIcon, id}) => {
    return (
        <button 
            id={id} 
            //bel="Search"
            className={`Button ${buttonClass}`} 
            onClick={clickFuntion}
            type={formSubmit ? "submit" : null}
        >
            {icon ? <img src={icon} className={rotateIcon ? 'buttonIcon rotateLoad' : 'buttonIcon'} /> : null}
            {text ? <span>{text}</span> : null}
        </button>
    );
};

export default Button;