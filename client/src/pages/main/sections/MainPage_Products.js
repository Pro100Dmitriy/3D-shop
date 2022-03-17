import { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Slider from 'react-slick'

import { fetchPositions } from '../mainPageSlice'

import ProductItem from '../../../components/productItem/ProductItem'

import '../mainPage.sass'
import { ReactComponent as ArrowSvg } from '../../../resourse/icon/Arrow_Right.svg'

const Products = () => {
    const productList = useSelector( state => state.mainPage.products )
    const sliderAvailable = useSelector( state => state.mainPage.bigProductSliderAvailabel )
    const productSlider = useRef( null )
    const dispatch = useDispatch()
    const [inView, setInView] = useState(false)

    useEffect( () => {
        document.addEventListener( 'scroll', () => {
            let sliderCoords = document.querySelector('#new-prod').getBoundingClientRect()
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
                    delay={ i * 0.1 }/>
            )
        } )

        const settings = {
            dots: false,
            arrows: false,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
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

    const productItems = render( productList )

    return (
        <section className="product">
            <div className="site-container">
                <div id="new-prod" className="product__title">
                    <h2 className="h2">New product</h2>
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
                <div className="product__slider">
                    { productItems }
                </div>
            </div>
        </section>
    )
}

export default Products