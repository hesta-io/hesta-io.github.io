import React, { useState } from "react";
import { testimonials } from "@/data";

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(
    testimonials[0]
  );
  const [selectedThumbnail, setSelectedThumbnail] = useState(0);
  const handleTestimonialClick = (testimonial, index) => {
    setSelectedTestimonial(testimonial);
    setSelectedThumbnail(index);
  };

  return (
    <div className="testimonials-cont">
      <div className="testimonials-page max-w">
        <div className="testimonials-thumbnails testimonial-active">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-thumbnail  ${
                selectedThumbnail === index ? "selected" : ""
              }`}
              onClick={() => handleTestimonialClick(testimonial, index)}
            >
              <img
                style={{ borderRadius: 100 }}
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <h1>{testimonial.name}</h1>
                <p>{testimonial.placement}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonials-review">
          {selectedTestimonial ? (
            <>
              <h2>{selectedTestimonial.name}</h2>
              <span>{selectedTestimonial.placement}</span>
              <img src={selectedTestimonial.rating} alt="" />
              <p>{selectedTestimonial.review}</p>
            </>
          ) : (
            <p>Select a testimonial to read their review.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
