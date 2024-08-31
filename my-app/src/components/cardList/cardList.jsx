import React from 'react';
import styles from './CardList.module.css'
import Card from "../card/card";
import {useSelector} from "react-redux";
import {selectAllCards} from "../../parts/cardsSlice";

const CardList = (props) => {

    const cards = useSelector(state => selectAllCards(state))

    const listCards = cards.map(card => (
        <Card
            isOpenPopup={props.isOpenPopup}
            isOpenPopupDelCard={props.isOpenPopupDelCard}
            isOpenPopupEditCard={props.isOpenPopupEditCard}
            card={card}
            key={card.id}/>
    ))

    return (
        <section className={styles.photo__section}>
            {listCards}
        </section>


    );
};

export default CardList;