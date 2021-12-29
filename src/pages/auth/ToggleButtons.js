import { useState } from 'react'
import ButtonElement from '../../components/common/form/ButtonElement'

export default function SignInButtons() {
    const [focused, setFocused] = useState(true)

    return (
        <>
            <ButtonElement
                label="Login"
                width="100%"
                focused={focused}
                clickHandler={() => setFocused(() => true)}
            />
            <ButtonElement
                label="SignUp"
                width="100%"
                focused={!focused}
                clickHandler={() => setFocused(() => false)}
            />

            <div className="forget-password">forget password?</div>
        </>
    )
}
