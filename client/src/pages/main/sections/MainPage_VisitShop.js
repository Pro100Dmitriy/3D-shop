import { motion } from 'framer-motion'

import '../mainPage.sass'

import imageSrc from '../../../resourse/man.jpg'

import { StrokeLinkButton } from '../../../components/UI/UI'

const VisitShop = () => {

    const transition = {
        duration: 1,
        ease: [0.87, 0, 0.13, 1]
    }
    const wrapperAnimation = {
        offscreen: {
            left: '0%',
            transition
        },
        onscreen: {
            left: '100%',
            transition
        }
    }

    return (
        <section className="visit-shop">
            <div className="site-container">
                <div className="visit-shop__wrapper">
                    <div className="visit-shop__wrapper__left">
                        <figure className="wrapper-left">
                            <motion.i 
                                className='wrapper-left__mask'
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={ wrapperAnimation }
                                viewport={{ once: false }}
                            ></motion.i>
                            <img className='wrapper-left__image' src={ imageSrc } alt="Shop"/>
                        </figure>
                    </div>
                    <div className="visit-shop__wrapper__right">
                        <div className="section__tittle">
                            <h2 className="h2">Visit<br/>our<br/>3D shop</h2>
                        </div>
                        <div className="right-content">
                            <StrokeLinkButton to="/" className="right-content__link">Let's go</StrokeLinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default VisitShop