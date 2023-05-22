import Head from 'next/head'

import { Navbar, ImageCard, Hero, Clients, Footer, Info1, Info2, Products, Services, Testimonials } from '../componets/'
import { Sliders } from '../constants'
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

export default function Home() {
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

    <div className='body-box'>
      <Head>
        <title>Hesta</title>
      </Head>
      <AnimatedComponent>
        <Hero />
      </AnimatedComponent>
      <AnimatedComponent>
        <Clients />
      </AnimatedComponent>
      <AnimatedComponent>
        <Info1 />
      </AnimatedComponent>
      <AnimatedComponent>
        <Services />
      </AnimatedComponent>
      <AnimatedComponent>
        <Sliders />
      </AnimatedComponent>
      <AnimatedComponent>
        <Testimonials />
      </AnimatedComponent>
      <AnimatedComponent>
        <Products />
      </AnimatedComponent>
      <AnimatedComponent className={`animated-component ${isLastVisible ? 'visible' : ''}`} ref={lastRef}>
        <Info2 />
        <Footer />
      </AnimatedComponent>
    </div>

  );
}
