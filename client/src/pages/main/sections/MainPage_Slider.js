import { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeActiveSlide } from '../mainPageSlice'
import Slider from 'react-slick'

import { LinkButton } from '../../../components/UI/UI'

import '../mainPage.sass'

const SliderMain = () => {
    const sliderList = useSelector( state => state.mainPage.slider )
    const activeSlide = useSelector( state => state.mainPage.activeSlide )
    const dispatch = useDispatch()
    const mainSlider = useRef(null)


    const render = array => {
        const items = array.map( slide => {
            const { id, title, description, link, imgUrl } = slide

            return (
                <div key={ id } className='carousel__item'>
                    <div className="carousel__item__image">
                        <img
                            className="carousel-img"
                            src={ imgUrl }
                            alt="First slide"
                        />
                    </div>
                    <div className='carousel__item__caption'>
                        <div className="carousel__item__caption__container">
                            <h2 className="h1">{ title }</h2>
                            <p className="regular">{ description }</p>
                            <LinkButton to={ link }>What we do</LinkButton>
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
            <Slider ref={ mainSlider } {...settings} className="carousel">
                { items }
            </Slider>
        )
    }


    const onChangeSlider = ( { target } ) => {
        const index = target.getAttribute('data-index')
        dispatch( changeActiveSlide( index ) )
        mainSlider.current.slickGoTo( index )
    }


    const createNavigation = array => {
        const nav = array.map( ( item, i ) => {
            const { title } = item

            return (
                <li className="navigation__list__item">
                    <p
                        className={ i == activeSlide ? "regular active" : "regular" }
                        data-index={ i }
                        onClick={ onChangeSlider }
                    >{ title.length > 16 ? `${ title.slice(0, 16) }...` : title.slice(0, 16) }</p>
                </li>
            )
        } )

        return (
            <div className='navigation'>
                <ul className="navigation__list">
                    { nav }
                </ul>
            </div>
        )
    }

    const sliderNavigation = createNavigation( sliderList )
    const sliders = render( sliderList )
    return (
        <section className="slider">
            { sliderNavigation }
            { sliders }
        </section>
    )
}

export default SliderMain