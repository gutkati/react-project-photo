import React, {useEffect, useState} from 'react';
import '../popups.css'
import {useSelector} from "react-redux";
import {selectAllCards} from "../../../parts/cardsSlice";

const PopupShowPhoto = ({isOpenPopup, onClose, card}) => {
    const allCards = useSelector(state => selectAllCards(state))

    const [showCard, setShowCard] = useState({}) // складывать видимую карточку
    let [index, setIndex] = useState(0) // складывать индекс видимой карты

    const cardsLength = allCards.length - 1 // получить длину массива всех карточек

    // получить карточку на которую кликнули
    // получить индекс этой карточки
    useEffect(() => {
        allCards.map((img, ind) => {
            if (img.id === card.id) {
                setShowCard(img)
                setIndex(ind)
            }
        })
    }, [isOpenPopup])

    function getCardNext() {
        if (index === cardsLength) {
            setIndex(index = 0)
            setShowCard(allCards[index])
        } else {
            setIndex(index = index + 1)
            setShowCard(allCards[index])
        }
    }

    function getCardPrev() {
        if (index === 0) {
            setIndex(index = cardsLength)
            setShowCard(allCards[index])
        } else {
            setIndex(index = index - 1)
            setShowCard(allCards[index])
        }
    }

    return (
        <div className={`popup ${isOpenPopup ? 'popup_opened' : ""}`}>
            <div className='popup__img'>
                <button onClick={onClose} className='popup-btn__style popup__close-img'>✖</button>

                <div className='popup__box-img'>

                    <img className='popup__photo' src={showCard.photo} alt=""/>
                    <button onClick={getCardNext} className='popup-btn__style popup__next-img'>ᐳ</button>
                    <button onClick={getCardPrev} className='popup-btn__style popup__prev-img'>ᐸ</button>
                </div>

                <span className='popup__img-desc'>{showCard.location}</span>

            </div>
        </div>
    );
};

export default PopupShowPhoto;