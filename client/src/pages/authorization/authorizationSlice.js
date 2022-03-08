import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLogin: true
}

const authorizationSlice = createSlice({
    name: 'authorizationPage',
    initialState,
    reducers: {
        setIsLogin: ( state, action ) => {
            state.isLogin = !state.isLogin
        }
    }
})


const { actions, reducer } = authorizationSlice

export default reducer
export const {
    setIsLogin
} = actions