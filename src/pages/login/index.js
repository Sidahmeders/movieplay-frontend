import { useState } from 'react'
import { LoginContainer, InputFieldStyle, HeroStyle, ButtonsStyle } from './styles'
import TextInputElement from '../../components/common/form/TextInputElement'
import SignInButtons from './SignInButtons'
import HeroSection from './HeroSection'

const initialUserInfo = {
    email: '',
    password: ''
}

export default function LoginPage() {
    const [userInfo, setUserInfo] = useState({ ...initialUserInfo })

    const hadnleUserInfoChange = (event) => {
        const entry = event.target.name
        const value = event.target.value

        setUserInfo(() => {
            return {
                ...userInfo,
                [entry]: value
            }
        })
    }

    return (
        <>
            <LoginContainer>
                <InputFieldStyle>
                    <TextInputElement
                        label="email"
                        type="text"
                        value={userInfo.email}
                        changeHandler={hadnleUserInfoChange}
                    />
                    <TextInputElement
                        label="password"
                        type="password"
                        value={userInfo.password}
                        changeHandler={hadnleUserInfoChange}
                    />
                </InputFieldStyle>

                <ButtonsStyle>
                    <SignInButtons />
                </ButtonsStyle>

                <HeroStyle>
                    <HeroSection />
                </HeroStyle>
            </LoginContainer>
        </>
    )
}
