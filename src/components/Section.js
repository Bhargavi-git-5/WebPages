import React from 'react';

const Section = React.forwardRef((props, ref) => {
  const { title, content, backgroundImage, className, id } = props;

  return (
    <section
      ref={ref}
      id={id}
      className={`section ${className}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="section-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </section>
  );
});

export default Section;
