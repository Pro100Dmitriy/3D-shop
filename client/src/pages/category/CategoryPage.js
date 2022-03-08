import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setIsAuthorization } from './categoryPagaSlice'
import { motion } from 'framer-motion'

import HeaderMini from '../../components/header/HeaderMini'
import CategoryPage_Start from './sections/CategoryPage_Start'
import Authorization from '../authorization/Authorization'

import './categoryPage.sass'

const CategoryPage = () => {
    const isAuthorization = useSelector( state => state.categoryPage.isAuthorization )
    const animationPage = useRef( null )
    const dispatch = useDispatch()

    const rightOn = event => {
        event.preventDefault()
        dispatch( setIsAuthorization( true ) )
    }

    const variantsMenu = {
        initialOpacity: {
            opacity: '0',
        },
        animateOpacity: {
            opacity: '1',
        },
        exitOpacity: {
            opacity: '0',
        }
    }

    return (
        <div className='start-animation-page'>

            <div
                className="animation-page"
                ref={ animationPage }
                style={ isAuthorization ? { transform: 'translate( 0, -100vh )' } : { transform: 'translate( 0, 0 )' } }
            >
                <motion.div
                    className="opacity-box"
                    initial="initialOpacity"
                    animate="animateOpacity"
                    exit="exitOpacity"
                    variants={ variantsMenu }
                >
                    <HeaderMini
                        logoLink={ '../' }
                        rightText={ 'Login/Registration' }
                        rightLink={ 'authorization' }
                        rightOn={ rightOn }
                        middle={ false }
                    />
                </motion.div>
                <CategoryPage_Start/>
                <Authorization/>
            </div>

        </div>
    )
}

export default CategoryPage