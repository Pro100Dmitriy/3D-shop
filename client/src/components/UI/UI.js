import React from "react"
import { NavLink } from "react-router-dom"

import './UI.sass'

import { ReactComponent as RightArrow } from '../../resourse/icon/Arrow_Right.svg'


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
            className={ 'stroke-link-button ' + ( props['data-color'] == 'light' ? 'SLB-light ' : 'SLB-dark ' ) + props.className }
        >{ props.children }</NavLink>
    )
}


const FootStrLink = (props) => {
    return (
        props.notNavLin
        ?
        <a
            { ...props }
            href={ props.to }
            className={ 'footer-stroke-link ' + ( props.dataColor == 'light' ? 'FSL-light ' : 'FSL-dark ' ) + props.className }
        >{ props.children }</a>
        :
        <NavLink
            { ...props }
            to={ props.to }
            className={ 'footer-stroke-link ' + ( props.dataColor == 'light' ? 'FSL-light ' : 'FSL-dark ' ) + props.className }
        >{ props.children }</NavLink>
    )
}


const CircleArrowButton = (props) => {
    return (
        <button
            { ...props }
            className={ "circle-arrow-button " + ( props.dataColor == 'light' ? 'CAB-light ' : 'CAB-dark ' ) + props.className }
        >
            <RightArrow/>
            <RightArrow/>
        </button>
    )
}


export { LinkButton, FillButton, CloseButton, MenuButton, StrokeLinkButton, FootStrLink, CircleArrowButton }