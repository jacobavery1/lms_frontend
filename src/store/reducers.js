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
            state.value.user = action.payload
        }
    }
})

export const { setUser } = userSlice.actions 
export const userReducer = userSlice.reducer