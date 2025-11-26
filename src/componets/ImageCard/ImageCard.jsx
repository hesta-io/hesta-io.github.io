import React, { useState } from 'react';


const ImageCard = ({ imageUrl, title, link, disc, featured}) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleClick = ({link}) => {
    window.open({link}); // Replace with your desired website URL
  };

  

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
     <div className={`imagecard-cont ${featured ? 'imagecard-cont--featured' : ''}`}>
        {featured && <div className="featured-badge">Featured</div>}
        <div
            className={`ImageCard ${isHovering ? 'ImageCard--hover' : ''}`}

            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            target='_blank'
            >
            <div className="ImageCard__overlay" />
            <img src={imageUrl} alt={title} className="ImageCard__image" />
            <a href={link} className="ImageCard__title"></a>
        </div>
        <div className='imagecard-bottom'>
            <h1>{title}</h1>
            <p>{disc}</p>
        </div>
    </div>
  );
};

export default ImageCard;