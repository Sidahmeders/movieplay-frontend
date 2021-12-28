import { useState } from 'react'
import styled from 'styled-components'

import TextInputElement from '../../components/common/form/TextInputElement'
import ButtonElement from '../../components/common/form/ButtonElement'

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: linear-gradient(#177c4d 15%, #000);
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .login {
        width: 35%;
        margin: 20px 30px;
    }

    .buttons {
        width: 35%;
        margin: 20px 30px;
        display: flex;
        border: 2px solid #4d32;
        border-radius: 4px;
    }

    .forget-password {
        color: #ff7f7f;
        text-transform: capitalize;
        margin: 0 30px;
        transition: 0.6s ease;

        &:hover {
            color: #fd3333;
            cursor: pointer;
        }
    }

    .hero {
        width: 35%;
        margin: 0 30px;
        text-align: center;

        h1 {
            font-family: 'Jost';
            letter-spacing: 5px;
            text-shadow: 0 0 #fff6;
        }

        p {
            line-height: 2;
            background: -webkit-linear-gradient(45deg, #3f3, #35f);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            text-shadow: 0 0 #fff9;
            margin-top: 16px;
        }

        .title h1:nth-child(1) {
            color: transparent;
            -webkit-text-stroke: 3px #dee;
            transform: translate(0, 45px);
        }

        .title h1:nth-child(2) {
            background: -webkit-linear-gradient(45deg, darkgreen, darkblue);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: animate 4s ease-in-out infinite;
        }
    }

    @keyframes animate {
        0%,
        100% {
            clip-path: polygon(
                0% 45%,
                16% 44%,
                33% 50%,
                54% 60%,
                70% 61%,
                84% 59%,
                100% 52%,
                100% 100%,
                0% 100%
            );
        }

        50% {
            clip-path: polygon(
                0% 60%,
                15% 65%,
                34% 66%,
                51% 62%,
                67% 50%,
                84% 45%,
                100% 46%,
                100% 100%,
                0% 100%
            );
        }
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

    const [focused, setFocused] = useState(true)
    const buttonHandler = () => setFocused(() => !focused)

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
            <div className="buttons">
                <ButtonElement
                    label="Login"
                    width="100%"
                    focused={focused}
                    clickHandler={buttonHandler}
                />
                <ButtonElement
                    label="SignUp"
                    width="100%"
                    focused={!focused}
                    clickHandler={buttonHandler}
                />
            </div>

            <div className="forget-password">forget password?</div>

            <div className="hero">
                <div className="title">
                    <h1>THE MOVIE PLAY</h1>
                    <h1>THE MOVIE PLAY</h1>
                </div>
                <p>
                    We Bring To You The Entertainment Prediciton Website Where You Can Play &
                    Predict The Outcomes Of All Movies, TV Series, Shows, Etc.
                </p>
            </div>
        </Container>
    )
}
