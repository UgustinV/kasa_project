import '../style/Home.scss'
import bgImage from '../assets/home_background_image.png';
import GalleryElement from '../components/galleryElement';
import data from '../assets/data.json'

console.log(data)
function Home() {

    return (
        <div id='home'>
            <div id='home__title'>
                <img src={bgImage} alt="" />
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div id='home__gallery'>
                {data.map((logement) => (
                    <GalleryElement key={logement.id} cover={logement.cover} title={logement.title} />
                ))}
            </div>
        </div>
    )
}

export default Home
