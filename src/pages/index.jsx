import { Hero, About, Footer, Products, Services, ServiceGrid } from '../componets'
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
  return (
    <div className='body-box'>
      <AnimatedComponent>
        <Hero />
      </AnimatedComponent>

      <div className="parallax-group">
        <div className="parallax-anchor">
          <AnimatedComponent>
            <About />
          </AnimatedComponent>
        </div>

        <div className="parallax-overlay">
          <AnimatedComponent>
            <Services />
          </AnimatedComponent>

          <AnimatedComponent>
            <ServiceGrid />
          </AnimatedComponent>
        </div>
      </div>

      <AnimatedComponent>
        <Products />
      </AnimatedComponent>

      <AnimatedComponent>
        <Footer />
      </AnimatedComponent>
    </div>
  );
}
