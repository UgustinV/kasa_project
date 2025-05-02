import redStar from '../assets/red-star.svg';
import greyStar from '../assets/grey-star.svg';

function Rating({ redStars }){
    const stars = [];
    for(let i = 0; i<5; i++){
        stars.push(
            <img key={i} src={i<redStars ? redStar : greyStar} alt={(i<redStars ? "étoile rouge " : "étoile grise ") + (i+1)} className='star' />
        )
    }

    return (
        <div id='rating'>
            {stars}
        </div>
    );
}

export default Rating;