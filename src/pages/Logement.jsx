import '../style/pages/Logement.scss'
import DropDown from '../components/dropdown'
import Tag from '../components/tag';
import Rating from '../components/rating';

import { useParams } from 'react-router'


import Caroussel from '../components/caroussel';

function Logement({ data }) {
    const { id } = useParams();
    const logement = data.find(item => item.id === id);

    return (
        <div id='logement'>
            <Caroussel pictures={logement.pictures} />
            <div id="infos">
                <div id='primary-infos'>
                    <div id='title'>
                        <h1>{logement.title}</h1>
                        <h2>{logement.location}</h2>
                    </div>
                    <div id='tags'>
                        {logement.tags.map((tag) => {
                            return <Tag key={tag} name={tag} />
                        })}
                    </div>
                </div>
                <div id='secondary-infos'>
                    <div id='host'>
                        <div>
                            {logement.host.name.split(' ').map((name, index) => {
                                return <p key={index}>{name}</p>
                            })}
                        </div>
                        <img src={logement.host.picture} alt={"Photo de profil de " + logement.host.name} />
                    </div>
                    <Rating redStars={parseInt(logement.rating)} />
                </div>
            </div>
            <div id='accordions'>
                <DropDown title="Description" content={logement.description} />
                <DropDown title="Équipements" content={logement.equipments.map((equipment) => {
                    return <p key={equipment}>{equipment}</p>
                })} />
            </div>
        </div>
    )
}

export default Logement
