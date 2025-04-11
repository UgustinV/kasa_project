import { NavLink } from "react-router";

function GalleryElement({ cover, title, id }) {
    const redirectLink = `/logement?id=${id}`;
    return (
        <div className="gallery__element">
            <NavLink to={redirectLink} end>
                <img src={cover} alt={title} />
                <h2>{title}</h2>
            </NavLink>
        </div>
    );
}

export default GalleryElement;