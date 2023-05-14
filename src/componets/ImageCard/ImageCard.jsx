import React, { useState } from 'react';


const ImageCard = ({ imageUrl, title, link, disc}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = () => {
    window.open('https://www.facebook.com', '_blank'); // Replace with your desired website URL
  };

  

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
     <div className='imagecard-cont'>
        <div
            className={`ImageCard ${isHovering ? 'ImageCard--hover' : ''}`}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >
            <div className="ImageCard__overlay" />
            <img src={imageUrl} alt={title} className="ImageCard__image" />
            {/* <a className="ImageCard__title">{title}</a> */}
        </div>
        <div className='imagecard-bottom'>
            <h1>{title}</h1>
            <p>{disc}</p>
        </div>
    </div>
  );
};

export default ImageCard;