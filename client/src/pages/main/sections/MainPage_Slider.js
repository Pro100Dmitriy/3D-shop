import { useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeActiveSlide } from '../mainPageSlice'
import Slider from 'react-slick'
import { motion, AnimatePresence } from 'framer-motion'

import { LinkButton } from '../../../components/UI/UI'

import '../mainPage.sass'

const SliderMain = () => {
    const sliderList = useSelector( state => state.mainPage.slider )
    const activeSlide = useSelector( state => state.mainPage.activeSlide )
    const dispatch = useDispatch()
    const mainSlider = useRef(null)

    const [isAnimtaing, setIsAnimating] = useState(false)

    const render = array => {
        const items = array.map( (slide, indexSlide) => {
            const { id, title, description, link, imgUrl } = slide

            const transition = delay => ({
                duration: 1,
                ease: [0.87, 0, 0.13, 1],
                delay
            })

            const initial = {
                position: 'relative',
                transform: 'translateY( 90px ) translateY( 0px )',
                opacity: 0,
            }

            const animate = ( { activeTransform, activeOpacity }) => ({
                position: 'relative',
                transform: (activeSlide === indexSlide) ? activeTransform : initial.transform,
                opacity: (activeSlide === indexSlide) ? activeOpacity : initial.opacity
            })

            const sliderVariantsAnimation = {
                initial,
                animate: animate({
                    activeTransform: 'translateY( 0px ) translateY( 0px )',
                    activeOpacity: 1,
                })
            }

            return (
                <div key={ id } className="a-carousel__item">
                    <div className="a-carousel__item__image">
                        <img
                            className="a-carousel-img"
                            src={ imgUrl }
                            alt="First slide"
                        />
                    </div>
                    <div className='a-carousel__item__caption'>
                        <div className="a-carousel__item__caption__container">
                            <div className="a-title-wrapper">
                                <AnimatePresence initial={ true }>
                                    <motion.h2 className="title-block">
                                        <motion.div
                                            className="a-title a-title-1 h1"
                                            initial="initial"
                                            animate="animate"
                                            transition={ transition( 0.2 ) }
                                            variants={ sliderVariantsAnimation }
                                        >Get a proven</motion.div> 
                                        <motion.div
                                            className="a-title a-title-2 h1"
                                            initial="initial"
                                            animate="animate"
                                            transition={ transition( 0.3 ) }
                                            variants={ sliderVariantsAnimation }
                                        >digital product</motion.div> 
                                        <motion.div
                                            className="a-title a-title-3 h1"
                                            initial="initial"
                                            animate="animate"
                                            transition={ transition( 0.4 ) }
                                            variants={ sliderVariantsAnimation }
                                        >team</motion.div>
                                    </motion.h2>
                                </AnimatePresence>
                            </div>
                            <div className="a-description-wrapper">
                                <AnimatePresence initial={ true }>
                                    <motion.div 
                                        className="a-desc"
                                        initial="initial"
                                        animate="animate"
                                        transition={ transition( 0.5 ) }
                                        variants={ sliderVariantsAnimation }
                                    >
                                        <p className="regular">{ description }</p>
                                        <LinkButton to={ link } className="a-slider-button">What we do</LinkButton>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } )

        const settings = {
            dots: false,
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true,
            autoplay: true,
            autoplaySpeed: 10000,
            initialSlide: activeSlide,
            beforeChange( oldIndex, newIndex ){
                dispatch( changeActiveSlide( newIndex ) )
            }
        }
        return (
            <Slider ref={ mainSlider } {...settings} className="a-carousel">
                { items }
            </Slider>
        )
    }


    const onChangeSlider = ( { target } ) => {
        const index = target.getAttribute('data-index')
        dispatch( changeActiveSlide( index ) )
        mainSlider.current.slickGoTo( index )
        setIsAnimating(!isAnimtaing)
    }


    const createNavigation = array => {
        const nav = array.map( ( item, i ) => {
            const { title } = item

            return (
                <li className="a-navigation__list__item">
                    <p
                        className={ i == activeSlide ? "regular a-active" : "regular" }
                        data-index={ i }
                        onClick={ onChangeSlider }
                    >{ title.length > 16 ? `${ title.slice(0, 16) }...` : title.slice(0, 16) }</p>
                </li>
            )
        } )

        return (
            <div className='a-navigation'>
                <ul className="a-navigation__list">
                    { nav }
                </ul>
            </div>
        )
    }

    const sliderNavigation = createNavigation( sliderList )
    const sliders = render( sliderList )
    return (
        <section className="a-slider">
            { sliderNavigation }
            { sliders }
        </section>
    )
}

export default SliderMain