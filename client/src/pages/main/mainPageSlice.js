import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import useMongoServer from '../../server/MongoServer'

// Slider
import imgSlide1 from '../../resourse/MainSlide01.jpg'
import imgSlide2 from '../../resourse/MainSlide02.jpg'


const initialState = {
    slider: [
        { id: 1, title: 'Get a proven digital product team', description: 'There are many things that need to be done in order to create a successful startup. First of all, you need to understand the startup lifecycle and the market for your product. When you’re done with that, you need to know your competition.', link: './', imgUrl: imgSlide1 },
        { id: 2, title: 'Second slide label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: './', imgUrl: imgSlide2 },
    ],
    activeSlide: 0,
    category: [],
    products: [],
    reviews: [
        {id: 12, name: 'Dmitry Shestak', message: '“Working with Bornfight has been reassuring and angst-free, qualities that are uncommon in the world of online product development.”'},
        {id: 13, name: 'Dmitry Shestak2', message: '“Working with asdfasf has been reassuring and angst-free, qualities that are uncommon in the world of online product development.”'},
        {id: 14, name: 'Dmitry Shestak3', message: '“Working with Basfdasxcvzxornfight has been reassuring and angst-free, qualities that are uncommon in the world of online product development.”'},
        {id: 15, name: 'Dmitry Shestak4', message: '“Working with Bornfight has been reassuring and wqe2341234angst-free, qualities that are uncommon in the world of online product development.”'}
    ]
}

export const fetchCategory = createAsyncThunk(
    'mainPage/fetchCategory',
    () => {
        const { getAllCategories } = useMongoServer()
        return getAllCategories()
    }
)

export const fetchPositions = createAsyncThunk(
    'mainPage/fetchPositions',
    () => {
        const { getAllPositions } = useMongoServer()
        console.log( getAllPositions() )
        return getAllPositions()
    }
)

const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        changeActiveSlide: ( state, action ) => {
            state.activeSlide = action.payload
        }
    },
    extraReducers: ( builder ) => {
        builder
            .addCase( fetchCategory.pending, state => { console.log( 'category wait' ) } )
            .addCase( fetchCategory.fulfilled, ( state, action ) => {
                state.category = action.payload
            } )
            .addCase( fetchCategory.rejected, state => { console.log( 'category error' ) } )
            .addCase( fetchPositions.pending, state => { console.log( 'position wait' ) } )
            .addCase( fetchPositions.fulfilled, ( state, action ) => {
                state.products = action.payload
            } )
            .addCase( fetchPositions.rejected, state => { console.log( 'position error' ) } )
    }
})

const { actions, reducer } = mainPageSlice

export default reducer
export const {
    changeActiveSlide
} = actions