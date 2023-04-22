import { createSlice } from '@reduxjs/toolkit'

import { Notification } from 'types'

interface NotificationState {
    notifications: Notification[]
}

const initialState:NotificationState = {
    notifications: []
}

const notification = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        add: (state, action) => {
            state.notifications.push(action.payload)
        },
        remove: (state, action) => {
            const id = action.payload
            const notification = state.notifications.find(notification => notification._id === id)
            if(notification) {
                state.notifications = state.notifications.filter(notification => notification._id !== id)
            }
        },
    }
})

export const { add, remove } = notification.actions
export default notification.reducer