import { useState } from 'react'
import styled from 'styled-components'
import TextInputElement from '../../components/common/form/TextInputElement'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(#177c4d 15%, #000);
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .login {
        width: 35%;
        padding: 20px;
    }
`

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
        <Container>
            <div className="login">
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
            </div>
        </Container>
    )
}
