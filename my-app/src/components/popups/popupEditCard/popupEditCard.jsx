import React, {useEffect, useState} from 'react';
import PopupWithForm from "../popupWithForm/popupWithForm";
import {useDispatch, useSelector} from "react-redux";
import {cardUpdate} from "../../../parts/cardsSlice";
import Input from "../../input/input";
import {selectUser} from "../../../parts/userSlice";
import '../popups.css'

const PopupEditCard = ({card, isOpenPopup, onClose}) => {

    const data = useSelector(state => selectUser(state))
    let birthUser = data[0].birth // дата рождения юзера

    const [photo, setPhoto] = useState('')
    const [year, setYear] = useState('')
    const [location, setLocation] = useState('')
    const [age, setAge] = useState('')

    useEffect(() => {
        setPhoto(card.photo)
        setYear(card.year)
        setLocation(card.location)
        setAge(card.age)
    }, [isOpenPopup]);

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

    function onSaveEditCard() {
        if (photo, year, location) {
            dispatch(
                cardUpdate({
                    photo,
                    year,
                    location,
                    age
                })
            )
        }
    }

    return (
        <PopupWithForm
            isOpen={isOpenPopup}
            onClose={onClose}
            onSave={onSaveEditCard}
            title='Редактировать карточку'
            titleBtn='Сохранить'
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

export default PopupEditCard;