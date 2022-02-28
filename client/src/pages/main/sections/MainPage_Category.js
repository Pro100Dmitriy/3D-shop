import { useSelector } from 'react-redux'
import { motion } from 'framer-motion'

import '../mainPage.sass'

const Category = () => {
    const categoryList = useSelector( state => state.mainPage.category )

    const render = ( array ) => {
        const newItem = array.map( (item, i) => {
            const { id, name, imgSrc } = item

            const transition = {
                duration: 1,
                ease: [0.87, 0, 0.13, 1],
                delay: i * 0.1
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
            const imgAnimation = {
                offscreen: {
                    top: '80%',
                    transition
                },
                onscreen: {
                    top: '50%',
                    transition
                }
            }

            return (
                <li
                    key={ id }
                    className='category__list__item'
                >
                    <figure className='media'>
                        <motion.i
                            className="media__wrapper"
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={ wrapperAnimation }
                            viewport={{ once: true, amount: 0.8 }}
                        ></motion.i>
                        <motion.img
                            className='media__image'
                            initial="offscreen"
                            whileInView="onscreen"
                            variants={ imgAnimation }
                            viewport={{ once: true }}
                            src={ imgSrc } alt={ name } />
                    </figure>
                    <h3 className='h3'>{ name }</h3>
                </li>
            )
        } )

        return (
            <ul className="category__list">
                { newItem }
            </ul>
        )
    }

    const list = render( categoryList )
    return (
        <section className="category">
            <div className="full-container">
                { list }
            </div>
        </section>
    )
}

export default Category