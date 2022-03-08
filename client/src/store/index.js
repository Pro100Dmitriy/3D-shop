import { configureStore } from '@reduxjs/toolkit'
import categoryPage from '../pages/category/categoryPagaSlice'
import authorization from '../pages/authorization/authorizationSlice'
import mainPage from '../pages/main/mainPageSlice'

const store = configureStore({
    reducer: {
        categoryPage,
        authorization,
        mainPage
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store