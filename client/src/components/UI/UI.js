import React from "react"

import './UI.sass'

const CloseButton = (props) => {
    return (
        <button
            { ...props }
            className={'close-button ' + props.className }
            ></button>
    )
}

const LinkButton = (props) => {
    return (
        <a
                to={ props.to }
                className={ "link-button " + props.className }
                ><span>{ props.children }</span>
        </a>
    )
}

const MenuButton = (props) => {
    return (
        <button
            { ...props }
            className='menu-icon'>
            <span></span>
        </button>
    )
}

export { LinkButton, CloseButton, MenuButton }