import { useSelector, useDispatch } from 'react-redux'

import '../authorization.sass'

import { authLogout } from '../authorizationSlice'

import { FillButton } from '../../../components/UI/UI'
import avatarProfile from '../../../resourse/avatar_profile.png'

const User = (props) => {
    const user = useSelector( state => state.authorization.user.user )
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch( authLogout() )
    }

    return (
        <div { ...props }>
            <div className="user">
                <div className="user__wrapper">
                    <h2 className="user__wrapper__title menu-main-font">User: { user.email }</h2>    
                    <div className="user__wrapper__group">
                        <figure className="group__image">
                            <img className="group__image__avatar" src={ avatarProfile } alt="user avatar"/>    
                        </figure>
                        <FillButton
                            className="group__logout"
                            onClick={ onLogout }
                        >Logout</FillButton>
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default User