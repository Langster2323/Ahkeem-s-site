import React from 'react';

const SectionHeading = ({ eyebrow, title, children }) => (
  <div className="section-heading reveal">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {children && <p className="section-heading__intro">{children}</p>}
  </div>
);

export default SectionHeading;
