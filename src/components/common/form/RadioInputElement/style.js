import styled from 'styled-components'

export const RadioInputStyle = styled.div`
    padding: 5px 15px;
    background: #f6fff6f6;
    border-radius: 4px;
    margin: 0 10px;
    margin-top: 5px;

    h3 {
        font-size: 16px;
        margin: 5px 0;
        font-weight: 300;
        text-transform: capitalize;
    }

    .options {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .option {
            margin: 5px;

            label {
                display: flex;
                padding: 6px 30px;
                border: 2px solid gray;
                border-radius: 4px;
            }
            input[type='radio'] {
                display: none;
            }
            input[type='radio']:checked + label {
                color: aliceblue;
                background: green;
                border-color: green;
            }
        }
    }
`
