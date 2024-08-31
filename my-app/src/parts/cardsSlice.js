import {createSlice, nanoid} from "@reduxjs/toolkit";

let arrCards

let initialCards = getArrCards()

const initialState = {
    cards: initialCards
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        cardAdded: {
            reducer(state, action) { // обновлять стейт
                state.cards.push(action.payload)
                sortArrayAge(state.cards)
                localStorage.setItem('cards', JSON.stringify(state.cards))

            },
            prepare(photo, year, location, age) { // возвращать объект payload со сгенерированным id и другими нашими данными:
                return {
                    payload: {
                        id: nanoid(),
                        photo,
                        year,
                        location,
                        age,
                    },
                }
            }
        },

        cardDelete: {
            reducer(state, action) {
                const {card} = action.payload
                const newArr = state.cards.filter(el => el.id !== card.id)
                localStorage.setItem('cards', JSON.stringify(newArr))
                //getArrCards()
            },
        },
        cardUpdate(state, action) {
            const {photo, year, location, age} = action.payload
            const givenCard = state.cards.find(card => card)

            if(givenCard){
                givenCard.photo = photo
                givenCard.year = year
                givenCard.location = location
                givenCard.age = age
                localStorage.setItem('cards', JSON.stringify(state.cards))
            }
        }
    }
})
export const {cardAdded, cardDelete, cardUpdate} = cardsSlice.actions
export default cardsSlice.reducer

export const selectAllCards = (state) => state.cards.cards

export function getArrCards() {
    arrCards = JSON.parse(localStorage.getItem('cards')) || []
    return arrCards
}

// сортировать фотографии по возрасту
function sortArrayAge(array) {
    array.sort((a, b) => {
        return b.age - a.age
    })
}
