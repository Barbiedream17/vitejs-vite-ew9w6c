import React from 'react';

interface Testimonial {
  name: string;
  text: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => (
  <section className="testimonials">
    <h2>What Our Customers Say</h2>
    {testimonials.map((testimonial, index) => (
      <div key={index} className="testimonial">
        <p>"{testimonial.text}"</p>
        <h3>- {testimonial.name}</h3>
      </div>
    ))}
  </section>
);
