import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isAuthorization: false
}

const categoryPageSlice = createSlice({
    name: 'categoryPage',
    initialState,
    reducers: {
        setIsAuthorization: ( state, action ) => {
            state.isAuthorization = action.payload
        }
    }
})


const { actions, reducer } = categoryPageSlice

export default reducer
export const {
    setIsAuthorization
} = actions