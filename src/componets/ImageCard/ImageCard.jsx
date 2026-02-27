import React, { useState } from 'react';

const ImageCard = ({ imageUrl, title, link, disc, featured }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <div className={`imagecard-cont ${featured ? 'imagecard-cont--featured' : ''}`}>
      {featured && <div className="featured-badge">Featured</div>}
      <a
        href={link}
        target='_blank'
        rel="noopener noreferrer"
        className={`ImageCard ${isHovering ? 'ImageCard--hover' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="ImageCard__overlay" />
        <img src={imageUrl} alt={title} className="ImageCard__image" />
      </a>
      <div className='imagecard-bottom'>
        <h3 className='imagecard-title'>{title}</h3>
        <p className='imagecard-category'>{disc}</p>
      </div>
    </div>
  );
};

export default ImageCard;
