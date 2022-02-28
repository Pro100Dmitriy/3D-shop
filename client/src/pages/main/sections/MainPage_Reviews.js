import { useRef } from 'react'
import { useSelector } from 'react-redux'
import Slider from 'react-slick'

import { ReactComponent as ArrowSvg } from '../../../resourse/icon/Arrow_Right.svg'

import '../mainPage.sass'

const Reviews = () => {
    const reviewsList = useSelector( state => state.mainPage.reviews )
    const reviewsSlider = useRef(null)

    const render = ( array ) => {
        const items = array.map( review => {
            const { id, name, message } = review
            return (
                <blockquote key={ id } className='reviews__list__item'>
                    <div className="review-block">
                        <p className="review-block__message reviews-font">{ message }</p>
                        <p className="review-block__author person">{ name }</p>
                    </div>
                </blockquote>
            )
        } )

        const settings = {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade: true
        }
        return (
            <Slider ref={ reviewsSlider } {...settings}>
                { items }
            </Slider>
        )
    }

    const prevSlide = event => {
        reviewsSlider.current.slickPrev()
    }

    const nextSlide = event => {
        reviewsSlider.current.slickNext()
    }
    
    const reviews = render( reviewsList )
    return (
        <section className="reviews">
            <div className="site-container">
                <div className="reviews-content">
                    <div className="section__tittle">
                        <h2 className="h2">Reviews</h2>
                    </div>
                    <div className="reviews__slider">
                        { reviews }
                    </div>
                    <div className="reviews__slider-controller">
                        <span
                            onClick={ prevSlide }
                            className='slider-prev'><ArrowSvg/></span>
                        <div className="counter">
                            <span>01/04</span>
                        </div>
                        <span
                            onClick={ nextSlide }
                            className='slider-next'><ArrowSvg/></span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Reviews