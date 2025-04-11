import '../style/components/TopImage.scss';

function TopImage({ image, alt, text=null }) {
    if(!text) {
        return(
            <div id='top-image'>
                    <img src={image} alt={alt} />
            </div>
        )
    }
    return (
        <div id='top-image'>
            <img src={image} alt={alt} />
            <p>{text}</p>
        </div>
    );
}

export default TopImage;