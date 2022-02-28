import { useState, useEffect, useRef } from "react"

import { LinkButton, MenuButton } from "./UI"

import './Menu_UI.sass'
import { ReactComponent as LogoSvg } from "../../resourse/icon/A.svg"

const To_Black_Devider = () => {
    return <div className="black-white-devider to-black"></div>
}

const To_White_Devider = () => {
    return <div className="black-white-devider to-white"></div>
}


const withClip = ( BaseComponent ) => {
    return ( props ) => {
        const clip_container = useRef(null)
        const element_black = useRef(null)
        const element_white = useRef(null)
        const innerHeight = window.innerHeight

        const [ transform, setTransform ] = useState({
            tr1: 100,
            tr2: 100,
            tr3: 0,
            tr4: 0
        })
        const [ sizes, setSizes ] = useState({
            width: '20px',
            height: '10px'
        })


        const initSizes = () => {
            setSizes({
                width: element_black.current.getBoundingClientRect().width,
                height: element_black.current.getBoundingClientRect().height
            })
        }

        function scrollAnimation(){
            let deviders = document.querySelectorAll('.black-white-devider')
            let elemHeight = element_black.current.getBoundingClientRect().height
            let bottomSpace = innerHeight - clip_container.current.getBoundingClientRect().bottom
            let lineInWindow = null

            deviders.forEach( line => {
                let bounding = line.getBoundingClientRect().top
                if( bounding >= 0 && bounding <= innerHeight ){
                    lineInWindow = line
                }
            } )

            if( lineInWindow ){
                let bounding = lineInWindow.getBoundingClientRect().top

                if( lineInWindow.classList.contains('to-black') ){
                    let tr1 = 100 - ( (( elemHeight - (elemHeight - (innerHeight - bounding - bottomSpace))) / elemHeight ) * 100 )
                    let tr2 = - ( 100 - ( (( elemHeight - (elemHeight - (innerHeight - bounding - bottomSpace))) / elemHeight ) * 100 ) )
                    let tr3 = - (( elemHeight - (elemHeight - (innerHeight - bounding - bottomSpace))) / elemHeight ) * 100
                    let tr4 = (( elemHeight - (elemHeight - (innerHeight - bounding - bottomSpace))) / elemHeight ) * 100
                    if( tr1 <= 100 && tr2 <= 100 && tr3 <= 100 && tr4 <= 100 ){ setTransform({ tr1, tr2, tr3, tr4 }) }
                }else{
                    let tr1 = - ( (( elemHeight - (elemHeight - (innerHeight - bounding - bottomSpace))) / elemHeight ) * 100 )
                    let tr2 = (( elemHeight - (elemHeight - (innerHeight - bounding - bottomSpace))) / elemHeight ) * 100
                    let tr3 = ( 100 - ( (( elemHeight - (elemHeight - (innerHeight - bounding - bottomSpace))) / elemHeight ) * 100 ) )
                    let tr4 = - (100 - ( (( elemHeight - (elemHeight - (innerHeight - bounding - bottomSpace))) / elemHeight ) * 100 ) )
                    //console.log( tr1, tr2, tr3, tr4 )
                    if( tr1 <= 100 && tr2 <= 100 && tr3 <= 100 && tr4 <= 100 ) setTransform({ tr1, tr2, tr3, tr4 })
                }
            }

            requestAnimationFrame( scrollAnimation )
        }

        useEffect( () => {
            initSizes()
            scrollAnimation()
        }, [] )

        let clipHeader_is_black = { position: 'absolute', overflow: 'hidden', inset: '0px', transform: `translateY(${ transform.tr1 }%) translateZ(0px)` }
        let clipInner_is_black = { position: 'absolute', overflow: 'auto', inset: '0px', transform: `translateY(${ transform.tr2 }%) translateZ(0px)` }
        let clipHeader_is_white = { position: 'absolute', inset: '0px', transform: `translateY(${ transform.tr3 }%) translateZ(0px)` }
        let clipInner_is_white = { position: 'absolute', overflow: 'auto', inset: '0px', transform: `translateY(${ transform.tr4 }%) translateZ(0px)` }

        let elemSize = {
            width: `${ sizes.width }px`,
            height: `${ sizes.height }px`
        }
        return (
            <div
                ref={ clip_container }
                className={ "c-clip-element " + props.className}
                style={ elemSize }
            >
                <div className="clip-header is-black" style={ clipHeader_is_black }>
                    <div className="clip-inner" style={ clipInner_is_black }>
                        <div
                            className="c-navigation"
                            ref={ element_black }
                            style={ elemSize }
                        >
                            <BaseComponent { ...props }/>
                        </div>
                    </div>
                </div>
                <div className="clip-header is-white" style={ clipHeader_is_white }>
                    <div className="clip-inner" style={clipInner_is_white } >
                        <div
                            className="c-navigation"
                            ref={ element_white }
                            style={ elemSize }
                        >
                            <BaseComponent { ...props }/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const MenuComponent = (props) => {
    return (
        <div className="menu-el-clip">
            <MenuButton { ...props } className="menu-enter-el"/>
        </div>
    )
}

const EmailComponen = (props) => {
    return (
        <div className="email-el-clip">
            <a className="email-enter-el small" hred="#">bornArt@bornart.com</a>
        </div>
    )
}

const LogoComponent = (props) => {
    return (
        <div className="logo-el-clip">
            <LogoSvg { ...props } className="logo-enter-el"/>
        </div>
    )
}

const ButtonComponent = (props) => {
    return (
        <div className="button-el-clip">
            <LinkButton { ...props } className="button-enter-el">Go to shop</LinkButton>
        </div>
    )
}

const Menu = withClip( MenuComponent )
const Email = withClip( EmailComponen )
const Logo = withClip( LogoComponent )
const Button = withClip( ButtonComponent )


export { Email, Menu, Logo, Button, To_Black_Devider, To_White_Devider }