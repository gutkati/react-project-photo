import React, {useState} from 'react';
import PopupWithForm from "../popupWithForm/popupWithForm";
import Input from "../../input/input";
import {useDispatch, useSelector} from "react-redux";
import {cardAdded} from "../../../parts/cardsSlice";
import {selectUser} from "../../../parts/userSlice";
import '../popups.css'

const PopupAddCard = ({isOpenPopup, onClose}) => {

    const data = useSelector(state => selectUser(state))
    let birthUser = data[0].birth // дата рождения юзера

    const [photo, setPhoto] = useState('')
    const [year, setYear] = useState('')
    const [location, setLocation] = useState('')
    const [age, setAge] = useState(0)

    const onPhotoChange = (e) => setPhoto(e.target.value)
    const onYearChange = (e) => {
        setYear(e.target.value)
        setAge(getAgeUser(e.currentTarget.value, getYearBirthUser(birthUser)))
    }
    const onLocationChange = (e) => setLocation(e.target.value)


    function getYearBirthUser(birthUser) {
        let str = /(?<year>\d{4})/
        let resYear = birthUser.match(str)
        return resYear.groups.year
    }

    function getAgeUser(yearPhoto, yearBirth) {
        let age = Number(yearPhoto) - Number(yearBirth)
        return age
    }

    const dispatch = useDispatch()

    function onSaveCardClick(e) {
        e.preventDefault()

        if (photo, year, location) {
            dispatch(cardAdded(photo, year, location, age))

            setPhoto('')
            setYear('')
            setLocation('')
            onClose()
        }
    }

    return (
        <PopupWithForm
            isOpen={isOpenPopup}
            onClose={onClose}
            title='Добавить фотографию'
            titleBtn='Сохранить'
            onSave={onSaveCardClick}
        >
            <div className='inputs__form'>
                <div className='container__input'>
                    <label htmlFor="photoUser">Фотография</label>
                    <Input
                        name='photoUser'
                        id='photoUser'
                        value={photo}
                        onChange={onPhotoChange}
                        placeholder='ссылка для фотографии'
                    />
                </div>
                <div className='container__input'>
                    <label htmlFor="yearPhoto">Год</label>
                    <Input
                        name='yearPhoto'
                        id='yearPhoto'
                        value={year}
                        onChange={onYearChange}
                        placeholder='0000'
                    />
                </div>

                <div className='container__input'>
                    <label htmlFor="location">Место</label>
                    <Input
                        name='location'
                        id='location'
                        value={location}
                        onChange={onLocationChange}
                        placeholder='описание места'
                    />
                </div>
            </div>
        </PopupWithForm>
    );
};

export default PopupAddCard;