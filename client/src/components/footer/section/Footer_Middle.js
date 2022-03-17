import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import '../footer.sass'

import Input_UI from '../../../components/UI/inputUI/InputUI'
import { CircleArrowButton } from '../../UI/UI'


const FooterMiddle = () => {

    const onSubmit = event => {
        event.preventDefault()
    }

    return (
        <footer className="footer footer-middle">
            <div className="site-container">
                <div className="footer__middle">
                    <div className="footer-column">
                        <h4 className="footer-subscrie sub-title">Subscribe to<br/>our newsleters?</h4>
                        <div className="sub-email">
                            <Formik
                                initialValues={ {
                                    email: ''
                                } }
                                validationSchema={
                                    Yup.object( {
                                        email: Yup.string().email('Email is encorrectly!'),
                                    } )
                                }
                                onSubmit={ onSubmit }
                            >
                                <Form className="sub-email__form">
                                    <Input_UI
                                        label="Email"
                                        type="email"
                                        name="email"
                                        id="email"
                                    />
                                    <CircleArrowButton dataColor="light" className="sub-email__form__submit" type="submit"/>
                                </Form>
                            </Formik>
                        </div>
                    </div>    
                </div>
            </div>
        </footer>
    )
}

export default FooterMiddle