// создать хранилище store, в котором будет хранится глобальное состояние нашего приложения.
import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../parts/userSlice'
import cardsReducer from '../parts/cardList/cardsSlice'


// создать store
// теперь при возникновении action все данные для слайса state.user
// будут обновляться редьюсером userReducer

// configureStore создает store и автоматически конфигурирует React DevTools Extension
export default configureStore({
        reducer: {
            user: userReducer, // импортировать редьюсер
            cards: cardsReducer,
        }
    }
)
