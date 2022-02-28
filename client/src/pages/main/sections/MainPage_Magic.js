import { useState } from 'react'
import HorizontScroll from '../../../components/horizontScroll/HorizontScroll'
import MagicImage from '../../../components/magicImage/MagicImage';

import '../mainPage.sass'

/* Svg & Image Importes */
import img01 from '../../../resourse/magicImage/01.jpg'
import Svg_01 from '../../../resourse/magicImage/Svg_01'

import img02 from '../../../resourse/magicImage/02.jpg'
import Svg_02 from '../../../resourse/magicImage/Svg_02'



const Magic = () => {
    const [ magicList, setMagicList ] = useState([
        { image: img01, SvgComponent: Svg_01 },
        { image: img02, SvgComponent: Svg_02 },
    ])

    const render = ( array ) => {
        const items = array.map( (item, i) => {
            const { image, SvgComponent } = item

            return (
                <MagicImage
                    key={ i }
                    index={ i }
                    img={ image }
                    className='owl-item__image'
                    alt="Scene 1">
                    <SvgComponent/>
                </MagicImage>
            )
        } )

        return (
            <>
                { items }
            </>
        )
    }

    const magics = render( magicList )
    return (
        <section className='magic'>
            <div className="full-container">
                <div className="slider-block">
                    <HorizontScroll>
                        { magics }
                    </HorizontScroll>
                </div>
            </div>
        </section>
    )
}

export default Magic