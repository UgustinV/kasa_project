function GalleryElement({ cover, title }) {
  return (
    <div className="gallery__element">
      <img src={cover} alt={title} />
      <h2>{title}</h2>
    </div>
  );
}

export default GalleryElement;