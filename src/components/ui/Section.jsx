import React from "react";

const Section = ({ children, id }) => {
  return (
    <section id={id} className="relative w-full">
      {children}
    </section>
  );
};

export default Section;
