import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Slider
import imgSlide1 from '../../resourse/MainSlide01.jpg'
import imgSlide2 from '../../resourse/MainSlide02.jpg'

// Category
import imgCat1 from '../../resourse/Category_01.jpg'
import imgCat2 from '../../resourse/Category_02.jpg'
import imgCat3 from '../../resourse/Category_03.jpg'
import imgCat4 from '../../resourse/Category_04.jpg'

// Product
import imgProd1 from '../../resourse/Category_01.jpg'
import imgProd2 from '../../resourse/Category_02.jpg'


const initialState = {
    slider: [
        { id: 1, title: 'Get a proven digital product team', description: 'There are many things that need to be done in order to create a successful startup. First of all, you need to understand the startup lifecycle and the market for your product. When you’re done with that, you need to know your competition.', link: './', imgUrl: imgSlide1 },
        { id: 2, title: 'Second slide label', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: './', imgUrl: imgSlide2 },
    ],
    activeSlide: 0,
    category: [
        {id: 3, name: 'Jacet', imgSrc: imgCat1},
        {id: 4, name: 'Shose', imgSrc: imgCat2},
        {id: 5, name: 'Hoodie', imgSrc: imgCat3},
        {id: 6, name: 'T-shirt', imgSrc: imgCat4},
    ],
    products: [
        {id: 7, title: 'Hoodie Space Edition', price: '80$', thumbnail: [imgProd1, imgProd2]},
        {id: 8, title: 'Hoodie Samurai Edition', price: '120$', thumbnail: [imgProd1, imgProd2]},
        {id: 9, title: 'Hoodie Black&White Edition', price: '45$', thumbnail: [imgProd1, imgProd2]},
        {id: 10, title: 'Hoodie / Hyuga Hinata', price: '140$', thumbnail: [imgProd1, imgProd2]},
        {id: 11, title: 'Hoodie / Dark Side', price: '94$', thumbnail: [imgProd1, imgProd2]},
    ],
    reviews: [
        {id: 12, name: 'Dmitry Shestak', message: '“Working with Bornfight has been reassuring and angst-free, qualities that are uncommon in the world of online product development.”'},
        {id: 13, name: 'Dmitry Shestak2', message: '“Working with asdfasf has been reassuring and angst-free, qualities that are uncommon in the world of online product development.”'},
        {id: 14, name: 'Dmitry Shestak3', message: '“Working with Basfdasxcvzxornfight has been reassuring and angst-free, qualities that are uncommon in the world of online product development.”'},
        {id: 15, name: 'Dmitry Shestak4', message: '“Working with Bornfight has been reassuring and wqe2341234angst-free, qualities that are uncommon in the world of online product development.”'}
    ]
}

const mainPageSlice = createSlice({
    name: 'mainPage',
    initialState,
    reducers: {
        changeActiveSlide: ( state, action ) => {
            state.activeSlide = action.payload
        }
    }
})

const { actions, reducer } = mainPageSlice

export default reducer
export const {
    changeActiveSlide
} = actions