import { Link } from "react-router";
import "../style/components/galleryElement.scss";

function GalleryElement({ cover, title, id }) {
    return (
        <div className="gallery__element">
            <Link to={{
                pathname: "/logement",
                search: "?id=" + id
            }}>
                <div className="gallery__element__container">
                    <img src={cover} alt={title} />
                    <h2>{title}</h2>
                </div>
            </Link>
        </div>
    );
}

export default GalleryElement;