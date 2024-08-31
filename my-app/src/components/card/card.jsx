import React from 'react';
import styles from "./Card.module.css";

const Card = ({isOpenPopup, card, isOpenPopupDelCard, isOpenPopupEditCard}) => {

    function handleCardClick() {
        isOpenPopup(card)
    }

    function handleDeleteCard() {
        isOpenPopupDelCard(card)
    }

    function handleEditCard() {
        isOpenPopupEditCard(card)
    }

    return (
        <div className={styles.photo__container}>
            <div className={styles.photo__box}>
                <div className={`${styles.photo} ${styles.blackout}`} onClick={handleCardClick}>
                    <img src={card.photo} alt="фото"/>
                </div>
                <div className={styles.text} onClick={handleEditCard}>
                    <p>{card.year} год</p>
                    <p>{card.location}</p>
                    <p>Мне: {card.age}</p>
                </div>
                <button type='submit' aria-label='удалить' className={styles.photo__delete} onClick={handleDeleteCard}/>
            </div>

        </div>
    );
};

export default Card;