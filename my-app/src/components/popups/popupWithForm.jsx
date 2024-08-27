import React from 'react';
import './popup.css'

const PopupWithForm = (props) => {
    return (
        <div className={`popup ${props.isOpen ? 'popup_opened' : ""}`}>
            <div className="popup__form">
                <button className="popup__close" onClick={props.onClose} type='button'>✖</button>
                <form action="" className="form" onSubmit={props.onSubmit}>
                    <h2>{props.title}</h2>
                    {props.children}
                    <button type='submit' className="form__save" onClick={props.onSave}>{props.titleBtn}</button>
                </form>
            </div>
        </div>
    );
};

export default PopupWithForm;