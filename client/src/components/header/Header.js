import { useState } from 'react'
import { motion } from 'framer-motion'

import { Email, Menu, Logo, Button } from '../UI/Menu_UI'
import { CloseButton } from '../UI/UI'

import './header.sass'

const Fullscreen = ( props ) => {

    const transition = {
        duration: 0.2,
        ease: [0.87, 0, 0.13, 1]
    }

    const fullscreenVariants = {
        open: {
            transform: 'scale3d(1,1,1)',
            opacity: 1,
            transition
        },
        close: {
            transform: 'scale3d(0,1,1)',
            opacity: 0,
            transition
        }
    }

    return (
        <motion.div
            animate={ props.open ? "open" : "close" }
            variants={ fullscreenVariants }
            className="fullscreen"
        >

        </motion.div>
    )
}

const Header = () => {
    const [open, setToggle] = useState( false )
    const [news, setNews] = useState( true )

    const toggleFullscreen = () => {
        setToggle( !open )
    }

    const onCloseNews = () => {
        setNews( !news )
    }

    return (
        <>
            <header className="header">
                <div className="header__top">
                    <div className="header__top__button">
                        <Button className="c-button-element"/>
                    </div>
                </div>
                <div className={ "header__left " + ( !news ? 'hide-news' : '' ) }>
                    <div className="header__left__news">
                        <div className="news-text__block">
                            <div className="news-text__block__container">
                                <div className="news-text__block__container__relative">
                                    <p className='small news-text'>Future-proof skills are now on your schedule</p>
                                </div>
                            </div>
                            <CloseButton
                                className='news-close'
                                onClick={ onCloseNews }></CloseButton>
                        </div>
                    </div>
                    <div className="header__left__menu">
                        <div className='menu__block'>
                            <Logo className="c-logo-element"/>
                            <Menu
                                onClick={ toggleFullscreen }
                                className={ "c-menu-element " + ( open ? 'menu-icon-active' : '' ) }/>
                            <Email
                                className="c-email-element"/>
                        </div>
                    </div>
                </div>
            </header>
            <Fullscreen open={ open }/>
        </>
    )
}

export default Header