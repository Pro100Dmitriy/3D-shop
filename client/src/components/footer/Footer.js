import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import './footer.sass'

import img1 from '../../resourse/MainSlide02.jpg'
import img2 from '../../resourse/MainSlide01.jpg'
import { ReactComponent as RightArrow } from '../../resourse/icon/Arrow_Right.svg'
import { ReactComponent as Telegram } from '../../resourse/icon/Telegram.svg'
import { ReactComponent as Vk } from '../../resourse/icon/VK.svg'
import { ReactComponent as Facebook } from '../../resourse/icon/Facebook.svg'
import { ReactComponent as Instagram } from '../../resourse/icon/Instagram.svg'

import { StrokeLinkButton } from '../UI/UI'
import Input_UI from '../../components/UI/inputUI/InputUI'

const Footer = () => {
    const columnLeft = useRef(null)
    const columnRight = useRef(null)

    const onMouseMove = event => {
        event.target.classList.add( 'on-hover' )
    }

    const onMouseLeave = event => {
        event.target.classList.remove( 'on-hover' )
    }

    const onSubmit = event => {
        event.preventDefault()
    }

    return (
        <>
            <footer className="footer footer-top">
                <div className="site-container">
                    <div className="footer__top">
                        <div className="footer__top__column footer-column--left">
                            <div className="footer-page">
                                <Link
                                    ref={ columnLeft } 
                                    to="/" 
                                    className="footer-page__bg"
                                    onMouseMove={ onMouseMove }
                                    onMouseLeave={ onMouseLeave }
                                >
                                    <i 
                                        className="footer-page__bg__img"
                                        style={ { backgroundImage: `url(${ img1 })` } }
                                        
                                    ></i>    
                                </Link>
                                <h6 className="h6 footer-page__title">Reviews</h6>
                                <p className="regular footer-page__text">Take a look at what we've created and get inspired.</p>
                                <StrokeLinkButton to="/" className="footer-page__link">View Reviews</StrokeLinkButton>
                            </div>
                        </div>
                        <div className="footer__top__column footer-column--right">
                            <div className="footer-page">
                                <Link
                                    ref={ columnRight } 
                                    to="/"
                                    className="footer-page__bg"
                                    onMouseMove={ onMouseMove }
                                    onMouseLeave={ onMouseLeave }
                                >
                                    <i 
                                        className="footer-page__bg__img"
                                        style={ { backgroundImage: `url(${ img2 })` } }
                                    ></i>    
                                </Link>
                                <h6 className="h6 footer-page__title">Tutorials</h6>
                                <p className="regular footer-page__text">Take a look at what we've created and get inspired.</p>
                                <StrokeLinkButton to="/" className="footer-page__link">View Totorials</StrokeLinkButton>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-middle">
                <div className="site-container">
                    <div className="footer__middle">
                        <div className="footer-column">
                            <h4 className="sub-title">Subscribe to<br/>our newsleters?</h4>
                            <div className="sub-email">
                                <Formik
                                    initialValues={ {
                                        email: ''
                                    } }
                                    validationSchema={
                                        Yup.object( {
                                            email: Yup.string().email('Email is encorrectly!'),
                                        } )
                                    }
                                    onSubmit={ onSubmit }
                                >
                                    <Form className="sub-email__form">
                                        <Input_UI
                                            label="Email"
                                            type="email"
                                            name="email"
                                            id="email"
                                        />
                                        <button className="sub-email__form__submit" type="submit">
                                            <RightArrow/>
                                        </button>
                                    </Form>
                                </Formik>
                            </div>
                        </div>    
                    </div>
                </div>
            </footer>
            <footer className="footer footer-bottom">
                <div className="site-container">
                    <div className="footer__bottom">
                        <div className="footer-column footer-column--left">
                            <ul className="footer-links">
                                <li className="footer-links__item"><Link className="regular" to="./">Contacts</Link></li>
                                <li className="footer-links__item"><Link className="regular" to="./">FAQs</Link></li>
                                <li className="footer-links__item"><Link className="regular" to="./">My account</Link></li>
                                <li className="footer-links__item"><Link className="regular" to="./">Wishlist</Link></li>
                            </ul>
                            <ul className="footer-links">
                                <li className="footer-links__item"><Link className="regular" to="./">Delivery</Link></li>
                                <li className="footer-links__item"><Link className="regular" to="./">Payment</Link></li>
                                <li className="footer-links__item"><Link className="regular" to="./">Return</Link></li>
                                <li className="footer-links__item"><Link className="regular" to="./">Sizes guide</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column footer-column--right">
                            <div className="footer__mails">
                                <p className="footer__mails__parag">
                                    Support!<br/>
                                    <a href="mailto:support@ashop.com">support@ashop.com</a>
                                </p>
                                <p className="footer__mails__parag">
                                    Join us!<br/>
                                    <a href="mailto:contact@ashop.com">contact@ashop.com</a>
                                </p>
                            </div>
                            <article className="footer__addres">
                                <a className="footer__addres__link" href="#">
                                    BornArt<br/>
                                    Nezalegnasty, Minsk
                                </a>
                                <ul className="contact-info">
                                    <li className="contact-info__item"><a href="tel: +375 25 939 11 36" className="tel-link">t: +385 99 999-93-34</a></li>
                                </ul>
                            </article>
                        </div>
                    </div>
                    <div className="footer__social-wrapper">
                        <div className="footer-column footer-collumn--right">
                            <a href="#" className="footer__social"><Telegram/></a>
                            <a href="#" className="footer__social"><Vk/></a>
                            <a href="#" className="footer__social"><Facebook/></a>
                            <a href="#" className="footer__social"><Instagram/></a>
                        </div>
                    </div>
                    <div className="footer__bar">
                        <div className="footer-column">
                            <ul className="footer__bar__link">
                                <li className="footer__bar__link__item"><Link to="./">Shop</Link></li>
                                <li className="footer__bar__link__item"><Link to="./">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="footer-column">
                            <p>© BornArt. All rights reserved 2022</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer