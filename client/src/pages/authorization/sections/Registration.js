import { useDispatch } from 'react-redux'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import '../authorization.sass'

import { authRegistration } from '../authorizationSlice'

import InputUI from '../../../components/UI/inputUI/InputUI'
import { FillButton } from '../../../components/UI/UI'

const Registration = (props) => {
    const dispatch = useDispatch()

    const onSubmit = ( { email, password } ) => {
        dispatch( authRegistration( { email, password } ) )
    }

    return (
        <div { ...props }>
            <div className="registration">
                <Formik
                    initialValues={ {
                        email: '',
                        password: '',
                        confirmPassword: ''
                    } }
                    validationSchema={
                        Yup.object( {
                            email: Yup.string().email('Email is encorrectly!').required('This field is required!'),
                            password: Yup.string().min(6, 'At least 6 letter').required('This field is required!'),
                            confirmPassword: Yup.string().oneOf( [ Yup.ref( 'password' ) ], 'Passwords don\'t the same!' ).required('This field is required!')
                        } )
                    }
                    onSubmit={ onSubmit }
                >
                    <Form className='login__form'>
                        <h2 className="login__form__title menu-main-font">Registration</h2>
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
                        <InputUI
                            label="Confirm password"
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                        />
                        <FillButton className="login__form__submit" type="submit">Registration</FillButton>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Registration