import { useState } from 'react'
import { TextInputStyle } from './style'
import openEye from '../../../../assets/icons/form/eye-open.svg'
import closeEye from '../../../../assets/icons/form/eye-close.svg'

export default function TextInputElement({ label, value, type, changeHandler }) {
    const [passwordVisibilty, setPasswordVisibilty] = useState(true)
    const [inputType, setInputType] = useState(type)
    const eye = passwordVisibilty ? closeEye : openEye

    const handlePasswordVisibility = () => {
        setPasswordVisibilty(() => (passwordVisibilty ? false : true))
        passwordVisibilty ? setInputType(() => 'text') : setInputType(() => 'password')
    }

    return (
        <>
            <TextInputStyle>
                <input
                    type={inputType ? inputType : 'text'}
                    name={label}
                    value={value}
                    placeholder={label}
                    onChange={changeHandler}
                    spellCheck="false"
                />
                {type === 'password' ? (
                    <img
                        className="password-eye"
                        onClick={handlePasswordVisibility}
                        width="20px"
                        src={eye}
                        alt="eye"
                    />
                ) : (
                    ''
                )}
            </TextInputStyle>
        </>
    )
}
