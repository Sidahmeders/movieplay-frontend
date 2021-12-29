import { useState } from 'react'
import { AuthContainerStyle, InputFieldStyle, HeroStyle, ButtonsStyle } from './styles'
import TextInputElement from '../../components/common/form/TextInputElement'
import ToggleButtons from './ToggleButtons'
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
            <AuthContainerStyle>
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
                    <ToggleButtons />
                </ButtonsStyle>

                <HeroStyle>
                    <HeroSection />
                </HeroStyle>
            </AuthContainerStyle>
        </>
    )
}
