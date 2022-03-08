import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import '../authorization.sass'

import { authLogin } from '../authorizationSlice'

import InputUI from '../../../components/UI/inputUI/InputUI'
import { FillButton } from '../../../components/UI/UI'

const Login = (props) => {
    const dispatch = useDispatch()

    const onSubmit = ( data ) => {
        dispatch( authLogin( data ) )
    }

    return (
        <div { ...props }>
            <div className="login">
                <Formik
                    initialValues={ {
                        email: '',
                        password: ''
                    } }
                    validationSchema={
                        Yup.object( {
                            email: Yup.string().email('Email is encorrectly!').required('This field is required!'),
                            password: Yup.string().min(2, 'At least 6 letter').required('This field is required!')
                        } )
                    }
                    onSubmit={ onSubmit }
                >
                    <Form className='login__form'>
                        <h2 className="login__form__title menu-main-font">Login</h2>
                        <InputUI
                            label="Email"
                            type="email"
                            name="email"
                            id="email"
                        />
                        <InputUI
                            label="Password"
                            type="password"
                            name="password"
                            id="password"
                        />
                        <FillButton className="login__form__submit" type="submit">Login</FillButton>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Login