import { NavLink } from 'react-router-dom'

import '../footer.sass'

import { ReactComponent as Telegram } from '../../../resourse/icon/Telegram.svg'
import { ReactComponent as Vk } from '../../../resourse/icon/VK.svg'
import { ReactComponent as Facebook } from '../../../resourse/icon/Facebook.svg'
import { ReactComponent as Instagram } from '../../../resourse/icon/Instagram.svg'

import { FootStrLink } from '../../UI/UI'


const FooterBottom = () => {
    return (
        <footer className="footer footer-bottom">
            <div className="site-container">
                <div className="footer__bottom">
                    <div className="footer-column footer-column--left">
                        <ul className="footer-links">
                            <li className="footer-links__item"><FootStrLink dataColor="light" to="./">Contacts</FootStrLink></li>
                            <li className="footer-links__item"><FootStrLink dataColor="light" to="./">FAQs</FootStrLink></li>
                            <li className="footer-links__item"><FootStrLink dataColor="light" to="./">My account</FootStrLink></li>
                            <li className="footer-links__item"><FootStrLink dataColor="light" to="./">Wishlist</FootStrLink></li>
                        </ul>
                        <ul className="footer-links">
                            <li className="footer-links__item"><FootStrLink dataColor="light" to="./">Delivery</FootStrLink></li>
                            <li className="footer-links__item"><FootStrLink dataColor="light" to="./">Payment</FootStrLink></li>
                            <li className="footer-links__item"><FootStrLink dataColor="light" to="./">Return</FootStrLink></li>
                            <li className="footer-links__item"><FootStrLink dataColor="light" to="./">Sizes guide</FootStrLink></li>
                        </ul>
                    </div>
                    <div className="footer-column footer-column--right">
                        <div className="footer__mails">
                            <p className="h6 footer__mails__parag">
                                Support!<br/>
                                <FootStrLink notNavLin={ true } dataColor="light" to="mailto:support@ashop.com">support@ashop.com</FootStrLink>
                            </p>
                            <p className="h6 footer__mails__parag">
                                Join us!<br/>
                                <FootStrLink notNavLin={ true } dataColor="light" to="mailto:contact@ashop.com">contact@ashop.com</FootStrLink>
                            </p>
                        </div>
                        <article className="footer__addres">
                            <a className="regular footer__addres__link" href="#">
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
                            <li className="footer__bar__link__item"><FootStrLink dataColor="light" className="regular" to="./">Shop</FootStrLink></li>
                            <li className="footer__bar__link__item"><FootStrLink dataColor="light" className="regular" to="./">Contact</FootStrLink></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <p className="regular">© BornArt. All rights reserved 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterBottom