import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import AuthService from '../../services/AuthService'
import axios from 'axios'
import { API_URL } from '../../http'


const initialState = {
    isLogin: true,
    user: null,
    isLoading: true,
    isError: false
}

export const authLogin = createAsyncThunk(
    'authorizationPage/authLogin',
    (  { email, password } ) => {
        const response = AuthService.login( email, password )
                            .then( res => {
                                localStorage.setItem( 'token', res.data.accessToken )
                                return res.data
                            } )
        return response
    }
)

export const authRegistration = createAsyncThunk(
    'authorizationPage/authRegistration',
    ( { email, password } ) => {
        const response = AuthService.registration( email, password )
                            .then( res => {
                                localStorage.setItem( 'token', res.data.accessToken )
                                return res.data
                            } )
        return response
    }
)

export const authLogout = createAsyncThunk(
    'authorization/authLogout',
    () => {
        AuthService.logout().then( res => { localStorage.removeItem( 'token' ) } )
        return null
    }
)

export const checkAuth = createAsyncThunk(
    'authorizationPage/checkAuth',
    () => {
        const response = axios.get( `${API_URL}/auth/refresh`, {withCredentials: true} )
                            .then( res => {
                                localStorage.setItem( 'token', res.data.accessToken )
                                return res.data
                            } )
        return response
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
            // Login
            .addCase( authLogin.pending, state => { state.isLoading = true } )
            .addCase( authLogin.fulfilled, ( state, action ) => {
                state.isLoading = false
                state.user = action.payload
            } )
            .addCase( authLogin.rejected, state => {
                state.isLoading = false
                state.isError = true
            } )
            // Registration
            .addCase( authRegistration.pending, state => { state.isLoading = true } )
            .addCase( authRegistration.fulfilled, ( state, action ) => {
                state.isLoading = false
                state.user = action.payload
            } )
            .addCase( authRegistration.rejected, state => {
                state.isLoading = false
                state.isError = true
            } )
            // Logout
            .addCase( authLogout.pending, state => { state.isLoading = true } )
            .addCase( authLogout.fulfilled, ( state, action ) => {
                state.isLoading = false
                state.user = action.payload
            } )
            .addCase( authLogout.rejected, state => {
                state.isLoading = false
                state.isError = true
            } )
            // Refresh
            .addCase( checkAuth.pending, state => { state.isLoading = true } )
            .addCase( checkAuth.fulfilled, ( state, action ) => {
                state.isLoading = false
                state.user = action.payload
            } )
            .addCase( checkAuth.rejected, state => {
                state.isLoading = false
                state.isError = true
            } )
    }
})


const { actions, reducer } = authorizationSlice

export default reducer
export const {
    setIsLogin
} = actions