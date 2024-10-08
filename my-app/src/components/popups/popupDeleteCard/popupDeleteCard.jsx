import React from 'react';
import PopupWithForm from "../popupWithForm/popupWithForm";
import '../popups.css'
import {useDispatch} from "react-redux";
import {cardDelete} from "../../../parts/cardsSlice";

const PopupDeleteCard = ({card, isOpenPopup, onClose}) => {

    const dispatch = useDispatch()

    function onSaveDeleteCard() {
        dispatch(
            cardDelete({card})
        )
        onClose()
    }

    return (
        <PopupWithForm
            isOpen={isOpenPopup}
            onClose={onClose}
            onSave={onSaveDeleteCard}
            title='Удалить карточку'
            titleBtn='Удалить'
        >
            <h3 className='popup__delete'>Вы уверены?</h3>
        </PopupWithForm>
    );
};

export default PopupDeleteCard;