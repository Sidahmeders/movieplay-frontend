import styled from 'styled-components'

export const TextInputStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 5px 20px;
    position: relative;

    input {
        outline: none;
        padding: 30px 15px 25px 15px;
        font-size: 18px;
        height: 30px;
        border-radius: 5px;
        border: none;
        box-shadow: 0 0 0 2px #4442;

        ::placeholder {
            color: #444;
            font-size: 20px;
            font-weight: 100;
            text-transform: capitalize;
            transition: 0.2s;
            font-family: 'Montserrat';
        }

        &:focus {
            box-shadow: 0 0 0 2px #08f8;
            ::placeholder {
                color: #7777;
                font-size: 14px;
                transform: translate(0, -20px);
            }
        }

        &[type='password'] {
            font: caption;
        }
    }

    .password-eye {
        position: absolute;
        top: 36%;
        right: 25px;
        padding: 15px;

        &:hover {
            cursor: pointer;
        }
    }
`
