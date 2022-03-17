import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, useMotionValue, useTransform } from 'framer-motion'

import '../footer.sass'

import img1 from '../../../resourse/MainSlide02.jpg'
import img2 from '../../../resourse/MainSlide01.jpg'

import { StrokeLinkButton } from '../../UI/UI'


const FooterTop = () => {
    const scaleRange = [-1.3, -1, 1, 1.3]
    const opacityRange = [0, 0.6, 0.6, 0]

    const scale1 = useMotionValue(1.3)
    const opacity1 = useTransform(scale1, scaleRange, opacityRange)

    const scale2 = useMotionValue(1.3)
    const opacity2 = useTransform(scale2, scaleRange, opacityRange)

    return (
        <footer className="footer footer-top">
            <div className="site-container">
                <div className="footer__top">
                    <div className="footer__top__column footer-column--left">
                        <div className="footer-page">
                            <NavLink to="/" className="footer-page__bg">
                                <motion.i
                                    className="footer-page__bg__img"
                                    whileHover={ {scale: 1} }
                                    style={ { backgroundImage: `url(${ img1 })`, scale: scale1, opacity: opacity1, transition: 'transform 2s ease' }  }
                                ></motion.i>    
                            </NavLink>
                            <h6 className="h6 footer-page__title">Reviews</h6>
                            <p className="regular footer-page__text">Take a look at what we've created and get inspired.</p>
                            <StrokeLinkButton data-color="light" to="/" className="footer-page__link">View Reviews</StrokeLinkButton>
                        </div>
                    </div>
                    <div className="footer__top__column footer-column--right">
                        <div className="footer-page">
                            <NavLink to="/" className="footer-page__bg">
                                <motion.i 
                                    className="footer-page__bg__img"
                                    whileHover={ {scale: 1} }
                                    style={ { backgroundImage: `url(${ img2 })`, scale: scale2, opacity: opacity2, transition: 'transform 2s ease' }  }
                                ></motion.i>    
                            </NavLink>
                            <h6 className="h6 footer-page__title">Tutorials</h6>
                            <p className="regular footer-page__text">Take a look at what we've created and get inspired.</p>
                            <StrokeLinkButton data-color="light" to="/" className="footer-page__link">View Totorials</StrokeLinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterTop