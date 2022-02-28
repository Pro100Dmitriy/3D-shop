import { motion } from 'framer-motion'

import { To_Black_Devider, To_White_Devider } from '../../components/UI/Menu_UI'

import Header from '../../components/header/Header'
import Slider from './sections/MainPage_Slider'
import Category from './sections/MainPage_Category'
import Products from './sections/MainPage_Products'
import Magic from './sections/MainPage_Magic'
import Reviews from './sections/MainPage_Reviews'
import Instruction from './sections/MainPage_Instruction'

import './mainPage.sass'

const MainPage = () => {

    const transition = {
        duration: 1,
        ease: [0.87, 0, 0.13, 1]
    }

    const variants = {
        initial: {
            height: '100vh'
        },
        animate: {
            height: '0',
            transition
        },
        exit: {
            height: '100vh',
            transition
        }
    }

    return ( 
        <>
            <motion.div
                className="black-box"
                initial="initial"
                animate="animate"
                variants={ variants }
            ></motion.div>
            <Header/>
            <Slider/>
            <Category/>
            <To_Black_Devider/>
            <Products/>
            <To_White_Devider/>
            <Magic/>
            <To_Black_Devider/>
            <Reviews/>
            <To_White_Devider/>
            <Instruction/>
        </>
    )
}

export default MainPage