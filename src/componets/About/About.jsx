import React from 'react';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="max-w">
        <div className="about-grid">
          <div className="about-left">
            <h2 className="about-title">
              Everything You Need to<br />
              <span className="text-accent">Grow Your Business</span>
            </h2>
            <p className="about-subtitle">
              Comprehensive digital solutions designed for every type of business
            </p>
          </div>
          <div className="about-right">
            <p className="about-text">
              At Hesta, we specialize in building innovative digital solutions that help businesses
              grow and succeed. From concept to launch, we combine creative design with cutting-edge
              technology to deliver products that users love.
            </p>
            <p className="about-text">
              Our team brings together years of experience in UI/UX design, web and mobile
              development, AI integration, and strategic consulting. We craft solutions that solve
              real problems and create lasting value.
            </p>
            <div className="about-features">
              <div className="feature-item">
                <img src="/Checkbox.svg" alt="" className="feature-check" width={20} height={20} />
                <span>User-Centered Design</span>
              </div>
              <div className="feature-item">
                <img src="/Checkbox.svg" alt="" className="feature-check" width={20} height={20} />
                <span>Modern Technologies</span>
              </div>
              <div className="feature-item">
                <img src="/Checkbox.svg" alt="" className="feature-check" width={20} height={20} />
                <span>Results-Driven Approach</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
