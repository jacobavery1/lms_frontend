import { createSlice } from '@reduxjs/toolkit'


export const userSlice = createSlice({
    name: 'user', 
    initialState: {
        value: {
            firstname: '', 
            lastname: '', 
            username: '', 
            userId: '', 
            token: ''
        }
    }, 
    reducers: {
        setUser: (state, action) => {
            state.value = {
                firstname: action.payload.firstname, 
                lastname: action.payload.lastname, 
                username: action.payload.username, 
                userId: action.payload._id, 
                token: action.payload.token
            }
        }, 
        logout: (state) => {
            state.value = {
                firstname: '', 
                lastname: '', 
                username: '', 
                userId: '', 
                token: ''
            }
        }
    }
})

export const { setUser, logout } = userSlice.actions 
export const userReducer = userSlice.reducer