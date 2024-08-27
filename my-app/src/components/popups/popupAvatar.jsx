import React, {useState} from 'react';
import PopupWithForm from "./popupWithForm";
import Input from "../input";
import {useDispatch, useSelector} from "react-redux";
import {selectUser} from "../../parts/userSlice";
import {avatarUpdate} from "../../parts/userSlice";
import './popup.css'

const PopupAvatar = ({isOpenPopup, onClose}) => {
    const data = useSelector(state => selectUser(state))
    let avatarUser = data[0].avatar // действующая аватарка юзера

    const [avatar, setAvatar] = useState(avatarUser)

    const onPhotoChange = (e) => setAvatar(e.target.value)

    const dispatch = useDispatch()

    function onSaveEditAvatar() {
        if(avatar) {
            dispatch(
                avatarUpdate(
                    {
                        avatar
                    }
                )
            )
        }
    }

    return (
        <PopupWithForm
            isOpen={isOpenPopup}
            onClose={onClose}
            onSave={onSaveEditAvatar}
            title='Редактировать аватарку'
            titleBtn='Сохранить'
        >
            <div className='inputs__form popup__avatar'>
                <div className='container__input'>
                    <label htmlFor="photoUser">Фотография</label>
                    <Input
                        name='photoUser'
                        id='photoUser'
                        value={avatar}
                        onChange={onPhotoChange}
                        placeholder='ссылка для фотографии'
                    />
                </div>
            </div>
        </PopupWithForm>
    );
};

export default PopupAvatar;