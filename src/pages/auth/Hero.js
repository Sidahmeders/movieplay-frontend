import MovieGif from '../../assets/images/movie3.gif'

export default function Hero() {
    return (
        <div style={{ position: 'absolute', top: '5%', left: '10%', opacity: '0.6' }}>
            <img src={MovieGif} alt="logo" />
        </div>
    )
}
