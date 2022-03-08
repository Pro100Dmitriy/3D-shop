import { NavLink } from 'react-router-dom'
import './headerMini.sass'

import { ReactComponent as LogoFull } from '../../resourse/icon/Logo-full.svg'
import { ReactComponent as DoubleUp } from '../../resourse/icon/Double_Up.svg'
import { StrokeLinkButton } from '../UI/UI'

const HeaderMini = ( props ) => {
    const { logoLink, logoOn, rightText, rightLink, rightOn, middle, middleLink, middleOn } = props

    return (
        <div className='header-mini'>
            <div className="hundrid-container">
                <div className="header-mini__wrapper">
                    <div className="header-mini__wrapper__left">
                        <div className="logo-wrp">
                            <NavLink onClick={ logoOn } to={ logoLink }>
                                <LogoFull/>    
                            </NavLink>
                        </div>
                    </div>
                    {
                        middle
                        ?
                        <div className="header-mini__wrapper__mid">
                            <div className="back-wrp">
                                <NavLink onClick={ middleOn } to={ middleLink }>
                                    <DoubleUp/>
                                    <span className='small'>Go back</span>
                                </NavLink>
                            </div>
                        </div>
                        :
                        ''
                    }
                    <div className="header-mini__wrapper__right">
                        <div className="button-wrp">
                            <StrokeLinkButton onClick={ rightOn } to={ rightLink }>{ rightText }</StrokeLinkButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderMini