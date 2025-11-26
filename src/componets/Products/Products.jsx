import React from 'react'
import { ImageCard } from '..'
import { imageData } from "../../data/index"
import { useState, useEffect, useRef } from 'react';


function AnimatedComponent({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className={`animated-component ${isVisible ? 'visible' : ''}`} ref={ref}>
      {children}
    </div>
  );
}

  const Products = () => {
    const [isLastVisible, setIsLastVisible] = useState(false);
    const lastRef = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsLastVisible(true);
          }
        },
        {
          rootMargin: '0px',
          threshold: 0.1,
        }
      );
  
      if (lastRef.current) {
        observer.observe(lastRef.current);
      }
  
      return () => {
        if (lastRef.current) {
          observer.unobserve(lastRef.current);
        }
      };
    }, []);
    return (
    <div className='product-cont max-w'>
      <h1>Our Work</h1>
    <div className="product-row">
    <AnimatedComponent>

    {imageData.slice(0, 1).map((data) => (
    <ImageCard key={data.id} imageUrl={data.imageUrl} title={data.title} link={data.link} disc={data.discription} featured={data.featured}/>
    ))}
    </ AnimatedComponent>
    <AnimatedComponent>
    {imageData.slice(1, 2).map((data) => (
    <ImageCard key={data.id} imageUrl={data.imageUrl} title={data.title} link={data.link} disc={data.discription}/>
    ))}
    </ AnimatedComponent>
    </div>

    <div className="product-row">
    <AnimatedComponent>

    {imageData.slice(2, 3).map((data) => (
    <ImageCard key={data.id} imageUrl={data.imageUrl} title={data.title} link={data.link} disc={data.discription}/>
    ))}
    </ AnimatedComponent>
    <AnimatedComponent>
    {imageData.slice(3, 4).map((data) => (
    <ImageCard key={data.id} imageUrl={data.imageUrl} title={data.title} link={data.link} disc={data.discription}/>
    ))}
    </ AnimatedComponent>
    </div>

    <div className="product-row">
    <AnimatedComponent>

    {imageData.slice(4, 5).map((data) => (
    <ImageCard key={data.id} imageUrl={data.imageUrl} title={data.title} link={data.link} disc={data.discription}/>
    ))}
    </ AnimatedComponent>
    <AnimatedComponent>
    {imageData.slice(5, 6).map((data) => (
    <ImageCard key={data.id} imageUrl={data.imageUrl} title={data.title} link={data.link} disc={data.discription}/>
    ))}
    </ AnimatedComponent>
    </div>

    </div>
    );
    };
    
    export default Products;