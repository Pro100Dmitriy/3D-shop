import { useState } from 'react'
import { motion } from 'framer-motion'

import '../mainPage.sass'
import videoSrc from '../../../resourse/video/03.mp4'

const Instruction = () => {
    const [ stepList, setStepList ] = useState([
        { title: 'By on the web-site', description: 'There are many things that need to be done in order to create a successful startup. First of all, you need to understand the startup lifecycle and the market for your product. When you’re done with that, you need to know your competition.' },
        { title: 'Wait curer', description: 'There are many things that need to be done in order to create a successful startup. When you’re done with that, you need to know your competition.' },
        { title: 'Enjoy', description: 'There are many things that need to be done in order to create a successful startup. First of all.' },
    ])

    const render = array => {
        const items = array.map( ( step, i ) => {
            const { title, description } = step
            return (
                <li className="list-item">
                    <span className='list-item__numb'>{ `0${ ++i }` }</span>
                    <h3 className='h3'>{ title }</h3>
                    <p className='regular'>{ description }</p>
                </li>
            )
        } )

        return (
            <ul className="right-content__list">
                { items }
            </ul>
        )
    }

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

    const steps = render( stepList )
    return (
        <section className='instruction'>
            <div className="site-container">
                <div className="instruction__wrapper">
                    <div className="instruction__wrapper__left">
                        <figure className="wrapper-left">
                            <motion.i 
                                className='wrapper-left__mask'
                                initial="offscreen"
                                whileInView="onscreen"
                                variants={ wrapperAnimation }
                                viewport={{ once: false }}
                            ></motion.i>
                            <video className='wrapper-left__video' muted autoPlay loop playsInline src={ videoSrc } type="video/mp4"></video>
                        </figure>
                    </div>
                    <div className="instruction__wrapper__right">
                        <div className="section__tittle">
                            <h2 className="h2">Step by step.<br/> How to by our<br/> products</h2>
                        </div>
                        <div className="right-content">
                            { steps }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Instruction