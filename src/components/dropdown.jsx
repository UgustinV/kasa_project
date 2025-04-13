import arrow from '../assets/dropdown-arrow.svg';
import '../style/components/dropdown.scss';
import { useRef, useState } from 'react';



function Dropdown({ title, content }){
    const contentHeight = useRef()
    const [isOpen, setIsOpen] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown__button" onClick={() => {
                setIsOpen(!isOpen)
                setHasInteracted(true)
            }}>
                <p>{title}</p>
                <img className={hasInteracted ? isOpen ? "rotate-down" : "rotate-up" : ""} src={arrow} alt="arrow" />
            </div>
            <div className="dropdown__content__wrapper" ref={contentHeight} style={
          isOpen
          ? { height: contentHeight.current.scrollHeight }
          : { height: "0" }
         }>
                <div>
                    <p>{content}</p>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;