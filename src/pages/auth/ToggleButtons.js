import ButtonElement from '../../components/common/form/ButtonElement'

export default function SignInButtons({ focused, setFocused }) {
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
