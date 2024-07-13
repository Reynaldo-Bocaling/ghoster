import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = () => {
  return (
    <section className="w-full  overflow-hidden ">
      <Marquee direction="right">
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="mx-10 text-violet-100 flexCenter gap-12">
            <h1 className="text-xl">Ghoster</h1>
            <h1 className="text-violet-500 text-2xl font-bold">*</h1>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default SlidingText;
