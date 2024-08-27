import React, {useState, useEffect} from 'react';
import styles from "./Root.module.css";
import PopupEditProfile from "../../components/popups/popupEditProfile";

// помощью useSelector будем получать данные из store:
import {useSelector} from 'react-redux'
import {selectUser} from "../../parts/userSlice";
import CardList from "../../parts/cardList/cardList";
import PopupShowPhoto from "../../components/popups/popupShowPhoto";
import PopupAddCard from "../../components/popups/popupAddCard";
import PopupDeleteCard from "../../components/popups/popupDeleteCard";
import PopupEditCard from "../../components/popups/popupEditCard";
import PopupAvatar from "../../components/popups/popupAvatar";
import {getProfile} from "../../parts/userSlice";

const Root = () => {
    const [isOpenPopupProfile, setIsOpenPopupProfile] = useState(false)
    const [isOpenPopupShowPhoto, setIsOpenPopupShowPhoto] = useState(false)
    const [isOpenPopupAddCard, setIsOpenPopupAddCard] = useState(false)
    const [isOpenPopupDelCard, setIsOpenPopupDelCard] = useState(false)
    const [isOpenPopupEditCard, setIsOpenPopupEditCard] = useState(false)
    const [isOpenPopupAvatar, setIsOpenPopupAvatar] = useState(false)
    const [selectedCard, setSelectedCard] = useState({})


    const arrData = useSelector(state => selectUser(state))
    const user = arrData[0]

    function handleOpenPopupProfile() {
        setIsOpenPopupProfile(true)
    }

    function handleOpenAddCard() {
        setIsOpenPopupAddCard(true)
    }

    function handleOpenDelCard(card) {
        setIsOpenPopupDelCard(true)
        setSelectedCard(card)
    }

    function handleClosePopup() {
        setIsOpenPopupProfile(false)
        setIsOpenPopupShowPhoto(false)
        setIsOpenPopupAddCard(false)
        setIsOpenPopupDelCard(false)
        setIsOpenPopupEditCard(false)
        setIsOpenPopupAvatar(false)
    }

    function handleCardClick(card) {
        setIsOpenPopupShowPhoto(true)
        setSelectedCard(card)
    }

    function handleEditCard(card) {
        setIsOpenPopupEditCard(true)
        setSelectedCard(card)
    }

    function handleOpenAvatar() {
        setIsOpenPopupAvatar(true)
    }

    useEffect(() => {
        getProfile()
    }, []);


    const showDataUser = arrData.map(user => (
        <div key={user.id} className={styles.info}>
            <p className={styles.info__text}>{user.surname}</p>
            <p className={styles.info__text}>{user.name}</p>
            <p className={styles.info__text}>{user.lastName}</p>
            <p className={styles.info__text}>{user.birth}</p>
        </div>
    ))

    return (
        <>
            <div className={styles.root}>
                <h2>Создай свой фотоальбом</h2>
                <hr/>
                <section className={styles.profile}>
                    <div className={styles.profile__container}>
                        <div className={`${styles.profile__avatar} ${styles.blackout}`} onClick={handleOpenAvatar}>
                            <img src={user.avatar} alt=""
                                 className={styles.avatar}/>
                        </div>
                        <div className={styles.profile__info}>
                            {showDataUser}
                            <button className={`${styles.edit__info} ${styles.blackout}`}
                                    onClick={handleOpenPopupProfile}/>
                        </div>
                    </div>
                </section>
                <hr/>
                <h2>Мои фотографии</h2>
                <button className={`${styles.add__photo} ${styles.blackout}`} onClick={handleOpenAddCard}/>
                <CardList
                    isOpenPopup={handleCardClick}
                    isOpenPopupEditCard={handleEditCard}
                    isOpenPopupDelCard={handleOpenDelCard}
                />
            </div>
            <PopupEditProfile
                isOpenPopup={isOpenPopupProfile}
                onClose={handleClosePopup}
            />

            <PopupShowPhoto
                card={selectedCard}
                isOpenPopup={isOpenPopupShowPhoto}
                onClose={handleClosePopup}
            />

            <PopupAddCard
                isOpenPopup={isOpenPopupAddCard}
                onClose={handleClosePopup}
            />

            <PopupEditCard
                card={selectedCard}
                isOpenPopup={isOpenPopupEditCard}
                onClose={handleClosePopup}
            />

            <PopupDeleteCard
                card={selectedCard}
                isOpenPopup={isOpenPopupDelCard}
                onClose={handleClosePopup}
            />

            <PopupAvatar
                isOpenPopup={isOpenPopupAvatar}
                onClose={handleClosePopup}
            />
        </>

    );
};

export default Root;