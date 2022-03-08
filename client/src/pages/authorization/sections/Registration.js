import '../authorization.sass'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import Input_UI from '../../../components/UI/input_UI/Input_UI'
import { FillButton } from '../../../components/UI/UI'

const Registration = (props) => {
    return (
        <div { ...props }>
            <div className="registration">
                <Formik
                    initialValues={ {
                        email: '',
                        password: ''
                    } }
                    validationSchema={
                        Yup.object( {
                            email: Yup.string().email('Email is encorrectly!').required('This field is required!'),
                            password: Yup.string().min(6, 'At least 6 letter').required('This field is required!'),
                            confirmPassword: Yup.string().min(6, 'At least 6 letter').required('This field is required!')
                        } )
                    }
                >
                    <Form className='login__form'>
                        <h2 className="login__form__title menu-main-font">Registration</h2>
                        <Input_UI
                            label="Email"
                            type="email"
                            name="email"
                            id="email"
                        />
                        <Input_UI
                            label="Password"
                            type="password"
                            name="password"
                            id="password"
                        />
                        <Input_UI
                            label="Confirm password"
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                        />
                        <FillButton disabled className="login__form__submit" type="submit">Login</FillButton>
                    </Form>
                </Formik>
            </div>
        </div>
    )
}

export default Registration