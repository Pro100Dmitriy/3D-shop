import { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

import './categoryPage.sass'
import man from '../../resourse/brooke-cagle-Ss3wTFJPAVY-unsplash.jpg'
import wooman from '../../resourse/MainSlide01.jpg'

const CategoryPage = ( props ) => {
    const left = useRef(null)
    const right = useRef(null)

    const onHoverLeft = ( event ) => {
        left.current.classList.add( 'hover' )
        left.current.classList.remove( 'overlay' )
        right.current.classList.add( 'overlay' )
        right.current.classList.remove( 'hover' )
    }

    const onHoverRight = ( event ) => {
        left.current.classList.add( 'overlay' )
        left.current.classList.remove( 'hover' )
        right.current.classList.add( 'hover' )
        right.current.classList.remove( 'overlay' )
    }

    const onLeave = ( event ) => {
        left.current.classList.remove( 'overlay' )
        left.current.classList.remove( 'hover' )
        right.current.classList.remove( 'hover' )
        right.current.classList.remove( 'overlay' )
    }

    const transition = {
        duration: 1,
        ease: [0.87, 0, 0.13, 1]
    }

    const variantsLeft = {
        initialLeft: {
            left: '20%',
        },
        animateLeft: {
            left: '100%',
            transition
        },
        exitLeft: {
            left: '20%',
            transition
        }
    }

    const variantsRight = {
        initialRight: {
            left: '0%'
        },
        animateRight: {
            left: '-100%',
            transition
        },
        exitRight: {
            left: '0%',
            transition
        }
    }

    return (
        <div className='start'>
            <div className="start__container">
                <div className="start__container__item">
                    <motion.div
                        className="black-box"
                        initial="initialLeft"
                        animate="animateLeft"
                        exit="exitLeft"
                        variants={ variantsLeft }
                    ></motion.div>
                    <NavLink to="/main/:woman">
                        <div 
                            className="item-content" 
                            ref={ left }
                            onMouseMove={ onHoverLeft }
                            onMouseLeave={ onLeave }>
                            <img src={ man } alt="Man" />
                            <div className="item-content__text text-left">
                                <h2>Man</h2>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="start__container__item">
                    <motion.div
                        className="black-box"
                        initial="initialRight"
                        animate="animateRight"
                        exit="exitRight"
                        variants={ variantsRight }
                    ></motion.div>
                    <NavLink to="/main/:man">
                        <div 
                            className="item-content"
                            ref={ right }
                            onMouseMove={ onHoverRight }
                            onMouseLeave={ onLeave }>
                            <img src={ wooman } alt="Woman" />
                            <div className="item-content__text text-right">
                                <h2>Woman</h2>
                            </div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage