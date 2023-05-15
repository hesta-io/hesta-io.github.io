import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { dataDigitalBestSeller } from '@/data';
import { LeftOutlined } from '@ant-design/icons';
import { RightOutlined } from '@ant-design/icons';


const Sliders = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 3,
    arrows: false,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  

  return (
    <div className="sliders">
      <Slider ref={slider} {...settings} style={{ display: 'flex' }} >
        {dataDigitalBestSeller.map((item, dataDigitalBestSeller) => (
          <div className="card" key={dataDigitalBestSeller}>
            <div className='card-img-cont'>
              <img src={item.img}/>
            </div>
            <h1>{item.title}</h1>
            <span className='card-underline'></span>
            <p>{item.disc}</p>
          </div>
        ))}
      </Slider> 
      <div className="slider-arrow-cont">
        <LeftOutlined className='arrows' onClick={() => slider?.current?.slickPrev()}/>
        <RightOutlined className='arrows' onClick={() => slider?.current?.slickNext()}/>
      </div>
    </div>
  );
}


export default Sliders
