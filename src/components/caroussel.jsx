import prevPic from "../assets/prev-pic.svg";
import nextPic from "../assets/next-pic.svg";
import { useEffect, useState } from "react";

function Caroussel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedImages, setDisplayedImages] = useState([]);
    const [isAnimating, setIsAnimating] = useState(false);

    const createImage = (src, index, className) => (
        <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className={`caroussel__image ${className}`}
        />
    );

    const handlePrevClick = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        const prevIndex = currentIndex === 0 ? pictures.length - 1 : currentIndex - 1;
        
        setDisplayedImages([
            createImage(pictures[currentIndex], currentIndex, "animate-slideout-right"),
            createImage(pictures[prevIndex], prevIndex, "animate-slidein-left")
        ]);
        
        setCurrentIndex(prevIndex);
        setTimeout(() => setIsAnimating(false), 500);
    };

    const handleNextClick = () => {
        if (isAnimating) return;
        setIsAnimating(true);
        const nextIndex = currentIndex === pictures.length - 1 ? 0 : currentIndex + 1;
        
        setDisplayedImages([
            createImage(pictures[currentIndex], currentIndex, "animate-slideout-left"),
            createImage(pictures[nextIndex], nextIndex, "animate-slidein-right")
        ]);
        
        setCurrentIndex(nextIndex);
        setTimeout(() => setIsAnimating(false), 500);
    };

    useEffect(() => {
        setDisplayedImages([createImage(pictures[0], 0, "")]);
    }, []);

    return (
        <div id="caroussel">
            {pictures.length > 1 && 
                <div className="caroussel__container">
                    <img id="prev" className="skip-button" src={prevPic} alt="Previous image button" onClick={handlePrevClick} />
                    {displayedImages}
                    <div id="caroussel__counter">
                        <span>{currentIndex + 1 + "/" + pictures.length}</span>
                    </div>
                    <img id="next" className="skip-button" src={nextPic} alt="Next image button" onClick={handleNextClick} />
                </div>
            }
            {displayedImages.length === 1 && 
                <div className="caroussel__container">
                    <img
                        src={pictures[0]}
                        alt="Image 1"
                        className="caroussel__image"
                    />
                </div>
            }
        </div>
    );
}

export default Caroussel;