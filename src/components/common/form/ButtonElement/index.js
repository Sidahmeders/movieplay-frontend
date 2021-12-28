import { ButtonStyle } from './style'

export default function ButtonElement({ label, clickHandler, width, borderRadius, focused }) {
    return (
        <>
            <ButtonStyle
                onClick={clickHandler}
                width={width}
                borderRadius={borderRadius}
                focused={focused}>
                <div>{label ? label : 'Button-Element'}</div>
            </ButtonStyle>
        </>
    )
}
