import React, {useEffect, useState} from 'react';
import './popup.css'
import {useSelector} from "react-redux";
import {selectAllCards} from "../../parts/cardList/cardsSlice";


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

    // получить следующую карточку
    function handleCardNext() {
        if (index === cardsLength) {
            setIndex(index = 0)
            setShowCard(allCards[index])
        } else {
            setIndex(index = index + 1)
            setShowCard(allCards[index])
        }
    }

    // получить предыдущую карточку
    function handleCardPrev() {
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
                <button onClick={handleCardNext} className='popup-btn__style popup__next-img'>ᐳ</button>
                <img className='popup__img' src={showCard.photo} alt=""/>
                <span className='popup__img-desc'>{showCard.location}</span>
                <button onClick={handleCardPrev} className='popup-btn__style popup__prev-img'>ᐸ</button>
            </div>
        </div>
    );
};

export default PopupShowPhoto;