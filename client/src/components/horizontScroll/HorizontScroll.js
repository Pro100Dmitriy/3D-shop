import { useState, useRef, useEffect } from 'react'
import { css } from '../utils/utils'

import './horizontScroll.sass'

const HorizontScroll = ( props )  => {
    const [ horizontPosition, setHorizontPosition ] = useState({
        isStart: true,
        isEnd: false
    })
    const container = useRef(null)
    const scroller = useRef(null)

    const onScroll = event => {
        event.preventDefault()
        const containerItem = container.current ?? null
        const scrollerItem = scroller.current ?? null
        const pageYOffset = window.pageYOffset
        const innerWidth = window.innerWidth
        const innerHeight = window.innerHeight
        let translate = 0

        if( !containerItem && !scrollerItem ) return

        const { top, bottom } = containerItem.getBoundingClientRect()
        const { width } = scrollerItem.getBoundingClientRect()

        let height = width - innerHeight
        let scroll = Math.abs(top)
        translate = ( 100 - ( (height - scroll) / height ) * 100 ) / 2
        
        css( containerItem, {
            height: `${ width }px`
        } )
        
        if( top > 0 ){
            css( scrollerItem, {
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 'auto',
                right: 'auto',
                zIndex: 2,
                transform: 'translateY( 0% ) translateX( 0% )'
            } )
        }else if( innerHeight > bottom ){
            css( scrollerItem, {
                position: 'absolute',
                top: 'auto',
                left: 0,
                bottom: 0,
                right: 'auto',
                zIndex: 2,
                transform: `translateY( 0% ) translateX( -50%  )`
            } )
        }else{
            css( scrollerItem, {
                position: 'fixed',
                top: 0,
                left: 0,
                bottom: 'auto',
                right: 'auto',
                zIndex: 2,
                transform: `translateY( 0% ) translateX( -${translate}% )`
            } )
        }
    }

    useEffect( () => {
        window.addEventListener( 'scroll', onScroll )

        return () => window.removeEventListener( 'scroll', onScroll )
    }, [] )

    return (
        <div
            ref={ container }
            className='horizont-scroll'
        >
            <div
                ref={ scroller }
                className='horizont-scroll__scroller'
            >
                { props.children }
            </div>
        </div>
    )
}

export default HorizontScroll



/*

const block = container.current

        const onScroll = event => {
            event.preventDefault()

            const { top } = block.getBoundingClientRect()
            const pageYOffset = window.pageYOffset

            if( top < 500 ){
                if( horizontPosition.isStart || horizontPosition.isEnd ){
                    //document.body.style.overflowY = 'scroll'
                }else{
                    //document.body.style.overflowY = 'hidden'
                }
                
                window.scrollTo( {
                    top: pageYOffset + top,
                    behavior: 'smooth'
                } )
            }
        }

        window.addEventListener( 'scroll', onScroll )
        return () => block.removeEventListener( 'scroll', onScroll )



        ----------------

const block = container.current
const scroll = scroller.current

const scrollBounding = scroll.getBoundingClientRect()
let startScroll = 0

if( block ){
    const onWheel = event => {
        event.preventDefault()

        if( startScroll < 0 ) {
            startScroll = 0
            setHorizontPosition({
                isStart: true,
                isEnd: false
            })
        }else if( startScroll > scrollBounding.width - window.innerWidth ){
            startScroll = scrollBounding.width - window.innerWidth
            setHorizontPosition({
                isStart: false,
                isEnd: true
            })
        }else{
            startScroll += event.deltaY / 2
            setHorizontPosition({
                isStart: false,
                isEnd: false
            })
        }

        scroll.style.transform = `translateY( -50% ) translateX(-${ startScroll }px)`
    }
    window.addEventListener( 'wheel', onWheel )

    return () => block.removeEventListener( 'wheel', onWheel )
}

*/