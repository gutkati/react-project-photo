import React, {useState} from 'react';
import PopupWithForm from "../popupWithForm/popupWithForm";
import Input from "../../input/input";
import '../popups.css';
import {useSelector, useDispatch} from "react-redux";
import {selectUser, userUpdate} from "../../../parts/userSlice";

const PopupEditProfile = ({isOpenPopup, onClose}) => {

    const data = useSelector(state => selectUser(state))
    let dataUser = data[0]

    const [surname, setSurname] = useState(dataUser.surname)
    const [name, setName] = useState(dataUser.name)
    const [lastName, setLastName] = useState(dataUser.lastName)
    const [birth, setBirth] = useState(dataUser.birth)

    const onSurnameChange = (e) => setSurname(e.target.value)
    const onNameChange = (e) => setName(e.target.value)
    const onLastNameChange = (e) => setLastName(e.target.value)
    const onDateBirthChange = (e) => setBirth(e.target.value)

    const dispatch = useDispatch()

    function onSaveEditProfile(e) {
        e.preventDefault()
        if (surname, name, lastName, birth) {
            dispatch(
                userUpdate({
                    surname,
                    name,
                    lastName,
                    birth,
                })
            )
            onClose()
        }
    }

    return (
        <PopupWithForm
            isOpen={isOpenPopup}
            onClose={onClose}
            onSave={onSaveEditProfile}
            title='Редактировать профиль'
            titleBtn='Сохранить'
        >
            <div className='inputs__form'>
                <div className='container__input'>
                    <label htmlFor="surnameUser">Фамилия</label>
                    <Input
                        name='surnameUser'
                        id='surnameUser'
                        value={surname}
                        onChange={onSurnameChange}
                        placeholder='Фамилия'
                    />
                </div>
                <div className='container__input'>
                    <label htmlFor="nameUser">Имя</label>
                    <Input
                        name='nameUser'
                        id='nameUser'
                        value={name}
                        onChange={onNameChange}
                        placeholder='Имя'
                    />
                </div>

                <div className='container__input'>
                    <label htmlFor="nameUser">Отчество</label>
                    <Input
                        name='lastNameUser'
                        id='lastNameUser'
                        value={lastName}
                        onChange={onLastNameChange}
                        placeholder='Отчество'
                    />
                </div>

                <div className='container__input'>
                    <label htmlFor="nameUser">Дата рождения</label>
                    <Input
                        name='dateBirthUser'
                        id='dateBirthUser'
                        value={birth}
                        onChange={onDateBirthChange}
                        placeholder='00.00.0000'
                    />
                </div>
            </div>
        </PopupWithForm>
    );
};

export default PopupEditProfile;