import { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Slider from 'react-slick'

import { fetchPositions } from '../mainPageSlice'

import '../mainPage.sass'
import { ReactComponent as ArrowSvg } from '../../../resourse/icon/Arrow_Right.svg'

import ProductItem from '../../../components/productItem/ProductItem'


const NewReliazes = (props) => {
    const productList = useSelector( state => state.mainPage.products )
    const sliderAvailable = useSelector( state => state.mainPage.smallProductSliderAvailabel )
    const productSlider = useRef( null )
    const dispatch = useDispatch()
    const [inView, setInView] = useState(false)

    useEffect( () => {
        document.addEventListener( 'scroll', () => {
            let sliderCoords = document.querySelector('#new-releazes').getBoundingClientRect()
            if( sliderCoords.top < 400 ){
                setInView( true )
            }
        } )
        dispatch( fetchPositions() )
    }, [] )

    const render = ( array ) => {
        const items = array.map( (item, i) => {
            const { id, title, price, thumbnail } = item
            return (
                <ProductItem 
                    key={ id }
                    title={ title }
                    price={ price }
                    thumbnail={ thumbnail }
                    inView={ inView }
                    delay={ i * 0.1 }
                    small={ true }/>
            )
        } )

        const settings = {
            dots: false,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            fade: false
        }
        return (
            <>
                {
                    sliderAvailable
                    ?
                    <Slider ref={ productSlider } {...settings}>
                        { items }
                    </Slider>
                    :
                    <div className='product__sl-replacer'>
                        { items }
                    </div>
                }
            </>
        )
    }

    const prevSlide = () => {
        productSlider.current.slickPrev()
    }

    const nextSlide = () => {
        productSlider.current.slickNext()
    }

    const newProductItems = render( productList )

    return (
        <section className="new-reliazes">
            <div className="site-container">
                <div className="product__title">
                    <h2 id="new-releazes" className="h2">New reliazes</h2>
                    <div className="product__title__controllers">
                        {
                            sliderAvailable
                            ?
                            <>
                                <span
                                    onClick={ prevSlide }
                                    className='slider-prev regular'>Prev</span>
                                <span
                                    onClick={ nextSlide } 
                                    className='slider-next regular'>Next <ArrowSvg/></span>
                            </>
                            :
                            ''
                        }
                    </div>
                </div>
                <div className="new-reliazes__slider">
                    { newProductItems }
                </div>
            </div>
        </section>
    )
}

export default NewReliazes