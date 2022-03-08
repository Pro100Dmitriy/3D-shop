import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../../services/AuthService'

const initialState = {
    isLogin: true,
    user: null,
    isLoading: true
}

export const authLogin = createAsyncThunk(
    'authorizationPage/authLogin',
    (  { email, password } ) => {
        const response = AuthService.login( email, password )
        return response
    }
)

export const authRegistration = createAsyncThunk(
    'authorizationPage/authRegistration',
    ( { email, password } ) => {
        const response = AuthService.registration( email, password )
        // localStorage.setItem( 'token', response.data.accessToken )
        return response.data
    }
)

export const checkAuth = createAsyncThunk(
    'authorizationPage/checkAuth',
    () => {
        //const response = AuthService.
    }

)

const authorizationSlice = createSlice({
    name: 'authorizationPage',
    initialState,
    reducers: {
        setIsLogin: ( state, action ) => {
            state.isLogin = !state.isLogin
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( authLogin.pending, state => { console.log( 'wait login' ) } )
            .addCase( authLogin.fulfilled, ( state, action ) => {
                console.log( action.payload.data )
                state.user = action.payload.data
            } )
            .addCase( authLogin.rejected, state => { console.log( 'login error' ) } )
            .addCase( authRegistration.pending, state => { console.log( 'wait registration' ) } )
            .addCase( authRegistration.fulfilled, ( state, action ) => {
                console.log( action.payload )
                state.user = action.payload
            } )
            .addCase( authRegistration.rejected, state => { console.log( 'registration error' ) } )
    }
})


const { actions, reducer } = authorizationSlice

export default reducer
export const {
    setIsLogin
} = actions