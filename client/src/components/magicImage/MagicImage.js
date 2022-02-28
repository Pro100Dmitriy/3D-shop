import { useRef, useEffect } from 'react'
import svgHover from './utils/svgHover'
import { product_data } from './utils/data'

import './magicImage.sass'


const MagicImage = (props) => {
    const { key, index, img, className, alt } = props

    const $container = useRef(null)
    const $image = useRef(null)

    useEffect( () => {
        svgHover(
            $container.current,
            {
            main_svg_ID: '#main_svg',
            overflow_svg_ID: '#overlay_svg',
            img_ID: $image.current
            },
            product_data
        )
    }, [] )
    
    return (
        <div 
            key={ key } 
            className={ 'magic-image ' + className ?? '' }
            index={ index }>
            <div ref={ $container } className="magic-image__container">
                <div className="tooltip" data-el="tooltip"></div>
                { props.children }
                <img ref={ $image } className={ "magic-image__container__img " + (className ?? '') } src={ img } alt={ alt }/>
            </div>
        </div>
    )
}

export default MagicImage