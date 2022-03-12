import { motion } from 'framer-motion'

import './productItem.sass'
import { ReactComponent as LikeSvg } from '../../resourse/icon/Like.svg'
import { ReactComponent as QuickViewSvg } from '../../resourse/icon/Search.svg'

const ProductItem = (props) => {
    const { key, title, price, thumbnail, delay, small } = props

    const transition = {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
        delay
    }
    const wrapperAnimation = {
        offscreen: {
            top: '0%',
            transition
        },
        onscreen: {
            top: '-100%',
            transition
        }
    }
    
    return (
        <a key={ key } href="#" className='prod' >
            <div className={ "prod__block " + (small ? "prodSmall__block" : "") }>
                <div className="prod__block__image">
                    <figure className="media-wrapper">
                        <motion.i 
                            className='media-wrapper__mask'
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={ wrapperAnimation }
                            viewport={{ once: true, amount: 0.8 }}
                        ></motion.i>
                        <span className="media-wrapper__menu">
                            <button className="like-button"><LikeSvg/></button>
                            <button className="quick-view-button"><QuickViewSvg/></button>
                        </span>
                        <picture>
                            <img className='picture__first' src={ thumbnail[0] } alt="prod1" />
                            <img className='picture__second' src={ thumbnail[1] } alt="prod2" />
                        </picture>
                    </figure>
                </div>
                <div className="prod__block__caption">
                    <div className="caption">
                        <div className="caption__header">
                            <h4 className='h4'>{ title }</h4>
                        </div>
                        <div className="caption__content">
                            <div className="caption__content__price">
                                <p className="title regular">Price:</p>
                                <p className="number regular">{ price }</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

export default ProductItem