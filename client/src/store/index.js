import { configureStore } from '@reduxjs/toolkit'
import mainPage from '../pages/main/mainPageSlice'

const store = configureStore({
    reducer: {
        mainPage
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store