import bgImage from '../assets/home_background_image.png';
import GalleryElement from '../components/galleryElement';
import TopImage from '../components/topImage';

function Home({data}) {

    return (
        <div id='home'>
            <TopImage
                image={bgImage}
                alt="Paysage de montagne"
                text="Chez vous, partout et ailleurs"
            />
            <div id='home__gallery'>
                {data.map((logement) => (
                    <GalleryElement
                        key={logement.id}
                        id={logement.id}
                        cover={logement.cover}
                        title={logement.title}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
