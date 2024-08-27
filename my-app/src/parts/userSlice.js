import {createSlice, nanoid} from "@reduxjs/toolkit";

// массив с данными из хранилища
const firstData = [
    {
        id: nanoid(),
        surname: 'Моя фамилия',
        name: 'Мое имя',
        lastName: 'Мое отчество',
        birth: '00.00.0000',
        avatar: 'https://i.pinimg.com/236x/1e/a5/ca/1ea5ca275a1cfbca05d1a970358090a3.jpg'
    }
]
let arrUser = firstData

export function getProfile() {
    localStorage.setItem('user', JSON.stringify(arrUser))
}

// получить данные юзера из хранилища
export function getArrData() {
    arrUser = JSON.parse(localStorage.getItem('user')) || firstData
    return arrUser
}

// изменить данные юзера и записать в хранилище
export function changeDataUser(surname, name, lastName, birth) {
    let arrUser = getArrData()
    arrUser.map((objData) => {
        objData.surname = surname
        objData.name = name
        objData.lastName = lastName
        objData.birth = birth
    })
    localStorage.setItem('user', JSON.stringify(arrUser))
}

export function changeAvatarUser(avatar) {
    let arrUser = getArrData()
    arrUser.map((objData) => {
        objData.avatar = avatar
    })
    localStorage.setItem('user', JSON.stringify(arrUser))
}

let initialData = getArrData()


const initialState = {
    user: initialData
}

const userSlice = createSlice({
        name: 'user',
        initialState,
        reducers: {

            userUpdate(state, action) {
                const {surname, name, lastName, birth} = action.payload
                const firstUser = state.user.find(user => user)

                if (firstUser) {
                    firstUser.surname = surname
                    firstUser.name = name
                    firstUser.lastName = lastName
                    firstUser.birth = birth

                    changeDataUser(surname, name, lastName, birth)
                }
            },

            avatarUpdate(state, action) {
                const {avatar} = action.payload
                const givenAvatar = state.user.find(user => user)

                if (givenAvatar) {
                    givenAvatar.avatar = avatar
                    changeAvatarUser(avatar)
                }
            }
        }
    },
)

export const {userUpdate, avatarUpdate} = userSlice.actions

export default userSlice.reducer


// получить данные юзера
export const selectUser = (state) =>
    state.user.user.map((el) => el)




