import { createSlice } from '@reduxjs/toolkit'

import { User } from 'types'

interface UserState {
    user: User | null
    isLoggedIn: boolean
}

const initialState:UserState = {
    user: null,
    isLoggedIn: false,
}

const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.isLoggedIn = true
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logout: (state) => {
            state.user = null
            state.isLoggedIn = false
        }
    }
})

export const { login, logout } = user.actions
export default user.reducer