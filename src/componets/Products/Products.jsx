import React from 'react'
import { imageData } from "../../data/index"

const Products = () => {
  return (
    <section className='products-section' id='products'>
      <div className='max-w'>
        <div className="products-header">
          <h2 className="products-title">
            Our <span className="text-accent">Work</span>
          </h2>
          <p className="products-subtitle">
            Projects we've brought to life
          </p>
        </div>

        <div className="products-grid">
          {imageData.map((data, i) => (
            <a
              key={data.id}
              href={data.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <span className="project-number">0{i + 1}</span>
              <div className="project-body">
                <h3 className="project-name">{data.title}</h3>
                <p className="project-desc">{data.discription}</p>
              </div>
              <span className="project-visit">
                Visit
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 13L13 1M13 1H3M13 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
