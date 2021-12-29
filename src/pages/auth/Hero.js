import MovieGif1 from '../../assets/images/movie1.gif'
import MovieGif2 from '../../assets/images/movie2.gif'
import MovieGif3 from '../../assets/images/movie3.gif'
import MovieGif4 from '../../assets/images/movie4.gif'

const MovieGifs = [MovieGif1, MovieGif2, MovieGif3, MovieGif4]

export default function Hero() {
    return (
        <div style={{ position: 'absolute', top: '10%', left: '10%', opacity: '0.6' }}>
            <img src={MovieGifs[Math.floor(Math.random() * 4)]} alt="logo" />
        </div>
    )
}
