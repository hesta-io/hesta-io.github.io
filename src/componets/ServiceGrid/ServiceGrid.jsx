import React from 'react';
import { dataDigitalBestSeller } from '../../data';

const ServiceGrid = () => {
  return (
    <section className="service-grid-section">
      <div className="max-w">
        <div className="service-grid">
          {dataDigitalBestSeller.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon-wrap">
                <img src={service.img} alt={service.title} width={36} height={36} />
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.disc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
