import { useState } from 'react'
import { useField } from 'formik'

import './inputUI.sass'

const Input_UI = ( { label, ...props} ) => {
    const [ field, meta ] = useField( props )
    const [ focus, setFocus ] = useState( false )

    const onFocus = event => {
        setFocus( true )
    }

    const onBlur = event => {
        if( event.target.value === '' ){
            setFocus( false )
        }
    }

    return (
        <div className={'login__form__group el-input-group ' +  ( focus ? 'el-focus ' : '' ) + ( meta.touched && meta.error ? 'el-error ' : '' ) }>
            <div className="el-input-group__block">
                <label
                    className="el-input-group__block__label regular"
                    htmlFor={ props.name }
                >
                    { label }
                </label>
                <input
                    { ...props }
                    { ...field }
                    className="el-input-group__block__input regular"
                    onFocus={ onFocus }
                    onBlur={ event => {
                        field.onBlur(event);
                        onBlur(event) 
                    } }
                />
            </div>
            {meta.touched && meta.error ? ( <div className="el-input-group__error regular">{ meta.error }</div> ) : null}
        </div>
    )
}

export default Input_UI