import { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './authorization.sass'

import { setIsLogin, checkAuth } from './authorizationSlice'
import { setIsAuthorization } from '../category/categoryPagaSlice'

import HeaderMini from '../../components/header/HeaderMini'
import Login from './sections/Login'
import Registration from './sections/Registration'
import User from './sections/User'


const Authorization = () => {
    const isLogin = useSelector( state => state.authorization.isLogin )
    const user = useSelector( state => state.authorization.user )
    const authorization = useRef( null )
    const dispatch = useDispatch()

    useEffect( () => {
        if( localStorage.getItem( 'token' ) ) dispatch( checkAuth() )
    }, [] )

    const middleOn = event => {
        event.preventDefault()
        dispatch( setIsAuthorization( false ) )
    }

    const rightOn = event => {
        event.preventDefault()
        dispatch( setIsLogin() )
    }

    let animationClass = {}
    if( isLogin ){
        animationClass = {
            login: {
                transform: 'translateY( 0 )',
                opacity: '1',
            },
            registration: {
                transform: 'translateY( 0 )',
                opacity: '0',
            }
        }
    }else{
        animationClass = {
            login: {
                transform: 'translateY( -100% )',
                opacity: '0',
            },
            registration: {
                transform: 'translateY( -100% )',
                opacity: '1',
            }
        }
    }

    return(
        <section 
            ref={ authorization }
            className="authorization"
        >
            <HeaderMini
                logoLink='./'
                rightText='Registration'
                rightLink='./'
                rightOn={ rightOn }
                middle={ true }
                middleLink='../'
                middleOn={ middleOn }
            />
            <div className="authorization__container">
                {
                    user
                    ?
                    <User className="authorization__container__user"/>
                    :
                    <>
                        <Login className="authorization__container__login" style={ animationClass.login }/>
                        <Registration className="authorization__container__registration" style={ animationClass.registration }/>
                    </>
                }
                
            </div>
        </section>
    )
}

export default Authorization