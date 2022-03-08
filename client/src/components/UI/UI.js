import React from "react"
import { NavLink } from "react-router-dom"

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

const FillButton = (props) => {
    return (
        <button
            { ...props }
            className={ "fill-button " + props.className }
            ><span>{ props.children }</span>
        </button>
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

const StrokeLinkButton = (props) => {
    return (
        <NavLink
            { ...props }
            to={ props.to }
            className={ 'stroke-link-button ' + props.className }
        >{ props.children }</NavLink>
    )
}

export { LinkButton, FillButton, CloseButton, MenuButton, StrokeLinkButton }